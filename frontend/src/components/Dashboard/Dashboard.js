import * as React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

export default function Dashboard(props) {
    const { lowPriceFilter, hightPriceFilter, nameFilterAlphabet, nameFilterLength, categoryFilter } = props

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color="inherit"
                startIcon={<CalendarViewDayIcon />}
            >
                Filters
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={() => {
                    lowPriceFilter()
                }}>From lowest to highest price</MenuItem>
                <MenuItem onClick={() => {
                    hightPriceFilter()
                }}>From highest to lowest price</MenuItem>
                <MenuItem onClick={() => {
                    categoryFilter()
                }}>Category Filter</MenuItem>
                <MenuItem onClick={() => {
                    nameFilterAlphabet()
                }}>Alphabet Filter</MenuItem>
                <MenuItem onClick={() => {
                    nameFilterLength()
                }}>Length Name</MenuItem>
            </Menu>
        </div >
    );
}
