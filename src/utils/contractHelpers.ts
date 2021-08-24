import { ethers } from "ethers";
import { simpleRpcProvider } from "../utils/providers";

// Addresses
import { getCakePotAddress } from "../utils/addressHelpers";

// ABI

import cakePotAbi from "../config/abi/cakePot.json";
import bep20Abi from "../config/abi/erc20.json";
import fungibleTokenAbi from "../config/abi/fungibleToken.json";

const getContract = (
  abi: any,
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  const signerOrProvider = signer ?? simpleRpcProvider;
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getBep20Contract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(bep20Abi, address, signer);
};

export const getFungibleTokenContract = (
  address: string,
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(fungibleTokenAbi, address, signer);
};

export const getCakePotContract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(cakePotAbi, getCakePotAddress(), signer);
};
