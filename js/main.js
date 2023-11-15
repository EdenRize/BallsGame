function onBallClick(elBall, maxDiameter) {
  var randomInc = getRandomInt(20, 60)
  var newSize =
    +elBall.innerText + randomInc >= maxDiameter
      ? 100
      : +elBall.innerText + randomInc

  elBall.style.width = newSize + 'px'
  elBall.style.height = newSize + 'px'
  elBall.innerText = newSize
}
