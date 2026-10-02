const BASE = `https://cdn.contentful.com/spaces/${import.meta.env.VITE_CF_SPACE}/environments/master`;

export async function getEntries(contentType) {
  const url = `${BASE}/entries?access_token=${import.meta.env.VITE_CF_TOKEN}&content_type=${contentType}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`CMS error: ${res.status}`);
  const data = await res.json();

  const assets = Object.fromEntries(
    (data.includes?.Asset ?? []).map((a) => [
      a.sys.id,
      "https:" + a.fields.file.url,
    ]),
  );

  return data.items.map((item) => {
    const fields = { ...item.fields };
    for (const key in fields) {
      const v = fields[key];
      if (v?.sys?.linkType === "Asset") fields[key] = assets[v.sys.id];
    }
    return fields;
  });
}
