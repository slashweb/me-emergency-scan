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
  const [userRecord, setUserRecord] = useState()
  const [drRecord, setDrRecord] = useState()

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
        const userRecord = await contract.methods?.getUserRecord(authState.userId).call()
        setUserRecord(userRecord)

        const drRecord = await contract.methods?.getDoctorData(authState.userId).call()
        setDrRecord(drRecord)

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
      loading,
      hasProfile,
      userRecord,
      drRecord
    }}
  >
    {children}
  </authContext.Provider>
}
