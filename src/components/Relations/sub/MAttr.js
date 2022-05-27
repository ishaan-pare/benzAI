import React, { useEffect, useState } from "react";
import {
    List,
    ListItem,
    ListItemText,
    Divider
} from "@mui/material"
import { Container } from "@mui/system";
import axios from "axios";
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

const preciseFloat = (num)=>{
    num = num*100;
    num = num.toString().slice(0,5);
    return num;
}

export default function Mattr() {
    const [attr, setAttr] = useState(["Sales","Price", "Width"]);

    useEffect(()=>{
        axios.get("https://carfeaturesanalysis.herokuapp.com/m_attr")
                    .then((res)=>{
                        setAttr(res.data)

                    })

    }, [attr]);

    return (
        <Container style={{ "padding": "12px" }} maxWidth="xxl">
            <h2>Most Dependent features</h2><br />
            <List sx={style} component="nav" aria-label="mailbox folders">
                {
                    Object.keys(attr).reverse().map((key) => {
                        return (
                            <>
                                <ListItem button > 
                                    <ListItemText sx={{fontSize:"sm", display: 'list-item'}} primary={attr[key][0]+" and "+attr[key][1]} secondary={"have "+preciseFloat(key)+"% dependencies"}/>
                                </ListItem>
                                <Divider />
                            </>
                        )
                    })
                }
            </List>
        </Container>

    );
}