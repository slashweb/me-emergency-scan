import History from "../components/History";
import {useAuth} from "../context/AuthContext";
import Record from "../components/Record";
import Patient from "../components/Patient";

export default function Dashboard() {

  const {user} = useAuth()

  return (

    <>
      <div className='h-full w-full'>

        {
          user &&
          <>
            <div className='bg-gray-100 p-10 shadow rounded '>
              <Record
                wallet={user.userId}
              />
            </div>
            <div className='bg-gray-100 p-10 shadow rounded mt-5'>
              <Patient
                wallet={user.userId}
              />
            </div>
            <div className='bg-gray-100 p-10 shadow rounded mt-5'>
              <History
                wallet={user.userId}
              />
            </div>
          </>
        }


      </div>
    </>
  )
}
