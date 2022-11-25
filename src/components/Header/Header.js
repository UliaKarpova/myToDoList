import './Header.css';

import image from '../../images/check.png';

function Header() {
    return (
        <header className='header'>
            <h1 className='header__title'>Список дел</h1>

            <img className='header__image' 
            src={image} alt='Лого' />
        </header>
    );
}

export default Header;
