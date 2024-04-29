import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";

interface OtherNavbarProps {
    cartItems :  CartItem[];
}
export  default function OtherNavbar( props: OtherNavbarProps) {
    const {cartItems} = props;
    const authMember = null;
    return (
      <div className="other-navbar">
        <Container className="navbar-container">
            <Stack className="menu">
                <Box>
                    <NavLink to={'/'}> 
                        <img className='brand-logo' src="/icons/burak.svg" />
                    </NavLink>
                </Box>
                <Stack className="links">
                    <Box className={"hover-line"} >
                        <NavLink to={'/'}  >Home</NavLink>
                    </Box>
                    <Box className={"hover-line"}>
                        <NavLink to={'/products'} >Products</NavLink>
                    </Box >
                    {authMember ? (
                        <Box className={"hover-line"}>
                            <NavLink to={'/orders'}>Orders</NavLink>
                        </Box>
                    ) : null}
                    {authMember ? (
                        <Box className={"hover-line"}>
                            <NavLink to={'/member-page'}  >My Page</NavLink>
                        </Box>
                    ) : null}
                    <Box className={"hover-line"}>
                        <NavLink to={'/help'}  >Help</NavLink>
                    </Box>
                    <Basket cartItems = {cartItems}/>
                    {!authMember ? (
                        <Box>
                            <Button variant="contained" className="login-button">Login</Button>
                        </Box>
                    ) : (
                        <img className="user-avatar"
                        src="/icons/default-user.svg"
                        aria-haspopup = {"true"} />
                    )}
                </Stack>
            </Stack>
        </Container>
    </div>
)}