import React, { FC } from "react";

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

const Group1ResultTable: FC = () => {
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

  return (
    <GroupResultTable
      groupResult={calculateGroupResults(group1)}
      groupName="Gruppe 1"
    />
  );
};

const Group2ResultTable: FC = () => {
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

  return (
    <GroupResultTable
      groupResult={calculateGroupResults(group2)}
      groupName="Gruppe 2"
    />
  );
};

const Group3ResultTable: FC = () => {
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

  return (
    <GroupResultTable
      groupResult={calculateGroupResults(group3)}
      groupName="Gruppe 3"
    />
  );
};

const Group4ResultTable: FC = () => {
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
    <GroupResultTable
      groupResult={calculateGroupResults(group4)}
      groupName="Gruppe 4"
    />
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

  // we have to create 2 tables, because stupid confluence can only handle up to 3 columns when pasting
  // else it puts everything into one cell
  // this means: first we select the first 2 columns and paste to conf,
  // then we select the last 2 columns and paste to conf
  return (
    <>
      <h3>{groupName}</h3>
      <div style={{ display: "flex" }}>
        <table>
          <thead>
            <tr>
              <td>Team</td>
              <td># Matches</td>
            </tr>
          </thead>
          <tbody>
            {sortedGroupNames.map((teamName) => (
              <tr key={teamName}>
                <td>{teamName}</td>
                <td>{groupResult[teamName].matches}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <td>Points</td>
              <td>Ratio</td>
            </tr>
          </thead>
          <tbody>
            {sortedGroupNames.map((teamName) => (
              <tr key={teamName}>
                <td>{groupResult[teamName].points}</td>
                <td>
                  {groupResult[teamName].wins}:{groupResult[teamName].losses}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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

      const ratios = (teamResult[2] as string)
        .replace(/\s+/g, "")
        .split(":")
        .map((p) => parseInt(p));

      if (ratios.length !== 2) {
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

        const didWin = wins > losses;

        table[teamName].points += didWin ? 1 : 0;

        if (didWin) {
          table[teamName].wonAgainst = [
            ...table[teamName].wonAgainst,
            otherTeamName,
          ];
        }
      }

      addWeekResult(homeTeam, foreignTeam, ratios[0], ratios[1]);
      addWeekResult(foreignTeam, homeTeam, ratios[1], ratios[0]);
    });

    return table;
  }, {} as any);
}
