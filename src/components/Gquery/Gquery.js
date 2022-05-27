import React, { useEffect, useState } from "react";
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

import Item from "../Item";
import axios from "axios";
import QueryHelper from "../Helper/QueryHelper";




export default function Gquery() {

    const [query, setQuery] = useState("");
    const [headers, setHeaders] = useState([]);
    const [result, setResult] = useState([]);
    const [alignment, setAlignment] = useState("query_type-1")
    const [value1, setValue1] = useState("");
    const [valueH, setValueH] = useState("");
    const [valueP, setValueP] = useState("");


    const onChangeValue = (e) => {
        setQuery(e.target.value);
    }
    const onSubmit = async (e) => {
        await axios.get("http://localhost:5000/query?q=" + query)
            .then((res) => {
                setResult(res.data["result"]);
                setHeaders(res.data["headers"]);
            });
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
        await axios.get("https://carfeaturesanalysis.herokuapp.com/predict?q=" + valueH + "," + query + " " + valueP)
            .then((res) => {
                setResult(res.data["result"]);
                setHeaders(res.data["headers"]);
            });
    }



    const Result = () => {
        return (
            <Item>
                {
                    result.length !== 0 ?
                        <>
                            {
                                alignment === "query" ?
                                    <h2>Query: {query}</h2>
                                    :
                                    <h2>At given {valueH} we can get folowing {valueP}</h2>
                            }
                            <br />
                        </> :
                        <>
                            <br />
                            <Divider />
                            <br />
                            <h2>Instructions</h2>
                            <QueryHelper />
                        </>

                }
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
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Stack spacing={2}>
                <Grid container spacing={2}>
                    <Grid item sm={3}>
                        <Item>
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


                    </Grid>

                    <Grid item sm={9}>
                        <h1>Query Processing</h1>
                        <br />
                        <Result />
                        <br />
                    </Grid>
                </Grid>
            </Stack>
        </Box>
    );
}