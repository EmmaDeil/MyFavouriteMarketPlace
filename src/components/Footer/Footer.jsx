import React from 'react'

const Footer = () => {

   return (
    <div>
      <div className='container-fluid'>
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
      </div>
    </div>
  )
}

export default Footer;