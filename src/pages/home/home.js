import getHeader from "./../../layout/header/header.js";
import getFooter from "./../../layout/footer/footer.js"

export default async function getHome() {
  const home = document.createElement('div')
  home.classList.add('home-page')

  const header = await getHeader()

  const response = await fetch('./src/pages/home/home.html')
  const main = await response.text()

  const footer = await getFooter()

  home.innerHTML = header + main + footer

  return home
}