import React, { useState, useDeferredValue, useEffect } from 'react'
import Style from './style'
import Avatar from "../../assets/Avatar.png"
import Input from '../Input'
import useDebounce from '../../hooks/useDebounce'
import { useLocation, useNavigate } from 'react-router'
import { PATHS } from '../../router'
import Menu from '../../pages/Image/components/Menu'
import { useAuth } from '../../contexts/authContext'

const Navbar = () => {
  const {user} = useAuth();

  const { search, pathname } = useLocation();
  const [searchValue, setSearchValue] = useState(decodeURI(search.split("=")[1] ? "" : ""));
  const deferredValue = useDebounce(searchValue, 500);
  const [openMenu, setOpenMenu] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    if (search && deferredValue) {
      navigate(PATHS.SEARCH + '?q=' + deferredValue);
    }

    if (!search && pathname === PATHS.SEARCH) {
      setSearchValue("")
    }
  }, [deferredValue, navigate, search])

  return (
    <Style>
      <div className="path">Home /</div>
      <div className="search">
        <Input
          value={searchValue}
          onChange={(e) => { setSearchValue(e.target.value) }}
          placeholder='search'
          fullWidth />
      </div>
      <div className="user">
        <div className="icon" onClick={() => setOpenMenu(prev => !prev)} onBlur={() => setOpenMenu(false)} tabIndex={0}>
          <img src={user?.avatar || Avatar} alt="" />
          {openMenu && <Menu className='dropMenuNav' typeOne='Logout' typeTwo='Settings' setOpenMenu={setOpenMenu} />}
        </div>

        <div className="name">
          {user?.username}
        </div>
      </div>
    </Style>
  )
}

export default Navbar