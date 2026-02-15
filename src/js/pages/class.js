import createNavbar from "../layout/navigation.js"
import { getStudentsByClassId } from "../services/lion-school-api.js"
import { changePageStyle } from "../utils.js"

export default async function createClass() {
  changePageStyle('class')

  document.getElementById('app').before(createNavbar())

  const students = await getStudentsByClassId(1)

  const h1 = document.createElement('h1')
  h1.textContent = 'Desenvolvimento de sistemas'

  const cardsContainer = document.createElement('div')
  cardsContainer.className = 'cards'

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