import React from 'react';
import {
  Wrapper,
  Image,
  TitleWrapper,
  Title,
  Price,
  OptionsWrapper,
  Option,
  Button,
  ButtonFav,
  ButtonFavActive,
} from './CarItem.styled';
import Modal from '../Modal/Modal';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCar, deleteCar } from '../../redux/favorites/slice';

const CarItem = ({ data }) => {
  const {
    id,
    make,
    model,
    year,
    address,
    accessories,
    rentalCompany,
    rentalPrice,
    img,
    type,
    mileage,
  } = data;

  const city = address?.split(',')[1];
  const country = address?.split(',')[2];

  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const selectAllFavoritesCars = state => state.favorites.items;
  const favoritesCars = useSelector(selectAllFavoritesCars);

  useEffect(() => {
    if (favoritesCars.find(car => car.id === id)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [favoritesCars, dispatch, id]);

  const handleFavClick = () => {
    if (favoritesCars.find(car => car.id === id)) {
      dispatch(deleteCar(data.id));
    } else {
      dispatch(addCar(data));
    }
  };
  const handleMore = () => {
    setIsShowModal(true);
  };
  return (
    <Wrapper>
      <div>
        <Image src={img} alt="" />
        <TitleWrapper>
          <Title>
            {`${make} `}
            <span>{model}</span>
            {`, ${year}`}
          </Title>
          <Price>{rentalPrice}</Price>
        </TitleWrapper>
        <div>
          <OptionsWrapper>
            <Option>{city}</Option>
            <Option>{country}</Option>
            <Option>{rentalCompany}</Option>
            <Option>Premium</Option>
          </OptionsWrapper>
          <OptionsWrapper>
            <Option>{type}</Option>
            <Option>{make}</Option>
            <Option>{mileage}</Option>
            <Option>{accessories[0]}</Option>
          </OptionsWrapper>
        </div>
        <Button onClick={handleMore}>Learn more</Button>
      </div>
      {isFavorite ? (
        <ButtonFavActive onClick={handleFavClick}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z" />
          </svg>
        </ButtonFavActive>
      ) : (
        <ButtonFav onClick={handleFavClick}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z" />
          </svg>
        </ButtonFav>
      )}
      {isShowModal && <Modal onClose={setIsShowModal} data={data} />}
    </Wrapper>
  );
};

export default CarItem;
