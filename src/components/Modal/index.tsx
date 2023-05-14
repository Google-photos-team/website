import React from 'react'
import { createPortal } from 'react-dom';
import Style from './style'
import ExitIcon from "../../assets/ExitIcon.svg"

interface props{
  Content: ({}: {
    close: () => void,
    className:string,
    onClick:(e:any)=> void,
    exitIcon: React.ReactNode,
    handleAction?: (data:any) => void,
  }) => JSX.Element,
  isOpen: boolean,
  close: () => void,
  handleAction?: (data:any) => void,
}

const Modal = ({Content,close,isOpen,handleAction}:props) => {
  return !isOpen? <></> : createPortal((
    <Style onClick={() => close()}>
        <Content className='modalContent' close={close} onClick={(e) => e.stopPropagation()} exitIcon={(
            <div className='exitIcon' onClick={() => close()}>
              <img src={ExitIcon} alt="" />
            </div>
          )} 
          handleAction={handleAction}
        />
    </Style>
  ),document.getElementById("modal_portal") as Element)
}

export default Modal