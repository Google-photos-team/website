import React, { useState } from "react";
import Modal from "../../../../components/Modal";
import { H5 } from "../../../../components/Typography";
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
                    <H5 className="delete">Delete</H5>
                </div>
            </div>
            <Modal
                close={() => setMoveModal(true)}
                isOpen={moveModal}
                Content={MoveImage}
            
            />
        </MenuStyle>
        
    );
}

export default Menu