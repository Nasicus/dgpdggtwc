import React, { FC, Fragment } from "react";
import "./App.css";
import { Groups } from "./groups";

export const App: FC = () => {
  return (
    <>
      <GroupResults />

      <PairingsTable
        name="Gruppe 1"
        pairings={[
          "Skyfall",
          "Funny Cats",
          "Blofeld",
          "Planet Express",
          "Nucular",
          "Banana",
          "Helix",
          "Octopussy",
        ]}
      />

      <PairingsTable
        name="Gruppe 2"
        pairings={[
          "Raven",
          "Darwin",
          "Cyclops",
          "Polaris Pathfinders",
          "Appic",
          "Clippy",
          "Firefly",
          "Titans",
        ]}
      />
      <PairingsTable
        name="Gruppe 3"
        pairings={[
          "Bender! & FancyBear",
          "SeaFire",
          "BECS",
          "Kassandra",
          "Gold-Finders",
          "Moneypenny",
          "BlackJack",
          "Enso",
        ]}
      />

      <PairingsTable
        name="Gruppe 4"
        pairings={[
          "Rivendell",
          "Isotopes",
          "Pönix",
          "Raiders of the Lost Payment",
          "The Rookies",
          "Heisenguess",
          "CBM Plattform",
          "Beo-Guesser",
        ]}
      />
    </>
  );
};

const GroupResults: FC = () => {
  const group1 = [
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

  const group2 = [
    [
      "Week 1",
      [
        ["Raven", "Titans", ""],
        ["Darwin", "Firefly", ""],
        ["Cyclops", "Clippy", ""],
        ["Polaris Pathfinders", "Appic", ""],
      ],
    ],
    [
      "Week 2",
      [
        ["Firefly", "Raven", ""],
        ["Titans", "Clippy", ""],
        ["Darwin", "Appic", ""],
        ["Cyclops", "Polaris Pathfinders", ""],
      ],
    ],
    [
      "Week 3",
      [
        ["Raven", "Clippy", ""],
        ["Firefly", "Appic", ""],
        ["Titans", "Polaris Pathfinders", ""],
        ["Darwin", "Cyclops", ""],
      ],
    ],
    [
      "Week 4",
      [
        ["Appic", "Raven", ""],
        ["Clippy", "Polaris Pathfinders", ""],
        ["Firefly", "Cyclops", ""],
        ["Titans", "Darwin", ""],
      ],
    ],
    [
      "Week 5",
      [
        ["Raven", "Polaris Pathfinders", ""],
        ["Appic", "Cyclops", ""],
        ["Clippy", "Darwin", ""],
        ["Firefly", "Titans", ""],
      ],
    ],
    [
      "Week 6",
      [
        ["Cyclops", "Raven", ""],
        ["Polaris Pathfinders", "Darwin", ""],
        ["Appic", "Titans", ""],
        ["Clippy", "Firefly", ""],
      ],
    ],
    [
      "Week 7",
      [
        ["Raven", "Darwin", ""],
        ["Cyclops", "Titans", ""],
        ["Polaris Pathfinders", "Firefly", ""],
        ["Appic", "Clippy", ""],
      ],
    ],
  ];

  const group3 = [
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

  const group4 = [
    [
      "Week 1",
      [
        ["Rivendell", "Beo-Guesser", ""],
        ["Isotopes", "CBM Plattform", ""],
        ["Pönix", "Heisenguess", ""],
        ["Raiders of the Lost Payment", "The Rookies", ""],
      ],
    ],
    [
      "Week 2",
      [
        ["CBM Plattform", "Rivendell", ""],
        ["Beo-Guesser", "Heisenguess", ""],
        ["Isotopes", "The Rookies", ""],
        ["Pönix", "Raiders of the Lost Payment", ""],
      ],
    ],
    [
      "Week 3",
      [
        ["Rivendell", "Heisenguess", ""],
        ["CBM Plattform", "The Rookies", ""],
        ["Beo-Guesser", "Raiders of the Lost Payment", ""],
        ["Isotopes", "Pönix", ""],
      ],
    ],
    [
      "Week 4",
      [
        ["The Rookies", "Rivendell", ""],
        ["Heisenguess", "Raiders of the Lost Payment", ""],
        ["CBM Plattform", "Pönix", ""],
        ["Beo-Guesser", "Isotopes", ""],
      ],
    ],
    [
      "Week 5",
      [
        ["Rivendell", "Raiders of the Lost Payment", ""],
        ["The Rookies", "Pönix", ""],
        ["Heisenguess", "Isotopes", ""],
        ["CBM Plattform", "Beo-Guesser", ""],
      ],
    ],
    [
      "Week 6",
      [
        ["Pönix", "Rivendell", ""],
        ["Raiders of the Lost Payment", "Isotopes", ""],
        ["The Rookies", "Beo-Guesser", ""],
        ["Heisenguess", "CBM Plattform", ""],
      ],
    ],
    [
      "Week 7",
      [
        ["Rivendell", "Isotopes", ""],
        ["Pönix", "Beo-Guesser", ""],
        ["Raiders of the Lost Payment", "CBM Plattform", ""],
        ["The Rookies", "Heisenguess", ""],
      ],
    ],
  ];

  return (
    <>
      <GroupResultTable
        groupResult={calculateGroupResults(group1)}
        groupName="Gruppe 1"
      />
      <GroupResultTable
        groupResult={calculateGroupResults(group2)}
        groupName="Gruppe 2"
      />
      <GroupResultTable
        groupResult={calculateGroupResults(group3)}
        groupName="Gruppe 3"
      />
      <GroupResultTable
        groupResult={calculateGroupResults(group4)}
        groupName="Gruppe 4"
      />
    </>
  );
};

const GroupResultTable: FC<{
  groupName: string;
  groupResult: {
    [team: string]: {
      matches: number;
      wins: number;
      losses: number;
      points: number;
      wonAgainst: string[];
    };
  };
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

      const groupARatio = groupAResult.wins - groupAResult.losses;
      const groupBRatio = groupBResult.wins - groupBResult.losses;

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
  return (
    <>
      <h3>{groupName}</h3>
      <table>
        <thead>
          <tr>
            <td>Team</td>
            <td># Matches</td>
            <td>Points</td>
            <td>Ratio</td>
          </tr>
        </thead>
        <tbody>
          {sortedGroupNames.map((teamName) => (
            <tr key={teamName}>
              <td>{teamName}</td>
              <td>{groupResult[teamName].matches}</td>
              <td>{groupResult[teamName].points}</td>
              <td>
                {groupResult[teamName].wins}:{groupResult[teamName].losses}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

function calculateGroupResults(group: any) {
  return group.reduce((table, teamResults) => {
    teamResults[1].forEach((teamResult) => {
      const homeTeam = teamResult[0] as string;
      const foreignTeam = teamResult[1] as string;

      function ensureTeam(teamName: string) {
        if (table[teamName]) {
          return;
        }

        table[teamName] = {
          matches: 0,
          wins: 0,
          losses: 0,
          points: 0,
          wonAgainst: [],
        };
      }

      ensureTeam(homeTeam);
      ensureTeam(foreignTeam);

      const points = (teamResult[2] as string)
        .split(":")
        .map((p) => parseInt(p));

      if (points.length !== 2) {
        return;
      }

      function addWeekResult(
        teamName: string,
        otherTeamName: string,
        wins: number,
        losses: number,
      ) {
        table[teamName].matches += 1;
        table[teamName].wins += wins;
        table[teamName].losses += losses;
        table[teamName].points += wins > losses ? 1 : 0;
        if (wins > losses) {
          table[teamName].wonAgainst = [
            ...table[teamName].wonAgainst,
            otherTeamName,
          ];
        }
      }

      addWeekResult(homeTeam, foreignTeam, points[0], points[1]);
      addWeekResult(foreignTeam, homeTeam, points[1], points[0]);
    });

    return table;
  }, {} as any);
}

const PairingsTable: FC<{ pairings: string[]; name: string }> = ({
  pairings,
  name,
}) => {
  return (
    <div>
      <h3>
        {name} ({pairings.length}er)
      </h3>
      <table>
        <tbody>
          {calculatePairings(pairings).map((pairing, week) => (
            <Fragment key={week}>
              <tr>
                <td colSpan={2}>Woche {week + 1}</td>
              </tr>
              {/*<td>{JSON.stringify(pairing.map(p => [p.homeTeam, p.foreignTeam, ""]), null, 2)}</td> */}
              {pairing.map((p, i) => (
                <tr key={i}>
                  <td>{p.homeTeam}</td>
                  <td>{p.foreignTeam}</td>
                </tr>
              ))}
              <tr>
                <td colSpan={2}>&nbsp;</td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// source: https://github.com/tournament-js/roundrobin
function calculatePairings(teamsToPair: string[]) {
  const pairings: Array<Pairing[]> = [];

  const teams = teamsToPair.slice();
  let numberOfTeams = teams.length;

  if (numberOfTeams % 2 === 1) {
    teams.push(null); // so we can match algorithm for even numbers
    numberOfTeams += 1;
  }

  for (let roundNumber = 0; roundNumber < numberOfTeams - 1; roundNumber++) {
    pairings[roundNumber] = [];

    let teamWithBreak: Pairing = null;

    for (
      let indexOfTeamA = 0;
      indexOfTeamA < numberOfTeams / 2;
      indexOfTeamA++
    ) {
      const indexOfTeamB = numberOfTeams - 1 - indexOfTeamA;
      const teamA = teams[indexOfTeamA];
      const teamB = teams[indexOfTeamB];

      if (teamA !== null && teamB !== null) {
        // flip orders to ensure everyone gets roughly n/2 home matches
        const shouldFlipAandB = indexOfTeamA === 0 && roundNumber % 2 === 1;

        pairings[roundNumber].push({
          homeTeam: shouldFlipAandB ? teamB : teamA,
          foreignTeam: shouldFlipAandB ? teamA : teamB,
        });
      } else {
        // do not push it yet to the pairings, since we always want to have the break team at the end
        teamWithBreak = {
          breakTeam: teamA !== null ? teamA : teamB,
        };
      }
    }

    if (teamWithBreak !== null) {
      pairings[roundNumber].push(teamWithBreak);
    }

    // now shift the teams so that the next round robin round can be generated
    // basically take the last team and move it up to the second position
    // note that the first team is always fixed, since this is how the round robin algorithm works
    teams.splice(1, 0, teams.pop());
  }

  return pairings;
}

interface Pairing {
  homeTeam?: string;
  foreignTeam?: string;
  breakTeam?: string;
}
