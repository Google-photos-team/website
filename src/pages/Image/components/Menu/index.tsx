import React from "react";
import menu from '../../../../assets/ImagePage/menu.png'


const Menu = () =>{
    return(
        <div className="menu">
            <img src={menu} alt="menu" onClick={(e)=>{
                console.log("first")
            }}/>
        </div>
    );
}

export default Menu