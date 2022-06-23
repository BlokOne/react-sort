function Header() {
  return (
    <>
      <section className="header">
        <div className="header__container container">
          <div className="header__head">
            <div className="header__logo">
              <a href="#">
                <img src="/img/logo.svg" alt="logo" />
              </a>
            </div>
            <div className="header__nav">
              <ul className="header__links">
                <li className="header__link">
                  <a href="#">
                    <p>About</p>
                  </a>
                </li>
                <li className="header__link">
                  <a href="#">
                    <p>About</p>
                  </a>
                </li>
                <li className="header__link">
                  <a href="#">
                    <p>Services</p>
                  </a>
                </li>
                <li className="header__link">
                  <a href="#">
                    <p>Pricing</p>
                  </a>
                </li>
                <li className="header__link">
                  <a href="#">
                    <p>Blog</p>
                  </a>
                </li>
              </ul>
            </div>
            <button className="header__button">Contact</button>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about__container container">
          <div className="about__title">
            <h1>Portfolio</h1>
          </div>
          <div className="about__description">
            <p>
              Agency provides a full service range including technical
              skills, design, business understanding.
            </p>
          </div>
        </div>
      </section>
    </>

  )
}

export default Header
