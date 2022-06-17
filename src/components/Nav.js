import * as React from 'react';
import { Link, useHistory } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { Menu as MenuIcon } from "@material-ui/icons";
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';


const pages = ['Product', 'About Us', 'Contact Us'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


const Nav = () => {

    const history = useHistory();
  
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
   
  
      const handleOpenNavMenu = (event) => {
          setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event) => {
          setAnchorElUser(event.currentTarget);
      };
     
  
      const handleCloseNavMenu = (pageurl) => {
          setAnchorElNav(null);
          history.push(pageurl)
        
      };
   
  
      const handleCloseUserMenu = () => {
          setAnchorElUser(null);
      };
  
    const { totalQuantities } = useSelector(state => state.CartReducer);
    return (
        // <div className="nav">
        //     <div className="container">

        //         <div className="nav__container">

        //             <div className="nav__left">
        //                 <Link to="/">
        //                     <img src="/images/furpaaws.jpeg" className='logo' alt="Logo" />
        //                 </Link>

        //             </div>
                    
        //                 <div className="nav__right">

        //                     <Link to="/cart">
        //                         <div className="basket">
        //                             <BsFillBagFill className="cart-icon" />
        //                             <span>{totalQuantities}</span>
        //                         </div>
        //                     </Link>


                        
        //             </div>

        //         </div>

        //     </div>
        // </div>

        <AppBar position="fixed" style={{ background: 'white',height:'100px'}}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Typography
                  variant="h5"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    <Link to="/">
                            <img src="/images/furpaaws.jpeg" className='logo' alt="Logo" />
                       </Link>
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="secondary"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                       
                         <MenuItem key={1}  onClick={()=>handleCloseNavMenu('')}>
                            <Typography textAlign="center">Products</Typography>
                            </MenuItem>
                            <MenuItem key={2} onClick={()=>handleCloseNavMenu('/about')}>
                                <Typography textAlign="center" >About </Typography>
                            </MenuItem>
                            <MenuItem key={3} onClick={()=>handleCloseNavMenu('/contact')}>
                                <Typography textAlign="center" >Contact </Typography>
                            </MenuItem>
                    </Menu>
                </Box>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    <Link to="/">
                            <img src="/images/furpaaws.jpeg" className='logo' alt="Logo" />
                       </Link>
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              
                    <Button
                        onClick={()=>handleCloseNavMenu('')}
                        sx={{fontSize:'16px', my: 2, color: 'black', display: 'block','margin-right':'1rem!important' }}>Products</Button>
                    <Button onClick={()=>handleCloseNavMenu('/about')}
                        sx={{fontSize:'16px', my: 2, color: 'black', display: 'block','margin-right':'1rem!important' }}>
                            About
                            </Button>
                    <Button onClick={()=>handleCloseNavMenu('/contact')}
                        sx={{fontSize:'16px', my: 2, color: 'black', display: 'block' }}>Contact</Button>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="My Cart">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Link to="/cart">
                               <div className="basket">
                                    <BsFillBagFill className="cart-icon" />
                                    <span>{totalQuantities}</span>
                                </div>
                            </Link>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
{/*                        
                            <MenuItem key={4} >
                                <Typography textAlign="center" sx={{margin:'auto 5px'}}>Logout</Typography>
                            </MenuItem>
                            <MenuItem key={5} onClick={()=>handleCloseNavMenu('/mypro')}>
                                <Typography textAlign="center" sx={{margin:'auto 5px'}}>My Products</Typography>
                            </MenuItem> */}
                    
                    </Menu>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>

    )
}

export default Nav
