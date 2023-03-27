import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { Grid, Card } from "@mui/material";
import { CardMedia, CardContent } from "@mui/material";
function Content () {
  return (
    <Grid direction="column">
    <Box>
        <Typography variant="h4" mb={3}>
            Welcome to My Website
        </Typography>
        <Typography variant="body1" mb={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, ut excepturi ex doloribus sint ducimus nobis
            eius, illum dignissimos delectus eligendi voluptates
            incidunt consectetur a facere placeat omnis eum voluptas
            saepe itaque? Ab facere odit vero autem.
        </Typography>

        <Typography variant="body1" mb={3}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Assumenda fugit non eius iusto dicta possimus, quisquam
            nihil amet at adipisci, veniam tenetur repudiandae saepe
            laboriosam dolorum illo! Animi harum quibusdam consequuntur
            totam! Ipsum, soluta nemo?
        </Typography>
    </Box>

    <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6}>
            <Card>
                <CardMedia
                    sx={{ height: 180 }}
                    image="https://www.tiger-corporation.com/wp-content/uploads/2023/02/hero-img-recipe-mochi-67766d7ed1d199429b52b892905da671.jpg"
                    title="seaview"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Card Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
                        quidem nesciunt dolore inventore soluta aliquid architecto iste
                        quo provident rem error repudiandae quasi deleniti. Nisi quae odit
                        laborum voluptate temporibus, quia optio molestias.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>

        <Grid item  xs={12} sm={6} md={6}>
        <Card>
                <CardMedia
                    sx={{ height: 180 }}
                    image="https://fullofplants.com/wp-content/uploads/2020/07/how-to-make-vegan-chocolate-mochi-chewy-tender-dairy-free-gluten-free-sweet-thumb.jpg"
                    title="seaview"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Card Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
                        quidem nesciunt dolore inventore soluta aliquid architecto iste
                        quo provident rem error repudiandae quasi deleniti. Nisi quae odit
                        laborum voluptate temporibus, quia optio molestias.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
            
        <Grid item  xs={12} sm={6} md={6}>
            <Card>
                <CardMedia
                    sx={{ height: 180 }}
                    image="https://byfood.b-cdn.net/api/public/assets/8356/Mizu-Shingen-Mochi?optimizer=image"
                    title="seaview"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Card Title
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
                        quidem nesciunt dolore inventore soluta aliquid architecto iste
                        quo provident rem error repudiandae quasi deleniti. Nisi quae odit
                        laborum voluptate temporibus, quia optio molestias.
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
</Grid>
  );
};

export default Content;