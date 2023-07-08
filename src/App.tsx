import { FC, useState } from "react";
import "./App.css";

export const App: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <PairingsTable pairings={["A", "B"]} />
      <PairingsTable pairings={["A", "B", "C"]} />
      <PairingsTable pairings={["A", "B", "C", "D"]} />
      <PairingsTable pairings={["A", "B", "C", "D", "E"]} />
    </>
  );
};

const PairingsTable: FC<{ pairings: string[] }> = ({ pairings }) => {
  return (
    <div>
      <h3>{pairings.length}er Gruppe</h3>
      <table>
        <tbody>
          {calculatePairings(pairings).map((pairing, slot) => (
            <tr key={slot}>
              <td>{slot}</td>
              <td>{JSON.stringify(pairing, null, 2)}</td>
            </tr>
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
