import { Headers } from './Header.styled';
import { Logo } from './Logo/Logo';
import { Navigation } from './Navigation/Navigation';

const Header = () => {
  return (
    <Headers>
      <Logo />
      <Navigation />
    </Headers>
  );
};

export default Header;
