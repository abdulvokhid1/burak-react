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

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveNewDishes, retrievePopularDishes } from "./selector";
import { serverApi } from "../../../lib/config";
import { Product } from "../../../lib/types/product";
import { ProductCollection } from "../../../lib/enums/product.enum";

/** REDUX SLICE & SELECTOR **/

const newDishesRetriver = createSelector(
  retrieveNewDishes,
  (newDishes) => ({newDishes})
);

export default function NewDishes() {
    const { newDishes} = useSelector(newDishesRetriver)
return (
    <div className="new-products-frame">
    <Container>
        <Stack className="main">
            <Box className = "category-title">Fresh Menu</Box>
            <Stack className="cards-frame">
                <CssVarsProvider>
                    {newDishes.length !== 0 ? (

                        newDishes.map((product:Product) => {
                            const imagePath = `${serverApi}/${product.productImages[0]}`
                            const sizeVolume = product.productCollection === ProductCollection.DRINK ? 
                            product.productVolume + "l" :product.productSize + "size"
                            return(
                                <Card key={product._id} variant="outlined" className = "card">
                        <CardOverflow>
                            <div className="product-sale">{sizeVolume}</div>
                            <AspectRatio ratio="1">
                                <img src={imagePath} alt="" />
                            </AspectRatio>
                        </CardOverflow>
                        <CardOverflow variant="soft" className = "product-detail" >
                            <Stack className="info">
                                <Stack flexDirection={"row"}>
                                    <Typography className = "title">
                                        {product.productName}
                                    </Typography>
                                    <Divider sx={{ width:'2px', height:"24px", bg: "#d9d9d9"}}/>
                                    <Typography className = {"price"}>${product.productPrice}</Typography>
                                </Stack>
                                <Stack>
                                    <Typography className = "views">
                                        {product.productViews}
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