
import "./Designed.css"
import { Button } from 'react-bootstrap';
function Designed() {
  return (
    <div className='designed-container'>
        <div className="designed-texts">
            <h6>Download our app now</h6>
            <p>The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook.</p>
            <div className="designed-texts-buttons">
            <button variant="primary" size='lg'>
              <img src="/src/assets/img/illustrations/google-play.png" />
            </button>

            <button variant="primary" size='lg'>
              <img src="/src/assets/img/illustrations/app-store.png" />
            </button>
            </div>
        </div>
        
        <div className="designed-img"><img src='/src/assets/img/illustrations/ultimate-phone.png' /></div>
        
    </div>
  );
}

export default Designed;