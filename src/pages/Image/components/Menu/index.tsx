import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomLink from "../../../../components/CustomLink";
import Modal from "../../../../components/Modal";
import DeleteImage from "../../../../modals/DeleteImageModal";
import MoveImage from '../../../../modals/MoveImageModal'
import { PATHS } from "../../../../router";
import MenuStyle from "./style";

interface props {
    setOpenMenu: (value: boolean) => void,
    typeOne: string,
    typeTwo: string,
    className: string

}

const Menu = ({ className, typeOne, typeTwo, setOpenMenu }: props) => {
    const [moveModal, setMoveModal] = useState(false);
    const [deleteModal, setdeleteModal] = useState(false);


    return (
        <MenuStyle onClick={(e) => e.stopPropagation()}>
            <div className={className}>
                <ul className="menuTypes">
                    <li className="signup">{typeOne}</li>
                    <CustomLink to={PATHS.SETTINGS}>
                        <li className="settings">{typeTwo}</li>
                    </CustomLink>
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