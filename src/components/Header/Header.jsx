import { Headers, Div, Menu, MenuLink } from './Header.styled';

const Header = () => {
  return (
    <Headers>
      <Div>
        <Menu>
          <li>
            <MenuLink to="/">Home</MenuLink>
          </li>
          <li>
            <MenuLink to="/catalog">Catalog</MenuLink>
          </li>
          <li>
            <MenuLink to="/favorites">Favorite</MenuLink>
          </li>
        </Menu>
      </Div>
    </Headers>
  );
};

export default Header;
