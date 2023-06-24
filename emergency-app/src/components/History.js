import DataRow from "../ui-kit/DataRow";
import CustomButton from "../ui-kit/CustomButton";
import UpdateHistoryModal from "./UpdateHistoryModal";
import {useEffect, useState} from "react";
import useMeHealthScanner from "../hooks/useMeHealthScanner";
import {decrypt} from "../utils/LitEncrypt";


export default function History({wallet, key}) {
  const [property, setProperty] = useState()
  const [history, setHistory] = useState()

  const contract = useMeHealthScanner()
  
  const init = async () => {
    setProperty(null)
    setHistory(null)
    let res = await contract.methods?.getUserHistory(wallet).call()

    console.log('hist', res.chronicDiseases[0])
    const decrypt = await getDecryptData(res.chronicDiseases[0])
    console.log('decrypt', decrypt)
    setHistory(res)
  }
  useEffect(() => {
    init()
  }, [])
  const updateHistory = prop => {
    setProperty(prop)
  }

  const getDecryptData = async data => {
    const res = await decrypt(data)
  }

  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">User Medical History</h3>
      </div>
      <div className="mt-6 border-t border-gray-100">
        {
          history &&
          <dl className="divide-y divide-gray-100">
            <DataRow
              title='Chronic Diaseases'
              value={history?.chronicDiseases}
            />
            <CustomButton
              label='ADD'
              onCLick={() => updateHistory('chronicDiseases')}
            />

            <DataRow
              title='Surgeries'
              value={history?.surgeries}
            />
            <CustomButton
              label='ADD'
              onCLick={() => updateHistory('surgeries')}
            />

            <DataRow
              title='Pathological History'
              value={history?.pathologicalHistory}
            />
            <CustomButton
              label='ADD'
              onCLick={() => updateHistory('pathologicalHistory')}
            />

            <DataRow
              title='Non Pathological History'
              value={history?.nonPathologicalHistory}
            />
            <CustomButton
              label='ADD'
              onCLick={() => updateHistory('nonPathologicalHistory')}
            />

            <DataRow
              title='Pathernal pathologies'
              value={history?.paternalFamilyInheritedPathologies}
            />
            <CustomButton
              label='ADD'
              onCLick={() => updateHistory('paternalFamilyInheritedPathologies')}
            />

            <DataRow
              title='Maternal Pathologies'
              value={history?.martenalFamilyInheritedPathologies}
            />
            <CustomButton
              label='ADD'
              onCLick={() => updateHistory('martenalFamilyInheritedPathologies')}
            />
          </dl>
        }

      </div>

      {
        property &&
        <UpdateHistoryModal
          prop={property}
          key={key}
          wallet={wallet}
          onItemUpdated={() => init()}
        />
      }

    </div>
  )
}
