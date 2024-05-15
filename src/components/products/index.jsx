import { Grid } from "@mui/material";
import ProductCard from "../product-card";


const products = [
    {
        title: "Prodotto 1",
        description: "Descrizione prodotto 1"
    },
    {
        title: "Prodotto 2",
        description: "Descrizione prodotto 2"
    },
    {
        title: "Prodotto 3",
        description: "Descrizione prodotto 3"
    },
    {
        title: "Prodotto 4",
        description: "Descrizione prodotto 4"
    },
    {
        title: "Prodotto 5",
        description: "Descrizione prodotto 5"
    },
    {
        title: "Prodotto 6",
        description: "Descrizione prodotto 6"
    },

]
function Produtcs() {
    return <Grid container spacing={2}>
            { products.map(product => 
                <Grid item xs={4} md={3} key={product}>
                    <ProductCard title={product.title} description={product.description}/>
                </Grid>
            )  
            }
        </Grid>
}

export default Produtcs