import style from './Footer.module.css';
import iconFacebook from '../../assets/facebook.svg';
import iconInstagram from '../../assets/instagram.svg';
import iconTwitter from '../../assets/twitter.svg';
import iconYoutube from '../../assets/youtube.svg';

const Footer = () => {
  return (
    <footer>
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
      <ul className={style.siteLinks}>
        <li>Terminos y condiciones</li>
        <li>Política de privacidad</li>
        <li>Aviso legal</li>
      </ul>
    </footer>
  );
};

export default Footer;
