import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import {
  Backdrop,
  ModalWrapper,
  CloseButton,
  ModalImage,
  Title,
  Model,
  OptionsWrapper,
  OptionsTitle,
  Option,
  Description,
  ConditionsWrapper,
  ConditionsItem,
  Button,
  Link,
  Span,
} from './Modal.styled';
import closeIcon from '../../images/close-icon.svg';

const modalRoot = document.querySelector('#root');

const Modal = ({ onClose, data }) => {
  const modalRef = useRef(null);

  const {
    id,
    make,
    model,
    year,
    address,
    accessories,
    functionalities,
    rentalCompany,
    rentalPrice,
    img,
    type,
    mileage,
    engineSize,
    fuelConsumption,
    description,
    rentalConditions,
  } = data;

  const city = address.split(',')[1];
  const country = address.split(',')[2];
  const conditions = rentalConditions.split('\n');

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose(false);
      }
    };

    const handleClose = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClose);
    document.body.classList.add('body-scroll-lock');
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClose);
      document.body.classList.remove('body-scroll-lock');
    };
  }, [onClose]);

  return createPortal(
    <Backdrop>
      <ModalWrapper ref={modalRef} onClick={event => event.stopPropagation()}>
        <CloseButton onClick={() => onClose(false)}>
          <img src={closeIcon} width={24} alt="Close" />
        </CloseButton>
        <div>
          <ModalImage src={img} alt={model} />
          <Title>
            {`${make} `}
            <Model>{model}</Model>
            {`, ${year}`}
          </Title>
          <OptionsWrapper>
            <Option>{city}</Option>
            <Option>{country}</Option>
            <Option>Id: {id}</Option>
            <Option>Year: {year}</Option>
            <Option>Type: {type}</Option>
          </OptionsWrapper>

          <OptionsWrapper>
            <Option>Fuel Consumption:{fuelConsumption}</Option>
            <Option>
              Engine Size: {engineSize}
              {rentalCompany}
            </Option>
          </OptionsWrapper>

          <Description>{description}</Description>

          <OptionsTitle>Accessories and functionalities:</OptionsTitle>

          <OptionsWrapper>
            {accessories.map((item, i) => (
              <Option key={i}>{item}</Option>
            ))}
          </OptionsWrapper>

          <OptionsWrapper>
            {functionalities.map((item, i) => (
              <Option key={i}>{item}</Option>
            ))}
          </OptionsWrapper>

          <OptionsTitle>Rental Conditions:</OptionsTitle>

          <ConditionsWrapper>
            <ConditionsItem>
              {conditions[0].split(':')[0]}:{' '}
              <Span>{conditions[0].split(':')[1]}</Span>
            </ConditionsItem>
            <ConditionsItem>{conditions[1]}</ConditionsItem>
          </ConditionsWrapper>
          <ConditionsWrapper>
            <ConditionsItem>{conditions[2]}</ConditionsItem>
            <ConditionsItem>
              Mileage:{' '}
              <Span>{new Intl.NumberFormat('en-US').format(mileage)}</Span>
            </ConditionsItem>
            <ConditionsItem>
              Price: <Span>{rentalPrice}</Span>
            </ConditionsItem>
          </ConditionsWrapper>
          <Link href="tel:+33750000000">
            <Button type="button">Rental car</Button>
          </Link>
        </div>
      </ModalWrapper>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;
