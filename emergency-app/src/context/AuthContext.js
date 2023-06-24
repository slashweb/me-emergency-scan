import {Auth} from "@polybase/auth";
import {createContext, useContext, useEffect, useState} from "react";
import useMeHealthScanner from "../hooks/useMeHealthScanner";

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
  const [hasProfile, setHasProfile] = useState(false)

  const contract = useMeHealthScanner()

  const signIn = async () => {
    try {
      await auth?.signIn({force: true})
    } catch (err) {

    }
  }
  const signOut = async () => await auth?.signOut()

  useEffect(() => {
    setLoading(true)
    auth.onAuthUpdate(async authState => {
      if (authState) {
        // Get the user Profile from the contract
        const userRecord = await contract.methods?.getUserRecord(authState.userId).call()
        if (!userRecord.wallet) {
          setUser(authState)
          setHasProfile(false)
        } else {
          setUser(userRecord)
          setHasProfile(true)
        }
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
      loading,
      hasProfile
    }}
  >
    {children}
  </authContext.Provider>
}
