import { Card, CardActions, CardContent, CardMedia, IconButton, Typography, CardActionArea, Button } from "@mui/material"
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from "react-router";
import { currenyTRY } from "../utilis/format";

export default function ProdocutCard(product) {
    return (
        <Card>
            <CardActionArea component={Link} to={"/products/" + product.id}>
                <CardMedia sx={{ Height: 160, backgroundSize: "container" }} image={`http://localhost:5001/images/${product.image}`}
                />

                <CardContent>
                    <Typography gutterBottom variant="h6" component="h2" color="primary.dark">
                        {product.title}
                    </Typography>
                    <Typography variant="body1" color="secondary.dark">
                        {currenyTRY.format(product.price)}
                    </Typography>

                </CardContent>
            </CardActionArea>

            <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton>
                    <FavoriteIcon />
                    <FavoriteBorderIcon />
                </IconButton>
                <Button>Sepete Ekle</Button>
            </CardActions>

        </Card>

    )
}