import React, { useState } from 'react'
import { Body1, Body3 } from '../../components/Typography';
import Style from './style'

interface props {
  className: string,
  close: () => void,
  onClick: (e: any) => void,
  exitIcon: React.ReactNode,
}

const DeleteImage = ({ className, close, onClick, exitIcon }: props) => {
  const [text, setText] = useState("");

  const handleClick = (e: any) => {

    onClick(e);
  }

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }


  return (
    <Style className={className} onClick={handleClick}>
      {exitIcon}
      <Body1 weight={500} color="black">Sure you want to delete?</Body1>
      <Body3 weight={300}>this action will lead to deleting this image permanently , you can't get it back later</Body3>

      <div className="buttons">

        <button className="cancelButton" onClick={() => close()}>
          <Body1 weight={700} color="semiWhite">No,cancel</Body1>
        </button>
        <button className="createButton" onClick={() => close()}>
          <Body1 weight={700} color="semiWhite" >Delete</Body1>
        </button>

      </div>

    </Style>
  )
}

export default DeleteImage