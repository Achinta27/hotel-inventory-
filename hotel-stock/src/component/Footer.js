import React from 'react'

const Footer = () => {
  const footerStyle = {
    
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: '#f1f1f1',
    padding: '10px 0',
    textAlign: 'center',
  };
  return (
    <>
    <hr/>
       <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()}  All rights reserved.</p>
    </footer>

    </>
  )
}

export default Footer
