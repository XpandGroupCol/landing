import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const Modal = ({ children, open, onClose, title }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-[80%]" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center text-center px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
         
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all px-4">
                  <Dialog.Title
                    as="h3"
                    className="px-8 py-8 text-3xl font-medium uppercase leading-8 text-primary pb-6 text-center border-b-2 border-gray-300 font-ceraBold"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="px-8 py-8">
                    {children}
                  </div>
                </Dialog.Panel>
           
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal