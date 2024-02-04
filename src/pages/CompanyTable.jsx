import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import showLess from "../assets/Group 75.png";
import showMoree from "../assets/Group 70.png";
import companyService from "../services/company.service";
import "../helpers/Fonts.css";
import { CircularProgress } from "@mui/material";

const SquareCell = styled(TableCell)({
  "&.MuiTableCell-root": {
    fontFamily: "TestManukaBold, sans-serif", // Use the imported font family
    // Add any other styles you want to override
  },
  width: "3rem",
  height: "3rem",
  background: `linear-gradient(to right, #8000BA, #FF4B00)`,
  alignItems: "center",
  textAlign: "center",
  color: "white",
  fontSize: "3rem",
  fontWeight: "bolder",
  "@media (max-width: 768px)": {
    minWidth: ".8rem",
    padding: ".3rem",
    fontSize: "2rem",
  },
});

const GroupedCell = styled(TableCell)({
  "&.MuiTableCell-root": {
    fontFamily: "TestManukaBold, sans-serif", // Use the imported font family
    // Add any other styles you want to override
  },
  minWidth: "5rem",
  padding: "1rem",
  textAlign: "center",
  backgroundColor: "#EBEBEB",
  fontSize: "3rem",
  color: "black",
  borderRight: "2px solid white",
  borderLeft: "2px solid white",
  borderBottom: "2px solid white",
  "@media (max-width: 768px)": {
    minWidth: "2rem",
    padding: ".5rem",
    fontSize: "2rem",
    borderRight: "2px solid white",
    borderLeft: "2px solid white",
  },
});

const Title = styled(TableCell)({
  "&.MuiTableCell-root": {
    fontFamily: "TestManukaBold, sans-serif", // Use the imported font family
    // Add any other styles you want to override
  },
  minWidth: "5rem",
  padding: "1rem",
  textAlign: "center",
  backgroundColor: "#EBEBEB",
  fontSize: "3rem",
  color: "black",
  borderRight: "2px solid white",
  borderLeft: "2px solid white",
  // Responsive styles
  "@media (max-width: 768px)": {
    minWidth: "2rem",
    padding: ".3rem",
    fontSize: "1.3rem",
    borderRight: "2px solid white",
    borderLeft: "2px solid white",
  },
});

const SmallRectangleCell = styled(TableCell)({
  "&.MuiTableCell-root": {
    fontFamily: "TestManukaBold, sans-serif", // Use the imported font family
    // Add any other styles you want to override
  },
  minWidth: "3rem",
  padding: "1.5rem",
  textAlign: "center",
  backgroundColor: "#EBEBEB",
  fontSize: "3rem",
  color: "grey",
  borderBottom: "2px solid white",

  "@media (max-width: 768px)": {
    minWidth: "1rem",
    padding: ".5rem",
    fontSize: "2rem",
  },
});

const Wrapper = styled(Grid)({
  maxWidth: "65%",
  margin: "7rem auto 2rem",
  fontFamily: "MontBold, sans-serif !important",
  padding: "0",

  // Responsive styles
  "@media (max-width: 768px)": {
    maxWidth: "90%",
    margin: "2rem auto",
  },
});

const ShowMoreLessCell = styled(TableCell)({
  padding: ".5rem",
  textAlign: "center",
  cursor: "pointer",
  fontSize: "1.2rem",
  color: "white",
  backgroundColor: "grey",
  "& > span": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  "@media (max-width: 768px)": {
    padding: ".3rem",
    fontSize: "1rem",
  },
});

const ArrowIcon = styled("img")({
  width: "1.5rem", // Set the width and height as needed
  height: "auto",
  margin: "auto 1rem",
  "@media (max-width: 768px)": {
    width: "1.2rem", // Set the width and height as needed
    height: "auto",
    margin: "auto .5rem",
  },
});

const CellWithSpacing = styled(TableCell)({
  margin: "0.5rem 0", // Add margin for spacing between rows
});

const CompanyTable = () => {
  const [tableData, setTableData] = useState([]);
  const [totalCompanies, setTotalCompanies] = useState(0);
  const [visibleRows, setVisibleRows] = React.useState(
    totalCompanies >= 10 ? 10 : totalCompanies
  );
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const [loading, setLoading] = useState(false);

  const init = React.useCallback(async () => {
    setLoading(true);
    const res = await companyService.getAllCompanies();
    console.log(res);
    if (res?.status === 200) {
      setTableData(res?.data);
      setTotalCompanies(res?.data.length);
      setVisibleRows(res?.data.length >= 10 ? 10 : res?.data.length);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  React.useEffect(() => {
    // Check if the screen width is less than 500 pixels (tablet size)
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize(); // Call it once on mount to set the initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const styles = {
    maxHeight: isSmallScreen ? "1.2rem" : "3.5rem",
    // width: isSmallScreen ? "4rem" : "6rem",
  };

  const handleShowMore = () => {
    setVisibleRows((prevVisibleRows) =>
      totalCompanies - prevVisibleRows >= 10
        ? prevVisibleRows + 10
        : totalCompanies
    );
  };

  const handleShowLess = () => {
    setVisibleRows((prevVisibleRows) =>
      prevVisibleRows > 10
        ? prevVisibleRows >= 20
          ? prevVisibleRows - 10
          : 10
        : 10
    );
  };

  return (
    <Paper elevation={0}>
      <Wrapper className="manuka-bold">
        <TableContainer>
          <Table style={{ fontFamily: "MontBold, sans-serif !important" }}>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <Title
                  style={{
                    backgroundColor: "white",
                    color: "grey",
                    padding: "1rem 0",
                    textAlign: "center",
                  }}
                >
                  Top Companies
                </Title>
                <Title
                  style={{
                    backgroundColor: "white",
                    color: "grey",
                    padding: "1rem 0",
                    textAlign: "center",
                  }}
                >
                  Mil/Km
                </Title>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    <CircularProgress size={24} color="inherit" />
                  </TableCell>
                </TableRow>
              ) : (
                tableData.slice(0, visibleRows).map((row, index) => (
                  <TableRow key={row.id} style={{ height: "4rem" }}>
                    <SquareCell>{index + 1}</SquareCell>
                    <GroupedCell>
                      <img
                        src={row.company_image} // Use the appropriate logo for each company
                        alt={`Logo for ${row.company_name}`}
                        style={styles}
                      />
                    </GroupedCell>
                    <SmallRectangleCell>
                      {row.company_donation_mil}/{row.company_donation_km}
                    </SmallRectangleCell>
                  </TableRow>
                ))
              )}

              <TableRow>
                <ShowMoreLessCell colSpan={3}>
                  <span>
                    <ArrowIcon
                      src={showMoree}
                      alt="Show More"
                      onClick={handleShowMore}
                    />
                    <ArrowIcon
                      src={showLess}
                      alt="Show Less"
                      onClick={handleShowLess}
                    />
                  </span>
                </ShowMoreLessCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Wrapper>
    </Paper>
  );
};

export default CompanyTable;
