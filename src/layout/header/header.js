export default async function getHeader() {
  const response = await fetch('./src/layout/header/header.html')
  const data = await response.text()
  return data
}