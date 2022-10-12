import { BigNumberish } from "ethers";

export interface Group {
    name: string;
    indexes: BigNumberish[];
} 

  
export interface GroupInfo {
  name: string;
  indexes: Index[];
}

export interface Index {
    id: number;
    name: string;
    ethPriceInWei: number;
    usdPriceInCents: number;
    usdCapitalization: number;
    percentageChange: number;
}
  

  