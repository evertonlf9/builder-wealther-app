import { createGlobalStyle } from "styled-components";

import "antd/dist/antd.css";
import "flexboxgrid/css/flexboxgrid.min.css";

export default createGlobalStyle`
  body {
    /* overflow: hidden; */
    margin: 0;
  }

  #root {
    /* overflow: hidden; */
  }

  main {
    overflow-y: auto;
    overflow-x: hidden;
    height: calc(100vh - 56px);
  }
`;
