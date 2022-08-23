import { BigNumberish, Contract } from "ethers";
import { Index, Group, GroupInfo } from "../../constants/types";

export async function getGroupIds(contract: Contract): Promise<number[]> {
  return await contract.getGroupIds();
}

export async function getGroup(
  contract: Contract,
  groupId: number
): Promise<Group> {
  const response = await contract.getGroup(groupId);
  return {
    name: response.name,
    indexes: response.indexes,
  };
}

export async function getIndex(
  contract: Contract,
  indexId: BigNumberish
): Promise<Index> {
  const response = await contract.getIndex(indexId);
  return {
    id: response.id,
    name: response.name,
    ethPriceInWei: response.ethPriceInWei,
    usdPriceInCents: response.usdPriceInCents,
    usdCapitalization: response.usdCapitalization,
    percentageChange: response.percentageChange,
  };
}

export async function getGroups(contract: Contract): Promise<Group[]> {
  const groupIds = await getGroupIds(contract);

  const groups = await Promise.all(groupIds.map((a) => getGroup(contract, a)));

  return groups;
}

export async function getGroupInfo(contract: Contract): Promise<GroupInfo[]> {
  const groupIds = await getGroupIds(contract);

  const groups = await Promise.all(groupIds.map((a) => getGroup(contract, a)));

  const indexes = await Promise.all(
    groups
      .map((a) => a.indexes)
      .map(async (a) => await Promise.all(a.map((b) => getIndex(contract, b))))
  );

  return groups.map((a, i) => {
    return {
      name: a.name,
      indexes: indexes[i],
    };
  });
}
