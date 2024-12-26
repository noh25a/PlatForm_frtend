import { Box } from "@mui/material";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";

const Bar = () => {

    return (
        <Box m="10px">
        <Header title="Graphique à barres" subtitle="Graphique à barres simple" />
        <Box height="69vh">
          <BarChart />
        </Box>
      </Box>
    );
};

export default Bar;