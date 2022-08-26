import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function mobs(
  name: string,
  size: string,
  location: string,
  weather: string,
  time: []
) {
  return { name, size, location, weather, time };
}

const rows = [
  mobs("Alligator", "Large", "X: 17.6, Y: 24.1", "Showers", ["00:00", "23:59"]),
  mobs("Beachcomb", "Small", "X: 18, Y: 13", "Rain", ["00:00", "23:59"]),
  mobs("Gold Back", "Large", "X: 13.1, Y: 28.4", "Rain", ["00:00", "23:59"]),
  mobs("Glyptodon", "Medium", "X: 31.5, Y: 11.5", "All", ["00:00", "03:00"]),
  mobs("Island Billy", "Large", "X: 26.3, Y: 22.8", "All", ["03:00", "06:00"]),
  mobs("Lemur", "Small", "X: 21, Y: 26.4", "All", ["06:00", "09:00"]),
  mobs("Star Marmot", "Small", "X: 16, Y: 19", "All", ["09:00", "12:00"]),
  mobs("Apkallu of Paradise", "Small", "X: 18.8, Y: 11.9", "All", [
    "12:00",
    "15:00",
  ]),
  mobs("Dodo of Paradise", "Medium", "X: 16.6, Y: 11.8", "All", [
    "15:00",
    "18:00",
  ]),
  mobs("Island Stag", "Medium", "X: 20.4, Y: 20.1", "All", ["18:00", "21:00"]),
  mobs("Grand Buffalo", "Large", "X: 12.1, Y: 17.2", "Cloudy", [
    "00:00",
    "23:59",
  ]),
  mobs("Ornery Karakul", "Small", "X: 21.6, Y: 23.1", "Fair Skies", [
    "00:00",
    "23:59",
  ]),
  mobs("Twinklefleece", "Small", "X: 22.3, Y: 20.5", "Fog", ["00:00", "23:59"]),
  mobs("Yellow Coblyn", "Small", "X: 26.6, Y: 19.5", "Fog", ["00:00", "23:59"]),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Size</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Weather</StyledTableCell>
            <StyledTableCell align="right">Spawn Time</StyledTableCell>
            <StyledTableCell align="right">End Time</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.size}</StyledTableCell>
              <StyledTableCell align="right">{row.location}</StyledTableCell>
              <StyledTableCell align="right">{row.weather}</StyledTableCell>
              <StyledTableCell align="right">{row.time[0]}</StyledTableCell>
              <StyledTableCell align="right">{row.time[1]}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
