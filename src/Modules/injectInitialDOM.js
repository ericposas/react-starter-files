function injectInitialDOM() {
  document.title = ``
  document.head.innerHTML += `<meta name='viewport' content='width=device-width, initial-scale=1'>`
  document.body.innerHTML += `<div id='root'></div>`
  return document.querySelector(`#root`)
}

export default injectInitialDOM
