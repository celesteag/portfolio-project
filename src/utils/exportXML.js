export const exportXML = (data) => {
  return `<projects>
${data.map(item => `
  <project>
    <title>${item.title}</title>
    <description>${item.description}</description>
    <tags>${item.tags}</tags>
    <repo>${item.repo}</repo>
    <demo>${item.demo}</demo>
  </project>
`).join("")}
</projects>`;
};