import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Container = styled("div")({
  width: "65%", // Set the default width
  display: "flex",
  alignItems: "center",
  padding: ".3rem",
  backgroundColor: "#F5F5F5",
  borderRadius: "2rem",
  margin: "0 auto",
  marginBottom: "3rem",
  "@media (max-width: 768px)": {
    justifyContent: "flex-start",
    alignItems: "left",
    width: "90%", // Set the default width
    padding: ".2rem",
  },
});

const CircularArrow = styled("div")({
  width: "60px",
  height: "60px",
  backgroundColor: "#FF4B00",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 768px)": {
    marginRight: "1rem",
    marginBottom: "0",
    width: "40px",
    height: "40px",
  },
});

const Text = styled("p")({
  margin: 0,
  marginLeft: "1rem",
  fontSize: "1.3rem",
  color: "#6F7070",
  textAlign: "left",
  "@media (max-width: 768px)": {
    textAlign: "left",
    fontSize: "1rem",
    marginLeft: ".5rem",
  },
});

const ArrowTextLink = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

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
    color: "white",
    fontSize: isSmallScreen ? "1.5rem" : "3rem",
  };

  return (
    <Container>
      <CircularArrow>
        <ArrowForwardIcon style={styles} />
      </CircularArrow>
      <Text>
        Visit <b>The Working with the Cancer Pledge</b> Website!
      </Text>
    </Container>
  );
};

export default ArrowTextLink;
