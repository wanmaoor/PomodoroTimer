import axios, {AxiosRequestConfig} from "axios"

const appID = "HEtRxRQ3APDWy3eHKYme5KjY"
const appSecret = "aJsNpHpJ26HyfhmuPCeWR1ip"

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
  }
  return response
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default instance
