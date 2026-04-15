export const exportCSV = (data) => {
  if (!data.length) return "";

  const headers = Object.keys(data[0]);

  const rows = data.map(obj =>
    headers.map(h => obj[h]).join(",")
  );

  return [headers.join(","), ...rows].join("\n");
};


