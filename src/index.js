import "./styles.scss";

import React, { useState } from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Box from "@material-ui/core/Box";
import { IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import RotateLeft from "@material-ui/icons/RotateLeft";
import "objectFitPolyfill";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 720,
      lg: 960,
      xl: 1224
    }
  }
});

function App() {
  window.objectFitPolyfill();

  const initialOptions = {
    centerContent: false,
    limitToBounds: false,
    limitToWrapper: true
  };

  const [modalState1, setModalState1] = useState(false);
  const [modalState2, setModalState2] = useState(false);
  const [options, setOptions] = useState(initialOptions);

  const onLoad = e => {
    console.log(e.target.naturalWidth, e.target.width);
    setOptions({
      ...initialOptions,
      defaultScale: e.target.width / e.target.naturalWidth
    });
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth="xl" fixed>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setModalState1(true)}
            >
              Default
            </Button>
            <Dialog
              open={modalState1}
              fullScreen
              fullWidth
              className="modal--pnz"
            >
              <Container maxWidth="xl" fixed>
                <IconButton
                  color="primary"
                  className="modal__close-btn"
                  onClick={() => setModalState1(false)}
                >
                  <Close />
                </IconButton>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h3>Cillum dolore tempor sint veniam.</h3>
                    <Box position={"relative"}>
                      <TransformWrapper options={options}>
                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                          <React.Fragment>
                            <div className="tools">
                              <IconButton
                                size={"small"}
                                variant="contained"
                                color="primary"
                                onClick={zoomIn}
                              >
                                <Add />
                              </IconButton>
                              <IconButton
                                size={"small"}
                                variant="contained"
                                color="primary"
                                onClick={zoomOut}
                              >
                                <Remove />
                              </IconButton>
                              <IconButton
                                size={"small"}
                                variant="contained"
                                color="primary"
                                onClick={resetTransform}
                              >
                                <RotateLeft />
                              </IconButton>
                            </div>
                            <div className="pnz-container">
                              <TransformComponent>
                                <img
                                  src="https://www.iucn.org/sites/dev/files/media-uploads/2018/06/palm_oil_full_final-infographic_tiny_2000_6829.png"
                                  alt="title"
                                  onLoad={onLoad}
                                />
                              </TransformComponent>
                            </div>
                          </React.Fragment>
                        )}
                      </TransformWrapper>
                    </Box>
                    <p>
                      Exercitation esse sunt proident nisi. Ea id in ullamco
                      consequat tempor anim exercitation nulla reprehenderit qui
                      consectetur nulla cupidatat esse. Ut cillum consequat
                      ipsum ea ex laboris cillum.
                    </p>
                  </Grid>
                </Grid>
              </Container>
            </Dialog>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setModalState2(true)}
            >
              Overflow Content
            </Button>
            <Dialog
              open={modalState2}
              fullScreen
              fullWidth
              className="modal--pnz"
            >
              <Container maxWidth="xl" fixed>
                <IconButton
                  color="primary"
                  className="modal__close-btn"
                  onClick={() => setModalState2(false)}
                >
                  <Close />
                </IconButton>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <h3>Reprehenderit magna excepteur cupidatat in.</h3>
                    <Box position={"relative"}>
                      <TransformWrapper options={options}>
                        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                          <React.Fragment>
                            <div className="tools">
                              <IconButton
                                size={"small"}
                                variant="contained"
                                color="primary"
                                onClick={zoomIn}
                              >
                                <Add />
                              </IconButton>
                              <IconButton
                                size={"small"}
                                variant="contained"
                                color="primary"
                                onClick={zoomOut}
                              >
                                <Remove />
                              </IconButton>
                              <IconButton
                                size={"small"}
                                variant="contained"
                                color="primary"
                                onClick={resetTransform}
                              >
                                <RotateLeft />
                              </IconButton>
                            </div>
                            <div className="pnz-container">
                              <TransformComponent>
                                <img
                                  src="https://www.iucn.org/sites/dev/files/media-uploads/2018/06/palm_oil_full_final-infographic_tiny_2000_6829.png"
                                  alt="title"
                                  onLoad={onLoad}
                                />
                              </TransformComponent>
                            </div>
                          </React.Fragment>
                        )}
                      </TransformWrapper>
                    </Box>
                    <p>
                      Quis mollit laboris proident amet. Cillum reprehenderit
                      consequat labore eiusmod elit qui eu dolor laboris. Elit
                      sit culpa nisi aute dolor incididunt est sit incididunt
                      culpa. Deserunt anim eu enim ex pariatur aute sit nostrud
                      non magna consequat adipisicing voluptate nisi. Nisi nisi
                      nulla ex occaecat.
                    </p>
                    <p>
                      <strong>Nulla sit Lorem excepteur nulla tempor</strong>
                    </p>
                    <p>
                      officia eiusmod qui adipisicing duis mollit. Deserunt ad
                      velit labore ipsum ut ullamco ea. Incididunt quis elit
                      voluptate consectetur deserunt incididunt enim voluptate
                      veniam eu pariatur duis do.
                    </p>
                  </Grid>
                </Grid>
              </Container>
            </Dialog>
          </Grid>
        </Grid>
      </Container>
    </MuiThemeProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
