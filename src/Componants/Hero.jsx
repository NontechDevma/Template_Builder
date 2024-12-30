import { Box } from "@mui/material";
import ThreeJSScene from "./ThreeJS";

const Hero = () => {
  return (
    <>
      <Box
        color="#DD2859"
        display="flex"
        p={5}
        boxSizing="border-box"
        fontSize={{
          xs: "1.5rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "5rem",
        }}
        alignItems="start"
        justifyContent="center"
        textWrap="wrap"
        height={{
          xs: "25vh",
          sm: "30vh",
          md: "30vh",
          lg: "40vh",
          xl: "40vh",
        }}
      >
        <ThreeJSScene />
      </Box>
    </>
  );
};

export default Hero;
