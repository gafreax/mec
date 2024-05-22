import { ShoppingBasket } from "@mui/icons-material"
import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { useSpring, animated } from "@react-spring/web"
import styled from '@emotion/styled'

import "./style.scss"

const MECCardMedia = styled(CardMedia)`
    height: 300px;
`
const MECCardHeader = styled(CardHeader)`
    & span {
        height: 32px;
        overflow: hidden;
        text-overflow: ${ props => props.isLong ? 'ellipsis': 'hidden'};
        white-space: nowrap;
        width: 286px
    }
`

const MECCard = styled(Card)`
    height: "600px";

    animation: scaleDown 0.4s ease;

    &:hover {
        cursor: pointer;
        animation: scaleUp 0.4s normal forwards;
    }

    @keyframes scaleDown {
        from {
            transform: scale(1.02);
        }
        to {
            transform: scale(1);
        }
    }

    @keyframes scaleUp {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.02);
        }
    }
}`

const AnimatedMECCard = animated(MECCard)

function ProductCard({ productId }) {
    // const { title, description, thumbnail } = product
    const products = useSelector(state => state.products.list)
    const cardAnimationStyle = useSpring({  config: { duration: 1000 }, opacity: 1, from: { opacity: 0 } });
    const product = products.find(product => product.id === productId)
    const { title, description, thumbnail } = product

    return <AnimatedMECCard style={cardAnimationStyle}>
        <MECCardHeader title={title} className="cardHeader" isLong={title?.length > 22} />
        <MECCardMedia component="img" 
            image={thumbnail}
            alt={title}
        />
        <CardContent sx={{ height: "140px"}}>
            <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
            <Button>
                <ShoppingBasket color="primary" sx={{ marginRight: "4px"}}/> Aggiungi
            </Button>
        </CardActions>
    </AnimatedMECCard>
}

export default ProductCard