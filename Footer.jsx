import React from 'react'
import './footer.css';

function Footer() {
  return (
    <div>
      <section className="middle-wrapper">
			<div className="internal-wrapper"> 
               <div className="middle-Index-wrapper"> 
					<div className="Index-wrapper-1">
						<ul>
							<li><a href="#">FAQ</a></li>
							<li><a href="#">Investor Relations</a></li>
							<li><a href="#">Privacy</a></li>
							<li><a href="#">Speed Test</a></li>
						</ul>
					</div> 
					<div className="Index-wrapper-2">
						<ul>
							<li><a href="#">Help Center</a></li>
							<li><a href="#">Jobs</a></li>
							<li><a href="#">Cookie Preferences</a></li>
							<li><a href="#">Legal Notices</a></li>
						</ul>
                        </div>
                        <div className="Index-wrapper-3">
						<ul>
							<li><a href="#">Account</a></li>
							<li><a href="#">Ways To Watch</a></li>
							<li><a href="#">Corporate Information</a></li>
                            <li><a href="#">Only On Netflix</a></li>
	                    </ul>					
					</div> 
					<div className="Index-wrapper-4">
					<ul>
							<li><a href="#">Media Center</a></li>
							<li><a href="#">Terms Of Use</a></li>
							<li><a href="#">Contact Us</a></li>
				    </ul>
					</div>  
                </div>
		     </div>
		</section> 
    </div>
  );
}
export default Footer;