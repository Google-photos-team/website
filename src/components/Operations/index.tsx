import React,{useState} from 'react'
import Style from './style'
import SelectIcon from "../../assets/SelectIcon.svg"
import RemoveSelectIcon from "../../assets/RemoveSelectIcon.svg"
import Trash from "../../assets/Trash.svg"
import Move from "../../assets/Move.svg"
import { Body1 } from '../Typography'
import ModalV2 from '../ModalV2'
import MoveImageModal from '../../modals/MoveImageModal'

interface props {
  select: {
    active: boolean,
    selectedItems: string[]
  },
  setSelect: (obj: { active?: boolean, selectedItems?: string[] }) => void,
  data: { _id: string }[],
  hideMove?: boolean,
  handleDelete?: () => void,
  handleMove?: () => void,
  loading?:boolean,
  folder_id?:string,
}

const Operations = ({ select, setSelect, data, hideMove, handleDelete, loading, folder_id,handleMove }: props) => {
  const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);
  return (
    <Style className='containerWidth'>
      <div className="selectBlock hoverClass"
        onClick={() => {
          select.active ?
            setSelect({ active: false, selectedItems: [] })
            :
            setSelect({ active: true })
        }}
      >
        <img className='selectIcon' src={select.active ? RemoveSelectIcon : SelectIcon} alt="" />
        <Body1>{select.active ? `${select.selectedItems.length} selected` : "Select"}</Body1>
      </div>

      {select.active &&
        <>
          <div className={`iconsClass ${select.selectedItems.length > 0 ? "hoverClass" : "disabledClass"} ${loading?"disabledClass":""}`} onClick={() => {
            if (select.selectedItems.length > 0) {
              handleDelete ? handleDelete() : ""
            }
          }}>
            <img className='selectIcon' src={Trash} alt="" />
          </div>

          {hideMove ||
            <div className={`iconsClass ${select.selectedItems.length > 0 ? "hoverClass" : "disabledClass"} ${loading?"disabledClass":""}`} onClick={() => setIsMoveModalOpen(true)}>
              <img className='selectIcon' src={Move} alt="" />
            </div>}

            {isMoveModalOpen && <ModalV2 close={() => { setIsMoveModalOpen(false); }}>
                <MoveImageModal
                    close={() => setIsMoveModalOpen(false)}
                    folder_id={folder_id || ""}
                    image_id={select.selectedItems}
                    handImagesMove={handleMove}
                />
            </ModalV2>}

          <Body1 className='selectAll hoverClass'
            onClick={() => {
              if (select.selectedItems.length !== data.length) {
                setSelect({ selectedItems: [...data.map(item => item._id)] })
              } else {
                setSelect({ selectedItems: [] })
              }
            }}
          >{select.selectedItems.length !== data.length ? "Select All" : "Clear"}</Body1>
        </>

      }
    </Style>
  )
}

export default Operations