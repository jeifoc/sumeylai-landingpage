export default function Footer() {
  return (
    <>
      <div className='footer--main-container'>
        <div className='footer-container'>
          <div className='footer--open-hours'>
            <h6>Horario</h6>
            <p>Lunes - Sábado</p>
            <p>9:00 a.m. - 1:00 p.m.</p>
            <p>4:00 p.m. - 8:00 p.m.</p>
          </div>
          <div className='line'></div>
          <div className='footer--contact'>
            <h6>Contacto</h6>
            <div className='contact-item' id='contact'>
              <img src='./src/assets/icons/phone.png' alt='' />
              <p>+51 947 532 556</p>
            </div>
            <div className='contact-item'>
              <img src='./src/assets/icons/location.png' alt='' />
              <p>
                Transversal callao 834. Esquina con Av. Jose de Lama. 2do piso
                Sullana, Perú
              </p>
            </div>
            <div className='contact-item'>
              <img src='./src/assets/icons/mail.png' alt='' />
              <p>sumey_lg21@hotmail.com</p>
            </div>
          </div>
          <div className='line'></div>
          <div className='footer--network'>
            <a href='https://www.instagram.com/sumeylaiodonto/' target='_blank'>
              <img src='./src/assets/icons/instagram.svg' alt='' />
            </a>
            <a href='https://www.facebook.com/SumeyLaiOdonto' target='_blank'>
              <img src='./src/assets/icons/facebook.svg' alt='' />
            </a>
            <a>
              <img src='./src/assets/icons/whatsapp.svg' alt='' />
            </a>
          </div>
        </div>

        <div className='rights'>
          <p>
            Derechos reservados &copy; {new Date().getFullYear()} Sumey Lai -
            Odontología Integral
          </p>
        </div>
      </div>
    </>
  );
}
