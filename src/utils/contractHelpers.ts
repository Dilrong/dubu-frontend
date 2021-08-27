import { ethers } from "ethers";
import { simpleRpcProvider } from "../utils/providers";

import { CAKE_POT_ADDRESS, CAKE_POT_ABI } from "../config/abi/cakePot";
import { BEP20_ADDRESS, BEP20_ABI } from "../config/abi/erc20";
import {
  FUNGIBLE_TOKEN_ADDRESS,
  FUNGIBLE_TOKEN_ABI,
} from "../config/abi/fungibleToken";

const getContract = (
  abi: any,
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getBep20Contract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(BEP20_ABI, BEP20_ADDRESS, signer);
};

export const getFungibleTokenContract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(FUNGIBLE_TOKEN_ABI, FUNGIBLE_TOKEN_ADDRESS, signer);
};

export const getCakePotContract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(CAKE_POT_ABI, CAKE_POT_ADDRESS, signer);
};
