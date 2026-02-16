import createNavbar from "../layout/navigation.js"
import { getStudentsByClassId } from "../services/lion-school-api.js"
import { changePageStyle } from "../utils/page-style.js"

export default async function createClassPage(classId, name) {
  changePageStyle('class')

  if (document.querySelector('nav'))
    document.querySelector('nav').remove()

  document.getElementById('app').before(createNavbar())

  const h1 = document.createElement('h1')
  h1.textContent = name

  const cardsContainer = document.createElement('div')
  cardsContainer.className = 'cards'

  const students = await getStudentsByClassId(classId)

  students.forEach(student => {
    const status = Math.random() > 0.5 ? 'cursando' : 'finalizado'

    const card = document.createElement('div')
    card.className = `card ${status}`

    const img = document.createElement('img')
    img.src = student.foto

    const p = document.createElement('p')
    p.textContent = student.nome

    card.append(img, p)

    card.dataset.status = status

    cardsContainer.append(card)
  })

  return [h1, cardsContainer]
}