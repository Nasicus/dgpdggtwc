import { FC, Fragment } from "react";
import { Table } from "@mantine/core";
import { group1, group2, group3, group4 } from "./data/pairings.ts";

export const PairingTables: FC = () => {
  return (
    <>
      <PairingsTable name="Group 1" pairings={group1} />

      <PairingsTable name="Group 2" pairings={group2} />
      <PairingsTable name="Group 3" pairings={group3} />

      <PairingsTable name="Group 4" pairings={group4} />
    </>
  );
};

const PairingsTable: FC<{ pairings: string[]; name: string }> = ({
  pairings,
  name,
}) => {
  const calculatedPairings = calculatePairings(pairings);

  return (
    <div>
      <h3>
        {name} ({pairings.length}er)
      </h3>
      <Table>
        <Table.Tbody>
          {calculatedPairings.map((pairing, week) => (
            <Fragment key={week}>
              <Table.Tr>
                <Table.Td colSpan={2}>
                  <strong>Week {week + 1}</strong>
                </Table.Td>
              </Table.Tr>
              {/*<td>{JSON.stringify(pairing.map(p => [p.homeTeam, p.foreignTeam, ""]), null, 2)}</td> */}
              {pairing.map((p, i) => (
                <Table.Tr key={i}>
                  <Table.Td>{p.homeTeam}</Table.Td>
                  <Table.Td>{p.foreignTeam}</Table.Td>
                </Table.Tr>
              ))}
              <Table.Tr>
                <Table.Td colSpan={2}>&nbsp;</Table.Td>
              </Table.Tr>
            </Fragment>
          ))}
        </Table.Tbody>
      </Table>
      JSON:
      <pre>
        {JSON.stringify(
          calculatedPairings.map((pairings, week) => [
            `Week ${week + 1}`,
            pairings.map((p) => [p.homeTeam, p.foreignTeam, ""]),
          ]),
          null,
          2,
        )}
      </pre>
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
