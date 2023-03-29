import React, { useState } from "react";
import Modal from "../../../../components/Modal";
import DeleteImage from "../../../../modals/DeleteImageModal";
import MoveImage from '../../../../modals/MoveImageModal'
import MenuStyle from "./style";

interface props{
    setOpenMenu: (value:boolean) => void
}

const Menu = ({setOpenMenu}:props) => {
    const [moveModal, setMoveModal] = useState(false);
    const [deleteModal, setdeleteModal] = useState(false);
    return (
        <MenuStyle onClick={(e) => e.stopPropagation()}>
            <div className="dropMenu">

                <ul className="menuTypes">
                    <div onClick={() => {
                        setMoveModal(true);
                    }} >
                        <li className="move">Move</li>
                    </div>
                    <div onClick={() => {
                        setdeleteModal(true);
                    }}>
                        <li className="delete">Delete</li>
                    </div>
                </ul>
            </div>
            <Modal
                close={() => setMoveModal(false)}
                isOpen={moveModal}
                Content={MoveImage}

            />
            <Modal
                close={() => setdeleteModal(false)}
                isOpen={deleteModal}
                Content={DeleteImage}

            />
        </MenuStyle>

    );
}

export default Menu