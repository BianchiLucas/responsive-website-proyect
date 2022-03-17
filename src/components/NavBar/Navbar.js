import React, { useState } from 'react'
import { FaRProject, FaTimes } from 'react-icons/fa'
import { CgMenuRight} from 'react-icons/cg'
import { IconContext } from 'react-icons'
import {} from './NavbarStyles.js'
import { useLocation, useHistory } from 'react-router-dom'
import { data } from '../../data/NavbarData.js'
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavLinks, NavItem } from './NavbarStyles'

const Navbar = () => {
    const [show, setShow] = useState(false)

    let history = useHistory()
    let location = useLocation()

    const handleClick = () => {
        setShow(!show)
    }

    const scrollTo = (id) => {
        const element = document.getElementById(id)

        element.scrollIntoView({
            behavior: 'smooth'
        })
     }

    const closeMobileMenu = (to, id) => {
        if (id & location.pathname === '/'){
            scrollTo(id)
        }
        history.push(to)
        setShow(false)
    }

  return (
      <IconContext.Provider value={{ color:'#fff' }}>
          <Nav>
              <NavbarContainer>
                  <NavLogo to='/' >
                      <NavIcon src='' alt='Logo' >NavIcon</NavIcon>
                  </NavLogo>
                  <MobileIcon onClick={handleClick}>{ show ? <FaTimes/> : <CgMenuRight/> }</MobileIcon>
                  <NavMenu show={show} >
                      { data.map((element, index) => (
                          <NavItem key={index}>
                              <NavLinks onClick={() => closeMobileMenu(element.to, element.id)}>{ element.text }</NavLinks>
                          </NavItem>
                      ))}
                  </NavMenu>
              </NavbarContainer>
          </Nav>
      </IconContext.Provider>
  )
}

export default Navbar