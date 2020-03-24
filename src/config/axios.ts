import axios, {AxiosRequestConfig} from "axios"
import history from "./history"

const appID = "HEtRxRQ3APDWy3eHKYme5KjY"
const appSecret = "aJsNpHpJ26HyfhmuPCeWR1ip"
let n = 1
const instance = axios.create({
  baseURL: "https://gp-server.hunger-valley.com/",
  headers: {
    "t-app-id": appID,
    "t-app-secret": appSecret
  }
})

// Add a request interceptor
instance.interceptors.request.use(function (config: AxiosRequestConfig) {
  const xToken = localStorage.getItem("x-token")
  if (xToken) {
    config.headers["Authorization"] = `Bearer ${xToken}`
  }
  return config
}, function (error) {
  console.error(error)
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  if (response.headers["x-token"]) {
    localStorage.setItem("x-token", response.headers["x-token"])
    localStorage.setItem("count", n.toString())
    n += 1
  }
  if (!localStorage.getItem("timer")) {
    localStorage.setItem("timer", "25")
  }
  return response
}, function (error) {
  if (error.response?.status === 401) {
    console.log('重定向')
    history.push('/login')
  }
  // Do something with response error
  return Promise.reject(error)
})

export default instance
