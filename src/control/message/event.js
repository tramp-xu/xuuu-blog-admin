
  setImmediate(() => {
    process.on('message', msg => {
      let i = 0
      console.log('object')
      i++
      process.send(`${i * 10} s`)
    })
  }, 1000)
