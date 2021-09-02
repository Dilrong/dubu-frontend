import { useEffect, useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import fetchPot from "./fetchPot";

export const useFetchPot = () => {
  useEffect(() => {
    fetchPot();
  });
};
