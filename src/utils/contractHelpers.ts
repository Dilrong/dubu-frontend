import { ethers } from "ethers";
import { simpleRpcProvider } from "../utils/providers";

import { CAKE_POT_ADDRESS, CAKE_POT_ABI } from "../config/abi/cakePot";
import { BEP20_ADDRESS, BEP20_ABI } from "../config/abi/erc20";
import { CAKE_ADDRESS, CAKE_ABI } from "../config/abi/cake";

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

export const getCakeContract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(CAKE_ABI, CAKE_ADDRESS, signer);
};

export const getCakePotContract = (
  signer?: ethers.Signer | ethers.providers.Provider
) => {
  return getContract(CAKE_POT_ABI, CAKE_POT_ADDRESS, signer);
};
