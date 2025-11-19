import { useState } from "react";
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, } from "@mui/material";
import { currencyTRY } from "../../utilis/format";
import { Delete } from "@mui/icons-material"
import { useCartContext } from "../../context/CartContext";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import requests from "../../api/apiClient";
import { CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, deleteItemFromCart, setCart } from "./cartSlice";


export default function CartPage() {
  const { cart, status } = useSelector((state) => state.cart)
  const dispatch = useDispatch();

  const subTotal = cart?.cartItems.reduce((toplam, item) => toplam + item.product.price * item.product.quantity, 0);

  const cargo = 120;
  const total = subTotal + cargo;

  if (!cart || cart.cartItems.length === 0)
    return <Typography component="h4" color="error" textAlign="center">Sepetinizde ürün yok</Typography>;



  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 100 }}></TableCell>
            <TableCell>Ürün</TableCell>
            <TableCell sx={{ width: 120 }}>Fiyat</TableCell>
            <TableCell sx={{ width: 170 }}>Adet</TableCell>
            <TableCell sx={{ width: 120 }}>Toplam</TableCell>
            <TableCell sx={{ width: 50 }}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.cartItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <img
                  src={`http://localhost:5001/images/${item.product.image}`}
                  style={{ width: "100%" }}
                />
              </TableCell>
              <TableCell>{item.product.title}</TableCell>
              <TableCell>{currencyTRY.format(item.product.price)}</TableCell>
              <TableCell>
                <Button onClick={() => dispatch(addItemToCart({ productId: item.product.productId }))}>
                  {status === "pendingAddItem " + item.product.productId ? (
                    <CircularProgress size="20px" />
                  ) : (
                    <AddCircleOutlineIcon />
                  )}
                </Button>

                {item.product.quantity}
                <Button
                  onClick={() => dispatch(deleteItemFromCart({ productId: item.product.productId, quantity: 1, key: "single", }))}
                >
                  {status === "pendingDeleteItem " + item.product.productId + "single" ? (
                    <CircularProgress size="20px" />
                  ) : (
                    <RemoveCircleOutlineIcon />
                  )}
                </Button>
              </TableCell>
              <TableCell>
                {currencyTRY.format(item.product.price * item.product.quantity)}
              </TableCell>
              <TableCell>
                <Button onClick={() => dispatch(deleteItemFromCart({ productId: item.product.productId, quantity: item.product.quantity, key: "all" }))} color="error">
                  {status === "pendingDeleteItem " + item.product.productId + "all" ? (
                    <CircularProgress size="20px" />
                  ) : (
                    <Delete />
                  )}
                </Button>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell align="right" colSpan={5}>Ara Toplam</TableCell>
            <TableCell align="right" colSpan={5}>{currencyTRY.format(subTotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" colSpan={5}>Kargo Bedeli</TableCell>
            <TableCell align="right" colSpan={5}>{currencyTRY.format(cargo)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" colSpan={5}>Toplam</TableCell>
            <TableCell align="right" colSpan={5}>{currencyTRY.format(total)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer >
  );
}

