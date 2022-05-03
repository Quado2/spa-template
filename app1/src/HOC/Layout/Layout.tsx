import {
  Drafts,
  ExpandLess,
  ExpandMore,
  Inbox,
  Send,
  StarBorder,
} from "@mui/icons-material";
import {
  Collapse,
  Divider,
  Link,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";

import Nav from "../../components/Nav";

interface ILayoutProps {}

const Layout: React.FunctionComponent<ILayoutProps> = ({ children }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      sx={{ border: "1px solid red" }}
    >
      {/* <Nav /> */}
      <Box flex={1} maxWidth={200}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton sx={{ padding: 0 }}>
            <Link
              sx={{ width: "100%", display: "flex" }}
              href="/"
              underline="none"
            >
              <ListItemIcon>
                <Send />
              </ListItemIcon>
              <ListItemText primary="Sent mail" />
            </Link>
          </ListItemButton>
          <ListItemButton>
            <Link
              sx={{ width: "100%", display: "flex" }}
              href="/about"
              underline="none"
            >
              <ListItemIcon>
                <Drafts />
              </ListItemIcon>
              <ListItemText primary="Drafts" />
            </Link>
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Inbox />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </Box>
      <Box flex={3}>{children}</Box>
    </Stack>
  );
};

export default Layout;
