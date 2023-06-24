import {Fragment, useState} from 'react'
import {Dialog, Transition} from '@headlessui/react'
import {CheckIcon} from '@heroicons/react/24/outline'
import TextInput from "../ui-kit/TextInput";
import CustomButton from "../ui-kit/CustomButton";
import useMeHealthScanner from "../hooks/useMeHealthScanner";
import {useAuth} from "../context/AuthContext";
import Loading from "../ui-kit/Loading";

export default function UpdateHistoryModal({prop, key, wallet, onItemUpdated}) {
  const [open, setOpen] = useState(true)
  const [value, setValue] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const contract = useMeHealthScanner()
  const {user} = useAuth()

  const updateHistory = async () => {
    setIsLoading(true)
    try {
      const res = await contract.methods?.updateMedicalHistory(wallet, prop, value).send({from: user.userId})
      onItemUpdated()
    } catch (err) {
      console.log('Error saving prop ', err)
    }
    setIsLoading(false)
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
        </Transition.Child>


        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {
                isLoading ? <Loading/>
                  :
                  <Dialog.Panel
                    className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                    <div>
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true"/>
                      </div>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Adding data to user history
                        </Dialog.Title>
                        <div className="mt-2">
                          <TextInput
                            label={prop}
                            onChange={val => setValue(val)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6">
                      <CustomButton
                        label='Save'
                        onCLick={() => updateHistory()}
                      />
                    </div>
                  </Dialog.Panel>
              }
            </Transition.Child>
          </div>
        </div>

      </Dialog>
    </Transition.Root>
  )
}
