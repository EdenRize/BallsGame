function onBallClick(elBall) {
  var newSize = +elBall.innerText + 50

  elBall.style.width = newSize + 'px'
  elBall.style.height = newSize + 'px'
  elBall.innerText = newSize
}
