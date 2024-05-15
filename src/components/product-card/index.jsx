import { ShoppingBasket } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardHeader, Typography } from "@mui/material"

function ProductCard({title, description}) {
    return <Card>
        <CardHeader title={title} />
        <CardContent>
            <Typography>{description}</Typography>
        </CardContent>
        <CardActions><Button><ShoppingBasket color="primary" sx={{ marginRight: "4px"}}/> Aggiungi</Button></CardActions>
    </Card>
}

export default ProductCard