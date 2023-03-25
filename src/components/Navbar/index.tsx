import React from 'react'
import Style from './style'
import Avatar from "../../assets/Avatar.png"

const Navbar = () => {
  return (
    <Style>
      <div className="path">Home /</div>

      <div className="user">
        <div className="icon">
          <img src={Avatar} alt="" />
        </div>

        <div className="name">
          Shadow
        </div>
      </div>
    </Style>
  )
}

export default Navbar