import addresses from "../config/constants/contracts";

interface Address {
  [index: string]: string;
  //   97?: string;
  56: string;
}

export const getAddress = (address: Address): string => {
  const chainId = process.env.REACT_APP_CHAIN_ID;
  return address[chainId!] ? address[chainId!] : address[chainId!];
};

export const getCakePotAddress = () => {
  return getAddress(addresses.cakePot);
};
