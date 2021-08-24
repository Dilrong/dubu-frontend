import { useMemo } from "react";
// import { Contract } from "@ethersproject/contracts";
import useActiveWeb3React from "./useActiveWeb3React";
import {
  getBep20Contract,
  // getFungibleTokenContract,
  getCakePotContract,
} from "../utils/contractHelpers";
// import { getContract } from "../utils";

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = (address: string) => {
  const { library } = useActiveWeb3React();
  return useMemo(() => getBep20Contract(address, library?.getSigner()), [
    address,
    library,
  ]);
};

export const useCakePot = () => {
  const { library } = useActiveWeb3React();
  return useMemo(() => getCakePotContract(library?.getSigner()), [library]);
};

// function useContract(
//   address: string | undefined,
//   ABI: any,
//   withSignerIfPossible = true
// ): Contract | null {
//   const { library, account } = useActiveWeb3React();

//   return useMemo(() => {
//     if (!address || !ABI || !library) return null;
//     try {
//       return getContract(
//         address,
//         ABI,
//         library,
//         withSignerIfPossible && account ? account : undefined
//       );
//     } catch (error) {
//       console.error("Failed to get contract", error);
//       return null;
//     }
//   }, [address, ABI, library, withSignerIfPossible, account]);
// }
