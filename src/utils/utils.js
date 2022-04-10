import axios from "axios"

const getCSRFToken = ()=>{
  let csrfToken

  // the browser's cookies for this page are all in one string, separated by semi-colons
  const cookies = document.cookie.split(';')
  for ( let cookie of cookies ) {
      // individual cookies have their key and value separated by an equal sign
      const crumbs = cookie.split('=')
      if ( crumbs[0].trim() === 'csrftoken') {
          csrfToken = crumbs[1]
      }
  }
  return csrfToken
}
axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()

export const logIn = (userName, passWord) => {
  let params = {
    username : userName,
    password : passWord
  }

  axios.post('login/', params).then((response)=>{ 
    if (response.data.username){
      window.location.href= '#/'
      window.location.reload()
    }
  })
}

export const logOut = async () => {
  await axios.post("logout/")
  window.location.href= '#/'
  window.location.reload()
}

export const whoAmI = async (setUser) => {
  const response = await axios.get("whoami/")
  console.log("whoami", response.data.user)

  const user = response.data.user
  setUser(user)
}
