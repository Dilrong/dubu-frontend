import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { useSnackbar } from "material-ui-snackbar-provider";

import { injected } from "utils/web3React";

export default function useInactiveListener(suppress: boolean = false) {
  const { active, error, activate } = useWeb3React();
  const snackbar = useSnackbar();

  useEffect((): any => {
    const { ethereum } = window as any;
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        activate(injected);
      };
      const handleChainChanged = async (chainId: string | number) => {
        snackbar.showMessage(`This chain ${chainId} changing BSC`);
      };
      const handleAccountsChanged = (accounts: string[]) => {
        snackbar.showMessage("accountsChanged");
        if (accounts.length > 0) {
          activate(injected);
        }
      };
      const handleNetworkChanged = (networkId: string | number) => {
        snackbar.showMessage(`This network ${networkId} changing BSC`);
        activate(injected);
      };

      ethereum.on("connect", handleConnect);
      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("accountsChanged", handleAccountsChanged);
      ethereum.on("networkChanged", handleNetworkChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("connect", handleConnect);
          ethereum.removeListener("chainChanged", handleChainChanged);
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
          ethereum.removeListener("networkChanged", handleNetworkChanged);
        }
      };
    }
  }, [active, error, suppress, activate, snackbar]);
}
