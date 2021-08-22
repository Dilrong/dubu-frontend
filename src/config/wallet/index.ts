export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
}

const connectors = [
  {
    title: "Meta Mask",
    logo: "/assets/metamask.svg",
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Trust Wallet",
    logo: "/assets/trustwallet.svg",
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "SafePal Wallet",
    logo: "/assets/safepal.svg",
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Binance Chain Wallet",
    logo: "/assets/binanceChain.svg",
    connectorId: ConnectorNames.BSC,
  },
  // {
  //   title: "MathWallet",
  //   connectorId: ConnectorNames.Injected,
  // },
  // {
  //   title: "TokenPocket",
  //   connectorId: ConnectorNames.Injected,
  // },
  // {
  //   title: "WalletConnect",
  //   connectorId: ConnectorNames.WalletConnect,
  // },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
