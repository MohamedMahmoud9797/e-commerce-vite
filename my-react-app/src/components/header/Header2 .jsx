import {
  AddShoppingCart,
  ExpandMore,
  Person,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Box,
  Container,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Typography,
  Badge,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { useState } from "react";
import { useTheme } from "@emotion/react";

export default function Header2() {
  const theme = useTheme();
  // search

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: "10px 10px 10px 10px",
    border: "1px solid #777",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "50%",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const options = ["all products", "men", "women"];
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <Container
      sx={{
        my: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Stack
        direction={"row"}
        width={"100%"}
        sx={{ justifyContent: "space-between", alignItems: "center" }}
      >
        {/* icon left */}
        <Box className="" textAlign={"center"}>
          <AddShoppingCart />
          <Typography>Shopping </Typography>
        </Box>
        {/* input search bar */}
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Search
            className="border2"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ width: "150px" }}>
            <List component="nav" aria-label="Device settings">
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
                sx={{ cursor: "pointer", fontSize: "13px" }}
              >
                <ListItemText
                  secondary={options[selectedIndex]}
                  sx={{
                    ".MuiTypography-root": { color: theme.palette.text.main },
                  }}
                />
                <ExpandMore sx={{ fontSize: "25px" }} />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Stack>

        {/* icon right */}
        <Stack direction={"row"} alignItems={"center"}>
          <IconButton>
            <Person></Person>
          </IconButton>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCart />
            </StyledBadge>
          </IconButton>
        </Stack>
      </Stack>
    </Container>
  );
}
