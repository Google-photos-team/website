import React, { useState, useDeferredValue, useEffect } from 'react'
import Style from './style'
import Avatar from "../../assets/Avatar.png"
import Input from '../Input'
import useDebounce from '../../hooks/useDebounce'
import { useLocation, useNavigate } from 'react-router'
import { PATHS } from '../../router'

const Navbar = () => {
  const { search } = useLocation();
  const [searchValue, setSearchValue] = useState(decodeURI(search.split("=")[1]));
  const deferredValue = useDebounce(searchValue, 500);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (deferredValue) {
      navigate(PATHS.SEARCH + '?q=' + deferredValue);
    }

    if(!search){
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