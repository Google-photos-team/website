import React,{useState} from 'react'
import InputFiled from '../../components/InputFiled';
import { Body1, H5 } from '../../components/Typography';
import Style from './style'

interface props{
  className: string,
  close: () => void,
  onClick:(e:any)=> void,
  exitIcon: React.ReactNode,
}

const AddFolder = ({className,close,onClick,exitIcon}:props) => {
  const [text,setText] = useState("");
  
  const handleClick = (e:any) =>{

    onClick(e);
  }

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
}


  return (
    <Style className={className} onClick={handleClick}>
      {exitIcon}
      <H5 weight={400} color="black">Folder Name</H5>
      <InputFiled
        label=''
        name="folderName"
        onChange={handelChange}
        value={text}
        fullWidth
        placeholder='name' />

        <button className="createButton" onClick={() => close()}>
          <Body1 weight={700} color="semiWhite">Create</Body1>
        </button>
    </Style>
  )
}

export default AddFolder