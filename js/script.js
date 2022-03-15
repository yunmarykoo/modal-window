const board = document.querySelector('#board')
const colors = ['91F9E5', '#EEE4E1', '#CDE7B0', '#F0F7F4', '#`D9C5B2', '#DFB2F4', 'B7ADCF', '#D5B9B2']
const SQUARE_NUMBERS = 500

for (let i = 0; i < SQUARE_NUMBERS; i++) {
  const square  = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  square.addEventListener('mouseout', () => {
    removeColor(square)
  })

  board.append(square)
}

function setColor(el) {
  const color = randomColor()
  el.style.backgroundColor
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el) {
  el.style.backgroundColor = '#1d1d1d'
  el.style.boxShadow = `0 0 2px #000`
}

function randomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}