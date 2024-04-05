import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  borderRadius: "30px",
  backgroundColor: "white",
  width: "360px",
  marginLeft: 0,
  boxShadow: "2px 2px 2px 1px grey",
  display: "flex",
  flexDirection: "row"
}));

const SearchButton = styled("div") (({ theme }) => ({
  width: "45%",
  height: "100%",
  backgroundColor: "grey",
  borderRadius: "30px",
  padding: theme.spacing(0, 2),
  alignItems: "center", 
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft:` calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <Search>
          <StyledInputBase
            placeholder="Type here . . ."
            inputProps={{ "aria-label": "search" }}
          />
          <SearchButton>
          <IconButton>
            <Typography>Search</Typography>
            <SearchIcon />
          </IconButton>
          </SearchButton>
        </Search>
    </Box>
  );
}