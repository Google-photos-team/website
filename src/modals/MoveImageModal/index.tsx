import React, { useState, useEffect } from 'react'
import { Body1 } from '../../components/Typography';
import Style from './style'
import Select from 'react-select';
import { getFolders } from '../../api/FoldersAPI';
import { toast } from 'react-toastify';
import { moveImages } from '../../api/ImagesAPI';

interface IProps {
  close: () => void,
  setFolderId: (folder_id: string) => void,
  folder_id: string,
  image_id: string
}

type TFolder = { value: string, label: string };
const MoveImageModal = ({ close, folder_id, setFolderId, image_id }: IProps) => {
  const [selectedFolder, setSelectedFolder] = useState<TFolder>({
    label: "",
    value: ""
  });

  const [folders, setFolders] = useState<TFolder[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getOptions = () => {
    getFolders().then((folders) => {
      setFolders(folders
        // to remove current folder from the list
        .filter((folder: any) => {
          return folder._id !== folder_id;
        }).map((folder: any) => {
          // to convert for array of options for react-select
          return {
            value: folder._id,
            label: folder.name
          }
        }));
    }).catch((error) => {
      toast.error(error.message as string)
    })
  }

  useEffect(() => {
    getOptions();
  }, [])

  const handleMove = () => {
    setIsLoading(true);
    moveImages({
      destination_folder_id: selectedFolder.value,
      source_folder_id: folder_id,
      images: [image_id]
    }).then(() => {
      toast.success("Image moved successfully");
      setFolderId(selectedFolder.value);
      setFolders([]);
      getOptions();
    }).catch((error) => {
      toast.error(error.message as string)
    }).finally(() => {
      setIsLoading(false);
      close();
    })
  }

  return (
    <Style>
      <Body1 margin='0 0 10px' weight={500} color="black">Move To</Body1>

      {true && <Select
        options={folders}
        placeholder="move to"
        value={selectedFolder}
        onChange={val => setSelectedFolder(val as TFolder)}
      />}

      <div className="buttons">
        <button className="cancelButton" onClick={() => close()}>
          <Body1 weight={700} color="semiWhite">No,cancel</Body1>
        </button>
        <button className="createButton" onClick={isLoading ? () => { } : handleMove}>
          <Body1 weight={700} color="semiWhite" >{isLoading ? "Moving..." : "Move"}</Body1>
        </button>

      </div>
    </Style>
  )
}

export default MoveImageModal