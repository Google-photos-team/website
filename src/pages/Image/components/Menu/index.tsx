import React, { useState } from "react";
import Modal from "../../../../components/Modal";
import { H5 } from "../../../../components/Typography";
import DeleteImage from "../../../../modals/DeleteImageModal";
import MoveImage from '../../../../modals/MoveImageModal'
import './style'
import MenuStyle from "./style";

const Menu = () => {
    const [moveModal,setMoveModal] = useState(false);
    const [deleteModal,setdeleteModal] = useState(false);
    return (
        <MenuStyle>
            <div className="menu">

                <div className="menuTypes">
                    <H5 className="move" onClick={()=>setMoveModal(true)}>Move</H5>
                    <H5 className="delete" onClick={() => setdeleteModal(true)}>Delete</H5>
                </div>
            </div>
            <Modal
                close={() => setMoveModal(true)}
                isOpen={moveModal}
                Content={MoveImage}
            
            />
            <Modal
                close={() => setdeleteModal(true)}
                isOpen={deleteModal}
                Content={DeleteImage}
            
            />
        </MenuStyle>
        
    );
}

export default Menu