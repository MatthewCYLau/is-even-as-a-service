import React from 'react';
import {
    Container,
    Grid,
    Link,
    Typography,
} from '@material-ui/core';
import SpeedIcon from '@material-ui/icons/Speed';
import sampleImage from '../../assets/home.svg';
import useStyles from './HomePage.style';

type Section = {
    key: string;
    icon: React.ReactNode;
    html: React.ReactNode;
};

const HomePage = () => {
    const styles = useStyles();

    const sections: Section[] = [
        {
            key: 'welcome',
            icon: <SpeedIcon className={styles.icon} color="primary" />,
            html: (
                <Typography>
                    {'Is-Even As A Service - because '}
                    <Link
                        color="secondary"
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Remainder operator
                    </Link>
                    {' is difficult to comprehend '}
                </Typography>
            )
        }
    ];

    return (
        <Container component="main" maxWidth="lg" className={styles.root}>
            <div className={styles.content}>
                <img className={styles.image} src={sampleImage} alt="Sample" />
                <Grid container spacing={3}>
                    {
                        sections.map(({ icon, html, key }) => (
                            <Grid
                                key={key}
                                item
                                xs={12}
                                sm={6}
                                md={12}
                                className={styles.paragraph}
                            >
                                {icon}
                                {html}
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </Container>
    );
};

export default HomePage;
