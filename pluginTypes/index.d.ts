/// <amd-module name="@scom/scom-frontier-wallet" />
declare module "@scom/scom-frontier-wallet" {
    import { EthereumProvider } from '@ijstech/eth-wallet';
    export class FrontierWalletProvider extends EthereumProvider {
        get displayName(): string;
        get image(): string;
        get provider(): any;
        get homepage(): string;
        installed(): boolean;
    }
}
