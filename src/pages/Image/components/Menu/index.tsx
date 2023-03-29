import React, { useState } from "react";
import Modal from "../../../../components/Modal";
import DeleteImage from "../../../../modals/DeleteImageModal";
import MoveImage from '../../../../modals/MoveImageModal'
import MenuStyle from "./style";

const Menu = () => {
    const [moveModal, setMoveModal] = useState(false);
    const [deleteModal, setdeleteModal] = useState(false);
    return (
        <MenuStyle>
            <div className="menu">

                <ul className="menuTypes" tabIndex={0}>
                    <div onClick={() => setMoveModal(true)} >
                        <li className="move">Move</li>
                    </div>
                    <div onClick={() => setdeleteModal(true)}>
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