import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <div>
         {/* <div className="container-fluid" style={{ backgroundColor: '#e3f2fd' }}>
            <ScrollVelocity texts={['React Bits', 'Scroll Down']}
               velocity={velocity}
               className="custom-scroll-text" />
         </div> */}
         <nav className="navbar navbar-expand-lg bg-transparent text-body">
            <div className="container-fluid" style={{ justifyContent: '' }}>
               <a className="navbar-brand" href="#">
                  Agri<img src="imagelog.png" alt="logo" width="30" height="24"></img>Hub
               </a>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Sell on Agrihub</Link>
                     </li>
                     <li className="nav-item">
                        <Link className="nav-link" to="/about">Store Locator</Link>
                     </li>
                     <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-question-lg"></i>
                           Help
                        </Link>
                        <ul className="dropdown-menu">
                           <li><Link className="dropdown-item" to="#">Action</Link></li>
                           <li><Link className="dropdown-item" to="#">Another action</Link></li>
                           <li><hr className="dropdown-divider" /></li>
                           <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                        </ul>
                     </li>
                  </ul>
                  <form className="d-flex" role="search">
                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                     <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                  <button className="btn btn-outline-danger" type="button">Login/signup</button>
                  <button className="btn btn-outline-secondary" type="button">Cart</button>
               </div>
            </div>
         </nav>
      </div>
   )
}

export default Navbar;