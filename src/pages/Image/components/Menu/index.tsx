import React, { useState } from "react";
import ModalV2 from "../../../../components/ModalV2";
import DeleteImage from "../../../../modals/DeleteImageModal";
import MenuStyle from "./style";
import MoveImageModal from "../../../../modals/MoveImageModal";

interface props {
    typeOne: string,
    typeTwo: string,
    className: string,
    image_id: string,
    folder_id: string,
    closeMenu: () => void,
    setFolderId: (folder_id: string) => void,
}

const Menu = ({ className, typeOne, typeTwo, closeMenu, setFolderId, folder_id, image_id }: props) => {
    const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    return (
        <>
            {isMoveModalOpen && <ModalV2 close={() => { setIsMoveModalOpen(false); }}>
                <MoveImageModal
                    setFolderId={setFolderId}
                    close={() => setIsMoveModalOpen(false)}
                    {...{ folder_id, image_id }} />
            </ModalV2>}

            {deleteModal && <ModalV2 close={() => setDeleteModal(false)}>
                <DeleteImage
                    close={() => setDeleteModal(false)}
                    {...{ folder_id, image_id }}
                />
            </ModalV2>}

            <MenuStyle onClick={(e) => e.stopPropagation()}>
                <div className={className}>
                    <ul className="menuTypes">
                        <div onClick={() => setIsMoveModalOpen(true)}>
                            <li className="move">{typeOne}</li>
                        </div>
                        <div onClick={() => setDeleteModal(true)}>
                            <li className="delete">{typeTwo}</li>
                        </div>
                    </ul>
                </div>
            </MenuStyle>
        </>

    );
}

export default Menu