import TextInput from "../ui-kit/TextInput";
import CustomButton from "../ui-kit/CustomButton";
import {useState} from "react";
import useMeHealthScanner from "../hooks/useMeHealthScanner";
import {useAuth} from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

export default function DrRegister() {

  const [name, setName] = useState()
  const { signIn, user, drRecord } = useAuth()
  const navigate = useNavigate()
  const contract = useMeHealthScanner()

  const createNewDoctorProfile = async () => {
    if (!user) {
      await signIn()
    }

    if (drRecord.wallet.toUpperCase() === user.userId.toUpperCase()) {
      navigate('/dr-dashboard')
      return
    }

    const res = await contract?.methods?.createDoctor(name).send({ from: user.userId })
    console.log('res', res)
  }

  return (

    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create new doctor account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              createNewDoctorProfile()
            }}
          >

            <TextInput
              label={'Name'}
              onChange={(val) => setName(val)}
            />

            <div>
              <CustomButton
                label={'Create new account'}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
