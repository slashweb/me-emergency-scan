import TextInput from "../ui-kit/TextInput";
import CustomButton from "../ui-kit/CustomButton";
import {MAIN_LOGO} from "../constants";
import {useState} from "react";
import useMeHealthScanner from "../hooks/useMeHealthScanner";
import {useAuth} from "../context/AuthContext";

export default function Register() {

  const [name, setName] = useState()
  const [bloodType, setBloodType] = useState()
  const [emergencyPhone, setEmergencyPhone] = useState()
  const [emergencyName, setEmergencyName] = useState()
  const [alergies, setAlergies] = useState()
  const [cronichConditions, setCronichConditions] = useState()
  const [surgeries, setSurgeries] = useState()
  const [recipes, setRecipes] = useState()

  const { signIn, user } = useAuth()

  const contract = useMeHealthScanner()

  const createNewProfile = async () => {
    if (!user) {
      const authRes = await signIn()
      console.log('after login', authRes)
    }
console.log('after login', user)
    const res = await contract?.methods?.createUserProfile(
      name,
      bloodType,
      emergencyPhone,
      emergencyName,
      alergies.split(','),
      cronichConditions.split(','),
      surgeries.split(','),
      recipes.split(','))
      .send({ from: user.userId })
    console.log('res', res)
  }

  return (

    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src={MAIN_LOGO}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault()
              createNewProfile()
            }}
          >

            <TextInput
              label={'Name'}
              onChange={(val) => setName(val)}
            />

            <TextInput
              label={'Blood Type'}
              onChange={(val) => setBloodType(val)}
            />

            <TextInput
              label={'Emergency Phone'}
              onChange={(val) => setEmergencyPhone(val)}
            />

            <TextInput
              label={'Emergency Name'}
              onChange={(val) => setEmergencyName(val)}
            />

            <TextInput
              label={'Alergies'}
              onChange={(val) => setAlergies(val)}
            />

            <TextInput
              label={'Cronich Conditions'}
              onChange={(val) => setCronichConditions(val)}
            />

            <TextInput
              label={'Surgeries'}
              onChange={(val) => setSurgeries(val)}
            />

            <TextInput
              label={'Recipes'}
              onChange={(val) => setRecipes(val)}
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
