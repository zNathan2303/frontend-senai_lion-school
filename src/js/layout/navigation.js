export default function createNavbar() {
  const nav = document.createElement('nav')

  // --- SEÇÃO: STATUS ---
  const statusContainer = document.createElement('div')
  statusContainer.className = 'status-container'

  const statusTitle = document.createElement('p')
  statusTitle.textContent = 'Status'
  statusContainer.append(statusTitle)

  const statusFilter = document.createElement('div')
  statusFilter.className = 'status-filter'

  const statusItems = [
    { text: 'Status', selected: true },
    { text: 'Finalizado', selected: false },
    { text: 'Cursando', selected: false }
  ]

  statusItems.forEach(item => {
    const statusDiv = document.createElement('div')
    statusDiv.className = item.selected ? 'status selected' : 'status'

    const p = document.createElement('p')
    p.textContent = item.text

    const img = document.createElement('img')
    img.src = './src/images/icons/check-icon.svg'

    statusDiv.append(p, img)
    statusFilter.append(statusDiv)
  })

  statusContainer.append(statusFilter)
  nav.append(statusContainer)

  // --- SEÇÃO: LEGENDA ---
  const captionContainer = document.createElement('div')
  captionContainer.className = 'caption'

  const captionTitle = document.createElement('p')
  captionTitle.textContent = 'LEGENDA'
  captionContainer.append(captionTitle)

  captionContainer.append(
    createCaptionItem('caption-blue', 'Cursando'),
    createCaptionItem('caption-yellow', 'Cursando')
  )

  nav.append(captionContainer)

  return nav
}

function createCaptionItem(className, text) {
  const div = document.createElement('div')
  div.className = className

  const colorBox = document.createElement('div')

  const p = document.createElement('p')
  p.textContent = text

  div.append(colorBox, p)

  return div
}