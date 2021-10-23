import React from "react";
import { Container, Grid, Link, Typography } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
// import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from "../../hooks/useActions";
import sampleImage from "../../assets/calculator.png";
import useStyles from "./HomePage.style";

type Section = {
  key: string;
  html: React.ReactNode;
};

interface FormValues {
  inputNumber: number;
}

const HomePage = () => {
  const styles = useStyles();
  const { calculateIsEven } = useActions();

  const sections: Section[] = [
    {
      key: "welcome",
      html: (
        <Typography>
          {"Is-Even As A Service - because "}
          <Link
            color="secondary"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder"
            target="_blank"
            rel="noopener noreferrer"
          >
            Remainder operator
          </Link>
          {" is difficult to comprehend "}
        </Typography>
      ),
    },
  ];

  const initialValues: FormValues = { inputNumber: 0 };

  return (
    <Container component="main" maxWidth="lg" className={styles.root}>
      <div className={styles.content}>
        <img className={styles.image} src={sampleImage} alt="Sample" />
        <Grid container spacing={3}>
          {sections.map(({ html, key }) => (
            <Grid
              key={key}
              item
              xs={12}
              sm={6}
              md={12}
              className={styles.paragraph}
            >
              {html}
            </Grid>
          ))}
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            calculateIsEven(values.inputNumber);
            actions.setSubmitting(false);
          }}
        >
          <Form>
            <label htmlFor="inputNumber">Is this number even?</label>
            <Field id="inputNumber" name="inputNumber" placeholder="0" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </Container>
  );
};

export default HomePage;
