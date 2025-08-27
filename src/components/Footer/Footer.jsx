import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {

   return (
    <div>
      {/* <div className='container-fluid'>
         <div className="row">
            <div className="col">
               <img src="MyFavouriteMarketPlace/public/imagelog.png" alt="Logo" style={{ width: '100px', height: 'auto' }}/>
            </div>
            <div className="col">
               <h6 style={{textTransform: 'uppercase', fontWeight: 'bold'}}>New to AgriHub?</h6>
               <p>Sign up for our newsletter to get the latest updates.</p>
               <div>
                  <input type="email" placeholder="Enter your email" style={{ padding: '6px 12px', borderRadius: '4px', border: '1px solid #ccc', width: '300px' }}/>
                  <button type="button" style={{marginLeft: '6px', border: 'none', background: '#007bff', color: '#fff', padding: '6px 12px', borderRadius: '4px'}}>Subscribe</button>
               </div>
               <div className='' style={{marginTop: '10px'}}>
                  <form action="" style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                     <input type="checkbox" name="" id="checkbox" />
                     <label htmlFor="checkbox" style={{margin: 0}}>I agree to AgriHub’s Privacy and Cookie Policy. You can unsubscribe from newsletters at any time.</label>
                  </form>
                  <a href="#" style={{marginTop: '-8px', display: 'inline-block'}}>Privacy Policy</a>
               </div>
            </div>
            <div className="col">
               <h5>Follow Us</h5>
               <p>Stay connected with us on social media.</p>

            </div>
         </div>
         <div className="row mt-4">
            <div className="col">
               <h5>About Us</h5>
               <p>Learn more about our mission and values.</p>
            </div>
            <div className="col">
               <h5>Contact Us</h5>
               <p>Get in touch with our support team.</p>
            </div>
         </div>
         <hr />
         <div className='row'>
            <div className='col-md-12 bg-dark text-light text-center p-3'>
               <p>&copy; {new Date().getFullYear()} AgriHub. All rights reserved.</p>
            </div>
            <div className='col-md-12 text-center'>
               <a href="#" className="text-light">Privacy Policy</a> | <a href="#" className="text-light">Terms of Service</a>
            </div>
         </div>
      </div> */}
    
    <footer className="bg-dark text-white pt-5 pb-3 mt-2">
        <Container>
          <Row className="g-4">
            {/* Brand Column */}
            <Col lg={4} md={6}>
              <div className="mb-4">
                <h3 className="fw-bold text-success mb-3">
                  <span style={{ fontSize: '2rem' }}>🌾</span> AgroHub
                </h3>
                <p className="text-light opacity-75 mb-3">
                  Connecting Nigerian farmers directly to customers, ensuring fresh produce, 
                  fair prices, and sustainable agriculture across all 36 states.
                </p>
                <div className="d-flex gap-3">
                  <Button variant="outline-success" size="sm" className="rounded-circle p-2" href="https://facebook.com" target="_blank">
                    <i className="bi bi-facebook"></i>
                  </Button>
                  <Button variant="outline-success" size="sm" className="rounded-circle p-2" href="https://twitter.com" target="_blank">
                    <i className="bi bi-twitter-x"></i>
                  </Button>
                  <Button variant="outline-success" size="sm" className="rounded-circle p-2" href="https://instagram.com" target="_blank">
                    <i className="bi bi-instagram"></i>
                  </Button>
                  <Button variant="outline-success" size="sm" className="rounded-circle p-2" href="https://linkedin.com" target="_blank">
                    <i className="bi bi-linkedin"></i>
                  </Button>
                </div>
              </div>
            </Col>

            {/* Quick Links */}
            <Col lg={2} md={6}>
              <h5 className="fw-bold mb-3 text-success">Quick Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <Link 
                    to="/marketplace" 
                    className="text-light p-0 text-decoration-none opacity-75 d-block"
                    style={{ textDecoration: 'none' }}
                  >
                    🛒 Marketplace
                  </Link>
                </li>
                <li className="mb-2">
                  <Link 
                    to="/aboutpage" 
                    className="text-light p-0 text-decoration-none opacity-75 d-block"
                    style={{ textDecoration: 'none' }}
                  >
                    ℹ️ About Us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link 
                    to="/contactpage" 
                    className="text-light p-0 text-decoration-none opacity-75 d-block"
                    style={{ textDecoration: 'none' }}
                  >
                    📞 Contact
                  </Link>
                </li>
                <li className="mb-2">
                  <Link 
                    to="/farmers" 
                    className="text-light p-0 text-decoration-none opacity-75 d-block"
                    style={{ textDecoration: 'none' }}
                  >
                    👨‍🌾 For Farmers
                  </Link>
                </li>
              </ul>
            </Col>

            {/* Services */}
            <Col lg={2} md={6}>
              <h5 className="fw-bold mb-3 text-success">Services</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="text-light opacity-75">🚚 Home Delivery</span>
                </li>
                <li className="mb-2">
                  <span className="text-light opacity-75">📦 Bulk Orders</span>
                </li>
                <li className="mb-2">
                  <span className="text-light opacity-75">💳 Secure Payment</span>
                </li>
                <li className="mb-2">
                  <span className="text-light opacity-75">🎯 Quality Assurance</span>
                </li>
                <li className="mb-2">
                  <span className="text-light opacity-75">📱 Mobile Support</span>
                </li>
              </ul>
            </Col>

            {/* Contact Info */}
            <Col lg={4} md={6}>
              <h5 className="fw-bold mb-3 text-success">Get in Touch</h5>
              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-envelope me-3 text-success"></i>
                  <span className="text-light opacity-75">info@agrohubstore.ng</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-phone me-3 text-success"></i>
                  <span className="text-light opacity-75">+234 800 AGROHUB</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <i className="fas fa-map-marker-alt me-3 text-success"></i>
                  <span className="text-light opacity-75">Lagos, Abuja, Port Harcourt & All Nigeria</span>
                </div>
              </div>
              
              {/* Newsletter Signup */}
              <div className="mt-4">
                <h6 className="fw-bold mb-2">📧 Stay Updated</h6>
                <p className="small text-light opacity-75 mb-2">
                  Get fresh deals and farming tips delivered to your inbox
                </p>
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Your email address"
                    style={{ fontSize: '0.9rem' }}
                  />
                  <Button variant="success" type="button">
                    Subscribe
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          {/* Bottom Footer */}
          <hr className="my-4 border-secondary" />
          <Row className="align-items-center">
            <Col md={6}>
              <p className="mb-0 small text-light opacity-75">
                © 2025 <strong className="text-success">AgroHub</strong>. All rights reserved. 
                Made with ❤️ for Nigerian Agriculture.
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="d-flex flex-wrap justify-content-md-end gap-3 mt-2 mt-md-0">
                <Button variant="link" className="text-light p-0 small text-decoration-none opacity-75">
                  Privacy Policy
                </Button>
                <Button variant="link" className="text-light p-0 small text-decoration-none opacity-75">
                  Terms of Service
                </Button>
                <Button variant="link" className="text-light p-0 small text-decoration-none opacity-75">
                  FAQ
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer;