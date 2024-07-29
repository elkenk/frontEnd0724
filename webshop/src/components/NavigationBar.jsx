import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
//import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  const {t, i18n} = useTranslation()

  const changeLangEE = () => {
    i18n.changeLanguage("ee")
    localStorage.setItem("lang", "ee")
  }
  const changeLangEN = () => {
    i18n.changeLanguage("en")
    localStorage.setItem("lang", "en")
  }
  const changeLangNO = () => {
    i18n.changeLanguage("no")
    localStorage.setItem("lang", "no")
  }
  const changeLangFI = () => {
    i18n.changeLanguage("fi")
    localStorage.setItem("lang", "fi")
  }
  //lisa korvi
  //toast <--- react toatify kaudu ütle lisatud ostukorvi

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand as={Link}to= "/">{t("nav.main-page")}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/admin">{t("nav.admin")}</Nav.Link>
          <Nav.Link as={Link} to="/shops">{t("nav.shops")}</Nav.Link>
          <Nav.Link as={Link} to="/contact">{t("nav.contact")}</Nav.Link>
          <Nav.Link as={Link} to="/cart">{t("nav.cart")}</Nav.Link>
          
        </Nav>
        <Nav>
        <Nav.Link as={Link} to="/login">{t("nav.login")}</Nav.Link>
        <Nav.Link as={Link} to="/signup">{t("nav.signup")}</Nav.Link>
        </Nav>
        <img className="lang" onClick={changeLangEN} src="/english.png" alt=""/>
        <img className="lang" onClick={changeLangEE} src="/estonian.png" alt=""/>
        <img className="lang" onClick={changeLangNO} src="/norvegian.png" alt=""/>
        <img className="lang" onClick={changeLangFI} src="/finnish.png" alt=""/>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
  
}

export default NavigationBar