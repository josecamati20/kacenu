import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Banner.css"
import { Button } from 'react-bootstrap';
function Banner() {
  return (
    <div className='banner-container'>
        <div className="banner-texts">
            <h2>Best app to find pharmaceutical warehouses</h2>
            <p>The best app to find thousandas of availables pharmaceutical warehouses the country.</p>
            <div className="banner-texts-buttons">
            <Button variant="primary" size='ms' className='banner-btn' >Download</Button>
            </div>
        </div>
        
        <div className="banner-img"><img src='/assets/img/illustrations/mobile.png' /></div>
        
    </div>
  );
}

export default Banner;