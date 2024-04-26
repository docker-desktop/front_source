import React, { Fragment, useEffect, useState } from 'react'
import { X } from 'react-bootstrap-icons'

import Button from './Button'

interface IActiveSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  content: string
  isOpen: boolean
  align: 'left' | 'right'
  handleHandler: () => void
}

const ActiveSidebar = ({
  children,
  title,
  content,
  isOpen,
  align,
  handleHandler,
}: IActiveSidebarProps) => {
  const [show, setShow] = useState<boolean>(isOpen)

  const align_class = align === 'left' ? 'left-0' : 'right-0'

  useEffect(() => {
    setShow(() => isOpen)
  }, [isOpen])

  return (
    <div>
      <Button variant="primary" onClick={handleHandler}>
        {content}
      </Button>
      {show && (
        <Fragment>
          <div
            id="active_sidebar"
            className={`fixed top-0 ${align_class} z-40 w-80 h-screen overflow-y-auto transition-transform duration-300 bg-gray-100 ${
              show ? 'translate-x-0' : 'translate-x-full'
            }`}
            tabIndex={-1}
            aria-labelledby="active-sidebar">
            <header id="active_sidebar_header" className="w-full">
              <div className="flex items-center justify-center p-2 text-lg">
                <span className="flex-1 text-center">{title}</span>
                <X className="cursor-pointer" onClick={handleHandler} />
              </div>
              <div
                id="ground_space_bar"
                className="w-full border-b-2 border-b-gray-700"></div>
            </header>
            <main className="p-2">{children}</main>
          </div>

          <div
            onClick={handleHandler}
            id="overlay"
            className="fixed top-0 w-full h-screen z-30 inset-0 bg-black opacity-50"></div>
        </Fragment>
      )}
    </div>
  )
}

export default ActiveSidebar
