const getCookie = (type) => {
  const cookieStr = document.cookie
  let value = cookieStr.split('__jjal-').filter(parts => parts.indexOf(`${type}=`) > -1)[0]

  if (value) {
    value = value.split(`${type}=`)[1]
    return value
  } else {
    return undefined
  }

}

const setCookie = (name, value, exp = 1) => {
  const date = new Date()
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`
}

const deleteCookie = (name) => {
  const date = new Date('2020-01-01').toUTCString()
  document.cookie = `${name}=; expires=${date}`
}

export { getCookie, setCookie, deleteCookie }