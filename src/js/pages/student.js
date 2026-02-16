import { getStudentDetails } from "../services/lion-school-api.js"
import { changePageStyle } from "../utils/page-style.js"


export default async function createStudentPage(studentId) {
  if (document.querySelector('nav'))
    document.querySelector('nav').remove()
  changePageStyle('student')

  const student = await getStudentDetails(studentId)

  const profile = document.createElement("div")
  profile.classList = "profile"

  const img = document.createElement("img")
  img.src = student.foto

  const name = document.createElement("p")
  name.textContent = student.nome

  profile.append(img, name)

  const performance = document.createElement("div")
  performance.classList = "performance"

  student.desempenho.forEach(item => {
    const container = document.createElement("div")

    const scoreNumber = document.createElement("p")
    scoreNumber.classList = "score-number"
    scoreNumber.textContent = item.valor

    const maxScore = document.createElement("div")
    maxScore.classList = "max-score"

    const currentScore = document.createElement("div")
    currentScore.classList = "current-score"

    currentScore.style.height = item.valor + "%"

    const scoreColor = item.valor > 60 ? 'var(--primary-color-500)' :
      item.valor >= 50 && item.valor <= 60 ? 'var(--secundary-color-500)' :
      'var(--alert-color)'

    currentScore.style.backgroundColor = scoreColor
    currentScore.style.boxShadow = `0 0 24px 0 ${scoreColor}`

    maxScore.append(currentScore)

    const subject = document.createElement("p")
    subject.classList = "subject"
    subject.textContent = item.categoria

    container.append(scoreNumber, maxScore, subject)

    performance.append(container)
  })

  return [profile, performance]
}