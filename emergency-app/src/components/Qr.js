import QRCode from "react-qr-code";
import {useAuth} from "../context/AuthContext";


export default function Qr() {
  const {user} = useAuth()
  return (
    <>
      <div className='justify-center mx-auto'>
        {
          user &&
          <QRCode value={user.userId} className='mx-auto p-4 shadow'/>
        }

      </div>
    </>
  )
}
