import { useState } from 'react';
import unycosLogo from '../../assets/unycos.svg';
import styles from './Header.module.css';
import iconChevronDown from '../../assets/chevron-down.svg';
import iconUser from '../../assets/person.svg';
import iconMenu from '../../assets/menuMobile.svg';
import iconBell from '../../assets/bell.svg';
import iconBellOn from '../../assets/bellOn.svg';
import logoBlack from '../../assets/logoBlack.svg';
import iconWhatsapp from '../../assets/whatsapp.svg';

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [notification, setNotification] = useState(true);

  const handleLogin = () => {
    setIsLogged(!isLogged);
  };

  const handleDropdow = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    setShowDropdown(false);
    setIsLogged(false);
  };

  const handleNotification = () => {
    setNotification(!notification);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div>
            <img src={unycosLogo} alt='Unycos Logo'></img>
          </div>
          <nav className={styles.navegation}>
            <ul>
              <li>
                <a href='#'>Cursos</a>
              </li>
              {isLogged ? (
                <li className={styles.dropdown}>
                  <div onClick={handleDropdow} className={styles.user}>
                    <p>
                      Hola, <strong>Glaydston</strong>
                    </p>
                    <img src={iconChevronDown}></img>
                  </div>
                </li>
              ) : (
                <>
                  <li>
                    <a href='#'>Register</a>
                  </li>
                  <li onClick={handleLogin}>
                    <a href='#'>Log in</a>
                  </li>
                </>
              )}
            </ul>
          </nav>
          <div className={styles.menuMobile}>
            {isLogged ? (
              <img src={iconMenu} onClick={handleDropdow}></img>
            ) : (
              <img src={iconUser} alt='' onClick={handleLogin}></img>
            )}
          </div>
        </div>
      </header>
      {showDropdown ? (
        <>
          <ul className={styles.dropdownItems}>
            <li>Panel de Control</li>
            <li>Tus cursos</li>
            <li>Perfil</li>
            <li>cuenta</li>
            <li onClick={handleLogout}>Cerrar sesión</li>
          </ul>
          <div className={styles.dropdownMobile}>
            <div className={styles.dropdowOut} onClick={handleDropdow}></div>
            <div className={styles.dropdownContent}>
              <div className={styles.dropdownSaudation}>
                <div className={styles.dropdownLogo}>
                  <img src={logoBlack}></img>
                </div>
                <div className={styles.dropdownHello}>
                  <h2>
                    Hola, <strong>Daniela</strong>
                  </h2>
                  <div onClick={handleNotification}>
                    {notification ? (
                      <img src={iconBellOn}></img>
                    ) : (
                      <img src={iconBell}></img>
                    )}
                  </div>
                </div>
              </div>
              <ul className={styles.dropdownNav}>
                <li>Panel de Control</li>
                <li>Mis cursos</li>
                <li>Perfil</li>
                <li>Ajustes</li>
                <li>Todos los cursos</li>
              </ul>
              <div className={styles.contact}>
                <h4>Contáctanos por whatsapp</h4>
                <div className={styles.phoneNumber}>
                  <img src={iconWhatsapp}></img>
                  <p>+34 653 46 73 60</p>
                </div>
              </div>
              <div className={styles.logout}>
                <p onClick={handleLogout}>Cerrar sesión</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
