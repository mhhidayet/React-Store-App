import { Grid, Paper, Typography } from "@mui/material";

export default function ProductItem({ product }) {
    // Ürün yüklenmemişse hiçbir şey render etme
    if (!product) return null;

    return (
        <Grid container spacing={2}>
            {/* Sol kısım - Ürün görseli */}
            <Grid item lg={4} md={5} sm={6} xs={12}>
                <Paper variant="outlined" sx={{ p: 3 }}>
                    <img
                        src={`http://localhost:5001/images/${product.image}`}
                        alt={product.title}
                        style={{ width: "100%", borderRadius: "12px" }}
                    />
                </Paper>
            </Grid>

            {/* Sağ kısım - Ürün bilgileri */}
            <Grid item lg={8} md={7} sm={6} xs={12}>
                <Paper variant="outlined" sx={{ p: 3 }}>
                    <Typography component="h1" variant="h4" color="secondary.dark" gutterBottom>
                        {product.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        {product.description}
                    </Typography>
                    {product.price && (
                        <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
                            {product.price} ₺
                        </Typography>
                    )}
                </Paper>
            </Grid>
        </Grid>
    );
}
