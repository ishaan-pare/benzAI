/*
    Gquery 
    used for displaying query answers computed by backend at https://carfeaturesanalysis.herokuapp.com
*/

//core imports goes here 
import React, { useState } from "react";
import {
    Box,
    Button,
    Grid,
    TextField,
    Stack,
    Divider,
} from "@mui/material";

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    ToggleButton,
    ToggleButtonGroup,
    RadioGroup,
    Radio,
    FormControlLabel

} from "@mui/material";
import axios from "axios";

//imports within projects goes here
import Item from "../Item";
import QueryHelper from "../Helper/QueryHelper";
import Progress from "../Progress/Progress";

//Main JSX component Gquery
export default function Gquery() {

    //state management using react hooks

    //query for text user enter in dialog
    const [query, setQuery] = useState("");
    //headers we get from backend
    const [headers, setHeaders] = useState([]);
    //results we get from backend
    const [result, setResult] = useState([]);
    //alignment logic of predictor and query processor
    const [alignment, setAlignment] = useState("query_type-1")
    //predictor value which user have
    const [valueH, setValueH] = useState("");
    //predictor value which user want to predict
    const [valueP, setValueP] = useState("");

    const [load, setLoad] = useState(0)

    // functions for handling events of form for query and predictor logic
    const onChangeValue = (e) => {
        setQuery(e.target.value);
    }
    const onSubmit = async (e) => {
        setLoad(1);
        await axios.get("/query?q=" + query)
            .then((res) => {
                setResult(res.data["result"]);
                setHeaders(res.data["headers"]);
            })
            .then(()=>setLoad(0));
    }
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const handleRadioChangeH = (e) => {
        setValueH(e.target.value);
    }
    const handleRadioChangeP = (e) => {
        setValueP(e.target.value);
    }
    const onSubmitP = async () => {
        if (valueH == "HardFeatures" && query.split(",").length !==5) {
            return;
        }
        if (valueH == "SoftFeatures" && query.split(",").length !==4) {
            return;
        }

        setLoad(1);
        await axios.get("https://carfeaturesanalysis.herokuapp.com/predict?q=" + valueH + "," + query + " " + valueP)
            .then((res) => {
                setResult(res.data["result"]);
                setHeaders(res.data["headers"]);
            })
            .then(()=>setLoad(0));
    }



    //Result component for displaying component
    const Result = () => {
        return (
            <Item>
                {/* headers of result components */}

                {
                    alignment === "query_type-1" ?
                        <h2>Query: {query}</h2>
                        :
                        <h2>At given: <span style={{ color: "blue" }}>{valueH}</span> we can get following: <span style={{ color: "green" }}>{valueP}</span></h2>
                }
                <br />
                {
                    result.length !== 0 ?
                        <></> :
                        <>
                            <br />
                            <Divider />
                            <br />
                            <h2>Instructions</h2>
                            <QueryHelper />
                        </>

                }

                {/* Displayed table of result */}

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {
                                    headers.map((data) => {
                                        return (
                                            <TableCell align="right">{data}</TableCell>
                                        );
                                    })
                                }

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                result.map((data) => {
                                    return (
                                        <TableCell align="right">{data}</TableCell>
                                    );
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Item>
        );
    }
    //end of Result component

    //returning all the components of Gquery 
    return (
        <Box sx={{ flexGrow: 1 }}>
            {/* Bucket for  taking input from user*/}
            <Stack spacing={2}>
                <Grid container spacing={2}>
                    <Grid item sm={3}>
                        <Item>
                            {/* Toggle button for changing alignment */}
                            <ToggleButtonGroup
                                color="primary"
                                value={alignment}
                                exclusive
                                onChange={handleChange}
                            >
                                <ToggleButton value="query_type-1">Queries</ToggleButton>
                                <ToggleButton value="query_type-2" onClick={() => setQuery("")}>Predictions</ToggleButton>
                            </ToggleButtonGroup>
                        </Item>

                        {/* Forms fliping using aligment set by toggle button*/}
                        {alignment === "query_type-1" ? <Item style={{ "padding": "35px" }}>
                            <h2 style={{ "marginBottom": "20px" }}>Enter your query here</h2>
                            <h4>example = "popular features"</h4>
                            <br />
                            <TextField id="outlined-basic" label="Query" variant="outlined" value={query} onChange={onChangeValue} />
                            <br />
                            <br />
                            <br />
                            <Stack justifyContent="center" direction="row" spacing={1}>
                                <Button onClick={onSubmit} variant="contained">Ask</Button>
                                <Button onClick={() => setQuery("")} variant="contained">Clear</Button>
                                <Button onClick={() => { setResult([]); setHeaders([]) }} variant="contained">Help</Button>
                            </Stack>
                        </Item> :
                            <Item>
                                <h2>What information do you have?</h2>
                                <br />
                                <Divider />
                                <RadioGroup
                                    aria-labelledby="demo-error-radios"
                                    name="quiz"
                                    value={valueH}
                                    onChange={handleRadioChangeH}
                                >
                                    <FormControlLabel value={"Price"} control={<Radio />} label={"Price"} />
                                    <FormControlLabel value={"HardFeatures"} control={<Radio />} label={"HardFeatures"} />
                                    <FormControlLabel value={"SoftFeatures"} control={<Radio />} label={"SoftFeatures"} />


                                </RadioGroup>
                                <br />
                                <h2>What do you wanna predict?</h2>
                                <br />
                                <Divider />
                                <RadioGroup
                                    aria-labelledby="demo-error-radios"
                                    name="quiz"
                                    value={valueP}
                                    onChange={handleRadioChangeP}
                                >
                                    <FormControlLabel value={"Price"} control={<Radio />} label={"Price"} />
                                    <FormControlLabel value={"Sales"} control={<Radio />} label={"Sales"} />
                                    <FormControlLabel value={"HardFeatures"} control={<Radio />} label={"HardFeatures"} />
                                    <FormControlLabel value={"SoftFeatures"} control={<Radio />} label={"SoftFeatures"} />
                                </RadioGroup>
                                <br />
                                <Divider />
                                <br />
                                <TextField id="outlined-basic" label={valueH} variant="outlined" value={query} onChange={onChangeValue} />
                                <br />
                                <br />
                                <Stack justifyContent="center" direction="row" spacing={1}>


                                    <Button onClick={onSubmitP} variant="contained">Predict</Button>
                                    <Button onClick={() => { setResult([]); setHeaders([]) }} variant="contained">Help</Button>

                                </Stack>

                            </Item>
                        }
                    {/* adding result component in right position */}
                    </Grid>
                    <Grid item sm={9}>
                        <h1>Query Processing</h1>
                        <br />
                        {
                            load===1?<Progress/>:<Result/>
                        }
                        <br />
                    </Grid>
                </Grid>
            </Stack>
            {/* End of bucket */}
        </Box>
    );
}