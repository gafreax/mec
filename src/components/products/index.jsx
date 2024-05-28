import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

import ProductCard from "../product-card";

function Produtcs() {
    const products = useSelector(state => state.products.list)

    return <Grid container spacing={2}>
            { products?.filter(product => product).map(product => 
                <Grid item sx={{px:{xs:"8px",sm:"2px"}}} xs={12} md={6} lg={4} xl={3} key={product}>
                    <ProductCard productId={product.id} />
                </Grid>
            )  
            }
        </Grid> 
}

export default Produtcs