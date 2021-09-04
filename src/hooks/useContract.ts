import { useMemo } from "react";
import { Contract } from "@ethersproject/contracts";
import useActiveWeb3React from "./useActiveWeb3React";
import {
  getBep20Contract,
  getCakeContract,
  getCakePotContract,
} from "../utils/contractHelpers";
import { BEP20_ABI } from "config/abi/erc20";
import { getContract } from "utils";

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useERC20 = () => {
  const { library } = useActiveWeb3React();
  return useMemo(() => getBep20Contract(library?.getSigner()), [library]);
};

export const useCakePot = () => {
  const { library } = useActiveWeb3React();
  return useMemo(() => getCakePotContract(library?.getSigner()), [library]);
};

export const useCake = () => {
  const { library } = useActiveWeb3React();
  return useMemo(() => getCakeContract(library?.getSigner()), [library]);
};

const useContract = (
  address: string | undefined,
  ABI: any,
  withSignerIfPossible = true
): Contract | null => {
  const { library, account } = useActiveWeb3React();

  return useMemo(() => {
    if (!address || !ABI || !library) return null;
    try {
      return getContract(
        address,
        ABI,
        library,
        withSignerIfPossible && account ? account : undefined
      );
    } catch (error) {
      console.error("Failed to get contract", error);
      return null;
    }
  }, [address, ABI, library, withSignerIfPossible, account]);
};

export const useTokenContract = (
  tokenAddress?: string,
  withSignerIfPossible?: boolean
): Contract | null => {
  return useContract(tokenAddress, BEP20_ABI, withSignerIfPossible);
};
