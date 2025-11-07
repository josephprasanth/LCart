import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import data from "../data/inventory.json";

export default function Products() {
  const [products, setProducts] = React.useState([]);
  useEffect(() => {
    setProducts(data.items);
    console.log(data.items);
  });
  // <pre>{JSON.stringify(product, null, 2)}</pre>S
  return (
    <Container sx={{ mt: 4 }}>
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
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
