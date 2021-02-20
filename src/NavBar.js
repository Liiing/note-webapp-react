function NavBar({onNoteAdd}) {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
          </a>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <a className="button is-primary" onClick={onNoteAdd}>
              <strong>+</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;