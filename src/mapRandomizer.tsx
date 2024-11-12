import { FC, useState } from "react";
import { SpinningWheel } from "./wheel.tsx";
import styled from "@emotion/styled";

const mapsToRandomize = [
  "Switzerland",
  "An Official World",
  "A Community World",
];

const numberOfGamesToRandomize = 9;

export const MapRandomizer: FC = () => {
  return (
    <Host>
      {Array(numberOfGamesToRandomize)
        .fill(0)
        .map((_, i) => (
          <WheelWeek week={i + 1} key={i} mapsToRandomize={mapsToRandomize} />
        ))}
    </Host>
  );
};

const Host = styled.div`
  display: flex;
  flex-direction: column;
`;

const WheelWeek: FC<{ week: number; mapsToRandomize: string[] }> = ({
  week,
  mapsToRandomize: initialMaps,
}) => {
  const [maps, setMaps] = useState(initialMaps);
  const [pickedMaps, setPickedMaps] = useState<string[]>([]);
  const [canSpin, setCanSpin] = useState(true);

  return (
    <WheelContainer>
      <SpinningWheel
        key={maps.join(",")}
        segments={maps}
        segColors={["#FF0000", "#000000", "#0000FF"]}
        onFinished={handleFinished}
        primaryColor="black"
        contrastColor="white"
        buttonText="wheeeee"
        isOnlyOnce={false}
        size={200}
        upDuration={100}
        downDuration={600}
        disabled={!canSpin || maps.length <= 1}
      />
      <div>
        <h2>Week {week}</h2>
        <h3>Game order</h3>
        <ol onClick={handleNext}>
          {pickedMaps.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ol>
      </div>
    </WheelContainer>
  );

  function handleFinished(winner: string) {
    setPickedMaps((maps) => [...maps, winner]);
    setCanSpin(false);
  }

  function handleNext() {
    setMaps((currentMaps) =>
      currentMaps.filter((m) => !pickedMaps.includes(m)),
    );

    if (maps.length === 1) {
      setPickedMaps((pickedMaps) => [...pickedMaps, maps[0]]);
      setMaps([]);
    } else {
      setCanSpin(true);
    }
  }
};

const WheelContainer = styled.div`
  display: flex;
`;
