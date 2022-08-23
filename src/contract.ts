import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "./constants/constants";
import abi from "./constants/abi.json";

const ABI = abi;
const contractAddress = CONTRACT_ADDRESS;
const provider = ethers.getDefaultProvider('ropsten');

export const CONTRACT = new ethers.Contract(contractAddress, ABI, provider);