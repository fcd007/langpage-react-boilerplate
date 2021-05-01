import React, { useState } from "react";
import PropTypes from "prop-types";

import { Toolbar } from "./style";
import { GridRoot } from "components/atoms/Grid/style";

import Card from "components/molecules/Card/Card";
import CardBody from "components/molecules/CardBody/CardBody";
import CardMedia from "components/molecules/CardMedia/CardMedia";
import Heading from "components/atoms/Heading/Heading";
import Button from "components/atoms/Button/Button";

const ProductGrid = ({ products }) => {
  const [showAll, setShowAll] = useState(false);
  const filteredProducts = showAll ? products : products.slice(0, 3);

  return (
    <>
      <GridRoot md={3}>
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardMedia image={product.image} />
            <CardBody>
              <Heading>
                <h6>{product.title}</h6>
              </Heading>
              <p>{product.summary}</p>
              <Toolbar>
                <Button variant="link" color="primary">
                  SAIBA MAIS
                </Button>
              </Toolbar>
            </CardBody>
          </Card>
        ))}
      </GridRoot>
      {!showAll && (
        <Toolbar>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setShowAll(true);
            }}
          >
            Lista Completa de Serviços
          </Button>
        </Toolbar>
      )}
    </>
  );
};
ProductGrid.defaultProps = {
  products: [],
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      image: PropTypes.string,
      title: PropTypes.string,
      summary: PropTypes.string,
    })
  ),
};

export default ProductGrid;
