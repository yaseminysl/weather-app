import React from "react";
import moment from "moment";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));


function DayBox(data) {
  return (
    <div>
      <Item>{moment(data.oneDayData.date).format("dddd MMMM Do")}</Item>
      <Item>
        <img src={data.oneDayData.icon} />
      </Item>
      <Item>{data.oneDayData.tempMax}</Item>
      <Item>{data.oneDayData.tempMin}</Item>
    </div>
  );
}

export default DayBox;
