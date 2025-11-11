import { Grid, Paper, Typography } from "@mui/material";

export default function ProductItem({ product }) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={5} lg={4}>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <img
            src={`http://localhost:5001/images/${product.image}`}
            alt={product.title}
            style={{ width: "100%" }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={7} lg={8}>
        <Paper variant="outlined" sx={{ p: 3 }}>
          <Typography component="h1" variant="h4" color="secondary.dark">
            {product.title}
          </Typography>
          <Typography variant="body1">{product.description}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
