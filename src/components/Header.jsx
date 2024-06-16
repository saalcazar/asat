import { useState } from 'react'
import logo from '../assets/logo.png'
import './Components.css'
import { useEffect } from 'react'
const Header = () => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const navMenu = document.getElementById('nav-menu')
    if (toggle) {
      navMenu.classList.remove('hiden-menu')
    } else {
      navMenu.classList.add('hiden-menu')
    }
  }, [toggle])

  const onToggle = () => {
      setToggle(!toggle)
  }

  return (
    <main className='main-menu'>
      <header className='header-menu'>
        <div className='logo-header'>
          <img src={logo} alt="" />
        </div>
        <div className='toggle-menu' id='toggle' onClick={onToggle}>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
        </div>
        <nav className='nav-menu hiden-menu' id='nav-menu'>
          <div className='close-menu' id='toggle' onClick={onToggle}>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
          </div>
          <ul className='menu kantumruy-pro-regular'>
            <li className='item-menu menu-list'>
              <div>
                <a href="/about">Quienes somos</a>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="15"  height="15"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-triangle rotate-icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z" /></svg>
              </div>
              <ul className='second-menu'>
                <li className='item-second-menu'>Historia</li>
                <li className='separator-dark'></li>
                <li className='item-second-menu'>Valores institucionales</li>
                <li className='separator-dark'></li>
                <li className='item-second-menu'>Nuestro Staff</li>
              </ul>
            </li>
            <li className='separator-dark'></li>
            <li className='item-menu menu-list'>
              <div>
                <a href="#">Nuestros proyectos</a>
                <svg  xmlns="http://www.w3.org/2000/svg"  width="15"  height="15"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-triangle rotate-icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z" /></svg>
              </div>
              <ul className='second-menu'>
                <li className='item-second-menu'>Proyecto uno</li>
                <li className='separator-dark'></li>
                <li className='item-second-menu'>Proyecto dos</li>
                <li className='separator-dark'></li>
                <li className='item-second-menu'>Proyecto tres</li>
                <li className='separator-dark'></li>
                <li className='item-second-menu'>Proyecto cuatro</li>
              </ul>
            </li>
            <li className='separator-dark'></li>
            <li className='item-menu'><a href="#">Contacto</a></li>
          </ul>
        </nav>
      </header>
    </main>
  )
}

export default Header