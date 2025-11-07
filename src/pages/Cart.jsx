import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, dispatch } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <Container sx={{ mt: 4 }}>
      {/*Moved Button here*/}
      <Button variant="outlined" sx={{ mb: 2 }} onClick={() => navigate("/")}>
        Back to Products
      </Button>
      <Typography variant="h5" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 && <Typography>Your cart is empty.</Typography>}
      <Grid container spacing={2}>
        {cart.map((p) => (
          <Grid key={p.id} size={{ xs: 12, md: 6, lg: 4 }}>
            <Card variant="outlined" sx={{ borderWidth: 2, borderRadius: 3 }}>
              <CardContent>
                <Typography variant="h6">{p.name}</Typography>
                <Typography>Qty: {p.quantity}</Typography>
                <Typography>Price: {p.price} SEK</Typography>
                <Typography>
                  Subtotal: {(p.price * p.quantity).toFixed(2)} SEK
                </Typography>

                {/*Action Buttons*/}
                <Button
                  sx={{ mr: 1 }}
                  onClick={() => dispatch({ type: "DECREASE", id: p.id })}
                >
                  −
                </Button>
                <Button
                  sx={{ mr: 1 }}
                  onClick={() => dispatch({ type: "INCREASE", id: p.id })}
                >
                  +
                </Button>
                <Button
                  color="error"
                  onClick={() => dispatch({ type: "REMOVE", id: p.id })}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {cart.length > 0 && (
        <Typography variant="h6" sx={{ mt: 3, textAlign: "right" }}>
          Total: {total.toFixed(2)} SEK
        </Typography>
      )}
    </Container>
  );
}
