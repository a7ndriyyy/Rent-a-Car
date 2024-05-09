import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container, SectionCatalog, Button } from './CarList.styled';

import { getAllCarsThunk } from '../../redux/cars/thunk';
import { incPage } from '../../redux/cars/slice';
import { resetCars } from '../../redux/cars/slice';

import CarItem from '../CarItem/CarItem';

import Loader from '../Loader/Loader';

import SearchCarForm from '../SearchCarForm/SearchCarForm';

const CarList = () => {
  const [searchParams] = useSearchParams();

  const make = searchParams.get('make');
  const price = searchParams.get('price');
  const from = searchParams.get('from');
  const to = searchParams.get('to');
  const selectAllCars = state => state.cars.items;

  const selectPage = state => state.cars.page;

  const selectLoading = state => state.cars.isLoading;

  const cars = useSelector(selectAllCars);
  const isLoading = useSelector(selectLoading);
  const page = useSelector(selectPage);

  const [filteredCars, setFilteredCars] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCarsThunk({ page, make }));
  }, [dispatch, page, make]);

  useEffect(() => {
    return () => {
      dispatch(resetCars());
    };
  }, [dispatch]);

  useEffect(() => {
    let tempCars = [...cars];

    if (price) tempCars = tempCars.filter(car => car.rentalPrice <= price);

    if (from && to)
      tempCars = tempCars.filter(
        car => car.mileage >= from && car.mileage <= to
      );

    setFilteredCars(tempCars);
  }, [cars, price, from, to]);

  const handleLoadMore = () => {
    dispatch(incPage());
  };

  return (
    <>
      <Container>
        <SearchCarForm />
        <SectionCatalog>
          {filteredCars &&
            filteredCars.map(car => {
              return <CarItem key={car.id} data={car} />;
            })}
        </SectionCatalog>
        {isLoading && <Loader />}
        {page < 3 && !make && (
          <Button type="button" onClick={handleLoadMore}>
            Load more
          </Button>
        )}
      </Container>
    </>
  );
};

export default CarList;
