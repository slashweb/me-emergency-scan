import {Auth} from "@polybase/auth";
import {createContext, useContext, useEffect, useState} from "react";

export const authContext = createContext()
const auth = new Auth()

export const useAuth = () => {
  const context = useContext(authContext)
  if (!context) {
    throw new Error('El contexto no esta definido')
  }
  return context
}

export function AuthProvider({children}) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(false)

  const signIn = async () => await auth?.signIn({force: true})
  const signOut = async () => await auth?.signOut()

  useEffect(() => {
    setLoading(true)
    auth.onAuthUpdate(async authState => {
      if (authState) {
        setUser(authState)
      } else {
        setUser(null)
      }
      setLoading(false)
    })
  }, [])

  return <authContext.Provider
    value={{
      signIn,
      signOut,
      user,
      loading
    }}
  >
    {children}
  </authContext.Provider>
}
