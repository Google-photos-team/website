import React, { useState, useEffect } from 'react'
import Style from './style'
import Avatar from "../../assets/no_user.png"
import Input from '../Input'
import { useLocation, useNavigate } from 'react-router'
import { PATHS } from '../../router'

import Menu from './components/Menu'
import Button from '../Button'
import CustomLink from '../CustomLink'
import { getProfile } from '../../api/ProfileAPI'

const Navbar = () => {
  const { search } = useLocation();
  const [searchValue, setSearchValue] = useState(decodeURI(search.split("=")[1] ? "" : ""));

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [user, setUser] = useState<any>({})


  const navigate = useNavigate();
  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(PATHS.SEARCH + '?q=' + searchValue);
  }

  // get user profile
  useEffect(() => {
    getProfile()
      .then((profile) => {
        setUser(profile);
      }).catch((error) => {
        console.log(error.message)
      })
  }, [])

  return (
    <Style>
      <div className="path">
        <CustomLink to={PATHS.HOME}>Home /</CustomLink>
      </div>
      <form className="search" onSubmit={onSearch}>
        <Input
          value={searchValue}
          onChange={(e) => { setSearchValue(e.target.value) }}
          placeholder='search'
          fullWidth />
        <Button>Search</Button>
      </form>
      <div></div>
      <div className="user">
        <div
          className="icon"
          onClick={() => setIsMenuOpen(prev => !prev)}
          onBlur={() => setIsMenuOpen(false)} tabIndex={0}>
          <img src={user.avatar || Avatar} alt="" />
          {isMenuOpen && <Menu />}
        </div>

        <div className="name">
          {user.username}
        </div>
      </div>
    </Style>
  )
}

export default Navbar