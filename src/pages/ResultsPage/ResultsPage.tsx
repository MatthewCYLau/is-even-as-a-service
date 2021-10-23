import React from "react";
import { Container, Typography } from "@material-ui/core";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import oddImage from "../../assets/one.png";
import evenImage from "../../assets/two.png";
import useStyles from "./ResultsPage.style";

const RoutingPage = () => {
  const styles = useStyles();
  const { currentNumberIsEven } = useTypedSelector(
    (state) => state.isEvenState
  );

  return (
    <Container component="main" maxWidth="lg" className={styles.root}>
      <div className={styles.content}>
        <img
          className={styles.image}
          src={currentNumberIsEven ? evenImage : oddImage}
          alt="Routing"
        />
        <div>
          <Typography variant="h4" component="h2" paragraph>
            The number is
          </Typography>
          <Typography component="p" paragraph>
            {currentNumberIsEven ? "Even!" : "Odd!"}
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default RoutingPage;
