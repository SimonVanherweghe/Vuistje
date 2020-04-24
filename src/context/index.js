import React, { useEffect } from "react"
import { createContext } from "react"
import netlifyIdentity from "netlify-identity-widget"
import { navigate } from "gatsby"

export const identityContext = createContext()

export const IdentityProvider = props => {
  useEffect(() => {
    netlifyIdentity.init({})
  })

  netlifyIdentity.on("logout", () => {
    console.log("logout")
    navigate("/")
  })

  return (
    <identityContext.Provider value={netlifyIdentity}>
      {props.children}
    </identityContext.Provider>
  )
}
