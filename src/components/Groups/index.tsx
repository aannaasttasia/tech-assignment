import React, { useEffect, useState } from "react";
import { getGroupInfo } from "./getMethods";
import { CONTRACT } from "../../contract";
import { GroupInfo } from "../../constants/types";
import GroupComponent from "../GroupComponent";

export default function Groups() {
  const [groups, setGroups] = useState<GroupInfo[]>([]);

  async function updateGroups() {
    setGroups(await getGroupInfo(CONTRACT));
  }

  useEffect(() => {
    updateGroups();
  }, []);

  return groups.map((group, i) => {
    return <GroupComponent key={i} group={group} />;
  });
}
