export class AppSettings {
    public wsProviderEndpoint = 'wss://rococo-contracts-rpc.polkadot.io';
    // public apiEndpoint = 'https://dapp-api.gotem.io';
    public apiEndpoint = 'http://localhost:3000';
    public keypair = localStorage.getItem("wallet-keypair") || "";
}