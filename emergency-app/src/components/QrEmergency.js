import QRCode from "react-qr-code";
import {useAuth} from "../context/AuthContext";


export default function QrEmergency() {
  const {user} = useAuth()
  const base = 'https://near.social/#/vicbaporu.near/widget/Paramedic?patien='
  return (
    <>
      <div className='justify-center mx-auto'>
        {
          user &&
          <QRCode value={base + user.userId} className='mx-auto p-4 shadow'/>
        }

      </div>
    </>
  )
}
