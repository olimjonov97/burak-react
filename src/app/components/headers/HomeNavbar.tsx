import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
  const authMember = null;

  return (
    <div className="home-navbar">
      <Container sx={{ mt: "55px", height: "642px" }}>
        <Stack
          sx={{ height: "50px" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <NavLink to={"/"}>
              <img
                src="/icons/burak.svg"
                style={{ width: "125px", height: "30px" }}
              />
            </NavLink>
          </Box>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            minWidth={"700px"}
            alignItems={"center"}
          >
            <Box className="hover-line ">
              <NavLink to={"/"} activeClassName={"under-line"}>
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
                <Button variant="contained" style={{background:"#3776CC", color:"#f8f8ff"}}>Login</Button>
              </Box>
            ) : (
              <img />
            )}
          </Stack>
        </Stack>
        <Stack>Details</Stack>
      </Container>
    </div>
  );
}
