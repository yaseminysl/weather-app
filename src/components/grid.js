import { Grid } from "@material-ui/core/";
import DayBox from "./daybox";



function WeatherGrid(componentData) {
  if (componentData.fiveDaysData.length > 0) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <DayBox oneDayData={componentData.fiveDaysData[0]}></DayBox>
        </Grid>
        <Grid item xs={2}>
          <DayBox oneDayData={componentData.fiveDaysData[1]}></DayBox>
        </Grid>
        <Grid item xs={2}>
          <DayBox oneDayData={componentData.fiveDaysData[2]}></DayBox>
        </Grid>
        <Grid item xs={2}>
          <DayBox oneDayData={componentData.fiveDaysData[3]}></DayBox>
        </Grid>
        <Grid item xs={2}>
          <DayBox oneDayData={componentData.fiveDaysData[4]}></DayBox>
        </Grid>
      </Grid>
    );
  } else {
    return <h2> Please type a city then click search</h2>;
  }
}

export default WeatherGrid;
