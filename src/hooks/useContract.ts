import { useMemo } from "react";
import useActiveWeb3React from "./useActiveWeb3React";
import {
  getBep20Contract,
  getCakeContract,
  getCakePotContract,
} from "../utils/contractHelpers";

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
