import { ArrowLeft, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
const Links = ({ text }) => {
  return (
    <Box
      sx={{
        ":hover .show-when-hover": { display: "block" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          mb: 1,
        }}
      >
        <Typography>{text}</Typography>
        <ExpandMore />
      </Box>
      <Paper
        sx={{
          position: "absolute",
          top: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          zIndex:99999
        }}
      >
        <Box aria-label="secondary mailbox folders">
          <List
            sx={{ width: "200px", display: "none" }}
            className="show-when-hover"
          >
            <ListItem
              disablePadding
              sx={{
                position: "relative",
                ":hover .nestdList-hover": { display: "block" },
              }}
            >
              <ListItemButton>
                <ListItemText primary="link 1" />
                <ArrowLeft />
              </ListItemButton>
              <Box
                sx={{
                  position: "absolute",
                  top: "0%",
                  left: "-100%",
                  display: "none",
                }}
                className="nestdList-hover"
              >
                <Paper>
                  <List
                    sx={{ width: "200px", display: "none" }}
                    className="show-when-hover"
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary="link 1" />
                      </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                      <ListItemButton component="a" href="#simple-list">
                        <ListItemText primary="link 2" />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </Paper>
              </Box>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="link 2" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Paper>
    </Box>
  );
};

export default Links;
