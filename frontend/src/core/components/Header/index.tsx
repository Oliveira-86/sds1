import './styles.css';
import { ReactComponent as LogoImage } from '../../assets/logo.svg';

const Header = () => (

    <header className="main-header">
        <LogoImage />
        <div className="logo-text">
            <span className="logo-text-1">Big Game</span>
            <span className="logo-text-2"> Survey</span>
        </div>
    </header>    
);

export default Header;