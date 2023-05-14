import React from "react";
import CustomLink from "../../../../components/CustomLink";
import { PATHS } from "../../../../router";
import MenuStyle from "./style";

interface props {
    setOpenMenu: (value: boolean) => void,
    typeOne: string,
    typeTwo: string,
    className: string

}

const Menu = ({ className, typeOne, typeTwo, setOpenMenu }: props) => {
    return (
        <MenuStyle onClick={(e) => e.stopPropagation()}>
            <div className={className}>
                <ul className="menuTypes">
                    <CustomLink to={PATHS.SIGN_UP}>
                        <li className="signup">{typeOne}</li>
                    </CustomLink>
                    <CustomLink to={PATHS.SETTINGS}>
                        <li className="settings">{typeTwo}</li>
                    </CustomLink>
                </ul>
            </div>
        </MenuStyle>

    );
}

export default Menu