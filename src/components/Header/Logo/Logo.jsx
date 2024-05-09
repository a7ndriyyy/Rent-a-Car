import { StyledLogoLink } from './Logo.styled';
import { FaCar } from 'react-icons/fa';

export const Logo = () => {
  return (
    <StyledLogoLink to={'/'}>
      <FaCar
        size={50}
        color="white"
        style={{
          display: 'flex',
          marginLeft: '65px',
          justifyItems: 'center',
          alignContent: 'center',
        }}
      />
    </StyledLogoLink>
  );
};
