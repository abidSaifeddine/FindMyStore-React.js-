import { title } from "assets/jss/material-kit-react.jsx";

const workStyle = {
  section: {
    padding: "70px 0"
  },
  title: {
    ...title,
    marginBottom: "50px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
    titleNoMargin: {
        ...title,
        marginBottom: "0",
        marginTop: "30px",
        minHeight: "0",
        textDecoration: "none"
    },
  description: {
    color: "#999",
    textAlign: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  textArea: {
    marginRight: "15px",
    marginLeft: "15px"
  }
};

export default workStyle;
