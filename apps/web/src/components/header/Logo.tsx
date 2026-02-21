import nariLogoSvg from '../../assets/icons/nari-logo.svg';
import { Link } from 'react-router-dom';

export interface LogoProps {
  href?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  href = '/',
  title = 'Nari Swasthya',
  subtitle = "Women's Complete Health",
  className = '',
}) => {
  return (
    <div className={`logo ${className}`.trim()}>
      <div className="logo-icon">
        <img src={nariLogoSvg} alt="" className="logo-svg" />
      </div>
      <div className="logo-text">
        <Link to={href}>{title}</Link>
        <span>{subtitle}</span>
      </div>
    </div>
  );
};

export default Logo;
