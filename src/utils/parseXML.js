export const parseXML = (text) => {
  const parser = new DOMParser();
  const xml = parser.parseFromString(text, "text/xml");

  const items = xml.getElementsByTagName("item");

  let data = [];

  for (let item of items) {
    data.push({
      title: item.getElementsByTagName("title")[0]?.textContent || "",
      description: item.getElementsByTagName("description")[0]?.textContent || "",
      tags: item.getElementsByTagName("tags")[0]?.textContent || "",
      repo: item.getElementsByTagName("repo")[0]?.textContent || "",
      demo: item.getElementsByTagName("demo")[0]?.textContent || "",
    });
  }

  return data;
};