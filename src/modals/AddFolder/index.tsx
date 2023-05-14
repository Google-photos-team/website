import React,{useState} from 'react'
import InputFiled from '../../components/InputFiled';
import { Body1, H5 } from '../../components/Typography';
import Style from './style'
import { createFolder } from '../../api/FoldersAPI';

interface props{
  className: string,
  close: () => void,
  onClick:(e:any)=> void,
  exitIcon: React.ReactNode,
  handleAction?: (data:any) => void,
}

const AddFolder = ({className,close,onClick,exitIcon,handleAction}:props) => {
  const [text,setText] = useState("");
  
  const handleClick = async () =>{

    if(text.length > 0){
      await createFolder({name:text}).then((data) => handleAction && handleAction({id:data._id,name:data.name}));
    }

    close();
  }

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
}


  return (
    <Style className={className} onClick={onClick}>
      {exitIcon}
      <H5 weight={400} color="black">Folder Name</H5>
      <InputFiled
        label=''
        name="folderName"
        onChange={handelChange}
        value={text}
        fullWidth
        placeholder='name' />

        <button className="createButton" onClick={() => handleClick()}>
          <Body1 weight={700} color="semiWhite">Create</Body1>
        </button>
    </Style>
  )
}

export default AddFolder