import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";


import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePopularDishes, retrieveTopUsers } from "./selector";
import { serverApi } from "../../../lib/config";
import { Product } from "../../../lib/types/product";
import { Member } from "../../../lib/types/member";

/** REDUX SLICE & SELECTOR **/

const topusersRetriever = createSelector(
  retrieveTopUsers,
  (topUsers) => ({topUsers})
);


export default function ActiveUsers() {
    const {topUsers} =  useSelector(topusersRetriever)
    return (
        <div className={"active-users-frame"}>
            <Container>
                <Stack className={"main"}>
                    <Box className={"category-title"}>Active Users</Box>
                    <Stack className={"cards-frame"}>
                        <CssVarsProvider>
                            {topUsers.length !== 0 ? (
                                topUsers.map((member: Member) => {
                                    const imagePath = `${serverApi}/${member.memberImage}`
                                    return (
                                        <Card key={member._id} variant="outlined" className={"card"}>
                                            <CardOverflow>
                                                <AspectRatio ratio="1">
                                                    <img src={imagePath} alt="" />
                                                </AspectRatio>
                                            </CardOverflow>
    
                                            <CardOverflow className={"card-detail"}>
                                                <Typography className={"member-nickname"}>
                                                    {member.memberNick}
                                                </Typography>    
                                            </CardOverflow>
                                        </Card>
                                    );
                                })
                            ) : (
                                <Box className="no-data">No Active Users!</Box>
                            )}
                        </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}