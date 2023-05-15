import React, { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Style from './style'
import { AiOutlineClose } from 'react-icons/ai'

interface IProps {
    children: ReactNode,
    close: () => void
}

const ModalV2 = ({ children, close }: IProps) => {
    useEffect(() => {
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "unset"
        }
    }, [])

    return createPortal(
        <Style>
            <div className="overlay" onClick={close}></div>
            <div className="container">
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <div className="head">
                        <button className='close_modal_btn' onClick={close}>
                            <AiOutlineClose className='close_modal_btn_icon' />
                        </button>
                    </div>
                    <div className="modal_body">
                        {children}
                    </div>
                </div>
            </div>
        </Style>
        , document.getElementById("modal_portal") as HTMLElement)
}

export default ModalV2