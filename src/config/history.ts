import { createBrowserHistory } from "history"

const ENV = process.env.NODE_ENV
console.log(ENV)
let publicUrl: string = ""

if (ENV === "development") {
  publicUrl = "/"
} else if (ENV === "production") {
  publicUrl = "/fuck"
}

const history = createBrowserHistory({
  basename: publicUrl
})


export default history
