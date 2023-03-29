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

                    {/* {typeOne === "signup" 
                        ?
                        <CustomLink to={PATHS.SIGN_UP}>
                            <li className="move">{typeOne}</li>
                        </CustomLink> 
                        : 
                        <li className="move">{typeOne}</li>
                        } */}
                        <CustomLink to={PATHS.SIGN_UP}>
                            <li className="signup">{typeOne}</li>
                        </CustomLink> 
                        <CustomLink to={PATHS.SETTINGS}>
                            <li className="settings">{typeTwo}</li>
                        </CustomLink>

                    <div onClick={() => {
                        setMoveModal(true);
                    }} >
                        {/* {typeOne === "signup" 
                        ?
                        <CustomLink to={PATHS.SIGN_UP}>
                            <li className="move">{typeOne}</li>
                        </CustomLink> 
                        : 
                        <li className="move">{typeOne}</li>} */}

                        <li className="move">{typeOne}</li>
                    </div>
                    <div onClick={() => {
                        setdeleteModal(true);
                    }}>
                        <li className="delete">{typeTwo}</li>
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