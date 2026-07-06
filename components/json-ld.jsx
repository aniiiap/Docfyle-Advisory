export function JsonLd({ data }) {
  const payload =
    data?.["@graph"] || data?.["@context"]
      ? data
      : Array.isArray(data)
        ? { "@context": "https://schema.org", "@graph": data }
        : data;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
      type="application/ld+json"
    />
  );
}
