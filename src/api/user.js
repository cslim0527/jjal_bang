const double_check_data = {
  ok: 'success',
  result: true
}

const user_data = {
  userId: 'tester',
  password: '1234'
}

const checkId = () => {
  return new Promise(res => {
    setTimeout(() => {
      res(double_check_data)
    }, 500)
  })
}

const accessLogin = (userInfo) => {
  return new Promise(res => {
    setTimeout(() => {
      if (userInfo.userId === user_data.userId && userInfo.password === user_data.password) {
        res({
          ok: true
        })
      } else {
        res({
          ok: false
        })
      }
    }, 500)
  })
}

export { checkId, accessLogin }