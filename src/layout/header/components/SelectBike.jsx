import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    backgroundColor: "#006969",
    width: "20%",
    color: "white",
  },
  container: {
    zIndex: 10,
    backgroundColor: "#006969",
  },
  button: {
    fontFamily: "Open Sans Condensed",
    color: "white",
    fontSize: "22px",
    fontWeight: "400",
    borderRight: "1px solid",
    borderRadius: 0,
    marginRight: "20px",
    paddingTop: "0",
    paddingBottom: "0",
    paddingRight: "20px",
  },
  item: {
    color: "white",
    fontSize: "22px",
    fontFamily: "Open Sans Condensed",
    fontWeight: "400",
  },
}));

function SelectBike(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const router = useRouter();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event, target) => {
    router.push(`/acheter-un-velo-cargo/${target}`);
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.container}>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        className={classes.button}
      >
        VÉLOS CARGOS
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.paper}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <MenuItem
                    className={classes.item}
                    onClick={(event) => handleClose(event, "")}
                  >
                    Voir Tout
                  </MenuItem>
                  <MenuItem
                    className={classes.item}
                    onClick={(event) => handleClose(event, "biporteur")}
                  >
                    Biporteurs
                  </MenuItem>
                  <MenuItem
                    className={classes.item}
                    onClick={(event) => handleClose(event, "triporteur")}
                  >
                    Triporteurs
                  </MenuItem>
                  <MenuItem
                    className={classes.item}
                    onClick={(event) => handleClose(event, "longtail")}
                  >
                    Longtails
                  </MenuItem>
                  <MenuItem
                    className={classes.item}
                    onClick={(event) => handleClose(event, "tricycle")}
                  >
                    Tricycles
                  </MenuItem>
                  <MenuItem
                    className={classes.item}
                    onClick={(event) => handleClose(event, "remorque")}
                  >
                    Remorques
                  </MenuItem>
                  <MenuItem
                    className={classes.item}
                    onClick={(event) => handleClose(event, "accessoire")}
                  >
                    Accessoires
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default SelectBike;
