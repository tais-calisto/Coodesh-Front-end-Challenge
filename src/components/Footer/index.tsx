import style from './Footer.module.css';
import iconFacebook from '../../assets/facebook.svg';
import iconInstagram from '../../assets/instagram.svg';
import iconTwitter from '../../assets/twitter.svg';
import iconYoutube from '../../assets/youtube.svg';
import unycosLogo from '../../assets/unycos.svg';
import whatsappIcon from '../../assets/whatsappWhite.svg';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <h2 className={style.mobileTitle}>únete a la comunidad</h2>
      <ul className={style.socialLinks}>
        <li>
          <img src={iconFacebook}></img>
        </li>
        <li>
          <img src={iconInstagram}></img>
        </li>
        <li>
          <img src={iconTwitter}></img>
        </li>
        <li>
          <img src={iconYoutube}></img>
        </li>
      </ul>
      <div className={style.mobile}>
        <h3 className={style.mobileTitle}>¿Dudas? Contáctanos por whatsapp</h3>
        <button className='buttonSecondaryWhite'>
          <img src={whatsappIcon}></img>
          +34 653 46 73 60
        </button>
      </div>
      <div className={style.end}>
        <img src={unycosLogo}></img>
        <ul className={style.siteLinks}>
          <li>Terminos y condiciones</li>
          <li>Política de privacidad</li>
          <li>Aviso legal</li>
        </ul>
        <div>
          <a href=''>USD ($)</a> / <a href=''>EUR (€)</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
