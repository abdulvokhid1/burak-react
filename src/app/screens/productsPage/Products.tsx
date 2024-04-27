import {  Badge, Box, Button, CardContent, Container, Input, Stack } from "@mui/material";
import  MonetizationOnIcon  from "@mui/icons-material/MonetizationOn";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import  ArrowBackIcon  from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchBar from "../../components/search";
import {RemoveRedEye} from "@mui/icons-material";
import { Dispatch, createSelector } from "@reduxjs/toolkit";
import { Product } from "../../../lib/types/product";
import { Member } from "../../../lib/types/member";
import { setProducts } from "./slice";
import { retrieveProducts } from "./selector";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
    setProducts: (data: Product[]) => dispatch(setProducts(data))
  });
const productsRetriever = createSelector(retrieveProducts, (products) => ({
    products
}))
 const products = [
    {prooductName: "Cutlet", imgPath:"/img/cutlet.webp"},
    {prooductName: "Kebab", imgPath:"/img/kebab-fresh.webp"},
    {prooductName: "Kebab", imgPath:"/img/kebab.webp"},
    {prooductName: "Lavash", imgPath:"/img/lavash.webp"},
    {prooductName: "Lavash", imgPath:"/img/lavash.webp"},
    {prooductName: "Cutlet", imgPath:"/img/cutlet.webp"},
    {prooductName: "Kebab", imgPath:"/img/kebab.webp"},
    {prooductName: "Kebab", imgPath:"/img/kebab-fresh.webp"},
];



export default function Products(){

    
    return(
        <div className="products">
            <Container>
                <Stack flexDirection={"column"} alignItems={"center"}>

                    
                    <Stack className="avatar-big-box">
                        <Box className = 'top-text'>Burak Restaurant</Box>
                        <div className="searchbar" >
                        <SearchBar/>
                        </div>

                    </Stack>



                    <Stack className="dishes-filter-section">
                    <Button 
                        variant="contained"
                        color="primary"
                        className="order"
                        >
                        New
                        </Button>
                        <Button 
                        variant="contained"
                        color="secondary"
                        className="order"
                        >
                        Price
                        </Button>
                        <Button 
                        variant="contained"
                        color="secondary"
                        className="order"
                        >
                        Views
                        </Button>

                    </Stack>
                    <Stack className="list-category-section">
                        <Stack className="product-category">
                            <div className="category-main">
                                <Button  variant="contained" color="secondary" >
                                    Other
                                </Button>
                                <Button variant="contained" color="secondary" >
                                    Dessert
                                </Button>
                                <Button variant="contained" color="secondary" >
                                    Drink
                                </Button>
                                <Button variant="contained" color="secondary" >
                                    Salad
                                </Button>
                                <Button variant="contained" color="primary" >
                                    Dish
                                </Button>
                            </div>
                        </Stack>
                        <div className="popular-dishes-frame">
        <Container>
            <Stack className="popular-section">
                <Stack className="cards-frame">
         {products.length !== 0 ? (
                  products.map((ele, index) => {
                    return(
                        <Container className="card">
                            <img className = "product-img" src={ele.imgPath} alt="" />
                            <div className="product-size" style={{position:"absolute"}}>Normal size</div>
                            <Button className="shop-btn">
                                <img src={"/icons/shopping-cart.svg"}
                                style={{display:"flex"}} 
                                alt="" />
                            </Button>
                            <Button className="view-btn" sx={{ right : "36px", top : "180px"}}>
                                <Badge badgeContent = {20} color="secondary">
                                    <RemoveRedEye sx={{
                                        color: 20 ? "gray" : "white",
                                    }} />
                                </Badge>
                            </Button>
                            <Box className= "food-name">
                            <Box className="pro-name" >{ele.prooductName}</Box>
                            <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                                <img src="/icons/dollar.svg" alt="" />
                                <div style={{color:"#E3C08D"}}>15</div>
                            </div>
                            </Box>
                        </Container>
              )
           })
         ) : (
          <Box className = "no-data">Products are not available!</Box>
         )}
                </Stack>
            </Stack>
        </Container>
    </div>
                    </Stack>
                    <Stack className="pagination-section">
                        <Pagination 
                        count={3}
                        page={1}
                        renderItem={(item)=>(
                            <PaginationItem components={{
                                previous:ArrowBackIcon,
                                next:ArrowForwardIcon,
                            }}
                            {...item}
                            color="secondary"
                            />
                        )}
                        />
                    </Stack>
                </Stack>
            </Container>
                    <Stack className="family-brands">
                        <Container className="brands-wrapper">
                            <Box className = "brands-text">Our Family Brands</Box>
                            <div className="brands-img-wrapper">
                            <img className="brands-img" src="/img/gurme.webp" alt="" />
                            <img className="brands-img" src="/img/seafood.webp" alt="" />
                            <img className="brands-img" src="/img/sweets.webp" alt="" />
                            <img className="brands-img" src="/img/doner.webp" alt="" />
                            </div>
                        </Container>
                    </Stack>
            <div className="address">
                <Container>
                    <Stack className="address-area">
                        <Box className ="title">Our Address</Box>
                        <iframe 
                        style={{marginTop:"60px", width:"100%"}}
                        src="https://maps.google.com/maps?q=Burak%20restaurand%20istanbul&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                        width={"1320"}
                        height={"500"}
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Stack>
                </Container>
            </div>
        </div>
    )
}