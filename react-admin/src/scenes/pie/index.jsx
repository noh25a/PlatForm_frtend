import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="10px">
      <Header title="graphique à secteurs" subtitle="Simple graphique à secteurs" />
      <Box height="69vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;