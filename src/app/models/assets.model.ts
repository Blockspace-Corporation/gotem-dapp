export class AssetModel {
    id: number = 0;
    accounts: number = 0;
    admin: string = "";
    approvals: string = "";
    deposit: number = 0;
    freezer: string = "";
    isSufficient: boolean = false;
    issuer: string = "";
    minBalance: BigInt = BigInt(0);
    owner: string = "";
    status: string = "";
    sufficients: number = 0;
    supply: BigInt = BigInt(0);
    metadata: AssetMetadataModel = new AssetMetadataModel()
}

export class AssetMetadataModel {
    asset_id: number = 0;
    deposit: number = 0;
    name: string = "";
    symbol: string = "";
    decimals: number = 0;
    isFrozen: boolean = false;
}

export class AssetPairsModel {
    assetX: number = 0;
    assetY: number = 0;
}

export class SelectedAssetModel {
    asset: AssetModel = new AssetModel();
    balance: number = 0;
}
