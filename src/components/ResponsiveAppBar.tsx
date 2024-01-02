import AddIcon from "@mui/icons-material/Add";
import ExploreIcon from "@mui/icons-material/Explore";
import { IconButton } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import { DiscordIcon } from "../theme/Icons/Icons";

const btnStyle = {
  width: "48px",
  height: "48px",
  minWidth: "0px",
  color: "#50A361",
  borderRadius: "24px",
  background: "#313338",
  "&:hover": {
    borderRadius: "12px",
    color: "#FFF",
    background: "#50A361",
  },
};
const iconSize = {
  width: "24px",
  height: "24px",
};

const pages = ["VJ"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ height: "100vh", width: "70px", background: "#1E1F22" }}
    >
      <Box
        display="flex"
        flexDirection="column"
        sx={{ flexGrow: 1, gap: "10px", marginTop: "10px" }}
      >
        <IconButton
          aria-label="delete"
          sx={{
            width: "48px",
            height: "48px",
            color: "#5A65EA",
            borderRadius: "24px",
            background: "#313338",
            "&:hover": {
              borderRadius: "12px",
              color: "#FFF",
              background: "#5A65EA",
            },
          }}
        >
          <DiscordIcon />
        </IconButton>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={btnStyle}
          >
            {page}
          </Button>
        ))}
        <IconButton aria-label="delete" sx={btnStyle}>
          <AddIcon sx={iconSize} />
        </IconButton>
        <IconButton aria-label="delete" sx={btnStyle}>
          <ExploreIcon sx={iconSize} />
        </IconButton>
      </Box>
    </AppBar>
  );
};
export default ResponsiveAppBar;
