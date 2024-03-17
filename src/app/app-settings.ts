export class AppSettings {
    public wsProviderEndpoint = 'ws://127.0.0.1:9944';
    public apiEndpoint = 'http://localhost:3000';
    public keypair = localStorage.getItem("wallet-keypair") || "";
}