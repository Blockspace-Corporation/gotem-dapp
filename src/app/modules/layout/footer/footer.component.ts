import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { AssetsService } from '../../../services/assets/assets.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(
    public decimalPipe: DecimalPipe,
    private assetsService: AssetsService
  ) { }

  keypair = localStorage.getItem("wallet-keypair") || "";
  balance: number = 0;

  public async getCurrentBalance(): Promise<void> {
    this.assetsService.getAssetBalanceByAccount(1, this.keypair).subscribe(
      balance => {
        this.balance = balance;
      }
    );
  }

  ngOnInit() {
    this.getCurrentBalance();
  }
}
