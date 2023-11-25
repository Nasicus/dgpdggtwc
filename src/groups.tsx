import { FC, useState } from "react";
import { Group, GroupEditor } from "./groupEditor";
import { ActionIcon, Button, Flex } from "@mantine/core";
import { Edit } from "tabler-icons-react";

export const Groups: FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isAddMode, setIsAddMode] = useState(false);

  return (
    <>
      <h2>Groups</h2>
      <ul style={{ listStyle: "none" }}>
        {groups.map((g) => (
          <li key={g.name}>
            <GroupDisplay
              group={g}
              onChange={(ng) =>
                setGroups((groups) =>
                  groups.map((sg) => (sg.name === g.name ? { ...ng } : sg)),
                )
              }
            />
          </li>
        ))}
      </ul>
      <Button onClick={() => setIsAddMode(true)}>Add Group</Button>
      {isAddMode && (
        <GroupEditor
          onSave={(g) => setGroups((groups) => [...groups, g])}
          onClose={() => setIsAddMode(false)}
        />
      )}
    </>
  );
};

const GroupDisplay: FC<{
  group: Group;
  onChange: (group: Group) => unknown;
}> = ({ group, onChange }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  if (!isEditMode) {
    return (
      <Flex>
        {group.name} ({group.teams.length} Teams)
        <ActionIcon onClick={() => setIsEditMode(() => true)}>
          <Edit size="1.125rem" />
        </ActionIcon>
      </Flex>
    );
  }

  return (
    <>
      <GroupEditor
        group={group}
        onSave={(g) => onChange(g)}
        onClose={() => setIsEditMode(false)}
      />
    </>
  );
};
