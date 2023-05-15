import React, { useState } from 'react'
import { Body1, Body2, H5 } from '../../components/Typography';
import Style from './style'
import { deleteImages } from '../../api/ImagesAPI';
import { useNavigate } from 'react-router';
import { PATHS } from '../../router';
import { toast } from 'react-toastify';

interface props {
  close: () => void,
  folder_id: string,
  image_id: string
}

const DeleteImage = ({ close, folder_id, image_id }: props) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  
  const handelDelete = () => {
    setIsLoading(true);
    deleteImages([image_id], folder_id)
      .then(() => {
        toast.success("Image deleted successfully");
        navigate(PATHS.FOLDER + "/" + folder_id);
      }).catch((error) => {
        console.log(error)
      }).finally(() => {
        setIsLoading(false);
        close();
      })
  }

  return (
    <Style>
      <H5 weight={500} color="black">Sure you want to delete?</H5>
      <Body1 weight={300}>this action will lead to deleting this image permanently , you can't get it back later</Body1>

      <div className="buttons">
        <button className="cancelButton" onClick={() => close()}>
          <Body1 weight={700} color="semiWhite">No,cancel</Body1>
        </button>
        <button className="createButton" onClick={isLoading ? () => { } : handelDelete}>
          <Body1 weight={700} color="semiWhite" >{isLoading ? "loading ..." : "Delete"}</Body1>
        </button>
      </div>
    </Style>
  )
}

export default DeleteImage