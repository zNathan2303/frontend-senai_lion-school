window.addEventListener('hashchange', () => {
  if (window.location.hash === '#/')
    document.querySelector('.header-voltar p').textContent = 'Sair'
  else
    document.querySelector('.header-voltar p').textContent = 'Voltar'
})

document.querySelector('.header-voltar').addEventListener('click', () => {
  if (window.history.length > 1)
    window.history.back()
  else
    window.location.href = '#/'
})
