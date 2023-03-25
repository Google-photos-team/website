import React from 'react'
import { createPortal } from 'react-dom';
import Style from './style'
import ExitIcon from "../../assets/ExitIcon.svg"

interface props{
  Content: ({}: {
    close: () => void,
    className:string,
    onClick:(e:any)=> void,
    exitIcon: React.ReactNode
  }) => JSX.Element,
  isOpen: boolean,
  close: () => void,
}

const Modal = ({Content,close,isOpen}:props) => {
  return !isOpen? <></> : createPortal((
    <Style onClick={() => close()}>
        <Content className='modalContent' close={close} onClick={(e) => e.stopPropagation()} exitIcon={(
          <div className='exitIcon' onClick={() => close()}>
            <img src={ExitIcon} alt="" />
          </div>
        )} />
    </Style>
  ),document.getElementById("modal_portal") as Element)
}

export default Modal