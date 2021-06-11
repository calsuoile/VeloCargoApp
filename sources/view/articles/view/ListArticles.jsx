import {
  Button,
  FormControl,
  Icon,
  InputAdornment,
  makeStyles,
  OutlinedInput,
  useTheme,
  SearchIcon,
} from "@material-ui/core";
import React from "react";
import ListArticlesHomePage from "./ListArticlesHomePage";

const useStyles = makeStyles((theme) => ({
  searchInputContainer: {
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.11)",
    borderRadius: theme.spacing(1),
    width: "100%",
    height: "100%",
    marginLeft: "20px",
    display: "flex",
    alignItems: "center",
    "& .MuiOutlinedInput-notchedOutline": {
      border: "0 !important",
    },
    "& .MuiInputAdornment-positionStart": {
      marginRight: theme.spacing(2),
    },
    "& .MuiOutlinedInput-adornedStart": {
      paddingLeft: 0,
    },
    "& .MuiOutlinedInput-input": {
      padding: 0,
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  searchButton: {
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down("sm")]: {
      minWidth: "auto",
    },
  },
}));

const ListArticles = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <div>
        <ListArticlesHomePage />
      </div>
      <div className={classes.searchInputContainer} data-aos="fade-up">
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            size="large"
            startAdornment={
              <InputAdornment position="start">
                <Icon
                  fontIconClass="fas fa-search"
                  fontIconColor={theme.palette.primary.dark}
                />
              </InputAdornment>
            }
            placeholder="Rechercher un artcile"
          />
        </FormControl>
        <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.searchButton}
        >
          Rechercher
        </Button>
      </div>
    </>
  );
};

export default ListArticles;
