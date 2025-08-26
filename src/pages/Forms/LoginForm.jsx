import React from 'react'

const LoginForm = () => {
   return (
      <div>
         <div className="container-fluid">
            <div className='row justify-content-space-between'>
               <div className="col">
                  <img src="path/to/your/image.jpg" alt="Description" />
               </div>
               <div className="col">
                  <h1>Login</h1>
                  <form>
                     <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" />
                     </div>
                     <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                     </div>
                     <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default LoginForm;