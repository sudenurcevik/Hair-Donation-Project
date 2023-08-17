import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "../helpers/Fonts.css";

const Wrapper = styled("div")({
  maxWidth: "100%",
  margin: "0 auto",
});

const Title = styled("h2")({
  fontFamily: "TestManukaBold, sans-serif",
  fontSize: "3rem",
  fontWeight: "bold",
  color: "#555",
  marginBottom: "1rem",
  "@media (max-width: 768px)": {
    fontSize: "2.5rem",
    marginBottom: "0.5rem",
  },
});

const Paragraph = styled("p")({
  fontSize: "1.2rem",
  color: "#666",
  lineHeight: "2rem",
  // letterSpacing: "1px",
  "@media (max-width: 768px)": {
    fontSize: "1rem",
    lineHeight: "1.6rem",
  },
});

const PurpleText = styled("span")({
  fontFamily: "TestManukaBold, sans-serif",
  color: "#8000BA", // Purple color from the palette
  fontWeight: "bolder",
  fontSize: "2rem",
  "@media (max-width: 768px)": {
    fontSize: "1.5rem",
  },
});

const CustomPaper = styled(Paper)({
  padding: "2.5rem",
  width: "65%", // Set the default width
  margin: "3rem auto",
  borderRadius: "2rem",
  backgroundColor: "#F5F5F5",
  "@media (max-width: 768px)": {
    padding: "1.5rem",
    width: "90%", // Adjust the width for smaller screens
  },
});

export default function About() {
  return (
    <CustomPaper elevation={2}>
      <Wrapper>
        <Title>
          Empower Through Compassion: Hair Donation for the Support of Cancer
          Warriors
        </Title>
        <Paragraph className="mont-regular">
          Welcome to Miles of Empowerment, where every strand of donated hair
          creates miles of smiles and strength! Miles of Empowerment is a hair
          donation competition between companies to show their support to people
          struggling with cancer. Join our spirited corporate challenge and let
          your team’s hair donations become a beacon of hope for cancer patients
          in need. With each hair donation, we offer unwavering support and
          compassion, bringing positive change to the lives of those facing
          cancer. Embrace the power of giving, and create awareness with every
          inch, as together, we empower cancer patients on their journey to
          healing.
        </Paragraph>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <PurpleText>#milesofempowerment</PurpleText>
        </div>
      </Wrapper>
    </CustomPaper>
  );
}
