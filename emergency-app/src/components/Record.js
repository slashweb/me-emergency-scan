import DataRow from "../ui-kit/DataRow";
import useMeHealthScanner from "../hooks/useMeHealthScanner";
import {useEffect, useState} from "react";
import CustomButton from "../ui-kit/CustomButton";
import UpdateDruggsModal from "./UpdateDruggsModal";


export default function Record({wallet}) {

  const [data, setData] = useState()
  const [showModal, setShowModal] = useState()

  const contract = useMeHealthScanner()


  const init = async () => {
    setShowModal(false)
    let res = await contract.methods?.getUserRecord(wallet).call()
    setData(res)
  }

  useEffect(() => {
    init()
  }, [])
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">User profile</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">

          <DataRow
            title='Name'
            value={data?.record.name}
          />

          <DataRow
            title='Blood Type'
            value={data?.record.bloodType}
          />

          <DataRow
            title='Emergency Phone'
            value={data?.record.emergencyPhone}
          />

          <DataRow
            title='Emergency Name'
            value={data?.record.emergencyName}
          />

          <DataRow
            title='Allergies'
            value={data?.record.alergies}
          />

          <DataRow
            title='Chronic Conditions'
            value={data?.record.cronichConditions}
          />

          <DataRow
            title='Surgeries'
            value={data?.record.surgeries}
          />

          <DataRow
            title='Drugs'
            value={data?.record.drugs}
          />
          <CustomButton
            label='Add Drugg'
            onCLick={() => setShowModal(true)}
          />
        </dl>
        {
          showModal &&
          <UpdateDruggsModal
            wallet={wallet}
            prop='druggs'
            onItemUpdated={() => init()}
          />
        }

      </div>
    </div>
  )
}
