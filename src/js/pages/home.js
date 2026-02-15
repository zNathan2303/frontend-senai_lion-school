import { changePageStyle } from "../utils.js"

export default function createHome() {
  changePageStyle('home')

  // Criação do lado esquerdo da home
  const homeLeft = document.createElement('div')
  homeLeft.className = 'home-left'

  const span = document.createElement('span')
  span.textContent = 'curso'

  const p = document.createElement('p')
  p.append('Escolha um ',span,' para gerenciar')

  const imgDevices = document.createElement('img')
  imgDevices.src = './src/images/illustrations/devices.png'

  homeLeft.append(p, imgDevices)

  // Criação da imagem central
  const imgStudent = document.createElement('img')
  imgStudent.src = './src/images/illustrations/studant.png'

  // Criação do lado direito da home
  const homeRight = document.createElement('div')
  homeRight.className = 'home-right'

  const optionDS = createOption('./src/images/icons/ds-icon.svg', 'DS')
  const optionRedes = createOption('./src/images/icons/redes-icon.svg', 'REDES')

  homeRight.append(optionDS, optionRedes)

  return [homeLeft, imgStudent, homeRight]
}

function createOption(imgSrc, labelText) {
  const divOption = document.createElement('div')
  divOption.className = 'home-option'

  const img = document.createElement('img')
  img.src = imgSrc

  const p = document.createElement('p')
  p.textContent = labelText

  divOption.append(img, p)

  return divOption
}
