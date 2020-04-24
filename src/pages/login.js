import React from "react"
import Layout from "../components/layout"

import style from "./index.module.css"

import SEO from "../components/seo"
import { useIndentity } from "../hooks/useIdentity"
import { navigate } from "gatsby"

const IndexPage = ({ history, location }) => {
  const identity = useIndentity()

  const handleLogin = () => {
    identity.on("login", () => {
      console.log("login")
      identity.close()
      navigate("/admin")
    })
    identity.open("login")
  }

  return (
    <Layout>
      <SEO title="Login" />
      <button onClick={handleLogin} className={style.button}>
        Login
      </button>
    </Layout>
  )
}

export default IndexPage
