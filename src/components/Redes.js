
import { Link } from "react-router-dom"
import "./Redes.css"
import React from "react"
import {FaInstagram, FaFacebook, FaWhatsapp} from 'react-icons/fa';



function Redes() {
	return(
<div className="container-bar">
	<input type="checkbox" id="btn-social" />
	<label htmlFor="btn-social" className="fa fa-play"></label>
		<div className="icon-social">
			<Link to="#" className="fa fa-facebook">
			<FaFacebook size={30} />
			</Link>
            <Link to="https://www.instagram.com/olavarriaturismo/" className="fa fa-instagram">
				<FaInstagram size={30} />
				
			</Link>
            <Link to="#" className="fa fa-whatsapp">
			<FaWhatsapp size={30} />
			</Link>
			<Link to="#" className="fa fa-youtube">
				Yout
			</Link>
			<Link to="#" className="fa fa-twitter">
				Twit
			</Link>
			
			
		</div>
	</div>)}

	export default Redes;