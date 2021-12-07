const data = {
  ok: 'success',
  result: false
}

export default {
  checkId() {
    return new Promise(res => {
      setTimeout(() => {
        res(data)
      }, 500)
    })
  }
}