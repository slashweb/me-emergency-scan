import QrReader from 'react-qr-scanner'
import {useState} from "react";
import CustomButton from "../ui-kit/CustomButton";

import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, StarIcon} from '@heroicons/react/20/solid'
import useMeHealthScanner from "../hooks/useMeHealthScanner";
import History from "../components/History";
import Record from "../components/Record";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DrUsers() {

  const [key, setKey] = useState()
  const [userWallet, setUserWallet] = useState()

  const [showScanner, setShowScanner] = useState()
  const contract = useMeHealthScanner()
  const [history, setHistory] = useState()
  const [record, setRecord] = useState()

  const handleScan = async data => {
    if (data) {

      setShowScanner(false)
      const wallet = data.text.split('|')[0]
      setKey(data.text.split('|')[1])
      setUserWallet(wallet)

      let res = await contract.methods?.getUserHistory(wallet).call()
      setHistory(res)

      console.log('history', res)
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
            key={key}
            wallet={userWallet}
          />
        </div>
      }


      {
        (key && userWallet) &&
        <div className="bg-gray-100 px-4 py-10 sm:px-6 mt-4 rounded h-full">
          <History
            key={key}
            wallet={userWallet}
          />
        </div>
      }


    </>
  )
}
