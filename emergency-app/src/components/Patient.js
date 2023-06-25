import DataRow from "../ui-kit/DataRow";
import useMeHealthScanner from "../hooks/useMeHealthScanner";
import {useEffect, useState} from "react";


export default function Patient({wallet}) {

  const [data, setData] = useState()

  const contract = useMeHealthScanner()


  const init = async () => {
    try {
      let res = await contract.methods?.getLastParamedicalData(wallet).call()
      console.log('paramedical', res)
      setData(res)
    } catch (err) {
      console.log('err', err)
    }


  }

  useEffect(() => {
    init()
  }, [])
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Last paramedical data</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">

          <DataRow
            title='Name'
            value={data?.name}
          />

          <DataRow
            title='Date'
            value={data?.date}
          />

          <DataRow
            title='Vital Signs'
            value={data?.vitalSigns}
          />

          <DataRow
            title='Status'
            value={data?.status}
          />

          <DataRow
            title='Drugs'
            value={data?.drugs}
          />

          <DataRow
            title='Procedures'
            value={data?.procedures}
          />

          <DataRow
            title='Last Meal'
            value={data?.lastMeal}
          />

        </dl>

      </div>
    </div>
  )
}
