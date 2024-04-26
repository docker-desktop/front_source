import { Fragment, useEffect, useState } from 'react'

interface IActiveModal {
  buttonElement: React.ReactNode
  isOpen: boolean
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

interface IActiveModalHead {
  children: React.ReactNode
  className?: string
}

interface IActiveModalBody {
  children: React.ReactNode
  className?: string
}

interface IActiveModalFooter {
  children: React.ReactNode
  className?: string
}

const ActiveModal = ({
  buttonElement,
  isOpen,
  children,
  className,
  size,
}: IActiveModal) => {
  const [show, setShow] = useState<boolean>(isOpen)
  let modalSize = ''

  switch (size) {
    case 'sm':
      modalSize = 'w-[20%]'
      break
    case 'md':
      modalSize = 'w-[30%]'
      break
    case 'lg':
      modalSize = 'w-[50%]'
      break
    default:
      modalSize = 'w-full'
  }

  useEffect(() => {
    setShow(() => isOpen)
  }, [isOpen])

  return (
    <Fragment>
      {buttonElement}

      <div
        className={`${className} ${
          show ? 'fixed' : 'hidden'
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}>
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className={`relative p-4 max-w-screen-lg max-h-full m-auto ${modalSize}`}>
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {children}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const ActiveModalHead = ({ children, className }: IActiveModalHead) => {
  return (
    <div
      className={`${className} flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-gray-100`}>
      <div className="text-xl font-semibold text-gray-900 dark:text-black">
        {children}
      </div>
    </div>
  )
}

const ActiveModalBody = ({ children, className }: IActiveModalBody) => {
  return <div className={`${className} p-4 md:p-5 space-y-4`}>{children}</div>
}

const ActiveModalFooter = ({ children, className }: IActiveModalFooter) => {
  return (
    <div
      className={`${className} flex items-center justify-end p-4 md:p-5 border-t gap-3 border-gray-200 rounded-b`}>
      {children}
    </div>
  )
}

ActiveModal.Head = ActiveModalHead
ActiveModal.Body = ActiveModalBody
ActiveModal.Footer = ActiveModalFooter

export default ActiveModal
