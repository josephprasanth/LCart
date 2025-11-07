import React, { useEffect, useState, useContext } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import data from "../data/inventory.json";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Products() {
  const [products, setProducts] = React.useState([]);
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Converting Price Type To Number
    const normalizedProductPrice = data.items.map((item) => ({
      ...item,
      price: Number(item.price),
    }));
    setProducts(normalizedProductPrice);
    console.log(data.items);
  }, []);

  const handleAdd = (product) => {
    if (!product.available) return;
    dispatch({ type: "ADD_TO_CART", product });
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Button
        variant="outlined"
        sx={{ mb: 2 }}
        startIcon={
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCartIcon />
          </Badge>
        }
      >
        Go to Cart
      </Button>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
        }}
        gutterBottom
      >
        Product List
      </Typography>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} size={{ xs: 12, md: 6, lg: 4 }}>
            <Card variant="outlined" sx={{ borderWidth: 2, borderRadius: 3 }}>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {product.name}
                </Typography>
                <Typography>Brand: {product.brand}</Typography>
                <Typography>Price: {product.price} SEK</Typography>
                <Typography>
                  {" "}
                  {product.available ? "In Stock" : "Out of Stock"}
                </Typography>
                <Button
                  variant="contained"
                  sx={{ mt: 1 }}
                  disabled={!product.available}
                  onClick={() => handleAdd(product)}
                >
                  Add To Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
