import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import { useGrandTour } from 'react-grand-tour';

const Home = () => {
    const { open } = useGrandTour();
    console.log(open);

    return (
        <>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                pt={8}
            >
                <Box fontSize={200} borderRadius="50%" bgcolor="primary.main" color="white" p={3}>
                    <Box height={200} borderRadius="50%" bgcolor="secondary.main" p={1}>
                        <DirectionsBusIcon fontSize="inherit" />
                    </Box>
                </Box>
                <Box mt={2} display="flex" id="lib-name">
                    <Box mr={2}>
                        <Typography variant="h3" color="primary">
                            React
                        </Typography>
                    </Box>
                    <Typography variant="h3" color="secondary">
                        Grand Tour
                    </Typography>
                </Box>
                <Box>
                    <Button variant="contained" color="primary" onClick={open}>
                        Start Tour
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Home;
