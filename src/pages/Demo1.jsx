import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import gif from "../assets/background.gif";
import gifMobile from "../assets/390x844-Hair.gif";
import logo from "../assets/LOGO.png";
import counter from "../assets/Asset 83.png";
import counterMobile from "../assets/Asset 80.png";
import { styled } from "@mui/material/styles";
import blackHair from "../assets/black.gif";
import blondeHair from "../assets/blonde.gif";
import brownHair from "../assets/brown.gif";
import "odometer/themes/odometer-theme-default.css"; // Import the default odometer styles
import yourButtonImageSrc from "../assets/DONATE NOW.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import openPdf from "../services/pdf.service";
import companyService from "../services/company.service";
import CircularProgress from "@mui/material/CircularProgress";
import CustomOdometer from "../components/CustomOdometer";
import "../helpers/Fonts.css";

const GifWrapper = styled("div")({
  position: "relative",
  width: "100%",
  margin: "0 auto",
});
const GifImage = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
});

const ScissorsImage = styled("img")({
  position: "absolute",
  top: "77.5%",
  left: "20%",
  transform: "translate(-50%, -50%)",
  width: "15%",
  height: "auto",
  transition: "left 2s ease-in-out",
  "@media (max-width: 500px)": {
    width: "25%",
    top: "5%",
    left: "25%", // Start at 50%
  },
  "@media (min-width: 600px) and (max-width:768px)": {
    fontSize: "1.2rem",
    top: "42%",
  },
  "@media (min-width: 768px) and (max-width:992px)": {
    fontSize: "1.2rem",
    top: "42%",
  },
});

const NameText = styled("div")({
  position: "absolute",
  top: "67%",
  left: "20%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "white",
  fontSize: "150%",
  fontWeight: "lighter",
  transition: "left 2s ease-in-out",
  "@media (max-width: 500px)": {
    fontSize: "1rem",
  },
  "@media (min-width: 500px) and (max-width:600px)": {
    fontSize: "1.2rem",
  },
  "@media (min-width: 600px) and (max-width:768px)": {
    fontSize: "1.4rem",
  },
  "@media (min-width: 768px) and (max-width:992px)": {
    fontSize: "1.4rem",
  },
});

const MileText = styled("div")({
  position: "absolute",
  top: "90%",
  left: "20%", // Start at 50%
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "white",
  fontSize: "120%",
  fontWeight: "lighter",
  transition: "left 2s ease-in-out",
  borderRadius: "2rem",
  border: "2px solid white",
  padding: ".3% .8rem",
  backgroundColor: "none",
  "@media (max-width: 500px)": {
    fontSize: ".8rem",
    padding: ".2rem .6rem",
  },
  "@media (min-width: 500px) and (max-width:600px)": {
    fontSize: "1rem",
    padding: ".3rem .8rem",
  },
  "@media (min-width: 600px) and (max-width:768px)": {
    fontSize: "1.2rem",
    padding: ".3rem .8rem",
  },
  "@media (min-width: 768px) and (max-width:992px)": {
    fontSize: "1.2rem",
    padding: ".3rem .8rem",
  },
});

const LogoImage = styled("img")({
  position: "absolute",
  top: "16%",
  left: "13%", // Start at 50%
  transform: "translate(-50%, -50%)",
  width: "17%",
  height: "auto",
  "@media (max-width: 500px)": {
    width: "30%",
    top: "10%",
    left: "25%", // Start at 50%
  },
  "@media (min-width: 500px) and (max-width:600px)": {
    width: "35%",
    top: "10%",
    left: "25%", // Start at 50%
  },
  "@media (min-width: 600px) and (max-width:768px)": {
    width: "35%",
    top: "10%",
    left: "25%", // Start at 50%
  },
  "@media (min-width: 768px) and (max-width:992px)": {
    width: "18%",
    top: "16%",
    left: "20%", // Start at 50%
  },
  // "@media (min-width: 992px) and (max-width:1200px)": {
  //   width: "17%",
  //   top: "16%",
  //   left: "13%", // Start at 50%
  // },
});

const Line = styled("div")({
  position: "absolute",
  top: "18%",
  left: "22%", // Adjust the left position as needed
  transform: "translate(-50%, -50%)",
  width: "2px",
  height: "18%", // Adjust the height of the line as needed
  backgroundColor: "white",
  zIndex: 2, // Place the line above the GIF and other elements
  "@media (min-width: 768px) and (max-width:992px)": {
    top: "17%",
    left: "30%",
    height: "20%",
  },
  // "@media (min-width: 992px) and (max-width:1200px)": {
  //   top: "20%",
  //   left: "23%",
  //   height: "25%",
  // },
});

const CounterImage = styled("img")({
  position: "absolute",
  top: "12%",
  left: "80%", // Start at 50%
  transform: "translate(-50%, -50%)",
  width: "28%",
  height: "auto",
  color: "white",
  "@media (min-width: 500px) and (max-width:600px)": {
    width: "32%",
    top: "12%",
    left: "80%", // Start at 50%
  },
  "@media (min-width: 500px) and (max-width:600px)": {
    width: "32%",
    top: "12%",
    left: "80%", // Start at 50%
  },
  "@media (min-width: 600px) and (max-width:768px)": {
    width: "35%",
    top: "12%",
    left: "80%", // Start at 50%
  },
  "@media (min-width: 768px) and (max-width:992px)": {
    width: "30%",
    top: "12%",
    left: "80%", // Start at 50%
  },
});

const DemoLink = styled("a")({
  position: "absolute",
  top: "30%",
  left: "91%", // Start at 50%
  transform: "translate(-50%, -50%)",
  fontSize: "1.2rem",
  fontWeight: "lighter",
  height: "auto",
  color: "white",
  textDecoration: "none",
  transition: "color 0.3s, font-size 0.3s, filter 0.3s",
  "&:hover": {
    fontSize: "1.4rem",
    filter: "brightness(1.2)",
  },
  "&:active": {
    fontSize: "1.4rem",
    filter: "brightness(1.4)",
  },
  // Media query for smaller screens
  "@media (max-width: 500px)": {
    top: "21%",
    left: "74%", // Start at 50%
    fontSize: ".8rem",
    "&:hover": {
      fontSize: "1rem",
    },
    "&:active": {
      fontSize: "1rem",
    },
  },
  "@media (min-width: 500px) and (max-width:600px)": {
    top: "22%",
    left: "74%", // Start at 50%
    fontSize: ".9rem",
    "&:hover": {
      fontSize: "1.1rem",
    },
    "&:active": {
      fontSize: "1.1rem",
    },
  },
  "@media (min-width: 600px) and (max-width:768px)": {
    top: "22%",
    left: "74%", // Start at 50%
    fontSize: "1rem",
    "&:hover": {
      fontSize: "1.2rem",
    },
    "&:active": {
      fontSize: "1.2rem",
    },
  },
  "@media (min-width: 768px) and (max-width:992px)": {
    top: "32%",
    left: "91%", // Start at 50%
    fontSize: "1.2rem",
  },
});

const VisionText = styled("div")({
  position: "absolute",
  top: "18%",
  left: "43%", // Start at 50%
  transform: "translate(-50%, -50%)",
  color: "white",
  fontSize: "140%",
  fontWeight: "ligther",
  width: "40%",
  textAlign: "left",
  lineHeight: "1.7rem",
  "@media (max-width: 500px)": {
    width: "80%",
    top: "73%",
    left: "50%",
  },
  "@media (min-width: 500px) and (max-width:600px)": {
    width: "70%",
    top: "65%",
    left: "45%",
  },
  "@media (min-width: 600px) and (max-width:768px)": {
    width: "80%",
    top: "60%",
    left: "47%",
  },
  "@media (min-width: 768px) and (max-width:992px)": {
    width: "33%",
    top: "18%",
    left: "48%",
    fontSize: "1rem",
    lineHeight: "1.2rem",
  },
  // "@media (min-width: 992px) and (max-width:1200px)": {
  //   width: "37%",
  //   top: "20%",
  //   left: "44%",
  //   fontSize: "1.4rem",
  //   lineHeight: "1.6rem",
  // },
});

const Button = styled("button")({
  position: "absolute",
  top: "23%",
  left: "88%", // Start at 37%
  transform: "translate(-50%, -50%)",
  width: "12%",
  padding: "0", // Remove padding
  border: "none", // Remove border
  background: "none", // Remove background
  "@media (max-width: 500px)": {
    width: "8rem",
    top: "95%",
    left: "25%", // Start at 37%
  },
  "@media (min-width: 500px) and (max-width:600px)": {
    width: "10rem",
    top: "82%",
    left: "22%",
  },
  "@media (min-width: 600px) and (max-width:768px)": {
    width: "12rem",
    top: "70%",
    left: "20%",
  },
  "@media (min-width: 768px) and (max-width:992px)": {
    width: "7rem",
  },
});

const ButtonImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
  cursor: "pointer",
  transition: "transform 0.2s ease", // Add transition effect
  "&:hover": {
    transform: "scale(1.1)", // Apply a 10% scale increase on hover
  },
});

const Demo1 = ({ setLinkName }) => {
  const [animationDone, setAnimationDone] = useState(false);
  const [totalDonation, setTotalDonation] = useState(0);
  const [topThreeCompanies, setTopThreeCompanies] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [loading, setLoading] = useState(false);

  const small = window.matchMedia(
    "(min-width: 500px) and (max-width: 600px)"
  ).matches;
  const medium = useMediaQuery("(min-width: 600px) and (max-width: 768px)");
  const medlar = useMediaQuery("(min-width: 768px) and (max-width: 992px)");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAnimationDone(true);
  //   }, 100);
  // }, []);

  const init = React.useCallback(async () => {
    const res = await companyService.getTotalDonation();
    const res2 = await companyService.getAllCompanies();

    console.log(res);
    if (res?.status === 200) {
      setTotalDonation(res?.data?.totalDonation);
    }
    if (res2?.status === 200) {
      const copiedArray = res2?.data
        .map((item, index) => (index < 3 ? item : null))
        .filter((item) => item !== null);

      console.log(copiedArray); 

      setTopThreeCompanies(copiedArray);
      setAnimationDone(true);
    }
  }, []);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    // Check if the screen width is less than 500 pixels (tablet size)
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 500);
    };

    handleResize(); // Call it once on mount to set the initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Paper
      elevation={0}
      style={{ padding: "0", maxWidth: "100%", margin: "0 auto" }}
    >
      <GifWrapper>
        <GifImage
          src={isSmallScreen || small || medium ? gifMobile : gif}
          alt="GIF"
        />
        <LogoImage src={logo} alt="Logo" />
        {!isSmallScreen && !small && !medium && <Line />}
        <CounterImage
          src={isSmallScreen || small || medium ? counterMobile : counter}
          alt="Total Donation Counter"
        />
        <CustomOdometer totalDonation={totalDonation} />

        <DemoLink
          className="mont-regular"
          style={{
            fontSize: isSmallScreen
              ? ".8rem"
              : small
              ? "1rem"
              : medium
              ? "1.2rem"
              : medlar
              ? "1.3rem"
              : "1.4rem",
            filter: "brightness(1.4)",
            textDecoration: "underline",
          }}
        >
          Demo1
        </DemoLink>
        <DemoLink
          className="mont-regular"
          onClick={() => {
            setLinkName("Demo 2");
          }}
          style={{
            top: isSmallScreen
              ? null
              : small
              ? "22%"
              : medium
              ? "22%"
              : medlar
              ? "37%"
              : "34%",
            left: isSmallScreen || small ? "86%" : medium ? "85.8%" : null,
          }}
        >
          Demo2
        </DemoLink>
        <VisionText className="mont-bold">
          <b>Create Miles of Smiles with Strands of Strength!</b>
          <br /> Join our corporate challenge - each hair donation from your
          team adds 'miles' of hope for cancer patients. Transform lives with
          every inch.
        </VisionText>
        <Button
          onClick={async () => {
            setLoading(true); // Set loading to true when the button is clicked
            const res = await openPdf();
            if (res.res.status === 200) {
              window.open(res.pdfUrl);
            } else {
              alert("Please allow pop-ups for this site to view the PDF.");
            }
            setLoading(false); // Set loading back to false after the action is complete
          }}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" /> // Display loading indicator
          ) : (
            <ButtonImage src={yourButtonImageSrc} alt="Image Button" />
          )}
        </Button>

        <span>
          <ScissorsImage
            src={brownHair}
            alt="brownHair"
            className="mont-regular"
            style={{
              left: animationDone ? "20%" : "5%",
              top: isSmallScreen
                ? "40%"
                : small
                ? "42%"
                : medium
                ? "42%"
                : "65%", // Adjust the top position based on screen size
            }}
          />
          <NameText
            className="mont-regular"
            style={{
              left: animationDone ? "20%" : "7%",
              top: isSmallScreen
                ? "29%"
                : small
                ? "33%"
                : medium
                ? "33%"
                : medlar
                ? "34%"
                : "38%", // Adjust the top position based on screen size
            }}
          >
            {topThreeCompanies[2]?.company_name}
          </NameText>
          <MileText
            className="mont-regular"
            style={{
              left: animationDone ? "20%" : "7%",
              top: isSmallScreen
                ? "32%"
                : small
                ? "36%"
                : medium
                ? "36%"
                : medlar
                ? "42%"
                : "43%", // Adjust the top position based on screen size
            }}
          >
            {topThreeCompanies[2]?.company_donation_mil} mil.
          </MileText>
        </span>
        <span>
          <ScissorsImage
            className="mont-regular"
            src={blondeHair}
            alt="blondeHair"
            style={{
              left: animationDone ? "50%" : "8%",
              top: isSmallScreen
                ? "45%"
                : small
                ? "46%"
                : medium
                ? "46%"
                : "81%", // Adjust the top position based on screen size
            }}
          />
          <NameText
            className="mont-regular"
            style={{
              left: animationDone ? "52%" : "10%",
              top: isSmallScreen
                ? "34%"
                : small
                ? "36%"
                : medium
                ? "37%"
                : medlar
                ? "47%"
                : "53%", // Adjust the top position based on screen size
            }}
          >
            {topThreeCompanies[1]?.company_name}
          </NameText>
          <MileText
            className="mont-regular"
            style={{
              left: animationDone ? "52%" : "10%",
              top: isSmallScreen
                ? "37%"
                : small
                ? "39%"
                : medium
                ? "40%"
                : medlar
                ? "55%"
                : "58%", // Adjust the top position based on screen size
            }}
          >
            {topThreeCompanies[1]?.company_donation_mil} mil.
          </MileText>
        </span>
        <span>
          <ScissorsImage
            className="mont-regular"
            src={blackHair}
            alt="blackHair"
            style={{
              left: animationDone ? "80%" : "14%",
              top: isSmallScreen
                ? "43%"
                : small
                ? "44%"
                : medium
                ? "44%"
                : "73%", // Adjust the top position based on screen size
            }}
          />
          <NameText
            className="mont-regular"
            style={{
              left: animationDone ? "82%" : "16%",
              top: isSmallScreen
                ? "32%"
                : small
                ? "35%"
                : medium
                ? "35%"
                : medlar
                ? "42%"
                : "46%", // Adjust the top position based on screen size
            }}
          >
            {topThreeCompanies[0]?.company_name}
          </NameText>
          <MileText
            className="mont-regular"
            style={{
              left: animationDone ? "82%" : "16%",
              top: isSmallScreen
                ? "35%"
                : small
                ? "38%"
                : medium
                ? "38%"
                : medlar
                ? "50%"
                : "51%", // Adjust the top position based on screen size
            }}
          >
            {topThreeCompanies[0]?.company_donation_mil} mil.
          </MileText>
        </span>
      </GifWrapper>
    </Paper>
  );
};

export default Demo1;
