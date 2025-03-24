import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const StyledContainer = styled(Container)({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "2rem",
});

const StyledTableContainer = styled(TableContainer)({
  marginTop: "2rem",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  borderRadius: "12px",
  overflowX: "auto",
});

const StyledTable = styled(Table)({
  minWidth: "750px",
  borderCollapse: "separate",
  borderSpacing: "0",
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: "bold",
  backgroundColor: "#172554",
  color: "#fff",
  textAlign: "center",
  borderRight: "2px solid rgba(166, 162, 162, 0.78)", // Add right border
}));

const StyledRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f8f9fa",
  },
  "&:hover": {
    backgroundColor: "#e9ecef",
    transition: "0.3s ease-in-out",
  },
});

const jobData = [
  {
    job: "Digital Marketing",
    naukri: 18686,
    timesJob: 21170,
    careerJet: 12386,
    freshers: 9815,
    clickIndia: 14506,
    avgSalary: "2L-6.5L",
  },
  {
    job: "Social Media Marketing",
    naukri: 15345,
    timesJob: 22506,
    careerJet: 8974,
    freshers: 2969,
    clickIndia: 8148,
    avgSalary: "2L-7L",
  },
  {
    job: "Content Marketing",
    naukri: 10799,
    timesJob: 58834,
    careerJet: 14797,
    freshers: 5346,
    clickIndia: 5095,
    avgSalary: "2L-8L",
  },
  {
    job: "SEO",
    naukri: 12368,
    timesJob: 5787,
    careerJet: 6654,
    freshers: 2578,
    clickIndia: 4678,
    avgSalary: "2L-6L",
  },
  {
    job: "SEM",
    naukri: 10068,
    timesJob: 21909,
    careerJet: 2425,
    freshers: 2578,
    clickIndia: 2922,
    avgSalary: "2L-7L",
  },
  {
    job: "Email Marketing",
    naukri: 5570,
    timesJob: 25633,
    careerJet: 50223,
    freshers: 1458,
    clickIndia: 1100,
    avgSalary: "2L-5.5L",
  },
  {
    job: "Digital Analyst",
    naukri: 5835,
    timesJob: 23264,
    careerJet: 5599,
    freshers: 1774,
    clickIndia: 4415,
    avgSalary: "2L-5L",
  },
];

const Opportunity = () => {
  return (
    <StyledContainer>
      <Box my={4} textAlign="center">
        <h1 className="text-4xl font-bold text-blue-950 mb-10">
          Job Opportunities & Salaries in Digital Marketing (India)
        </h1>
      </Box>
      <StyledTableContainer component={Paper}>
        <StyledTable>
          <TableHead>
            <TableRow>
              <StyledTableCell>Job</StyledTableCell>
              <StyledTableCell>Naukri</StyledTableCell>
              <StyledTableCell>Times Job</StyledTableCell>
              <StyledTableCell>Career Jet</StyledTableCell>
              <StyledTableCell>Freshers</StyledTableCell>
              <StyledTableCell>Click India</StyledTableCell>
              <StyledTableCell>Avg Salary (Per Annum)</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {jobData.map((row) => (
              <StyledRow key={row.job}>
                <TableCell>{row.job}</TableCell>
                <TableCell align="center">
                  {row.naukri.toLocaleString()}
                </TableCell>
                <TableCell align="center">
                  {row.timesJob.toLocaleString()}
                </TableCell>
                <TableCell align="center">
                  {row.careerJet.toLocaleString()}
                </TableCell>
                <TableCell align="center">
                  {row.freshers.toLocaleString()}
                </TableCell>
                <TableCell align="center">
                  {row.clickIndia.toLocaleString()}
                </TableCell>
                <TableCell align="center">{row.avgSalary}</TableCell>
              </StyledRow>
            ))}
          </TableBody>
        </StyledTable>
      </StyledTableContainer>
    </StyledContainer>
  );
};

export default Opportunity;
