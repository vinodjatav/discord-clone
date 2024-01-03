import AddIcon from "@mui/icons-material/Add";
import ExploreIcon from "@mui/icons-material/Explore";
import { IconButton, Tooltip, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import { DiscordIcon } from "../theme/Icons/Icons";

const btnSxStyle = {
  color: "#50A361",
  borderRadius: "24px",
  background: "#313338",
  "&:hover": {
    borderRadius: "12px",
    color: "#FFF",
    background: "#50A361",
  },
};
const btnStyle = {
  width: "48px",
  height: "48px",
  minWidth: "0px",
};
const iconSize = {
  width: "24px",
  height: "24px",
};
const tooltipComponentProps = {
  tooltip: {
    sx: {
      bgcolor: '#000',
      '& .MuiTooltip-arrow': {
        color: '#000',
      },
    },
  },
};
const tooltipPopperProps = {
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 5],
      },
    },
  ],
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
        sx={{ flexGrow: 1, gap: "10px", margin: "10px" }}
      >
        <Tooltip
          title={<Typography>Direct Messages</Typography>}
          placement="right"
          arrow
          componentsProps={tooltipComponentProps}
          PopperProps={tooltipPopperProps}>
          <IconButton
            aria-label="Direct Messages"
            style={btnStyle}
            sx={{
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
        </Tooltip>
        {pages.map((page) => (
          <Tooltip
            title={<Typography>VJ</Typography>}
            placement="right"
            arrow
            componentsProps={tooltipComponentProps}
            PopperProps={tooltipPopperProps}>
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              style={btnStyle}
              sx={btnSxStyle}
            >
              {page}
            </Button>
          </Tooltip>
        ))}
        <Tooltip
          title={<Typography>Add a Server</Typography>}
          placement="right"
          arrow
          componentsProps={tooltipComponentProps}
          PopperProps={tooltipPopperProps}>
          <IconButton aria-label="Add a Server" style={btnStyle} sx={btnSxStyle}>
            <AddIcon sx={iconSize} />
          </IconButton>
        </Tooltip>
        <Tooltip
          title={<Typography>Explore Discoverable Servers</Typography>}
          placement="right"
          arrow
          componentsProps={tooltipComponentProps}
          PopperProps={tooltipPopperProps}>
          <IconButton aria-label="Explore Discoverable Servers" style={btnStyle} sx={btnSxStyle}>
            <ExploreIcon sx={iconSize} />
          </IconButton>
        </Tooltip>
      </Box>
    </AppBar>
  );
};
export default ResponsiveAppBar;
