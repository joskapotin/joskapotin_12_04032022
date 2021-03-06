import Logo from "./logo/Logo"
import Brand from "./brand/Brand"
import "./Header.css"

/**
 * Header component
 */
function Header() {
  return (
    <header className="App-header">
      <nav className="nav-primary" aria-label="primary">
        <div className="branding">
          <Logo />
          <Brand />
        </div>
        <span className="nav-primary__link">Accueil</span>
        <span className="nav-primary__link">Profil</span>
        <span className="nav-primary__link">Réglage</span>
        <span className="nav-primary__link">Communauté</span>
      </nav>
    </header>
  )
}

export default Header
