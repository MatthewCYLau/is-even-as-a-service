import React from 'react';
import { Container, Typography } from '@material-ui/core';
import evenImage from '../../assets/two.png';
import useStyles from './ResultsPage.style';

const RoutingPage = () => {
    const styles = useStyles();

    return (
        <Container component="main" maxWidth="lg" className={styles.root}>
            <div className={styles.content}>
                <img className={styles.image} src={evenImage} alt="Routing" />
                <div>
                    <Typography variant="h4" component="h2" paragraph>
                        Results
                    </Typography>
                    <Typography component="p" paragraph>
                        Here are the results
                    </Typography>
                </div>
            </div>
        </Container>
    );
};

export default RoutingPage;
