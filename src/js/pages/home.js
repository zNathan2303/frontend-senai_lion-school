import { getClasses } from "../services/lion-school-api.js"
import { changePageStyle } from "../utils/page-style.js"

export default async function createHomePage() {
  if (document.querySelector('nav'))
    document.querySelector('nav').remove()
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

  const classes = await getClasses()

  classes.forEach(c => {
    const props = [
      c.id,
      c.nome,
      c.sigla === 'DS' ? './src/images/icons/ds-icon.svg' : './src/images/icons/redes-icon.svg',
      c.sigla
    ]
    const option = createOption(...props)

    homeRight.append(option)
  })

  return [homeLeft, imgStudent, homeRight]
}

function createOption(classId, name, imgSrc, labelText) {
  const divOption = document.createElement('a')
  divOption.className = 'home-option'
  divOption.dataset.id = classId
  divOption.dataset.name = name
  divOption.dataset.route = ''
  divOption.href = '/turma/' + classId

  const img = document.createElement('img')
  img.src = imgSrc

  const p = document.createElement('p')
  p.textContent = labelText

  divOption.append(img, p)

  return divOption
}
