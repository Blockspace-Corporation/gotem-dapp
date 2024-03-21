import {
  decodeAddress,
  encodeAddress
} from "./chunk-2MRYR5WN.js";
import {
  isPromise,
  objectSpread,
  u8aEq,
  u8aUnwrapBytes,
  u8aWrapBytes
} from "./chunk-5VGPNYA4.js";
import {
  __async
} from "./chunk-QMAMURKP.js";

// node_modules/@polkadot/extension-dapp/util.js
function documentReadyPromise(creator) {
  return new Promise((resolve) => {
    if (document.readyState === "complete") {
      resolve(creator());
    } else {
      window.addEventListener("load", () => resolve(creator()));
    }
  });
}

// node_modules/@polkadot/extension-dapp/packageInfo.js
var packageInfo = { name: "@polkadot/extension-dapp", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "0.46.8" };

// node_modules/@polkadot/extension-dapp/wrapBytes.js
var unwrapBytes = u8aUnwrapBytes;
var wrapBytes = u8aWrapBytes;

// node_modules/@polkadot/extension-dapp/bundle.js
var win = window;
win.injectedWeb3 = win.injectedWeb3 || {};
var isWeb3Injected = web3IsInjected();
var web3EnablePromise = null;
function web3IsInjected() {
  return Object.values(win.injectedWeb3).filter(({ connect, enable }) => !!(connect || enable)).length !== 0;
}
function throwError(method) {
  throw new Error(`${method}: web3Enable(originName) needs to be called before ${method}`);
}
function mapAccounts(source, list, ss58Format) {
  return list.map(({ address, genesisHash, name, type }) => ({
    address: address.length === 42 ? address : encodeAddress(decodeAddress(address), ss58Format),
    meta: { genesisHash, name, source },
    type
  }));
}
function filterAccounts(list, genesisHash, type) {
  return list.filter((a) => (!a.type || !type || type.includes(a.type)) && (!a.genesisHash || !genesisHash || a.genesisHash === genesisHash));
}
function getWindowExtensions(originName) {
  return Promise.all(Object.entries(win.injectedWeb3).map(([nameOrHash, { connect, enable, version }]) => Promise.resolve().then(() => connect ? connect(originName) : enable ? enable(originName).then((e) => objectSpread({ name: nameOrHash, version: version || "unknown" }, e)) : Promise.reject(new Error("No connect(..) or enable(...) hook found"))).catch(({ message }) => {
    console.error(`Error initializing ${nameOrHash}: ${message}`);
  }))).then((exts) => exts.filter((e) => !!e));
}
function filterEnable(caller, extensions) {
  return __async(this, null, function* () {
    if (!web3EnablePromise) {
      return throwError(caller);
    }
    const sources = yield web3EnablePromise;
    return sources.filter(({ name }) => !extensions || extensions.includes(name));
  });
}
function web3Enable(originName, compatInits = []) {
  if (!originName) {
    throw new Error("You must pass a name for your app to the web3Enable function");
  }
  const initCompat = compatInits.length ? Promise.all(compatInits.map((c) => c().catch(() => false))) : Promise.resolve([true]);
  web3EnablePromise = documentReadyPromise(() => initCompat.then(() => getWindowExtensions(originName).then((values) => values.map((e) => {
    if (!e.accounts.subscribe) {
      e.accounts.subscribe = (cb) => {
        e.accounts.get().then(cb).catch(console.error);
        return () => {
        };
      };
    }
    return e;
  })).catch(() => []).then((values) => {
    const names = values.map(({ name, version }) => `${name}/${version}`);
    isWeb3Injected = web3IsInjected();
    console.info(`web3Enable: Enabled ${values.length} extension${values.length !== 1 ? "s" : ""}: ${names.join(", ")}`);
    return values;
  })));
  return web3EnablePromise;
}
function web3Accounts() {
  return __async(this, arguments, function* ({ accountType, extensions, genesisHash, ss58Format } = {}) {
    const accounts = [];
    const sources = yield filterEnable("web3Accounts", extensions);
    const retrieved = yield Promise.all(sources.map((_0) => __async(this, [_0], function* ({ accounts: accounts2, name: source }) {
      try {
        const list = yield accounts2.get();
        return mapAccounts(source, filterAccounts(list, genesisHash, accountType), ss58Format);
      } catch {
        return [];
      }
    })));
    retrieved.forEach((result) => {
      accounts.push(...result);
    });
    console.info(`web3Accounts: Found ${accounts.length} address${accounts.length !== 1 ? "es" : ""}`);
    return accounts;
  });
}
function web3AccountsSubscribe(_0) {
  return __async(this, arguments, function* (cb, { accountType, extensions, genesisHash, ss58Format } = {}) {
    const sources = yield filterEnable("web3AccountsSubscribe", extensions);
    const accounts = {};
    const triggerUpdate = () => cb(Object.entries(accounts).reduce((result, [source, list]) => {
      result.push(...mapAccounts(source, filterAccounts(list, genesisHash, accountType), ss58Format));
      return result;
    }, []));
    const unsubs = sources.map(({ accounts: { subscribe }, name: source }) => subscribe((result) => {
      accounts[source] = result;
      try {
        const result2 = triggerUpdate();
        if (result2 && isPromise(result2)) {
          result2.catch(console.error);
        }
      } catch (error) {
        console.error(error);
      }
    }));
    return () => {
      unsubs.forEach((unsub) => {
        unsub();
      });
    };
  });
}
function web3FromSource(source) {
  return __async(this, null, function* () {
    if (!web3EnablePromise) {
      return throwError("web3FromSource");
    }
    const sources = yield web3EnablePromise;
    const found = source && sources.find(({ name }) => name === source);
    if (!found) {
      throw new Error(`web3FromSource: Unable to find an injected ${source}`);
    }
    return found;
  });
}
function web3FromAddress(address) {
  return __async(this, null, function* () {
    if (!web3EnablePromise) {
      return throwError("web3FromAddress");
    }
    const accounts = yield web3Accounts();
    let found;
    if (address) {
      const accountU8a = decodeAddress(address);
      found = accounts.find((account) => u8aEq(decodeAddress(account.address), accountU8a));
    }
    if (!found) {
      throw new Error(`web3FromAddress: Unable to find injected ${address}`);
    }
    return web3FromSource(found.meta.source);
  });
}
function web3ListRpcProviders(source) {
  return __async(this, null, function* () {
    const { provider } = yield web3FromSource(source);
    if (!provider) {
      console.warn(`Extension ${source} does not expose any provider`);
      return null;
    }
    return provider.listProviders();
  });
}
function web3UseRpcProvider(source, key) {
  return __async(this, null, function* () {
    const { provider } = yield web3FromSource(source);
    if (!provider) {
      throw new Error(`Extension ${source} does not expose any provider`);
    }
    const meta = yield provider.startProvider(key);
    return { meta, provider };
  });
}
export {
  isWeb3Injected,
  packageInfo,
  unwrapBytes,
  web3Accounts,
  web3AccountsSubscribe,
  web3Enable,
  web3EnablePromise,
  web3FromAddress,
  web3FromSource,
  web3ListRpcProviders,
  web3UseRpcProvider,
  wrapBytes
};
//# sourceMappingURL=@polkadot_extension-dapp.js.map
