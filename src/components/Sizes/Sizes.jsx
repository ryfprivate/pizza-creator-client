import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Size = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
  align-items: center;
  cursor: pointer;
  &.active > img {
    border-color: #e6e6e6;
  }
`;

const Image = styled.img`
  border: 8px solid transparent;
  border-radius: 50%;
  :hover {
    border-color: #e6e6e6;
  }
  &.large {
    height: 5rem;
  }
  &.medium {
    height: 4rem;
  }
  &.small {
    height: 3rem;
  }
`;

const Span = styled.span`
  text-transform: capitalize;
`;

const Sizes = ({ sizes, selectedSize, onClick }) => {
  return (
    <Container>
      {sizes.map(size => {
        const { name, imgUrl } = size;
        return (
          <Size
            key={name}
            className={`${
              selectedSize && name === selectedSize.name ? 'active' : ''
            }`}
            onClick={() => {
              onClick(size);
            }}
          >
            <Image className={`${name}`} src={imgUrl} alt={name} />
            <Span>{name}</Span>
          </Size>
        );
      })}
    </Container>
  );
};

Sizes.propTypes = {
  sizes: PropTypes.array.isRequired,
  selectedSize: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    imgUrl: PropTypes.string
  }),
  onClick: PropTypes.func.isRequired
};

export default Sizes;
