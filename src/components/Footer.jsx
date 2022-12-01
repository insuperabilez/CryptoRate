import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <footer className="page-footer blue">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">CryptoRate</h5>
                
                <p className="grey-text text-lighten-4">Made with coingecko API.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a href='https://vk.com/insuperabilehart' style={{textDecoration:'none',color:'white'}} >
                    <i className="fa fa-vk fa-2x hoverable" aria-hidden="true"></i>
                    </a>
                    </li>
                  <li>
                    <a href='https://steamcommunity.com/id/sanczez/' style={{textDecoration:'none',color:'black'}}> 
                    <i className="fa fa-steam fa-2x hoverableName" aria-hidden="true"></i>
                  </a>
                  </li>
                  
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2022 insuperabile
            </div>
          </div>
        </footer>
  )
}

export default Footer
