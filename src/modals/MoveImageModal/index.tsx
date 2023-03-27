import React, { useState } from 'react'
import InputFiled from '../../components/InputFiled';
import { Body1 } from '../../components/Typography';
import Style from './style'

interface props {
  className: string,
  close: () => void,
  onClick: (e: any) => void,
  exitIcon: React.ReactNode,
}

const MoveImage = ({ className, close, onClick, exitIcon }: props) => {
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
      <Body1 weight={500} color="black">Move To</Body1>

      <InputFiled
        label=''
        name="Move Image"
        onChange={handelChange}
        value={text}
        fullWidth
        placeholder='To' />


      <div className="buttons">

        <button className="cancelButton" onClick={() => close()}>
          <Body1 weight={700} color="semiWhite">No,cancel</Body1>
        </button>
        <button className="createButton" onClick={() => close()}>
          <Body1 weight={700} color="semiWhite" >Move</Body1>
        </button>

      </div>

    </Style>
  )
}

export default MoveImage