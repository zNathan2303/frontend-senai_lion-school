export default async function getFooter() {
  const response = await fetch('./src/layout/footer/footer.html')
  const data = await response.text()
  return data
}