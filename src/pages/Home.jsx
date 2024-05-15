import {  Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import { useState } from "react";
import Navbar from "../components/navbar";
import Produtcs from "../components/products";

function Home() {
    const [open, setOpen] = useState(false)

    return <Grid container spacing={2} fixed>
        <Grid item xs={12}>
            <Navbar setDrawerOpen={setOpen}/>
        </Grid>
        <Grid item xs={0} md={2}></Grid>
        <Grid item xs={12} md={8}>
            <Produtcs />
        </Grid>
        <Grid item xs={0} md={2}></Grid>
        <Drawer open={open} onClose={() => setOpen(false)}>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <ShoppingBasket />
                        </ListItemIcon>
                        <ListItemText primary="Carrello" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    </Grid>
}

export default Home