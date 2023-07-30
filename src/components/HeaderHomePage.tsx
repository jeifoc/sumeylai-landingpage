export default function HeaderHomePage() {
  return (
    <div className='nav-bar'>
      <img src='./src/assets/images/logo.jpg' alt='' />
      <ul className='nav-bar--options'>
        <li>
          <a href='#'>Nuestro trabajo</a>
        </li>
        <li>
          <a href='#'>Sobre nosotros</a>
        </li>
        <li>
          <a href='#contact'>Contacto</a>
        </li>
      </ul>
    </div>
  );
}
