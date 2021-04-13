import './styles.css';
import { ReactComponent as LogoImage } from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => (

    <header className="main-header">
        <LogoImage />
        <Link to="/">
            <div className="logo-text">
                <span className="logo-text-1">Big Game</span>
                <span className="logo-text-2"> Survey</span>
            </div>
        </Link>
    </header>    
);

export default Header;