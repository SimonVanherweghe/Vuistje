import { useContext } from "react"
import { identityContext } from "../context"

export const useIndentity = () => useContext(identityContext)
