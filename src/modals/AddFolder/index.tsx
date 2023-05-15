import React, { useState } from 'react'
import InputFiled from '../../components/InputFiled';
import { Body1, H5 } from '../../components/Typography';
import Style from './style'
import { createFolder } from '../../api/FoldersAPI';
import { toast } from 'react-toastify';

interface props {
  close: () => void,
  addFolder: (data: any) => void,
}

const AddFolder = ({ close, addFolder }: props) => {
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handelCreate = () => {
    setIsLoading(true);
    createFolder(name)
      .then((data) => {
        addFolder(data);
      }).catch((error) => {
        toast.error(error.message)
      }).finally(() => {
        setIsLoading(false);
        close();
      })
  }

  return (
    <Style>
      <H5 weight={400} color="black">Folder Name</H5>
      <InputFiled
        label=''
        name="folderName"
        onChange={handelChange}
        value={name}
        fullWidth
        placeholder='name' />

      <button className="createButton" onClick={isLoading ? () => { } : handelCreate}>
        <Body1 weight={700} color="semiWhite">{isLoading ? "Loading ..." : "Create"}</Body1>
      </button>
    </Style>
  )
}

export default AddFolder