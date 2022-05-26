import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
    ToggleButton,
    ToggleButtonGroup,
    List,
    ListItem,
    ListItemText,
    Divider,
    Grid
} from "@mui/material";
import Item from "../Item";
import axios from "axios";
import Chart from 'chart.js/auto';
import { Pie} from "react-chartjs-2";




const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};


export default function Carsegments() {
    const [alignment, setAlignment] = useState("");
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);


    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    useEffect(() => {
        axios.get("http://localhost:5000/carsegments")
            .then((res) => {
                setData(res.data["results"]);
                setData1(res.data["headers"]);

            });

    })
        ;
    return (
        <Container>
            <Item>
                <h2>Customer segments based on car modularity</h2>
            </Item>
            <Item>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                >
                    <ToggleButton value="chart">Chart</ToggleButton>
                    <ToggleButton value="segments">Segments</ToggleButton>
                </ToggleButtonGroup>
            </Item>
            {alignment === "segments" ?
                <Item>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <List sx={style} component="nav" aria-label="mailbox folders">
                                <h2>Customers</h2>
                                {
                                    data1.map((key) => {
                                        return (
                                            <>
                                                <ListItem button >
                                                    <ListItemText sx={{ fontSize: "sm", display: 'list-item' }} primary={key + "s"} />
                                                </ListItem>
                                                <Divider />
                                            </>
                                        )
                                    })
                                }
                            </List>
                        </Grid>
                        <Grid item xs={6}>
                            <List sx={style} component="nav" aria-label="mailbox folders">
                                <h2>Sales</h2>

                                {
                                    data.map((key) => {
                                        return (
                                            <>
                                                <ListItem button >
                                                    <ListItemText sx={{ fontSize: "sm", display: 'list-item' }} primary={"Total " + key + "k Sales"} />
                                                </ListItem>
                                                <Divider />
                                            </>
                                        )
                                    })
                                }
                            </List>
                        </Grid>
                    </Grid>
                </Item> :
                <Item sx={{display: "flex", justifyContent: "center"}}>
                    <Item sx={{width: "40%", height: "40%"}}>
                        <Pie
                            data={{
                                labels: data1,
                                datasets: [{data: data, backgroundColor: ["yellow","green", "blue", "red"]}]
                            
                            }}
                            options={{animation: 2000}}
                        />
                    </Item>
                </Item>
            }
        </Container>
    );
}