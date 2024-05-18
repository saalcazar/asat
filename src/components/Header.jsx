import logo from '../assets/logo.png'
import './Components.css'
const Header = () => {
  return (
    <main className='main-menu'>
      <header className='header-menu'>
        <div className='logo-header'>
          <img src={logo} alt="" />
        </div>
        <div className='toggle-menu'>
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
        </div>
        <nav className='nav-menu'>

        </nav>
      </header>
    </main>
  )
}

export default Header