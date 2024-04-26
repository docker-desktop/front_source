import { Fragment, useEffect, useState } from 'react'

interface IModal {
  isOpen: boolean
  children: React.ReactNode
  className?: string
}

interface IModalHead {
  children: React.ReactNode
  className?: string
}

interface IModalBody {
  children: React.ReactNode
  className?: string
}

interface IModalFooter {
  children: React.ReactNode
  className?: string
}

const Modal = ({ isOpen, children, className }: IModal) => {
  const [show, setShow] = useState<boolean>(isOpen)

  useEffect(() => {
    setShow(() => isOpen)
  }, [isOpen])

  return (
    <div
      className={`${className} ${
        show ? 'fixed' : 'hidden'
      } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="relative p-4 w-full max-w-screen-2xl max-h-full m-auto">
        <div className="relative bg-white rounded-lg shadow">{children}</div>
      </div>
    </div>
  )
}

const ModalHead = ({ children, className }: IModalHead) => {
  return (
    <div
      className={`${children} flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-gray-100`}>
      <div className="text-xl font-semibold text-gray-900">{children}</div>
    </div>
  )
}

const ModalBody = ({ children, className }: IModalBody) => {
  return <div className={`${children} p-4 md:p-5 space-y-4`}>{children}</div>
}

const ModalFooter = ({ children }: IModalFooter) => {
  return (
    <div
      className={`${children} flex items-center justify-end p-4 md:p-5 border-t gap-3 border-gray-200 rounded-b`}>
      {children}
    </div>
  )
}

Modal.Head = ModalHead
Modal.Body = ModalBody
Modal.Footer = ModalFooter

export default Modal
