import Spline from '@splinetool/react-spline';
import { Content, Title, SplineContainer, Button } from './Car.styled';

export default function Home() {
  return (
    <>
      <SplineContainer>
        <Spline scene="https://prod.spline.design/kJoC29Xspa3pm1dm/scene.splinecode" />
      </SplineContainer>
      <Content>
        <Title>Car Rental Service</Title>
        <Button to="/catalog">Rent car now</Button>
      </Content>
    </>
  );
}
