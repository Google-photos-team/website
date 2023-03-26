import React from "react";
import { H5 } from "../../../../components/Typography";
import './style'
import MenuStyle from "./style";

const Menu = () => {
    return (
        <MenuStyle>
            <div className="menu">

                <div className="menuTypes">
                    <H5 className="move">Move</H5>
                    <H5 className="delete">Delete</H5>
                </div>

            </div>
        </MenuStyle>
    );
}

export default Menu