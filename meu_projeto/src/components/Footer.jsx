import {FaFacebook, FaInstagram, FaLinkedin, FaYoutube} from 'react-icons/fa'
import Styles from './Footer.module.css'

function Footer(){
	return(
		<footer>
			<ul className={Styles.social_list}>
				<li><FaInstagram /></li>
				<li><FaFacebook /></li>
				<li><FaLinkedin /></li>
				<li><FaYoutube/></li>
			</ul>
			<p>Nosso Rodápe</p>
		</footer>
	)
}
export default Footer