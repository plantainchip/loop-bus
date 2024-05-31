import {
    Header
  } from "grommet";

const AppBar = (props) => (
    <Header
      alignSelf="center"
      background="brand"
      width="100%"
      justify="center"
      pad={{ left: "medium", right: "medium", vertical: "small" }}
      elevation="medium"
      {...props}
    />
  );
  
export default AppBar;
