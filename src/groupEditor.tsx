import styled from "@emotion/styled";
import { ActionIcon, Button, Select, TextInput } from "@mantine/core";
import { FC, useState } from "react";
import { X } from "tabler-icons-react";

export interface Group {
  name: string;
  teams: Team[];
}

export interface Team {
  name: string;
}

export const GroupEditor: FC<{
  group?: Group;
  onSave: (group: Group) => unknown;
  onClose: () => unknown;
}> = ({ group: incomingGroup, onSave, onClose }) => {
  const teams = useTeamProvider();
  const selectableTeams = teams.map((team) => ({
    value: team.name,
    label: team.name,
  }));
  const [group, setGroup] = useState(incomingGroup || { name: "", teams: [] });

  return (
    <>
      <h2>Group Editor</h2>
      <TextInput
        label="Name"
        value={group.name}
        onChange={(e) => setGroup((g) => ({ ...g, name: e.target.value }))}
      />
      <section>
        <h3>Teams</h3>
        <TeamList>
          {group.teams.map((team) => (
            <li key={team.name}>
              <Select
                placeholder="Edit team"
                value={team.name}
                data={selectableTeams}
                searchable
                nothingFoundMessage="No teams found"
                onChange={(v) =>
                  setGroup((g) => ({
                    ...g,
                    teams: g.teams.map((t) =>
                      t.name === team.name ? { name: v } : t,
                    ),
                  }))
                }
              />
              <ActionIcon
                onClick={() =>
                  setGroup((g) => ({
                    ...g,
                    teams: g.teams.filter((t) => t.name !== team.name),
                  }))
                }
              >
                <X size="1.125rem" />
              </ActionIcon>
            </li>
          ))}
          <li>
            <Select
              key={group.teams.length}
              placeholder="Add team"
              data={selectableTeams}
              searchable
              nothingFoundMessage="No teams found"
              onChange={(v) => {
                if (group.teams.find((t) => t.name === v)) return;
                setGroup((g) => ({ ...g, teams: [...g.teams, { name: v }] }));
              }}
            />
          </li>
        </TeamList>
      </section>
      <Button
        onClick={() => {
          onSave(group);
          onClose();
        }}
        mr="xl"
      >
        Save
      </Button>
      <Button onClick={onClose}>Cancel</Button>
    </>
  );
};

function useTeamProvider(): Team[] {
  return Array.from({ length: 20 }, (_, i) => ({ name: `Team ${i}` }));
}

const TeamList = styled.ul`
  list-style: none;

  li {
    display: flex;
    padding-bottom: 0.5rem;
    > :first-child {
      flex-grow: 1;
    }
  }
`;
