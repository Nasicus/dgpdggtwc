﻿import { FC } from "react";
import { Table } from "@mantine/core";
import classes from "./groupResult.module.css";
import { group4, group3, group2, group1 } from "./data/groupResults.ts";
import { Group } from "./groupTypes";

export const GroupResultsTab: FC = () => {
  const groupResults = getGroupResults(
    [group1, "Group 1"],
    [group2, "Group 2"],
    [group3, "Group 3"],
    [group4, "Group 4"],
  );

  return (
    <>
      {groupResults.map(([groupResult, groupName]) => (
        <GroupResultTable
          key={groupName}
          groupResult={groupResult}
          groupName={groupName}
        />
      ))}
      <Statistics
        groupResults={groupResults.map(([groupResult]) => groupResult)}
      />
      <GroupResultTable
        groupResult={groupResults.reduce<GroupResult>(
          (overall, [groupResult, groupName]) => {
            Object.keys(groupResult).forEach((teamName) => {
              overall[`${teamName} (${groupName})`] = groupResult[teamName];
            });
            return overall;
          },
          {},
        )}
        groupName="Overall"
      />
    </>
  );
};

type GroupName = string;

function getGroupResults(
  ...groups: [Group, GroupName][]
): Array<[GroupResult, GroupName]> {
  return groups.map(([groupData, groupName]) => [
    calculateGroupResults(groupData),
    groupName,
  ]);
}

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
    .filter((t) => t !== "BREAK")
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

function calculateGroupResults(group: Group): GroupResult {
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

const Statistics: FC<{ groupResults: GroupResult[] }> = ({ groupResults }) => {
  const statistics = {
    matches: 0,
    gamesTotal: 0,
    points: 0,
  };

  groupResults.forEach((groupResult) => {
    Object.keys(groupResult).forEach((teamName) => {
      const teamResult = groupResult[teamName];
      statistics.matches += teamResult.wonAgainst.length;
      statistics.gamesTotal += teamResult.gamesWon;
      statistics.points += teamResult.points;
    });
  });

  return (
    <>
      <h3>Stats</h3>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Td>Matches</Table.Td>
            <Table.Td>Games</Table.Td>
            <Table.Td>Points</Table.Td>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>{statistics.matches}</Table.Td>
            <Table.Td>{statistics.gamesTotal}</Table.Td>
            <Table.Td>{statistics.points}</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    </>
  );
};
