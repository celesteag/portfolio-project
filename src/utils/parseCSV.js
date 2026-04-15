export const parseCSV = (text) => {
  const lines = text.split("\n");
  const headers = lines[0].split(",");

  return lines.slice(1).map(line => {
    const values = line.split(",");

    let obj = {};

    headers.forEach((header, i) => {
      obj[header.trim()] = values[i]?.trim();
    });

    return obj;
  });
};