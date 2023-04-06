define("@scom/scom-frontier-wallet", ["require", "exports", "@ijstech/eth-wallet", "@ijstech/components"], function (require, exports, eth_wallet_1, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let moduleDir = components_1.application.currentModuleDir;
    function fullPath(path) {
        if (path.indexOf('://') > 0)
            return path;
        return `${moduleDir}/${path}`;
    }
    class FrontierWalletProvider extends eth_wallet_1.EthereumProvider {
        get displayName() {
            return 'Frontier Wallet';
        }
        get image() {
            return fullPath('img/frontier-wallet.svg');
        }
        get provider() {
            return window['frontier']['ethereum'];
        }
        get homepage() {
            return 'https://www.frontier.xyz/browser-extension';
        }
        installed() {
            return !!window['frontier'];
        }
    }
    exports.default = FrontierWalletProvider;
});
