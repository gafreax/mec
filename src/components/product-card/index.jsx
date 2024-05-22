import { ShoppingBasket } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { useSelector } from 'react-redux'
import styled from '@emotion/styled'

import "./style.scss"

const MECCardMedia = styled(CardMedia)`
    height: 300px;
`
const MECCardHeader = styled(CardHeader)`
    & span {
        text-overflow: ${ props => props.isLong ? 'ellipsis': 'hidden'};
    }
`
function ProductCard({ productId }) {
    
    const products = useSelector(state => state.products.list)
    const product = products.find(product => product.id === productId)
    const { title, description, thumbnail } = product

    return <Card className="card" sx={{ height:{xs:"420px", md:"600px"} }}>
        <MECCardHeader title={title} className="cardHeader" isLong={title?.length > 22} />
        <MECCardMedia component="img" 
            image={thumbnail}
            alt={title}
        />
        <CardContent sx={{ height: "140px", display:{xs:"none", md:"block"}}}>
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