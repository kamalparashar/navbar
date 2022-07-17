import React, {useState} from "react";
import {
  Box,
  Button,
  Paper,
  createTheme,
  ThemeProvider,
  Input,
} from "@mui/material";
import "./App.css";
import LiveNow from "./LiveNow";
import Sidebar from "./Sidebar";

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

const style = {
  display: "flex",
  flexWrap: "wrap",
  "& > :not(style)": {
    m: 1,
    position: "absolute",
    width: 300,
    height: 250,
    top: "50%",
    left: "50%",
    bottom: "55%",
    transform: "translate(-50%, -50%)",
    bgcolor: { lightTheme },
  },
};



function App() {
  const [SignIn, setSignIn] = useState(false);
  const [Open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://cdn-a.utip.io/media/cache/product_image_fullsize/uploads/products/15825696/600eef3d57d40211928378.png"
          alt="liveChat"
        />
        <div >
        <input type="search" className="Search" 
        placeholder="Search"/>
        </div>
        {user ? (
          <Button>logout</Button>
        ) : (
          <div>
            <Button onClick={() => setSignIn(true)}>LOGIN </Button>
            <Button onClick={() => setOpen(true)}>SIGNUP </Button>
          </div>
        )}
      </div>

      {/* <div>
        <ThemeProvider theme={darkTheme}>
          <Box sx={style}>
            <Paper elevation={6}>
              <div className="login">
                <div>
                  <h2>LOGIN PAGE</h2>
                </div>
                <div className="Form">
                  <form>
                    <Input type="email" placeholder="enter mail ID"></Input>
                    <br />
                    <br />
                    <Input type="password" placeholder="enter password"></Input>
                    <br />
                    <br />
                  </form>
                </div>
                <Button 
                  type="submit" className="button"
                >
                  LOGIN
                </Button>
              </div>
            </Paper>
          </Box>
        </ThemeProvider>
      </div> */}
      <div className="page">
        <Sidebar/>
        <LiveNow/>
      </div>
      
    </div>
  );
}

export default App;