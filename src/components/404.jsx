import { useEffect, useState } from "react"

const Page_404 = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
      setIsVisible(true)
    }, [])
  
    const containerStyle = {
      height: '100vh',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom, #ffffff, #f0f0f0)',
      fontFamily: 'Arial, sans-serif',
    }
  
    const contentStyle = {
      textAlign: 'center',
      opacity: isVisible ? 1 : 0,
      transform: `translateY(${isVisible ? 0 : '-20px'})`,
      transition: 'opacity 0.5s, transform 0.5s',
    }
  
    const headingStyle = {
      fontSize: '9rem',
      fontWeight: 800,
      color: '#333',
      marginBottom: '1rem',
    }
  
    const subheadingStyle = {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#666',
      marginBottom: '1rem',
    }
  
    const paragraphStyle = {
      fontSize: '1rem',
      color: '#888',
      marginBottom: '2rem',
    }
  
    const buttonStyle = {
      padding: '10px 20px',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#007bff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    }
  
    return (
      <div style={containerStyle}>
        <div style={contentStyle}>
          <h1 style={headingStyle}>404</h1>
          <h2 style={subheadingStyle}>Oops! Página no encontrada.</h2>
          <p style={paragraphStyle}>
            La página que estas buscando no existe o ha sido retirada.
          </p>
          <button 
            style={buttonStyle} 
            onClick={() => window.location.href = '/'}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
          >
            Go Home
          </button>
        </div>
      </div>
    )
}

export default Page_404