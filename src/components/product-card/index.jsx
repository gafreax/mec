import { ShoppingBasket } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { useSelector } from "react-redux"

import "./style.scss"

function ProductCard({ productId }) {
    // const { title, description, thumbnail } = product
    const products = useSelector(state => state.products.list)
    const product = products.find(product => product.id === productId)
    const { title, description, thumbnail } = product

    return <Card sx={{ height: "600px"}}>
        <CardHeader title={title} className="cardHeader"/>
        <CardMedia component="img" 
            image={thumbnail}
            alt={title}
            sx={{ height: "300px"}}
        />
        <CardContent sx={{ height: "140px"}}>
            <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
            <Button>
                <ShoppingBasket color="primary" sx={{ marginRight: "4px"}}/> Aggiungi
            </Button>
        </CardActions>
    </Card>
}

export default ProductCard