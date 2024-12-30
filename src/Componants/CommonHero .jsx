import { Box, Button, Typography } from "@mui/material";
import PropTypes from "prop-types";
import templateImage from "../assets/resume-template.jpg";
import { Link } from "react-router-dom";

const CommonHero = ({ prop }) => {
  return (
    <Box
    bgcolor="#F5F5F5"
      display={{ xs: "block", md: "flex" }} // Hide on medium screens
      p={5}
      flaxDirection={{ xs: "column", sm: "column", md: "row", lg: "row" }}
      flexWrap="wrap"
      boxSizing="border-box"
      justifyContent={{
        xs: "center",
        sm: "center",
        md: "space-betwwen",
        lg: "space-between",
      }}
      sx={{ background: "linear-gradient(#1D2B64,#F8CDDA)" }}

      width="100%"
    >
      <Box
        width={{ xs: "100%", sm: "100%", md: "50%", lg: "50%" }}
        display={"flex"}
        alignItems="center"
        flexDirection="column"
      >
        <Typography
          variant="h1"
          align="center"
          color="primary"
          fontSize={{
            xs: "1.5rem",
            sm: "2rem",
            md: "2.5rem",
            lg: "3rem",
            xl: "5rem",
          }}
          sx={{ fontWeight: "800" }}
          p={2}
          boxSizing="border-box"
        >
          {prop?.data}
        </Typography>
        <Link to="/resume-maker">
        <Button
          variant="contained"
          sx={{
            fontSize: "1.2rem",
            padding: "15px 40px",
            borderRadius: "40px",
            marginTop: "2rem",
            transition: "all 0.5s",
            bgcolor:"#DD2859",
            marginBottom: "2rem",
          }}
        >
          Create Now
        </Button>
        </Link>
      </Box>
      <Box
        width={{ xs: "100%" }}
        display={{ xs: "flex", sm: "none", md: "none", lg: "none" }}
        justifyContent="center"
        alignItems="center"
        p={{ xs: 1, sm: 1, md: 2, lg: 2 }}
        boxSizing="border-box"
      >
        <img
          src={templateImage}
          alt="template-resume"
          style={{
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "300px",
          }}
        />
      </Box>
      <Box
        width={{ sm: "100%" }}
        display={{ xs: "none", sm: "flex", md: "none", lg: "none" }}
        justifyContent="center"
        alignItems="center"
        p={{ xs: 1, sm: 1, md: 2, lg: 2 }}
        boxSizing="border-box"
      >
        <img
          src={templateImage}
          alt="template-resume"
          style={{
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "600px",
          }}
        />
      </Box>
      <Box
        width={{ sm: "50%" }}
        display={{ xs: "none", sm: "none", md: "flex", lg: "none" }}
        justifyContent="center"
        alignItems="center"
        p={{ xs: 1, sm: 1, md: 2, lg: 2 }}
        boxSizing="border-box"
      >
        <img
          src={templateImage}
          alt="template-resume"
          style={{
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "400px",
          }}
        />
      </Box>
      <Box
        width={{ sm: "50%" }}
        display={{ xs: "none", sm: "none", md: "none", lg: "flex" }}
        justifyContent="center"
        alignItems="center"
        p={{ xs: 2, sm: 2, md: 2, lg: 2 }}
        boxSizing="border-box"
      >
        <img
          src={templateImage}
          alt="template-resume"
          style={{
            borderRadius: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "600px",
          }}
        />
      </Box>
    </Box>
  );
};
CommonHero.propTypes = {
  prop: PropTypes.shape({
    data: PropTypes.string,
  }),
};

export default CommonHero;
