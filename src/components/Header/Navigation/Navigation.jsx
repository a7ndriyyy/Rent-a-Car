import { Div, Menu, MenuLink } from '../Header.styled';

export const Navigation = () => {
  return (
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
  );
};
