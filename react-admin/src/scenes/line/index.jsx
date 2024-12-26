import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="10px">
      <Header title="Graphique linéaire" subtitle="Graphique linéaire Simple" />
      <Box height="69vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;