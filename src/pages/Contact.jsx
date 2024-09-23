import React from 'react';  
  
const Contact = () => {  
  return (  
  <div className="container">  
 <h1>Contact Us</h1>  
 <p>Get in touch with us to learn more about EduSpace and how we can help you achieve your educational goals.</p>  
 <form>  
   <div className="form-group">  
  <label for="name">Name:</label>  
  <input type="text" className="form-control" id="name" />  
   </div>  
   <div className="form-group">  
  <label for="email">Email:</label>  
  <input type="email" className="form-control" id="email" />  
   </div>  
    <div className="form-group">  
  <label for="message">Message:</label>  
  <textarea className="form-control" id="message" />  
    </div>  
    <button type="submit" className="btn btn-primary">Send</button>  
 </form>  
  </div>  
  );  
};  
  
export default Contact;
