import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import HomeIcon from '@mui/icons-material/Home';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Footer.css"
import { Email, Phone } from '@mui/icons-material';
export default function Footer() {
  return (
    <MDBFooter bgColor='black'  className='text-center text-lg-start text-muted footer'>
      <section className='footer-section'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3 footer-row'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 footer-col'>
              <h6 className='text-uppercase fw-bold mb-4'>
               <img src="/assets/img/icons/logo1.png" alt="" className='footer-img' />
                DepoFarma
              </h6>
              <p>
                A simple app used to find availables pharmacies warehouses in a simple and effective way
              </p>
              <div className="footer-socials">
                <a>
                    <FacebookIcon color='black' />
                </a>
                <a>
                    <LinkedInIcon color='black' />
                </a>
                <a>
                    <TwitterIcon color='black' />
                </a>
                <a>
                    <InstagramIcon color='black' />
                </a>
              </div>
            </MDBCol>


            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 footer-col'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Resources
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Testimonials
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQ
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 footer-col'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
              <HomeIcon fontSize="small" color='white' />
                New York, NY 10012, US
              </p>
              <p>
                <Email fontSize="small" color='white' />
                info@example.com
              </p>
              <p>
                <Phone fontSize="small" color='white' /> + 01 234 567 88
              </p>
              <p>
              <Phone fontSize="small" color='white' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Kaccenu.ao
        </a>
      </div>
    </MDBFooter>
  );
}