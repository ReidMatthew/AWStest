import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { BrowserRouter as Router, Route, Routes, Link, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Voronoi from "./pages/VoronoiMap";
import Gear from "./pages/GearPage";
import { Menu as Hamburger, Circle, Home as House, SquareOutlined, Map, Settings } from '@mui/icons-material';
import { Button } from '@mui/material';
import './Sidebar.css';

const MySidebar = () => {
    const [collapsed, collapse] = React.useState(true);

    return (
        <Router>
            <div className="App" style={{ display: "flex" }}>
                <Sidebar id="menu" collapsed={collapsed}>
                    {/* set width to 10rem but make sure it updates with the collapse */}
                    <Menu>
                        <Button onClick={() => collapse(!collapsed)}>
                            <Hamburger id="menuButton" />
                        </Button>
                        <MenuItem onClick={() => collapse(!collapsed)} icon={<Hamburger />} rootStyles={{ padding: "0" }}>
                        </MenuItem>
                        <MenuItem component={<Link to="/" />} icon={<House />}> Home </MenuItem>
                        <SubMenu label="Charts" icon={<Circle />}>
                            <MenuItem component={<Link to="/contact" />} icon={<SquareOutlined />}> Contact </MenuItem>
                            <MenuItem icon={<SquareOutlined />}> Line charts </MenuItem>
                        </SubMenu>
                        <MenuItem component={<Link to="/blogs" />} icon={<SquareOutlined />}> Blogs </MenuItem>
                        <MenuItem component={<Link to="/contact" />} icon={<SquareOutlined />}> Contact </MenuItem>
                        <MenuItem component={<Link to="/voronoi" />} icon={<Map />}> Map </MenuItem>
                        <MenuItem component={<Link to="/gear" />} icon={<Settings />}> Gear </MenuItem>
                    </Menu>
                </Sidebar>

                <Routes>
                    <Route path="/" element={<Home style={{ display: "flex" }} />} />
                    <Route path="/blogs" element={<Blogs style={{ display: "flex" }} />} />
                    <Route path="/contact" element={<Contact style={{ display: "flex" }} />} />
                    <Route path="/voronoi" element={<Voronoi style={{ display: "flex" }} />} />
                    <Route path="/gear" element={<Gear style={{ display: "flex" }} />} />
                </Routes>

            </div>
        </Router >
    )
};

export default MySidebar;