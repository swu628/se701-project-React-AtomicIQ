import {
  Box,
  Collapse,
  Grid,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

interface Row {
  label: string;
  value: number;
  expandedValues: number[];
}

interface CollapsibleRowProps {
  row: Row;
}

function CollapsibleRow({ row }: CollapsibleRowProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          <Typography fontWeight="bold">{row.label}</Typography>
        </TableCell>
        <TableCell align="right">
          <Typography fontWeight="bold">{row.value}</Typography>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box m="1rem 0">
              <Stack
                display="flex"
                direction="row"
                gap="1rem"
                sx={{ alignItems: "center" }}
              >
                <Typography>Question:</Typography>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                >
                  {row.expandedValues.map((expandedValues) => (
                    <Grid item key={expandedValues}>
                      {expandedValues}
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

interface ResultsTableProps {
  rows: Row[];
}

export default function ResultsTable({ rows }: ResultsTableProps) {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {rows.map((row, index) =>
            row.value === 0 ? (
              <TableRow key={index}>
                <TableCell />
                <TableCell component="th" scope="row">
                  {row.label}
                </TableCell>
                <TableCell>{row.value}</TableCell>
              </TableRow>
            ) : (
              <CollapsibleRow key={index} row={row} />
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
