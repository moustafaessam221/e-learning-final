import React, { useState } from 'react';  

const SearchBar = () => {  
  const [searchTerm, setSearchTerm] = useState('');  

  const handleSearch = (event) => {  
    event.preventDefault();  
    console.log(`Searching for: ${searchTerm}`);  
  };  

  return (  
    <form className="form-inline my-2 my-lg-0" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>  
      <input  
        className="form-control mr-sm-2"  
        type="search"  
        placeholder="Search"  
        aria-label="Search"  
        value={searchTerm}  
        onChange={(event) => setSearchTerm(event.target.value)}  
        style={{ 
          borderColor: '#F2613F', 
          padding: '0.5rem 1rem', 
          borderRadius: '8px', 
          marginRight: '10px', 
          fontSize: '16px' 
        }}  
      />  
      <button 
        className="btn btn-outline-primary my-2 my-sm-0" 
        type="submit" 
        onClick={handleSearch} 
        style={{ 
          backgroundColor: '#F2613F', 
          color: 'white', 
          padding: '0.5rem 1rem', 
          borderRadius: '8px', 
          fontSize: '16px', 
          border: 'none', 
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}  
        onMouseEnter={(e) => e.target.style.backgroundColor = '#9B3922'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#F2613F'}
      >  
        Search  
      </button>  
    </form>  
  );  
};  

export default SearchBar;
