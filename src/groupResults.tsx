import { FC } from "react";
import { Table } from "@mantine/core";
import classes from "./groupResult.module.css";

export const GroupResults: FC = () => {
  return (
    <>
      <Group1ResultTable />
      <Group2ResultTable />
      <Group3ResultTable />
      <Group4ResultTable />
    </>
  );
};

type WeekNumber = string;
type HomeTeam = string;
type ForeignTeam = string;
type Ratio = string;

type Group = Array<[WeekNumber, Array<[HomeTeam, ForeignTeam, Ratio]>]>;

const Group1ResultTable: FC = () => {
  const group1: Group = [
    [
      "Week 1",
      [
        ["Skyfall", "Octopussy", ""],
        ["Funny Cats", "Helix", ""],
        ["Blofeld", "Banana", ""],
        ["Planet Express", "Nucular", ""],
      ],
    ],
    [
      "Week 2",
      [
        ["Helix", "Skyfall", ""],
        ["Octopussy", "Banana", ""],
        ["Funny Cats", "Nucular", ""],
        ["Blofeld", "Planet Express", ""],
      ],
    ],
    [
      "Week 3",
      [
        ["Skyfall", "Banana", ""],
        ["Helix", "Nucular", ""],
        ["Octopussy", "Planet Express", ""],
        ["Funny Cats", "Blofeld", ""],
      ],
    ],
    [
      "Week 4",
      [
        ["Nucular", "Skyfall", ""],
        ["Banana", "Planet Express", ""],
        ["Helix", "Blofeld", ""],
        ["Octopussy", "Funny Cats", ""],
      ],
    ],
    [
      "Week 5",
      [
        ["Skyfall", "Planet Express", ""],
        ["Nucular", "Blofeld", ""],
        ["Banana", "Funny Cats", ""],
        ["Helix", "Octopussy", ""],
      ],
    ],
    [
      "Week 6",
      [
        ["Blofeld", "Skyfall", ""],
        ["Planet Express", "Funny Cats", ""],
        ["Nucular", "Octopussy", ""],
        ["Banana", "Helix", ""],
      ],
    ],
    [
      "Week 7",
      [
        ["Skyfall", "Funny Cats", ""],
        ["Blofeld", "Octopussy", ""],
        ["Planet Express", "Helix", ""],
        ["Nucular", "Banana", ""],
      ],
    ],
  ];

  return (
    <GroupResultTable
      groupResult={calculateGroupResults(group1)}
      groupName="Group 1"
    />
  );
};

const Group2ResultTable: FC = () => {
  const group2: Group = [
    [
      "Week 1",
      [
        ["Raven", "Titans", ""],
        ["Darwin", "Firefly", ""],
        ["Cyclops", "Clippy", ""],
        ["Polaris Pathfinders", "mAppic", ""],
      ],
    ],
    [
      "Week 2",
      [
        ["Firefly", "Raven", ""],
        ["Titans", "Clippy", ""],
        ["Darwin", "mAppic", ""],
        ["Cyclops", "Polaris Pathfinders", ""],
      ],
    ],
    [
      "Week 3",
      [
        ["Raven", "Clippy", ""],
        ["Firefly", "mAppic", ""],
        ["Titans", "Polaris Pathfinders", ""],
        ["Darwin", "Cyclops", ""],
      ],
    ],
    [
      "Week 4",
      [
        ["mAppic", "Raven", ""],
        ["Clippy", "Polaris Pathfinders", ""],
        ["Firefly", "Cyclops", ""],
        ["Titans", "Darwin", ""],
      ],
    ],
    [
      "Week 5",
      [
        ["Raven", "Polaris Pathfinders", ""],
        ["mAppic", "Cyclops", ""],
        ["Clippy", "Darwin", ""],
        ["Firefly", "Titans", ""],
      ],
    ],
    [
      "Week 6",
      [
        ["Cyclops", "Raven", ""],
        ["Polaris Pathfinders", "Darwin", ""],
        ["mAppic", "Titans", ""],
        ["Clippy", "Firefly", ""],
      ],
    ],
    [
      "Week 7",
      [
        ["Raven", "Darwin", ""],
        ["Cyclops", "Titans", ""],
        ["Polaris Pathfinders", "Firefly", ""],
        ["mAppic", "Clippy", ""],
      ],
    ],
  ];

  return (
    <GroupResultTable
      groupResult={calculateGroupResults(group2)}
      groupName="Group 2"
    />
  );
};

const Group3ResultTable: FC = () => {
  const group3: Group = [
    [
      "Week 1",
      [
        ["Bender! & FancyBear", "Enso", ""],
        ["SeaFire", "BlackJack", ""],
        ["BECS", "Moneypenny", ""],
        ["Kassandra", "Gold-Finders", ""],
      ],
    ],
    [
      "Week 2",
      [
        ["BlackJack", "Bender! & FancyBear", ""],
        ["Enso", "Moneypenny", ""],
        ["SeaFire", "Gold-Finders", ""],
        ["BECS", "Kassandra", ""],
      ],
    ],
    [
      "Week 3",
      [
        ["Bender! & FancyBear", "Moneypenny", ""],
        ["BlackJack", "Gold-Finders", ""],
        ["Enso", "Kassandra", ""],
        ["SeaFire", "BECS", ""],
      ],
    ],
    [
      "Week 4",
      [
        ["Gold-Finders", "Bender! & FancyBear", ""],
        ["Moneypenny", "Kassandra", ""],
        ["BlackJack", "BECS", ""],
        ["Enso", "SeaFire", ""],
      ],
    ],
    [
      "Week 5",
      [
        ["Bender! & FancyBear", "Kassandra", ""],
        ["Gold-Finders", "BECS", ""],
        ["Moneypenny", "SeaFire", ""],
        ["BlackJack", "Enso", ""],
      ],
    ],
    [
      "Week 6",
      [
        ["BECS", "Bender! & FancyBear", ""],
        ["Kassandra", "SeaFire", ""],
        ["Gold-Finders", "Enso", ""],
        ["Moneypenny", "BlackJack", ""],
      ],
    ],
    [
      "Week 7",
      [
        ["Bender! & FancyBear", "SeaFire", ""],
        ["BECS", "Enso", ""],
        ["Kassandra", "BlackJack", ""],
        ["Gold-Finders", "Moneypenny", ""],
      ],
    ],
  ];

  return (
    <GroupResultTable
      groupResult={calculateGroupResults(group3)}
      groupName="Group 3"
    />
  );
};

const Group4ResultTable: FC = () => {
  const group4: Group = [
    [
      "Week 1",
      [
        ["Rivendell", "Beo-Guesser", ""],
        ["Isotopes", "CBM Plattform", ""],
        ["Phoenix", "Heisenguess", ""],
        ["Raiders of the Lost Payment", "The Rookies", ""],
      ],
    ],
    [
      "Week 2",
      [
        ["CBM Plattform", "Rivendell", ""],
        ["Beo-Guesser", "Heisenguess", ""],
        ["Isotopes", "The Rookies", ""],
        ["Phoenix", "Raiders of the Lost Payment", ""],
      ],
    ],
    [
      "Week 3",
      [
        ["Rivendell", "Heisenguess", ""],
        ["CBM Plattform", "The Rookies", ""],
        ["Beo-Guesser", "Raiders of the Lost Payment", ""],
        ["Isotopes", "Phoenix", ""],
      ],
    ],
    [
      "Week 4",
      [
        ["The Rookies", "Rivendell", ""],
        ["Heisenguess", "Raiders of the Lost Payment", ""],
        ["CBM Plattform", "Phoenix", ""],
        ["Beo-Guesser", "Isotopes", ""],
      ],
    ],
    [
      "Week 5",
      [
        ["Rivendell", "Raiders of the Lost Payment", ""],
        ["The Rookies", "Phoenix", ""],
        ["Heisenguess", "Isotopes", ""],
        ["CBM Plattform", "Beo-Guesser", ""],
      ],
    ],
    [
      "Week 6",
      [
        ["Phoenix", "Rivendell", ""],
        ["Raiders of the Lost Payment", "Isotopes", ""],
        ["The Rookies", "Beo-Guesser", ""],
        ["Heisenguess", "CBM Plattform", ""],
      ],
    ],
    [
      "Week 7",
      [
        ["Rivendell", "Isotopes", ""],
        ["Phoenix", "Beo-Guesser", ""],
        ["Raiders of the Lost Payment", "CBM Plattform", ""],
        ["The Rookies", "Heisenguess", ""],
      ],
    ],
  ];

  return (
    <GroupResultTable
      groupResult={calculateGroupResults(group4)}
      groupName="Group 4"
    />
  );
};

function getQualifiedClassName(i: number) {
  return i < 4 ? classes.qualified : undefined;
}

type GroupResult = {
  [team: string]: {
    matches: number;
    gamesWon: number;
    gamesLost: number;
    points: number;
    wonAgainst: string[];
  };
};

const GroupResultTable: FC<{
  groupName: string;
  groupResult: GroupResult;
}> = ({ groupName, groupResult }) => {
  const sortedGroupNames = Object.keys(groupResult).sort(
    (groupAName, groupBName) => {
      const groupAResult = groupResult[groupAName];
      const groupBResult = groupResult[groupBName];

      if (groupAResult.points > groupBResult.points) {
        return -1;
      }

      if (groupAResult.points < groupBResult.points) {
        return 1;
      }

      const groupARatio = groupAResult.gamesWon - groupAResult.gamesLost;
      const groupBRatio = groupBResult.gamesWon - groupBResult.gamesLost;

      if (groupARatio > groupBRatio) {
        return -1;
      }

      if (groupARatio < groupBRatio) {
        return 1;
      }

      if (groupAResult.wonAgainst.includes(groupBName)) {
        return -1;
      }

      if (groupBResult.wonAgainst.includes(groupAName)) {
        return 1;
      }

      if (groupAResult.matches < groupBResult.matches) {
        return -1;
      }

      return 1;
    },
  );

  // we have to create 2 tables, because stupid confluence can only handle up to 3 columns when pasting
  // else it puts everything into one cell
  // this means: first we select the first 2 columns and paste to conf,
  // then we select the last 2 columns and paste to conf
  return (
    <>
      <h3>{groupName}</h3>
      <div style={{ display: "flex" }}>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Td>Team</Table.Td>
              <Table.Td># Matches</Table.Td>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {sortedGroupNames.map((teamName, i) => (
              <Table.Tr key={teamName}>
                <Table.Td className={getQualifiedClassName(i)}>
                  {teamName}
                </Table.Td>
                <Table.Td className={getQualifiedClassName(i)}>
                  {groupResult[teamName].matches}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Td>Points</Table.Td>
              <Table.Td>Ratio</Table.Td>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {sortedGroupNames.map((teamName, i) => (
              <Table.Tr key={teamName}>
                <Table.Td className={getQualifiedClassName(i)}>
                  {groupResult[teamName].points}
                </Table.Td>
                <Table.Td className={getQualifiedClassName(i)}>
                  {groupResult[teamName].gamesWon}:
                  {groupResult[teamName].gamesLost}
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </>
  );
};

function calculateGroupResults(group: Group) {
  return group.reduce((table, teamResults) => {
    teamResults[1].forEach((teamResult) => {
      const homeTeam = teamResult[0];
      const foreignTeam = teamResult[1];

      function ensureTeam(teamName: string) {
        if (table[teamName]) {
          return;
        }

        table[teamName] = {
          matches: 0,
          gamesWon: 0,
          gamesLost: 0,
          points: 0,
          wonAgainst: [],
        };
      }

      ensureTeam(homeTeam);
      ensureTeam(foreignTeam);

      const ratios = teamResult[2]
        .replace(/\s+/g, "")
        .split(":")
        .map((p) => parseInt(p));

      if (ratios.length !== 2) {
        return;
      }

      function addWeekResult(
        teamName: string,
        otherTeamName: string,
        gamesWon: number,
        gamesLost: number,
      ) {
        table[teamName].matches += 1;
        table[teamName].gamesWon += gamesWon;
        table[teamName].gamesLost += gamesLost;

        if (gamesWon > gamesLost) {
          table[teamName].points += 1;

          table[teamName].wonAgainst.push(otherTeamName);
        }
      }

      addWeekResult(homeTeam, foreignTeam, ratios[0], ratios[1]);
      addWeekResult(foreignTeam, homeTeam, ratios[1], ratios[0]);
    });

    return table;
  }, {} as GroupResult);
}
