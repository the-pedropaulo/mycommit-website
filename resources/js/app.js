import '../css/app.css'

document.getElementById('myInput').addEventListener('click', copyToClipboard)

function copyToClipboard() {
  let copyText = document.getElementById('installation')
  console.log(copyText.textContent)

  navigator.clipboard.writeText(copyText.textContent)

  alert('Copied the text: ' + copyText.textContent)
}
