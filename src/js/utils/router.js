import createClassPage from '../pages/class.js'
import createHomePage from '../pages/home.js'
import createStudentPage from "../pages/student.js";

const app = document.getElementById('app')

const config = {
  currentPath: null
}

async function router() {
  const path = window.location.hash

  if (path === config.currentPath) return

  config.currentPath = path

  const partsOfTheRoute = path.split('/')

  if (path === '#/') {
    app.replaceChildren()
    app.append(... await createHomePage())
  } else if (
    partsOfTheRoute.length === 3 &&
    partsOfTheRoute[1].includes('turma') &&
    !isNaN(partsOfTheRoute[2])
  ) {
    app.replaceChildren()
    app.append(... await createClassPage(partsOfTheRoute[2], localStorage.getItem('className')))
  } else if (
    partsOfTheRoute.length === 3 &&
    partsOfTheRoute[1].includes('aluno') &&
    !isNaN(partsOfTheRoute[2])
  ) {
    app.replaceChildren()
    app.append(... await createStudentPage(partsOfTheRoute[2]))
  }
}

// 1. Interceptar cliques nos links
window.addEventListener('click', async e => {
  const anchor = e.target.closest('a[data-route]')
  if (!anchor) return

  e.preventDefault()

  const name = anchor.dataset.name
  if (name) {
    localStorage.setItem('className', name)
  }

  window.location.hash = anchor.getAttribute('href')
  await router()
})

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', router)

window.location.href = "/#/";