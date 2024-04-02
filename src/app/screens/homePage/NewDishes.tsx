import React from "react";

import { Box, Container, Stack } from "@mui/material";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import {CssVarsProvider} from "@mui/joy/styles"
import VisibilityIcon from "@mui/icons-material/Visibility"
import { AspectRatio, CardOverflow, Divider } from "@mui/joy";
import  DescriptionOutlinedIcon  from "@mui/icons-material/DescriptionOutlined";

const newDishes = [
    { productName: "Cutlet", imgPath:'/img/cutlet.webp'},
    { productName: "Lavash", imgPath:'/img/lavash.webp'},
    { productName: "Kebab", imgPath:'/img/kebab-fresh.webp'},
    { productName: "Kebab", imgPath:'/img/kebab.webp'},
]

export default function NewDishes() {
return (
    <div className="new-products-frame">
    <Container>
        <Stack className="main">
            <Box className = "category-title">Fresh Menu</Box>
            <Stack className="cards-frame">
                <CssVarsProvider>
                    {newDishes.length !== 0 ? (

                        newDishes.map((ele, index) => {
                            return(
                                <Card key={index} variant="outlined" className = "card">
                        <CardOverflow>
                            <div className="product-sale">Normal Size</div>
                            <AspectRatio ratio="1">
                                <img src={ele.imgPath} alt="" />
                            </AspectRatio>
                        </CardOverflow>
                        <CardOverflow variant="soft" className = "product-detail" >
                            <Stack className="info">
                                <Stack flexDirection={"row"}>
                                    <Typography className = "title">
                                        {ele.productName}
                                    </Typography>
                                    <Divider sx={{ width:'2px', height:"24px", bg: "#d9d9d9"}}/>
                                    <Typography className = {"price"}>12$</Typography>
                                </Stack>
                                <Stack>
                                    <Typography className = "views">
                                        20
                                        <VisibilityIcon sx={{fontSize:20, marginLeft : "5px"}}/>
                                    </Typography>
                                </Stack>
                            </Stack>
                        </CardOverflow>
                    </Card>
                        );
                    })
                      )   : (
<Box className = "no-data"> New products are not available! </Box>
                        )}
            
                </CssVarsProvider>
            </Stack>
        </Stack>
    </Container>
</div>
);
}