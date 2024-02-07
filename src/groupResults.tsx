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
        ["Skyfall", "Octopussy", "2:0"],
        ["Funny Cats", "Helix", "0:2"],
        ["Blofeld", "Banana", "1:2"],
        ["Planet Express", "Nucular", "1:2"],
      ],
    ],
    [
      "Week 2",
      [
        ["Helix", "Skyfall", "0:2"],
        ["Octopussy", "Banana", "2:0"],
        ["Funny Cats", "Nucular", "2:1"],
        ["Blofeld", "Planet Express", "2:1"],
      ],
    ],
    [
      "Week 3",
      [
        ["Skyfall", "Banana", "2:0"],
        ["Helix", "Nucular", "1:2"],
        ["Octopussy", "Planet Express", "2:0"],
        ["Funny Cats", "Blofeld", "0:2"],
      ],
    ],
    [
      "Week 4",
      [
        ["Nucular", "Skyfall", "0:2"],
        ["Banana", "Planet Express", "0:2"],
        ["Helix", "Blofeld", "0:2"],
        ["Octopussy", "Funny Cats", "2:1"],
      ],
    ],
    [
      "Week 5",
      [
        ["Skyfall", "Planet Express", "2:1"],
        ["Nucular", "Blofeld", "2:1"],
        ["Banana", "Funny Cats", "2:0"],
        ["Helix", "Octopussy", "0:2"],
      ],
    ],
    [
      "Week 6",
      [
        ["Blofeld", "Skyfall", "0:2"],
        ["Planet Express", "Funny Cats", "2:1"],
        ["Nucular", "Octopussy", "0:2"],
        ["Banana", "Helix", "1:2"],
      ],
    ],
    [
      "Week 7",
      [
        ["Skyfall", "Funny Cats", "2:0"],
        ["Blofeld", "Octopussy", "0:2"],
        ["Planet Express", "Helix", "0:2"],
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
        ["Raven", "Titans", "1:2"],
        ["Darwin", "Firefly", "2:0"],
        ["Cyclops", "Clippy", "2:1"],
        ["Polaris Pathfinders", "mAppic", "1:2"],
      ],
    ],
    [
      "Week 2",
      [
        ["Firefly", "Raven", "1:2"],
        ["Titans", "Clippy", "1:2"],
        ["Darwin", "mAppic", "0:2"],
        ["Cyclops", "Polaris Pathfinders", "0:2"],
      ],
    ],
    [
      "Week 3",
      [
        ["Raven", "Clippy", "2:0"],
        ["Firefly", "mAppic", "1:2"],
        ["Titans", "Polaris Pathfinders", "0:2"],
        ["Darwin", "Cyclops", "2:0"],
      ],
    ],
    [
      "Week 4",
      [
        ["mAppic", "Raven", "2:1"],
        ["Clippy", "Polaris Pathfinders", "2:1"],
        ["Firefly", "Cyclops", "2:0"],
        ["Titans", "Darwin", "0:2"],
      ],
    ],
    [
      "Week 5",
      [
        ["Raven", "Polaris Pathfinders", "0:2"],
        ["mAppic", "Cyclops", "1:2"],
        ["Clippy", "Darwin", "2:1"],
        ["Firefly", "Titans", "1:2"],
      ],
    ],
    [
      "Week 6",
      [
        ["Cyclops", "Raven", "1:2"],
        ["Polaris Pathfinders", "Darwin", "2:0"],
        ["mAppic", "Titans", "2:0"],
        ["Clippy", "Firefly", "1:2"],
      ],
    ],
    [
      "Week 7",
      [
        ["Raven", "Darwin", "0:2"],
        ["Cyclops", "Titans", "2:1"],
        ["Polaris Pathfinders", "Firefly", "2:0"],
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
        ["Bender! & FancyBear", "Enso", "2:0"],
        ["SeaFire", "BlackJack", "2:0"],
        ["BECS", "Moneypenny", "2:0"],
        ["Kassandra", "Gold-Finders", "2:1"],
      ],
    ],
    [
      "Week 2",
      [
        ["BlackJack", "Bender! & FancyBear", "1:2"],
        ["Enso", "Moneypenny", "0:2"],
        ["SeaFire", "Gold-Finders", "2:1"],
        ["BECS", "Kassandra", "0:2"],
      ],
    ],
    [
      "Week 3",
      [
        ["Bender! & FancyBear", "Moneypenny", "2:0"],
        ["BlackJack", "Gold-Finders", "1:2"],
        ["Enso", "Kassandra", "0:2"],
        ["SeaFire", "BECS", "2:0"],
      ],
    ],
    [
      "Week 4",
      [
        ["Gold-Finders", "Bender! & FancyBear", "1:2"],
        ["Moneypenny", "Kassandra", "0:2"],
        ["BlackJack", "BECS", "2:1"],
        ["Enso", "SeaFire", "0:2"],
      ],
    ],
    [
      "Week 5",
      [
        ["Bender! & FancyBear", "Kassandra", "2:1"],
        ["Gold-Finders", "BECS", "2:0"],
        ["Moneypenny", "SeaFire", "1:2"],
        ["BlackJack", "Enso", "1:2"],
      ],
    ],
    [
      "Week 6",
      [
        ["BECS", "Bender! & FancyBear", "0:2"],
        ["Kassandra", "SeaFire", "2:0"],
        ["Gold-Finders", "Enso", "2:0"],
        ["Moneypenny", "BlackJack", "2:1"],
      ],
    ],
    [
      "Week 7",
      [
        ["Bender! & FancyBear", "SeaFire", ""],
        ["BECS", "Enso", "2:0"],
        ["Kassandra", "BlackJack", "2:0"],
        ["Gold-Finders", "Moneypenny", "0:2"],
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
        ["Rivendell", "Beo-Guesser", "2:0"],
        ["Isotopes", "CBM Plattform", "2:0"],
        ["Phoenix", "Heisenguess", "2:0"],
        ["Raiders of the Lost Payment", "The Rookies", "2:0"],
      ],
    ],
    [
      "Week 2",
      [
        ["CBM Plattform", "Rivendell", "2:0"],
        ["Beo-Guesser", "Heisenguess", "2:0"],
        ["Isotopes", "The Rookies", "2:0"],
        ["Phoenix", "Raiders of the Lost Payment", "2:1"],
      ],
    ],
    [
      "Week 3",
      [
        ["Rivendell", "Heisenguess", "0:2"],
        ["CBM Plattform", "The Rookies", "2:1"],
        ["Beo-Guesser", "Raiders of the Lost Payment", "1:2"],
        ["Isotopes", "Phoenix", "1:2"],
      ],
    ],
    [
      "Week 4",
      [
        ["The Rookies", "Rivendell", "1:2"],
        ["Heisenguess", "Raiders of the Lost Payment", "0:2"],
        ["CBM Plattform", "Phoenix", "2:1"],
        ["Beo-Guesser", "Isotopes", "0:2"],
      ],
    ],
    [
      "Week 5",
      [
        ["Rivendell", "Raiders of the Lost Payment", "2:1"],
        ["The Rookies", "Phoenix", "1:2"],
        ["Heisenguess", "Isotopes", "0:2"],
        ["CBM Plattform", "Beo-Guesser", "0:f"],
      ],
    ],
    [
      "Week 6",
      [
        ["Phoenix", "Rivendell", "2:0"],
        ["Raiders of the Lost Payment", "Isotopes", "2:1"],
        ["The Rookies", "Beo-Guesser", "1:2"],
        ["Heisenguess", "CBM Plattform", "1:2"],
      ],
    ],
    [
      "Week 7",
      [
        ["Rivendell", "Isotopes", "0:2"],
        ["Phoenix", "Beo-Guesser", ""],
        ["Raiders of the Lost Payment", "CBM Plattform", "2:0"],
        ["The Rookies", "Heisenguess", "2:0"],
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

function calculateGroupRanking(groupResult: GroupResult) {
  const equalResults: { [teamName: string]: string[] } = {};

  let nextRank = 1;
  let equalRank = 1;

  const teamNames = Object.keys(groupResult);

  return teamNames
    .sort((teamAName, teamBName) => {
      const groupAResult = groupResult[teamAName];
      const groupBResult = groupResult[teamBName];

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

      if (groupAResult.wonAgainst.includes(teamBName)) {
        return -1;
      }

      if (groupBResult.wonAgainst.includes(teamAName)) {
        return 1;
      }

      if (groupAResult.matches < groupBResult.matches) {
        return -1;
      }

      function ensureAndAddEqualTeam(teamName: string, otherTeamName: string) {
        if (!equalResults[teamName]) {
          equalResults[teamName] = [];
        }
        equalResults[teamName].push(otherTeamName);
      }

      ensureAndAddEqualTeam(teamAName, teamBName);
      ensureAndAddEqualTeam(teamBName, teamAName);

      return 0;
    })
    .map((teamName, i) => {
      let teamRank: number;

      if (i > 0 && !equalResults[teamName]?.includes(teamNames[i - 1])) {
        teamRank = nextRank;
        equalRank = nextRank;
      } else {
        teamRank = equalRank;
      }
      nextRank++;

      return { teamName, rank: teamRank, result: groupResult[teamName] };
    });
}

const GroupResultTable: FC<{
  groupName: string;
  groupResult: GroupResult;
}> = ({ groupName, groupResult }) => {
  const rankedTeams = calculateGroupRanking(groupResult);

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
              <Table.Td>Rank</Table.Td>
              <Table.Td>Team</Table.Td>
              <Table.Td># Matches</Table.Td>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {rankedTeams.map((group, i) => {
              return (
                <Table.Tr key={group.teamName}>
                  <Table.Td className={getQualifiedClassName(i)}>
                    {group.rank}
                  </Table.Td>
                  <Table.Td className={getQualifiedClassName(i)}>
                    {group.teamName}
                  </Table.Td>
                  <Table.Td className={getQualifiedClassName(i)}>
                    {group.result.matches}
                  </Table.Td>
                </Table.Tr>
              );
            })}
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
            {rankedTeams.map((team, i) => (
              <Table.Tr key={team.teamName}>
                <Table.Td className={getQualifiedClassName(i)}>
                  {team.result.points}
                </Table.Td>
                <Table.Td className={getQualifiedClassName(i)}>
                  {team.result.gamesWon}:{team.result.gamesLost}
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
        .map((p) => (p === "f" ? "forfait" : parseInt(p)));

      if (ratios.length !== 2) {
        return;
      }

      function addWeekResult(
        teamName: string,
        otherTeamName: string,
        gamesWon: number | "forfait",
        gamesLost: number | "forfait",
      ) {
        table[teamName].matches += 1;

        // forfait rule: counts as win for the opposing team
        // and as a 0:2 loss for the team that forfeited,
        // for the winning team the game ratio doesn't change
        if (gamesWon === "forfait" || gamesLost === "forfait") {
          if (gamesWon === "forfait") {
            table[teamName].gamesLost += 2;
          } else {
            // you don't get any points awarded for winning by forfait
            addWin();
          }
        } else {
          table[teamName].gamesWon += gamesWon;
          table[teamName].gamesLost += gamesLost;

          if (gamesWon > gamesLost) {
            addWin();
          }
        }

        function addWin() {
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
