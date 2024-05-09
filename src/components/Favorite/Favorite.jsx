import { useSelector } from 'react-redux';

import { Container, Catalog } from './Favorite.styled';

import Card from '../CarItem/CarItem';

export const selectAllFavoritesCars = state => state.favorites.items;

const Favorite = () => {
  const cars = useSelector(selectAllFavoritesCars);

  return (
    <>
      <Container>
        <Catalog>
          {cars.length &&
            cars.map(car => {
              return <Card key={car.id} data={car} />;
            })}
        </Catalog>
      </Container>
    </>
  );
};

export default Favorite;
