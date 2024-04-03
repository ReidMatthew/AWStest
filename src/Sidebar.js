import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { BrowserRouter as Router, Route, Routes, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import { Menu as Hamburger } from '@mui/icons-material';
import { Button } from '@mui/material';

const MySidebar = () => {
    const [collapsed, collapse] = React.useState(false);

    return (
        <Router>
            <div className="App" style={{ display: "flex" }}>
                <Sidebar style={{ height: "100vh", minWidth: "2rem" }} id="menu" collapsed={collapsed}>
                    {/* set width to 10rem but make sure it updates with the collapse */}
                    <Menu>
                        <Button onClick={() => collapse(!collapsed)}>
                            <Hamburger />
                        </Button>
                        <SubMenu label="Charts">
                            <MenuItem component={<Link to="/contact" />}> Contact </MenuItem>
                            <MenuItem> Line charts </MenuItem>
                        </SubMenu>
                        <MenuItem component={<Link to="/" />}> Home </MenuItem>
                        <MenuItem component={<Link to="/blogs" />}> Blogs </MenuItem>
                        <MenuItem component={<Link to="/contact" />}> Contact </MenuItem>
                    </Menu>
                </Sidebar>

                <div>
                    <Routes>
                        <Route path="/" element={<Home style={{ display: "flex" }} />} />
                        <Route path="/blogs" element={<Blogs style={{ display: "flex" }} />} />
                        <Route path="/contact" element={<Contact style={{ display: "flex" }} />} />
                    </Routes>
                </div>

            </div>
        </Router>
    )
};

export default MySidebar;