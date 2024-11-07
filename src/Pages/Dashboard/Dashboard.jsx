import React from "react";
import DashboardLaout from "../../Components/DashboardLayout";
import PortfolioSection from "./Components/PortfolioSection";
import PriceSection from "./Components/PriceSection";
import { Grid, GridItem } from "@chakra-ui/react";
import Transactions from "./Components/Transactions";
import InfoCard from "./Components/InfoCard";

const Dashboard = () => {
  return (
    <DashboardLaout title="Dashboard">
      <Grid
        gridTemplateColumns={{
          base: "repeat(1, 1fr)",
          xl: "repeat(2, 1fr)",
        }}
        gap="6"
      >
        <GridItem
          colSpan={{
            base: 1,
            xl: 2,
          }}
        >
          <PortfolioSection />
        </GridItem>
        <GridItem colSpan={1}>
          <PriceSection />
        </GridItem>
        <GridItem colSpan={1}>
          <Transactions />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/public/dot_bg.svg"
            text=" Learn more about Loans – Keep your Bitcoin, access it’s value without
          selling it"
            tagText="Loan"
            inverted={false}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <InfoCard
            imgUrl="/public/grid_bg.svg"
            text=" Learn more about our real estate, mortgage, and  corporate account services"
            tagText="Contact"
            inverted={true}
          />
        </GridItem>
      </Grid>
    </DashboardLaout>
  );
};

export default Dashboard;
