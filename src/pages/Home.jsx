import { Button, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import { useState } from "react";

function Home() {
    const [open, setOpen] = useState(false)

    return <Grid container spacing={2} fixed>
        <Grid item xs={12}>
            <Button onClick={() => setOpen(true)}>Sidebar</Button>
            <Typography variant="h1">Musa eCommerce </Typography>
        </Grid>
        <Grid item xs={12} md={10}>
            <Typography>Prodotti</Typography>
        </Grid>
        <Drawer open={open} onClose={() => setOpen(false)}>
            <List>
                <ListItem>
                    <ListItemButton>
                        <ListItemIcon>
                            <ShoppingBasket />
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemText primary="Carrello" />
                </ListItem>
            </List>
        </Drawer>
    </Grid>
}

export default Home