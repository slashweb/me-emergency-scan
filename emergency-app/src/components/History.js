import DataRow from "../ui-kit/DataRow";
import CustomButton from "../ui-kit/CustomButton";
import UpdateHistoryModal from "./UpdateHistoryModal";
import {useEffect, useState} from "react";
import useMeHealthScanner from "../hooks/useMeHealthScanner";
import {decrypt, decryptArray} from "../utils/LitEncrypt";


export default function History({wallet, canEdit = false}) {
  const [property, setProperty] = useState()
  const [history, setHistory] = useState()
  const [chronicDiseases, setChronicDiseases] = useState()
  const [surgeries, setSurgeries] = useState()
  const [pathologicalHistory, setPathologicalHistory] = useState()
  const [nonPathologicalHistory, setNonPathologicalHistory] = useState()
  const [paternalFamilyInheritedPathologies, setPaternalFamilyInheritedPathologies] = useState()
  const [maternalFamilyInheritedPathologies, setMaternalFamilyInheritedPathologies] = useState()

  const contract = useMeHealthScanner()

  const init = async () => {
    setProperty(null)
    setHistory(null)
    let res = await contract.methods?.getUserHistory(wallet).call()


    const decryptedChronicDiseases = await decryptArray(res.chronicDiseases)
    const decryptedSurgeries = await decryptArray(res.surgeries)
    const decryptedPathologicalHistory = await decryptArray(res.pathologicalHistory)
    const decryptedNonPathologicalHistory = await decryptArray(res.nonPathologicalHistory)
    const decryptedPaternalFamilyInheritedPathologies = await decryptArray(res.paternalFamilyInheritedPathologies)
    const decryptedMaternalFamilyInheritedPathologies = await decryptArray(res.maternalFamilyInheritedPathologies)

    setChronicDiseases(decryptedChronicDiseases)
    setSurgeries(decryptedSurgeries)
    setPathologicalHistory(decryptedPathologicalHistory)
    setNonPathologicalHistory(decryptedNonPathologicalHistory)
    setPaternalFamilyInheritedPathologies(decryptedPaternalFamilyInheritedPathologies)
    setMaternalFamilyInheritedPathologies(decryptedMaternalFamilyInheritedPathologies)
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
        <dl className="divide-y divide-gray-100">
          <DataRow
            title='Chronic Diaseases'
            value={chronicDiseases}
          />

          {
            canEdit &&
            <CustomButton
              label='ADD'
              onCLick={() => updateHistory('chronicDiseases')}
            />
          }


          <DataRow
            title='Surgeries'
            value={surgeries}
          />
          {
            canEdit &&
            <CustomButton
              label='ADD'
              onCLick={() => updateHistory('surgeries')}
            />
          }


          <DataRow
            title='Pathological History'
            value={pathologicalHistory}
          />
          {
            canEdit &&
            <CustomButton
              label='ADD'
              onCLick={() => updateHistory('pathologicalHistory')}
            />
          }


          <DataRow
            title='Non Pathological History'
            value={nonPathologicalHistory}
          />
          {
            canEdit &&
            <CustomButton
              label='ADD'
              onCLick={() => updateHistory('nonPathologicalHistory')}
            />
          }


          <DataRow
            title='Pathernal pathologies'
            value={paternalFamilyInheritedPathologies}
          />
          {
            canEdit &&
            <CustomButton
              label='ADD'
              onCLick={() => updateHistory('paternalFamilyInheritedPathologies')}
            />
          }


          <DataRow
            title='Maternal Pathologies'
            value={maternalFamilyInheritedPathologies}
          />
          {
            canEdit &&
            <CustomButton
              label='ADD'
              onCLick={() => updateHistory('maternalFamilyInheritedPathologies')}
            />
          }

        </dl>

      </div>

      {
        property &&
        <UpdateHistoryModal
          prop={property}
          wallet={wallet}
          onItemUpdated={() => init()}
        />
      }

    </div>
  )
}
