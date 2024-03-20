import { Component } from '@angular/core';
import { PolkadotjsService } from '../../../services/polkadotjs/polkadotjs.service';
import { WalletAccountModel } from '../../../models/wallet-account.model';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent {

  constructor(
    private polkadotjsService: PolkadotjsService
  ) { }

  selectedWallet = "";
  showWalletOptions = true;
  showWalletAccounts = false;
  web3Wallets: WalletAccountModel[] = [];
  selectedWalletAccount: WalletAccountModel = new WalletAccountModel();

  public showPolkadotJSWalletAccounts(): void {
    this.showWalletOptions = false;
    this.showWalletAccounts = true;
  }

  public selectPolkadot(): void {
    this.selectedWallet = "polkadot-js";
    this.loadWeb3WalletAccounts();
  }

  public selectTalisman(): void {
    this.selectedWallet = "talisman";
    this.loadWeb3WalletAccounts();
  }

  public loadWeb3WalletAccounts(): void {
    this.showPolkadotJSWalletAccounts();

    this.web3Wallets = [];
    this.selectedWalletAccount = new WalletAccountModel();

    this.getWeb3Accounts(this.selectedWallet);
  }

  public async getWeb3Accounts(source: string): Promise<void> {
    let web3Accounts: Promise<WalletAccountModel[]> = this.polkadotjsService.getWeb3Accounts();
    let data = (await web3Accounts);

    if (data.length > 0) {
      let walletAccounts = data.filter(d => d.metaSource == this.selectedWallet);
      if (walletAccounts.length > 0) {
        for (let i = 0; i < walletAccounts.length; i++) {
          this.web3Wallets.push({
            address: walletAccounts[i].address,
            metaGenesisHash: walletAccounts[i].metaGenesisHash,
            metaName: walletAccounts[i].metaName,
            metaSource: walletAccounts[i].metaSource,
            type: walletAccounts[i].type
          });
        }
      }
    }
  }

  public onWalletSelect(event: any): void {
    this.signAndVerify();
  }

  public async signAndVerify(): Promise<void> {
    let signAndVerify: Promise<boolean> = this.polkadotjsService.signAndVerify(this.selectedWalletAccount);
    let verified = (await signAndVerify);
    if (verified == true) {
      this.generateKeypair();
    }
  }

  public async generateKeypair(): Promise<void> {
    let generateKeypair: Promise<string> = this.polkadotjsService.generateKeypair(this.selectedWalletAccount.address);
    let keypair = (await generateKeypair);
    if (keypair != "") {
      localStorage.setItem("wallet-meta-name", String(this.selectedWalletAccount.metaName));
      localStorage.setItem("wallet-address", String(this.selectedWalletAccount.address));
      localStorage.setItem("wallet-keypair", keypair);
    }

    location.reload();
  }
}
