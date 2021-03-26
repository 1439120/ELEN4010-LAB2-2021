const sleep = function (sleepDuration) { // A function that blocks
  const now = new Date().getTime()
  while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}
console.log('Starting')
sleep(10000)
console.log('Done, doing other things')
