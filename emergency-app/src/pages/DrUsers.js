import QrReader from 'react-qr-scanner'
import {useState} from "react";
import CustomButton from "../ui-kit/CustomButton";

import useMeHealthScanner from "../hooks/useMeHealthScanner";
import History from "../components/History";
import Record from "../components/Record";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DrUsers() {

  const [userWallet, setUserWallet] = useState()

  const [showScanner, setShowScanner] = useState()
  const contract = useMeHealthScanner()
  const [history, setHistory] = useState()
  const [record, setRecord] = useState()

  const handleScan = async data => {
    if (data) {

      setShowScanner(false)
      const wallet = data.text
      setUserWallet(wallet)

      let res = await contract.methods?.getUserHistory(wallet).call()
      setHistory(res)

      res = await contract.methods?.getUserRecord(wallet).call()
      setRecord(res)

    }
  }

  const handleError = error => {
    console.log('error', error)
  }

  const previewStyle = {
    height: 240,
    width: 320,
  }

  return (
    <>


      <div className="bg-gray-100 px-4 py-10 sm:px-6 rounded h-full">
        <div className="flex space-x-3 justify-center">
          <div>
            <div>
              {
                showScanner ?
                  <CustomButton
                    label='Stop Scanning'
                    onCLick={() => setShowScanner(false)}
                  />
                  :
                  <CustomButton
                    label='Scan user'
                    onCLick={() => setShowScanner(true)}
                  />
              }

            </div>
            <div>
              {
                showScanner &&
                <QrReader
                  className='mt-2'
                  delay={300}
                  style={previewStyle}
                  onError={handleError}
                  onScan={handleScan}
                />
              }

            </div>
          </div>
        </div>
      </div>


      {
        record &&
        <div className="bg-gray-100 px-4 py-10 sm:px-6 mt-4 rounded h-full">
          <Record
            data={record}
            wallet={userWallet}
          />
        </div>
      }


      {
        (userWallet) &&
        <div className="bg-gray-100 px-4 py-10 sm:px-6 mt-4 rounded h-full">
          <History
            wallet={userWallet}
            canEdit={true}
          />
        </div>
      }


    </>
  )
}
