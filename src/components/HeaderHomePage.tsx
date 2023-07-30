import logo from '/src/assets/images/logo.jpg';

export default function HeaderHomePage() {
  return (
    <div className='nav-bar'>
      <img src={logo} alt='' />
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
