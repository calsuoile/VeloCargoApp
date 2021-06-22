import React from "react";
import {
  Button,
  FormControl,
  InputAdornment,
  makeStyles,
  OutlinedInput,
  useTheme,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  searchInputContainer: {
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.11)",
    borderRadius: theme.spacing(1),
    width: "50%",
    height: "100%",
    marginLeft: "25%",
    marginBottom: "50px",
    marginTop: "50px",
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
  //   searchButton: {
  //     maxHeight: 45,
  //     minWidth: 135,
  //     [theme.breakpoints.down("xs")]: {
  //       display: "none",
  //     },
  //   },
}));

const Search = ({ searchValue, handleSearchValueChange }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      {/* Barre de recherche d'article par mot(s) clé(s) */}
      <div className={classes.searchInputContainer} data-aos="fade-up">
        <FormControl fullWidth variant="outlined">
          <OutlinedInput
            size="large"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            placeholder="Rechercher un article"
            value={searchValue}
            type="text"
            onChange={handleSearchValueChange}
          />
        </FormControl>
        {/* <Button
          color="primary"
          variant="contained"
          size="large"
          className={classes.searchButton}
        >
          Rechercher
        </Button> */}
      </div>
    </>
  );
};

export default Search;
