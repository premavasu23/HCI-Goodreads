import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import '../styles/Navbar.css';
import BookHorizontal from './BookHorizontal'


const pages = ['Home', 'My Books', 'Community'];
const settings = ['Profile', 'Account', 'Logout'];

function Navbar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElResults, setAnchorElResults] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState("");
  const [showSearchResults, setShowSearchResults] = React.useState(false); 
  const [openModal, setOpenModal] = React.useState(false); 
  const [searchResults, setSearchResults] = React.useState([]);

    const handleClose = () => setAnchorElResults(null);
    ;


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
}

  const handleSearchClick = (e) => {
    setAnchorElResults(e.currentTarget);
    setShowSearchResults(true);
    setSearchResults(props.bookList.filter((b) => (b.title.toLowerCase().includes(searchValue.toLowerCase()) || b.author.toLowerCase().includes(searchValue.toLowerCase()))));


}

  return (
    <div>
    <AppBar position="static" 
    sx={{
        backgroundColor: '#d8ccb1',
        marginBottom: '1rem'
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Goodreads_logo.svg/2560px-Goodreads_logo.svg.png"/>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="#75420e"
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
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center" >
                </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#75420e',
              textDecoration: 'none',
            }}
          >
            </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: '#75420e', display: 'block', marginLeft: '1rem'}}
              >
                {page}
              </Button>
            ))}
          </Box>

            <TextField
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchValue}
              onClick={handleSearchValue}
              size="small"
              sx={{"textColor": "#F9F7F4", "borderRadius":"0.25vw", "width":"25vw"}}
            />
          <IconButton aria-label="delete" color="primary" onClick={handleSearchClick} sx={{"color": "#75420e", "&:hover": {backgroundColor: '#d8ccb1', color: '#75420e'}, marginRight:"2vw"}}>
                <SearchIcon/>
          </IconButton>
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px', overflow: "auto"}}
              anchorEl={anchorElResults}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElResults)}
              onClose={handleClose}
            >
              {(searchResults.map((b) => (
                <BookHorizontal book={b} shelfType={"isTBR"} bookList={props.bookList} setBookList={props.setBookList}></BookHorizontal>
                    )))
                    }
            </Menu>
            </Box>

            {/*IGNORE BELOW THIS */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/static/images/avatar/2.jpg" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default Navbar;