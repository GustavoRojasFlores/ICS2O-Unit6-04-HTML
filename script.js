const button = document.getElementById('btn')
button.addEventListener('click', calculate)
const buttonBkg = button.style.backgroundColor
const buttonColor = button.style.color

function calculate () {
  const a = document.getElementById('a').value * 1
  const b = document.getElementById('b').value * 1
  const h = document.getElementById('h').value * 1

  const calc = ((a + b) / 2) * h
  
  if (calc * 0 === 0) {
    document.getElementById('output').innerHTML = calc
  } else {
    alert('Please enter a valid value')
  }
}