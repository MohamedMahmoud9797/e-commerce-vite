import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  DarkModeOutlined,
  Facebook,
  LightModeOutlined,
  Twitter,
  Instagram,
  ExpandMore,
} from "@mui/icons-material";

export default function Header1() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
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
  const options = ["AR", "EN"];

  return (
    <Box
      sx={{
        backgroundColor: "#2B3445",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        padding: 0,
        margin: 0,
      }}
    >
      <Container>
        <Stack direction="row" alignItems="center">
          {/* text */}
          <Typography
            style={{
              backgroundColor: "#d23f57",
              width: "50px",
              margin: "5px 10px",
              textAlign: "center",
              borderRadius: "10px",
              fontSize: "12px",
              fontWeight: "bold",
              color: "white",
              padding: "5px 0px",
            }}
          >
            HOT
          </Typography>
          <Typography
            sx={{
              margin: " 5px 10px",
              color: "white",
              fontSize: "14px",
              fontWeight: 300,
            }}
          >
            Free Express Shipping
          </Typography>
          <div style={{ flexGrow: 1 }}></div>

          {/* dropDown */}
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
                sx={{ ".MuiTypography-root": { color: "white" } }}
              />
              <ExpandMore sx={{ fontSize: "25px", color: "white" }} />
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

          {/* social media icons */}

          <Facebook
            sx={{ color: "white", marginRight: "10px", fontSize: "16px" }}
          />
          <Twitter
            sx={{ color: "white", marginRight: "10px", fontSize: "16px" }}
          />
          <Instagram
            sx={{ color: "white", marginRight: "10px", fontSize: "16px" }}
          />

          {/* dark mode icon  */}
          <div>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ color: "white" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ color: "white" }} />
              </IconButton>
            )}
          </div>
        </Stack>
      </Container>
    </Box>
  );
}
