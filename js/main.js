function onBallClick(elBall) {
  var randomInc = getRandomInt(20, 60)
  var newSize =
    +elBall.innerText + randomInc >= 400 ? 100 : +elBall.innerText + randomInc

  elBall.style.width = newSize + 'px'
  elBall.style.height = newSize + 'px'
  elBall.innerText = newSize
}
