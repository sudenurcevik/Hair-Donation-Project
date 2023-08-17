import React from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import "../helpers/Fonts.css";

// Import circular images
import image1 from "../assets/Group 2.png";
import image2 from "../assets/Group 81.png";
import image3 from "../assets/Group 79.png";
import image4 from "../assets/Group 83.png";
import image5 from "../assets/Group 8.png";
import number1 from "../assets/1.png";
import number2 from "../assets/2.png";
import number3 from "../assets/3.png";
import number4 from "../assets/4.png";
import number5 from "../assets/5.png";

// Create a container for the images and the orange string
const Container = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1.5rem",
  paddingBottom: ".5rem",
  marginTop: "3rem",
});

// Create a component for the orange string
const OrangeString = styled("div")({
  width: "110%",
  height: "4px", // Adjust the height of the orange string as needed
  marginLeft: "-.2rem",
  background: "#FF4B00", // Orange color from the palette

  zIndex: 0.8,
});

const NumberImage = styled("img")({
  width: "2.3rem",
  height: "auto",
  marginBottom: "-.8rem",
});

// Create a component for the circular images
const CircularImage = styled("img")({
  borderRadius: "50%",
  width: "100px", // Adjust the size of the circular images as needed
  height: "100px",
  margin: "0", // Adjust the spacing between the images and the string
  "@media (max-width: 992px)": {
    width: "70px", // Adjust the size of the circular images as needed
    height: "70px",
  },
  "@media (max-width: 768px)": {
    width: "60px", // Adjust the size of the circular images as needed
    height: "60px",
  },
});

const Title = styled("h2")({
  fontSize: "3rem",
  fontWeight: "bold",
  color: "#6F7070",
  marginBottom: "1rem",
});

const ParagraphContainer = styled("div")({
  display: "flex",
  alignItems: "left",
  justifyContent: "space-between",
});

const StringContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  justifyContent: "flex-start",
  marginBottom: "3.5rem",
});

const Paragraph = styled("p")({
  fontSize: "1rem",
  color: "#666",
  textAlign: "left",
  width: "25%", // Adjust the size of the circular images as needed
  height: "auto",
  margin: "0", // Adjust the spacing between the images and the string
  "@media (max-width: 992px)": {
    width: "50%", // Adjust the size of the circular images as needed
    height: "auto",
    margin: 0,
    padding: ".5rem",
  },
});

const CustomPaper = styled(Paper)({
  padding: "10px",
  width: "65%",
  margin: "3rem auto",
  "@media (max-width: 992px)": {
    padding: "10px",
    width: "90%", // Adjust the width for smaller screens
  },
});

export default function HowItWorks() {
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

  return (
    <CustomPaper elevation={0} className="mont-regular">
      <Title className="manuka-bold">How Does It Work?</Title>
      {isSmallScreen ? (
        <>
          <Container>
            <CircularImage src={image1} alt="Image 1" />
            <StringContainer>
              <NumberImage
                src={number1}
                alt="Number 1"
                style={{
                  width: "1.5rem",
                  height: "auto",
                  "@media (max-width: 768px)": {
                    width: "1rem",
                  },
                }}
              />
              <OrangeString />
            </StringContainer>
            <CircularImage src={image2} alt="Image 2" />
            <StringContainer>
              <NumberImage
                style={{
                  "@media (max-width: 768px)": {
                    width: "1rem",
                  },
                }}
                src={number2}
                alt="Number 2"
              />
              <OrangeString />
            </StringContainer>
          </Container>
          <ParagraphContainer className="mont-regular">
            <Paragraph>
              To ensure a successful donation, your hair should be at least 10
              inches long, dry and clean. While cutting, divide it into 4-6
              sections. After the cut, securely fasten each section with rubber
              bands, leaving 2-3 inches of space between them.
            </Paragraph>
            <Paragraph>
              Simply place your cut hair into a sealed plastic bag to keep it
              safe during transit. Next, insert the plastic bag into an envelope
              for mailing. Remember to include the donation form in the mail as
              well.
            </Paragraph>
          </ParagraphContainer>
          <Container>
            <CircularImage src={image3} alt="Image 3" />
            <StringContainer>
              <NumberImage
                style={{
                  "@media (max-width: 768px)": {
                    width: "1rem",
                  },
                }}
                src={number3}
                alt="Number 3"
              />
              <OrangeString />
            </StringContainer>
            <CircularImage src={image4} alt="Image 4" />
            <StringContainer>
              <NumberImage
                style={{
                  "@media (max-width: 768px)": {
                    width: "1rem",
                  },
                }}
                src={number4}
                alt="Number 4"
              />
              <OrangeString />
            </StringContainer>
          </Container>
          <ParagraphContainer className="mont-regular">
            <Paragraph>
              You should send the hair to the address mentioned in the donation
              form. Make sure to securely seal the envelope to protect the hair
              during shipping.
            </Paragraph>
            <Paragraph>
              Donated hair is delivered to support and empower cancer patients,
              reminding them they are not alone in their journey.
            </Paragraph>
          </ParagraphContainer>
          <Container style={{ maxWidth: "50%" }}>
            <CircularImage src={image5} alt="Image 4" />
            <StringContainer style={{ width: "100%" }}>
              <NumberImage
                style={{
                  "@media (max-width: 768px)": {
                    width: "1rem",
                  },
                }}
                src={number5}
                alt="Number 5"
              />
              <OrangeString />
            </StringContainer>
          </Container>
          <ParagraphContainer
            className="mont-regular"
            style={{ maxWidth: "100%" }}
          >
            <Paragraph>
              The donated hair sent to the collection center will be converted
              into kilometers/ miles and take your company one step further in
              this competition.
            </Paragraph>
          </ParagraphContainer>
        </>
      ) : (
        <>
          <Container>
            <CircularImage src={image1} alt="Image 1" />
            <StringContainer>
              <NumberImage
                src={number1}
                alt="Number 1"
                style={{ width: "1.5rem", height: "auto" }}
              />
              <OrangeString />
            </StringContainer>
            <CircularImage src={image2} alt="Image 2" />
            <StringContainer>
              <NumberImage src={number2} alt="Number 2" />
              <OrangeString />
            </StringContainer>
            <CircularImage src={image3} alt="Image 3" />
            <StringContainer style={{ width: "15%" }}>
              <NumberImage src={number3} alt="Number 3" />
              <OrangeString />
            </StringContainer>
          </Container>
          <ParagraphContainer className="mont-regular">
            <Paragraph>
              To ensure a successful donation, your hair should be at least 10
              inches long, dry and clean. While cutting, divide it into 4-6
              sections. After the cut, securely fasten each section with rubber
              bands, leaving 2-3 inches of space between them.
            </Paragraph>
            <Paragraph>
              Simply place your cut hair into a sealed plastic bag to keep it
              safe during transit. Next, insert the plastic bag into an envelope
              for mailing. Remember to include the donation form in the mail as
              well.
            </Paragraph>
            <Paragraph>
              You should send the hair to the address mentioned in the donation
              form. Make sure to securely seal the envelope to protect the hair
              during shipping.
            </Paragraph>
          </ParagraphContainer>
          <Container style={{ maxWidth: "59%" }}>
            <CircularImage src={image4} alt="Image 3" />
            <StringContainer>
              <NumberImage src={number4} alt="Number 4" />
              <OrangeString />
            </StringContainer>
            <CircularImage src={image5} alt="Image 4" />
            <StringContainer style={{ width: "15%" }}>
              <NumberImage src={number5} alt="Number 5" />
              <OrangeString />
            </StringContainer>
          </Container>
          <ParagraphContainer
            className="mont-regular"
            style={{ maxWidth: "59%" }}
          >
            <Paragraph>
              Donated hair is delivered to support and empower cancer patients,
              reminding them they are not alone in their journey.
            </Paragraph>
            <Paragraph>
              The donated hair sent to the collection center will be converted
              into kilometers/ miles and take your company one step further in
              this competition.
            </Paragraph>
          </ParagraphContainer>
        </>
      )}
    </CustomPaper>
  );
}
