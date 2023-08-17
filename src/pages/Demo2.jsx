import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import gif from "../assets/gif-1.gif";
import gifMobile from "../assets/390x844.gif";
import scissors from "../assets/makas.gif";
import logo from "../assets/Asset 23.png";
import counter from "../assets/Asset 83.png";
import counterMobile from "../assets/Asset 80.png";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import companyService from "../services/company.service";
import openPdf from "../services/pdf.service";
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
  width: "5%",
  height: "auto",
  transition: "left 3s ease-in-out",
  "@media (max-width: 500px)": {
    width: "8%",
    top: "35.5%",
    left: "25%", // Start at 50%
  },
  "@media (min-width: 500px) and (max-width:600px)": {
    width: "8%",
    top: "35.5%",
    left: "25%", // Start at 50%
  },
  "@media (min-width: 600px) and (max-width:768px)": {
    width: "10%",
    top: "34.5%",
    left: "25%", // Start at 50%
  },
  "@media (min-width: 768px) and (max-width:992px)": {
    top: "73%",
    width: "7%",
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
  transition: "left 3s ease-in-out",
  "@media (max-width: 500px)": {
    fontSize: "1rem",
    top: "31%",
  },
  "@media (min-width: 500px) and (max-width:600px)": {
    fontSize: "1.2rem",
    top: "31%",
  },
  "@media (min-width: 600px) and (max-width:768px)": {
    fontSize: "1.5rem",
    top: "29%",
  },
  "@media (min-width: 768px) and (max-width:992px)": {
    fontSize: "1.4rem",
    top: "60%",
  },
});

const MileText = styled("div")({
  position: "absolute",
  top: "90%",
  left: "20%", // Start at 50%
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "white",
  fontSize: "1.6rem",
  fontWeight: "lighter",
  transition: "left 3s ease-in-out",
  borderRadius: ".5rem",
  border: "2px solid white",
  padding: ".3rem .8rem",
  backgroundColor: "#8000BA",
  "@media (max-width: 500px)": {
    fontSize: ".8rem",
    padding: ".2rem .6rem",
    top: "41%",
  },
  "@media (min-width: 500px) and (max-width:600px)": {
    fontSize: "1rem",
    padding: ".2rem .6rem",
    top: "40%",
  },
  "@media (min-width: 600px) and (max-width:768px)": {
    fontSize: "1.2rem",
    padding: ".3rem .8rem",
    top: "40%",
  },
  "@media (min-width: 768px) and (max-width:992px)": {
    fontSize: "1.2rem",
    padding: ".3rem .8rem",
    top: "90%",
  },
});

const LogoImage = styled("img")({
  position: "absolute",
  top: "13%",
  left: "15%", // Start at 50%
  transform: "translate(-50%, -50%)",
  width: "18%",
  height: "auto",
  "@media (max-width: 500px)": {
    width: "42%",
    top: "10%",
    left: "27%", // Start at 50%
  },
  "@media (min-width: 500px) and (max-width:600px)": {
    width: "40%",
    top: "10%",
    left: "25%", // Start at 50%
  },
  "@media (min-width: 600px) and (max-width:768px)": {
    width: "40%",
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
  top: "10%",
  left: "45%", // Start at 50%
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
    fontSize: "1rem",
    "&:hover": {
      fontSize: "1.2rem",
    },
    "&:active": {
      fontSize: "1.2rem",
    },
  },
});

const VisionText = styled("div")({
  position: "absolute",
  top: "32%",
  left: "74%", // Start at 50%
  transform: "translate(-50%, -50%)",
  color: "white",
  fontSize: "170%",
  width: "40%",
  textAlign: "right",
  "@media (max-width: 500px)": {
    textAlign: "left",
    top: "65%",
    left: "50%", // Start at 50%
    fontSize: "1.7rem",
    width: "90%",
  },
  "@media (min-width: 500px) and (max-width:600px)": {
    textAlign: "left",
    top: "60%",
    left: "50%", // Start at 50%
    fontSize: "1.8rem",
    width: "90%",
  },
  "@media (min-width: 600px) and (max-width:768px)": {
    textAlign: "left",
    top: "58%",
    left: "50%", // Start at 50%
    fontSize: "2rem",
    width: "90%",
  },
  "@media (min-width: 768px) and (max-width:992px)": {
    top: "30%",
    left: "65%", // Start at 50%
    fontSize: "1.2rem",
    width: "60%",
  },
  "@media (min-width: 992px) and (max-width:1480px)": {
    top: "30%",
    left: "66%", // Start at 50%
    fontSize: "1.3rem",
    width: "56%",
  },
});

// const colorPalette = ["#8000BA", "#FF4B00"];

const Button = styled("button")({
  position: "absolute",
  top: "48%",
  left: "88%", // Start at 37%
  transform: "translate(-50%, -50%)",
  color: "white",
  fontSize: "1.5rem",
  fontWeight: "lighter",
  width: "12rem",
  border: "2px solid white",
  padding: "0.5rem .8rem",
  borderRadius: ".5rem",
  background: `linear-gradient(to right, #8000BA, #FF4B00)`,
  backgroundSize: "200% 100%",
  backgroundPosition: "0 0",
  transition: "background-position 1s ease, transform 0.2s ease-out", // Make the transform smoother on hover
  "&:hover": {
    backgroundPosition: "100% 0",
    transform: "translate(-50%, -50%) scale(1.1)", // Apply a 10% scale increase on hover
  },
  "@media (max-width: 500px)": {
    top: "87%",
    left: "24%",
    padding: "0.5rem .4rem",
    width: "10rem",
    fontSize: "1.1rem",
  },
  "@media (min-width: 500px) and (max-width:600px)": {
    top: "75%",
    left: "20%",
    padding: "0.5rem .4rem",
    width: "12rem",
    fontSize: "1.5rem",
  },
  "@media (min-width: 600px) and (max-width:768px)": {
    top: "73%",
    left: "17%",
    padding: "0.5rem .4rem",
    width: "12rem",
    fontSize: "1.5rem",
  },
  "@media (min-width: 768px) and (max-width:992px)": {
    top: "48%",
    left: "87%",
    padding: "0.5rem .4rem",
    width: "8rem",
    fontSize: "1rem",
  },
  "@media (min-width: 992px) and (max-width:1480px)": {
    top: "45%",
    left: "88%",
    padding: "0.5rem .4rem",
    width: "10rem",
    fontSize: "1.2rem",
  },
});

const Demo2 = ({ setLinkName }) => {
  const [animationDone, setAnimationDone] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [totalDonation, setTotalDonation] = useState("");
  const [topThreeCompanies, setTopThreeCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  const small = window.matchMedia(
    "(min-width: 500px) and (max-width: 600px)"
  ).matches;
  const medium = useMediaQuery("(min-width: 600px) and (max-width: 768px)");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAnimationDone(true);
  //   }, 100);
  // }, []);

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

  const init = React.useCallback(async () => {
    const res = await companyService.getTotalDonation();
    const res2 = await companyService.getAllCompanies();

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
        <CounterImage
          src={isSmallScreen || small || medium ? counterMobile : counter}
          alt="Total Donation Counter"
        />
        <CustomOdometer totalDonation={totalDonation} />
        <DemoLink
          onClick={() => {
            setLinkName("Demo 1");
          }}
          style={{
            filter: "brightness(1.4)",
          }}
          className="mont-regular"
        >
          Demo1
        </DemoLink>
        <DemoLink
          className="mont-regular"
          style={{
            fontSize: isSmallScreen
              ? ".8rem"
              : small
              ? "1rem"
              : medium
              ? "1.2rem"
              : "1.2rem",
            top: isSmallScreen ? null : small ? "22%" : medium ? "22%" : "10%",
            left: isSmallScreen || small ? "86%" : medium ? "85.8%" : "53%",
            textDecoration: "underline",
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
          style={{ background: loading && "none", border: loading && "none" }}
          onClick={async () => {
            setLoading(true); // Set loadingPdf to true when the button is clicked
            const res = await openPdf();
            if (res.res.status === 200) {
              window.open(res.pdfUrl);
            } else {
              alert("Please allow pop-ups for this site to view the PDF.");
            }
            setLoading(false); // Set loadingPdf back to false after the action is complete
          }}
        >
          {loading ? (
            <CircularProgress size={24} style={{ color: "white" }} /> // Display a loading indicator if loadingPdf is true
          ) : (
            "Donate Now"
          )}
        </Button>
        <span>
          <ScissorsImage
            src={scissors}
            alt="Scissors"
            style={{ left: animationDone ? "50%" : "20%" }}
            className="mont-regular"
          />
          <NameText
            className="mont-regular"
            style={{ left: animationDone ? "50%" : "20%" }}
          >
            {topThreeCompanies[2]?.company_name}
          </NameText>
          <MileText
            className="mont-regular"
            style={{ left: animationDone ? "50%" : "20%" }}
          >
            {topThreeCompanies[2]?.company_donation_mil} mil.
          </MileText>
        </span>
        <span>
          <ScissorsImage
            src={scissors}
            alt="Scissors"
            style={{ left: animationDone ? "70%" : "20%" }}
            className="mont-regular"
          />
          <NameText
            className="mont-regular"
            style={{ left: animationDone ? "70%" : "20%" }}
          >
            {topThreeCompanies[1]?.company_name}
          </NameText>
          <MileText
            className="mont-regular"
            style={{ left: animationDone ? "70%" : "20%" }}
          >
            {topThreeCompanies[1]?.company_donation_mil} mil.
          </MileText>
        </span>
        <span>
          <ScissorsImage
            src={scissors}
            alt="Scissors"
            style={{ left: animationDone ? "90%" : "%" }}
            className="mont-regular"
          />
          <NameText
            className="mont-regular"
            style={{ left: animationDone ? "90%" : "20%" }}
          >
            {topThreeCompanies[0]?.company_name}
          </NameText>
          <MileText
            className="mont-regular"
            style={{ left: animationDone ? "90%" : "20%" }}
          >
            {topThreeCompanies[0]?.company_donation_mil} mil.
          </MileText>
        </span>
      </GifWrapper>
    </Paper>
  );
};

export default Demo2;
