import React, { FC, Fragment } from "react";
import "./App.css";
import { PairingTables } from "./pairingTables.tsx";
import { GroupResults } from "./groupResults.tsx";
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
        <GroupResults />
      </Tabs.Panel>
    </Tabs>
  );
};
