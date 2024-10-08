import { Container, Stack, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function OtherNavbar() {
  const authMember = null;
  return (
    <div className="other-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to={"/"}>
              <img className="brand-logo" src="/icons/burak.svg" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className="hover-line ">
              <NavLink to={"/"} >
                Home{" "}
              </NavLink>
            </Box>
            <Box className="hover-line">
              <NavLink to={"/products"} activeClassName={"under-line"}>
                Products
              </NavLink>
            </Box>
            {authMember ? (
              <Box className="hover-line">
                <NavLink to={"/orders"} activeClassName={"under-line"}>
                  OrdersPage
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className="hover-line">
                <NavLink to={"/member-page"} activeClassName={"under-line"}>
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className="hover-line">
              <NavLink to={"/help"} activeClassName={"under-line"}>
                Help
              </NavLink>
            </Box>
            {/*Busket*/}
            {!authMember ? (
              <Box>
                <Button variant="contained" className="login-button">
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src="/icons/default-user.svg"
                aria-haspopup={"true"}
              />
            )}
          </Stack>
        </Stack>

       
      </Container>
    </div>
  );
}
