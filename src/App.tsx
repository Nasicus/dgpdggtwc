import { FC } from "react";
import "./App.css";
import { PairingTables } from "./pairingTables.tsx";
import { GroupResultsTab } from "./groupResultsTab.tsx";
import { Tabs } from "@mantine/core";

export const App: FC = () => {
  return (
    <Tabs defaultValue="groupResults">
      <Tabs.List>
        <Tabs.Tab value="pairings">Pairings</Tabs.Tab>
        <Tabs.Tab value="groupResults">Group Results</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="pairings">
        <PairingTables />
      </Tabs.Panel>

      <Tabs.Panel value="groupResults">
        <GroupResultsTab />
      </Tabs.Panel>
    </Tabs>
  );
};
