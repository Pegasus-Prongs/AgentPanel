import React, { useState } from 'react';
import { Grid, Button, IconButton, Typography } from '@mui/material';
import DialpadIcon from '@mui/icons-material/Dialpad';
import CallIcon from '@mui/icons-material/Call';
import BackspaceIcon from '@mui/icons-material/Backspace';
import PauseIcon from '@mui/icons-material/Pause';
import DeleteIcon from '@mui/icons-material/Delete';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import CallSplitIcon from '@mui/icons-material/CallSplit'; // Call transfer
import PauseCircleOutlineIcon from '@mui/icons-material/PauseCircleOutline'; // Hold
import HistoryIcon from '@mui/icons-material/History'; // Call History
import GroupIcon from '@mui/icons-material/Group';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';

const CallPad = () => {
    const [callDuration, setCallDuration] = useState('00:00:00');
    const [recording, setRecording] = useState(false);
    const [dialedNumber, setDialedNumber] = useState('');

    const handleNumberClick = (number) => {
        setDialedNumber(dialedNumber + number);
    };

    const handleBackspace = () => {
        setDialedNumber(dialedNumber.slice(0, -1));
    };

    const handleRecordToggle = () => {
        setRecording(!recording);
    };

    return (
        <Grid container spacing={2} direction="column" className='bg-white shadow-xl rounded-md p-2'>
            {/* Call Duration and Record Button */}
            <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                <Typography variant="h6">Call Duration: {callDuration}</Typography>
                <Button variant="contained" color={recording ? 'secondary' : 'primary'} onClick={handleRecordToggle}>
                    {recording ? 'Stop Recording' : 'Start Recording'}
                </Button>
            </Grid>

            <Grid item xs={12} container justifyContent="center" spacing={2}>
                <Grid item xs={8} container justifyContent="center" spacing={2}>
                    <Grid item xs={12}>
                        <div className="flex flex-row items-center rounded-md border-gray-500 border-2 h-full">
                            {/* Left side - Call Icon */}
                            <div className="flex items-center justify-center h-full rounded-l-md border-r-2 bg-gray-100 border-gray-500 p-2">
                                <CallIcon />
                            </div>

                            {/* Right side - Dial Number */}
                            <div className="flex-1 h-full flex items-center rounded-r-md">
                                <Typography variant="h4" component="p" className="w-full" align="right">
                                    {dialedNumber || ''}
                                </Typography>
                            </div>
                        </div>
                    </Grid>

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'].map((num) => (
                        <Grid item xs={4} key={num}>
                            <Button variant="outlined" fullWidth onClick={() => handleNumberClick(num)}>
                                {num}
                            </Button>
                        </Grid>
                    ))}
                    <Grid item xs={6}>
                        <Button variant="outlined" fullWidth >
                            <BackspaceIcon />
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="outlined" fullWidth>
                            <DeleteIcon />
                        </Button>
                    </Grid>
                    {/* Backspace and Call Controls */}
                    <Grid item xs={12} container justifyContent="center" alignItems="center" spacing={1}>
                        <Grid item>
                            <IconButton
                                style={{
                                    width: '50px',  // Smaller size
                                    height: '50px',
                                    backgroundColor: '#1976d2', // Blue background
                                    color: 'white', // White icon color
                                }}
                            >
                                <CallIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                style={{
                                    width: '60px',  // Slightly larger for Active/Pause
                                    height: '60px',
                                    backgroundColor: '#388e3c', // Green background
                                    color: 'white',
                                }}
                            >
                                <PauseIcon />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton
                                style={{
                                    width: '50px',  // Matching smaller size for consistency
                                    height: '50px',
                                    backgroundColor: '#d32f2f', // Red background
                                    color: 'white',
                                }}
                            >
                                <PhoneDisabledIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={4} container direction="column" spacing={2} alignItems="center">
                    <Grid item style={{ width: '100%' }}>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<GroupIcon />}
                            style={{
                                width: '100%',  // Full width
                                height: '50px', // Fixed height
                            }}
                        >
                            Conference
                        </Button>
                    </Grid>
                    <Grid item style={{ width: '100%' }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            startIcon={<HistoryIcon />}
                            style={{
                                width: '100%',  // Full width
                                height: '50px', // Fixed height
                            }}
                        >
                            Call History
                        </Button>
                    </Grid>
                    <Grid item style={{ width: '100%' }}>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: '#f57c00', // Custom color for Transfer button
                                color: 'white',
                                width: '100%',  // Full width
                                height: '50px', // Fixed height
                            }}
                            startIcon={<SwapCallsIcon />}
                        >
                            Transfer
                        </Button>
                    </Grid>
                    <Grid item style={{ width: '100%' }}>
                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: '#d32f2f', // Custom color for Hold button
                                color: 'white',
                                width: '100%',  // Full width
                                height: '50px', // Fixed height
                            }}
                            startIcon={<PauseCircleOutlineIcon />}
                        >
                            Hold
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CallPad;