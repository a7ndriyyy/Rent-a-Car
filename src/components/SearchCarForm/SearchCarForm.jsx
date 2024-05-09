import { useState } from 'react';
import {
  Container,
  BrandWrapper,
  Span,
  PriceWrapper,
  InputWrapper,
  InputFrom,
  Label,
  InputTo,
  Button,
} from './SearchCarForm.styled';
import Dropdown from '../Dropdown/Dropdown';

import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { resetCars } from '../../redux/cars/slice';

const SearchCarForm = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const [price, setPrice] = useState(searchParams.get('price'));
  const [from, setFrom] = useState(searchParams.get('from'));
  const [to, setTo] = useState(searchParams.get('to'));

  const [params] = useState({
    make: searchParams.get('make') ?? '',
    price: searchParams.get('price') ?? '',
    from: searchParams.get('from') ?? '',
    to: searchParams.get('to') ?? '',
  });

  for (var key in params) {
    if (!params[key]) {
      delete params[key];
    }
  }

  const handleSelectBrand = async item => {
    dispatch(resetCars());

    if (item === 'All') {
      delete params['make'];
      setSearchParams(params);
      return;
    }

    params.make = item;
    setSearchParams(params);
  };

  const handleSearch = () => {
    price ? (params.price = price) : delete params['price'];
    from ? (params.from = from) : delete params['from'];
    to ? (params.to = to) : delete params['to'];
    setSearchParams(params);
  };
  const filterBrandOptions = [
    'All',
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Chrysler',
    'Kia',
    'Land',
  ];

  const filterPriceOptions = [
    '30',
    '40',
    '50',
    '60',
    '70',
    '80',
    '90',
    '100',
    '120',
    '140',
    '160',
    '180',
    '200',
  ];

  return (
    <Container>
      <BrandWrapper>
        <Span>Car brand</Span>
        <Dropdown
          items={filterBrandOptions}
          defaultSelect={params?.make || 'Enter the text'}
          onSelect={handleSelectBrand}
        />
      </BrandWrapper>
      <PriceWrapper>
        <Span>Price/ 1 hour</Span>
        <Dropdown
          items={filterPriceOptions}
          defaultSelect={price || 'To $'}
          onSelect={setPrice}
        />
      </PriceWrapper>
      <div>
        <Span>Car mileage / km</Span>
        <InputWrapper>
          <Label htmlFor="from">From</Label>
          <InputFrom
            id="from"
            type="number"
            value={from || ''}
            onChange={event => setFrom(event.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <Label htmlFor="to">To</Label>
          <InputTo
            id="to"
            type="number"
            value={to || ''}
            onChange={event => setTo(event.target.value)}
          />
        </InputWrapper>
      </div>
      <Button type="button" onClick={handleSearch}>
        Search
      </Button>
    </Container>
  );
};

export default SearchCarForm;
