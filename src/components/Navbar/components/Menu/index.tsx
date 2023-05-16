import React from "react";
import CustomLink from "../../../../components/CustomLink";
import { PATHS } from "../../../../router";
import MenuStyle from "./style";

interface IProps {
}

const Menu = ({ }: IProps) => {
    return (
        <MenuStyle>
            <div className="dropMenuNav">
                <ul className="menuTypes">
                    <CustomLink to={PATHS.SIGN_UP}>
                        <li className="signup">Logout</li>
                    </CustomLink>
                    <CustomLink to={PATHS.SETTINGS}>
                        <li className="settings">Settings</li>
                    </CustomLink>
                </ul>
            </div>
        </MenuStyle>

    );
}

export default Menu