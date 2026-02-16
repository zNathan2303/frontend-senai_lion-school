export function changePageStyle(pageName) {
  const linkCss = document.getElementById('page-style')
  linkCss.href = `/src/css/pages/${pageName}.css`
}