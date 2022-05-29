import React, { useEffect } from "react";
import {
    Box, FormControl, InputLabel, Stack, Grid, Container, MenuItem, RadioGroup, FormControlLabel, Radio, Select, Divider
} from "@mui/material";
import Item from "../Item";
import axios from "axios";
import { Bar, Line, Scatter } from "react-chartjs-2";
import Chart from 'chart.js/auto';


export default function Visualizer() {
    const [value1, setValue1] = React.useState('');
    const [value2, setValue2] = React.useState('');
    const [graph, setGraph] = React.useState('');
    const [data, setData] = React.useState({});

    const handleChange = (e) => {
        setGraph(e.target.value);
    };
    const handleRadioChange1 = (e) => {
        setValue1(e.target.value);
    }
    const handleRadioChange2 = (e) => {
        setValue2(e.target.value)
    }


    useEffect(() => {
        axios.get("https://carfeaturesanalysis.herokuapp.com/get_visuals_data")
            .then((res) => {
                setData(res.data);
            });
    }, []);


    const LItem = () => {
        return (
            <Item >
                {
                    graph == "line" ? <Line
                        data={{
                            // x-axis label values
                            labels: data[value2],
                            datasets: [
                                {
                                    // y-axis data plotting values
                                    data: data[value1],
                                    fill: false,
                                    label: value2,
                                    borderWidth: 4,
                                    backgroundColor: "rgb(255, 255, 255)",
                                    borderColor: '#007bff',
                                    responsive: true
                                },

                            ],

                        }} /> :
                        graph == "bar" ?
                            <Bar data={{
                                // x-axis label values
                                labels: data[value1],
                                datasets: [
                                    {
                                        // y-axis data plotting values
                                        data: data[value2],
                                        label: value2,
                                        fill: false,
                                        borderWidth: 4,
                                        backgroundColor: "rgb(255, 255, 255)",
                                        borderColor: '#007bff',
                                        responsive: true
                                    },
                                ],
                            }} />
                            :
                            <Scatter data={{
                                // x-axis label values
                                labels: data[value1],
                                datasets: [
                                    {
                                        // y-axis data plotting values
                                        data: data[value2],
                                        label: value2,
                                        fill: false,
                                        borderWidth: 4,
                                        backgroundColor: "rgb(255, 255, 255)",
                                        borderColor: '#007bff',
                                        responsive: true
                                    },
                                ],

                            }} />
                }
                {value1} vs {value2}

            </Item>
        );
    }

    const RItem = () => {
        return (
            <Item sx={{ padding: "20px" }}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Graph</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={graph}
                        onChange={handleChange}
                        label="Graph"
                    >
                        <MenuItem value={"line"}>Line</MenuItem>
                        <MenuItem value={"scatter"}>Scatter</MenuItem>
                        <MenuItem value={"bar"}>Bar</MenuItem>

                    </Select>
                </FormControl>
                <Divider />
                <br />
              
                <Grid container spacing={2}>

                    <Grid item sm={6}>

                        <Item sx={{ padding: "20px" }}>
                            <h2 style={{ "marginBottom": "20px" }}>Dependents</h2>

                            <Divider />
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="quiz"
                                value={value1}
                                onChange={handleRadioChange1}
                            >
                                {
                                    Object.keys(data).map((k) => {
                                        return (
                                            <FormControlLabel value={k} control={<Radio />} label={k} />
                                        );
                                    })
                                }
                            </RadioGroup>
                        </Item>
                    </Grid>
                    <Grid item sm={6}>

                        <Item sx={{ padding: "20px" }}>
                            <h2 style={{ "marginBottom": "20px" }}>Independents</h2>
                            <Divider />
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="quiz"
                                value={value2}
                                onChange={handleRadioChange2}
                            >
                                {
                                    Object.keys(data).map((k) => {
                                        return (
                                            <FormControlLabel value={k} control={<Radio />} label={k} />
                                        );
                                    })
                                }
                            </RadioGroup>
                        </Item>
                    </Grid>
                </Grid>
            </Item>
        );
    }

    return (

        <Box spacing={2}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                        <h1>Features</h1>

                    <RItem />
                </Grid>
                <Grid item xs={8}>
                        <h1>Visualizer</h1>
                    <br />
                    <LItem />
                    <br />
                </Grid>
            </Grid>

        </Box >
    );
}