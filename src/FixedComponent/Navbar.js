import React from 'react';  
import { Link } from 'react-router-dom';  
import SearchBar from './Search';  

const Navigationbar = () => {  
  return (  
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#004085' }}> {/* Dark Blue Background */}  
      <div className="container-fluid">  
        {/* Brand Section */}
        <Link to="/" className="navbar-brand text-white" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>EduSpace</Link>  

        {/* Toggler for Small Screens */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
          style={{ borderColor: '#fff' }}
        >  
          <span className="navbar-toggler-icon"></span>  
        </button>  

        {/* Centered Search Bar */}
        <div className="collapse navbar-collapse justify-content-center">  
          <SearchBar />  
        </div>  

        {/* Right-Aligned Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">  
          <ul className="navbar-nav ms-auto">  
            <li className="nav-item">  
              <Link to="/" className="nav-link text-white" style={{ padding: '10px', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#F2613F'}
                onMouseLeave={(e) => e.target.style.color = '#fff'}
              >
                Home
              </Link>  
            </li>  
            <li className="nav-item">  
              <Link to="/about" className="nav-link text-white" style={{ padding: '10px', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#F2613F'}
                onMouseLeave={(e) => e.target.style.color = '#fff'}
              >
                About
              </Link>  
            </li>  
            <li className="nav-item">  
              <Link to="/courses" className="nav-link text-white" style={{ padding: '10px', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#F2613F'}
                onMouseLeave={(e) => e.target.style.color = '#fff'}
              >
                Courses
              </Link>  
            </li>  
            <li className="nav-item">  
              <Link to="/profile" className="nav-link text-white" style={{ padding: '10px', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#F2613F'}
                onMouseLeave={(e) => e.target.style.color = '#fff'}
              >
                Profile
              </Link>  
            </li>  
            <li className="nav-item">  
              <Link to="/contact" className="nav-link text-white" style={{ padding: '10px', transition: 'color 0.3s ease' }}
                onMouseEnter={(e) => e.target.style.color = '#F2613F'}
                onMouseLeave={(e) => e.target.style.color = '#fff'}
              >
                Contact
              </Link>  
            </li>  
          </ul>  
        </div>  
      </div>  
    </nav>  
  );  
};  

export default Navigationbar;