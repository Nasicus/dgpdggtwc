import { FC } from "react";
import "./App.css";
import { PairingTables } from "./pairingTables.tsx";
import { GroupResultsTab } from "./groupResultsTab.tsx";
import { Tabs } from "@mantine/core";
import { MapRandomizer } from "./mapRandomizer.tsx";

export const App: FC = () => {
  return (
    <Tabs defaultValue="mapRandomizer">
      <Tabs.List>
        <Tabs.Tab value="pairings">Pairings</Tabs.Tab>
        <Tabs.Tab value="groupResults">Group Results</Tabs.Tab>
        <Tabs.Tab value="mapRandomizer">Map Randomizer</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="pairings">
        <PairingTables />
      </Tabs.Panel>

      <Tabs.Panel value="groupResults">
        <GroupResultsTab />
      </Tabs.Panel>

      <Tabs.Panel value="mapRandomizer">
        <MapRandomizer />
      </Tabs.Panel>
    </Tabs>
  );
};
