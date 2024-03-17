import {
  Keyring
} from "./chunk-ZF6Y3YKS.js";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subscription,
  asapScheduler,
  catchError,
  combineLatest,
  distinctUntilChanged,
  first,
  firstValueFrom,
  from,
  map,
  mergeMap,
  of,
  publishReplay,
  refCount,
  startWith,
  switchMap,
  tap,
  toArray
} from "./chunk-Y5MJI5EI.js";
import {
  blake2AsHex,
  blake2AsU8a,
  cryptoWaitReady,
  decodeAddress,
  encodeAddress,
  ethereumEncode,
  isEthereumAddress,
  selectableNetworks,
  xxhashAsU8a
} from "./chunk-2MRYR5WN.js";
import {
  BN_BILLION,
  BN_HUNDRED,
  BN_MILLION,
  BN_ONE,
  BN_QUINTILL,
  BN_ZERO,
  arrayChunk,
  arrayFlatten,
  assertReturn,
  assertUnreachable,
  bnMax,
  bnMin,
  bnSqrt,
  bnToBn,
  bnToHex,
  bnToU8a,
  compactAddLength,
  compactFromU8a,
  compactFromU8aLim,
  compactStripLength,
  compactToU8a,
  detectPackage,
  floatToU8a,
  formatBalance,
  formatNumber,
  hexToBn,
  hexToU8a,
  identity,
  import_bn,
  isAscii,
  isBigInt,
  isBn,
  isBoolean,
  isChildClass,
  isCodec,
  isCompact,
  isError,
  isFunction,
  isHex,
  isNull,
  isNumber,
  isObject,
  isString,
  isU8a,
  isUndefined,
  isUtf8,
  lazyMethod,
  lazyMethods,
  logger,
  memoize,
  nextTick,
  noop,
  objectClear,
  objectProperties,
  objectProperty,
  objectSpread,
  stringCamelCase,
  stringPascalCase,
  stringToHex,
  stringToU8a,
  stringUpperFirst,
  stringify,
  u8aConcat,
  u8aConcatStrict,
  u8aEq,
  u8aToBn,
  u8aToFloat,
  u8aToHex,
  u8aToNumber,
  u8aToString,
  u8aToU8a,
  xglobal
} from "./chunk-5VGPNYA4.js";
import {
  __async,
  __commonJS,
  __export,
  __spreadProps,
  __spreadValues,
  __superGet,
  __toESM
} from "./chunk-QMAMURKP.js";

// node_modules/@polkadot/rpc-provider/node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/@polkadot/rpc-provider/node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix2 = "~";
    function Events2() {
    }
    if (Object.create) {
      Events2.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events2().__proto__)
        prefix2 = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix2 ? prefix2 + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events2();
      else
        delete emitter._events[evt];
    }
    function EventEmitter3() {
      this._events = new Events2();
      this._eventsCount = 0;
    }
    EventEmitter3.prototype.eventNames = function eventNames() {
      var names = [], events2, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events2 = this._events) {
        if (has.call(events2, name))
          names.push(prefix2 ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events2));
      }
      return names;
    };
    EventEmitter3.prototype.listeners = function listeners(event) {
      var evt = prefix2 ? prefix2 + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l15 = handlers.length, ee = new Array(l15); i < l15; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter3.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix2 ? prefix2 + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter3.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix2 ? prefix2 + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter3.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter3.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter3.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix2 ? prefix2 + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events2 = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events2.push(listeners[i]);
          }
        }
        if (events2.length)
          this._events[evt] = events2.length === 1 ? events2[0] : events2;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter3.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix2 ? prefix2 + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events2();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter3.prototype.off = EventEmitter3.prototype.removeListener;
    EventEmitter3.prototype.addListener = EventEmitter3.prototype.on;
    EventEmitter3.prefixed = prefix2;
    EventEmitter3.EventEmitter = EventEmitter3;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter3;
    }
  }
});

// node_modules/@polkadot/api/node_modules/eventemitter3/index.js
var require_eventemitter32 = __commonJS({
  "node_modules/@polkadot/api/node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix2 = "~";
    function Events2() {
    }
    if (Object.create) {
      Events2.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events2().__proto__)
        prefix2 = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once), evt = prefix2 ? prefix2 + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events2();
      else
        delete emitter._events[evt];
    }
    function EventEmitter3() {
      this._events = new Events2();
      this._eventsCount = 0;
    }
    EventEmitter3.prototype.eventNames = function eventNames() {
      var names = [], events2, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events2 = this._events) {
        if (has.call(events2, name))
          names.push(prefix2 ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events2));
      }
      return names;
    };
    EventEmitter3.prototype.listeners = function listeners(event) {
      var evt = prefix2 ? prefix2 + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l15 = handlers.length, ee = new Array(l15); i < l15; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter3.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix2 ? prefix2 + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter3.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix2 ? prefix2 + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter3.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter3.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter3.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix2 ? prefix2 + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events2 = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events2.push(listeners[i]);
          }
        }
        if (events2.length)
          this._events[evt] = events2.length === 1 ? events2[0] : events2;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter3.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix2 ? prefix2 + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events2();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter3.prototype.off = EventEmitter3.prototype.removeListener;
    EventEmitter3.prototype.addListener = EventEmitter3.prototype.on;
    EventEmitter3.prefixed = prefix2;
    EventEmitter3.EventEmitter = EventEmitter3;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter3;
    }
  }
});

// node_modules/@polkadot/api-derive/packageInfo.js
var packageInfo = { name: "@polkadot/api-derive", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "10.12.2" };

// node_modules/@polkadot/rpc-core/packageInfo.js
var packageInfo2 = { name: "@polkadot/rpc-core", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "10.12.2" };

// node_modules/@polkadot/rpc-provider/packageInfo.js
var packageInfo3 = { name: "@polkadot/rpc-provider", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "10.12.2" };

// node_modules/@polkadot/types/packageInfo.js
var packageInfo4 = { name: "@polkadot/types", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "10.12.2" };

// node_modules/@polkadot/types-known/packageInfo.js
var packageInfo5 = { name: "@polkadot/types-known", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "10.12.2" };

// node_modules/@polkadot/api/packageInfo.js
var packageInfo6 = { name: "@polkadot/api", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "10.12.2" };

// node_modules/@polkadot/api/packageDetect.js
detectPackage(packageInfo6, null, [packageInfo2, packageInfo, packageInfo5, packageInfo3, packageInfo4]);

// node_modules/@polkadot/rpc-augment/packageInfo.js
var packageInfo7 = { name: "@polkadot/rpc-augment", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "10.12.2" };

// node_modules/@polkadot/rpc-augment/packageDetect.js
detectPackage(packageInfo7, null, [packageInfo2, packageInfo4]);

// node_modules/@polkadot/rpc-provider/packageDetect.js
detectPackage(packageInfo3, null, [packageInfo4]);

// node_modules/@polkadot/x-fetch/packageInfo.js
var packageInfo8 = { name: "@polkadot/x-fetch", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "12.6.2" };

// node_modules/@polkadot/x-fetch/browser.js
var fetch = xglobal.fetch;

// node_modules/@polkadot/rpc-provider/coder/error.js
var UNKNOWN = -99999;
function extend(that, name, value) {
  Object.defineProperty(that, name, {
    configurable: true,
    enumerable: false,
    value
  });
}
var RpcError = class extends Error {
  code;
  data;
  message;
  name;
  stack;
  constructor(message = "", code = UNKNOWN, data) {
    super();
    extend(this, "message", String(message));
    extend(this, "name", this.constructor.name);
    extend(this, "data", data);
    extend(this, "code", code);
    if (isFunction(Error.captureStackTrace)) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      const { stack } = new Error(message);
      stack && extend(this, "stack", stack);
    }
  }
  static CODES = {
    ASSERT: -90009,
    INVALID_JSONRPC: -99998,
    METHOD_NOT_FOUND: -32601,
    // Rust client
    UNKNOWN
  };
};

// node_modules/@polkadot/rpc-provider/coder/index.js
function formatErrorData(data) {
  if (isUndefined(data)) {
    return "";
  }
  const formatted = `: ${isString(data) ? data.replace(/Error\("/g, "").replace(/\("/g, "(").replace(/"\)/g, ")").replace(/\(/g, ", ").replace(/\)/g, "") : stringify(data)}`;
  return formatted.length <= 256 ? formatted : `${formatted.substring(0, 255)}…`;
}
function checkError(error) {
  if (error) {
    const { code, data, message } = error;
    throw new RpcError(`${code}: ${message}${formatErrorData(data)}`, code, data);
  }
}
var RpcCoder = class {
  __internal__id = 0;
  decodeResponse(response) {
    if (!response || response.jsonrpc !== "2.0") {
      throw new Error("Invalid jsonrpc field in decoded object");
    }
    const isSubscription = !isUndefined(response.params) && !isUndefined(response.method);
    if (!isNumber(response.id) && (!isSubscription || !isNumber(response.params.subscription) && !isString(response.params.subscription))) {
      throw new Error("Invalid id field in decoded object");
    }
    checkError(response.error);
    if (response.result === void 0 && !isSubscription) {
      throw new Error("No result found in jsonrpc response");
    }
    if (isSubscription) {
      checkError(response.params.error);
      return response.params.result;
    }
    return response.result;
  }
  encodeJson(method, params) {
    const [id, data] = this.encodeObject(method, params);
    return [id, stringify(data)];
  }
  encodeObject(method, params) {
    const id = ++this.__internal__id;
    return [id, {
      id,
      jsonrpc: "2.0",
      method,
      params
    }];
  }
};

// node_modules/@polkadot/rpc-provider/defaults.js
var HTTP_URL = "http://127.0.0.1:9933";
var WS_URL = "ws://127.0.0.1:9944";
var defaults_default = {
  HTTP_URL,
  WS_URL
};

// node_modules/@polkadot/rpc-provider/lru.js
var DEFAULT_CAPACITY = 128;
var LRUNode = class {
  key;
  next;
  prev;
  constructor(key) {
    this.key = key;
    this.next = this.prev = this;
  }
};
var LRUCache = class {
  capacity;
  __internal__data = /* @__PURE__ */ new Map();
  __internal__refs = /* @__PURE__ */ new Map();
  __internal__length = 0;
  __internal__head;
  __internal__tail;
  constructor(capacity = DEFAULT_CAPACITY) {
    this.capacity = capacity;
    this.__internal__head = this.__internal__tail = new LRUNode("<empty>");
  }
  get length() {
    return this.__internal__length;
  }
  get lengthData() {
    return this.__internal__data.size;
  }
  get lengthRefs() {
    return this.__internal__refs.size;
  }
  entries() {
    const keys2 = this.keys();
    const count = keys2.length;
    const entries = new Array(count);
    for (let i = 0; i < count; i++) {
      const key = keys2[i];
      entries[i] = [key, this.__internal__data.get(key)];
    }
    return entries;
  }
  keys() {
    const keys2 = [];
    if (this.__internal__length) {
      let curr = this.__internal__head;
      while (curr !== this.__internal__tail) {
        keys2.push(curr.key);
        curr = curr.next;
      }
      keys2.push(curr.key);
    }
    return keys2;
  }
  get(key) {
    const data = this.__internal__data.get(key);
    if (data) {
      this.__internal__toHead(key);
      return data;
    }
    return null;
  }
  set(key, value) {
    if (this.__internal__data.has(key)) {
      this.__internal__toHead(key);
    } else {
      const node = new LRUNode(key);
      this.__internal__refs.set(node.key, node);
      if (this.length === 0) {
        this.__internal__head = this.__internal__tail = node;
      } else {
        this.__internal__head.prev = node;
        node.next = this.__internal__head;
        this.__internal__head = node;
      }
      if (this.__internal__length === this.capacity) {
        this.__internal__data.delete(this.__internal__tail.key);
        this.__internal__refs.delete(this.__internal__tail.key);
        this.__internal__tail = this.__internal__tail.prev;
        this.__internal__tail.next = this.__internal__head;
      } else {
        this.__internal__length += 1;
      }
    }
    this.__internal__data.set(key, value);
  }
  __internal__toHead(key) {
    const ref = this.__internal__refs.get(key);
    if (ref && ref !== this.__internal__head) {
      ref.prev.next = ref.next;
      ref.next.prev = ref.prev;
      ref.next = this.__internal__head;
      this.__internal__head.prev = ref;
      this.__internal__head = ref;
    }
  }
};

// node_modules/@polkadot/rpc-provider/http/index.js
var ERROR_SUBSCRIBE = "HTTP Provider does not have subscriptions, use WebSockets instead";
var l = logger("api-http");
var HttpProvider = class _HttpProvider {
  __internal__callCache = new LRUCache();
  __internal__coder;
  __internal__endpoint;
  __internal__headers;
  __internal__stats;
  /**
   * @param {string} endpoint The endpoint url starting with http://
   */
  constructor(endpoint = defaults_default.HTTP_URL, headers = {}) {
    if (!/^(https|http):\/\//.test(endpoint)) {
      throw new Error(`Endpoint should start with 'http://' or 'https://', received '${endpoint}'`);
    }
    this.__internal__coder = new RpcCoder();
    this.__internal__endpoint = endpoint;
    this.__internal__headers = headers;
    this.__internal__stats = {
      active: { requests: 0, subscriptions: 0 },
      total: { bytesRecv: 0, bytesSent: 0, cached: 0, errors: 0, requests: 0, subscriptions: 0, timeout: 0 }
    };
  }
  /**
   * @summary `true` when this provider supports subscriptions
   */
  get hasSubscriptions() {
    return false;
  }
  /**
   * @description Returns a clone of the object
   */
  clone() {
    return new _HttpProvider(this.__internal__endpoint, this.__internal__headers);
  }
  /**
   * @description Manually connect from the connection
   */
  connect() {
    return __async(this, null, function* () {
    });
  }
  /**
   * @description Manually disconnect from the connection
   */
  disconnect() {
    return __async(this, null, function* () {
    });
  }
  /**
   * @description Returns the connection stats
   */
  get stats() {
    return this.__internal__stats;
  }
  /**
   * @summary `true` when this provider supports clone()
   */
  get isClonable() {
    return true;
  }
  /**
   * @summary Whether the node is connected or not.
   * @return {boolean} true if connected
   */
  get isConnected() {
    return true;
  }
  /**
   * @summary Events are not supported with the HttpProvider, see [[WsProvider]].
   * @description HTTP Provider does not have 'on' emitters. WebSockets should be used instead.
   */
  on(_type, _sub) {
    l.error("HTTP Provider does not have 'on' emitters, use WebSockets instead");
    return noop;
  }
  /**
   * @summary Send HTTP POST Request with Body to configured HTTP Endpoint.
   */
  send(method, params, isCacheable) {
    return __async(this, null, function* () {
      this.__internal__stats.total.requests++;
      const [, body] = this.__internal__coder.encodeJson(method, params);
      const cacheKey = isCacheable ? `${method}::${stringify(params)}` : "";
      let resultPromise = isCacheable ? this.__internal__callCache.get(cacheKey) : null;
      if (!resultPromise) {
        resultPromise = this.__internal__send(body);
        if (isCacheable) {
          this.__internal__callCache.set(cacheKey, resultPromise);
        }
      } else {
        this.__internal__stats.total.cached++;
      }
      return resultPromise;
    });
  }
  __internal__send(body) {
    return __async(this, null, function* () {
      this.__internal__stats.active.requests++;
      this.__internal__stats.total.bytesSent += body.length;
      try {
        const response = yield fetch(this.__internal__endpoint, {
          body,
          headers: __spreadValues({
            Accept: "application/json",
            "Content-Length": `${body.length}`,
            "Content-Type": "application/json"
          }, this.__internal__headers),
          method: "POST"
        });
        if (!response.ok) {
          throw new Error(`[${response.status}]: ${response.statusText}`);
        }
        const result = yield response.text();
        this.__internal__stats.total.bytesRecv += result.length;
        const decoded = this.__internal__coder.decodeResponse(JSON.parse(result));
        this.__internal__stats.active.requests--;
        return decoded;
      } catch (e) {
        this.__internal__stats.active.requests--;
        this.__internal__stats.total.errors++;
        throw e;
      }
    });
  }
  /**
   * @summary Subscriptions are not supported with the HttpProvider, see [[WsProvider]].
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  subscribe(_types, _method, _params, _cb) {
    return __async(this, null, function* () {
      l.error(ERROR_SUBSCRIBE);
      throw new Error(ERROR_SUBSCRIBE);
    });
  }
  /**
   * @summary Subscriptions are not supported with the HttpProvider, see [[WsProvider]].
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  unsubscribe(_type, _method, _id) {
    return __async(this, null, function* () {
      l.error(ERROR_SUBSCRIBE);
      throw new Error(ERROR_SUBSCRIBE);
    });
  }
};

// node_modules/@polkadot/rpc-provider/node_modules/eventemitter3/index.mjs
var import_index = __toESM(require_eventemitter3(), 1);

// node_modules/@polkadot/rpc-provider/substrate-connect/Health.js
function healthChecker() {
  let checker = null;
  let sendJsonRpc = null;
  return {
    responsePassThrough: (jsonRpcResponse) => {
      if (checker === null) {
        return jsonRpcResponse;
      }
      return checker.responsePassThrough(jsonRpcResponse);
    },
    sendJsonRpc: (request) => {
      if (!sendJsonRpc) {
        throw new Error("setSendJsonRpc must be called before sending requests");
      }
      if (checker === null) {
        sendJsonRpc(request);
      } else {
        checker.sendJsonRpc(request);
      }
    },
    setSendJsonRpc: (cb) => {
      sendJsonRpc = cb;
    },
    start: (healthCallback) => {
      if (checker !== null) {
        throw new Error("Can't start the health checker multiple times in parallel");
      } else if (!sendJsonRpc) {
        throw new Error("setSendJsonRpc must be called before starting the health checks");
      }
      checker = new InnerChecker(healthCallback, sendJsonRpc);
      checker.update(true);
    },
    stop: () => {
      if (checker === null) {
        return;
      }
      checker.destroy();
      checker = null;
    }
  };
}
var InnerChecker = class {
  __internal__healthCallback;
  __internal__currentHealthCheckId = null;
  __internal__currentHealthTimeout = null;
  __internal__currentSubunsubRequestId = null;
  __internal__currentSubscriptionId = null;
  __internal__requestToSmoldot;
  __internal__isSyncing = false;
  __internal__nextRequestId = 0;
  constructor(healthCallback, requestToSmoldot) {
    this.__internal__healthCallback = healthCallback;
    this.__internal__requestToSmoldot = (request) => requestToSmoldot(stringify(request));
  }
  sendJsonRpc = (request) => {
    let parsedRequest;
    try {
      parsedRequest = JSON.parse(request);
    } catch {
      return;
    }
    if (parsedRequest.id) {
      const newId = "extern:" + stringify(parsedRequest.id);
      parsedRequest.id = newId;
    }
    this.__internal__requestToSmoldot(parsedRequest);
  };
  responsePassThrough = (jsonRpcResponse) => {
    let parsedResponse;
    try {
      parsedResponse = JSON.parse(jsonRpcResponse);
    } catch {
      return jsonRpcResponse;
    }
    if (parsedResponse.id && this.__internal__currentHealthCheckId === parsedResponse.id) {
      this.__internal__currentHealthCheckId = null;
      if (!parsedResponse.result) {
        this.update(false);
        return null;
      }
      this.__internal__healthCallback(parsedResponse.result);
      this.__internal__isSyncing = parsedResponse.result.isSyncing;
      this.update(false);
      return null;
    }
    if (parsedResponse.id && this.__internal__currentSubunsubRequestId === parsedResponse.id) {
      this.__internal__currentSubunsubRequestId = null;
      if (!parsedResponse.result) {
        this.update(false);
        return null;
      }
      if (this.__internal__currentSubscriptionId) {
        this.__internal__currentSubscriptionId = null;
      } else {
        this.__internal__currentSubscriptionId = parsedResponse.result;
      }
      this.update(false);
      return null;
    }
    if (parsedResponse.params && this.__internal__currentSubscriptionId && parsedResponse.params.subscription === this.__internal__currentSubscriptionId) {
      this.update(true);
      return null;
    }
    if (parsedResponse.id) {
      const id = parsedResponse.id;
      if (!id.startsWith("extern:")) {
        throw new Error("State inconsistency in health checker");
      }
      const newId = JSON.parse(id.slice("extern:".length));
      parsedResponse.id = newId;
    }
    return stringify(parsedResponse);
  };
  update = (startNow) => {
    if (startNow && this.__internal__currentHealthTimeout) {
      clearTimeout(this.__internal__currentHealthTimeout);
      this.__internal__currentHealthTimeout = null;
    }
    if (!this.__internal__currentHealthTimeout) {
      const startHealthRequest = () => {
        this.__internal__currentHealthTimeout = null;
        if (this.__internal__currentHealthCheckId) {
          return;
        }
        this.__internal__currentHealthCheckId = `health-checker:${this.__internal__nextRequestId}`;
        this.__internal__nextRequestId += 1;
        this.__internal__requestToSmoldot({
          id: this.__internal__currentHealthCheckId,
          jsonrpc: "2.0",
          method: "system_health",
          params: []
        });
      };
      if (startNow) {
        startHealthRequest();
      } else {
        this.__internal__currentHealthTimeout = setTimeout(startHealthRequest, 1e3);
      }
    }
    if (this.__internal__isSyncing && !this.__internal__currentSubscriptionId && !this.__internal__currentSubunsubRequestId) {
      this.startSubscription();
    }
    if (!this.__internal__isSyncing && this.__internal__currentSubscriptionId && !this.__internal__currentSubunsubRequestId) {
      this.endSubscription();
    }
  };
  startSubscription = () => {
    if (this.__internal__currentSubunsubRequestId || this.__internal__currentSubscriptionId) {
      throw new Error("Internal error in health checker");
    }
    this.__internal__currentSubunsubRequestId = `health-checker:${this.__internal__nextRequestId}`;
    this.__internal__nextRequestId += 1;
    this.__internal__requestToSmoldot({
      id: this.__internal__currentSubunsubRequestId,
      jsonrpc: "2.0",
      method: "chain_subscribeNewHeads",
      params: []
    });
  };
  endSubscription = () => {
    if (this.__internal__currentSubunsubRequestId || !this.__internal__currentSubscriptionId) {
      throw new Error("Internal error in health checker");
    }
    this.__internal__currentSubunsubRequestId = `health-checker:${this.__internal__nextRequestId}`;
    this.__internal__nextRequestId += 1;
    this.__internal__requestToSmoldot({
      id: this.__internal__currentSubunsubRequestId,
      jsonrpc: "2.0",
      method: "chain_unsubscribeNewHeads",
      params: [this.__internal__currentSubscriptionId]
    });
  };
  destroy = () => {
    if (this.__internal__currentHealthTimeout) {
      clearTimeout(this.__internal__currentHealthTimeout);
      this.__internal__currentHealthTimeout = null;
    }
  };
};

// node_modules/@polkadot/rpc-provider/substrate-connect/index.js
var l2 = logger("api-substrate-connect");
var subscriptionUnsubscriptionMethods = /* @__PURE__ */ new Map([
  ["author_submitAndWatchExtrinsic", "author_unwatchExtrinsic"],
  ["chain_subscribeAllHeads", "chain_unsubscribeAllHeads"],
  ["chain_subscribeFinalizedHeads", "chain_unsubscribeFinalizedHeads"],
  ["chain_subscribeFinalisedHeads", "chain_subscribeFinalisedHeads"],
  ["chain_subscribeNewHeads", "chain_unsubscribeNewHeads"],
  ["chain_subscribeNewHead", "chain_unsubscribeNewHead"],
  ["chain_subscribeRuntimeVersion", "chain_unsubscribeRuntimeVersion"],
  ["subscribe_newHead", "unsubscribe_newHead"],
  ["state_subscribeRuntimeVersion", "state_unsubscribeRuntimeVersion"],
  ["state_subscribeStorage", "state_unsubscribeStorage"]
]);
var scClients = /* @__PURE__ */ new WeakMap();
var ScProvider = class {
  __internal__Sc;
  __internal__coder = new RpcCoder();
  __internal__spec;
  __internal__sharedSandbox;
  __internal__subscriptions = /* @__PURE__ */ new Map();
  __internal__resubscribeMethods = /* @__PURE__ */ new Map();
  __internal__requests = /* @__PURE__ */ new Map();
  __internal__wellKnownChains;
  __internal__eventemitter = new import_index.default();
  __internal__chain = null;
  __internal__isChainReady = false;
  constructor(Sc, spec2, sharedSandbox) {
    if (!isObject(Sc) || !isObject(Sc.WellKnownChain) || !isFunction(Sc.createScClient)) {
      throw new Error("Expected an @substrate/connect interface as first parameter to ScProvider");
    }
    this.__internal__Sc = Sc;
    this.__internal__spec = spec2;
    this.__internal__sharedSandbox = sharedSandbox;
    this.__internal__wellKnownChains = new Set(Object.values(Sc.WellKnownChain));
  }
  get hasSubscriptions() {
    return true;
  }
  get isClonable() {
    return false;
  }
  get isConnected() {
    return !!this.__internal__chain && this.__internal__isChainReady;
  }
  clone() {
    throw new Error("clone() is not supported.");
  }
  // Config details can be found in @substrate/connect repo following the link:
  // https://github.com/paritytech/substrate-connect/blob/main/packages/connect/src/connector/index.ts
  connect(_0) {
    return __async(this, arguments, function* (config, checkerFactory = healthChecker) {
      if (this.isConnected) {
        throw new Error("Already connected!");
      }
      if (this.__internal__chain) {
        yield this.__internal__chain;
        return;
      }
      if (this.__internal__sharedSandbox && !this.__internal__sharedSandbox.isConnected) {
        yield this.__internal__sharedSandbox.connect();
      }
      const client = this.__internal__sharedSandbox ? scClients.get(this.__internal__sharedSandbox) : this.__internal__Sc.createScClient(config);
      if (!client) {
        throw new Error("Unkown ScProvider!");
      }
      scClients.set(this, client);
      const hc = checkerFactory();
      const onResponse = (res) => {
        const hcRes = hc.responsePassThrough(res);
        if (!hcRes) {
          return;
        }
        const response = JSON.parse(hcRes);
        let decodedResponse;
        try {
          decodedResponse = this.__internal__coder.decodeResponse(response);
        } catch (e) {
          decodedResponse = e;
        }
        if (response.params?.subscription === void 0 || !response.method) {
          return this.__internal__requests.get(response.id)?.(decodedResponse);
        }
        const subscriptionId = `${response.method}::${response.params.subscription}`;
        const callback = this.__internal__subscriptions.get(subscriptionId)?.[0];
        callback?.(decodedResponse);
      };
      const addChain = this.__internal__sharedSandbox ? (...args) => __async(this, null, function* () {
        const source = this.__internal__sharedSandbox;
        return (yield source.__internal__chain).addChain(...args);
      }) : this.__internal__wellKnownChains.has(this.__internal__spec) ? client.addWellKnownChain : client.addChain;
      this.__internal__chain = addChain(this.__internal__spec, onResponse).then((chain) => {
        hc.setSendJsonRpc(chain.sendJsonRpc);
        this.__internal__isChainReady = false;
        const cleanup = () => {
          const disconnectionError = new Error("Disconnected");
          this.__internal__requests.forEach((cb) => cb(disconnectionError));
          this.__internal__subscriptions.forEach(([cb]) => cb(disconnectionError));
          this.__internal__subscriptions.clear();
        };
        const staleSubscriptions = [];
        const killStaleSubscriptions = () => {
          if (staleSubscriptions.length === 0) {
            return;
          }
          const stale = staleSubscriptions.pop();
          if (!stale) {
            throw new Error("Unable to get stale subscription");
          }
          const { id, unsubscribeMethod } = stale;
          Promise.race([
            this.send(unsubscribeMethod, [id]).catch(noop),
            new Promise((resolve) => setTimeout(resolve, 500))
          ]).then(killStaleSubscriptions).catch(noop);
        };
        hc.start((health) => {
          const isReady = !health.isSyncing && (health.peers > 0 || !health.shouldHavePeers);
          if (this.__internal__isChainReady === isReady) {
            return;
          }
          this.__internal__isChainReady = isReady;
          if (!isReady) {
            [...this.__internal__subscriptions.values()].forEach((s) => {
              staleSubscriptions.push(s[1]);
            });
            cleanup();
            this.__internal__eventemitter.emit("disconnected");
          } else {
            killStaleSubscriptions();
            this.__internal__eventemitter.emit("connected");
            if (this.__internal__resubscribeMethods.size) {
              this.__internal__resubscribe();
            }
          }
        });
        return objectSpread({}, chain, {
          remove: () => {
            hc.stop();
            chain.remove();
            cleanup();
          },
          sendJsonRpc: hc.sendJsonRpc.bind(hc)
        });
      });
      try {
        yield this.__internal__chain;
      } catch (e) {
        this.__internal__chain = null;
        this.__internal__eventemitter.emit("error", e);
        throw e;
      }
    });
  }
  __internal__resubscribe = () => {
    const promises = [];
    this.__internal__resubscribeMethods.forEach((subDetails) => {
      if (subDetails.type.startsWith("author_")) {
        return;
      }
      try {
        const promise = new Promise((resolve) => {
          this.subscribe(subDetails.type, subDetails.method, subDetails.params, subDetails.callback).catch((error) => console.log(error));
          resolve();
        });
        promises.push(promise);
      } catch (error) {
        l2.error(error);
      }
    });
    Promise.all(promises).catch((err) => l2.log(err));
  };
  disconnect() {
    return __async(this, null, function* () {
      if (!this.__internal__chain) {
        return;
      }
      const chain = yield this.__internal__chain;
      this.__internal__chain = null;
      this.__internal__isChainReady = false;
      try {
        chain.remove();
      } catch (_) {
      }
      this.__internal__eventemitter.emit("disconnected");
    });
  }
  on(type, sub) {
    if (type === "connected" && this.isConnected) {
      sub();
    }
    this.__internal__eventemitter.on(type, sub);
    return () => {
      this.__internal__eventemitter.removeListener(type, sub);
    };
  }
  send(method, params) {
    return __async(this, null, function* () {
      if (!this.isConnected || !this.__internal__chain) {
        throw new Error("Provider is not connected");
      }
      const chain = yield this.__internal__chain;
      const [id, json] = this.__internal__coder.encodeJson(method, params);
      const result = new Promise((resolve, reject) => {
        this.__internal__requests.set(id, (response) => {
          (isError(response) ? reject : resolve)(response);
        });
        try {
          chain.sendJsonRpc(json);
        } catch (e) {
          this.__internal__chain = null;
          try {
            chain.remove();
          } catch (_) {
          }
          this.__internal__eventemitter.emit("error", e);
        }
      });
      try {
        return yield result;
      } finally {
        this.__internal__requests.delete(id);
      }
    });
  }
  subscribe(type, method, params, callback) {
    return __async(this, null, function* () {
      if (!subscriptionUnsubscriptionMethods.has(method)) {
        throw new Error(`Unsupported subscribe method: ${method}`);
      }
      const id = yield this.send(method, params);
      const subscriptionId = `${type}::${id}`;
      const cb = (response) => {
        if (response instanceof Error) {
          callback(response, void 0);
        } else {
          callback(null, response);
        }
      };
      const unsubscribeMethod = subscriptionUnsubscriptionMethods.get(method);
      if (!unsubscribeMethod) {
        throw new Error("Invalid unsubscribe method found");
      }
      this.__internal__resubscribeMethods.set(subscriptionId, { callback, method, params, type });
      this.__internal__subscriptions.set(subscriptionId, [cb, { id, unsubscribeMethod }]);
      return id;
    });
  }
  unsubscribe(type, method, id) {
    if (!this.isConnected) {
      throw new Error("Provider is not connected");
    }
    const subscriptionId = `${type}::${id}`;
    if (!this.__internal__subscriptions.has(subscriptionId)) {
      return Promise.reject(new Error(`Unable to find active subscription=${subscriptionId}`));
    }
    this.__internal__resubscribeMethods.delete(subscriptionId);
    this.__internal__subscriptions.delete(subscriptionId);
    return this.send(method, [id]);
  }
};

// node_modules/@polkadot/x-ws/packageInfo.js
var packageInfo9 = { name: "@polkadot/x-ws", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "12.6.2" };

// node_modules/@polkadot/x-ws/browser.js
var WebSocket = xglobal.WebSocket;

// node_modules/@polkadot/rpc-provider/ws/errors.js
var known = {
  1e3: "Normal Closure",
  1001: "Going Away",
  1002: "Protocol Error",
  1003: "Unsupported Data",
  1004: "(For future)",
  1005: "No Status Received",
  1006: "Abnormal Closure",
  1007: "Invalid frame payload data",
  1008: "Policy Violation",
  1009: "Message too big",
  1010: "Missing Extension",
  1011: "Internal Error",
  1012: "Service Restart",
  1013: "Try Again Later",
  1014: "Bad Gateway",
  1015: "TLS Handshake"
};
function getWSErrorString(code) {
  if (code >= 0 && code <= 999) {
    return "(Unused)";
  } else if (code >= 1016) {
    if (code <= 1999) {
      return "(For WebSocket standard)";
    } else if (code <= 2999) {
      return "(For WebSocket extensions)";
    } else if (code <= 3999) {
      return "(For libraries and frameworks)";
    } else if (code <= 4999) {
      return "(For applications)";
    }
  }
  return known[code] || "(Unknown)";
}

// node_modules/@polkadot/rpc-provider/ws/index.js
var ALIASES = {
  chain_finalisedHead: "chain_finalizedHead",
  chain_subscribeFinalisedHeads: "chain_subscribeFinalizedHeads",
  chain_unsubscribeFinalisedHeads: "chain_unsubscribeFinalizedHeads"
};
var RETRY_DELAY = 2500;
var DEFAULT_TIMEOUT_MS = 60 * 1e3;
var TIMEOUT_INTERVAL = 5e3;
var l3 = logger("api-ws");
function eraseRecord(record, cb) {
  Object.keys(record).forEach((key) => {
    if (cb) {
      cb(record[key]);
    }
    delete record[key];
  });
}
function defaultEndpointStats() {
  return { bytesRecv: 0, bytesSent: 0, cached: 0, errors: 0, requests: 0, subscriptions: 0, timeout: 0 };
}
var WsProvider = class _WsProvider {
  __internal__callCache;
  __internal__coder;
  __internal__endpoints;
  __internal__headers;
  __internal__eventemitter;
  __internal__handlers = {};
  __internal__isReadyPromise;
  __internal__stats;
  __internal__waitingForId = {};
  __internal__autoConnectMs;
  __internal__endpointIndex;
  __internal__endpointStats;
  __internal__isConnected = false;
  __internal__subscriptions = {};
  __internal__timeoutId = null;
  __internal__websocket;
  __internal__timeout;
  /**
   * @param {string | string[]}  endpoint    The endpoint url. Usually `ws://ip:9944` or `wss://ip:9944`, may provide an array of endpoint strings.
   * @param {number | false} autoConnectMs Whether to connect automatically or not (default). Provided value is used as a delay between retries.
   * @param {Record<string, string>} headers The headers provided to the underlying WebSocket
   * @param {number} [timeout] Custom timeout value used per request . Defaults to `DEFAULT_TIMEOUT_MS`
   */
  constructor(endpoint = defaults_default.WS_URL, autoConnectMs = RETRY_DELAY, headers = {}, timeout, cacheCapacity) {
    const endpoints = Array.isArray(endpoint) ? endpoint : [endpoint];
    if (endpoints.length === 0) {
      throw new Error("WsProvider requires at least one Endpoint");
    }
    endpoints.forEach((endpoint2) => {
      if (!/^(wss|ws):\/\//.test(endpoint2)) {
        throw new Error(`Endpoint should start with 'ws://', received '${endpoint2}'`);
      }
    });
    this.__internal__callCache = new LRUCache(cacheCapacity || DEFAULT_CAPACITY);
    this.__internal__eventemitter = new import_index.default();
    this.__internal__autoConnectMs = autoConnectMs || 0;
    this.__internal__coder = new RpcCoder();
    this.__internal__endpointIndex = -1;
    this.__internal__endpoints = endpoints;
    this.__internal__headers = headers;
    this.__internal__websocket = null;
    this.__internal__stats = {
      active: { requests: 0, subscriptions: 0 },
      total: defaultEndpointStats()
    };
    this.__internal__endpointStats = defaultEndpointStats();
    this.__internal__timeout = timeout || DEFAULT_TIMEOUT_MS;
    if (autoConnectMs && autoConnectMs > 0) {
      this.connectWithRetry().catch(noop);
    }
    this.__internal__isReadyPromise = new Promise((resolve) => {
      this.__internal__eventemitter.once("connected", () => {
        resolve(this);
      });
    });
  }
  /**
   * @summary `true` when this provider supports subscriptions
   */
  get hasSubscriptions() {
    return true;
  }
  /**
   * @summary `true` when this provider supports clone()
   */
  get isClonable() {
    return true;
  }
  /**
   * @summary Whether the node is connected or not.
   * @return {boolean} true if connected
   */
  get isConnected() {
    return this.__internal__isConnected;
  }
  /**
   * @description Promise that resolves the first time we are connected and loaded
   */
  get isReady() {
    return this.__internal__isReadyPromise;
  }
  get endpoint() {
    return this.__internal__endpoints[this.__internal__endpointIndex];
  }
  /**
   * @description Returns a clone of the object
   */
  clone() {
    return new _WsProvider(this.__internal__endpoints);
  }
  selectEndpointIndex(endpoints) {
    return (this.__internal__endpointIndex + 1) % endpoints.length;
  }
  /**
   * @summary Manually connect
   * @description The [[WsProvider]] connects automatically by default, however if you decided otherwise, you may
   * connect manually using this method.
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  connect() {
    return __async(this, null, function* () {
      if (this.__internal__websocket) {
        throw new Error("WebSocket is already connected");
      }
      try {
        this.__internal__endpointIndex = this.selectEndpointIndex(this.__internal__endpoints);
        this.__internal__websocket = typeof xglobal.WebSocket !== "undefined" && isChildClass(xglobal.WebSocket, WebSocket) ? new WebSocket(this.endpoint) : new WebSocket(this.endpoint, void 0, {
          headers: this.__internal__headers
        });
        if (this.__internal__websocket) {
          this.__internal__websocket.onclose = this.__internal__onSocketClose;
          this.__internal__websocket.onerror = this.__internal__onSocketError;
          this.__internal__websocket.onmessage = this.__internal__onSocketMessage;
          this.__internal__websocket.onopen = this.__internal__onSocketOpen;
        }
        this.__internal__timeoutId = setInterval(() => this.__internal__timeoutHandlers(), TIMEOUT_INTERVAL);
      } catch (error) {
        l3.error(error);
        this.__internal__emit("error", error);
        throw error;
      }
    });
  }
  /**
   * @description Connect, never throwing an error, but rather forcing a retry
   */
  connectWithRetry() {
    return __async(this, null, function* () {
      if (this.__internal__autoConnectMs > 0) {
        try {
          yield this.connect();
        } catch {
          setTimeout(() => {
            this.connectWithRetry().catch(noop);
          }, this.__internal__autoConnectMs);
        }
      }
    });
  }
  /**
   * @description Manually disconnect from the connection, clearing auto-connect logic
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  disconnect() {
    return __async(this, null, function* () {
      this.__internal__autoConnectMs = 0;
      try {
        if (this.__internal__websocket) {
          this.__internal__websocket.close(1e3);
        }
      } catch (error) {
        l3.error(error);
        this.__internal__emit("error", error);
        throw error;
      }
    });
  }
  /**
   * @description Returns the connection stats
   */
  get stats() {
    return {
      active: {
        requests: Object.keys(this.__internal__handlers).length,
        subscriptions: Object.keys(this.__internal__subscriptions).length
      },
      total: this.__internal__stats.total
    };
  }
  get endpointStats() {
    return this.__internal__endpointStats;
  }
  /**
   * @summary Listens on events after having subscribed using the [[subscribe]] function.
   * @param  {ProviderInterfaceEmitted} type Event
   * @param  {ProviderInterfaceEmitCb}  sub  Callback
   * @return unsubscribe function
   */
  on(type, sub) {
    this.__internal__eventemitter.on(type, sub);
    return () => {
      this.__internal__eventemitter.removeListener(type, sub);
    };
  }
  /**
   * @summary Send JSON data using WebSockets to configured HTTP Endpoint or queue.
   * @param method The RPC methods to execute
   * @param params Encoded parameters as applicable for the method
   * @param subscription Subscription details (internally used)
   */
  send(method, params, isCacheable, subscription) {
    this.__internal__endpointStats.requests++;
    this.__internal__stats.total.requests++;
    const [id, body] = this.__internal__coder.encodeJson(method, params);
    const cacheKey = isCacheable ? `${method}::${stringify(params)}` : "";
    let resultPromise = isCacheable ? this.__internal__callCache.get(cacheKey) : null;
    if (!resultPromise) {
      resultPromise = this.__internal__send(id, body, method, params, subscription);
      if (isCacheable) {
        this.__internal__callCache.set(cacheKey, resultPromise);
      }
    } else {
      this.__internal__endpointStats.cached++;
      this.__internal__stats.total.cached++;
    }
    return resultPromise;
  }
  __internal__send(id, body, method, params, subscription) {
    return __async(this, null, function* () {
      return new Promise((resolve, reject) => {
        try {
          if (!this.isConnected || this.__internal__websocket === null) {
            throw new Error("WebSocket is not connected");
          }
          const callback = (error, result) => {
            error ? reject(error) : resolve(result);
          };
          l3.debug(() => ["calling", method, body]);
          this.__internal__handlers[id] = {
            callback,
            method,
            params,
            start: Date.now(),
            subscription
          };
          const bytesSent = body.length;
          this.__internal__endpointStats.bytesSent += bytesSent;
          this.__internal__stats.total.bytesSent += bytesSent;
          this.__internal__websocket.send(body);
        } catch (error) {
          this.__internal__endpointStats.errors++;
          this.__internal__stats.total.errors++;
          reject(error);
        }
      });
    });
  }
  /**
   * @name subscribe
   * @summary Allows subscribing to a specific event.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * const provider = new WsProvider('ws://127.0.0.1:9944');
   * const rpc = new Rpc(provider);
   *
   * rpc.state.subscribeStorage([[storage.system.account, <Address>]], (_, values) => {
   *   console.log(values)
   * }).then((subscriptionId) => {
   *   console.log('balance changes subscription id: ', subscriptionId)
   * })
   * ```
   */
  subscribe(type, method, params, callback) {
    this.__internal__endpointStats.subscriptions++;
    this.__internal__stats.total.subscriptions++;
    return this.send(method, params, false, { callback, type });
  }
  /**
   * @summary Allows unsubscribing to subscriptions made with [[subscribe]].
   */
  unsubscribe(type, method, id) {
    return __async(this, null, function* () {
      const subscription = `${type}::${id}`;
      if (isUndefined(this.__internal__subscriptions[subscription])) {
        l3.debug(() => `Unable to find active subscription=${subscription}`);
        return false;
      }
      delete this.__internal__subscriptions[subscription];
      try {
        return this.isConnected && !isNull(this.__internal__websocket) ? this.send(method, [id]) : true;
      } catch {
        return false;
      }
    });
  }
  __internal__emit = (type, ...args) => {
    this.__internal__eventemitter.emit(type, ...args);
  };
  __internal__onSocketClose = (event) => {
    const error = new Error(`disconnected from ${this.endpoint}: ${event.code}:: ${event.reason || getWSErrorString(event.code)}`);
    if (this.__internal__autoConnectMs > 0) {
      l3.error(error.message);
    }
    this.__internal__isConnected = false;
    if (this.__internal__websocket) {
      this.__internal__websocket.onclose = null;
      this.__internal__websocket.onerror = null;
      this.__internal__websocket.onmessage = null;
      this.__internal__websocket.onopen = null;
      this.__internal__websocket = null;
    }
    if (this.__internal__timeoutId) {
      clearInterval(this.__internal__timeoutId);
      this.__internal__timeoutId = null;
    }
    eraseRecord(this.__internal__handlers, (h) => {
      try {
        h.callback(error, void 0);
      } catch (err) {
        l3.error(err);
      }
    });
    eraseRecord(this.__internal__waitingForId);
    this.__internal__endpointStats = defaultEndpointStats();
    this.__internal__emit("disconnected");
    if (this.__internal__autoConnectMs > 0) {
      setTimeout(() => {
        this.connectWithRetry().catch(noop);
      }, this.__internal__autoConnectMs);
    }
  };
  __internal__onSocketError = (error) => {
    l3.debug(() => ["socket error", error]);
    this.__internal__emit("error", error);
  };
  __internal__onSocketMessage = (message) => {
    l3.debug(() => ["received", message.data]);
    const bytesRecv = message.data.length;
    this.__internal__endpointStats.bytesRecv += bytesRecv;
    this.__internal__stats.total.bytesRecv += bytesRecv;
    const response = JSON.parse(message.data);
    return isUndefined(response.method) ? this.__internal__onSocketMessageResult(response) : this.__internal__onSocketMessageSubscribe(response);
  };
  __internal__onSocketMessageResult = (response) => {
    const handler = this.__internal__handlers[response.id];
    if (!handler) {
      l3.debug(() => `Unable to find handler for id=${response.id}`);
      return;
    }
    try {
      const { method, params, subscription } = handler;
      const result = this.__internal__coder.decodeResponse(response);
      handler.callback(null, result);
      if (subscription) {
        const subId = `${subscription.type}::${result}`;
        this.__internal__subscriptions[subId] = objectSpread({}, subscription, {
          method,
          params
        });
        if (this.__internal__waitingForId[subId]) {
          this.__internal__onSocketMessageSubscribe(this.__internal__waitingForId[subId]);
        }
      }
    } catch (error) {
      this.__internal__endpointStats.errors++;
      this.__internal__stats.total.errors++;
      handler.callback(error, void 0);
    }
    delete this.__internal__handlers[response.id];
  };
  __internal__onSocketMessageSubscribe = (response) => {
    if (!response.method) {
      throw new Error("No method found in JSONRPC response");
    }
    const method = ALIASES[response.method] || response.method;
    const subId = `${method}::${response.params.subscription}`;
    const handler = this.__internal__subscriptions[subId];
    if (!handler) {
      this.__internal__waitingForId[subId] = response;
      l3.debug(() => `Unable to find handler for subscription=${subId}`);
      return;
    }
    delete this.__internal__waitingForId[subId];
    try {
      const result = this.__internal__coder.decodeResponse(response);
      handler.callback(null, result);
    } catch (error) {
      this.__internal__endpointStats.errors++;
      this.__internal__stats.total.errors++;
      handler.callback(error, void 0);
    }
  };
  __internal__onSocketOpen = () => {
    if (this.__internal__websocket === null) {
      throw new Error("WebSocket cannot be null in onOpen");
    }
    l3.debug(() => ["connected to", this.endpoint]);
    this.__internal__isConnected = true;
    this.__internal__resubscribe();
    this.__internal__emit("connected");
    return true;
  };
  __internal__resubscribe = () => {
    const subscriptions = this.__internal__subscriptions;
    this.__internal__subscriptions = {};
    Promise.all(Object.keys(subscriptions).map((id) => __async(this, null, function* () {
      const { callback, method, params, type } = subscriptions[id];
      if (type.startsWith("author_")) {
        return;
      }
      try {
        yield this.subscribe(type, method, params, callback);
      } catch (error) {
        l3.error(error);
      }
    }))).catch(l3.error);
  };
  __internal__timeoutHandlers = () => {
    const now = Date.now();
    const ids = Object.keys(this.__internal__handlers);
    for (let i = 0, count = ids.length; i < count; i++) {
      const handler = this.__internal__handlers[ids[i]];
      if (now - handler.start > this.__internal__timeout) {
        try {
          handler.callback(new Error(`No response received from RPC endpoint in ${this.__internal__timeout / 1e3}s`), void 0);
        } catch {
        }
        this.__internal__endpointStats.timeout++;
        this.__internal__stats.total.timeout++;
        delete this.__internal__handlers[ids[i]];
      }
    }
  };
};

// node_modules/@polkadot/api/util/logging.js
var l4 = logger("api/util");

// node_modules/@polkadot/api/util/filterEvents.js
function filterEvents(txHash, { block: { extrinsics, header } }, allEvents, status) {
  for (const [txIndex, x] of extrinsics.entries()) {
    if (x.hash.eq(txHash)) {
      return {
        blockNumber: isCompact(header.number) ? header.number.unwrap() : header.number,
        events: allEvents.filter(({ phase }) => phase.isApplyExtrinsic && phase.asApplyExtrinsic.eqn(txIndex)),
        txIndex
      };
    }
  }
  if (status.isInBlock) {
    const allHashes = extrinsics.map((x) => x.hash.toHex());
    l4.warn(`block ${header.hash.toHex()}: Unable to find extrinsic ${txHash.toHex()} inside ${allHashes.join(", ")}`);
  }
  return {};
}

// node_modules/@polkadot/api/util/isKeyringPair.js
function isKeyringPair(account3) {
  return isFunction(account3.sign);
}

// node_modules/@polkadot/api-derive/packageDetect.js
detectPackage(packageInfo, null, []);

// node_modules/@polkadot/rpc-core/packageDetect.js
detectPackage(packageInfo2, null, [packageInfo3, packageInfo4]);

// node_modules/@polkadot/types-codec/packageInfo.js
var packageInfo10 = { name: "@polkadot/types-codec", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "10.12.2" };

// node_modules/@polkadot/types-create/packageInfo.js
var packageInfo11 = { name: "@polkadot/types-create", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "10.12.2" };

// node_modules/@polkadot/types/packageDetect.js
detectPackage(packageInfo4, null, [packageInfo10, packageInfo11]);

// node_modules/@polkadot/types/interfaces/definitions.js
var definitions_exports = {};
__export(definitions_exports, {
  assetConversion: () => definitions_default4,
  assets: () => definitions_default5,
  attestations: () => definitions_default50,
  aura: () => definitions_default6,
  author: () => definitions_default66,
  authorship: () => definitions_default7,
  babe: () => definitions_default8,
  balances: () => definitions_default9,
  beefy: () => definitions_default10,
  benchmark: () => definitions_default11,
  blockbuilder: () => definitions_default12,
  bridges: () => definitions_default51,
  chain: () => definitions_default67,
  childstate: () => definitions_default68,
  claims: () => definitions_default52,
  collective: () => definitions_default13,
  consensus: () => definitions_default14,
  contracts: () => definitions_default15,
  contractsAbi: () => definitions_default60,
  crowdloan: () => definitions_default53,
  cumulus: () => definitions_default54,
  democracy: () => definitions_default16,
  dev: () => definitions_default17,
  discovery: () => definitions_default18,
  elections: () => definitions_default19,
  engine: () => definitions_default20,
  eth: () => definitions_default61,
  evm: () => definitions_default21,
  extrinsics: () => definitions_default22,
  finality: () => definitions_default55,
  fungibles: () => definitions_default23,
  genericAsset: () => definitions_default24,
  gilt: () => definitions_default25,
  grandpa: () => definitions_default26,
  identity: () => definitions_default27,
  imOnline: () => definitions_default28,
  lottery: () => definitions_default29,
  metadata: () => definitions_default,
  mmr: () => definitions_default30,
  nfts: () => definitions_default31,
  nimbus: () => definitions_default62,
  nompools: () => definitions_default32,
  offchain: () => definitions_default69,
  offences: () => definitions_default33,
  ormlOracle: () => definitions_default63,
  ormlTokens: () => definitions_default64,
  parachains: () => definitions_default56,
  payment: () => definitions_default70,
  poll: () => definitions_default57,
  pow: () => definitions_default34,
  proxy: () => definitions_default35,
  purchase: () => definitions_default58,
  recovery: () => definitions_default36,
  rpc: () => definitions_default65,
  runtime: () => definitions_default2,
  scaleInfo: () => definitions_default3,
  scheduler: () => definitions_default37,
  session: () => definitions_default38,
  society: () => definitions_default39,
  staking: () => definitions_default40,
  state: () => definitions_default71,
  support: () => definitions_default41,
  syncstate: () => definitions_default42,
  system: () => definitions_default43,
  treasury: () => definitions_default44,
  txpayment: () => definitions_default45,
  txqueue: () => definitions_default46,
  uniques: () => definitions_default47,
  utility: () => definitions_default48,
  vesting: () => definitions_default49,
  xcm: () => definitions_default59
});

// node_modules/@polkadot/types/interfaces/metadata/hashers.js
var AllHashers = {
  Blake2_128: null,
  // eslint-disable-line camelcase
  Blake2_256: null,
  // eslint-disable-line camelcase
  Blake2_128Concat: null,
  // eslint-disable-line camelcase
  Twox128: null,
  Twox256: null,
  Twox64Concat: null,
  // new in v11
  Identity: null
};

// node_modules/@polkadot/types/interfaces/metadata/runtime.js
var META_V1_TO_V2 = {
  metadata: {
    description: "Returns the metadata of a runtime",
    params: [],
    type: "OpaqueMetadata"
  }
};
var runtime = {
  Metadata: [
    {
      methods: __spreadValues({
        metadata_at_version: {
          description: "Returns the metadata at a given version.",
          params: [
            {
              name: "version",
              type: "u32"
            }
          ],
          type: "Option<OpaqueMetadata>"
        },
        metadata_versions: {
          description: "Returns the supported metadata versions.",
          params: [],
          type: "Vec<u32>"
        }
      }, META_V1_TO_V2),
      version: 2
    },
    {
      methods: __spreadValues({}, META_V1_TO_V2),
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/metadata/v9.js
var v9 = {
  // v9
  ErrorMetadataV9: {
    name: "Text",
    docs: "Vec<Text>"
  },
  EventMetadataV9: {
    name: "Text",
    args: "Vec<Type>",
    docs: "Vec<Text>"
  },
  FunctionArgumentMetadataV9: {
    name: "Text",
    type: "Type"
  },
  FunctionMetadataV9: {
    name: "Text",
    args: "Vec<FunctionArgumentMetadataV9>",
    docs: "Vec<Text>"
  },
  MetadataV9: {
    modules: "Vec<ModuleMetadataV9>"
  },
  ModuleConstantMetadataV9: {
    name: "Text",
    type: "Type",
    value: "Bytes",
    docs: "Vec<Text>"
  },
  ModuleMetadataV9: {
    name: "Text",
    storage: "Option<StorageMetadataV9>",
    calls: "Option<Vec<FunctionMetadataV9>>",
    events: "Option<Vec<EventMetadataV9>>",
    constants: "Vec<ModuleConstantMetadataV9>",
    errors: "Vec<ErrorMetadataV9>"
  },
  StorageEntryMetadataV9: {
    name: "Text",
    modifier: "StorageEntryModifierV9",
    type: "StorageEntryTypeV9",
    fallback: "Bytes",
    docs: "Vec<Text>"
  },
  StorageEntryModifierV9: {
    _enum: ["Optional", "Default", "Required"]
  },
  StorageEntryTypeV9: {
    _enum: {
      Plain: "Type",
      Map: {
        hasher: "StorageHasherV9",
        key: "Type",
        value: "Type",
        linked: "bool"
      },
      DoubleMap: {
        hasher: "StorageHasherV9",
        key1: "Type",
        key2: "Type",
        value: "Type",
        key2Hasher: "StorageHasherV9"
      }
    }
  },
  StorageHasherV9: {
    _enum: {
      Blake2_128: null,
      // eslint-disable-line camelcase
      Blake2_256: null,
      // eslint-disable-line camelcase
      Twox128: null,
      Twox256: null,
      Twox64Concat: null
    }
  },
  StorageMetadataV9: {
    prefix: "Text",
    items: "Vec<StorageEntryMetadataV9>"
  }
};

// node_modules/@polkadot/types/interfaces/metadata/v10.js
var v10 = {
  // v10
  ErrorMetadataV10: "ErrorMetadataV9",
  EventMetadataV10: "EventMetadataV9",
  FunctionArgumentMetadataV10: "FunctionArgumentMetadataV9",
  FunctionMetadataV10: "FunctionMetadataV9",
  MetadataV10: {
    modules: "Vec<ModuleMetadataV10>"
  },
  ModuleConstantMetadataV10: "ModuleConstantMetadataV9",
  ModuleMetadataV10: {
    name: "Text",
    storage: "Option<StorageMetadataV10>",
    calls: "Option<Vec<FunctionMetadataV10>>",
    events: "Option<Vec<EventMetadataV10>>",
    constants: "Vec<ModuleConstantMetadataV10>",
    errors: "Vec<ErrorMetadataV10>"
  },
  StorageEntryModifierV10: "StorageEntryModifierV9",
  StorageEntryMetadataV10: {
    name: "Text",
    modifier: "StorageEntryModifierV10",
    type: "StorageEntryTypeV10",
    fallback: "Bytes",
    docs: "Vec<Text>"
  },
  StorageEntryTypeV10: {
    _enum: {
      Plain: "Type",
      Map: {
        hasher: "StorageHasherV10",
        key: "Type",
        value: "Type",
        linked: "bool"
      },
      DoubleMap: {
        hasher: "StorageHasherV10",
        key1: "Type",
        key2: "Type",
        value: "Type",
        key2Hasher: "StorageHasherV10"
      }
    }
  },
  StorageMetadataV10: {
    prefix: "Text",
    items: "Vec<StorageEntryMetadataV10>"
  },
  StorageHasherV10: {
    _enum: {
      Blake2_128: null,
      // eslint-disable-line camelcase
      Blake2_256: null,
      // eslint-disable-line camelcase
      Blake2_128Concat: null,
      // eslint-disable-line camelcase
      Twox128: null,
      Twox256: null,
      Twox64Concat: null
    }
  }
};

// node_modules/@polkadot/types/interfaces/metadata/v11.js
var v11 = {
  // v11
  ErrorMetadataV11: "ErrorMetadataV10",
  EventMetadataV11: "EventMetadataV10",
  ExtrinsicMetadataV11: {
    version: "u8",
    signedExtensions: "Vec<Text>"
  },
  FunctionArgumentMetadataV11: "FunctionArgumentMetadataV10",
  FunctionMetadataV11: "FunctionMetadataV10",
  MetadataV11: {
    modules: "Vec<ModuleMetadataV11>",
    extrinsic: "ExtrinsicMetadataV11"
  },
  ModuleConstantMetadataV11: "ModuleConstantMetadataV10",
  ModuleMetadataV11: {
    name: "Text",
    storage: "Option<StorageMetadataV11>",
    calls: "Option<Vec<FunctionMetadataV11>>",
    events: "Option<Vec<EventMetadataV11>>",
    constants: "Vec<ModuleConstantMetadataV11>",
    errors: "Vec<ErrorMetadataV11>"
  },
  StorageEntryModifierV11: "StorageEntryModifierV10",
  StorageEntryMetadataV11: {
    name: "Text",
    modifier: "StorageEntryModifierV11",
    type: "StorageEntryTypeV11",
    fallback: "Bytes",
    docs: "Vec<Text>"
  },
  StorageEntryTypeV11: {
    _enum: {
      Plain: "Type",
      Map: {
        hasher: "StorageHasherV11",
        key: "Type",
        value: "Type",
        linked: "bool"
      },
      DoubleMap: {
        hasher: "StorageHasherV11",
        key1: "Type",
        key2: "Type",
        value: "Type",
        key2Hasher: "StorageHasherV11"
      }
    }
  },
  StorageMetadataV11: {
    prefix: "Text",
    items: "Vec<StorageEntryMetadataV11>"
  },
  StorageHasherV11: {
    _enum: AllHashers
  }
};

// node_modules/@polkadot/types/interfaces/metadata/v12.js
var v12 = {
  // v12
  ErrorMetadataV12: "ErrorMetadataV11",
  EventMetadataV12: "EventMetadataV11",
  ExtrinsicMetadataV12: "ExtrinsicMetadataV11",
  FunctionArgumentMetadataV12: "FunctionArgumentMetadataV11",
  FunctionMetadataV12: "FunctionMetadataV11",
  MetadataV12: {
    modules: "Vec<ModuleMetadataV12>",
    extrinsic: "ExtrinsicMetadataV12"
  },
  ModuleConstantMetadataV12: "ModuleConstantMetadataV11",
  ModuleMetadataV12: {
    name: "Text",
    storage: "Option<StorageMetadataV12>",
    calls: "Option<Vec<FunctionMetadataV12>>",
    events: "Option<Vec<EventMetadataV12>>",
    constants: "Vec<ModuleConstantMetadataV12>",
    errors: "Vec<ErrorMetadataV12>",
    index: "u8"
  },
  StorageEntryModifierV12: "StorageEntryModifierV11",
  StorageEntryMetadataV12: "StorageEntryMetadataV11",
  StorageEntryTypeV12: "StorageEntryTypeV11",
  StorageMetadataV12: "StorageMetadataV11",
  StorageHasherV12: "StorageHasherV11"
};

// node_modules/@polkadot/types/interfaces/metadata/v13.js
var v13 = {
  // v13
  ErrorMetadataV13: "ErrorMetadataV12",
  EventMetadataV13: "EventMetadataV12",
  ExtrinsicMetadataV13: "ExtrinsicMetadataV12",
  FunctionArgumentMetadataV13: "FunctionArgumentMetadataV12",
  FunctionMetadataV13: "FunctionMetadataV12",
  MetadataV13: {
    modules: "Vec<ModuleMetadataV13>",
    extrinsic: "ExtrinsicMetadataV13"
  },
  ModuleConstantMetadataV13: "ModuleConstantMetadataV12",
  ModuleMetadataV13: {
    name: "Text",
    storage: "Option<StorageMetadataV13>",
    calls: "Option<Vec<FunctionMetadataV13>>",
    events: "Option<Vec<EventMetadataV13>>",
    constants: "Vec<ModuleConstantMetadataV13>",
    errors: "Vec<ErrorMetadataV13>",
    index: "u8"
  },
  StorageEntryModifierV13: "StorageEntryModifierV12",
  StorageEntryMetadataV13: {
    name: "Text",
    modifier: "StorageEntryModifierV13",
    type: "StorageEntryTypeV13",
    fallback: "Bytes",
    docs: "Vec<Text>"
  },
  StorageEntryTypeV13: {
    _enum: {
      Plain: "Type",
      Map: {
        hasher: "StorageHasherV13",
        key: "Type",
        value: "Type",
        linked: "bool"
      },
      DoubleMap: {
        hasher: "StorageHasherV13",
        key1: "Type",
        key2: "Type",
        value: "Type",
        key2Hasher: "StorageHasherV13"
      },
      NMap: {
        keyVec: "Vec<Type>",
        hashers: "Vec<StorageHasherV13>",
        value: "Type"
      }
    }
  },
  StorageMetadataV13: {
    prefix: "Text",
    items: "Vec<StorageEntryMetadataV13>"
  },
  StorageHasherV13: "StorageHasherV12"
};

// node_modules/@polkadot/types/interfaces/scaleInfo/v1.js
var Si1Variant = {
  name: "Text",
  fields: "Vec<Si1Field>",
  index: "u8",
  docs: "Vec<Text>"
};
var v1 = {
  Si1Field: {
    name: "Option<Text>",
    type: "Si1LookupTypeId",
    typeName: "Option<Text>",
    docs: "Vec<Text>"
  },
  Si1LookupTypeId: "Compact<u32>",
  Si1Path: "Si0Path",
  Si1Type: {
    path: "Si1Path",
    params: "Vec<Si1TypeParameter>",
    def: "Si1TypeDef",
    docs: "Vec<Text>"
  },
  Si1TypeDef: {
    _enum: {
      Composite: "Si1TypeDefComposite",
      Variant: "Si1TypeDefVariant",
      Sequence: "Si1TypeDefSequence",
      Array: "Si1TypeDefArray",
      Tuple: "Si1TypeDefTuple",
      Primitive: "Si1TypeDefPrimitive",
      Compact: "Si1TypeDefCompact",
      BitSequence: "Si1TypeDefBitSequence",
      // NOTE: This is specific to the implementation for pre-v14 metadata
      // compatibility (always keep this as the last entry in the enum)
      HistoricMetaCompat: "Type"
    }
  },
  Si1TypeDefArray: {
    len: "u32",
    type: "Si1LookupTypeId"
  },
  Si1TypeDefBitSequence: {
    bitStoreType: "Si1LookupTypeId",
    bitOrderType: "Si1LookupTypeId"
  },
  Si1TypeDefCompact: {
    type: "Si1LookupTypeId"
  },
  Si1TypeDefComposite: {
    fields: "Vec<Si1Field>"
  },
  Si1TypeDefPrimitive: "Si0TypeDefPrimitive",
  Si1TypeDefSequence: {
    type: "Si1LookupTypeId"
  },
  Si1TypeDefTuple: "Vec<Si1LookupTypeId>",
  Si1TypeParameter: {
    name: "Text",
    type: "Option<Si1LookupTypeId>"
  },
  Si1TypeDefVariant: {
    variants: "Vec<Si1Variant>"
  },
  Si1Variant
};

// node_modules/@polkadot/types/interfaces/metadata/v14.js
var v14 = {
  // registry
  PortableTypeV14: {
    id: "Si1LookupTypeId",
    type: "Si1Type"
  },
  // compatibility with earlier layouts, i.e. don't break previous users
  ErrorMetadataV14: __spreadProps(__spreadValues({}, Si1Variant), {
    args: "Vec<Type>"
  }),
  EventMetadataV14: __spreadProps(__spreadValues({}, Si1Variant), {
    args: "Vec<Type>"
  }),
  FunctionArgumentMetadataV14: {
    name: "Text",
    type: "Type",
    typeName: "Option<Type>"
  },
  FunctionMetadataV14: __spreadProps(__spreadValues({}, Si1Variant), {
    args: "Vec<FunctionArgumentMetadataV14>"
  }),
  // V14
  ExtrinsicMetadataV14: {
    type: "SiLookupTypeId",
    version: "u8",
    signedExtensions: "Vec<SignedExtensionMetadataV14>"
  },
  MetadataV14: {
    lookup: "PortableRegistry",
    pallets: "Vec<PalletMetadataV14>",
    extrinsic: "ExtrinsicMetadataV14",
    type: "SiLookupTypeId"
  },
  PalletCallMetadataV14: {
    type: "SiLookupTypeId"
  },
  PalletConstantMetadataV14: {
    name: "Text",
    type: "SiLookupTypeId",
    value: "Bytes",
    docs: "Vec<Text>"
  },
  PalletErrorMetadataV14: {
    type: "SiLookupTypeId"
  },
  PalletEventMetadataV14: {
    type: "SiLookupTypeId"
  },
  PalletMetadataV14: {
    name: "Text",
    storage: "Option<PalletStorageMetadataV14>",
    calls: "Option<PalletCallMetadataV14>",
    events: "Option<PalletEventMetadataV14>",
    constants: "Vec<PalletConstantMetadataV14>",
    errors: "Option<PalletErrorMetadataV14>",
    index: "u8"
  },
  PalletStorageMetadataV14: {
    prefix: "Text",
    // NOTE: Renamed from entries
    items: "Vec<StorageEntryMetadataV14>"
  },
  SignedExtensionMetadataV14: {
    identifier: "Text",
    type: "SiLookupTypeId",
    additionalSigned: "SiLookupTypeId"
  },
  StorageEntryMetadataV14: {
    name: "Text",
    modifier: "StorageEntryModifierV14",
    type: "StorageEntryTypeV14",
    fallback: "Bytes",
    docs: "Vec<Text>"
  },
  StorageEntryModifierV14: "StorageEntryModifierV13",
  StorageEntryTypeV14: {
    _enum: {
      Plain: "SiLookupTypeId",
      Map: {
        hashers: "Vec<StorageHasherV14>",
        key: "SiLookupTypeId",
        // NOTE: Renamed from "keys"
        value: "SiLookupTypeId"
      }
    }
  },
  StorageHasherV14: "StorageHasherV13"
};

// node_modules/@polkadot/types/interfaces/metadata/v15.js
var v15 = {
  // new/adjusted in v15
  CustomMetadata15: {
    map: "BTreeMap<Text, CustomValueMetadata15>"
  },
  CustomValueMetadata15: {
    type: "SiLookupTypeId",
    value: "Bytes"
  },
  ExtrinsicMetadataV15: {
    version: "u8",
    addressType: "SiLookupTypeId",
    callType: "SiLookupTypeId",
    signatureType: "SiLookupTypeId",
    extraType: "SiLookupTypeId",
    signedExtensions: "Vec<SignedExtensionMetadataV14>"
  },
  OuterEnums15: {
    callType: "SiLookupTypeId",
    eventType: "SiLookupTypeId",
    errorType: "SiLookupTypeId"
  },
  PalletMetadataV15: {
    name: "Text",
    storage: "Option<PalletStorageMetadataV14>",
    calls: "Option<PalletCallMetadataV14>",
    events: "Option<PalletEventMetadataV14>",
    constants: "Vec<PalletConstantMetadataV14>",
    errors: "Option<PalletErrorMetadataV14>",
    index: "u8",
    docs: "Vec<Text>"
  },
  RuntimeApiMetadataV15: {
    name: "Text",
    methods: "Vec<RuntimeApiMethodMetadataV15>",
    docs: "Vec<Text>"
  },
  RuntimeApiMethodMetadataV15: {
    name: "Text",
    inputs: "Vec<RuntimeApiMethodParamMetadataV15>",
    output: "SiLookupTypeId",
    docs: "Vec<Text>"
  },
  RuntimeApiMethodParamMetadataV15: {
    name: "Text",
    type: "SiLookupTypeId"
  },
  // actual v15 definition
  MetadataV15: {
    lookup: "PortableRegistry",
    pallets: "Vec<PalletMetadataV15>",
    extrinsic: "ExtrinsicMetadataV15",
    type: "SiLookupTypeId",
    apis: "Vec<RuntimeApiMetadataV15>",
    outerEnums: "OuterEnums15",
    custom: "CustomMetadata15"
  }
};

// node_modules/@polkadot/types/interfaces/metadata/definitions.js
var definitions_default = {
  rpc: {},
  runtime,
  types: __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, v9), v10), v11), v12), v13), v14), v15), {
    // latest mappings
    // NOTE: For v15, we only added the runtime defintions,
    // hence latest for most pointing to the previous V14
    ErrorMetadataLatest: "ErrorMetadataV14",
    EventMetadataLatest: "EventMetadataV14",
    ExtrinsicMetadataLatest: "ExtrinsicMetadataV15",
    FunctionArgumentMetadataLatest: "FunctionArgumentMetadataV14",
    FunctionMetadataLatest: "FunctionMetadataV14",
    MetadataLatest: "MetadataV15",
    PalletCallMetadataLatest: "PalletCallMetadataV14",
    PalletConstantMetadataLatest: "PalletConstantMetadataV14",
    PalletErrorMetadataLatest: "PalletErrorMetadataV14",
    PalletEventMetadataLatest: "PalletEventMetadataV14",
    PalletMetadataLatest: "PalletMetadataV15",
    PalletStorageMetadataLatest: "PalletStorageMetadataV14",
    PortableType: "PortableTypeV14",
    RuntimeApiMetadataLatest: "RuntimeApiMetadataV15",
    SignedExtensionMetadataLatest: "SignedExtensionMetadataV14",
    StorageEntryMetadataLatest: "StorageEntryMetadataV14",
    StorageEntryModifierLatest: "StorageEntryModifierV14",
    StorageEntryTypeLatest: "StorageEntryTypeV14",
    StorageHasher: "StorageHasherV14",
    // additional types
    OpaqueMetadata: "Opaque<Bytes>",
    // the enum containing all the mappings
    MetadataAll: {
      _enum: {
        V0: "DoNotConstruct<MetadataV0>",
        V1: "DoNotConstruct<MetadataV1>",
        V2: "DoNotConstruct<MetadataV2>",
        V3: "DoNotConstruct<MetadataV3>",
        V4: "DoNotConstruct<MetadataV4>",
        V5: "DoNotConstruct<MetadataV5>",
        V6: "DoNotConstruct<MetadataV6>",
        V7: "DoNotConstruct<MetadataV7>",
        V8: "DoNotConstruct<MetadataV8>",
        // First version on Kusama in V9, dropping will be problematic
        V9: "MetadataV9",
        V10: "MetadataV10",
        V11: "MetadataV11",
        V12: "MetadataV12",
        V13: "MetadataV13",
        V14: "MetadataV14",
        V15: "MetadataV15"
      }
    }
  })
};

// node_modules/@polkadot/types/interfaces/runtime/runtime.js
var CORE_V1_TO_V4 = {
  execute_block: {
    description: "Execute the given block.",
    params: [
      {
        name: "block",
        type: "Block"
      }
    ],
    type: "Null"
  }
};
var CORE_V1_TO_V2 = {
  version: {
    description: "Returns the version of the runtime.",
    params: [],
    type: "RuntimeVersionPre3"
  }
};
var CORE_V2_TO_V4 = {
  initialize_block: {
    description: "Initialize a block with the given header.",
    params: [
      {
        name: "header",
        type: "Header"
      }
    ],
    type: "Null"
  }
};
var runtime2 = {
  Core: [
    {
      methods: __spreadValues(__spreadValues({
        version: {
          description: "Returns the version of the runtime.",
          params: [],
          type: "RuntimeVersion"
        }
      }, CORE_V1_TO_V4), CORE_V2_TO_V4),
      version: 4
    },
    {
      methods: __spreadValues(__spreadValues({
        version: {
          description: "Returns the version of the runtime.",
          params: [],
          type: "RuntimeVersionPre4"
        }
      }, CORE_V1_TO_V4), CORE_V2_TO_V4),
      version: 3
    },
    {
      methods: __spreadValues(__spreadValues(__spreadValues({}, CORE_V1_TO_V2), CORE_V1_TO_V4), CORE_V2_TO_V4),
      version: 2
    },
    {
      methods: __spreadValues(__spreadValues({
        initialise_block: {
          description: "Initialize a block with the given header.",
          params: [
            {
              name: "header",
              type: "Header"
            }
          ],
          type: "Null"
        }
      }, CORE_V1_TO_V2), CORE_V1_TO_V4),
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/runtime/definitions.js
var numberTypes = {
  Fixed64: "Int<64, Fixed64>",
  FixedI64: "Int<64, FixedI64>",
  FixedU64: "UInt<64, FixedU64>",
  Fixed128: "Int<128, Fixed128>",
  FixedI128: "Int<128, FixedI128>",
  FixedU128: "UInt<128, FixedU128>",
  I32F32: "Int<64, I32F32>",
  U32F32: "UInt<64, U32F32>",
  PerU16: "UInt<16, PerU16>",
  Perbill: "UInt<32, Perbill>",
  Percent: "UInt<8, Percent>",
  Permill: "UInt<32, Permill>",
  Perquintill: "UInt<64, Perquintill>"
};
var knownOrigins = {
  //
  // (1) Defaults from Substrate
  //
  Council: "CollectiveOrigin",
  System: "SystemOrigin",
  TechnicalCommittee: "CollectiveOrigin",
  //
  // (2) Defaults from Polkadot
  //
  Xcm: "XcmOrigin",
  XcmPallet: "XcmOrigin",
  //
  // (3) Defaults from Acala
  //
  Authority: "AuthorityOrigin",
  GeneralCouncil: "CollectiveOrigin"
};
var definitions_default2 = {
  rpc: {},
  runtime: runtime2,
  types: __spreadProps(__spreadValues({}, numberTypes), {
    AccountId: "AccountId32",
    AccountId20: "GenericEthereumAccountId",
    AccountId32: "GenericAccountId32",
    AccountId33: "GenericAccountId33",
    AccountIdOf: "AccountId",
    AccountIndex: "GenericAccountIndex",
    Address: "MultiAddress",
    AssetId: "u32",
    Balance: "UInt<128, Balance>",
    BalanceOf: "Balance",
    Block: "GenericBlock",
    BlockNumber: "u32",
    BlockNumberFor: "BlockNumber",
    BlockNumberOf: "BlockNumber",
    Call: "GenericCall",
    CallHash: "Hash",
    CallHashOf: "CallHash",
    ChangesTrieConfiguration: {
      digestInterval: "u32",
      digestLevels: "u32"
    },
    ChangesTrieSignal: {
      _enum: {
        NewConfiguration: "Option<ChangesTrieConfiguration>"
      }
    },
    ConsensusEngineId: "GenericConsensusEngineId",
    CodecHash: "Hash",
    CrateVersion: {
      major: "u16",
      minor: "u8",
      patch: "u8"
    },
    Digest: {
      logs: "Vec<DigestItem>"
    },
    DigestItem: {
      _enum: {
        Other: "Bytes",
        // 0
        AuthoritiesChange: "Vec<AuthorityId>",
        // 1
        ChangesTrieRoot: "Hash",
        // 2
        SealV0: "SealV0",
        // 3
        Consensus: "Consensus",
        // 4
        Seal: "Seal",
        // 5
        PreRuntime: "PreRuntime",
        // 6
        ChangesTrieSignal: "ChangesTrieSignal",
        // 7
        RuntimeEnvironmentUpdated: "Null"
        // 8
      }
    },
    ExtrinsicsWeight: {
      normal: "Weight",
      operational: "Weight"
    },
    H32: "[u8; 4; H32]",
    H64: "[u8; 8; H64]",
    H128: "[u8; 16; H128]",
    H160: "[u8; 20; H160]",
    H256: "[u8; 32; H256]",
    H512: "[u8; 64; H512]",
    H1024: "[u8; 128; H1024]",
    H2048: "[u8; 256; H2048]",
    Hash: "H256",
    Header: {
      parentHash: "Hash",
      number: "Compact<BlockNumber>",
      stateRoot: "Hash",
      extrinsicsRoot: "Hash",
      digest: "Digest"
    },
    HeaderPartial: {
      parentHash: "Hash",
      // since we only parse JSON with this, having non-compact works
      number: "BlockNumber"
    },
    IndicesLookupSource: "GenericLookupSource",
    Index: "u32",
    Justification: "(ConsensusEngineId, EncodedJustification)",
    EncodedJustification: "Bytes",
    Justifications: "Vec<Justification>",
    KeyValue: "(StorageKey, StorageData)",
    KeyTypeId: "u32",
    LockIdentifier: "[u8; 8]",
    LookupSource: "MultiAddress",
    LookupTarget: "AccountId",
    ModuleId: "LockIdentifier",
    MultiAddress: "GenericMultiAddress",
    MultiSigner: {
      _enum: {
        Ed25519: "[u8; 32]",
        Sr25519: "[u8; 32]",
        Ecdsa: "[u8; 33]"
      }
    },
    Moment: "UInt<64, Moment>",
    OpaqueCall: "Bytes",
    Origin: "DoNotConstruct<Origin>",
    OriginCaller: {
      _enum: {
        // this should be dynamically built from the actual modules, based on index
        System: "SystemOrigin"
      }
    },
    PalletId: "LockIdentifier",
    PalletsOrigin: "OriginCaller",
    PalletVersion: {
      major: "u16",
      minor: "u8",
      patch: "u8"
    },
    Pays: {
      _enum: ["Yes", "No"]
    },
    Phantom: "Null",
    PhantomData: "Null",
    Releases: {
      _enum: ["V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10"]
    },
    RuntimeCall: "Call",
    RuntimeEvent: "Event",
    RuntimeDbWeight: {
      read: "Weight",
      write: "Weight"
    },
    SignedBlock: "SignedBlockWithJustifications",
    SignedBlockWithJustification: {
      block: "Block",
      justification: "Option<EncodedJustification>"
    },
    SignedBlockWithJustifications: {
      block: "Block",
      justifications: "Option<Justifications>"
    },
    Slot: "u64",
    SlotDuration: "u64",
    StorageData: "Bytes",
    StorageInfo: {
      palletName: "Bytes",
      storage_name: "Bytes",
      prefix: "Bytes",
      maxValues: "Option<u32>",
      maxSize: "Option<u32>"
    },
    StorageProof: {
      trieNodes: "Vec<Bytes>"
    },
    TransactionPriority: "u64",
    TransactionLongevity: "u64",
    TransactionTag: "Bytes",
    TransactionInfo: {
      _alias: {
        dataSize: "size"
      },
      chunkRoot: "H256",
      contentHash: "H256",
      dataSize: "u32",
      blockChunks: "u32"
    },
    TransactionStorageProof: {
      chunk: "Vec<u8>",
      proof: "Vec<Vec<u8>>"
    },
    ValidatorId: "AccountId",
    ValidatorIdOf: "ValidatorId",
    WeightV0: "u32",
    WeightV1: "u64",
    WeightV2: {
      refTime: "Compact<u64>",
      proofSize: "Compact<u64>"
    },
    Weight: "WeightV2",
    WeightMultiplier: "Fixed64",
    // digest
    PreRuntime: "(ConsensusEngineId, Bytes)",
    SealV0: "(u64, Signature)",
    Seal: "(ConsensusEngineId, Bytes)",
    Consensus: "(ConsensusEngineId, Bytes)"
  })
};

// node_modules/@polkadot/types/interfaces/scaleInfo/v0.js
var v0 = {
  Si0Field: {
    name: "Option<Text>",
    type: "Si0LookupTypeId",
    typeName: "Option<Text>",
    docs: "Vec<Text>"
  },
  Si0LookupTypeId: "u32",
  Si0Path: "Vec<Text>",
  Si0Type: {
    path: "Si0Path",
    params: "Vec<Si0LookupTypeId>",
    def: "Si0TypeDef"
  },
  Si0TypeDef: {
    _enum: {
      Composite: "Si0TypeDefComposite",
      Variant: "Si0TypeDefVariant",
      Sequence: "Si0TypeDefSequence",
      Array: "Si0TypeDefArray",
      Tuple: "Si0TypeDefTuple",
      Primitive: "Si0TypeDefPrimitive",
      Compact: "Si0TypeDefCompact",
      Phantom: "Si0TypeDefPhantom",
      BitSequence: "Si0TypeDefBitSequence"
    }
  },
  Si0TypeDefArray: {
    len: "u32",
    type: "Si0LookupTypeId"
  },
  Si0TypeDefBitSequence: {
    bitStoreType: "Si0LookupTypeId",
    bitOrderType: "Si0LookupTypeId"
  },
  Si0TypeDefCompact: {
    type: "Si0LookupTypeId"
  },
  Si0TypeDefComposite: {
    fields: "Vec<Si0Field>"
  },
  Si0TypeDefPhantom: "Null",
  Si0TypeDefVariant: {
    variants: "Vec<Si0Variant>"
  },
  Si0TypeDefPrimitive: {
    _enum: ["Bool", "Char", "Str", "U8", "U16", "U32", "U64", "U128", "U256", "I8", "I16", "I32", "I64", "I128", "I256"]
  },
  Si0TypeDefSequence: {
    type: "Si0LookupTypeId"
  },
  Si0TypeDefTuple: "Vec<Si0LookupTypeId>",
  Si0TypeParameter: {
    name: "Text",
    type: "Option<Si0LookupTypeId>"
  },
  Si0Variant: {
    name: "Text",
    fields: "Vec<Si0Field>",
    index: "Option<u8>",
    discriminant: "Option<u64>",
    docs: "Vec<Text>"
  }
};

// node_modules/@polkadot/types/interfaces/scaleInfo/definitions.js
var definitions_default3 = {
  rpc: {},
  types: __spreadProps(__spreadValues(__spreadValues({}, v0), v1), {
    // latest mappings
    SiField: "Si1Field",
    SiLookupTypeId: "Si1LookupTypeId",
    SiPath: "Si1Path",
    SiType: "Si1Type",
    SiTypeDef: "Si1TypeDef",
    SiTypeDefArray: "Si1TypeDefArray",
    SiTypeDefBitSequence: "Si1TypeDefBitSequence",
    SiTypeDefCompact: "Si1TypeDefCompact",
    SiTypeDefComposite: "Si1TypeDefComposite",
    SiTypeDefPrimitive: "Si1TypeDefPrimitive",
    SiTypeDefSequence: "Si1TypeDefSequence",
    SiTypeDefTuple: "Si1TypeDefTuple",
    SiTypeParameter: "Si1TypeParameter",
    SiTypeDefVariant: "Si1TypeDefVariant",
    SiVariant: "Si1Variant"
  })
};

// node_modules/@polkadot/types/interfaces/assetConversion/runtime.js
var runtime3 = {
  AssetConversionApi: [
    {
      methods: {
        get_reserves: {
          description: "Get pool reserves",
          params: [
            {
              name: "asset1",
              type: "XcmV3MultiLocation"
            },
            {
              name: "asset2",
              type: "XcmV3MultiLocation"
            }
          ],
          type: "Option<(Balance,Balance)>"
        },
        quote_price_exact_tokens_for_tokens: {
          description: "Quote price: exact tokens for tokens",
          params: [
            {
              name: "asset1",
              type: "XcmV3MultiLocation"
            },
            {
              name: "asset2",
              type: "XcmV3MultiLocation"
            },
            {
              name: "amount",
              type: "u128"
            },
            {
              name: "include_fee",
              type: "bool"
            }
          ],
          type: "Option<(Balance)>"
        },
        quote_price_tokens_for_exact_tokens: {
          description: "Quote price: tokens for exact tokens",
          params: [
            {
              name: "asset1",
              type: "XcmV3MultiLocation"
            },
            {
              name: "asset2",
              type: "XcmV3MultiLocation"
            },
            {
              name: "amount",
              type: "u128"
            },
            {
              name: "include_fee",
              type: "bool"
            }
          ],
          type: "Option<(Balance)>"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/assetConversion/definitions.js
var definitions_default4 = {
  rpc: {},
  runtime: runtime3,
  types: {
    TAssetConversion: "Option<MultiLocation>"
  }
};

// node_modules/@polkadot/types/interfaces/assets/runtime.js
var runtime4 = {
  AssetsApi: [
    {
      methods: {
        account_balances: {
          description: "Return the current set of authorities.",
          params: [
            {
              name: "account",
              type: "AccountId"
            }
          ],
          type: "Vec<(u32, TAssetBalance)>"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/assets/definitions.js
var definitions_default5 = {
  rpc: {},
  runtime: runtime4,
  types: {
    AssetApprovalKey: {
      owner: "AccountId",
      delegate: "AccountId"
    },
    AssetApproval: {
      amount: "TAssetBalance",
      deposit: "TAssetDepositBalance"
    },
    AssetBalance: {
      balance: "TAssetBalance",
      isFrozen: "bool",
      isSufficient: "bool"
    },
    AssetDestroyWitness: {
      accounts: "Compact<u32>",
      sufficients: "Compact<u32>",
      approvals: "Compact<u32>"
    },
    AssetDetails: {
      owner: "AccountId",
      issuer: "AccountId",
      admin: "AccountId",
      freezer: "AccountId",
      supply: "TAssetBalance",
      deposit: "TAssetDepositBalance",
      minBalance: "TAssetBalance",
      isSufficient: "bool",
      accounts: "u32",
      sufficients: "u32",
      approvals: "u32",
      isFrozen: "bool"
    },
    AssetMetadata: {
      deposit: "TAssetDepositBalance",
      name: "Vec<u8>",
      symbol: "Vec<u8>",
      decimals: "u8",
      isFrozen: "bool"
    },
    TAssetBalance: "u64",
    TAssetDepositBalance: "BalanceOf"
  }
};

// node_modules/@polkadot/types/interfaces/aura/runtime.js
var runtime5 = {
  AuraApi: [
    {
      methods: {
        authorities: {
          description: "Return the current set of authorities.",
          params: [],
          type: "Vec<AuthorityId>"
        },
        slot_duration: {
          description: "Returns the slot duration for Aura.",
          params: [],
          type: "SlotDuration"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/aura/definitions.js
var definitions_default6 = {
  rpc: {},
  runtime: runtime5,
  types: {
    RawAuraPreDigest: {
      slotNumber: "u64"
    }
  }
};

// node_modules/@polkadot/types/interfaces/authorship/definitions.js
var definitions_default7 = {
  rpc: {},
  types: {
    UncleEntryItem: {
      _enum: {
        InclusionHeight: "BlockNumber",
        Uncle: "(Hash, Option<AccountId>)"
      }
    }
  }
};

// node_modules/@polkadot/types/interfaces/babe/rpc.js
var rpc = {
  epochAuthorship: {
    description: "Returns data about which slots (primary or secondary) can be claimed in the current epoch with the keys in the keystore",
    isUnsafe: true,
    params: [],
    type: "HashMap<AuthorityId, EpochAuthorship>"
  }
};

// node_modules/@polkadot/types/interfaces/babe/runtime.js
var V1_V2_SHARED = {
  current_epoch: {
    description: "Returns information regarding the current epoch.",
    params: [],
    type: "Epoch"
  },
  current_epoch_start: {
    description: "Returns the slot that started the current epoch.",
    params: [],
    type: "Slot"
  },
  generate_key_ownership_proof: {
    description: "Generates a proof of key ownership for the given authority in the current epoch.",
    params: [
      {
        name: "slot",
        type: "Slot"
      },
      {
        name: "authorityId",
        type: "AuthorityId"
      }
    ],
    type: "Option<OpaqueKeyOwnershipProof>"
  },
  next_epoch: {
    description: "Returns information regarding the next epoch (which was already previously announced).",
    params: [],
    type: "Epoch"
  },
  submit_report_equivocation_unsigned_extrinsic: {
    description: "Submits an unsigned extrinsic to report an equivocation.",
    params: [
      {
        name: "equivocationProof",
        type: "BabeEquivocationProof"
      },
      {
        name: "keyOwnerProof",
        type: "OpaqueKeyOwnershipProof"
      }
    ],
    type: "Option<Null>"
  }
};
var runtime6 = {
  BabeApi: [
    {
      methods: __spreadValues({
        configuration: {
          description: "Return the genesis configuration for BABE. The configuration is only read on genesis.",
          params: [],
          type: "BabeGenesisConfiguration"
        }
      }, V1_V2_SHARED),
      version: 2
    },
    {
      methods: __spreadValues({
        configuration: {
          description: "Return the configuration for BABE. Version 1.",
          params: [],
          type: "BabeGenesisConfigurationV1"
        }
      }, V1_V2_SHARED),
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/babe/definitions.js
var definitions_default8 = {
  rpc,
  runtime: runtime6,
  types: {
    AllowedSlots: {
      _enum: ["PrimarySlots", "PrimaryAndSecondaryPlainSlots", "PrimaryAndSecondaryVRFSlots"]
    },
    BabeAuthorityWeight: "u64",
    BabeEpochConfiguration: {
      c: "(u64, u64)",
      allowedSlots: "AllowedSlots"
    },
    BabeBlockWeight: "u32",
    BabeEquivocationProof: {
      offender: "AuthorityId",
      slotNumber: "SlotNumber",
      firstHeader: "Header",
      secondHeader: "Header"
    },
    BabeGenesisConfiguration: {
      slotDuration: "u64",
      epochLength: "u64",
      c: "(u64, u64)",
      genesisAuthorities: "Vec<(AuthorityId, BabeAuthorityWeight)>",
      randomness: "Randomness",
      allowedSlots: "AllowedSlots"
    },
    BabeGenesisConfigurationV1: {
      slotDuration: "u64",
      epochLength: "u64",
      c: "(u64, u64)",
      genesisAuthorities: "Vec<(AuthorityId, BabeAuthorityWeight)>",
      randomness: "Randomness",
      secondarySlots: "bool"
    },
    BabeWeight: "u64",
    MaybeRandomness: "Option<Randomness>",
    MaybeVrf: "Option<VrfData>",
    Epoch: {
      epochIndex: "u64",
      startSlot: "Slot",
      duration: "u64",
      authorities: "Vec<(AuthorityId, BabeAuthorityWeight)>",
      randomness: "Hash",
      // [u8; VRF_OUTPUT_LENGTH],
      config: "BabeEpochConfiguration"
    },
    EpochAuthorship: {
      primary: "Vec<u64>",
      secondary: "Vec<u64>",
      secondary_vrf: "Vec<u64>"
    },
    NextConfigDescriptor: {
      _enum: {
        V0: "Null",
        V1: "NextConfigDescriptorV1"
      }
    },
    NextConfigDescriptorV1: {
      c: "(u64, u64)",
      allowedSlots: "AllowedSlots"
    },
    OpaqueKeyOwnershipProof: "Bytes",
    Randomness: "Hash",
    // [u8; RANDOMNESS_LENGTH],
    RawBabePreDigest: {
      _enum: {
        Phantom: "Null",
        // index starts at 1... empty slot at 0
        Primary: "RawBabePreDigestPrimary",
        SecondaryPlain: "RawBabePreDigestSecondaryPlain",
        SecondaryVRF: "RawBabePreDigestSecondaryVRF"
      }
    },
    RawBabePreDigestPrimary: {
      authorityIndex: "u32",
      // AuthorityIndex (also in aura)
      slotNumber: "SlotNumber",
      vrfOutput: "VrfOutput",
      vrfProof: "VrfProof"
    },
    RawBabePreDigestSecondaryPlain: {
      authorityIndex: "u32",
      // AuthorityIndex (also in aura)
      slotNumber: "SlotNumber"
    },
    RawBabePreDigestSecondaryVRF: {
      authorityIndex: "u32",
      slotNumber: "SlotNumber",
      vrfOutput: "VrfOutput",
      vrfProof: "VrfProof"
    },
    RawBabePreDigestTo159: {
      _enum: {
        Primary: "RawBabePreDigestPrimaryTo159",
        Secondary: "RawBabePreDigestSecondaryTo159"
      }
    },
    RawBabePreDigestPrimaryTo159: {
      authorityIndex: "u32",
      slotNumber: "SlotNumber",
      weight: "BabeBlockWeight",
      vrfOutput: "VrfOutput",
      vrfProof: "VrfProof"
    },
    RawBabePreDigestSecondaryTo159: {
      authorityIndex: "u32",
      slotNumber: "SlotNumber",
      weight: "BabeBlockWeight"
    },
    // a cross old/new compatible version of the digest, that is _only_ useful
    // for partial parsing and extraction of the author. This assumes that all
    // entries has the authorityIndex in the first position - and that it is all
    // we are interested in
    RawBabePreDigestCompat: {
      _enum: {
        Zero: "u32",
        One: "u32",
        Two: "u32",
        Three: "u32"
      }
    },
    SlotNumber: "u64",
    VrfData: "[u8; 32]",
    VrfOutput: "[u8; 32]",
    VrfProof: "[u8; 64]"
  }
};

// node_modules/@polkadot/types/interfaces/balances/definitions.js
var definitions_default9 = {
  rpc: {},
  types: {
    AccountData: {
      free: "Balance",
      reserved: "Balance",
      miscFrozen: "Balance",
      feeFrozen: "Balance"
    },
    BalanceLockTo212: {
      id: "LockIdentifier",
      amount: "Balance",
      until: "BlockNumber",
      reasons: "WithdrawReasons"
    },
    BalanceLock: {
      id: "LockIdentifier",
      amount: "Balance",
      reasons: "Reasons"
    },
    BalanceStatus: {
      _enum: ["Free", "Reserved"]
    },
    Reasons: {
      _enum: ["Fee", "Misc", "All"]
    },
    ReserveData: {
      id: "ReserveIdentifier",
      amount: "Balance"
    },
    ReserveIdentifier: "[u8; 8]",
    VestingSchedule: {
      offset: "Balance",
      perBlock: "Balance",
      startingBlock: "BlockNumber"
    },
    WithdrawReasons: {
      _set: {
        TransactionPayment: 1,
        Transfer: 2,
        Reserve: 4,
        Fee: 8,
        Tip: 16
      }
    }
  }
};

// node_modules/@polkadot/types/interfaces/beefy/rpc.js
var rpc2 = {
  getFinalizedHead: {
    description: "Returns hash of the latest BEEFY finalized block as seen by this client.",
    params: [],
    type: "H256"
  },
  subscribeJustifications: {
    description: "Returns the block most recently finalized by BEEFY, alongside its justification.",
    params: [],
    pubsub: [
      "justifications",
      "subscribeJustifications",
      "unsubscribeJustifications"
    ],
    type: "BeefyVersionedFinalityProof"
  }
};

// node_modules/@polkadot/types/interfaces/beefy/runtime.js
var BEEFY_V1_V3 = {
  beefy_genesis: {
    description: "Return the block number where BEEFY consensus is enabled/started",
    params: [],
    type: "Option<BlockNumber>"
  },
  generate_key_ownership_proof: {
    description: "Generates a proof of key ownership for the given authority in the given set.",
    params: [
      {
        name: "setId",
        type: "ValidatorSetId"
      },
      {
        name: "authorityId",
        type: "AuthorityId"
      }
    ],
    type: "Option<OpaqueKeyOwnershipProof>"
  },
  submit_report_equivocation_unsigned_extrinsic: {
    description: "Submits an unsigned extrinsic to report an equivocation.",
    params: [
      {
        name: "equivocationProof",
        type: "BeefyEquivocationProof"
      },
      {
        name: "keyOwnerProof",
        type: "OpaqueKeyOwnershipProof"
      }
    ],
    type: "Option<Null>"
  },
  validator_set: {
    description: "Return the current active BEEFY validator set",
    params: [],
    type: "Option<ValidatorSet>"
  }
};
var BEEFY_MMR_V1 = {
  authority_set_proof: {
    description: "Return the currently active BEEFY authority set proof.",
    params: [],
    type: "BeefyAuthoritySet"
  },
  next_authority_set_proof: {
    description: "Return the next/queued BEEFY authority set proof.",
    params: [],
    type: "BeefyNextAuthoritySet"
  }
};
var runtime7 = {
  BeefyApi: [
    {
      methods: BEEFY_V1_V3,
      version: 3
    },
    {
      methods: BEEFY_V1_V3,
      version: 2
    },
    {
      methods: BEEFY_V1_V3,
      version: 1
    }
  ],
  BeefyMmrApi: [
    {
      methods: BEEFY_MMR_V1,
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/beefy/definitions.js
var definitions_default10 = {
  rpc: rpc2,
  runtime: runtime7,
  types: {
    BeefyAuthoritySet: {
      id: "u64",
      len: "u32",
      root: "H256"
    },
    BeefyCommitment: {
      payload: "BeefyPayload",
      blockNumber: "BlockNumber",
      validatorSetId: "ValidatorSetId"
    },
    BeefyId: "[u8; 33]",
    BeefyEquivocationProof: {
      first: "BeefyVoteMessage",
      second: "BeefyVoteMessage"
    },
    BeefyCompactSignedCommitment: {
      commitment: "BeefyCommitment",
      signaturesFrom: "Vec<u8>",
      validatorSetLen: "u32",
      signaturesCompact: "Vec<EcdsaSignature>"
    },
    BeefySignedCommitment: {
      commitment: "BeefyCommitment",
      signatures: "Vec<Option<EcdsaSignature>>"
    },
    BeefyVersionedFinalityProof: {
      _enum: {
        V0: "Null",
        V1: "BeefyCompactSignedCommitment"
      }
    },
    BeefyNextAuthoritySet: {
      id: "u64",
      len: "u32",
      root: "H256"
    },
    BeefyPayload: "Vec<(BeefyPayloadId, Bytes)>",
    BeefyPayloadId: "[u8;2]",
    BeefyVoteMessage: {
      commitment: "BeefyCommitment",
      id: "AuthorityId",
      signature: "Signature"
    },
    MmrRootHash: "H256",
    ValidatorSetId: "u64",
    ValidatorSet: {
      validators: "Vec<AuthorityId>",
      id: "ValidatorSetId"
    }
  }
};

// node_modules/@polkadot/types/interfaces/benchmark/runtime.js
var runtime8 = {
  Benchmark: [
    {
      methods: {
        benchmark_metadata: {
          description: "Get the benchmark metadata available for this runtime.",
          params: [
            {
              name: "extra",
              type: "bool"
            }
          ],
          type: "(Vec<BenchmarkList>, Vec<StorageInfo>)"
        },
        dispatch_benchmark: {
          description: "Dispatch the given benchmark.",
          params: [
            {
              name: "config",
              type: "BenchmarkConfig"
            }
          ],
          type: "Result<Vec<BenchmarkBatch>, Text>"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/benchmark/definitions.js
var definitions_default11 = {
  rpc: {},
  runtime: runtime8,
  types: {
    BenchmarkBatch: {
      pallet: "Text",
      instance: "Text",
      benchmark: "Text",
      results: "Vec<BenchmarkResult>"
    },
    BenchmarkConfig: {
      pallet: "Bytes",
      benchmark: "Bytes",
      selectedComponents: "Vec<(BenchmarkParameter, u32)>",
      verify: "bool",
      internalRepeats: "u32"
    },
    BenchmarkList: {
      pallet: "Bytes",
      instance: "Bytes",
      benchmarks: "Vec<BenchmarkMetadata>"
    },
    BenchmarkMetadata: {
      name: "Bytes",
      components: "Vec<(BenchmarkParameter, u32, u32)>"
    },
    BenchmarkParameter: {
      _enum: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    },
    BenchmarkResult: {
      components: "Vec<(BenchmarkParameter, u32)>",
      extrinsicTime: "u128",
      storageRootTime: "u128",
      reads: "u32",
      repeatReads: "u32",
      writes: "u32",
      repeatWrites: "u32",
      proofSize: "u32",
      benchKeys: "Vec<(Vec<u8>, u32, u32, bool)>"
    }
  }
};

// node_modules/@polkadot/types/interfaces/blockbuilder/runtime.js
var BB_V2_TO_V4 = {
  // this was removed after V4
  random_seed: {
    description: "Generate a random seed.",
    params: [],
    type: "Hash"
  }
};
var BB_V2_TO_V5 = {
  apply_extrinsic: {
    description: "Apply the given extrinsic.",
    params: [
      {
        name: "extrinsic",
        type: "Extrinsic"
      }
    ],
    type: "ApplyExtrinsicResultPre6"
  }
};
var BB_V2_TO_V6 = {
  check_inherents: {
    description: "Check that the inherents are valid.",
    params: [
      {
        name: "block",
        type: "Block"
      },
      {
        name: "data",
        type: "InherentData"
      }
    ],
    type: "CheckInherentsResult"
  },
  inherent_extrinsics: {
    description: "Generate inherent extrinsics.",
    params: [
      {
        name: "inherent",
        type: "InherentData"
      }
    ],
    type: "Vec<Extrinsic>"
  }
};
var BB_V3_TO_V6 = {
  // renamed in v3 from finalize_block
  finalize_block: {
    description: "Finish the current block.",
    params: [],
    type: "Header"
  }
};
var runtime9 = {
  BlockBuilder: [
    {
      methods: __spreadValues(__spreadValues({
        apply_extrinsic: {
          description: "Apply the given extrinsic.",
          params: [
            {
              name: "extrinsic",
              type: "Extrinsic"
            }
          ],
          type: "ApplyExtrinsicResult"
        }
      }, BB_V2_TO_V6), BB_V3_TO_V6),
      version: 6
    },
    {
      methods: __spreadValues(__spreadValues(__spreadValues({}, BB_V2_TO_V5), BB_V2_TO_V6), BB_V3_TO_V6),
      version: 5
    },
    {
      methods: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, BB_V2_TO_V4), BB_V2_TO_V5), BB_V2_TO_V6), BB_V3_TO_V6),
      version: 4
    },
    {
      methods: __spreadValues(__spreadValues(__spreadValues({}, BB_V2_TO_V4), BB_V2_TO_V6), BB_V3_TO_V6),
      version: 3
    },
    {
      methods: __spreadValues(__spreadValues({
        finalise_block: {
          description: "Finish the current block.",
          params: [],
          type: "Header"
        }
      }, BB_V2_TO_V4), BB_V2_TO_V6),
      version: 2
    }
  ]
};

// node_modules/@polkadot/types/interfaces/blockbuilder/definitions.js
var definitions_default12 = {
  rpc: {},
  runtime: runtime9,
  types: {
    CheckInherentsResult: {
      okay: "bool",
      fatalError: "bool",
      errors: "InherentData"
    },
    InherentData: {
      data: "BTreeMap<InherentIdentifier, Bytes>"
    },
    InherentIdentifier: "[u8; 8]"
  }
};

// node_modules/@polkadot/types/interfaces/collective/definitions.js
var definitions_default13 = {
  rpc: {},
  types: {
    CollectiveOrigin: {
      _enum: {
        Members: "(MemberCount, MemberCount)",
        Member: "AccountId"
      }
    },
    MemberCount: "u32",
    ProposalIndex: "u32",
    VotesTo230: {
      index: "ProposalIndex",
      threshold: "MemberCount",
      ayes: "Vec<AccountId>",
      nays: "Vec<AccountId>"
    },
    Votes: {
      index: "ProposalIndex",
      threshold: "MemberCount",
      ayes: "Vec<AccountId>",
      nays: "Vec<AccountId>",
      end: "BlockNumber"
    }
  }
};

// node_modules/@polkadot/types/interfaces/consensus/definitions.js
var definitions_default14 = {
  rpc: {},
  types: {
    AuthorityId: "AccountId",
    RawVRFOutput: "[u8; 32]"
  }
};

// node_modules/@polkadot/types/interfaces/contracts/rpc.js
var rpc3 = {
  call: {
    deprecated: "Use the runtime interface `api.call.contractsApi.call` instead",
    description: "Executes a call to a contract",
    params: [
      {
        name: "callRequest",
        type: "ContractCallRequest"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "ContractExecResult"
  },
  getStorage: {
    deprecated: "Use the runtime interface `api.call.contractsApi.getStorage` instead",
    description: "Returns the value under a specified storage key in a contract",
    params: [
      {
        name: "address",
        type: "AccountId"
      },
      {
        name: "key",
        type: "H256"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "Option<Bytes>"
  },
  instantiate: {
    deprecated: "Use the runtime interface `api.call.contractsApi.instantiate` instead",
    description: "Instantiate a new contract",
    params: [
      {
        name: "request",
        type: "InstantiateRequestV1"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "ContractInstantiateResult"
  },
  rentProjection: {
    deprecated: "Not available in newer versions of the contracts interfaces",
    description: "Returns the projected time a given contract will be able to sustain paying its rent",
    params: [
      {
        name: "address",
        type: "AccountId"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "Option<BlockNumber>"
  },
  uploadCode: {
    deprecated: "Use the runtime interface `api.call.contractsApi.uploadCode` instead",
    description: "Upload new code without instantiating a contract from it",
    // The RPC here is terribly misnamed - somebody forgot how the RPCs
    // are actually done, ie. <module>_<camelCasedMethod>
    endpoint: "contracts_upload_code",
    params: [
      {
        name: "uploadRequest",
        type: "CodeUploadRequest"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "CodeUploadResult"
  }
};

// node_modules/@polkadot/types/interfaces/contracts/runtime.js
var SHARED_V1_V2 = {
  get_storage: {
    description: "Query a given storage key in a given contract.",
    params: [
      {
        name: "address",
        type: "AccountId"
      },
      {
        name: "key",
        type: "Bytes"
      }
    ],
    type: "Option<Bytes>"
  },
  upload_code: {
    description: "Upload new code without instantiating a contract from it.",
    params: [
      {
        name: "origin",
        type: "AccountId"
      },
      {
        name: "code",
        type: "Bytes"
      },
      {
        name: "storageDepositLimit",
        type: "Option<Balance>"
      }
    ],
    type: "CodeUploadResult"
  }
};
var runtime10 = {
  ContractsApi: [
    {
      methods: __spreadValues({
        call: {
          description: "Perform a call from a specified account to a given contract.",
          params: [
            {
              name: "origin",
              type: "AccountId"
            },
            {
              name: "dest",
              type: "AccountId"
            },
            {
              name: "value",
              type: "Balance"
            },
            {
              name: "gasLimit",
              type: "Option<WeightV2>"
            },
            {
              name: "storageDepositLimit",
              type: "Option<Balance>"
            },
            {
              name: "inputData",
              type: "Vec<u8>"
            }
          ],
          type: "ContractExecResult"
        },
        instantiate: {
          description: "Instantiate a new contract.",
          params: [
            {
              name: "origin",
              type: "AccountId"
            },
            {
              name: "value",
              type: "Balance"
            },
            {
              name: "gasLimit",
              type: "Option<WeightV2>"
            },
            {
              name: "storageDepositLimit",
              type: "Option<Balance>"
            },
            {
              name: "code",
              type: "CodeSource"
            },
            {
              name: "data",
              type: "Bytes"
            },
            {
              name: "salt",
              type: "Bytes"
            }
          ],
          type: "ContractInstantiateResult"
        }
      }, SHARED_V1_V2),
      version: 2
    },
    {
      methods: __spreadValues({
        call: {
          description: "Perform a call from a specified account to a given contract.",
          params: [
            {
              name: "origin",
              type: "AccountId"
            },
            {
              name: "dest",
              type: "AccountId"
            },
            {
              name: "value",
              type: "Balance"
            },
            {
              name: "gasLimit",
              type: "u64"
            },
            {
              name: "storageDepositLimit",
              type: "Option<Balance>"
            },
            {
              name: "inputData",
              type: "Vec<u8>"
            }
          ],
          type: "ContractExecResultU64"
        },
        instantiate: {
          description: "Instantiate a new contract.",
          params: [
            {
              name: "origin",
              type: "AccountId"
            },
            {
              name: "value",
              type: "Balance"
            },
            {
              name: "gasLimit",
              type: "u64"
            },
            {
              name: "storageDepositLimit",
              type: "Option<Balance>"
            },
            {
              name: "code",
              type: "CodeSource"
            },
            {
              name: "data",
              type: "Bytes"
            },
            {
              name: "salt",
              type: "Bytes"
            }
          ],
          type: "ContractInstantiateResultU64"
        }
      }, SHARED_V1_V2),
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/contracts/definitions.js
var definitions_default15 = {
  rpc: rpc3,
  runtime: runtime10,
  types: {
    AliveContractInfo: {
      trieId: "TrieId",
      storageSize: "u32",
      pairCount: "u32",
      codeHash: "CodeHash",
      rentAllowance: "Balance",
      rentPaid: "Balance",
      deductBlock: "BlockNumber",
      lastWrite: "Option<BlockNumber>",
      _reserved: "Option<Null>"
    },
    CodeHash: "Hash",
    CodeSource: {
      _enum: {
        Upload: "Bytes",
        Existing: "Hash"
      }
    },
    CodeUploadRequest: {
      origin: "AccountId",
      code: "Bytes",
      storageDepositLimit: "Option<Balance>"
    },
    CodeUploadResult: "Result<CodeUploadResultValue, DispatchError>",
    CodeUploadResultValue: {
      codeHash: "CodeHash",
      deposit: "Balance"
    },
    ContractCallRequest: {
      origin: "AccountId",
      dest: "AccountId",
      value: "Balance",
      gasLimit: "u64",
      storageDepositLimit: "Option<Balance>",
      inputData: "Bytes"
    },
    ContractExecResultSuccessTo255: {
      status: "u8",
      data: "Raw"
    },
    ContractExecResultTo255: {
      _enum: {
        Success: "ContractExecResultSuccessTo255",
        Error: "Null"
      }
    },
    ContractExecResultSuccessTo260: {
      flags: "ContractReturnFlags",
      data: "Bytes",
      gasConsumed: "u64"
    },
    ContractExecResultTo260: {
      _enum: {
        Success: "ContractExecResultSuccessTo260",
        Error: "Null"
      }
    },
    ContractExecResultOk: {
      flags: "ContractReturnFlags",
      data: "Bytes"
    },
    ContractExecResultResult: "Result<ContractExecResultOk, DispatchError>",
    ContractExecResultTo267: {
      gasConsumed: "u64",
      debugMessage: "Text",
      result: "ContractExecResultResult"
    },
    ContractExecResult: {
      gasConsumed: "Weight",
      gasRequired: "Weight",
      storageDeposit: "StorageDeposit",
      debugMessage: "Text",
      result: "ContractExecResultResult"
    },
    ContractExecResultU64: {
      gasConsumed: "u64",
      gasRequired: "u64",
      storageDeposit: "StorageDeposit",
      debugMessage: "Text",
      result: "ContractExecResultResult"
    },
    ContractInfo: {
      _enum: {
        Alive: "AliveContractInfo",
        Tombstone: "TombstoneContractInfo"
      }
    },
    ContractCallFlags: {
      _set: {
        _bitLength: 32,
        ForwardInput: 1,
        CloneInput: 2,
        TailCall: 4,
        AllowReentry: 8
      }
    },
    ContractReturnFlags: {
      _set: {
        _bitLength: 32,
        Revert: 1
      }
    },
    ContractStorageKey: "[u8; 32]",
    DeletedContract: {
      pairCount: "u32",
      trieId: "TrieId"
    },
    ExecReturnValue: {
      flags: "ContractReturnFlags",
      data: "Bytes"
    },
    Gas: "u64",
    HostFnWeightsTo264: {
      caller: "Weight",
      address: "Weight",
      gasLeft: "Weight",
      balance: "Weight",
      valueTransferred: "Weight",
      minimumBalance: "Weight",
      tombstoneDeposit: "Weight",
      rentAllowance: "Weight",
      blockNumber: "Weight",
      now: "Weight",
      weightToFee: "Weight",
      gas: "Weight",
      input: "Weight",
      inputPerByte: "Weight",
      return: "Weight",
      returnPerByte: "Weight",
      terminate: "Weight",
      restoreTo: "Weight",
      restoreToPerDelta: "Weight",
      random: "Weight",
      depositEvent: "Weight",
      depositEventPerTopic: "Weight",
      depositEventPerByte: "Weight",
      setRentAllowance: "Weight",
      setStorage: "Weight",
      setStoragePerByte: "Weight",
      clearStorage: "Weight",
      getStorage: "Weight",
      getStoragePerByte: "Weight",
      transfer: "Weight",
      call: "Weight",
      callTransferSurcharge: "Weight",
      callPerInputByte: "Weight",
      callPerOutputByte: "Weight",
      instantiate: "Weight",
      instantiatePerInputByte: "Weight",
      instantiatePerOutputByte: "Weight",
      hashSha2256: "Weight",
      hashSha2256PerByte: "Weight",
      hashKeccak256: "Weight",
      hashKeccak256PerByte: "Weight",
      hashBlake2256: "Weight",
      hashBlake2256PerByte: "Weight",
      hashBlake2128: "Weight",
      hashBlake2128PerByte: "Weight"
    },
    HostFnWeights: {
      caller: "Weight",
      address: "Weight",
      gasLeft: "Weight",
      balance: "Weight",
      valueTransferred: "Weight",
      minimumBalance: "Weight",
      tombstoneDeposit: "Weight",
      rentAllowance: "Weight",
      blockNumber: "Weight",
      now: "Weight",
      weightToFee: "Weight",
      gas: "Weight",
      input: "Weight",
      inputPerByte: "Weight",
      return: "Weight",
      returnPerByte: "Weight",
      terminate: "Weight",
      terminatePerCodeByte: "Weight",
      restoreTo: "Weight",
      restoreToPerCallerCodeByte: "Weight",
      restoreToPerTombstoneCodeByte: "Weight",
      restoreToPerDelta: "Weight",
      random: "Weight",
      depositEvent: "Weight",
      depositEventPerTopic: "Weight",
      depositEventPerByte: "Weight",
      setRentAllowance: "Weight",
      setStorage: "Weight",
      setStoragePerByte: "Weight",
      clearStorage: "Weight",
      getStorage: "Weight",
      getStoragePerByte: "Weight",
      transfer: "Weight",
      call: "Weight",
      callPerCodeByte: "Weight",
      callTransferSurcharge: "Weight",
      callPerInputByte: "Weight",
      callPerOutputByte: "Weight",
      instantiate: "Weight",
      instantiatePerCodeByte: "Weight",
      instantiatePerInputByte: "Weight",
      instantiatePerOutputByte: "Weight",
      instantiatePerSaltByte: "Weight",
      hashSha2256: "Weight",
      hashSha2256PerByte: "Weight",
      hashKeccak256: "Weight",
      hashKeccak256PerByte: "Weight",
      hashBlake2256: "Weight",
      hashBlake2256PerByte: "Weight",
      hashBlake2128: "Weight",
      hashBlake2128PerByte: "Weight",
      rentParams: "Weight"
    },
    InstantiateRequestV1: {
      origin: "AccountId",
      value: "Balance",
      gasLimit: "Gas",
      code: "Bytes",
      data: "Bytes",
      salt: "Bytes"
    },
    InstantiateRequestV2: {
      _fallback: "InstantiateRequestV1",
      origin: "AccountId",
      value: "Balance",
      gasLimit: "Gas",
      storageDepositLimit: "Option<Balance>",
      code: "Bytes",
      data: "Bytes",
      salt: "Bytes"
    },
    InstantiateRequest: {
      _fallback: "InstantiateRequestV2",
      origin: "AccountId",
      value: "Balance",
      gasLimit: "Gas",
      storageDepositLimit: "Option<Balance>",
      code: "CodeSource",
      data: "Bytes",
      salt: "Bytes"
    },
    ContractInstantiateResultTo267: "Result<InstantiateReturnValueTo267, Null>",
    ContractInstantiateResultTo299: "Result<InstantiateReturnValueOk, Null>",
    ContractInstantiateResult: {
      gasConsumed: "WeightV2",
      gasRequired: "WeightV2",
      storageDeposit: "StorageDeposit",
      debugMessage: "Text",
      result: "InstantiateReturnValue"
    },
    ContractInstantiateResultU64: {
      // only this one can fail, the current version (above) _should_ be correctly
      // versioned now, aka no more deprecated RPCs involved, only runtime calls
      _fallback: "ContractInstantiateResultTo299",
      gasConsumed: "u64",
      gasRequired: "u64",
      storageDeposit: "StorageDeposit",
      debugMessage: "Text",
      result: "InstantiateReturnValue"
    },
    InstantiateReturnValueTo267: {
      result: "ExecReturnValue",
      accountId: "AccountId",
      rentProjection: "Option<RentProjection>"
    },
    InstantiateReturnValueOk: {
      result: "ExecReturnValue",
      accountId: "AccountId"
    },
    InstantiateReturnValue: "Result<InstantiateReturnValueOk, DispatchError>",
    InstructionWeights: {
      i64const: "u32",
      i64load: "u32",
      i64store: "u32",
      select: "u32",
      rIf: "u32",
      br: "u32",
      brIf: "u32",
      brIable: "u32",
      brIablePerEntry: "u32",
      call: "u32",
      callIndirect: "u32",
      callIndirectPerParam: "u32",
      localGet: "u32",
      localSet: "u32",
      local_tee: "u32",
      globalGet: "u32",
      globalSet: "u32",
      memoryCurrent: "u32",
      memoryGrow: "u32",
      i64clz: "u32",
      i64ctz: "u32",
      i64popcnt: "u32",
      i64eqz: "u32",
      i64extendsi32: "u32",
      i64extendui32: "u32",
      i32wrapi64: "u32",
      i64eq: "u32",
      i64ne: "u32",
      i64lts: "u32",
      i64ltu: "u32",
      i64gts: "u32",
      i64gtu: "u32",
      i64les: "u32",
      i64leu: "u32",
      i64ges: "u32",
      i64geu: "u32",
      i64add: "u32",
      i64sub: "u32",
      i64mul: "u32",
      i64divs: "u32",
      i64divu: "u32",
      i64rems: "u32",
      i64remu: "u32",
      i64and: "u32",
      i64or: "u32",
      i64xor: "u32",
      i64shl: "u32",
      i64shrs: "u32",
      i64shru: "u32",
      i64rotl: "u32",
      i64rotr: "u32"
    },
    LimitsTo264: {
      eventTopics: "u32",
      stackHeight: "u32",
      globals: "u32",
      parameters: "u32",
      memoryPages: "u32",
      tableSize: "u32",
      brTableSize: "u32",
      subjectLen: "u32",
      codeSize: "u32"
    },
    Limits: {
      eventTopics: "u32",
      stackHeight: "u32",
      globals: "u32",
      parameters: "u32",
      memoryPages: "u32",
      tableSize: "u32",
      brTableSize: "u32",
      subjectLen: "u32"
    },
    PrefabWasmModule: {
      scheduleVersion: "Compact<u32>",
      initial: "Compact<u32>",
      maximum: "Compact<u32>",
      refcount: "Compact<u64>",
      _reserved: "Option<Null>",
      code: "Bytes",
      originalCodeLen: "u32"
    },
    RentProjection: {
      _enum: {
        EvictionAt: "BlockNumber",
        NoEviction: "Null"
      }
    },
    ScheduleTo212: {
      version: "u32",
      putCodePerByteCost: "Gas",
      growMemCost: "Gas",
      regularOpCost: "Gas",
      returnDataPerByteCost: "Gas",
      eventDataPerByteCost: "Gas",
      eventPerTopicCost: "Gas",
      eventBaseCost: "Gas",
      sandboxDataReadCost: "Gas",
      sandboxDataWriteCost: "Gas",
      maxEventTopics: "u32",
      maxStackHeight: "u32",
      maxMemoryPages: "u32",
      enablePrintln: "bool",
      maxSubjectLen: "u32"
    },
    ScheduleTo258: {
      version: "u32",
      putCodePerByteCost: "Gas",
      growMemCost: "Gas",
      regularOpCost: "Gas",
      returnDataPerByteCost: "Gas",
      eventDataPerByteCost: "Gas",
      eventPerTopicCost: "Gas",
      eventBaseCost: "Gas",
      sandboxDataReadCost: "Gas",
      sandboxDataWriteCost: "Gas",
      transferCost: "Gas",
      maxEventTopics: "u32",
      maxStackHeight: "u32",
      maxMemoryPages: "u32",
      enablePrintln: "bool",
      maxSubjectLen: "u32"
    },
    ScheduleTo264: {
      version: "u32",
      enablePrintln: "bool",
      limits: "LimitsTo264",
      instructionWeights: "InstructionWeights",
      hostFnWeights: "HostFnWeightsTo264"
    },
    Schedule: {
      version: "u32",
      enablePrintln: "bool",
      limits: "Limits",
      instructionWeights: "InstructionWeights",
      hostFnWeights: "HostFnWeights"
    },
    SeedOf: "Hash",
    StorageDeposit: {
      _enum: {
        Refund: "Balance",
        Charge: "Balance"
      }
    },
    TombstoneContractInfo: "Hash",
    TrieId: "Bytes"
  }
};

// node_modules/@polkadot/types/interfaces/democracy/definitions.js
var AllConvictions = [
  // 0.1x votes, unlocked.
  "None",
  // 1x votes, locked for an enactment period following a successful vote.
  "Locked1x",
  // 2x votes, locked for 2x enactment periods following a successful vote.
  "Locked2x",
  // 3x votes, locked for 4x...
  "Locked3x",
  // 4x votes, locked for 8x...
  "Locked4x",
  // 5x votes, locked for 16x...
  "Locked5x",
  // 6x votes, locked for 32x...
  "Locked6x"
];
var definitions_default16 = {
  rpc: {},
  types: {
    AccountVote: {
      _enum: {
        Standard: "AccountVoteStandard",
        Split: "AccountVoteSplit"
      }
    },
    AccountVoteSplit: {
      aye: "Balance",
      nay: "Balance"
    },
    AccountVoteStandard: {
      vote: "Vote",
      balance: "Balance"
    },
    Conviction: {
      _enum: AllConvictions
    },
    Delegations: {
      votes: "Balance",
      capital: "Balance"
    },
    PreimageStatus: {
      _enum: {
        Missing: "BlockNumber",
        Available: "PreimageStatusAvailable"
      }
    },
    PreimageStatusAvailable: {
      data: "Bytes",
      provider: "AccountId",
      deposit: "Balance",
      since: "BlockNumber",
      expiry: "Option<BlockNumber>"
    },
    PriorLock: "(BlockNumber, Balance)",
    PropIndex: "u32",
    Proposal: "Call",
    ProxyState: {
      _enum: {
        Open: "AccountId",
        Active: "AccountId"
      }
    },
    ReferendumIndex: "u32",
    ReferendumInfoTo239: {
      end: "BlockNumber",
      proposalHash: "Hash",
      threshold: "VoteThreshold",
      delay: "BlockNumber"
    },
    ReferendumInfo: {
      _enum: {
        Ongoing: "ReferendumStatus",
        Finished: "ReferendumInfoFinished"
      }
    },
    ReferendumInfoFinished: {
      approved: "bool",
      end: "BlockNumber"
    },
    ReferendumStatus: {
      end: "BlockNumber",
      proposalHash: "Hash",
      threshold: "VoteThreshold",
      delay: "BlockNumber",
      tally: "Tally"
    },
    Tally: {
      ayes: "Balance",
      nays: "Balance",
      turnout: "Balance"
    },
    Voting: {
      _enum: {
        Direct: "VotingDirect",
        Delegating: "VotingDelegating"
      }
    },
    VotingDirect: {
      votes: "Vec<VotingDirectVote>",
      delegations: "Delegations",
      prior: "PriorLock"
    },
    VotingDirectVote: "(ReferendumIndex, AccountVote)",
    VotingDelegating: {
      balance: "Balance",
      target: "AccountId",
      conviction: "Conviction",
      delegations: "Delegations",
      prior: "PriorLock"
    }
  }
};

// node_modules/@polkadot/types/interfaces/dev/rpc.js
var rpc4 = {
  getBlockStats: {
    description: "Reexecute the specified `block_hash` and gather statistics while doing so",
    isUnsafe: true,
    params: [
      {
        isHistoric: true,
        name: "at",
        type: "Hash"
      }
    ],
    type: "Option<BlockStats>"
  }
};

// node_modules/@polkadot/types/interfaces/dev/definitions.js
var definitions_default17 = {
  rpc: rpc4,
  types: {
    BlockStats: {
      witnessLen: "u64",
      witnessCompactLen: "u64",
      blockLen: "u64",
      blockNumExtrinsics: "u64"
    }
  }
};

// node_modules/@polkadot/types/interfaces/discovery/runtime.js
var runtime11 = {
  AuthorityDiscoveryApi: [
    {
      methods: {
        authorities: {
          description: "Retrieve authority identifiers of the current and next authority set.",
          params: [],
          type: "Vec<AuthorityId>"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/discovery/definitions.js
var definitions_default18 = {
  rpc: {},
  runtime: runtime11,
  types: {}
};

// node_modules/@polkadot/types/interfaces/elections/definitions.js
var definitions_default19 = {
  rpc: {},
  types: {
    ApprovalFlag: "u32",
    DefunctVoter: {
      who: "AccountId",
      voteCount: "Compact<u32>",
      candidateCount: "Compact<u32>"
    },
    Renouncing: {
      _enum: {
        Member: "Null",
        RunnerUp: "Null",
        Candidate: "Compact<u32>"
      }
    },
    SetIndex: "u32",
    Vote: "GenericVote",
    VoteIndex: "u32",
    VoterInfo: {
      lastActive: "VoteIndex",
      lastWin: "VoteIndex",
      pot: "Balance",
      stake: "Balance"
    },
    VoteThreshold: {
      _enum: [
        "Super Majority Approve",
        "Super Majority Against",
        "Simple Majority"
      ]
    }
  }
};

// node_modules/@polkadot/types/interfaces/engine/rpc.js
var rpc5 = {
  createBlock: {
    description: "Instructs the manual-seal authorship task to create a new block",
    params: [
      {
        name: "createEmpty",
        type: "bool"
      },
      {
        name: "finalize",
        type: "bool"
      },
      {
        isOptional: true,
        name: "parentHash",
        type: "BlockHash"
      }
    ],
    type: "CreatedBlock"
  },
  finalizeBlock: {
    description: "Instructs the manual-seal authorship task to finalize a block",
    params: [
      {
        name: "hash",
        type: "BlockHash"
      },
      {
        isOptional: true,
        name: "justification",
        type: "Justification"
      }
    ],
    type: "bool"
  }
};

// node_modules/@polkadot/types/interfaces/engine/definitions.js
var definitions_default20 = {
  rpc: rpc5,
  types: {
    CreatedBlock: {
      _alias: {
        blockHash: "hash"
      },
      blockHash: "BlockHash",
      aux: "ImportedAux"
    },
    ImportedAux: {
      headerOnly: "bool",
      clearJustificationRequests: "bool",
      needsJustification: "bool",
      badJustification: "bool",
      needsFinalityProof: "bool",
      isNewBest: "bool"
    }
  }
};

// node_modules/@polkadot/types/interfaces/evm/definitions.js
var definitions_default21 = {
  rpc: {},
  types: {
    EvmAccount: {
      nonce: "u256",
      balance: "u256"
    },
    EvmCallInfo: {
      exitReason: "ExitReason",
      value: "Bytes",
      usedGas: "U256",
      logs: "Vec<EvmLog>"
    },
    EvmCreateInfo: {
      exitReason: "ExitReason",
      value: "H160",
      usedGas: "U256",
      logs: "Vec<EvmLog>"
    },
    EvmCallInfoV2: {
      exitReason: "ExitReason",
      value: "Bytes",
      usedGas: "U256",
      weightInfo: "Option<EvmWeightInfo>",
      logs: "Vec<EvmLog>"
    },
    EvmCreateInfoV2: {
      exitReason: "ExitReason",
      value: "H160",
      usedGas: "U256",
      weightInfo: "Option<EvmWeightInfo>",
      logs: "Vec<EvmLog>"
    },
    EvmLog: {
      address: "H160",
      topics: "Vec<H256>",
      data: "Bytes"
    },
    EvmVicinity: {
      gasPrice: "u256",
      origin: "H160"
    },
    EvmWeightInfo: {
      refTimeLimit: "Option<u64>",
      proofSizeLimit: "Option<u64>",
      refTimeUsage: "Option<u64>",
      proofSizeUsage: "Option<u64>"
    },
    ExitError: {
      _enum: {
        StackUnderflow: "Null",
        StackOverflow: "Null",
        InvalidJump: "Null",
        InvalidRange: "Null",
        DesignatedInvalid: "Null",
        CallTooDeep: "Null",
        CreateCollision: "Null",
        CreateContractLimit: "Null",
        OutOfOffset: "Null",
        OutOfGas: "Null",
        OutOfFund: "Null",
        PCUnderflow: "Null",
        CreateEmpty: "Null",
        Other: "Text"
      }
    },
    ExitFatal: {
      _enum: {
        NotSupported: "Null",
        UnhandledInterrupt: "Null",
        CallErrorAsFatal: "ExitError",
        Other: "Text"
      }
    },
    ExitReason: {
      _enum: {
        Succeed: "ExitSucceed",
        Error: "ExitError",
        Revert: "ExitRevert",
        Fatal: "ExitFatal"
      }
    },
    ExitRevert: {
      _enum: ["Reverted"]
    },
    ExitSucceed: {
      _enum: ["Stopped", "Returned", "Suicided"]
    }
  }
};

// node_modules/@polkadot/types/interfaces/extrinsics/definitions.js
var definitions_default22 = {
  rpc: {},
  types: {
    Extrinsic: "GenericExtrinsic",
    ExtrinsicEra: "GenericExtrinsicEra",
    ExtrinsicPayload: "GenericExtrinsicPayload",
    ExtrinsicSignature: "MultiSignature",
    ExtrinsicV4: "GenericExtrinsicV4",
    ExtrinsicPayloadV4: "GenericExtrinsicPayloadV4",
    ExtrinsicSignatureV4: "GenericExtrinsicSignatureV4",
    ExtrinsicUnknown: "GenericExtrinsicUnknown",
    ExtrinsicPayloadUnknown: "GenericExtrinsicPayloadUnknown",
    // eras
    Era: "ExtrinsicEra",
    ImmortalEra: "GenericImmortalEra",
    MortalEra: "GenericMortalEra",
    // signatures & signer
    AnySignature: "H512",
    MultiSignature: {
      _enum: {
        Ed25519: "Ed25519Signature",
        Sr25519: "Sr25519Signature",
        Ecdsa: "EcdsaSignature"
      }
    },
    Signature: "H512",
    SignerPayload: "GenericSignerPayload",
    EcdsaSignature: "[u8; 65]",
    Ed25519Signature: "H512",
    Sr25519Signature: "H512"
  }
};

// node_modules/@polkadot/types/interfaces/fungibles/runtime.js
var runtime12 = {
  FungiblesApi: [
    {
      methods: {
        query_account_balances: {
          description: "Returns the list of all `MultiAsset` that an `AccountId` has",
          params: [
            {
              name: "account",
              type: "AccountId"
            }
          ],
          type: "Result<Vec<XcmV3MultiAsset>, FungiblesAccessError>"
        }
      },
      version: 1
    },
    {
      methods: {
        query_account_balances: {
          description: "Returns the list of all `MultiAsset` that an `AccountId` has",
          params: [
            {
              name: "account",
              type: "AccountId"
            }
          ],
          type: "Result<XcmVersionedMultiAssets, FungiblesAccessError>"
        }
      },
      version: 2
    }
  ]
};

// node_modules/@polkadot/types/interfaces/fungibles/definitions.js
var definitions_default23 = {
  rpc: {},
  runtime: runtime12,
  types: {
    FungiblesAccessError: {
      _enum: ["AssetIdConversionFailed", "AmountToBalanceConversionFailed"]
    }
  }
};

// node_modules/@polkadot/types/interfaces/genericAsset/definitions.js
var definitions_default24 = {
  rpc: {},
  types: {
    AssetOptions: {
      initalIssuance: "Compact<Balance>",
      permissions: "PermissionLatest"
    },
    Owner: {
      _enum: {
        None: "Null",
        Address: "AccountId"
      }
    },
    PermissionsV1: {
      update: "Owner",
      mint: "Owner",
      burn: "Owner"
    },
    PermissionVersions: {
      _enum: {
        V1: "PermissionsV1"
      }
    },
    PermissionLatest: "PermissionsV1"
  }
};

// node_modules/@polkadot/types/interfaces/gilt/definitions.js
var definitions_default25 = {
  rpc: {},
  types: {
    ActiveGilt: {
      proportion: "Perquintill",
      amount: "Balance",
      who: "AccountId",
      expiry: "BlockNumber"
    },
    ActiveGiltsTotal: {
      frozen: "Balance",
      proportion: "Perquintill",
      index: "ActiveIndex",
      target: "Perquintill"
    },
    ActiveIndex: "u32",
    GiltBid: {
      amount: "Balance",
      who: "AccountId"
    }
  }
};

// node_modules/@polkadot/types/interfaces/grandpa/rpc.js
var rpc6 = {
  proveFinality: {
    description: "Prove finality for the given block number, returning the Justification for the last block in the set.",
    params: [
      {
        name: "blockNumber",
        type: "BlockNumber"
      }
    ],
    type: "Option<EncodedFinalityProofs>"
  },
  roundState: {
    description: "Returns the state of the current best round state as well as the ongoing background rounds",
    params: [],
    type: "ReportedRoundStates"
  },
  subscribeJustifications: {
    description: "Subscribes to grandpa justifications",
    params: [],
    pubsub: [
      "justifications",
      "subscribeJustifications",
      "unsubscribeJustifications"
    ],
    type: "JustificationNotification"
  }
};

// node_modules/@polkadot/types/interfaces/grandpa/runtime.js
var GRANDPA_V2_V3 = {
  generate_key_ownership_proof: {
    description: "Generates a proof of key ownership for the given authority in the given set.",
    params: [
      {
        name: "setId",
        type: "SetId"
      },
      {
        name: "authorityId",
        type: "AuthorityId"
      }
    ],
    type: "Option<OpaqueKeyOwnershipProof>"
  },
  grandpa_authorities: {
    description: "Get the current GRANDPA authorities and weights. This should not change except for when changes are scheduled and the corresponding delay has passed.",
    params: [],
    type: "AuthorityList"
  },
  submit_report_equivocation_unsigned_extrinsic: {
    description: "Submits an unsigned extrinsic to report an equivocation.",
    params: [
      {
        name: "equivocationProof",
        type: "GrandpaEquivocationProof"
      },
      {
        name: "keyOwnerProof",
        type: "OpaqueKeyOwnershipProof"
      }
    ],
    type: "Option<Null>"
  }
};
var runtime13 = {
  GrandpaApi: [
    {
      methods: __spreadValues({
        current_set_id: {
          description: "Get current GRANDPA authority set id.",
          params: [],
          type: "SetId"
        }
      }, GRANDPA_V2_V3),
      version: 3
    },
    {
      methods: GRANDPA_V2_V3,
      version: 2
    }
  ]
};

// node_modules/@polkadot/types/interfaces/grandpa/definitions.js
var definitions_default26 = {
  rpc: rpc6,
  runtime: runtime13,
  types: {
    AuthorityIndex: "u64",
    AuthorityList: "Vec<NextAuthority>",
    AuthoritySet: {
      currentAuthorities: "AuthorityList",
      setId: "u64",
      pendingStandardChanges: "ForkTreePendingChange",
      pendingForcedChanges: "Vec<PendingChange>",
      authoritySetChanges: "AuthoritySetChanges"
    },
    ForkTreePendingChange: {
      roots: "Vec<ForkTreePendingChangeNode>",
      bestFinalizedNumber: "Option<BlockNumber>"
    },
    ForkTreePendingChangeNode: {
      hash: "BlockHash",
      number: "BlockNumber",
      data: "PendingChange",
      // actual data, here PendingChange
      children: "Vec<ForkTreePendingChangeNode>"
    },
    AuthoritySetChange: "(U64, BlockNumber)",
    AuthoritySetChanges: "Vec<AuthoritySetChange>",
    AuthorityWeight: "u64",
    DelayKind: {
      _enum: {
        Finalized: "Null",
        Best: "DelayKindBest"
      }
    },
    DelayKindBest: {
      medianLastFinalized: "BlockNumber"
    },
    EncodedFinalityProofs: "Bytes",
    GrandpaEquivocation: {
      _enum: {
        Prevote: "GrandpaEquivocationValue",
        Precommit: "GrandpaEquivocationValue"
      }
    },
    GrandpaEquivocationProof: {
      setId: "SetId",
      equivocation: "GrandpaEquivocation"
    },
    GrandpaEquivocationValue: {
      roundNumber: "u64",
      identity: "AuthorityId",
      first: "(GrandpaPrevote, AuthoritySignature)",
      second: "(GrandpaPrevote, AuthoritySignature)"
    },
    GrandpaPrevote: {
      targetHash: "Hash",
      targetNumber: "BlockNumber"
    },
    GrandpaCommit: {
      targetHash: "BlockHash",
      targetNumber: "BlockNumber",
      precommits: "Vec<GrandpaSignedPrecommit>"
    },
    GrandpaPrecommit: {
      targetHash: "BlockHash",
      targetNumber: "BlockNumber"
    },
    GrandpaSignedPrecommit: {
      precommit: "GrandpaPrecommit",
      signature: "AuthoritySignature",
      id: "AuthorityId"
    },
    GrandpaJustification: {
      round: "u64",
      commit: "GrandpaCommit",
      votesAncestries: "Vec<Header>"
    },
    JustificationNotification: "Bytes",
    KeyOwnerProof: "MembershipProof",
    NextAuthority: "(AuthorityId, AuthorityWeight)",
    PendingChange: {
      nextAuthorities: "AuthorityList",
      delay: "BlockNumber",
      canonHeight: "BlockNumber",
      canonHash: "BlockHash",
      delayKind: "DelayKind"
    },
    PendingPause: {
      scheduledAt: "BlockNumber",
      delay: "BlockNumber"
    },
    PendingResume: {
      scheduledAt: "BlockNumber",
      delay: "BlockNumber"
    },
    Precommits: {
      currentWeight: "u32",
      missing: "BTreeSet<AuthorityId>"
    },
    Prevotes: {
      currentWeight: "u32",
      missing: "BTreeSet<AuthorityId>"
    },
    ReportedRoundStates: {
      setId: "u32",
      best: "RoundState",
      background: "Vec<RoundState>"
    },
    RoundState: {
      round: "u32",
      totalWeight: "u32",
      thresholdWeight: "u32",
      prevotes: "Prevotes",
      precommits: "Precommits"
    },
    SetId: "u64",
    StoredPendingChange: {
      scheduledAt: "BlockNumber",
      delay: "BlockNumber",
      nextAuthorities: "AuthorityList"
    },
    StoredState: {
      _enum: {
        Live: "Null",
        PendingPause: "PendingPause",
        Paused: "Null",
        PendingResume: "PendingResume"
      }
    }
  }
};

// node_modules/@polkadot/types/interfaces/identity/definitions.js
var definitions_default27 = {
  rpc: {},
  types: {
    IdentityFields: {
      _set: {
        _bitLength: 64,
        // Mapped here to 32 bits, in Rust these are 64-bit values
        Display: 1,
        Legal: 2,
        Web: 4,
        Riot: 8,
        Email: 16,
        PgpFingerprint: 32,
        Image: 64,
        Twitter: 128
      }
    },
    IdentityInfoAdditional: "(Data, Data)",
    IdentityInfoTo198: {
      additional: "Vec<IdentityInfoAdditional>",
      display: "Data",
      legal: "Data",
      web: "Data",
      riot: "Data",
      email: "Data",
      pgpFingerprint: "Option<H160>",
      image: "Data"
    },
    IdentityInfo: {
      _fallback: "IdentityInfoTo198",
      additional: "Vec<IdentityInfoAdditional>",
      display: "Data",
      legal: "Data",
      web: "Data",
      riot: "Data",
      email: "Data",
      pgpFingerprint: "Option<H160>",
      image: "Data",
      twitter: "Data"
    },
    IdentityJudgement: {
      _enum: {
        Unknown: "Null",
        FeePaid: "Balance",
        Reasonable: "Null",
        KnownGood: "Null",
        OutOfDate: "Null",
        LowQuality: "Null",
        Erroneous: "Null"
      }
    },
    RegistrationJudgement: "(RegistrarIndex, IdentityJudgement)",
    RegistrationTo198: {
      judgements: "Vec<RegistrationJudgement>",
      deposit: "Balance",
      info: "IdentityInfoTo198"
    },
    Registration: {
      _fallback: "RegistrationTo198",
      judgements: "Vec<RegistrationJudgement>",
      deposit: "Balance",
      info: "IdentityInfo"
    },
    RegistrarIndex: "u32",
    RegistrarInfo: {
      account: "AccountId",
      fee: "Balance",
      fields: "IdentityFields"
    }
  }
};

// node_modules/@polkadot/types/interfaces/imOnline/definitions.js
var definitions_default28 = {
  rpc: {},
  types: {
    AuthIndex: "u32",
    AuthoritySignature: "Signature",
    Heartbeat: {
      blockNumber: "BlockNumber",
      networkState: "OpaqueNetworkState",
      sessionIndex: "SessionIndex",
      authorityIndex: "AuthIndex",
      validatorsLen: "u32"
    },
    HeartbeatTo244: {
      blockNumber: "BlockNumber",
      networkState: "OpaqueNetworkState",
      sessionIndex: "SessionIndex",
      authorityIndex: "AuthIndex"
    },
    OpaqueMultiaddr: "Opaque<Bytes>",
    OpaquePeerId: "Opaque<Bytes>",
    OpaqueNetworkState: {
      peerId: "OpaquePeerId",
      externalAddresses: "Vec<OpaqueMultiaddr>"
    }
  }
};

// node_modules/@polkadot/types/interfaces/lottery/definitions.js
var definitions_default29 = {
  rpc: {},
  types: {
    CallIndex: "(u8, u8)",
    LotteryConfig: {
      price: "Balance",
      start: "BlockNumber",
      length: "BlockNumber",
      delay: "BlockNumber",
      repeat: "bool"
    }
  }
};

// node_modules/@polkadot/types/interfaces/mmr/rpc.js
var rpc7 = {
  generateProof: {
    description: "Generate MMR proof for the given block numbers.",
    params: [
      {
        name: "blockNumbers",
        type: "Vec<u64>"
      },
      {
        isOptional: true,
        name: "bestKnownBlockNumber",
        type: "u64"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "MmrLeafBatchProof"
  },
  root: {
    description: "Get the MMR root hash for the current best block.",
    params: [
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "MmrHash"
  },
  verifyProof: {
    description: "Verify an MMR proof",
    params: [
      {
        name: "proof",
        type: "MmrLeafBatchProof"
      }
    ],
    type: "bool"
  },
  verifyProofStateless: {
    description: "Verify an MMR proof statelessly given an mmr_root",
    params: [
      {
        name: "root",
        type: "MmrHash"
      },
      {
        name: "proof",
        type: "MmrLeafBatchProof"
      }
    ],
    type: "bool"
  }
};

// node_modules/@polkadot/types/interfaces/mmr/runtime.js
var MMR_V2 = {
  generate_proof: {
    description: "Generate MMR proof for the given block numbers.",
    params: [
      {
        name: "blockNumbers",
        type: "Vec<BlockNumber>"
      },
      {
        name: "bestKnownBlockNumber",
        type: "Option<BlockNumber>"
      }
    ],
    type: "Result<(Vec<MmrEncodableOpaqueLeaf>, MmrBatchProof), MmrError>"
  },
  root: {
    description: "Return the on-chain MMR root hash.",
    params: [],
    type: "Result<Hash, MmrError>"
  },
  verify_proof: {
    description: "Verify MMR proof against on-chain MMR.",
    params: [
      {
        name: "leaves",
        type: "Vec<MmrEncodableOpaqueLeaf>"
      },
      {
        name: "proof",
        type: "MmrBatchProof"
      }
    ],
    type: "Result<(), MmrError>"
  },
  verify_proof_stateless: {
    description: "Verify MMR proof against given root hash.",
    params: [
      {
        name: "root",
        type: "Hash"
      },
      {
        name: "leaves",
        type: "Vec<MmrEncodableOpaqueLeaf>"
      },
      {
        name: "proof",
        type: "MmrBatchProof"
      }
    ],
    type: "Result<(), MmrError>"
  }
};
var MMR_V1 = {
  generate_batch_proof: {
    description: "Generate MMR proof for a series of leaves under given indices.",
    params: [
      {
        name: "leafIndices",
        type: "Vec<MmrLeafIndex>"
      }
    ],
    type: "Result<(Vec<MmrEncodableOpaqueLeaf>, MmrBatchProof), MmrError>"
  },
  generate_proof: {
    description: "Generate MMR proof for a leaf under given index.",
    params: [
      {
        name: "leafIndex",
        type: "MmrLeafIndex"
      }
    ],
    type: "Result<(MmrEncodableOpaqueLeaf, MmrProof), MmrError>"
  },
  mmr_root: {
    description: "Return the on-chain MMR root hash.",
    params: [],
    type: "Result<Hash, MmrError>"
  },
  verify_batch_proof: {
    description: "Verify MMR proof against on-chain MMR for a batch of leaves.",
    params: [
      {
        name: "leaves",
        type: "Vec<MmrEncodableOpaqueLeaf>"
      },
      {
        name: "proof",
        type: "MmrBatchProof"
      }
    ],
    type: "Result<(), MmrError>"
  },
  verify_batch_proof_stateless: {
    description: "Verify MMR proof against given root hash or a batch of leaves.",
    params: [
      {
        name: "root",
        type: "Hash"
      },
      {
        name: "leaves",
        type: "Vec<MmrEncodableOpaqueLeaf>"
      },
      {
        name: "proof",
        type: "MmrBatchProof"
      }
    ],
    type: "Result<(), MmrError>"
  },
  verify_proof: {
    description: "Verify MMR proof against on-chain MMR.",
    params: [
      {
        name: "leaf",
        type: "MmrEncodableOpaqueLeaf"
      },
      {
        name: "proof",
        type: "MmrProof"
      }
    ],
    type: "Result<(), MmrError>"
  },
  verify_proof_stateless: {
    description: "Verify MMR proof against given root hash.",
    params: [
      {
        name: "root",
        type: "Hash"
      },
      {
        name: "leaf",
        type: "MmrEncodableOpaqueLeaf"
      },
      {
        name: "proof",
        type: "MmrProof"
      }
    ],
    type: "Result<(), MmrError>"
  }
};
var runtime14 = {
  MmrApi: [
    {
      methods: MMR_V2,
      version: 2
    },
    {
      methods: MMR_V1,
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/mmr/definitions.js
var definitions_default30 = {
  rpc: rpc7,
  runtime: runtime14,
  types: {
    MmrBatchProof: {
      leafIndices: "Vec<MmrLeafIndex>",
      leafCount: "MmrNodeIndex",
      items: "Vec<Hash>"
    },
    MmrEncodableOpaqueLeaf: "Bytes",
    MmrError: {
      _enum: ["Push", "GetRoot", "Commit", "GenerateProof", "Verify", "LeafNotFound", " PalletNotIncluded", "InvalidLeafIndex"]
    },
    MmrHash: "Hash",
    MmrLeafBatchProof: {
      blockHash: "BlockHash",
      leaves: "Bytes",
      proof: "Bytes"
    },
    MmrLeafIndex: "u64",
    MmrLeafProof: {
      blockHash: "BlockHash",
      leaf: "Bytes",
      proof: "Bytes"
    },
    MmrNodeIndex: "u64",
    MmrProof: {
      leafIndex: "MmrLeafIndex",
      leafCount: "MmrNodeIndex",
      items: "Vec<Hash>"
    }
  }
};

// node_modules/@polkadot/types/interfaces/nfts/runtime.js
var runtime15 = {
  NftsApi: [
    {
      methods: {
        attribute: {
          description: "An attribute",
          params: [
            {
              name: "collection",
              type: "NftCollectionId"
            },
            {
              name: "item",
              type: "NftItemId"
            },
            {
              name: "key",
              type: "Bytes"
            }
          ],
          type: "Option<Bytes>"
        },
        collection_attribute: {
          description: "A collection attribute",
          params: [
            {
              name: "collection",
              type: "NftCollectionId"
            },
            {
              name: "key",
              type: "Bytes"
            }
          ],
          type: "Option<Bytes>"
        },
        collection_owner: {
          description: "A collection owner",
          params: [
            {
              name: "collection",
              type: "NftCollectionId"
            }
          ],
          type: "Option<AccountId>"
        },
        custom_attribute: {
          description: "A custom attribute",
          params: [
            {
              name: "account",
              type: "AccountId"
            },
            {
              name: "collection",
              type: "NftCollectionId"
            },
            {
              name: "item",
              type: "NftItemId"
            },
            {
              name: "key",
              type: "Bytes"
            }
          ],
          type: "Option<Bytes>"
        },
        owner: {
          description: "Collection owner",
          params: [
            {
              name: "collection",
              type: "NftCollectionId"
            },
            {
              name: "item",
              type: "NftItemId"
            }
          ],
          type: "Option<AccountId>"
        },
        system_attribute: {
          description: "System attribute",
          params: [
            {
              name: "collection",
              type: "NftCollectionId"
            },
            {
              name: "item",
              type: "NftItemId"
            },
            {
              name: "key",
              type: "Bytes"
            }
          ],
          type: "Option<Bytes>"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/nfts/definitions.js
var definitions_default31 = {
  rpc: {},
  runtime: runtime15,
  types: {
    NftCollectionId: "u32",
    NftItemId: "u32"
  }
};

// node_modules/@polkadot/types/interfaces/nompools/runtime.js
var runtime16 = {
  NominationPoolsApi: [
    {
      methods: {
        balance_to_points: {
          description: "Returns the equivalent points of `new_funds` for a given pool.",
          params: [
            {
              name: "poolId",
              type: "NpPoolId"
            },
            {
              name: "newFunds",
              type: "Balance"
            }
          ],
          type: "Balance"
        },
        pending_rewards: {
          description: "Returns the pending rewards for the given member.",
          params: [
            {
              name: "member",
              type: "AccountId"
            }
          ],
          type: "Balance"
        },
        points_to_balance: {
          description: "Returns the equivalent balance of `points` for a given pool.",
          params: [
            {
              name: "poolId",
              type: "NpPoolId"
            },
            {
              name: "points",
              type: "Balance"
            }
          ],
          type: "Balance"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/nompools/definitions.js
var definitions_default32 = {
  rpc: {},
  runtime: runtime16,
  types: {
    NpApiError: {
      _enum: ["MemberNotFound", "OverflowInPendingRewards"]
    },
    NpPoolId: "u32"
  }
};

// node_modules/@polkadot/types/interfaces/offences/definitions.js
var definitions_default33 = {
  rpc: {},
  types: {
    DeferredOffenceOf: "(Vec<OffenceDetails>, Vec<Perbill>, SessionIndex)",
    Kind: "[u8; 16]",
    OffenceDetails: {
      offender: "Offender",
      reporters: "Vec<Reporter>"
    },
    Offender: "IdentificationTuple",
    OpaqueTimeSlot: "Bytes",
    ReportIdOf: "Hash",
    Reporter: "AccountId"
  }
};

// node_modules/@polkadot/types/interfaces/pow/runtime.js
var runtime17 = {
  DifficultyApi: [
    {
      methods: {
        difficulty: {
          description: "Return the target difficulty of the next block.",
          params: [],
          // This is Difficulty in the original, however this is chain-specific
          type: "Raw"
        }
      },
      version: 1
    }
  ],
  TimestampApi: [
    {
      methods: {
        timestamp: {
          description: "API necessary for timestamp-based difficulty adjustment algorithms.",
          params: [],
          type: "Moment"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/pow/definitions.js
var definitions_default34 = {
  rpc: {},
  runtime: runtime17,
  types: {}
};

// node_modules/@polkadot/types/interfaces/proxy/definitions.js
var definitions_default35 = {
  rpc: {},
  types: {
    ProxyDefinition: {
      delegate: "AccountId",
      proxyType: "ProxyType",
      delay: "BlockNumber"
    },
    ProxyType: {
      _enum: ["Any", "NonTransfer", "Governance", "Staking"]
    },
    ProxyAnnouncement: {
      real: "AccountId",
      callHash: "Hash",
      height: "BlockNumber"
    }
  }
};

// node_modules/@polkadot/types/interfaces/recovery/definitions.js
var definitions_default36 = {
  rpc: {},
  types: {
    ActiveRecovery: {
      created: "BlockNumber",
      deposit: "Balance",
      friends: "Vec<AccountId>"
    },
    RecoveryConfig: {
      delayPeriod: "BlockNumber",
      deposit: "Balance",
      friends: "Vec<AccountId>",
      threshold: "u16"
    }
  }
};

// node_modules/@polkadot/types/interfaces/scheduler/definitions.js
var definitions_default37 = {
  rpc: {},
  types: {
    Period: "(BlockNumber, u32)",
    Priority: "u8",
    SchedulePeriod: "Period",
    SchedulePriority: "Priority",
    Scheduled: {
      maybeId: "Option<Bytes>",
      priority: "SchedulePriority",
      call: "Call",
      maybePeriodic: "Option<SchedulePeriod>",
      origin: "PalletsOrigin"
    },
    ScheduledTo254: {
      maybeId: "Option<Bytes>",
      priority: "SchedulePriority",
      call: "Call",
      maybePeriodic: "Option<SchedulePeriod>"
    },
    TaskAddress: "(BlockNumber, u32)"
  }
};

// node_modules/@polkadot/types/interfaces/session/runtime.js
var runtime18 = {
  SessionKeys: [
    {
      methods: {
        decode_session_keys: {
          description: "Decode the given public session keys.",
          params: [
            {
              name: "encoded",
              type: "Bytes"
            }
          ],
          type: "Option<Vec<(Bytes, KeyTypeId)>>"
        },
        generate_session_keys: {
          description: "Generate a set of session keys with optionally using the given seed.",
          params: [
            {
              name: "seed",
              type: "Option<Bytes>"
            }
          ],
          type: "Bytes"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/session/definitions.js
var keyTypes = {
  // key for beefy
  BeefyKey: "[u8; 33]",
  // default to Substrate master defaults, 4 keys (polkadot master, 5 keys)
  Keys: "SessionKeys4",
  SessionKeys1: "(AccountId)",
  SessionKeys2: "(AccountId, AccountId)",
  SessionKeys3: "(AccountId, AccountId, AccountId)",
  SessionKeys4: "(AccountId, AccountId, AccountId, AccountId)",
  SessionKeys5: "(AccountId, AccountId, AccountId, AccountId, AccountId)",
  SessionKeys6: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)",
  SessionKeys6B: "(AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)",
  SessionKeys7: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)",
  SessionKeys7B: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)",
  SessionKeys8: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)",
  SessionKeys8B: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)",
  SessionKeys9: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)",
  SessionKeys9B: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)",
  SessionKeys10: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId)",
  SessionKeys10B: "(AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, AccountId, BeefyKey)"
};
var definitions_default38 = {
  rpc: {},
  runtime: runtime18,
  types: __spreadProps(__spreadValues({}, keyTypes), {
    FullIdentification: "Exposure",
    IdentificationTuple: "(ValidatorId, FullIdentification)",
    MembershipProof: {
      session: "SessionIndex",
      trieNodes: "Vec<Bytes>",
      validatorCount: "ValidatorCount"
    },
    SessionIndex: "u32",
    ValidatorCount: "u32"
  })
};

// node_modules/@polkadot/types/interfaces/society/definitions.js
var definitions_default39 = {
  rpc: {},
  types: {
    Bid: {
      who: "AccountId",
      kind: "BidKind",
      value: "Balance"
    },
    BidKind: {
      _enum: {
        Deposit: "Balance",
        Vouch: "(AccountId, Balance)"
      }
    },
    // a society-specific Judgement (not the same as identity Judgement)
    SocietyJudgement: {
      _enum: ["Rebid", "Reject", "Approve"]
    },
    // a society-specific Vote
    SocietyVote: {
      _enum: ["Skeptic", "Reject", "Approve"]
    },
    StrikeCount: "u32",
    VouchingStatus: {
      _enum: ["Vouching", "Banned"]
    }
  }
};

// node_modules/@polkadot/types/interfaces/staking/runtime.js
var runtime19 = {
  StakingApi: [
    {
      methods: {
        nominations_quota: {
          description: "Returns the nominations quota for a nominator with a given balance.",
          params: [
            {
              name: "balance",
              type: "Balance"
            }
          ],
          type: "u32"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/staking/definitions.js
var deprecated = {
  Points: "u32",
  EraPoints: {
    total: "Points",
    individual: "Vec<Points>"
  }
};
var phragmen = {
  CompactAssignments: "CompactAssignmentsWith16",
  CompactAssignmentsWith16: {
    votes1: "Vec<(NominatorIndexCompact, ValidatorIndexCompact)>",
    votes2: "Vec<(NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact)>",
    votes3: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 2], ValidatorIndexCompact)>",
    votes4: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 3], ValidatorIndexCompact)>",
    votes5: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 4], ValidatorIndexCompact)>",
    votes6: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 5], ValidatorIndexCompact)>",
    votes7: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 6], ValidatorIndexCompact)>",
    votes8: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 7], ValidatorIndexCompact)>",
    votes9: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 8], ValidatorIndexCompact)>",
    votes10: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 9], ValidatorIndexCompact)>",
    votes11: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 10], ValidatorIndexCompact)>",
    votes12: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 11], ValidatorIndexCompact)>",
    votes13: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 12], ValidatorIndexCompact)>",
    votes14: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 13], ValidatorIndexCompact)>",
    votes15: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 14], ValidatorIndexCompact)>",
    votes16: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 15], ValidatorIndexCompact)>"
  },
  CompactAssignmentsWith24: {
    votes1: "Vec<(NominatorIndexCompact, ValidatorIndexCompact)>",
    votes2: "Vec<(NominatorIndexCompact, CompactScoreCompact, ValidatorIndexCompact)>",
    votes3: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 2], ValidatorIndexCompact)>",
    votes4: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 3], ValidatorIndexCompact)>",
    votes5: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 4], ValidatorIndexCompact)>",
    votes6: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 5], ValidatorIndexCompact)>",
    votes7: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 6], ValidatorIndexCompact)>",
    votes8: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 7], ValidatorIndexCompact)>",
    votes9: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 8], ValidatorIndexCompact)>",
    votes10: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 9], ValidatorIndexCompact)>",
    votes11: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 10], ValidatorIndexCompact)>",
    votes12: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 11], ValidatorIndexCompact)>",
    votes13: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 12], ValidatorIndexCompact)>",
    votes14: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 13], ValidatorIndexCompact)>",
    votes15: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 14], ValidatorIndexCompact)>",
    votes16: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 15], ValidatorIndexCompact)>",
    votes17: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 16], ValidatorIndexCompact)>",
    votes18: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 17], ValidatorIndexCompact)>",
    votes19: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 18], ValidatorIndexCompact)>",
    votes20: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 19], ValidatorIndexCompact)>",
    votes21: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 20], ValidatorIndexCompact)>",
    votes22: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 21], ValidatorIndexCompact)>",
    votes23: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 22], ValidatorIndexCompact)>",
    votes24: "Vec<(NominatorIndexCompact, [CompactScoreCompact; 23], ValidatorIndexCompact)>"
  },
  CompactAssignmentsTo265: "CompactAssignmentsWith16",
  CompactAssignmentsTo257: {
    votes1: "Vec<(NominatorIndex, [CompactScore; 0], ValidatorIndex)>",
    votes2: "Vec<(NominatorIndex, [CompactScore; 1], ValidatorIndex)>",
    votes3: "Vec<(NominatorIndex, [CompactScore; 2], ValidatorIndex)>",
    votes4: "Vec<(NominatorIndex, [CompactScore; 3], ValidatorIndex)>",
    votes5: "Vec<(NominatorIndex, [CompactScore; 4], ValidatorIndex)>",
    votes6: "Vec<(NominatorIndex, [CompactScore; 5], ValidatorIndex)>",
    votes7: "Vec<(NominatorIndex, [CompactScore; 6], ValidatorIndex)>",
    votes8: "Vec<(NominatorIndex, [CompactScore; 7], ValidatorIndex)>",
    votes9: "Vec<(NominatorIndex, [CompactScore; 8], ValidatorIndex)>",
    votes10: "Vec<(NominatorIndex, [CompactScore; 9], ValidatorIndex)>",
    votes11: "Vec<(NominatorIndex, [CompactScore; 10], ValidatorIndex)>",
    votes12: "Vec<(NominatorIndex, [CompactScore; 11], ValidatorIndex)>",
    votes13: "Vec<(NominatorIndex, [CompactScore; 12], ValidatorIndex)>",
    votes14: "Vec<(NominatorIndex, [CompactScore; 13], ValidatorIndex)>",
    votes15: "Vec<(NominatorIndex, [CompactScore; 14], ValidatorIndex)>",
    votes16: "Vec<(NominatorIndex, [CompactScore; 15], ValidatorIndex)>"
  },
  CompactScore: "(ValidatorIndex, OffchainAccuracy)",
  CompactScoreCompact: "(ValidatorIndexCompact, OffchainAccuracyCompact)",
  ElectionCompute: {
    // in previous versions the last entry was "AuthorityId"
    // (since no data attached, and it is via SCALE can rename)
    _enum: ["OnChain", "Signed", "Unsigned"]
  },
  ElectionPhase: {
    _enum: {
      Off: null,
      Signed: null,
      Unsigned: "(bool, BlockNumber)",
      Emergency: null
    }
  },
  ElectionResult: {
    compute: "ElectionCompute",
    slotStake: "Balance",
    electedStashes: "Vec<AccountId>",
    exposures: "Vec<(AccountId, Exposure)>"
  },
  ElectionScore: "[u128; 3]",
  ElectionSize: {
    validators: "Compact<ValidatorIndex>",
    nominators: "Compact<NominatorIndex>"
  },
  ElectionStatus: {
    _enum: {
      Close: "Null",
      Open: "BlockNumber"
    }
  },
  ExtendedBalance: "u128",
  RawSolution: "RawSolutionWith16",
  RawSolutionWith16: {
    compact: "CompactAssignmentsWith16",
    score: "ElectionScore",
    round: "u32"
  },
  RawSolutionWith24: {
    compact: "CompactAssignmentsWith24",
    score: "ElectionScore",
    round: "u32"
  },
  RawSolutionTo265: "RawSolutionWith16",
  ReadySolution: {
    supports: "SolutionSupports",
    score: "ElectionScore",
    compute: "ElectionCompute"
  },
  RoundSnapshot: {
    voters: "Vec<(AccountId, VoteWeight, Vec<AccountId>)>",
    targets: "Vec<AccountId>"
  },
  SeatHolder: {
    who: "AccountId",
    stake: "Balance",
    deposit: "Balance"
  },
  SignedSubmission: {
    _fallback: "SignedSubmissionTo276",
    who: "AccountId",
    deposit: "Balance",
    solution: "RawSolution",
    reward: "Balance"
  },
  SignedSubmissionTo276: {
    who: "AccountId",
    deposit: "Balance",
    solution: "RawSolution"
  },
  SignedSubmissionOf: "SignedSubmission",
  SolutionOrSnapshotSize: {
    voters: "Compact<u32>",
    targets: "Compact<u32>"
  },
  SolutionSupport: {
    total: "ExtendedBalance",
    voters: "Vec<(AccountId, ExtendedBalance)>"
  },
  SolutionSupports: "Vec<(AccountId, SolutionSupport)>",
  Supports: "SolutionSupports",
  SubmissionIndicesOf: "BTreeMap<ElectionScore, u32>",
  Voter: {
    votes: "Vec<AccountId>",
    stake: "Balance",
    deposit: "Balance"
  },
  VoteWeight: "u64"
};
var definitions_default40 = {
  rpc: {},
  runtime: runtime19,
  types: __spreadProps(__spreadValues(__spreadValues({}, deprecated), phragmen), {
    ActiveEraInfo: {
      index: "EraIndex",
      start: "Option<Moment>"
    },
    EraIndex: "u32",
    EraRewardPoints: {
      total: "RewardPoint",
      individual: "BTreeMap<AccountId, RewardPoint>"
    },
    EraRewards: {
      total: "u32",
      rewards: "Vec<u32>"
    },
    Exposure: {
      total: "Compact<Balance>",
      own: "Compact<Balance>",
      others: "Vec<IndividualExposure>"
    },
    Forcing: {
      _enum: [
        "NotForcing",
        "ForceNew",
        "ForceNone",
        "ForceAlways"
      ]
    },
    IndividualExposure: {
      who: "AccountId",
      value: "Compact<Balance>"
    },
    KeyType: "AccountId",
    MomentOf: "Moment",
    Nominations: {
      targets: "Vec<AccountId>",
      submittedIn: "EraIndex",
      suppressed: "bool"
    },
    NominatorIndex: "u32",
    NominatorIndexCompact: "Compact<NominatorIndex>",
    OffchainAccuracy: "PerU16",
    OffchainAccuracyCompact: "Compact<OffchainAccuracy>",
    PhragmenScore: "[u128; 3]",
    Points: "u32",
    RewardDestination: {
      _enum: {
        Staked: "Null",
        Stash: "Null",
        Controller: "Null",
        Account: "AccountId",
        None: "Null"
      }
    },
    RewardPoint: "u32",
    SlashJournalEntry: {
      who: "AccountId",
      amount: "Balance",
      ownSlash: "Balance"
    },
    SlashingSpansTo204: {
      spanIndex: "SpanIndex",
      lastStart: "EraIndex",
      prior: "Vec<EraIndex>"
    },
    SlashingSpans: {
      spanIndex: "SpanIndex",
      lastStart: "EraIndex",
      lastNonzeroSlash: "EraIndex",
      prior: "Vec<EraIndex>"
    },
    SpanIndex: "u32",
    SpanRecord: {
      slashed: "Balance",
      paidOut: "Balance"
    },
    StakingLedgerTo223: {
      stash: "AccountId",
      total: "Compact<Balance>",
      active: "Compact<Balance>",
      unlocking: "Vec<UnlockChunk>"
    },
    StakingLedgerTo240: {
      _fallback: "StakingLedgerTo223",
      stash: "AccountId",
      total: "Compact<Balance>",
      active: "Compact<Balance>",
      unlocking: "Vec<UnlockChunk>",
      lastReward: "Option<EraIndex>"
    },
    StakingLedger: {
      stash: "AccountId",
      total: "Compact<Balance>",
      active: "Compact<Balance>",
      unlocking: "Vec<UnlockChunk>",
      claimedRewards: "Vec<EraIndex>"
    },
    UnappliedSlashOther: "(AccountId, Balance)",
    UnappliedSlash: {
      validator: "AccountId",
      own: "Balance",
      others: "Vec<UnappliedSlashOther>",
      reporters: "Vec<AccountId>",
      payout: "Balance"
    },
    UnlockChunk: {
      value: "Compact<Balance>",
      era: "Compact<BlockNumber>"
    },
    ValidatorIndex: "u16",
    ValidatorIndexCompact: "Compact<ValidatorIndex>",
    ValidatorPrefs: "ValidatorPrefsWithBlocked",
    ValidatorPrefsWithCommission: {
      commission: "Compact<Perbill>"
    },
    ValidatorPrefsWithBlocked: {
      commission: "Compact<Perbill>",
      blocked: "bool"
    },
    ValidatorPrefsTo196: {
      validatorPayment: "Compact<Balance>"
    },
    ValidatorPrefsTo145: {
      unstakeThreshold: "Compact<u32>",
      validatorPayment: "Compact<Balance>"
    }
  })
};

// node_modules/@polkadot/types/interfaces/support/definitions.js
var definitions_default41 = {
  rpc: {},
  types: {
    WeightToFeeCoefficient: {
      coeffInteger: "Balance",
      coeffFrac: "Perbill",
      negative: "bool",
      degree: "u8"
    }
  }
};

// node_modules/@polkadot/types/interfaces/syncstate/rpc.js
var rpc8 = {
  genSyncSpec: {
    description: "Returns the json-serialized chainspec running the node, with a sync state.",
    endpoint: "sync_state_genSyncSpec",
    params: [
      {
        name: "raw",
        type: "bool"
      }
    ],
    type: "Json"
  }
};

// node_modules/@polkadot/types/interfaces/syncstate/definitions.js
var definitions_default42 = {
  rpc: rpc8,
  types: {}
};

// node_modules/@polkadot/types/interfaces/system/rpc.js
var rpc9 = {
  accountNextIndex: {
    alias: ["account_nextIndex"],
    description: "Retrieves the next accountIndex as available on the node",
    params: [
      {
        name: "accountId",
        type: "AccountId"
      }
    ],
    type: "Index"
  },
  addLogFilter: {
    description: "Adds the supplied directives to the current log filter",
    isUnsafe: true,
    params: [
      {
        name: "directives",
        type: "Text"
      }
    ],
    type: "Null"
  },
  addReservedPeer: {
    description: "Adds a reserved peer",
    isUnsafe: true,
    params: [
      {
        name: "peer",
        type: "Text"
      }
    ],
    type: "Text"
  },
  chain: {
    description: "Retrieves the chain",
    params: [],
    type: "Text"
  },
  chainType: {
    description: "Retrieves the chain type",
    params: [],
    type: "ChainType"
  },
  dryRun: {
    alias: ["system_dryRunAt"],
    description: "Dry run an extrinsic at a given block",
    isUnsafe: true,
    params: [
      {
        name: "extrinsic",
        type: "Bytes"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "ApplyExtrinsicResult"
  },
  health: {
    description: "Return health status of the node",
    noErrorLog: true,
    params: [],
    type: "Health"
  },
  localListenAddresses: {
    description: "The addresses include a trailing /p2p/ with the local PeerId, and are thus suitable to be passed to addReservedPeer or as a bootnode address for example",
    params: [],
    type: "Vec<Text>"
  },
  localPeerId: {
    description: "Returns the base58-encoded PeerId of the node",
    params: [],
    type: "Text"
  },
  name: {
    description: "Retrieves the node name",
    params: [],
    type: "Text"
  },
  networkState: {
    alias: ["system_unstable_networkState"],
    description: "Returns current state of the network",
    isUnsafe: true,
    params: [],
    type: "NetworkState"
  },
  nodeRoles: {
    description: "Returns the roles the node is running as",
    params: [],
    type: "Vec<NodeRole>"
  },
  peers: {
    description: "Returns the currently connected peers",
    isUnsafe: true,
    params: [],
    type: "Vec<PeerInfo>"
  },
  properties: {
    description: "Get a custom set of properties as a JSON object, defined in the chain spec",
    params: [],
    type: "ChainProperties"
  },
  removeReservedPeer: {
    description: "Remove a reserved peer",
    isUnsafe: true,
    params: [
      {
        name: "peerId",
        type: "Text"
      }
    ],
    type: "Text"
  },
  reservedPeers: {
    description: "Returns the list of reserved peers",
    params: [],
    type: "Vec<Text>"
  },
  resetLogFilter: {
    description: "Resets the log filter to Substrate defaults",
    isUnsafe: true,
    params: [],
    type: "Null"
  },
  syncState: {
    description: "Returns the state of the syncing of the node",
    params: [],
    type: "SyncState"
  },
  version: {
    description: "Retrieves the version of the node",
    params: [],
    type: "Text"
  }
};

// node_modules/@polkadot/types/interfaces/system/runtime.js
var runtime20 = {
  AccountNonceApi: [
    {
      methods: {
        account_nonce: {
          description: "The API to query account nonce (aka transaction index)",
          params: [
            {
              name: "accountId",
              type: "AccountId"
            }
          ],
          type: "Index"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/system/definitions.js
var definitions_default43 = {
  rpc: rpc9,
  runtime: runtime20,
  types: {
    AccountInfo: "AccountInfoWithTripleRefCount",
    AccountInfoWithRefCountU8: {
      nonce: "Index",
      refcount: "u8",
      data: "AccountData"
    },
    AccountInfoWithRefCount: {
      _fallback: "AccountInfoWithRefCountU8",
      nonce: "Index",
      refcount: "RefCount",
      data: "AccountData"
    },
    AccountInfoWithDualRefCount: {
      _fallback: "AccountInfoWithRefCount",
      nonce: "Index",
      consumers: "RefCount",
      providers: "RefCount",
      data: "AccountData"
    },
    // original naming
    AccountInfoWithProviders: "AccountInfoWithDualRefCount",
    AccountInfoWithTripleRefCount: {
      _fallback: "AccountInfoWithDualRefCount",
      nonce: "Index",
      consumers: "RefCount",
      providers: "RefCount",
      sufficients: "RefCount",
      data: "AccountData"
    },
    ApplyExtrinsicResult: "Result<DispatchOutcome, TransactionValidityError>",
    ApplyExtrinsicResultPre6: "Result<DispatchOutcomePre6, TransactionValidityError>",
    ArithmeticError: {
      _enum: [
        "Underflow",
        "Overflow",
        "DivisionByZero"
      ]
    },
    BlockLength: {
      max: "PerDispatchClassU32"
    },
    BlockWeights: {
      baseBlock: "Weight",
      maxBlock: "Weight",
      perClass: "PerDispatchClassWeightsPerClass"
    },
    ChainProperties: "GenericChainProperties",
    ChainType: {
      _enum: {
        Development: "Null",
        Local: "Null",
        Live: "Null",
        Custom: "Text"
      }
    },
    ConsumedWeight: "PerDispatchClassWeight",
    DigestOf: "Digest",
    DispatchClass: {
      _enum: ["Normal", "Operational", "Mandatory"]
    },
    DispatchError: {
      _enum: {
        Other: "Null",
        CannotLookup: "Null",
        BadOrigin: "Null",
        Module: "DispatchErrorModule",
        ConsumerRemaining: "Null",
        NoProviders: "Null",
        TooManyConsumers: "Null",
        Token: "TokenError",
        Arithmetic: "ArithmeticError",
        Transactional: "TransactionalError",
        Exhausted: "Null",
        Corruption: "Null",
        Unavailable: "Null"
      }
    },
    DispatchErrorPre6: {
      _enum: {
        Other: "Null",
        CannotLookup: "Null",
        BadOrigin: "Null",
        Module: "DispatchErrorModulePre6",
        ConsumerRemaining: "Null",
        NoProviders: "Null",
        TooManyConsumers: "Null",
        Token: "TokenError",
        Arithmetic: "ArithmeticError",
        Transactional: "TransactionalError"
      }
    },
    DispatchErrorPre6First: {
      // The enum was modified mid-flight, affecting asset chains -
      // https://github.com/paritytech/substrate/pull/10382/files#diff-e4e016b33a82268b6208dc974eea841bad47597865a749fee2f937eb6fdf67b4R498
      _enum: {
        Other: "Null",
        CannotLookup: "Null",
        BadOrigin: "Null",
        Module: "DispatchErrorModulePre6",
        ConsumerRemaining: "Null",
        NoProviders: "Null",
        Token: "TokenError",
        Arithmetic: "ArithmeticError",
        Transactional: "TransactionalError"
      }
    },
    DispatchErrorModuleU8: {
      index: "u8",
      error: "u8"
    },
    DispatchErrorModuleU8a: {
      index: "u8",
      error: "[u8; 4]"
    },
    DispatchErrorModule: "DispatchErrorModuleU8a",
    DispatchErrorModulePre6: "DispatchErrorModuleU8",
    DispatchErrorTo198: {
      module: "Option<u8>",
      error: "u8"
    },
    DispatchInfo: {
      weight: "Weight",
      class: "DispatchClass",
      paysFee: "Pays"
    },
    DispatchInfoTo190: {
      weight: "Weight",
      class: "DispatchClass"
    },
    DispatchInfoTo244: {
      weight: "Weight",
      class: "DispatchClass",
      paysFee: "bool"
    },
    DispatchOutcome: "Result<(), DispatchError>",
    DispatchOutcomePre6: "Result<(), DispatchErrorPre6>",
    DispatchResult: "Result<(), DispatchError>",
    DispatchResultOf: "DispatchResult",
    DispatchResultTo198: "Result<(), Text>",
    Event: "GenericEvent",
    EventId: "[u8; 2]",
    EventIndex: "u32",
    EventRecord: {
      phase: "Phase",
      event: "Event",
      topics: "Vec<Hash>"
    },
    Health: {
      peers: "u64",
      isSyncing: "bool",
      shouldHavePeers: "bool"
    },
    InvalidTransaction: {
      _enum: {
        Call: "Null",
        Payment: "Null",
        Future: "Null",
        Stale: "Null",
        BadProof: "Null",
        AncientBirthBlock: "Null",
        ExhaustsResources: "Null",
        Custom: "u8",
        BadMandatory: "Null",
        MandatoryDispatch: "Null",
        BadSigner: "Null"
      }
    },
    Key: "Bytes",
    LastRuntimeUpgradeInfo: {
      specVersion: "Compact<u32>",
      specName: "Text"
    },
    NetworkState: {
      peerId: "Text",
      listenedAddresses: "Vec<Text>",
      externalAddresses: "Vec<Text>",
      connectedPeers: "HashMap<Text, Peer>",
      notConnectedPeers: "HashMap<Text, NotConnectedPeer>",
      averageDownloadPerSec: "u64",
      averageUploadPerSec: "u64",
      peerset: "NetworkStatePeerset"
    },
    NetworkStatePeerset: {
      messageQueue: "u64",
      nodes: "HashMap<Text, NetworkStatePeersetInfo>"
    },
    NetworkStatePeersetInfo: {
      connected: "bool",
      reputation: "i32"
    },
    NodeRole: {
      _enum: {
        Full: "Null",
        LightClient: "Null",
        Authority: "Null",
        UnknownRole: "u8"
      }
    },
    NotConnectedPeer: {
      knownAddresses: "Vec<Text>",
      latestPingTime: "Option<PeerPing>",
      versionString: "Option<Text>"
    },
    Peer: {
      enabled: "bool",
      endpoint: "PeerEndpoint",
      knownAddresses: "Vec<Text>",
      latestPingTime: "PeerPing",
      open: "bool",
      versionString: "Text"
    },
    PeerEndpoint: {
      listening: "PeerEndpointAddr"
    },
    PeerEndpointAddr: {
      _alias: {
        localAddr: "local_addr",
        sendBackAddr: "send_back_addr"
      },
      localAddr: "Text",
      sendBackAddr: "Text"
    },
    PeerPing: {
      nanos: "u64",
      secs: "u64"
    },
    PeerInfo: {
      peerId: "Text",
      roles: "Text",
      protocolVersion: "u32",
      bestHash: "Hash",
      bestNumber: "BlockNumber"
    },
    PerDispatchClassU32: {
      normal: "u32",
      operational: "u32",
      mandatory: "u32"
    },
    PerDispatchClassWeight: {
      normal: "Weight",
      operational: "Weight",
      mandatory: "Weight"
    },
    PerDispatchClassWeightsPerClass: {
      normal: "WeightPerClass",
      operational: "WeightPerClass",
      mandatory: "WeightPerClass"
    },
    Phase: {
      _enum: {
        ApplyExtrinsic: "u32",
        Finalization: "Null",
        Initialization: "Null"
      }
    },
    RawOrigin: {
      _enum: {
        Root: "Null",
        Signed: "AccountId",
        None: "Null"
      }
    },
    RefCount: "u32",
    RefCountTo259: "u8",
    SyncState: {
      startingBlock: "BlockNumber",
      currentBlock: "BlockNumber",
      highestBlock: "Option<BlockNumber>"
    },
    SystemOrigin: "RawOrigin",
    TokenError: {
      _enum: [
        "NoFunds",
        "WouldDie",
        "BelowMinimum",
        "CannotCreate",
        "UnknownAsset",
        "Frozen",
        "Unsupported",
        // these are dropped, but still in older versions
        // (if this adjusts, will need to take a re-look)
        "Underflow",
        "Overflow"
      ]
    },
    TransactionValidityError: {
      _enum: {
        Invalid: "InvalidTransaction",
        Unknown: "UnknownTransaction"
      }
    },
    TransactionalError: {
      _enum: [
        "LimitReached",
        "NoLayer"
      ]
    },
    UnknownTransaction: {
      _enum: {
        CannotLookup: "Null",
        NoUnsignedValidator: "Null",
        Custom: "u8"
      }
    },
    WeightPerClass: {
      baseExtrinsic: "Weight",
      maxExtrinsic: "Option<Weight>",
      maxTotal: "Option<Weight>",
      reserved: "Option<Weight>"
    }
  }
};

// node_modules/@polkadot/types/interfaces/treasury/definitions.js
var definitions_default44 = {
  rpc: {},
  types: {
    Bounty: {
      proposer: "AccountId",
      value: "Balance",
      fee: "Balance",
      curatorDeposit: "Balance",
      bond: "Balance",
      status: "BountyStatus"
    },
    BountyIndex: "u32",
    BountyStatus: {
      _enum: {
        Proposed: "Null",
        Approved: "Null",
        Funded: "Null",
        CuratorProposed: "BountyStatusCuratorProposed",
        Active: "BountyStatusActive",
        PendingPayout: "BountyStatusPendingPayout"
      }
    },
    BountyStatusActive: {
      curator: "AccountId",
      updateDue: "BlockNumber"
    },
    BountyStatusCuratorProposed: {
      curator: "AccountId"
    },
    BountyStatusPendingPayout: {
      curator: "AccountId",
      beneficiary: "AccountId",
      unlockAt: "BlockNumber"
    },
    OpenTip: {
      reason: "Hash",
      who: "AccountId",
      finder: "AccountId",
      deposit: "Balance",
      closes: "Option<BlockNumber>",
      tips: "Vec<OpenTipTip>",
      findersFee: "bool"
    },
    OpenTipTo225: {
      reason: "Hash",
      who: "AccountId",
      finder: "Option<OpenTipFinderTo225>",
      closes: "Option<BlockNumber>",
      tips: "Vec<OpenTipTip>"
    },
    OpenTipFinderTo225: "(AccountId, Balance)",
    OpenTipTip: "(AccountId, Balance)",
    TreasuryProposal: {
      proposer: "AccountId",
      value: "Balance",
      beneficiary: "AccountId",
      bond: "Balance"
    }
  }
};

// node_modules/@polkadot/types/interfaces/txpayment/definitions.js
var definitions_default45 = {
  rpc: {},
  types: {
    Multiplier: "Fixed128"
  }
};

// node_modules/@polkadot/types/interfaces/txqueue/runtime.js
var runtime21 = {
  TaggedTransactionQueue: [
    {
      methods: {
        validate_transaction: {
          description: "Validate the transaction.",
          params: [
            {
              name: "source",
              type: "TransactionSource"
            },
            {
              name: "tx",
              type: "Extrinsic"
            },
            {
              name: "blockHash",
              type: "BlockHash"
            }
          ],
          type: "TransactionValidity"
        }
      },
      version: 3
    },
    {
      methods: {
        validate_transaction: {
          description: "Validate the transaction.",
          params: [
            {
              name: "source",
              type: "TransactionSource"
            },
            {
              name: "tx",
              type: "Extrinsic"
            }
          ],
          type: "TransactionValidity"
        }
      },
      version: 2
    },
    {
      methods: {
        validate_transaction: {
          description: "Validate the transaction.",
          params: [
            {
              name: "tx",
              type: "Extrinsic"
            }
          ],
          type: "TransactionValidity"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/txqueue/definitions.js
var definitions_default46 = {
  rpc: {},
  runtime: runtime21,
  types: {
    TransactionSource: {
      _enum: ["InBlock", "Local", "External"]
    },
    TransactionValidity: "Result<ValidTransaction, TransactionValidityError>",
    ValidTransaction: {
      priority: "TransactionPriority",
      requires: "Vec<TransactionTag>",
      provides: "Vec<TransactionTag>",
      longevity: "TransactionLongevity",
      propagate: "bool"
    }
  }
};

// node_modules/@polkadot/types/interfaces/uniques/definitions.js
var definitions_default47 = {
  rpc: {},
  types: {
    ClassId: "u32",
    InstanceId: "u32",
    DepositBalance: "Balance",
    DepositBalanceOf: "Balance",
    ClassDetails: {
      owner: "AccountId",
      issuer: "AccountId",
      admin: "AccountId",
      freezer: "AccountId",
      totalDeposit: "DepositBalance",
      freeHolding: "bool",
      instances: "u32",
      instanceMetadatas: "u32",
      attributes: "u32",
      isFrozen: "bool"
    },
    DestroyWitness: {
      instances: "Compact<u32>",
      instanceMetadatas: "Compact<u32>",
      attributes: "Compact<u32>"
    },
    InstanceDetails: {
      owner: "AccountId",
      approved: "Option<AccountId>",
      isFrozen: "bool",
      deposit: "DepositBalance"
    },
    ClassMetadata: {
      deposit: "DepositBalance",
      data: "Vec<u8>",
      isFrozen: "bool"
    },
    InstanceMetadata: {
      deposit: "DepositBalance",
      data: "Vec<u8>",
      isFrozen: "bool"
    }
  }
};

// node_modules/@polkadot/types/interfaces/utility/definitions.js
var definitions_default48 = {
  rpc: {},
  types: {
    Multisig: {
      when: "Timepoint",
      deposit: "Balance",
      depositor: "AccountId",
      approvals: "Vec<AccountId>"
    },
    Timepoint: {
      height: "BlockNumber",
      index: "u32"
    }
  }
};

// node_modules/@polkadot/types/interfaces/vesting/definitions.js
var definitions_default49 = {
  rpc: {},
  types: {
    VestingInfo: {
      locked: "Balance",
      perBlock: "Balance",
      startingBlock: "BlockNumber"
    }
  }
};

// node_modules/@polkadot/types/interfaces/attestations/definitions.js
var definitions_default50 = {
  rpc: {},
  types: {
    BlockAttestations: {
      receipt: "CandidateReceipt",
      valid: "Vec<AccountId>",
      invalid: "Vec<AccountId>"
    },
    IncludedBlocks: {
      actualNumber: "BlockNumber",
      session: "SessionIndex",
      randomSeed: "H256",
      activeParachains: "Vec<ParaId>",
      paraBlocks: "Vec<Hash>"
    },
    MoreAttestations: {}
  }
};

// node_modules/@polkadot/types/interfaces/bridges/definitions.js
var definitions_default51 = {
  rpc: {},
  types: {
    BridgedBlockHash: "H256",
    BridgedBlockNumber: "BlockNumber",
    BridgedHeader: "Header",
    BridgeMessageId: "(LaneId, MessageNonce)",
    CallOrigin: {
      _enum: {
        SourceRoot: "Null",
        TargetAccount: "(AccountId, MultiSigner, MultiSignature)",
        SourceAccount: "AccountId"
      }
    },
    ChainId: "[u8; 4]",
    DeliveredMessages: {
      begin: "MessageNonce",
      end: "MessageNonce",
      // pub type DispatchResultsBitVec = BitVec<Msb0, u8>;
      dispatchResults: "BitVec"
    },
    DispatchFeePayment: {
      _enum: ["AtSourceChain", "AtTargetChain"]
    },
    InboundLaneData: {
      relayers: "Vec<UnrewardedRelayer>",
      lastConfirmedNonce: "MessageNonce"
    },
    InboundRelayer: "AccountId",
    InitializationData: {
      header: "Header",
      authorityList: "AuthorityList",
      setId: "SetId",
      isHalted: "bool"
    },
    LaneId: "[u8; 4]",
    MessageData: {
      payload: "Bytes",
      fee: "Balance"
    },
    MessagesDeliveryProofOf: {
      bridgedHeaderHash: "BlockHash",
      storageProof: "Vec<Bytes>",
      lane: "LaneId"
    },
    MessageKey: {
      laneId: "LaneId",
      nonce: "MessageNonce"
    },
    MessageNonce: "u64",
    MessagesProofOf: {
      bridgedHeaderHash: "BridgedBlockHash",
      storageProof: "Vec<Bytes>",
      lane: "LaneId",
      noncesStart: "MessageNonce",
      noncesEnd: "MessageNonce"
    },
    OperatingMode: {
      _enum: ["Normal", "RejectingOutboundMessages", "Halted"]
    },
    OutboundLaneData: {
      oldestUnprunedNonce: "MessageNonce",
      latestReceivedNonce: "MessageNonce",
      latestGeneratedNonce: "MessageNonce"
    },
    OutboundMessageFee: "Balance",
    OutboundPayload: {
      specVersion: "u32",
      weight: "Weight",
      origin: "CallOrigin",
      dispatchFeePayment: "DispatchFeePayment",
      call: "Bytes"
    },
    Parameter: "Null",
    RelayerId: "AccountId",
    UnrewardedRelayer: {
      relayer: "RelayerId",
      messages: "DeliveredMessages"
    },
    UnrewardedRelayersState: {
      unrewardedRelayer_Entries: "MessageNonce",
      messagesInOldestEntry: "MessageNonce",
      totalMessages: "MessageNonce"
    }
  }
};

// node_modules/@polkadot/types/interfaces/claims/definitions.js
var definitions_default52 = {
  rpc: {},
  types: {
    StatementKind: {
      _enum: ["Regular", "Saft"]
    }
  }
};

// node_modules/@polkadot/types/interfaces/crowdloan/definitions.js
var definitions_default53 = {
  rpc: {},
  types: {
    FundIndex: "u32",
    LastContribution: {
      _enum: {
        Never: "Null",
        PreEnding: "u32",
        Ending: "BlockNumber"
      }
    },
    FundInfo: {
      depositor: "AccountId",
      verifier: "Option<MultiSigner>",
      deposit: "Balance",
      raised: "Balance",
      end: "BlockNumber",
      cap: "Balance",
      lastContribution: "LastContribution",
      firstPeriod: "LeasePeriod",
      lastPeriod: "LeasePeriod",
      trieIndex: "TrieIndex"
    },
    TrieIndex: "u32"
  }
};

// node_modules/@polkadot/types/interfaces/cumulus/runtime.js
var runtime22 = {
  CollectCollationInfo: [
    {
      methods: {
        collect_collation_info: {
          description: "Collect information about a collation.",
          params: [
            {
              name: "header",
              type: "Header"
            }
          ],
          type: "CollationInfo"
        }
      },
      version: 2
    },
    {
      methods: {
        collect_collation_info: {
          description: "Collect information about a collation.",
          params: [],
          type: "CollationInfoV1"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/cumulus/definitions.js
var dmpQueue = {
  CollationInfo: {
    upwardMessages: "Vec<UpwardMessage>",
    horizontalMessages: "Vec<OutboundHrmpMessage>",
    newValidationCode: "Option<ValidationCode>",
    processedDownwardMessages: "u32",
    hrmpWatermark: "RelayBlockNumber",
    headData: "HeadData"
  },
  CollationInfoV1: {
    upwardMessages: "Vec<UpwardMessage>",
    horizontalMessages: "Vec<OutboundHrmpMessage>",
    newValidationCode: "Option<ValidationCode>",
    processedDownwardMessages: "u32",
    hrmpWatermark: "RelayBlockNumber"
  },
  ConfigData: {
    maxIndividual: "Weight"
  },
  MessageId: "[u8; 32]",
  OverweightIndex: "u64",
  PageCounter: "u32",
  PageIndexData: {
    beginUsed: "PageCounter",
    endUsed: "PageCounter",
    overweightCount: "OverweightIndex"
  }
};
var definitions_default54 = {
  rpc: {},
  runtime: runtime22,
  types: dmpQueue
};

// node_modules/@polkadot/types/interfaces/finality/runtime.js
var finalityV1 = {
  methods: {
    best_finalized: {
      description: "Returns number and hash of the best finalized header known to the bridge module.",
      params: [],
      type: "(BlockNumber, Hash)"
    }
  },
  version: 1
};
var runtime23 = {
  KusamaFinalityApi: [finalityV1],
  PolkadotFinalityApi: [finalityV1],
  RococoFinalityApi: [finalityV1],
  WestendFinalityApi: [finalityV1]
};

// node_modules/@polkadot/types/interfaces/finality/definitions.js
var definitions_default55 = {
  rpc: {},
  runtime: runtime23,
  types: {}
};

// node_modules/@polkadot/types/interfaces/parachains/hrmp.js
var hrmp_default = {
  HrmpChannel: {
    maxCapacity: "u32",
    maxTotalSize: "u32",
    maxMessageSize: "u32",
    msgCount: "u32",
    totalSize: "u32",
    mqcHead: "Option<Hash>",
    senderDeposit: "Balance",
    recipientDeposit: "Balance"
  },
  HrmpChannelId: {
    sender: "u32",
    receiver: "u32"
  },
  HrmpOpenChannelRequest: {
    confirmed: "bool",
    age: "SessionIndex",
    senderDeposit: "Balance",
    maxMessageSize: "u32",
    maxCapacity: "u32",
    maxTotalSize: "u32"
  }
};

// node_modules/@polkadot/types/interfaces/parachains/runtime.js
var PH_V1_TO_V2 = {
  assumed_validation_data: {
    description: "Returns the persisted validation data for the given `ParaId` along with the corresponding validation code hash.",
    params: [
      {
        name: "paraId",
        type: "ParaId"
      },
      {
        name: "hash",
        type: "Hash"
      }
    ],
    type: "Option<(PersistedValidationData, ValidationCodeHash)>"
  },
  availability_cores: {
    description: "Yields information on all availability cores as relevant to the child block.",
    params: [],
    type: "Vec<CoreState>"
  },
  candidate_events: {
    description: "Get a vector of events concerning candidates that occurred within a block.",
    params: [],
    type: "Vec<CandidateEvent>"
  },
  candidate_pending_availability: {
    description: "Get the receipt of a candidate pending availability.",
    params: [
      {
        name: "paraId",
        type: "ParaId"
      }
    ],
    type: "Option<CommittedCandidateReceipt>"
  },
  check_validation_outputs: {
    description: "Checks if the given validation outputs pass the acceptance criteria.",
    params: [
      {
        name: "paraId",
        type: "ParaId"
      },
      {
        name: "outputs",
        type: "CandidateCommitments"
      }
    ],
    type: "bool"
  },
  dmq_contents: {
    description: "Get all the pending inbound messages in the downward message queue for a para.",
    params: [
      {
        name: "paraId",
        type: "ParaId"
      }
    ],
    type: "Vec<InboundDownwardMessage>"
  },
  inbound_hrmp_channels_contents: {
    description: "Get the contents of all channels addressed to the given recipient.",
    params: [
      {
        name: "paraId",
        type: "ParaId"
      }
    ],
    type: "Vec<InboundHrmpMessage>"
  },
  on_chain_votes: {
    description: "Scrape dispute relevant from on-chain, backing votes and resolved disputes.",
    params: [],
    type: "Option<ScrapedOnChainVotes>"
  },
  persisted_validation_data: {
    description: "Yields the persisted validation data for the given `ParaId` along with an assumption that should be used if the para currently occupies a core.",
    params: [
      {
        name: "paraId",
        type: "ParaId"
      },
      {
        name: "assumption",
        type: "OccupiedCoreAssumption"
      }
    ],
    type: "Option<PersistedValidationData>"
  },
  session_index_for_child: {
    description: "Returns the session index expected at a child of the block.",
    params: [],
    type: "SessionIndex"
  },
  validation_code: {
    description: "Fetch the validation code used by a para, making the given `OccupiedCoreAssumption`.",
    params: [
      {
        name: "paraId",
        type: "ParaId"
      },
      {
        name: "assumption",
        type: "OccupiedCoreAssumption"
      }
    ],
    type: "ValidationCode"
  },
  validation_code_by_hash: {
    description: "Get the validation code from its hash.",
    params: [
      {
        name: "hash",
        type: "ValidationCodeHash"
      }
    ],
    type: "Option<ValidationCode>"
  },
  validator_groups: {
    description: "Returns the validator groups and rotation info localized based on the hypothetical child of a block whose state  this is invoked on",
    params: [],
    type: "(Vec<Vec<ParaValidatorIndex>>, GroupRotationInfo)"
  },
  validators: {
    description: "Get the current validators.",
    params: [],
    type: "Vec<ValidatorId>"
  }
};
var PH_V2_TO_V3 = {
  pvfs_require_precheck: {
    description: "Returns code hashes of PVFs that require pre-checking by validators in the active set.",
    params: [],
    type: "Vec<ValidationCodeHash>"
  },
  session_info: {
    description: "Get the session info for the given session, if stored.",
    params: [
      {
        name: "index",
        type: "SessionIndex"
      }
    ],
    type: "Option<SessionInfo>"
  },
  submit_pvf_check_statement: {
    description: "Submits a PVF pre-checking statement into the transaction pool.",
    params: [
      {
        name: "stmt",
        type: "PvfCheckStatement"
      },
      {
        name: "signature",
        type: "ValidatorSignature"
      }
    ],
    type: "Null"
  },
  validation_code_hash: {
    description: "Fetch the hash of the validation code used by a para, making the given `OccupiedCoreAssumption`.",
    params: [
      {
        name: "paraId",
        type: "ParaId"
      },
      {
        name: "assumption",
        type: "OccupiedCoreAssumption"
      }
    ],
    type: "Option<ValidationCodeHash>"
  }
};
var PH_V3 = {
  disputes: {
    description: "Returns all onchain disputes.",
    params: [],
    type: "Vec<(SessionIndex, CandidateHash, DisputeState)>"
  }
};
var PH_V4 = {
  session_executor_params: {
    description: "Returns execution parameters for the session.",
    params: [
      {
        name: "sessionIndex",
        type: "SessionIndex"
      }
    ],
    type: "Option<ExecutorParams>"
  }
};
var PH_V5 = {
  key_ownership_proof: {
    description: "Returns a merkle proof of a validator session key",
    params: [
      {
        name: "validatorId",
        type: "ValidatorId"
      }
    ],
    type: "Option<OpaqueKeyOwnershipProof>"
  },
  submit_report_dispute_lost: {
    description: "Submit an unsigned extrinsic to slash validators who lost a dispute about a candidate of a past session",
    params: [
      {
        name: "disputeProof",
        type: "DisputeProof"
      },
      {
        name: "keyOwnershipProof",
        type: "OpaqueKeyOwnershipProof"
      }
    ],
    type: "Option<Null>"
  },
  unapplied_slashes: {
    description: "Returns a list of validators that lost a past session dispute and need to be slashed",
    params: [],
    type: "Vec<(SessionIndex, CandidateHash, PendingSlashes)>"
  }
};
var runtime24 = {
  ParachainHost: [
    {
      methods: __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, PH_V1_TO_V2), PH_V2_TO_V3), PH_V3), PH_V4), PH_V5),
      version: 5
    },
    {
      methods: __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, PH_V1_TO_V2), PH_V2_TO_V3), PH_V3), PH_V4),
      version: 4
    },
    {
      methods: __spreadValues(__spreadValues(__spreadValues({}, PH_V1_TO_V2), PH_V2_TO_V3), PH_V3),
      version: 3
    },
    {
      methods: __spreadValues(__spreadValues({}, PH_V1_TO_V2), PH_V2_TO_V3),
      version: 2
    },
    {
      methods: __spreadValues({
        session_info: {
          description: "Get the session info for the given session, if stored.",
          params: [
            {
              name: "index",
              type: "SessionIndex"
            }
          ],
          type: "Option<OldV1SessionInfo>"
        }
      }, PH_V1_TO_V2),
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/parachains/slots.js
var SlotRange10 = {
  _enum: ["ZeroZero", "ZeroOne", "ZeroTwo", "ZeroThree", "OneOne", "OneTwo", "OneThree", "TwoTwo", "TwoThree", "ThreeThree"]
};
var SlotRange = {
  _enum: ["ZeroZero", "ZeroOne", "ZeroTwo", "ZeroThree", "ZeroFour", "ZeroFive", "ZeroSix", "ZeroSeven", "OneOne", "OneTwo", "OneThree", "OneFour", "OneFive", "OneSix", "OneSeven", "TwoTwo", "TwoThree", "TwoFour", "TwoFive", "TwoSix", "TwoSeven", "ThreeThree", "ThreeFour", "ThreeFive", "ThreeSix", "ThreeSeven", "FourFour", "FourFive", "FourSix", "FourSeven", "FiveFive", "FiveSix", "FiveSeven", "SixSix", "SixSeven", "SevenSeven"]
};
var oldTypes = {
  Bidder: {
    _enum: {
      New: "NewBidder",
      Existing: "ParaId"
    }
  },
  IncomingParachain: {
    _enum: {
      Unset: "NewBidder",
      Fixed: "IncomingParachainFixed",
      Deploy: "IncomingParachainDeploy"
    }
  },
  IncomingParachainDeploy: {
    code: "ValidationCode",
    initialHeadData: "HeadData"
  },
  IncomingParachainFixed: {
    codeHash: "Hash",
    codeSize: "u32",
    initialHeadData: "HeadData"
  },
  NewBidder: {
    who: "AccountId",
    sub: "SubId"
  },
  SubId: "u32"
};
var slots_default = __spreadProps(__spreadValues({}, oldTypes), {
  AuctionIndex: "u32",
  LeasePeriod: "BlockNumber",
  LeasePeriodOf: "BlockNumber",
  SlotRange10,
  SlotRange,
  WinningData10: `[WinningDataEntry; ${SlotRange10._enum.length}]`,
  WinningData: `[WinningDataEntry; ${SlotRange._enum.length}]`,
  WinningDataEntry: "Option<(AccountId, ParaId, BalanceOf)>",
  WinnersData10: "Vec<WinnersDataTuple10>",
  WinnersData: "Vec<WinnersDataTuple>",
  WinnersDataTuple10: "(AccountId, ParaId, BalanceOf, SlotRange10)",
  WinnersDataTuple: "(AccountId, ParaId, BalanceOf, SlotRange)"
});

// node_modules/@polkadot/types/interfaces/parachains/definitions.js
var proposeTypes = {
  ParachainProposal: {
    proposer: "AccountId",
    genesisHead: "HeadData",
    validators: "Vec<ValidatorId>",
    name: "Bytes",
    balance: "Balance"
  },
  RegisteredParachainInfo: {
    validators: "Vec<ValidatorId>",
    proposer: "AccountId"
  }
};
var cumulusTypes = {
  ServiceQuality: {
    _enum: ["Ordered", "Fast"]
  }
};
var disputeTypes = {
  DisputeLocation: {
    _enum: ["Local", "Remote"]
  },
  DisputeResult: {
    _enum: ["Valid", "Invalid"]
  },
  DisputeState: {
    validatorsFor: "BitVec",
    validatorsAgainst: "BitVec",
    start: "BlockNumber",
    concludedAt: "Option<BlockNumber>"
  },
  DisputeStatement: {
    _enum: {
      Valid: "ValidDisputeStatementKind",
      Invalid: "InvalidDisputeStatementKind"
    }
  },
  DisputeStatementSet: {
    candidateHash: "CandidateHash",
    session: "SessionIndex",
    statements: "Vec<(DisputeStatement, ParaValidatorIndex, ValidatorSignature)>"
  },
  ExecutorParam: {
    _enum: {
      Phantom: "Null",
      // index starts at 1... empty slot at 0
      MaxMemoryPages: "u32",
      StackLogicalMax: "u32",
      StackNativeMax: "u32",
      PrecheckingMaxMemory: "u64",
      PvfPrepTimeout: "(PvfPrepTimeoutKind, u64)",
      PvfExecTimeout: "(PvfExecTimeoutKind, u64)"
    }
  },
  ExecutorParamsHash: "Hash",
  ExecutorParams: "Vec<ExecutorParam>",
  ExplicitDisputeStatement: {
    valid: "bool",
    candidateHash: "CandidateHash",
    session: "SessionIndex"
  },
  InvalidDisputeStatementKind: {
    _enum: ["Explicit"]
  },
  MultiDisputeStatementSet: "Vec<DisputeStatementSet>",
  PvfExecTimeoutKind: {
    _enum: ["Backing", "Approval"]
  },
  PvfPrepTimeoutKind: {
    _enum: ["Precheck", "Lenient"]
  },
  ValidDisputeStatementKind: {
    _enum: {
      Explicit: "Null",
      BackingSeconded: "Hash",
      BackingValid: "Hash",
      ApprovalChecking: "Null"
    }
  }
};
var definitions_default56 = {
  rpc: {},
  runtime: runtime24,
  types: __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, cumulusTypes), disputeTypes), hrmp_default), proposeTypes), slots_default), {
    AbridgedCandidateReceipt: {
      parachainIndex: "ParaId",
      relayParent: "Hash",
      headData: "HeadData",
      collator: "CollatorId",
      signature: "CollatorSignature",
      povBlockHash: "Hash",
      commitments: "CandidateCommitments"
    },
    AbridgedHostConfiguration: {
      maxCodeSize: "u32",
      maxHeadDataSize: "u32",
      maxUpwardQueueCount: "u32",
      maxUpwardQueueSize: "u32",
      maxUpwardMessageSize: "u32",
      maxUpwardMessageNumPerCandidate: "u32",
      hrmpMaxMessageNumPerCandidate: "u32",
      validationUpgradeFrequency: "BlockNumber",
      validationUpgradeDelay: "BlockNumber"
    },
    AbridgedHrmpChannel: {
      maxCapacity: "u32",
      maxTotalSize: "u32",
      maxMessageSize: "u32",
      msgCount: "u32",
      totalSize: "u32",
      mqcHead: "Option<Hash>"
    },
    AssignmentId: "AccountId",
    AssignmentKind: {
      _enum: {
        Parachain: "Null",
        Parathread: "(CollatorId, u32)"
      }
    },
    AttestedCandidate: {
      candidate: "AbridgedCandidateReceipt",
      validityVotes: "Vec<ValidityAttestation>",
      validatorIndices: "BitVec"
    },
    AuthorityDiscoveryId: "AccountId",
    AvailabilityBitfield: "BitVec",
    AvailabilityBitfieldRecord: {
      bitfield: "AvailabilityBitfield",
      submittedTt: "BlockNumber"
    },
    BackedCandidate: {
      candidate: "CommittedCandidateReceipt",
      validityVotes: "Vec<ValidityAttestation>",
      validatorIndices: "BitVec"
    },
    BufferedSessionChange: {
      applyAt: "BlockNumber",
      validators: "Vec<ValidatorId>",
      queued: "Vec<ValidatorId>",
      sessionIndex: "SessionIndex"
    },
    CandidateCommitments: {
      upwardMessages: "Vec<UpwardMessage>",
      horizontalMessages: "Vec<OutboundHrmpMessage>",
      newValidationCode: "Option<ValidationCode>",
      headData: "HeadData",
      processedDownwardMessages: "u32",
      hrmpWatermark: "BlockNumber"
    },
    CandidateDescriptor: {
      paraId: "ParaId",
      relayParent: "RelayChainHash",
      collatorId: "CollatorId",
      persistedValidationDataHash: "Hash",
      povHash: "Hash",
      erasureRoot: "Hash",
      signature: "CollatorSignature",
      paraHead: "Hash",
      validationCodeHash: "ValidationCodeHash"
    },
    CandidateEvent: {
      _enum: {
        CandidateBacked: "(CandidateReceipt, HeadData, CoreIndex, GroupIndex)",
        CandidateIncluded: "(CandidateReceipt, HeadData, CoreIndex, GroupIndex)",
        CandidateTimedOut: "(CandidateReceipt, HeadData, CoreIndex)"
      }
    },
    CandidateHash: "Hash",
    CandidateInfo: {
      who: "AccountId",
      deposit: "Balance"
    },
    CandidatePendingAvailability: {
      core: "CoreIndex",
      hash: "CandidateHash",
      descriptor: "CandidateDescriptor",
      availabilityVotes: "BitVec",
      backers: "BitVec",
      relayParentNumber: "BlockNumber",
      backedInNumber: "BlockNumber",
      backingGroup: "GroupIndex"
    },
    CandidateReceipt: {
      descriptor: "CandidateDescriptor",
      commitmentsHash: "Hash"
    },
    GlobalValidationData: {
      maxCodeSize: "u32",
      maxHeadDataSize: "u32",
      blockNumber: "BlockNumber"
    },
    CollatorId: "H256",
    CollatorSignature: "Signature",
    CommittedCandidateReceipt: {
      descriptor: "CandidateDescriptor",
      commitments: "CandidateCommitments"
    },
    CoreAssignment: {
      core: "CoreIndex",
      paraId: "ParaId",
      kind: "AssignmentKind",
      groupIdx: "GroupIndex"
    },
    CoreIndex: "u32",
    CoreOccupied: {
      _enum: {
        Parathread: "ParathreadEntry",
        Parachain: "Null"
      }
    },
    CoreState: {
      _enum: {
        Occupied: "OccupiedCore",
        Scheduled: "ScheduledCore",
        Free: "Null"
      }
    },
    DisputeProof: {
      timeSlot: "DisputesTimeSlot",
      kind: "SlashingOffenceKind",
      validatorIndex: "ValidatorIndex",
      validatorId: "ValidatorId"
    },
    DisputesTimeSlot: {
      sessionIndex: "SessionIndex",
      candidateHash: "CandidateHash"
    },
    DoubleVoteReport: {
      identity: "ValidatorId",
      first: "(Statement, ValidatorSignature)",
      second: "(Statement, ValidatorSignature)",
      proof: "MembershipProof",
      signingContext: "SigningContext"
    },
    DownwardMessage: "Bytes",
    GroupIndex: "u32",
    GroupRotationInfo: {
      sessionStartBlock: "BlockNumber",
      groupRotationFrequency: "BlockNumber",
      now: "BlockNumber"
    },
    GlobalValidationSchedule: {
      maxCodeSize: "u32",
      maxHeadDataSize: "u32",
      blockNumber: "BlockNumber"
    },
    HeadData: "Bytes",
    HostConfiguration: {
      maxCodeSize: "u32",
      maxHeadDataSize: "u32",
      maxUpwardQueueCount: "u32",
      maxUpwardQueueSize: "u32",
      maxUpwardMessageSize: "u32",
      maxUpwardMessageNumPerCandidate: "u32",
      hrmpMaxMessageNumPerCandidate: "u32",
      validationUpgradeFrequency: "BlockNumber",
      validationUpgradeDelay: "BlockNumber",
      maxPovSize: "u32",
      maxDownwardMessageSize: "u32",
      preferredDispatchableUpwardMessagesStepWeight: "Weight",
      hrmpMaxParachainOutboundChannels: "u32",
      hrmpMaxParathreadOutboundChannels: "u32",
      hrmpOpenRequestTtl: "u32",
      hrmpSenderDeposit: "Balance",
      hrmpRecipientDeposit: "Balance",
      hrmpChannelMaxCapacity: "u32",
      hrmpChannelMaxTotalSize: "u32",
      hrmpMaxParachainInboundChannels: "u32",
      hrmpMaxParathreadInboundChannels: "u32",
      hrmpChannelMaxMessageSize: "u32",
      codeRetentionPeriod: "BlockNumber",
      parathreadCores: "u32",
      parathreadRetries: "u32",
      groupRotationFrequency: "BlockNumber",
      chainAvailabilityPeriod: "BlockNumber",
      threadAvailabilityPeriod: "BlockNumber",
      schedulingLookahead: "u32",
      maxValidatorsPerCore: "Option<u32>",
      maxValidators: "Option<u32>",
      disputePeriod: "SessionIndex",
      disputePostConclusionAcceptancePeriod: "BlockNumber",
      disputeMaxSpamSlots: "u32",
      disputeConclusionByTimeOutPeriod: "BlockNumber",
      noShowSlots: "u32",
      nDelayTranches: "u32",
      zerothDelayTrancheWidth: "u32",
      neededApprovals: "u32",
      relayVrfModuloSamples: "u32"
    },
    InboundDownwardMessage: {
      pubSentAt: "BlockNumber",
      pubMsg: "DownwardMessage"
    },
    InboundHrmpMessage: {
      sentAt: "BlockNumber",
      data: "Bytes"
    },
    InboundHrmpMessages: "Vec<InboundHrmpMessage>",
    LocalValidationData: {
      parentHead: "HeadData",
      balance: "Balance",
      codeUpgradeAllowed: "Option<BlockNumber>"
    },
    MessageIngestionType: {
      downwardMessages: "Vec<InboundDownwardMessage>",
      horizontalMessages: "BTreeMap<ParaId, InboundHrmpMessages>"
    },
    MessageQueueChain: "RelayChainHash",
    OccupiedCore: {
      nextUpOnAvailable: "Option<ScheduledCore>",
      occupiedSince: "BlockNumber",
      timeOutAt: "BlockNumber",
      nextUpOnTimeOut: "Option<ScheduledCore>",
      availability: "BitVec",
      groupResponsible: "GroupIndex",
      candidateHash: "CandidateHash",
      candidateDescriptor: "CandidateDescriptor"
    },
    OccupiedCoreAssumption: {
      _enum: ["Included,", "TimedOut", "Free"]
    },
    OutboundHrmpMessage: {
      recipient: "u32",
      data: "Bytes"
    },
    PendingSlashes: {
      _alias: {
        slashKeys: "keys"
      },
      slashKeys: "BTreeMap<ValidatorIndex, ValidatorId>",
      kind: "SlashingOffenceKind"
    },
    ParachainDispatchOrigin: {
      _enum: ["Signed", "Parachain", "Root"]
    },
    ParachainInherentData: {
      validationData: "PersistedValidationData",
      relayChainState: "StorageProof",
      downwardMessages: "Vec<InboundDownwardMessage>",
      horizontalMessages: "BTreeMap<ParaId, VecInboundHrmpMessage>"
    },
    ParachainsInherentData: {
      bitfields: "SignedAvailabilityBitfields",
      backedCandidates: "Vec<BackedCandidate>",
      disputes: "MultiDisputeStatementSet",
      parentHeader: "Header"
    },
    ParaGenesisArgs: {
      genesisHead: "Bytes",
      validationCode: "Bytes",
      parachain: "bool"
    },
    ParaId: "u32",
    ParaInfo: {
      manager: "AccountId",
      deposit: "Balance",
      locked: "bool"
    },
    ParaLifecycle: {
      _enum: ["Onboarding", "Parathread", "Parachain", "UpgradingToParachain", "DowngradingToParathread", "OutgoingParathread", "OutgoingParachain"]
    },
    ParaPastCodeMeta: {
      upgradeTimes: "Vec<ReplacementTimes>",
      lastPruned: "Option<BlockNumber>"
    },
    ParaScheduling: {
      _enum: ["Always", "Dynamic"]
    },
    ParathreadClaim: "(ParaId, CollatorId)",
    ParathreadClaimQueue: {
      queue: "Vec<QueuedParathread>",
      nextCoreOffset: "u32"
    },
    ParathreadEntry: {
      claim: "ParathreadClaim",
      retries: "u32"
    },
    ParaValidatorIndex: "u32",
    PersistedValidationData: {
      parentHead: "HeadData",
      relayParentNumber: "RelayChainBlockNumber",
      relayParentStorageRoot: "Hash",
      maxPovSize: "u32"
    },
    PvfCheckStatement: {
      accept: "bool",
      subject: "ValidationCodeHash",
      sessionIndex: "SessionIndex",
      validatorIndex: "ParaValidatorIndex"
    },
    QueuedParathread: {
      claim: "ParathreadEntry",
      coreOffset: "u32"
    },
    RelayBlockNumber: "u32",
    RelayChainBlockNumber: "RelayBlockNumber",
    RelayHash: "Hash",
    RelayChainHash: "RelayHash",
    Remark: "[u8; 32]",
    ReplacementTimes: {
      expectedAt: "BlockNumber",
      activatedAt: "BlockNumber"
    },
    Retriable: {
      _enum: {
        Never: "Null",
        WithRetries: "u32"
      }
    },
    ScheduledCore: {
      paraId: "ParaId",
      collator: "Option<CollatorId>"
    },
    Scheduling: {
      _enum: ["Always", "Dynamic"]
    },
    ScrapedOnChainVotes: {
      session: "SessionIndex",
      backingValidatorsPerCandidate: "Vec<(CandidateReceipt, Vec<(ParaValidatorIndex, ValidityAttestation)>)>",
      disputes: "MultiDisputeStatementSet"
    },
    SessionInfo: {
      activeValidatorIndices: "Vec<ParaValidatorIndex>",
      randomSeed: "[u8; 32]",
      disputePeriod: "SessionIndex",
      validators: "Vec<ValidatorId>",
      discoveryKeys: "Vec<AuthorityDiscoveryId>",
      assignmentKeys: "Vec<AssignmentId>",
      validatorGroups: "Vec<Vec<ValidatorIndex>>",
      nCores: "u32",
      zerothDelayTrancheWidth: "u32",
      relayVrfModuloSamples: "u32",
      nDelayTranches: "u32",
      noShowSlots: "u32",
      neededApprovals: "u32"
    },
    OldV1SessionInfo: {
      validators: "Vec<ValidatorId>",
      discoveryKeys: "Vec<AuthorityDiscoveryId>",
      assignmentKeys: "Vec<AssignmentId>",
      validatorGroups: "Vec<Vec<ParaValidatorIndex>>",
      nCores: "u32",
      zerothDelayTrancheWidth: "u32",
      relayVrfModuloSamples: "u32",
      nDelayTranches: "u32",
      noShowSlots: "u32",
      neededApprovals: "u32"
    },
    SessionInfoValidatorGroup: "Vec<ParaValidatorIndex>",
    SignedAvailabilityBitfield: {
      payload: "BitVec",
      validatorIndex: "ParaValidatorIndex",
      signature: "ValidatorSignature"
    },
    SignedAvailabilityBitfields: "Vec<SignedAvailabilityBitfield>",
    SigningContext: {
      sessionIndex: "SessionIndex",
      parentHash: "Hash"
    },
    SlashingOffenceKind: {
      _enum: ["ForInvalid", "AgainstValid"]
    },
    Statement: {
      _enum: {
        Never: "Null",
        // starts at 1
        Candidate: "Hash",
        Valid: "Hash",
        Invalid: "Hash"
      }
    },
    TransientValidationData: {
      maxCodeSize: "u32",
      maxHeadDataSize: "u32",
      balance: "Balance",
      codeUpgradeAllowed: "Option<BlockNumber>",
      dmqLength: "u32"
    },
    UpgradeGoAhead: {
      _enum: ["Abort", "GoAhead"]
    },
    UpgradeRestriction: {
      _enum: ["Present"]
    },
    UpwardMessage: "Bytes",
    ValidationFunctionParams: {
      maxCodeSize: "u32",
      relayChainHeight: "RelayChainBlockNumber",
      codeUpgradeAllowed: "Option<RelayChainBlockNumber>"
    },
    ValidationCode: "Bytes",
    ValidationCodeHash: "Hash",
    ValidationData: {
      persisted: "PersistedValidationData",
      transient: "TransientValidationData"
    },
    ValidationDataType: {
      validationData: "ValidationData",
      relayChainState: "Vec<Bytes>"
    },
    ValidatorSignature: "Signature",
    ValidityAttestation: {
      _enum: {
        Never: "Null",
        // starts at 1
        Implicit: "ValidatorSignature",
        Explicit: "ValidatorSignature"
      }
    },
    MessagingStateSnapshot: {
      relayDispatchQueueSize: "(u32, u32)",
      egressChannels: "Vec<MessagingStateSnapshotEgressEntry>"
    },
    MessagingStateSnapshotEgressEntry: "(ParaId, AbridgedHrmpChannel)",
    SystemInherentData: "ParachainInherentData",
    VecInboundHrmpMessage: "Vec<InboundHrmpMessage>"
  })
};

// node_modules/@polkadot/types/interfaces/poll/definitions.js
var definitions_default57 = {
  rpc: {},
  types: {
    Approvals: "[bool; 4]"
  }
};

// node_modules/@polkadot/types/interfaces/purchase/definitions.js
var definitions_default58 = {
  rpc: {},
  types: {
    AccountStatus: {
      validity: "AccountValidity",
      freeBalance: "Balance",
      lockedBalance: "Balance",
      signature: "Vec<u8>",
      vat: "Permill"
    },
    AccountValidity: {
      _enum: ["Invalid", "Initiated", "Pending", "ValidLow", "ValidHigh", "Completed"]
    }
  }
};

// node_modules/@polkadot/types-create/packageDetect.js
detectPackage(packageInfo11, null, [packageInfo10]);

// node_modules/@polkadot/types-create/types/types.js
var TypeDefInfo;
(function(TypeDefInfo2) {
  TypeDefInfo2[TypeDefInfo2["BTreeMap"] = 0] = "BTreeMap";
  TypeDefInfo2[TypeDefInfo2["BTreeSet"] = 1] = "BTreeSet";
  TypeDefInfo2[TypeDefInfo2["Compact"] = 2] = "Compact";
  TypeDefInfo2[TypeDefInfo2["DoNotConstruct"] = 3] = "DoNotConstruct";
  TypeDefInfo2[TypeDefInfo2["Enum"] = 4] = "Enum";
  TypeDefInfo2[TypeDefInfo2["HashMap"] = 5] = "HashMap";
  TypeDefInfo2[TypeDefInfo2["Int"] = 6] = "Int";
  TypeDefInfo2[TypeDefInfo2["Linkage"] = 7] = "Linkage";
  TypeDefInfo2[TypeDefInfo2["Null"] = 8] = "Null";
  TypeDefInfo2[TypeDefInfo2["Option"] = 9] = "Option";
  TypeDefInfo2[TypeDefInfo2["Plain"] = 10] = "Plain";
  TypeDefInfo2[TypeDefInfo2["Range"] = 11] = "Range";
  TypeDefInfo2[TypeDefInfo2["RangeInclusive"] = 12] = "RangeInclusive";
  TypeDefInfo2[TypeDefInfo2["Result"] = 13] = "Result";
  TypeDefInfo2[TypeDefInfo2["Set"] = 14] = "Set";
  TypeDefInfo2[TypeDefInfo2["Si"] = 15] = "Si";
  TypeDefInfo2[TypeDefInfo2["Struct"] = 16] = "Struct";
  TypeDefInfo2[TypeDefInfo2["Tuple"] = 17] = "Tuple";
  TypeDefInfo2[TypeDefInfo2["UInt"] = 18] = "UInt";
  TypeDefInfo2[TypeDefInfo2["Vec"] = 19] = "Vec";
  TypeDefInfo2[TypeDefInfo2["VecFixed"] = 20] = "VecFixed";
  TypeDefInfo2[TypeDefInfo2["WrapperKeepOpaque"] = 21] = "WrapperKeepOpaque";
  TypeDefInfo2[TypeDefInfo2["WrapperOpaque"] = 22] = "WrapperOpaque";
})(TypeDefInfo || (TypeDefInfo = {}));

// node_modules/@polkadot/types-codec/packageDetect.js
detectPackage(packageInfo10, null, []);

// node_modules/@polkadot/types-codec/utils/util.js
function hasEq(o) {
  return isFunction(o.eq);
}

// node_modules/@polkadot/types-codec/utils/compareArray.js
function compareArray(a, b) {
  if (Array.isArray(b)) {
    return a.length === b.length && isUndefined(a.find((v, index) => hasEq(v) ? !v.eq(b[index]) : v !== b[index]));
  }
  return false;
}

// node_modules/@polkadot/types-codec/abstract/Array.js
var AbstractArray = class extends Array {
  registry;
  createdAtHash;
  initialU8aLength;
  isStorageFallback;
  /**
   * @description This ensures that operators such as clice, filter, map, etc. return
   * new Array instances (without this we need to apply overrides)
   */
  static get [Symbol.species]() {
    return Array;
  }
  constructor(registry, length) {
    super(length);
    this.registry = registry;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    const count = this.length;
    let total = compactToU8a(count).length;
    for (let i = 0; i < count; i++) {
      total += this[i].encodedLength;
    }
    return total;
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is an empty value
   */
  get isEmpty() {
    return this.length === 0;
  }
  /**
   * @description The length of the value
   */
  get length() {
    return super.length;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    return compareArray(this, other);
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    return {
      inner: this.inspectInner(),
      outer: [compactToU8a(this.length)]
    };
  }
  /**
   * @internal
   * @description Internal per-item inspection of internal values
   */
  inspectInner() {
    const count = this.length;
    const inner = new Array(count);
    for (let i = 0; i < count; i++) {
      inner[i] = this[i].inspect();
    }
    return inner;
  }
  /**
   * @description Converts the Object to an standard JavaScript Array
   */
  toArray() {
    return Array.from(this);
  }
  /**
   * @description Returns a hex string representation of the value
   */
  toHex() {
    return u8aToHex(this.toU8a());
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(isExtended) {
    const count = this.length;
    const result = new Array(count);
    for (let i = 0; i < count; i++) {
      result[i] = this[i] && this[i].toHuman(isExtended);
    }
    return result;
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    const count = this.length;
    const result = new Array(count);
    for (let i = 0; i < count; i++) {
      result[i] = this[i] && this[i].toJSON();
    }
    return result;
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    const count = this.length;
    const result = new Array(count);
    for (let i = 0; i < count; i++) {
      result[i] = this[i] && this[i].toPrimitive();
    }
    return result;
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    const count = this.length;
    const result = new Array(count);
    for (let i = 0; i < count; i++) {
      result[i] = this[i].toString();
    }
    return `[${result.join(", ")}]`;
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    const encoded = this.toU8aInner();
    return isBare ? u8aConcatStrict(encoded) : u8aConcatStrict([compactToU8a(this.length), ...encoded]);
  }
  /**
   * @internal
   * @description Internal per-item SCALE encoding of contained values
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8aInner(isBare) {
    const count = this.length;
    const encoded = new Array(count);
    for (let i = 0; i < count; i++) {
      encoded[i] = this[i].toU8a(isBare);
    }
    return encoded;
  }
};

// node_modules/@polkadot/types-codec/abstract/Base.js
var AbstractBase = class {
  registry;
  createdAtHash;
  initialU8aLength;
  isStorageFallback;
  __internal__raw;
  constructor(registry, value, initialU8aLength) {
    this.initialU8aLength = initialU8aLength;
    this.__internal__raw = value;
    this.registry = registry;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    return this.toU8a().length;
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description returns the inner (wrapped value)
   */
  get inner() {
    return this.__internal__raw;
  }
  /**
   * @description Checks if the value is an empty value
   */
  get isEmpty() {
    return this.__internal__raw.isEmpty;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    return this.__internal__raw.eq(other);
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    return this.__internal__raw.inspect();
  }
  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */
  toHex(isLe) {
    return this.__internal__raw.toHex(isLe);
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(isExtended) {
    return this.__internal__raw.toHuman(isExtended);
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return this.__internal__raw.toJSON();
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return this.__internal__raw.toPrimitive();
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return this.__internal__raw.toString();
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    return this.__internal__raw.toU8a(isBare);
  }
  /**
   * @description Returns the inner wrapped value (equivalent to valueOf)
   */
  unwrap() {
    return this.__internal__raw;
  }
  /**
   * @description Returns the inner wrapped value
   */
  valueOf() {
    return this.__internal__raw;
  }
};

// node_modules/@polkadot/types-codec/abstract/Int.js
var DEFAULT_UINT_BITS = 64;
var MAX_NUMBER_BITS = 52;
var MUL_P = new import_bn.default(1e4);
var FORMATTERS = [
  ["Perquintill", BN_QUINTILL],
  ["Perbill", BN_BILLION],
  ["Permill", BN_MILLION],
  ["Percent", BN_HUNDRED]
];
function isToBn(value) {
  return isFunction(value.toBn);
}
function toPercentage(value, divisor) {
  return `${(value.mul(MUL_P).div(divisor).toNumber() / 100).toFixed(2)}%`;
}
function decodeAbstractInt(value, isNegative) {
  if (isNumber(value)) {
    if (!Number.isInteger(value) || value > Number.MAX_SAFE_INTEGER || value < Number.MIN_SAFE_INTEGER) {
      throw new Error("Number needs to be an integer <= Number.MAX_SAFE_INTEGER, i.e. 2 ^ 53 - 1");
    }
    return value;
  } else if (isString(value)) {
    if (isHex(value, -1, true)) {
      return hexToBn(value, { isLe: false, isNegative }).toString();
    }
    if (value.includes(".") || value.includes(",") || value.includes("e")) {
      throw new Error("String should not contain decimal points or scientific notation");
    }
    return value;
  } else if (isBn(value) || isBigInt(value)) {
    return value.toString();
  } else if (isObject(value)) {
    if (isToBn(value)) {
      return value.toBn().toString();
    }
    const keys2 = Object.keys(value);
    if (keys2.length !== 1) {
      throw new Error("Unable to construct number from multi-key object");
    }
    return decodeAbstractInt(value[keys2[0]], isNegative);
  } else if (!value) {
    return 0;
  }
  throw new Error(`Unable to create BN from unknown type ${typeof value}`);
}
var AbstractInt = class extends import_bn.default {
  registry;
  encodedLength;
  isUnsigned;
  createdAtHash;
  initialU8aLength;
  isStorageFallback;
  __internal__bitLength;
  constructor(registry, value = 0, bitLength = DEFAULT_UINT_BITS, isSigned = false) {
    super(
      // shortcut isU8a as used in SCALE decoding
      isU8a(value) ? bitLength <= 48 ? u8aToNumber(value.subarray(0, bitLength / 8), { isNegative: isSigned }) : u8aToBn(value.subarray(0, bitLength / 8), { isLe: true, isNegative: isSigned }).toString() : decodeAbstractInt(value, isSigned)
    );
    this.registry = registry;
    this.__internal__bitLength = bitLength;
    this.encodedLength = this.__internal__bitLength / 8;
    this.initialU8aLength = this.__internal__bitLength / 8;
    this.isUnsigned = !isSigned;
    const isNegative = this.isNeg();
    const maxBits = bitLength - (isSigned && !isNegative ? 1 : 0);
    if (isNegative && !isSigned) {
      throw new Error(`${this.toRawType()}: Negative number passed to unsigned type`);
    } else if (super.bitLength() > maxBits) {
      throw new Error(`${this.toRawType()}: Input too large. Found input with ${super.bitLength()} bits, expected ${maxBits}`);
    }
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is a zero value (align elsewhere)
   */
  get isEmpty() {
    return this.isZero();
  }
  /**
   * @description Returns the number of bits in the value
   */
  bitLength() {
    return this.__internal__bitLength;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  eq(other) {
    return super.eq(isHex(other) ? hexToBn(other.toString(), { isLe: false, isNegative: !this.isUnsigned }) : bnToBn(other));
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    return {
      outer: [this.toU8a()]
    };
  }
  /**
   * @description True if this value is the max of the type
   */
  isMax() {
    const u8a = this.toU8a().filter((b) => b === 255);
    return u8a.length === this.__internal__bitLength / 8;
  }
  /**
   * @description Returns a BigInt representation of the number
   */
  toBigInt() {
    return BigInt(this.toString());
  }
  /**
   * @description Returns the BN representation of the number. (Compatibility)
   */
  toBn() {
    return this;
  }
  /**
   * @description Returns a hex string representation of the value
   */
  toHex(isLe = false) {
    return bnToHex(this, {
      bitLength: this.bitLength(),
      isLe,
      isNegative: !this.isUnsigned
    });
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(_isExpanded) {
    const rawType = this.toRawType();
    if (rawType === "Balance") {
      return this.isMax() ? "everything" : formatBalance(this, { decimals: this.registry.chainDecimals[0], withSi: true, withUnit: this.registry.chainTokens[0] });
    }
    const [, divisor] = FORMATTERS.find(([type]) => type === rawType) || [];
    return divisor ? toPercentage(this, divisor) : formatNumber(this);
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON(onlyHex = false) {
    return onlyHex || this.__internal__bitLength > 128 || super.bitLength() > MAX_NUMBER_BITS ? this.toHex() : this.toNumber();
  }
  /**
   * @description Returns the value in a primitive form, either number when <= 52 bits, or string otherwise
   */
  toPrimitive() {
    return super.bitLength() > MAX_NUMBER_BITS ? this.toString() : this.toNumber();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return this instanceof this.registry.createClassUnsafe("Balance") ? "Balance" : `${this.isUnsigned ? "u" : "i"}${this.bitLength()}`;
  }
  /**
   * @description Returns the string representation of the value
   * @param base The base to use for the conversion
   */
  toString(base) {
    return super.toString(base);
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */
  toU8a(_isBare) {
    return bnToU8a(this, {
      bitLength: this.bitLength(),
      isLe: true,
      isNegative: !this.isUnsigned
    });
  }
};

// node_modules/@polkadot/types-codec/utils/compareMap.js
function hasMismatch(a, b) {
  return isUndefined(a) || (hasEq(a) ? !a.eq(b) : a !== b);
}
function notEntry(value) {
  return !Array.isArray(value) || value.length !== 2;
}
function compareMapArray(a, b) {
  return a.size === b.length && !b.some((e) => notEntry(e) || hasMismatch(a.get(e[0]), e[1]));
}
function compareMap(a, b) {
  if (Array.isArray(b)) {
    return compareMapArray(a, b);
  } else if (b instanceof Map) {
    return compareMapArray(a, [...b.entries()]);
  } else if (isObject(b)) {
    return compareMapArray(a, Object.entries(b));
  }
  return false;
}

// node_modules/@polkadot/types-codec/utils/compareSet.js
function compareSetArray(a, b) {
  return a.size === b.length && !b.some((e) => !a.has(e));
}
function compareSet(a, b) {
  if (Array.isArray(b)) {
    return compareSetArray(a, b);
  } else if (b instanceof Set) {
    return compareSetArray(a, [...b.values()]);
  } else if (isObject(b)) {
    return compareSetArray(a, Object.values(b));
  }
  return false;
}

// node_modules/@polkadot/types-codec/utils/decodeU8a.js
function formatFailure(registry, fn, _result, { message }, u8a, i, count, Type2, key) {
  let type = "";
  try {
    type = `: ${new Type2(registry).toRawType()}`;
  } catch {
  }
  return `${fn}: failed at ${u8aToHex(u8a.subarray(0, 16))}…${key ? ` on ${key}` : ""} (index ${i + 1}/${count})${type}:: ${message}`;
}
function decodeU8a(registry, result, u8a, [Types, keys2]) {
  const count = result.length;
  let offset = 0;
  let i = 0;
  try {
    while (i < count) {
      const value = new Types[i](registry, u8a.subarray(offset));
      offset += value.initialU8aLength || value.encodedLength;
      result[i] = value;
      i++;
    }
  } catch (error) {
    throw new Error(formatFailure(registry, "decodeU8a", result, error, u8a.subarray(offset), i, count, Types[i], keys2[i]));
  }
  return [result, offset];
}
function decodeU8aStruct(registry, result, u8a, [Types, keys2]) {
  const count = result.length;
  let offset = 0;
  let i = 0;
  try {
    while (i < count) {
      const value = new Types[i](registry, u8a.subarray(offset));
      offset += value.initialU8aLength || value.encodedLength;
      result[i] = [keys2[i], value];
      i++;
    }
  } catch (error) {
    throw new Error(formatFailure(registry, "decodeU8aStruct", result, error, u8a.subarray(offset), i, count, Types[i], keys2[i]));
  }
  return [result, offset];
}
function decodeU8aVec(registry, result, u8a, startAt, Type2) {
  const count = result.length;
  let offset = startAt;
  let i = 0;
  try {
    while (i < count) {
      const value = new Type2(registry, u8a.subarray(offset));
      offset += value.initialU8aLength || value.encodedLength;
      result[i] = value;
      i++;
    }
  } catch (error) {
    throw new Error(formatFailure(registry, "decodeU8aVec", result, error, u8a.subarray(offset), i, count, Type2));
  }
  return [offset, offset - startAt];
}

// node_modules/@polkadot/types-codec/utils/sanitize.js
var BOUNDED = ["BTreeMap", "BTreeSet", "HashMap", "Vec"];
var ALLOWED_BOXES = BOUNDED.concat(["Compact", "DoNotConstruct", "Int", "Linkage", "Range", "RangeInclusive", "Result", "Opaque", "Option", "UInt", "WrapperKeepOpaque", "WrapperOpaque"]);
var BOX_PRECEDING = ["<", "(", "[", '"', ",", " "];
var mappings = [
  // alias <T::InherentOfflineReport as InherentOfflineReport>::Inherent -> InherentOfflineReport
  alias("<T::InherentOfflineReport as InherentOfflineReport>::Inherent", "InherentOfflineReport", false),
  alias("VecDeque<", "Vec<", false),
  // <T::Balance as HasCompact>
  cleanupCompact(),
  // Change BoundedVec<Type, Size> to Vec<Type>
  removeExtensions("Bounded", true),
  // Change WeakVec<Type> to Vec<Type>
  removeExtensions("Weak", false),
  // Remove all the trait prefixes
  removeTraits(),
  // remove PairOf<T> -> (T, T)
  removePairOf(),
  // remove boxing, `Box<Proposal>` -> `Proposal`
  removeWrap("Box<"),
  // remove generics, `MisbehaviorReport<Hash, BlockNumber>` -> `MisbehaviorReport`
  removeGenerics(),
  // alias String -> Text (compat with jsonrpc methods)
  alias("String", "Text"),
  // alias Vec<u8> -> Bytes
  alias("Vec<u8>", "Bytes"),
  alias("&\\[u8\\]", "Bytes"),
  alias("&'static\\[u8\\]", "Bytes"),
  // alias RawAddress -> Address
  alias("RawAddress", "Address"),
  // lookups, mapped to Address/AccountId as appropriate in runtime
  alias("Lookup::Source", "LookupSource"),
  alias("Lookup::Target", "LookupTarget"),
  // HACK duplication between contracts & primitives, however contracts prefixed with exec
  alias("exec::StorageKey", "ContractStorageKey"),
  // flattens tuples with one value, `(AccountId)` -> `AccountId`
  flattenSingleTuple(),
  // converts ::Type to Type, <T as Trait<I>>::Proposal -> Proposal
  removeColons(),
  // remove all trailing spaces - this should always be the last
  trim()
];
function trim() {
  return (value) => value.trim();
}
function findClosing(value, start) {
  let depth = 0;
  for (let i = start, count = value.length; i < count; i++) {
    if (value[i] === ">") {
      if (!depth) {
        return i;
      }
      depth--;
    } else if (value[i] === "<") {
      depth++;
    }
  }
  throw new Error(`Unable to find closing matching <> on '${value}' (start ${start})`);
}
function alias(src, dest, withChecks = true) {
  const from2 = new RegExp(`(^${src}|${BOX_PRECEDING.map((box) => `\\${box}${src}`).join("|")})`, "g");
  const to = (src2) => {
    from2.lastIndex = 0;
    return withChecks && BOX_PRECEDING.includes(src2[0]) ? `${src2[0]}${dest}` : dest;
  };
  return (value) => value.replace(from2, to);
}
function cleanupCompact() {
  return (value) => {
    if (value.includes(" as HasCompact")) {
      for (let i = 0, count = value.length; i < count; i++) {
        if (value[i] === "<") {
          const end = findClosing(value, i + 1) - 14;
          if (value.substring(end, end + 14) === " as HasCompact") {
            value = `Compact<${value.substring(i + 1, end)}>`;
          }
        }
      }
    }
    return value;
  };
}
function flattenSingleTuple() {
  const from1 = /,\)/g;
  const from2 = /\(([^,]+)\)/;
  return (value) => {
    from1.lastIndex = 0;
    return value.replace(from1, ")").replace(from2, "$1");
  };
}
function replaceTagWith(value, matcher, replacer) {
  let index = -1;
  while (true) {
    index = value.indexOf(matcher, index + 1);
    if (index === -1) {
      return value;
    }
    const start = index + matcher.length;
    const end = findClosing(value, start);
    value = `${value.substring(0, index)}${replacer(value.substring(start, end))}${value.substring(end + 1)}`;
  }
}
function removeExtensions(type, isSized) {
  return (value) => {
    for (let i = 0, count = BOUNDED.length; i < count; i++) {
      const tag = BOUNDED[i];
      value = replaceTagWith(value, `${type}${tag}<`, (v) => {
        const parts = v.split(",").map((s) => s.trim()).filter((s) => s);
        if (isSized) {
          parts.pop();
        }
        return `${tag}<${parts.join(",")}>`;
      });
    }
    return value;
  };
}
function removeColons() {
  return (value) => {
    let index = 0;
    while (index !== -1) {
      index = value.indexOf("::");
      if (index === 0) {
        value = value.substring(2);
      } else if (index !== -1) {
        let start = index;
        while (start !== -1 && !BOX_PRECEDING.includes(value[start])) {
          start--;
        }
        value = `${value.substring(0, start + 1)}${value.substring(index + 2)}`;
      }
    }
    return value;
  };
}
function removeGenerics() {
  return (value) => {
    for (let i = 0, count = value.length; i < count; i++) {
      if (value[i] === "<") {
        const box = ALLOWED_BOXES.find((box2) => {
          const start = i - box2.length;
          return start >= 0 && value.substring(start, i) === box2 && // make sure it is stand-alone, i.e. don't catch ElectionResult<...> as Result<...>
          (start === 0 || BOX_PRECEDING.includes(value[start - 1]));
        });
        if (!box) {
          const end = findClosing(value, i + 1);
          value = `${value.substring(0, i)}${value.substring(end + 1)}`;
        }
      }
    }
    return value;
  };
}
function removePairOf() {
  const replacer = (v) => `(${v},${v})`;
  return (value) => replaceTagWith(value, "PairOf<", replacer);
}
function removeTraits() {
  const from1 = /\s/g;
  const from2 = /(T|Self)::/g;
  const from3 = /<(T|Self)asTrait>::/g;
  const from4 = /<Tas[a-z]+::Trait>::/g;
  const from5 = /<LookupasStaticLookup>/g;
  const from6 = /::Type/g;
  return (value) => {
    from1.lastIndex = 0;
    from2.lastIndex = 0;
    from3.lastIndex = 0;
    from4.lastIndex = 0;
    from5.lastIndex = 0;
    from6.lastIndex = 0;
    return value.replace(from1, "").replace(from2, "").replace(from3, "").replace(from4, "").replace(from5, "Lookup").replace(from6, "");
  };
}
function removeWrap(check) {
  const replacer = (v) => v;
  return (value) => replaceTagWith(value, check, replacer);
}
var sanitizeMap = /* @__PURE__ */ new Map();
function sanitize(value) {
  const startValue = value.toString();
  const memoized = sanitizeMap.get(startValue);
  if (memoized) {
    return memoized;
  }
  let result = startValue;
  for (let i = 0, count = mappings.length; i < count; i++) {
    result = mappings[i](result);
  }
  sanitizeMap.set(startValue, result);
  return result;
}

// node_modules/@polkadot/types-codec/utils/sortValues.js
function isArrayLike(arg) {
  return arg instanceof Uint8Array || Array.isArray(arg);
}
function isEnum(arg) {
  return isCodec(arg) && isNumber(arg.index) && isCodec(arg.value);
}
function isOption(arg) {
  return isCodec(arg) && isBoolean(arg.isSome) && isCodec(arg.value);
}
function isNumberLike(arg) {
  return isNumber(arg) || isBn(arg) || isBigInt(arg);
}
function sortArray(a, b) {
  let sortRes = 0;
  const minLen = Math.min(a.length, b.length);
  for (let i = 0; i < minLen; ++i) {
    sortRes = sortAsc(a[i], b[i]);
    if (sortRes !== 0) {
      return sortRes;
    }
  }
  return a.length - b.length;
}
function checkForDuplicates(container, seen, arg) {
  if (isCodec(arg)) {
    const hex = arg.toHex();
    if (seen.has(hex)) {
      throw new Error(`Duplicate value in ${container}: ${stringify(arg)}`);
    }
    seen.add(hex);
  }
  return true;
}
function sortAsc(a, b) {
  if (isNumberLike(a) && isNumberLike(b)) {
    return bnToBn(a).cmp(bnToBn(b));
  } else if (a instanceof Map && b instanceof Map) {
    return sortAsc(Array.from(a.values()), Array.from(b.values()));
  } else if (isEnum(a) && isEnum(b)) {
    return sortAsc(a.index, b.index) || sortAsc(a.value, b.value);
  } else if (isOption(a) && isOption(b)) {
    return sortAsc(a.isNone ? 0 : 1, b.isNone ? 0 : 1) || sortAsc(a.value, b.value);
  } else if (isArrayLike(a) && isArrayLike(b)) {
    return sortArray(a, b);
  } else if (isCodec(a) && isCodec(b)) {
    return sortAsc(a.toU8a(true), b.toU8a(true));
  }
  throw new Error(`Attempting to sort unrecognized values: ${stringify(a)} (typeof ${typeof a}) <-> ${stringify(b)} (typeof ${typeof b})`);
}
function sortSet(set) {
  const seen = /* @__PURE__ */ new Set();
  return new Set(Array.from(set).filter((value) => checkForDuplicates("BTreeSet", seen, value)).sort(sortAsc));
}
function sortMap(map2) {
  const seen = /* @__PURE__ */ new Set();
  return new Map(Array.from(map2.entries()).filter(([key]) => checkForDuplicates("BTreeMap", seen, key)).sort(([keyA], [keyB]) => sortAsc(keyA, keyB)));
}

// node_modules/@polkadot/types-codec/utils/toConstructors.js
function typeToConstructor(registry, type) {
  return typeof type === "function" ? type : registry.createClassUnsafe(type);
}
function typesToConstructors(registry, types2) {
  const count = types2.length;
  const result = new Array(count);
  for (let i = 0; i < count; i++) {
    result[i] = typeToConstructor(registry, types2[i]);
  }
  return result;
}
function mapToTypeMap(registry, input) {
  const entries = Object.entries(input);
  const count = entries.length;
  const output = [new Array(count), new Array(count)];
  for (let i = 0; i < count; i++) {
    output[1][i] = entries[i][0];
    output[0][i] = typeToConstructor(registry, entries[i][1]);
  }
  return output;
}

// node_modules/@polkadot/types-codec/utils/typesToMap.js
function typesToMap(registry, [Types, keys2]) {
  const result = {};
  for (let i = 0, count = keys2.length; i < count; i++) {
    result[keys2[i]] = registry.getClassName(Types[i]) || new Types[i](registry).toRawType();
  }
  return result;
}

// node_modules/@polkadot/types-codec/base/Compact.js
function decodeCompact(registry, Type2, value) {
  if (isU8a(value)) {
    const [decodedLength, bn] = (value[0] & 3) < 3 ? compactFromU8aLim(value) : compactFromU8a(value);
    return [new Type2(registry, bn), decodedLength];
  } else if (value instanceof Compact) {
    const raw = value.unwrap();
    return raw instanceof Type2 ? [raw, 0] : [new Type2(registry, raw), 0];
  } else if (value instanceof Type2) {
    return [value, 0];
  }
  return [new Type2(registry, value), 0];
}
var Compact = class _Compact {
  registry;
  createdAtHash;
  initialU8aLength;
  isStorageFallback;
  __internal__Type;
  __internal__raw;
  constructor(registry, Type2, value = 0, { definition, setDefinition = identity } = {}) {
    this.registry = registry;
    this.__internal__Type = definition || setDefinition(typeToConstructor(registry, Type2));
    const [raw, decodedLength] = decodeCompact(registry, this.__internal__Type, value);
    this.initialU8aLength = decodedLength;
    this.__internal__raw = raw;
  }
  static with(Type2) {
    let definition;
    const setDefinition = (d) => definition = d;
    return class extends _Compact {
      constructor(registry, value) {
        super(registry, Type2, value, { definition, setDefinition });
      }
    };
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    return this.toU8a().length;
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is an empty value
   */
  get isEmpty() {
    return this.__internal__raw.isEmpty;
  }
  /**
   * @description Returns the number of bits in the value
   */
  bitLength() {
    return this.__internal__raw.bitLength();
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    return this.__internal__raw.eq(other instanceof _Compact ? other.__internal__raw : other);
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    return {
      outer: [this.toU8a()]
    };
  }
  /**
   * @description Returns a BigInt representation of the number
   */
  toBigInt() {
    return this.__internal__raw.toBigInt();
  }
  /**
   * @description Returns the BN representation of the number
   */
  toBn() {
    return this.__internal__raw.toBn();
  }
  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */
  toHex(isLe) {
    return this.__internal__raw.toHex(isLe);
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(isExtended) {
    return this.__internal__raw.toHuman(isExtended);
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return this.__internal__raw.toJSON();
  }
  /**
   * @description Returns the number representation for the value
   */
  toNumber() {
    return this.__internal__raw.toNumber();
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return this.__internal__raw.toPrimitive();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return `Compact<${this.registry.getClassName(this.__internal__Type) || this.__internal__raw.toRawType()}>`;
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return this.__internal__raw.toString();
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */
  toU8a(_isBare) {
    return compactToU8a(this.__internal__raw.toBn());
  }
  /**
   * @description Returns the embedded [[UInt]] or [[Moment]] value
   */
  unwrap() {
    return this.__internal__raw;
  }
};

// node_modules/@polkadot/types-codec/base/DoNotConstruct.js
var DoNotConstruct = class _DoNotConstruct {
  registry;
  createdAtHash;
  isStorageFallback;
  __internal__neverError;
  constructor(registry, typeName = "DoNotConstruct") {
    this.registry = registry;
    this.__internal__neverError = new Error(`DoNotConstruct: Cannot construct unknown type ${typeName}`);
    throw this.__internal__neverError;
  }
  static with(typeName) {
    return class extends _DoNotConstruct {
      constructor(registry) {
        super(registry, typeName);
      }
    };
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    throw this.__internal__neverError;
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    throw this.__internal__neverError;
  }
  /**
   * @description Checks if the value is an empty value (always true)
   */
  get isEmpty() {
    throw this.__internal__neverError;
  }
  /**
   * @description Unimplemented
   */
  eq() {
    throw this.__internal__neverError;
  }
  /**
   * @description Unimplemented
   */
  inspect() {
    throw this.__internal__neverError;
  }
  /**
   * @description Unimplemented
   */
  toHex() {
    throw this.__internal__neverError;
  }
  /**
   * @description Unimplemented
   */
  toHuman() {
    throw this.__internal__neverError;
  }
  /**
   * @description Unimplemented
   */
  toJSON() {
    throw this.__internal__neverError;
  }
  /**
   * @description Unimplemented
   */
  toPrimitive() {
    throw this.__internal__neverError;
  }
  /**
   * @description Unimplemented
   */
  toRawType() {
    throw this.__internal__neverError;
  }
  /**
   * @description Unimplemented
   */
  toString() {
    throw this.__internal__neverError;
  }
  /**
   * @description Unimplemented
   */
  toU8a() {
    throw this.__internal__neverError;
  }
};

// node_modules/@polkadot/types-codec/base/Null.js
var Null = class _Null {
  encodedLength = 0;
  isEmpty = true;
  registry;
  createdAtHash;
  initialU8aLength = 0;
  isStorageFallback;
  constructor(registry) {
    this.registry = registry;
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    throw new Error(".hash is not implemented on Null");
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    return other instanceof _Null || isNull(other);
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    return {};
  }
  /**
   * @description Returns a hex string representation of the value
   */
  toHex() {
    return "0x";
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman() {
    return this.toJSON();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return null;
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return null;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "Null";
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return "";
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */
  toU8a(_isBare) {
    return new Uint8Array();
  }
};

// node_modules/@polkadot/types-codec/base/Enum.js
function isRustEnum(def) {
  const defValues = Object.values(def);
  if (defValues.some((v) => isNumber(v))) {
    if (!defValues.every((v) => isNumber(v) && v >= 0 && v <= 255)) {
      throw new Error("Invalid number-indexed enum definition");
    }
    return false;
  }
  return true;
}
function extractDef(registry, _def) {
  const def = {};
  let isBasic;
  let isIndexed;
  if (Array.isArray(_def)) {
    for (let i = 0, count = _def.length; i < count; i++) {
      def[_def[i]] = { Type: Null, index: i };
    }
    isBasic = true;
    isIndexed = false;
  } else if (isRustEnum(_def)) {
    const [Types, keys2] = mapToTypeMap(registry, _def);
    for (let i = 0, count = keys2.length; i < count; i++) {
      def[keys2[i]] = { Type: Types[i], index: i };
    }
    isBasic = !Object.values(def).some(({ Type: Type2 }) => Type2 !== Null);
    isIndexed = false;
  } else {
    const entries = Object.entries(_def);
    for (let i = 0, count = entries.length; i < count; i++) {
      const [key, index] = entries[i];
      def[key] = { Type: Null, index };
    }
    isBasic = true;
    isIndexed = true;
  }
  return {
    def,
    isBasic,
    isIndexed
  };
}
function getEntryType(def, checkIdx) {
  const values = Object.values(def);
  for (let i = 0, count = values.length; i < count; i++) {
    const { Type: Type2, index } = values[i];
    if (index === checkIdx) {
      return Type2;
    }
  }
  throw new Error(`Unable to create Enum via index ${checkIdx}, in ${Object.keys(def).join(", ")}`);
}
function createFromU8a(registry, def, index, value) {
  const Type2 = getEntryType(def, index);
  return {
    index,
    value: new Type2(registry, value)
  };
}
function createFromValue(registry, def, index = 0, value) {
  const Type2 = getEntryType(def, index);
  return {
    index,
    value: value instanceof Type2 ? value : new Type2(registry, value)
  };
}
function decodeFromJSON(registry, def, key, value) {
  const keys2 = Object.keys(def).map((k) => k.toLowerCase());
  const keyLower = key.toLowerCase();
  const index = keys2.indexOf(keyLower);
  if (index === -1) {
    throw new Error(`Cannot map Enum JSON, unable to find '${key}' in ${keys2.join(", ")}`);
  }
  try {
    return createFromValue(registry, def, Object.values(def)[index].index, value);
  } catch (error) {
    throw new Error(`Enum(${key}):: ${error.message}`);
  }
}
function decodeEnum(registry, def, value, index) {
  if (isNumber(index)) {
    return createFromValue(registry, def, index, value);
  } else if (isU8a(value) || isHex(value)) {
    const u8a = u8aToU8a(value);
    if (u8a.length) {
      return createFromU8a(registry, def, u8a[0], u8a.subarray(1));
    }
  } else if (value instanceof Enum) {
    return createFromValue(registry, def, value.index, value.value);
  } else if (isNumber(value)) {
    return createFromValue(registry, def, value);
  } else if (isString(value)) {
    return decodeFromJSON(registry, def, value.toString());
  } else if (isObject(value)) {
    const key = Object.keys(value)[0];
    return decodeFromJSON(registry, def, key, value[key]);
  }
  return createFromValue(registry, def, Object.values(def)[0].index);
}
var Enum = class _Enum {
  registry;
  createdAtHash;
  initialU8aLength;
  isStorageFallback;
  __internal__def;
  __internal__entryIndex;
  __internal__indexes;
  __internal__isBasic;
  __internal__isIndexed;
  __internal__raw;
  constructor(registry, Types, value, index, { definition, setDefinition = identity } = {}) {
    const { def, isBasic, isIndexed } = definition || setDefinition(extractDef(registry, Types));
    const decoded = isU8a(value) && value.length && !isNumber(index) ? createFromU8a(registry, def, value[0], value.subarray(1)) : decodeEnum(registry, def, value, index);
    this.registry = registry;
    this.__internal__def = def;
    this.__internal__isBasic = isBasic;
    this.__internal__isIndexed = isIndexed;
    this.__internal__indexes = Object.values(def).map(({ index: index2 }) => index2);
    this.__internal__entryIndex = this.__internal__indexes.indexOf(decoded.index);
    this.__internal__raw = decoded.value;
    if (this.__internal__raw.initialU8aLength) {
      this.initialU8aLength = 1 + this.__internal__raw.initialU8aLength;
    }
  }
  static with(Types) {
    var _a;
    let definition;
    const setDefinition = (d) => definition = d;
    return _a = class extends _Enum {
      constructor(registry, value, index) {
        super(registry, Types, value, index, { definition, setDefinition });
      }
    }, (() => {
      const keys2 = Array.isArray(Types) ? Types : Object.keys(Types);
      const count = keys2.length;
      const asKeys = new Array(count);
      const isKeys = new Array(count);
      for (let i = 0; i < count; i++) {
        const name = stringPascalCase(keys2[i]);
        asKeys[i] = `as${name}`;
        isKeys[i] = `is${name}`;
      }
      objectProperties(_a.prototype, isKeys, (_, i, self) => self.type === keys2[i]);
      objectProperties(_a.prototype, asKeys, (k, i, self) => {
        if (self.type !== keys2[i]) {
          throw new Error(`Cannot convert '${self.type}' via ${k}`);
        }
        return self.value;
      });
    })(), _a;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    return 1 + this.__internal__raw.encodedLength;
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description The index of the enum value
   */
  get index() {
    return this.__internal__indexes[this.__internal__entryIndex];
  }
  /**
   * @description The value of the enum
   */
  get inner() {
    return this.__internal__raw;
  }
  /**
   * @description true if this is a basic enum (no values)
   */
  get isBasic() {
    return this.__internal__isBasic;
  }
  /**
   * @description Checks if the value is an empty value
   */
  get isEmpty() {
    return this.__internal__raw.isEmpty;
  }
  /**
   * @description Checks if the Enum points to a [[Null]] type
   */
  get isNone() {
    return this.__internal__raw instanceof Null;
  }
  /**
   * @description The available keys for this enum
   */
  get defIndexes() {
    return this.__internal__indexes;
  }
  /**
   * @description The available keys for this enum
   */
  get defKeys() {
    return Object.keys(this.__internal__def);
  }
  /**
   * @description The name of the type this enum value represents
   */
  get type() {
    return this.defKeys[this.__internal__entryIndex];
  }
  /**
   * @description The value of the enum
   */
  get value() {
    return this.__internal__raw;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    if (isU8a(other)) {
      return !this.toU8a().some((entry, index) => entry !== other[index]);
    } else if (isNumber(other)) {
      return this.toNumber() === other;
    } else if (this.__internal__isBasic && isString(other)) {
      return this.type === other;
    } else if (isHex(other)) {
      return this.toHex() === other;
    } else if (other instanceof _Enum) {
      return this.index === other.index && this.value.eq(other.value);
    } else if (isObject(other)) {
      return this.value.eq(other[this.type]);
    }
    return this.value.eq(other);
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    if (this.__internal__isBasic) {
      return { outer: [new Uint8Array([this.index])] };
    }
    const { inner, outer = [] } = this.__internal__raw.inspect();
    return {
      inner,
      outer: [new Uint8Array([this.index]), ...outer]
    };
  }
  /**
   * @description Returns a hex string representation of the value
   */
  toHex() {
    return u8aToHex(this.toU8a());
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(isExtended) {
    return this.__internal__isBasic || this.isNone ? this.type : { [this.type]: this.__internal__raw.toHuman(isExtended) };
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return this.__internal__isBasic ? this.type : { [stringCamelCase(this.type)]: this.__internal__raw.toJSON() };
  }
  /**
   * @description Returns the number representation for the value
   */
  toNumber() {
    return this.index;
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return this.__internal__isBasic ? this.type : { [stringCamelCase(this.type)]: this.__internal__raw.toPrimitive() };
  }
  /**
   * @description Returns a raw struct representation of the enum types
   */
  _toRawStruct() {
    if (this.__internal__isBasic) {
      return this.__internal__isIndexed ? this.defKeys.reduce((out, key, index) => {
        out[key] = this.__internal__indexes[index];
        return out;
      }, {}) : this.defKeys;
    }
    const entries = Object.entries(this.__internal__def);
    return typesToMap(this.registry, entries.reduce((out, [key, { Type: Type2 }], i) => {
      out[0][i] = Type2;
      out[1][i] = key;
      return out;
    }, [new Array(entries.length), new Array(entries.length)]));
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return stringify({ _enum: this._toRawStruct() });
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return this.isNone ? this.type : stringify(this.toJSON());
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    return isBare ? this.__internal__raw.toU8a(isBare) : u8aConcatStrict([
      new Uint8Array([this.index]),
      this.__internal__raw.toU8a(isBare)
    ]);
  }
};

// node_modules/@polkadot/types-codec/base/Int.js
var Int = class _Int extends AbstractInt {
  constructor(registry, value = 0, bitLength) {
    super(registry, value, bitLength, true);
  }
  static with(bitLength, typeName) {
    return class extends _Int {
      constructor(registry, value) {
        super(registry, value, bitLength);
      }
      toRawType() {
        return typeName || super.toRawType();
      }
    };
  }
};

// node_modules/@polkadot/types-codec/base/Option.js
var None = class extends Null {
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "None";
  }
};
function decodeOption(registry, Type2, value) {
  if (value instanceof Type2) {
    return value;
  } else if (value instanceof Option) {
    if (value.value instanceof Type2) {
      return value.value;
    } else if (value.isNone) {
      return new None(registry);
    }
    return new Type2(registry, value.value);
  } else if (isNull(value) || isUndefined(value) || value === "0x" || value instanceof None) {
    return new None(registry);
  } else if (isU8a(value)) {
    return !value.length || value[0] === 0 ? new None(registry) : new Type2(registry, value.subarray(1));
  }
  return new Type2(registry, value);
}
var Option = class _Option {
  registry;
  createdAtHash;
  initialU8aLength;
  isStorageFallback;
  __internal__Type;
  __internal__raw;
  constructor(registry, typeName, value, { definition, setDefinition = identity } = {}) {
    const Type2 = definition || setDefinition(typeToConstructor(registry, typeName));
    const decoded = isU8a(value) && value.length && !isCodec(value) ? value[0] === 0 ? new None(registry) : new Type2(registry, value.subarray(1)) : decodeOption(registry, Type2, value);
    this.registry = registry;
    this.__internal__Type = Type2;
    this.__internal__raw = decoded;
    if (decoded?.initialU8aLength) {
      this.initialU8aLength = 1 + decoded.initialU8aLength;
    }
  }
  static with(Type2) {
    let definition;
    const setDefinition = (d) => {
      definition = d;
      return d;
    };
    return class extends _Option {
      constructor(registry, value) {
        super(registry, Type2, value, { definition, setDefinition });
      }
    };
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    return 1 + this.__internal__raw.encodedLength;
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the Option has no value
   */
  get isEmpty() {
    return this.isNone;
  }
  /**
   * @description Checks if the Option has no value
   */
  get isNone() {
    return this.__internal__raw instanceof None;
  }
  /**
   * @description Checks if the Option has a value
   */
  get isSome() {
    return !this.isNone;
  }
  /**
   * @description The actual value for the Option
   */
  get value() {
    return this.__internal__raw;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    if (other instanceof _Option) {
      return this.isSome === other.isSome && this.value.eq(other.value);
    }
    return this.value.eq(other);
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    if (this.isNone) {
      return { outer: [new Uint8Array([0])] };
    }
    const { inner, outer = [] } = this.__internal__raw.inspect();
    return {
      inner,
      outer: [new Uint8Array([1]), ...outer]
    };
  }
  /**
   * @description Returns a hex string representation of the value
   */
  toHex() {
    return this.isNone ? "0x" : u8aToHex(this.toU8a().subarray(1));
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(isExtended) {
    return this.__internal__raw.toHuman(isExtended);
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return this.isNone ? null : this.__internal__raw.toJSON();
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return this.isNone ? null : this.__internal__raw.toPrimitive();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType(isBare) {
    const wrapped = this.registry.getClassName(this.__internal__Type) || new this.__internal__Type(this.registry).toRawType();
    return isBare ? wrapped : `Option<${wrapped}>`;
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return this.__internal__raw.toString();
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    if (isBare) {
      return this.__internal__raw.toU8a(true);
    }
    const u8a = new Uint8Array(this.encodedLength);
    if (this.isSome) {
      u8a.set([1]);
      u8a.set(this.__internal__raw.toU8a(), 1);
    }
    return u8a;
  }
  /**
   * @description Returns the value that the Option represents (if available), throws if null
   */
  unwrap() {
    if (this.isNone) {
      throw new Error("Option: unwrapping a None value");
    }
    return this.__internal__raw;
  }
  /**
   * @description Returns the value that the Option represents (if available) or defaultValue if none
   * @param defaultValue The value to return if the option isNone
   */
  unwrapOr(defaultValue) {
    return this.isSome ? this.unwrap() : defaultValue;
  }
  /**
   * @description Returns the value that the Option represents (if available) or defaultValue if none
   * @param defaultValue The value to return if the option isNone
   */
  unwrapOrDefault() {
    return this.isSome ? this.unwrap() : new this.__internal__Type(this.registry);
  }
};

// node_modules/@polkadot/types-codec/base/Result.js
var Result = class _Result extends Enum {
  constructor(registry, Ok, Err, value) {
    super(registry, { Ok, Err }, value);
  }
  static with(Types) {
    return class extends _Result {
      constructor(registry, value) {
        super(registry, Types.Ok, Types.Err, value);
      }
    };
  }
  /**
   * @description Returns the wrapper Err value (if isErr)
   */
  get asErr() {
    if (!this.isErr) {
      throw new Error("Cannot extract Err value from Ok result, check isErr first");
    }
    return this.value;
  }
  /**
   * @description Returns the wrapper Ok value (if isOk)
   */
  get asOk() {
    if (!this.isOk) {
      throw new Error("Cannot extract Ok value from Err result, check isOk first");
    }
    return this.value;
  }
  /**
   * @description Checks if the Result has no value
   */
  get isEmpty() {
    return this.isOk && this.value.isEmpty;
  }
  /**
   * @description Checks if the Result wraps an Err value
   */
  get isErr() {
    return !this.isOk;
  }
  /**
   * @description Checks if the Result wraps an Ok value
   */
  get isOk() {
    return this.index === 0;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    const Types = this._toRawStruct();
    return `Result<${Types.Ok},${Types.Err}>`;
  }
};

// node_modules/@polkadot/types-codec/base/Tuple.js
function decodeTuple(registry, result, value, Classes) {
  if (Array.isArray(value)) {
    const Types = Classes[0];
    for (let i = 0, count = Types.length; i < count; i++) {
      try {
        const entry = value?.[i];
        result[i] = entry instanceof Types[i] ? entry : new Types[i](registry, entry);
      } catch (error) {
        throw new Error(`Tuple: failed on ${i}:: ${error.message}`);
      }
    }
    return [result, 0];
  } else if (isHex(value)) {
    return decodeU8a(registry, result, u8aToU8a(value), Classes);
  } else if (!value || !result.length) {
    const Types = Classes[0];
    for (let i = 0, count = Types.length; i < count; i++) {
      result[i] = new Types[i](registry);
    }
    return [result, 0];
  }
  throw new Error(`Expected array input to Tuple decoding, found ${typeof value}: ${stringify(value)}`);
}
var Tuple = class _Tuple extends AbstractArray {
  __internal__Types;
  constructor(registry, Types, value, { definition, setDefinition = identity } = {}) {
    const Classes = definition || setDefinition(Array.isArray(Types) ? [typesToConstructors(registry, Types), []] : isFunction(Types) || isString(Types) ? [[typeToConstructor(registry, Types)], []] : mapToTypeMap(registry, Types));
    super(registry, Classes[0].length);
    this.initialU8aLength = (isU8a(value) ? decodeU8a(registry, this, value, Classes) : decodeTuple(registry, this, value, Classes))[1];
    this.__internal__Types = Classes;
  }
  static with(Types) {
    let definition;
    const setDefinition = (d) => definition = d;
    return class extends _Tuple {
      constructor(registry, value) {
        super(registry, Types, value, { definition, setDefinition });
      }
    };
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    let total = 0;
    for (let i = 0, count = this.length; i < count; i++) {
      total += this[i].encodedLength;
    }
    return total;
  }
  /**
   * @description The types definition of the tuple
   */
  get Types() {
    return this.__internal__Types[1].length ? this.__internal__Types[1] : this.__internal__Types[0].map((T) => new T(this.registry).toRawType());
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    return {
      inner: this.inspectInner()
    };
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    const types2 = this.__internal__Types[0].map((T) => this.registry.getClassName(T) || new T(this.registry).toRawType());
    return `(${types2.join(",")})`;
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return stringify(this.toJSON());
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    return u8aConcatStrict(this.toU8aInner(isBare));
  }
};

// node_modules/@polkadot/types-codec/base/UInt.js
var UInt = class _UInt extends AbstractInt {
  static with(bitLength, typeName) {
    return class extends _UInt {
      constructor(registry, value) {
        super(registry, value, bitLength);
      }
      toRawType() {
        return typeName || super.toRawType();
      }
    };
  }
};

// node_modules/@polkadot/types-codec/base/Vec.js
var MAX_LENGTH = 64 * 1024;
var l5 = logger("Vec");
function decodeVecLength(value) {
  if (Array.isArray(value)) {
    return [value, value.length, 0];
  } else if (isU8a(value) || isHex(value)) {
    const u8a = u8aToU8a(value);
    const [startAt, length] = compactFromU8aLim(u8a);
    if (length > MAX_LENGTH) {
      throw new Error(`Vec length ${length.toString()} exceeds ${MAX_LENGTH}`);
    }
    return [u8a, length, startAt];
  } else if (!value) {
    return [null, 0, 0];
  }
  throw new Error(`Expected array/hex input to Vec<*> decoding, found ${typeof value}: ${stringify(value)}`);
}
function decodeVec(registry, result, value, startAt, Type2) {
  if (Array.isArray(value)) {
    const count = result.length;
    for (let i = 0; i < count; i++) {
      const entry = value[i];
      try {
        result[i] = entry instanceof Type2 ? entry : new Type2(registry, entry);
      } catch (error) {
        l5.error(`Unable to decode on index ${i}`, error.message);
        throw error;
      }
    }
    return [0, 0];
  } else if (!value) {
    return [0, 0];
  }
  return decodeU8aVec(registry, result, u8aToU8a(value), startAt, Type2);
}
var Vec = class _Vec extends AbstractArray {
  __internal__Type;
  constructor(registry, Type2, value = [], { definition, setDefinition = identity } = {}) {
    const [decodeFrom, length, startAt] = decodeVecLength(value);
    super(registry, length);
    this.__internal__Type = definition || setDefinition(typeToConstructor(registry, Type2));
    this.initialU8aLength = (isU8a(decodeFrom) ? decodeU8aVec(registry, this, decodeFrom, startAt, this.__internal__Type) : decodeVec(registry, this, decodeFrom, startAt, this.__internal__Type))[0];
  }
  static with(Type2) {
    let definition;
    const setDefinition = (d) => definition = d;
    return class extends _Vec {
      constructor(registry, value) {
        super(registry, Type2, value, { definition, setDefinition });
      }
    };
  }
  /**
   * @description The type for the items
   */
  get Type() {
    return this.__internal__Type.name;
  }
  /**
   * @description Finds the index of the value in the array
   */
  indexOf(other) {
    const check = other instanceof this.__internal__Type ? other : new this.__internal__Type(this.registry, other);
    for (let i = 0, count = this.length; i < count; i++) {
      if (check.eq(this[i])) {
        return i;
      }
    }
    return -1;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return `Vec<${this.registry.getClassName(this.__internal__Type) || new this.__internal__Type(this.registry).toRawType()}>`;
  }
};

// node_modules/@polkadot/types-codec/base/VecFixed.js
var VecFixed = class _VecFixed extends AbstractArray {
  __internal__Type;
  constructor(registry, Type2, length, value = [], { definition, setDefinition = identity } = {}) {
    super(registry, length);
    this.__internal__Type = definition || setDefinition(typeToConstructor(registry, Type2));
    this.initialU8aLength = (isU8a(value) ? decodeU8aVec(registry, this, value, 0, this.__internal__Type) : decodeVec(registry, this, value, 0, this.__internal__Type))[1];
  }
  static with(Type2, length) {
    let definition;
    const setDefinition = (d) => definition = d;
    return class extends _VecFixed {
      constructor(registry, value) {
        super(registry, Type2, length, value, { definition, setDefinition });
      }
    };
  }
  /**
   * @description The type for the items
   */
  get Type() {
    return new this.__internal__Type(this.registry).toRawType();
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    let total = 0;
    for (let i = 0, count = this.length; i < count; i++) {
      total += this[i].encodedLength;
    }
    return total;
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    return {
      inner: this.inspectInner()
    };
  }
  toU8a() {
    const encoded = this.toU8aInner();
    return encoded.length ? u8aConcatStrict(encoded) : new Uint8Array([]);
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return `[${this.Type};${this.length}]`;
  }
};

// node_modules/@polkadot/types-codec/native/Raw.js
var Raw = class extends Uint8Array {
  registry;
  createdAtHash;
  initialU8aLength;
  isStorageFallback;
  /**
   * @description This ensures that operators such as clice, filter, map, etc. return
   * new Array instances (without this we need to apply overrides)
   */
  static get [Symbol.species]() {
    return Uint8Array;
  }
  constructor(registry, value, initialU8aLength) {
    super(u8aToU8a(value));
    this.registry = registry;
    this.initialU8aLength = initialU8aLength;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    return this.length;
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Returns true if the wrapped value contains only ASCII printable characters
   */
  get isAscii() {
    return isAscii(this);
  }
  /**
   * @description Returns true if the type wraps an empty/default all-0 value
   */
  get isEmpty() {
    return !this.length || isUndefined(this.find((b) => !!b));
  }
  /**
   * @description Returns true if the wrapped value contains only utf8 characters
   */
  get isUtf8() {
    return isUtf8(this);
  }
  /**
   * @description Returns the number of bits in the value
   */
  bitLength() {
    return this.length * 8;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    if (other instanceof Uint8Array) {
      return this.length === other.length && !this.some((b, index) => b !== other[index]);
    }
    return this.eq(u8aToU8a(other));
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    return {
      outer: [this.toU8a()]
    };
  }
  /**
   * @description Returns a hex string representation of the value
   */
  toHex() {
    return u8aToHex(this);
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman() {
    return this.toPrimitive();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return this.toHex();
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    if (this.isAscii) {
      const text = this.toUtf8();
      if (isAscii(text)) {
        return text;
      }
    }
    return this.toJSON();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "Raw";
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return this.toHex();
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */
  toU8a(_isBare) {
    return Uint8Array.from(this);
  }
  /**
   * @description Returns the wrapped data as a UTF-8 string
   */
  toUtf8() {
    if (!this.isUtf8) {
      throw new Error("The character sequence is not a valid Utf8 string");
    }
    return u8aToString(this);
  }
};

// node_modules/@polkadot/types-codec/extended/BitVec.js
function decodeBitVecU8a(value) {
  if (!value?.length) {
    return [0, new Uint8Array()];
  }
  const [offset, length] = compactFromU8aLim(value);
  const total = offset + Math.ceil(length / 8);
  if (total > value.length) {
    throw new Error(`BitVec: required length less than remainder, expected at least ${total}, found ${value.length}`);
  }
  return [length, value.subarray(offset, total)];
}
function decodeBitVec(value) {
  if (Array.isArray(value) || isString(value)) {
    const u8a = u8aToU8a(value);
    return [u8a.length / 8, u8a];
  }
  return decodeBitVecU8a(value);
}
var BitVec = class extends Raw {
  __internal__decodedLength;
  __internal__isMsb;
  // In lieu of having the Msb/Lsb identifiers passed through, we default to assuming
  // we are dealing with Lsb, which is the default (as of writing) BitVec format used
  // in the Polkadot code (this only affects the toHuman displays)
  constructor(registry, value, isMsb = false) {
    const [decodedLength, u8a] = decodeBitVec(value);
    super(registry, u8a);
    this.__internal__decodedLength = decodedLength;
    this.__internal__isMsb = isMsb;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    return this.length + compactToU8a(this.__internal__decodedLength).length;
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    return {
      outer: [compactToU8a(this.__internal__decodedLength), super.toU8a()]
    };
  }
  /**
   * @description Creates a boolean array of the bit values
   */
  toBoolArray() {
    const map2 = [...this.toU8a(true)].map((v) => [
      !!(v & 128),
      !!(v & 64),
      !!(v & 32),
      !!(v & 16),
      !!(v & 8),
      !!(v & 4),
      !!(v & 2),
      !!(v & 1)
    ]);
    const count = map2.length;
    const result = new Array(8 * count);
    for (let i = 0; i < count; i++) {
      const off = i * 8;
      const v = map2[i];
      for (let j = 0; j < 8; j++) {
        result[off + j] = this.__internal__isMsb ? v[j] : v[7 - j];
      }
    }
    return result;
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman() {
    return `0b${[...this.toU8a(true)].map((d) => `00000000${d.toString(2)}`.slice(-8)).map((s) => this.__internal__isMsb ? s : s.split("").reverse().join("")).join("_")}`;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "BitVec";
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    const bitVec = super.toU8a(isBare);
    return isBare ? bitVec : u8aConcatStrict([compactToU8a(this.__internal__decodedLength), bitVec]);
  }
};

// node_modules/@polkadot/types-codec/native/Struct.js
function noopSetDefinition(d) {
  return d;
}
function decodeStructFromObject(registry, [Types, keys2], value, jsonMap) {
  let jsonObj;
  const typeofArray = Array.isArray(value);
  const typeofMap = value instanceof Map;
  const count = keys2.length;
  if (!typeofArray && !typeofMap && !isObject(value)) {
    throw new Error(`Struct: Cannot decode value ${stringify(value)} (typeof ${typeof value}), expected an input object, map or array`);
  } else if (typeofArray && value.length !== count) {
    throw new Error(`Struct: Unable to map ${stringify(value)} array to object with known keys ${keys2.join(", ")}`);
  }
  const raw = new Array(count);
  for (let i = 0; i < count; i++) {
    const key = keys2[i];
    const jsonKey = jsonMap.get(key) || key;
    const Type2 = Types[i];
    let assign;
    try {
      if (typeofArray) {
        assign = value[i];
      } else if (typeofMap) {
        assign = jsonKey && value.get(jsonKey);
      } else {
        assign = jsonKey && value[jsonKey];
        if (isUndefined(assign)) {
          if (isUndefined(jsonObj)) {
            const entries = Object.entries(value);
            jsonObj = {};
            for (let e = 0, ecount = entries.length; e < ecount; e++) {
              jsonObj[stringCamelCase(entries[e][0])] = entries[e][1];
            }
          }
          assign = jsonKey && jsonObj[jsonKey];
        }
      }
      raw[i] = [
        key,
        assign instanceof Type2 ? assign : new Type2(registry, assign)
      ];
    } catch (error) {
      let type = Type2.name;
      try {
        type = new Type2(registry).toRawType();
      } catch {
      }
      throw new Error(`Struct: failed on ${jsonKey}: ${type}:: ${error.message}`);
    }
  }
  return [raw, 0];
}
var Struct = class _Struct extends Map {
  registry;
  createdAtHash;
  initialU8aLength;
  isStorageFallback;
  __internal__jsonMap;
  __internal__Types;
  constructor(registry, Types, value, jsonMap = /* @__PURE__ */ new Map(), { definition, setDefinition = noopSetDefinition } = {}) {
    const typeMap = definition || setDefinition(mapToTypeMap(registry, Types));
    const [decoded, decodedLength] = isU8a(value) || isHex(value) ? decodeU8aStruct(registry, new Array(typeMap[0].length), u8aToU8a(value), typeMap) : value instanceof _Struct ? [value, 0] : decodeStructFromObject(registry, typeMap, value || {}, jsonMap);
    super(decoded);
    this.initialU8aLength = decodedLength;
    this.registry = registry;
    this.__internal__jsonMap = jsonMap;
    this.__internal__Types = typeMap;
  }
  static with(Types, jsonMap) {
    var _a;
    let definition;
    const setDefinition = (d) => definition = d;
    return _a = class extends _Struct {
      constructor(registry, value) {
        super(registry, Types, value, jsonMap, { definition, setDefinition });
      }
    }, (() => {
      const keys2 = Object.keys(Types);
      objectProperties(_a.prototype, keys2, (k, _, self) => self.get(k));
    })(), _a;
  }
  /**
   * @description The available keys for this struct
   */
  get defKeys() {
    return this.__internal__Types[1];
  }
  /**
   * @description Checks if the value is an empty value
   */
  get isEmpty() {
    for (const v of this.values()) {
      if (!v.isEmpty) {
        return false;
      }
    }
    return true;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    let total = 0;
    for (const v of this.values()) {
      total += v.encodedLength;
    }
    return total;
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Returns the Type description of the structure
   */
  get Type() {
    const result = {};
    const [Types, keys2] = this.__internal__Types;
    for (let i = 0, count = keys2.length; i < count; i++) {
      result[keys2[i]] = new Types[i](this.registry).toRawType();
    }
    return result;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    return compareMap(this, other);
  }
  /**
   * @description Returns a specific names entry in the structure
   * @param key The name of the entry to retrieve
   */
  get(key) {
    return super.get(key);
  }
  /**
   * @description Returns the values of a member at a specific index (Rather use get(name) for performance)
   */
  getAtIndex(index) {
    return this.toArray()[index];
  }
  /**
   * @description Returns the a types value by name
   */
  getT(key) {
    return super.get(key);
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect(isBare) {
    const inner = [];
    for (const [k, v] of this.entries()) {
      inner.push(__spreadProps(__spreadValues({}, v.inspect(!isBare || isBoolean(isBare) ? isBare : isBare[k])), {
        name: stringCamelCase(k)
      }));
    }
    return {
      inner
    };
  }
  /**
   * @description Converts the Object to an standard JavaScript Array
   */
  toArray() {
    return [...this.values()];
  }
  /**
   * @description Returns a hex string representation of the value
   */
  toHex() {
    return u8aToHex(this.toU8a());
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(isExtended) {
    const json = {};
    for (const [k, v] of this.entries()) {
      json[k] = v.toHuman(isExtended);
    }
    return json;
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    const json = {};
    for (const [k, v] of this.entries()) {
      json[this.__internal__jsonMap.get(k) || k] = v.toJSON();
    }
    return json;
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    const json = {};
    for (const [k, v] of this.entries()) {
      json[k] = v.toPrimitive();
    }
    return json;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return stringify(typesToMap(this.registry, this.__internal__Types));
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return stringify(this.toJSON());
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    const encoded = [];
    for (const [k, v] of this.entries()) {
      encoded.push(v.toU8a(!isBare || isBoolean(isBare) ? isBare : isBare[k]));
    }
    return u8aConcatStrict(encoded);
  }
};

// node_modules/@polkadot/types-codec/extended/Map.js
var l6 = logger("Map");
function decodeMapFromU8a(registry, KeyClass, ValClass, u8a) {
  const output = /* @__PURE__ */ new Map();
  const [offset, count] = compactFromU8aLim(u8a);
  const types2 = [];
  for (let i = 0; i < count; i++) {
    types2.push(KeyClass, ValClass);
  }
  const [values, decodedLength] = decodeU8a(registry, new Array(types2.length), u8a.subarray(offset), [types2, []]);
  for (let i = 0, count2 = values.length; i < count2; i += 2) {
    output.set(values[i], values[i + 1]);
  }
  return [KeyClass, ValClass, output, offset + decodedLength];
}
function decodeMapFromMap(registry, KeyClass, ValClass, value) {
  const output = /* @__PURE__ */ new Map();
  for (const [key, val] of value.entries()) {
    const isComplex = KeyClass.prototype instanceof AbstractArray || KeyClass.prototype instanceof Struct || KeyClass.prototype instanceof Enum;
    try {
      output.set(key instanceof KeyClass ? key : new KeyClass(registry, isComplex && typeof key === "string" ? JSON.parse(key) : key), val instanceof ValClass ? val : new ValClass(registry, val));
    } catch (error) {
      l6.error("Failed to decode key or value:", error.message);
      throw error;
    }
  }
  return [KeyClass, ValClass, output, 0];
}
function decodeMap(registry, keyType, valType, value) {
  const KeyClass = typeToConstructor(registry, keyType);
  const ValClass = typeToConstructor(registry, valType);
  if (!value) {
    return [KeyClass, ValClass, /* @__PURE__ */ new Map(), 0];
  } else if (isU8a(value) || isHex(value)) {
    return decodeMapFromU8a(registry, KeyClass, ValClass, u8aToU8a(value));
  } else if (value instanceof Map) {
    return decodeMapFromMap(registry, KeyClass, ValClass, value);
  } else if (isObject(value)) {
    return decodeMapFromMap(registry, KeyClass, ValClass, new Map(Object.entries(value)));
  }
  throw new Error("Map: cannot decode type");
}
var CodecMap = class extends Map {
  registry;
  createdAtHash;
  initialU8aLength;
  isStorageFallback;
  __internal__KeyClass;
  __internal__ValClass;
  __internal__type;
  constructor(registry, keyType, valType, rawValue, type = "HashMap") {
    const [KeyClass, ValClass, decoded, decodedLength] = decodeMap(registry, keyType, valType, rawValue);
    super(type === "BTreeMap" ? sortMap(decoded) : decoded);
    this.registry = registry;
    this.initialU8aLength = decodedLength;
    this.__internal__KeyClass = KeyClass;
    this.__internal__ValClass = ValClass;
    this.__internal__type = type;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    let len = compactToU8a(this.size).length;
    for (const [k, v] of this.entries()) {
      len += k.encodedLength + v.encodedLength;
    }
    return len;
  }
  /**
   * @description Returns a hash of the value
   */
  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is an empty value
   */
  get isEmpty() {
    return this.size === 0;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    return compareMap(this, other);
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    const inner = [];
    for (const [k, v] of this.entries()) {
      inner.push(k.inspect());
      inner.push(v.inspect());
    }
    return {
      inner,
      outer: [compactToU8a(this.size)]
    };
  }
  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */
  toHex() {
    return u8aToHex(this.toU8a());
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(isExtended) {
    const json = {};
    for (const [k, v] of this.entries()) {
      json[k instanceof Raw && k.isAscii ? k.toUtf8() : k.toString()] = v.toHuman(isExtended);
    }
    return json;
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    const json = {};
    for (const [k, v] of this.entries()) {
      json[k.toString()] = v.toJSON();
    }
    return json;
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    const json = {};
    for (const [k, v] of this.entries()) {
      json[k instanceof Raw && k.isAscii ? k.toUtf8() : k.toString()] = v.toPrimitive();
    }
    return json;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return `${this.__internal__type}<${this.registry.getClassName(this.__internal__KeyClass) || new this.__internal__KeyClass(this.registry).toRawType()},${this.registry.getClassName(this.__internal__ValClass) || new this.__internal__ValClass(this.registry).toRawType()}>`;
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return stringify(this.toJSON());
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    const encoded = [];
    if (!isBare) {
      encoded.push(compactToU8a(this.size));
    }
    for (const [k, v] of this.entries()) {
      encoded.push(k.toU8a(isBare), v.toU8a(isBare));
    }
    return u8aConcatStrict(encoded);
  }
};

// node_modules/@polkadot/types-codec/extended/BTreeMap.js
var BTreeMap = class _BTreeMap extends CodecMap {
  static with(keyType, valType) {
    return class extends _BTreeMap {
      constructor(registry, value) {
        super(registry, keyType, valType, value, "BTreeMap");
      }
    };
  }
};

// node_modules/@polkadot/types-codec/extended/BTreeSet.js
var l7 = logger("BTreeSet");
function decodeSetFromU8a(registry, ValClass, u8a) {
  const output = /* @__PURE__ */ new Set();
  const [offset, count] = compactFromU8aLim(u8a);
  const result = new Array(count);
  const [decodedLength] = decodeU8aVec(registry, result, u8a, offset, ValClass);
  for (let i = 0; i < count; i++) {
    output.add(result[i]);
  }
  return [ValClass, output, decodedLength];
}
function decodeSetFromSet(registry, ValClass, value) {
  const output = /* @__PURE__ */ new Set();
  value.forEach((val) => {
    try {
      output.add(val instanceof ValClass ? val : new ValClass(registry, val));
    } catch (error) {
      l7.error("Failed to decode key or value:", error.message);
      throw error;
    }
  });
  return [ValClass, output, 0];
}
function decodeSet(registry, valType, value) {
  const ValClass = typeToConstructor(registry, valType);
  if (!value) {
    return [ValClass, /* @__PURE__ */ new Set(), 0];
  } else if (isU8a(value) || isHex(value)) {
    return decodeSetFromU8a(registry, ValClass, u8aToU8a(value));
  } else if (Array.isArray(value) || value instanceof Set) {
    return decodeSetFromSet(registry, ValClass, value);
  }
  throw new Error("BTreeSet: cannot decode type");
}
var BTreeSet = class _BTreeSet extends Set {
  registry;
  createdAtHash;
  initialU8aLength;
  isStorageFallback;
  __internal__ValClass;
  constructor(registry, valType, rawValue) {
    const [ValClass, values, decodedLength] = decodeSet(registry, valType, rawValue);
    super(sortSet(values));
    this.registry = registry;
    this.initialU8aLength = decodedLength;
    this.__internal__ValClass = ValClass;
  }
  static with(valType) {
    return class extends _BTreeSet {
      constructor(registry, value) {
        super(registry, valType, value);
      }
    };
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    let len = compactToU8a(this.size).length;
    for (const v of this.values()) {
      len += v.encodedLength;
    }
    return len;
  }
  /**
   * @description Returns a hash of the value
   */
  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is an empty value
   */
  get isEmpty() {
    return this.size === 0;
  }
  /**
   * @description The actual set values as a string[]
   */
  get strings() {
    return [...super.values()].map((v) => v.toString());
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    return compareSet(this, other);
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    const inner = [];
    for (const v of this.values()) {
      inner.push(v.inspect());
    }
    return {
      inner,
      outer: [compactToU8a(this.size)]
    };
  }
  /**
   * @description Returns a hex string representation of the value. isLe returns a LE (number-only) representation
   */
  toHex() {
    return u8aToHex(this.toU8a());
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(isExtended) {
    const json = [];
    for (const v of this.values()) {
      json.push(v.toHuman(isExtended));
    }
    return json;
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    const json = [];
    for (const v of this.values()) {
      json.push(v.toJSON());
    }
    return json;
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return `BTreeSet<${this.registry.getClassName(this.__internal__ValClass) || new this.__internal__ValClass(this.registry).toRawType()}>`;
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    const json = [];
    for (const v of this.values()) {
      json.push(v.toPrimitive());
    }
    return json;
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return stringify(this.toJSON());
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    const encoded = [];
    if (!isBare) {
      encoded.push(compactToU8a(this.size));
    }
    for (const v of this.values()) {
      encoded.push(v.toU8a(isBare));
    }
    return u8aConcatStrict(encoded);
  }
};

// node_modules/@polkadot/types-codec/extended/Bytes.js
var MAX_LENGTH2 = 10 * 1024 * 1024;
function decodeBytesU8a(value) {
  if (!value.length) {
    return [new Uint8Array(), 0];
  }
  const [offset, length] = compactFromU8aLim(value);
  const total = offset + length;
  if (length > MAX_LENGTH2) {
    throw new Error(`Bytes length ${length.toString()} exceeds ${MAX_LENGTH2}`);
  } else if (total > value.length) {
    throw new Error(`Bytes: required length less than remainder, expected at least ${total}, found ${value.length}`);
  }
  return [value.subarray(offset, total), total];
}
var Bytes = class extends Raw {
  constructor(registry, value) {
    const [u8a, decodedLength] = isU8a(value) && !(value instanceof Raw) ? decodeBytesU8a(value) : Array.isArray(value) || isString(value) ? [u8aToU8a(value), 0] : [value, 0];
    super(registry, u8a, decodedLength);
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    return this.length + compactToU8a(this.length).length;
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect(isBare) {
    const clength = compactToU8a(this.length);
    return {
      outer: isBare ? [super.toU8a()] : this.length ? [clength, super.toU8a()] : [clength]
    };
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "Bytes";
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    return isBare ? super.toU8a(isBare) : compactAddLength(this);
  }
};

// node_modules/@polkadot/types-codec/extended/HashMap.js
var HashMap = class _HashMap extends CodecMap {
  static with(keyType, valType) {
    return class extends _HashMap {
      constructor(registry, value) {
        super(registry, keyType, valType, value);
      }
    };
  }
};

// node_modules/@polkadot/types-codec/extended/Linkage.js
var EMPTY2 = new Uint8Array();

// node_modules/@polkadot/types-codec/native/Bool.js
var bool = class extends Boolean {
  registry;
  createdAtHash;
  initialU8aLength = 1;
  isStorageFallback;
  constructor(registry, value = false) {
    super(isU8a(value) ? value[0] === 1 : value instanceof Boolean ? value.valueOf() : !!value);
    this.registry = registry;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    return 1 | 0;
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is an empty value (true when it wraps false/default)
   */
  get isEmpty() {
    return this.isFalse;
  }
  /**
   * @description Checks if the value is an empty value (always false)
   */
  get isFalse() {
    return !this.isTrue;
  }
  /**
   * @description Checks if the value is an empty value (always false)
   */
  get isTrue() {
    return this.valueOf();
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    return this.valueOf() === (other instanceof Boolean ? other.valueOf() : other);
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    return {
      outer: [this.toU8a()]
    };
  }
  /**
   * @description Returns a hex string representation of the value
   */
  toHex() {
    return u8aToHex(this.toU8a());
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman() {
    return this.toJSON();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return this.valueOf();
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return this.toJSON();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "bool";
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return this.toJSON().toString();
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */
  toU8a(_isBare) {
    return new Uint8Array([this.valueOf() ? 1 : 0]);
  }
};

// node_modules/@polkadot/types-codec/extended/OptionBool.js
function decodeU8a2(registry, value) {
  return value[0] === 0 ? null : new bool(registry, value[0] === 1);
}
var OptionBool = class extends Option {
  constructor(registry, value) {
    super(registry, bool, isU8a(value) || isHex(value) ? decodeU8a2(registry, u8aToU8a(value)) : value);
    this.initialU8aLength = 1;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    return 1 | 0;
  }
  /**
   * @description Checks if the value is an empty value (always false)
   */
  get isFalse() {
    return this.isSome ? !this.value.valueOf() : false;
  }
  /**
   * @description Checks if the value is an empty value (always false)
   */
  get isTrue() {
    return this.isSome ? this.value.valueOf() : false;
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    return { outer: [this.toU8a()] };
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType(isBare) {
    return isBare ? "bool" : "Option<bool>";
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    if (isBare) {
      return super.toU8a(true);
    }
    return this.isSome ? new Uint8Array([this.isTrue ? 1 : 2]) : new Uint8Array([0]);
  }
};

// node_modules/@polkadot/types-codec/extended/Range.js
var Range = class _Range extends Tuple {
  __internal__rangeName;
  constructor(registry, Type2, value, { rangeName = "Range" } = {}) {
    super(registry, [Type2, Type2], value);
    this.__internal__rangeName = rangeName;
  }
  static with(Type2) {
    return class extends _Range {
      constructor(registry, value) {
        super(registry, Type2, value);
      }
    };
  }
  /**
   * @description Returns the starting range value
   */
  get start() {
    return this[0];
  }
  /**
   * @description Returns the ending range value
   */
  get end() {
    return this[1];
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return `${this.__internal__rangeName}<${this.start.toRawType()}>`;
  }
};

// node_modules/@polkadot/types-codec/extended/RangeInclusive.js
var RangeInclusive = class _RangeInclusive extends Range {
  constructor(registry, Type2, value) {
    super(registry, Type2, value, { rangeName: "RangeInclusive" });
  }
  static with(Type2) {
    return class extends _RangeInclusive {
      constructor(registry, value) {
        super(registry, Type2, value);
      }
    };
  }
};

// node_modules/@polkadot/types-codec/native/Text.js
var MAX_LENGTH3 = 128 * 1024;
function decodeText(value) {
  if (isU8a(value)) {
    if (!value.length) {
      return ["", 0];
    }
    if (value instanceof Raw) {
      return [u8aToString(value), 0];
    }
    const [offset, length] = compactFromU8aLim(value);
    const total = offset + length;
    if (length > MAX_LENGTH3) {
      throw new Error(`Text: length ${length.toString()} exceeds ${MAX_LENGTH3}`);
    } else if (total > value.length) {
      throw new Error(`Text: required length less than remainder, expected at least ${total}, found ${value.length}`);
    }
    return [u8aToString(value.subarray(offset, total)), total];
  } else if (isHex(value)) {
    return [u8aToString(hexToU8a(value)), 0];
  }
  return [value ? value.toString() : "", 0];
}
var Text = class extends String {
  registry;
  createdAtHash;
  initialU8aLength;
  isStorageFallback;
  __internal__override = null;
  constructor(registry, value) {
    const [str, decodedLength] = decodeText(value);
    super(str);
    this.registry = registry;
    this.initialU8aLength = decodedLength;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    return this.toU8a().length;
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is an empty value
   */
  get isEmpty() {
    return this.length === 0;
  }
  /**
   * @description The length of the value
   */
  get length() {
    return super.length;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    return isString(other) ? this.toString() === other.toString() : false;
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    const value = stringToU8a(super.toString());
    return {
      outer: value.length ? [compactToU8a(value.length), value] : [compactToU8a(value.length)]
    };
  }
  /**
   * @description Set an override value for this
   */
  setOverride(override) {
    this.__internal__override = override;
  }
  /**
   * @description Returns a hex string representation of the value
   */
  toHex() {
    return u8aToHex(this.toU8a(true));
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman() {
    return this.toJSON();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return this.toJSON();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "Text";
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return this.__internal__override || super.toString();
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    const encoded = stringToU8a(super.toString());
    return isBare ? encoded : compactAddLength(encoded);
  }
};

// node_modules/@polkadot/types-codec/extended/Type.js
var Type = class extends Text {
  constructor(registry, value = "") {
    super(registry, value);
    this.setOverride(sanitize(this.toString()));
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "Type";
  }
};

// node_modules/@polkadot/types-codec/extended/U8aFixed.js
function decodeU8aFixed(value, bitLength) {
  const u8a = u8aToU8a(value);
  const byteLength = bitLength / 8;
  if (!u8a.length) {
    return [new Uint8Array(byteLength), 0];
  }
  if (isU8a(value) ? u8a.length < byteLength : u8a.length !== byteLength) {
    throw new Error(`Expected input with ${byteLength} bytes (${bitLength} bits), found ${u8a.length} bytes`);
  }
  return [u8a.subarray(0, byteLength), byteLength];
}
var U8aFixed = class _U8aFixed extends Raw {
  constructor(registry, value = new Uint8Array(), bitLength = 256) {
    const [u8a, decodedLength] = decodeU8aFixed(value, bitLength);
    super(registry, u8a, decodedLength);
  }
  static with(bitLength, typeName) {
    return class extends _U8aFixed {
      constructor(registry, value) {
        super(registry, value, bitLength);
      }
      toRawType() {
        return typeName || super.toRawType();
      }
    };
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return `[u8;${this.length}]`;
  }
};

// node_modules/@polkadot/types-codec/extended/WrapperKeepOpaque.js
function decodeRaw(registry, typeName, value) {
  const Type2 = typeToConstructor(registry, typeName);
  if (isU8a(value) || isHex(value)) {
    try {
      const [, u8a] = isHex(value) ? [0, u8aToU8a(value)] : value instanceof Raw ? [0, value.subarray()] : compactStripLength(value);
      return [Type2, new Type2(registry, u8a), value];
    } catch {
      return [Type2, null, value];
    }
  }
  const instance = new Type2(registry, value);
  return [Type2, instance, compactAddLength(instance.toU8a())];
}
var WrapperKeepOpaque = class _WrapperKeepOpaque extends Bytes {
  __internal__Type;
  __internal__decoded;
  __internal__opaqueName;
  constructor(registry, typeName, value, { opaqueName = "WrapperKeepOpaque" } = {}) {
    const [Type2, decoded, u8a] = decodeRaw(registry, typeName, value);
    super(registry, u8a);
    this.__internal__Type = Type2;
    this.__internal__decoded = decoded;
    this.__internal__opaqueName = opaqueName;
  }
  static with(Type2) {
    return class extends _WrapperKeepOpaque {
      constructor(registry, value) {
        super(registry, Type2, value);
      }
    };
  }
  /**
   * @description Checks if the wrapper is decodable
   */
  get isDecoded() {
    return !!this.__internal__decoded;
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    return this.__internal__decoded ? {
      inner: [this.__internal__decoded.inspect()],
      outer: [compactToU8a(this.length)]
    } : {
      outer: [compactToU8a(this.length), this.toU8a(true)]
    };
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(isExtended) {
    return this.__internal__decoded ? this.__internal__decoded.toHuman(isExtended) : super.toHuman();
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return this.__internal__decoded ? this.__internal__decoded.toPrimitive() : super.toPrimitive();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return `${this.__internal__opaqueName}<${this.registry.getClassName(this.__internal__Type) || (this.__internal__decoded ? this.__internal__decoded.toRawType() : new this.__internal__Type(this.registry).toRawType())}>`;
  }
  /**
   * @description Converts the Object to to a string (either decoded or bytes)
   */
  toString() {
    return this.__internal__decoded ? this.__internal__decoded.toString() : super.toString();
  }
  /**
   * @description Returns the decoded that the WrapperKeepOpaque represents (if available), throws if non-decodable
   */
  unwrap() {
    if (!this.__internal__decoded) {
      throw new Error(`${this.__internal__opaqueName}: unwrapping an undecodable value`);
    }
    return this.__internal__decoded;
  }
};

// node_modules/@polkadot/types-codec/extended/WrapperOpaque.js
var WrapperOpaque = class _WrapperOpaque extends WrapperKeepOpaque {
  constructor(registry, typeName, value) {
    super(registry, typeName, value, { opaqueName: "WrapperOpaque" });
  }
  static with(Type2) {
    return class extends _WrapperOpaque {
      constructor(registry, value) {
        super(registry, Type2, value);
      }
    };
  }
  /**
   * @description The inner value for this wrapper, in all cases it _should_ be decodable (unlike KeepOpaque)
   */
  get inner() {
    return this.unwrap();
  }
};

// node_modules/@polkadot/types-codec/native/Float.js
var Float = class _Float extends Number {
  encodedLength;
  registry;
  createdAtHash;
  initialU8aLength;
  isStorageFallback;
  __internal__bitLength;
  constructor(registry, value, { bitLength = 32 } = {}) {
    super(isU8a(value) || isHex(value) ? value.length === 0 ? 0 : u8aToFloat(u8aToU8a(value), { bitLength }) : value || 0);
    this.__internal__bitLength = bitLength;
    this.encodedLength = bitLength / 8;
    this.initialU8aLength = this.encodedLength;
    this.registry = registry;
  }
  static with(bitLength) {
    return class extends _Float {
      constructor(registry, value) {
        super(registry, value, { bitLength });
      }
    };
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Returns true if the type wraps an empty/default all-0 value
   */
  get isEmpty() {
    return this.valueOf() === 0;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    return this.valueOf() === Number(other);
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    return {
      outer: [this.toU8a()]
    };
  }
  /**
   * @description Returns a hex string representation of the value
   */
  toHex() {
    return u8aToHex(this.toU8a());
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman() {
    return this.toString();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return this.toHex();
  }
  /**
   * @description Returns the number representation (Same as valueOf)
   */
  toNumber() {
    return this.valueOf();
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return this.toNumber();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return `f${this.__internal__bitLength}`;
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */
  toU8a(_isBare) {
    return floatToU8a(this, {
      bitLength: this.__internal__bitLength
    });
  }
};

// node_modules/@polkadot/types-codec/native/Json.js
function decodeJson(value) {
  return Object.entries(value || {});
}
var Json = class extends Map {
  registry;
  createdAtHash;
  initialU8aLength;
  isStorageFallback;
  constructor(registry, value) {
    const decoded = decodeJson(value);
    super(decoded);
    this.registry = registry;
    objectProperties(this, decoded.map(([k]) => k), (k) => this.get(k));
  }
  /**
   * @description Always 0, never encodes as a Uint8Array
   */
  get encodedLength() {
    return 0 | 0;
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description Checks if the value is an empty value
   */
  get isEmpty() {
    return [...this.keys()].length === 0;
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    return compareMap(this, other);
  }
  /**
   * @description Returns a typed value from the internal map
   */
  getT(key) {
    return this.get(key);
  }
  /**
   * @description Unimplemented, will throw
   */
  inspect() {
    throw new Error("Unimplemented");
  }
  /**
   * @description Unimplemented, will throw
   */
  toHex() {
    throw new Error("Unimplemented");
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman() {
    return [...this.entries()].reduce((json, [key, value]) => {
      json[key] = isFunction(value.toHuman) ? value.toHuman() : value;
      return json;
    }, {});
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return [...this.entries()].reduce((json, [key, value]) => {
      json[key] = value;
      return json;
    }, {});
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return [...this.entries()].reduce((json, [key, value]) => {
      json[key] = isFunction(value.toPrimitive) ? value.toPrimitive() : value;
      return json;
    }, {});
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "Json";
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return stringify(this.toJSON());
  }
  /**
   * @description Unimplemented, will throw
   */
  toU8a(_isBare) {
    throw new Error("Unimplemented");
  }
};

// node_modules/@polkadot/types-codec/native/Set.js
function encodeSet(setValues, values) {
  const encoded = new import_bn.default(0);
  for (let i = 0, count = values.length; i < count; i++) {
    encoded.ior(bnToBn(setValues[values[i]] || 0));
  }
  return encoded;
}
function decodeSetArray(setValues, values) {
  const count = values.length;
  const result = new Array(count);
  for (let i = 0; i < count; i++) {
    const key = values[i];
    if (isUndefined(setValues[key])) {
      throw new Error(`Set: Invalid key '${key}' passed to Set, allowed ${Object.keys(setValues).join(", ")}`);
    }
    result[i] = key;
  }
  return result;
}
function decodeSetNumber(setValues, _value) {
  const bn = bnToBn(_value);
  const keys2 = Object.keys(setValues);
  const result = [];
  for (let i = 0, count = keys2.length; i < count; i++) {
    const key = keys2[i];
    if (bn.and(bnToBn(setValues[key])).eq(bnToBn(setValues[key]))) {
      result.push(key);
    }
  }
  const computed = encodeSet(setValues, result);
  if (!bn.eq(computed)) {
    throw new Error(`Set: Mismatch decoding '${bn.toString()}', computed as '${computed.toString()}' with ${result.join(", ")}`);
  }
  return result;
}
function decodeSet2(setValues, value = 0, bitLength) {
  if (bitLength % 8 !== 0) {
    throw new Error(`Expected valid bitLength, power of 8, found ${bitLength}`);
  }
  const byteLength = bitLength / 8;
  if (isU8a(value)) {
    return value.length === 0 ? [] : decodeSetNumber(setValues, u8aToBn(value.subarray(0, byteLength), { isLe: true }));
  } else if (isString(value)) {
    return decodeSet2(setValues, u8aToU8a(value), byteLength);
  } else if (value instanceof Set || Array.isArray(value)) {
    const input = Array.isArray(value) ? value : [...value.values()];
    return decodeSetArray(setValues, input);
  }
  return decodeSetNumber(setValues, value);
}
var CodecSet = class _CodecSet extends Set {
  registry;
  createdAtHash;
  initialU8aLength;
  isStorageFallback;
  __internal__allowed;
  __internal__byteLength;
  constructor(registry, setValues, value, bitLength = 8) {
    super(decodeSet2(setValues, value, bitLength));
    this.registry = registry;
    this.__internal__allowed = setValues;
    this.__internal__byteLength = bitLength / 8;
  }
  static with(values, bitLength) {
    var _a;
    return _a = class extends _CodecSet {
      constructor(registry, value) {
        super(registry, values, value, bitLength);
      }
    }, (() => {
      const keys2 = Object.keys(values);
      const count = keys2.length;
      const isKeys = new Array(count);
      for (let i = 0; i < count; i++) {
        isKeys[i] = `is${stringPascalCase(keys2[i])}`;
      }
      objectProperties(_a.prototype, isKeys, (_, i, self) => self.strings.includes(keys2[i]));
    })(), _a;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    return this.__internal__byteLength;
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description true is the Set contains no values
   */
  get isEmpty() {
    return this.size === 0;
  }
  /**
   * @description The actual set values as a string[]
   */
  get strings() {
    return [...super.values()];
  }
  /**
   * @description The encoded value for the set members
   */
  get valueEncoded() {
    return encodeSet(this.__internal__allowed, this.strings);
  }
  /**
   * @description adds a value to the Set (extended to allow for validity checking)
   */
  add = (key) => {
    if (this.__internal__allowed && isUndefined(this.__internal__allowed[key])) {
      throw new Error(`Set: Invalid key '${key}' on add`);
    }
    super.add(key);
    return this;
  };
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    if (Array.isArray(other)) {
      return compareArray(this.strings.sort(), other.sort());
    } else if (other instanceof Set) {
      return this.eq([...other.values()]);
    } else if (isNumber(other) || isBn(other)) {
      return this.valueEncoded.eq(bnToBn(other));
    }
    return false;
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    return {
      outer: [this.toU8a()]
    };
  }
  /**
   * @description Returns a hex string representation of the value
   */
  toHex() {
    return u8aToHex(this.toU8a());
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman() {
    return this.toJSON();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return this.strings;
  }
  /**
   * @description The encoded value for the set members
   */
  toNumber() {
    return this.valueEncoded.toNumber();
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return this.toJSON();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return stringify({ _set: this.__internal__allowed });
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return `[${this.strings.join(", ")}]`;
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */
  toU8a(_isBare) {
    return bnToU8a(this.valueEncoded, {
      bitLength: this.__internal__byteLength * 8,
      isLe: true
    });
  }
};

// node_modules/@polkadot/types-codec/primitive/F32.js
var f32 = class extends Float.with(32) {
  // NOTE without this, we cannot properly determine extensions
  __FloatType = "f32";
};

// node_modules/@polkadot/types-codec/primitive/F64.js
var f64 = class extends Float.with(64) {
  // NOTE without this, we cannot properly determine extensions
  __FloatType = "f64";
};

// node_modules/@polkadot/types-codec/primitive/I8.js
var i8 = class extends Int.with(8) {
  // NOTE without this, we cannot properly determine extensions
  __IntType = "i8";
};

// node_modules/@polkadot/types-codec/primitive/I16.js
var i16 = class extends Int.with(16) {
  // NOTE without this, we cannot properly determine extensions
  __IntType = "i16";
};

// node_modules/@polkadot/types-codec/primitive/I32.js
var i32 = class extends Int.with(32) {
  // NOTE without this, we cannot properly determine extensions
  __IntType = "i32";
};

// node_modules/@polkadot/types-codec/primitive/I64.js
var i64 = class extends Int.with(64) {
  // NOTE without this, we cannot properly determine extensions
  __IntType = "i64";
};

// node_modules/@polkadot/types-codec/primitive/I128.js
var i128 = class extends Int.with(128) {
  // NOTE without this, we cannot properly determine extensions
  __IntType = "i128";
};

// node_modules/@polkadot/types-codec/primitive/I256.js
var i256 = class extends Int.with(256) {
  // NOTE without this, we cannot properly determine extensions
  __IntType = "i256";
};

// node_modules/@polkadot/types-codec/primitive/ISize.js
var isize = class extends i32 {
  constructor(registry, value) {
    super(registry, value);
    throw new Error("The `isize` type should not be used. Since it is platform-specific, it creates incompatibilities between native (generally i64) and WASM (always i32) code. Use one of the `i32` or `i64` types explicitly.");
  }
};

// node_modules/@polkadot/types-codec/primitive/U8.js
var u8 = class extends UInt.with(8) {
  // NOTE without this, we cannot properly determine extensions
  __UIntType = "u8";
};

// node_modules/@polkadot/types-codec/primitive/U16.js
var u16 = class extends UInt.with(16) {
  // NOTE without this, we cannot properly determine extensions
  __UIntType = "u16";
};

// node_modules/@polkadot/types-codec/primitive/U32.js
var u32 = class extends UInt.with(32) {
  // NOTE without this, we cannot properly determine extensions
  __UIntType = "u32";
};

// node_modules/@polkadot/types-codec/primitive/U64.js
var u64 = class extends UInt.with(64) {
  // NOTE without this, we cannot properly determine extensions
  __UIntType = "u64";
};

// node_modules/@polkadot/types-codec/primitive/U128.js
var u128 = class extends UInt.with(128) {
  // NOTE without this, we cannot properly determine extensions
  __UIntType = "u128";
};

// node_modules/@polkadot/types-codec/primitive/U256.js
var u256 = class extends UInt.with(256) {
  // NOTE without this, we cannot properly determine extensions
  __UIntType = "u256";
};

// node_modules/@polkadot/types-codec/primitive/USize.js
var usize = class extends u32 {
  constructor(registry, value) {
    super(registry, value);
    throw new Error("The `usize` type should not be used. Since it is platform-specific, it creates incompatibilities between native (generally u64) and WASM (always u32) code. Use one of the `u32` or `u64` types explicitly.");
  }
};

// node_modules/@polkadot/types-create/util/typeSplit.js
function typeSplit(type) {
  const result = [];
  let c = 0;
  let f = 0;
  let s = 0;
  let t = 0;
  let start = 0;
  for (let i = 0, count = type.length; i < count; i++) {
    switch (type[i]) {
      case ",": {
        if (!(c || f || s || t)) {
          result.push(type.substring(start, i).trim());
          start = i + 1;
        }
        break;
      }
      case "<":
        c++;
        break;
      case ">":
        c--;
        break;
      case "[":
        f++;
        break;
      case "]":
        f--;
        break;
      case "{":
        s++;
        break;
      case "}":
        s--;
        break;
      case "(":
        t++;
        break;
      case ")":
        t--;
        break;
    }
  }
  if (c || f || s || t) {
    throw new Error(`Invalid definition (missing terminators) found in ${type}`);
  }
  result.push(type.substring(start, type.length).trim());
  return result;
}

// node_modules/@polkadot/types-create/util/getTypeDef.js
var KNOWN_INTERNALS = ["_alias", "_fallback"];
function getTypeString(typeOrObj) {
  return isString(typeOrObj) ? typeOrObj.toString() : stringify(typeOrObj);
}
function isRustEnum2(details) {
  const values = Object.values(details);
  if (values.some((v) => isNumber(v))) {
    if (!values.every((v) => isNumber(v) && v >= 0 && v <= 255)) {
      throw new Error("Invalid number-indexed enum definition");
    }
    return false;
  }
  return true;
}
function _decodeEnum(value, details, count, fallbackType) {
  value.info = TypeDefInfo.Enum;
  value.fallbackType = fallbackType;
  if (Array.isArray(details)) {
    value.sub = details.map((name, index) => ({
      index,
      info: TypeDefInfo.Plain,
      name,
      type: "Null"
    }));
  } else if (isRustEnum2(details)) {
    value.sub = Object.entries(details).map(([name, typeOrObj], index) => objectSpread({}, getTypeDef(getTypeString(typeOrObj || "Null"), { name }, count), { index }));
  } else {
    value.sub = Object.entries(details).map(([name, index]) => ({
      index,
      info: TypeDefInfo.Plain,
      name,
      type: "Null"
    }));
  }
  return value;
}
function _decodeSet(value, details, fallbackType) {
  value.info = TypeDefInfo.Set;
  value.fallbackType = fallbackType;
  value.length = details._bitLength;
  value.sub = Object.entries(details).filter(([name]) => !name.startsWith("_")).map(([name, index]) => ({
    index,
    info: TypeDefInfo.Plain,
    name,
    type: "Null"
  }));
  return value;
}
function _decodeStruct(value, type, _, count) {
  const parsed = JSON.parse(type);
  const keys2 = Object.keys(parsed);
  if (parsed._enum) {
    return _decodeEnum(value, parsed._enum, count, parsed._fallback);
  } else if (parsed._set) {
    return _decodeSet(value, parsed._set, parsed._fallback);
  }
  value.alias = parsed._alias ? new Map(Object.entries(parsed._alias)) : void 0;
  value.fallbackType = parsed._fallback;
  value.sub = keys2.filter((name) => !KNOWN_INTERNALS.includes(name)).map((name) => getTypeDef(getTypeString(parsed[name]), { name }, count));
  return value;
}
function _decodeFixedVec(value, type, _, count) {
  const max = type.length - 1;
  let index = -1;
  let inner = 0;
  for (let i = 1; i < max && index === -1; i++) {
    switch (type[i]) {
      case ";": {
        if (inner === 0) {
          index = i;
        }
        break;
      }
      case "[":
      case "(":
      case "<":
        inner++;
        break;
      case "]":
      case ")":
      case ">":
        inner--;
        break;
    }
  }
  if (index === -1) {
    throw new Error(`${type}: Unable to extract location of ';'`);
  }
  const vecType = type.substring(1, index);
  const [strLength, displayName] = type.substring(index + 1, max).split(";");
  const length = parseInt(strLength.trim(), 10);
  if (length > 2048) {
    throw new Error(`${type}: Only support for [Type; <length>], where length <= 2048`);
  }
  value.displayName = displayName;
  value.length = length;
  value.sub = getTypeDef(vecType, {}, count);
  return value;
}
function _decodeTuple(value, _, subType, count) {
  value.sub = subType.length === 0 ? [] : typeSplit(subType).map((inner) => getTypeDef(inner, {}, count));
  return value;
}
function _decodeAnyInt(value, type, _, clazz) {
  const [strLength, displayName] = type.substring(clazz.length + 1, type.length - 1).split(",");
  const length = parseInt(strLength.trim(), 10);
  if (length > 8192 || length % 8) {
    throw new Error(`${type}: Only support for ${clazz}<bitLength>, where length <= 8192 and a power of 8, found ${length}`);
  }
  value.displayName = displayName;
  value.length = length;
  return value;
}
function _decodeInt(value, type, subType) {
  return _decodeAnyInt(value, type, subType, "Int");
}
function _decodeUInt(value, type, subType) {
  return _decodeAnyInt(value, type, subType, "UInt");
}
function _decodeDoNotConstruct(value, type, _) {
  const NAME_LENGTH = "DoNotConstruct".length;
  value.displayName = type.substring(NAME_LENGTH + 1, type.length - 1);
  return value;
}
function hasWrapper(type, [start, end]) {
  return type.startsWith(start) && type.slice(-1 * end.length) === end;
}
var nestedExtraction = [
  ["[", "]", TypeDefInfo.VecFixed, _decodeFixedVec],
  ["{", "}", TypeDefInfo.Struct, _decodeStruct],
  ["(", ")", TypeDefInfo.Tuple, _decodeTuple],
  // the inner for these are the same as tuple, multiple values
  ["BTreeMap<", ">", TypeDefInfo.BTreeMap, _decodeTuple],
  ["HashMap<", ">", TypeDefInfo.HashMap, _decodeTuple],
  ["Int<", ">", TypeDefInfo.Int, _decodeInt],
  ["Result<", ">", TypeDefInfo.Result, _decodeTuple],
  ["UInt<", ">", TypeDefInfo.UInt, _decodeUInt],
  ["DoNotConstruct<", ">", TypeDefInfo.DoNotConstruct, _decodeDoNotConstruct]
];
var wrappedExtraction = [
  ["BTreeSet<", ">", TypeDefInfo.BTreeSet],
  ["Compact<", ">", TypeDefInfo.Compact],
  ["Linkage<", ">", TypeDefInfo.Linkage],
  ["Opaque<", ">", TypeDefInfo.WrapperOpaque],
  ["Option<", ">", TypeDefInfo.Option],
  ["Range<", ">", TypeDefInfo.Range],
  ["RangeInclusive<", ">", TypeDefInfo.RangeInclusive],
  ["Vec<", ">", TypeDefInfo.Vec],
  ["WrapperKeepOpaque<", ">", TypeDefInfo.WrapperKeepOpaque],
  ["WrapperOpaque<", ">", TypeDefInfo.WrapperOpaque]
];
function extractSubType(type, [start, end]) {
  return type.substring(start.length, type.length - end.length);
}
function getTypeDef(_type, { displayName, name } = {}, count = 0) {
  const type = sanitize(_type);
  const value = { displayName, info: TypeDefInfo.Plain, name, type };
  if (++count > 64) {
    throw new Error("getTypeDef: Maximum nested limit reached");
  }
  const nested = nestedExtraction.find((nested2) => hasWrapper(type, nested2));
  if (nested) {
    value.info = nested[2];
    return nested[3](value, type, extractSubType(type, nested), count);
  }
  const wrapped = wrappedExtraction.find((wrapped2) => hasWrapper(type, wrapped2));
  if (wrapped) {
    value.info = wrapped[2];
    value.sub = getTypeDef(extractSubType(type, wrapped), {}, count);
  }
  return value;
}

// node_modules/@polkadot/types-create/create/class.js
function getTypeDefType({ lookupName, type }) {
  return lookupName || type;
}
function getSubDefArray(value) {
  if (!Array.isArray(value.sub)) {
    throw new Error(`Expected subtype as TypeDef[] in ${stringify(value)}`);
  }
  return value.sub;
}
function getSubDef(value) {
  if (!value.sub || Array.isArray(value.sub)) {
    throw new Error(`Expected subtype as TypeDef in ${stringify(value)}`);
  }
  return value.sub;
}
function getSubType(value) {
  return getTypeDefType(getSubDef(value));
}
function getTypeClassMap(value) {
  const subs = getSubDefArray(value);
  const map2 = {};
  for (let i = 0, count = subs.length; i < count; i++) {
    const sub = subs[i];
    if (!sub.name) {
      throw new Error(`No name found in definition ${stringify(sub)}`);
    }
    map2[sub.name] = getTypeDefType(sub);
  }
  return map2;
}
function getTypeClassArray(value) {
  return getSubDefArray(value).map(getTypeDefType);
}
function createInt(Clazz, { displayName, length }) {
  if (!isNumber(length)) {
    throw new Error(`Expected bitLength information for ${displayName || Clazz.constructor.name}<bitLength>`);
  }
  return Clazz.with(length, displayName);
}
function createHashMap(Clazz, value) {
  const [keyType, valueType] = getTypeClassArray(value);
  return Clazz.with(keyType, valueType);
}
function createWithSub(Clazz, value) {
  return Clazz.with(getSubType(value));
}
var infoMapping = {
  [TypeDefInfo.BTreeMap]: (_registry, value) => createHashMap(BTreeMap, value),
  [TypeDefInfo.BTreeSet]: (_registry, value) => createWithSub(BTreeSet, value),
  [TypeDefInfo.Compact]: (_registry, value) => createWithSub(Compact, value),
  [TypeDefInfo.DoNotConstruct]: (_registry, value) => DoNotConstruct.with(value.displayName || value.type),
  [TypeDefInfo.Enum]: (_registry, value) => {
    const subs = getSubDefArray(value);
    return Enum.with(subs.every(({ type }) => type === "Null") ? subs.reduce((out, { index, name }, count) => {
      if (!name) {
        throw new Error("No name found in sub definition");
      }
      out[name] = index || count;
      return out;
    }, {}) : getTypeClassMap(value));
  },
  [TypeDefInfo.HashMap]: (_registry, value) => createHashMap(HashMap, value),
  [TypeDefInfo.Int]: (_registry, value) => createInt(Int, value),
  // We have circular deps between Linkage & Struct
  [TypeDefInfo.Linkage]: (_registry, value) => {
    const type = `Option<${getSubType(value)}>`;
    const Clazz = Struct.with({ previous: type, next: type });
    Clazz.prototype.toRawType = function() {
      return `Linkage<${this.next.toRawType(true)}>`;
    };
    return Clazz;
  },
  [TypeDefInfo.Null]: (_registry, _value) => Null,
  [TypeDefInfo.Option]: (_registry, value) => {
    if (!value.sub || Array.isArray(value.sub)) {
      throw new Error("Expected type information for Option");
    }
    return createWithSub(Option, value);
  },
  [TypeDefInfo.Plain]: (registry, value) => registry.getOrUnknown(value.type),
  [TypeDefInfo.Range]: (_registry, value) => createWithSub(Range, value),
  [TypeDefInfo.RangeInclusive]: (_registry, value) => createWithSub(RangeInclusive, value),
  [TypeDefInfo.Result]: (_registry, value) => {
    const [Ok, Err] = getTypeClassArray(value);
    return Result.with({ Err, Ok });
  },
  [TypeDefInfo.Set]: (_registry, value) => CodecSet.with(getSubDefArray(value).reduce((result, { index, name }) => {
    if (!name || !isNumber(index)) {
      throw new Error("No name found in sub definition");
    }
    result[name] = index;
    return result;
  }, {}), value.length),
  [TypeDefInfo.Si]: (registry, value) => getTypeClass(registry, registry.lookup.getTypeDef(value.type)),
  [TypeDefInfo.Struct]: (_registry, value) => Struct.with(getTypeClassMap(value), value.alias),
  [TypeDefInfo.Tuple]: (_registry, value) => Tuple.with(getTypeClassArray(value)),
  [TypeDefInfo.UInt]: (_registry, value) => createInt(UInt, value),
  [TypeDefInfo.Vec]: (_registry, { sub }) => {
    if (!sub || Array.isArray(sub)) {
      throw new Error("Expected type information for vector");
    }
    return sub.type === "u8" ? Bytes : Vec.with(getTypeDefType(sub));
  },
  [TypeDefInfo.VecFixed]: (_registry, { displayName, length, sub }) => {
    if (!isNumber(length) || !sub || Array.isArray(sub)) {
      throw new Error("Expected length & type information for fixed vector");
    }
    return sub.type === "u8" ? U8aFixed.with(length * 8, displayName) : VecFixed.with(getTypeDefType(sub), length);
  },
  [TypeDefInfo.WrapperKeepOpaque]: (_registry, value) => createWithSub(WrapperKeepOpaque, value),
  [TypeDefInfo.WrapperOpaque]: (_registry, value) => createWithSub(WrapperOpaque, value)
};
function constructTypeClass(registry, typeDef) {
  try {
    const Type2 = infoMapping[typeDef.info](registry, typeDef);
    if (!Type2) {
      throw new Error("No class created");
    }
    if (!Type2.__fallbackType && typeDef.fallbackType) {
      Type2.__fallbackType = typeDef.fallbackType;
    }
    return Type2;
  } catch (error) {
    throw new Error(`Unable to construct class from ${stringify(typeDef)}: ${error.message}`);
  }
}
function getTypeClass(registry, typeDef) {
  return registry.getUnsafe(typeDef.type, false, typeDef);
}
function createClassUnsafe(registry, type) {
  return (
    // just retrieve via name, no creation via typeDef
    registry.getUnsafe(type) || // we don't have an existing type, create the class via typeDef
    getTypeClass(registry, registry.isLookupType(type) ? registry.lookup.getTypeDef(type) : getTypeDef(type))
  );
}

// node_modules/@polkadot/types-create/create/type.js
function checkInstance(created, matcher) {
  const u8a = created.toU8a();
  const rawType = created.toRawType();
  const isOk = (
    // full match, all ok
    u8aEq(u8a, matcher) || // on a length-prefixed type, just check the actual length
    ["Bytes", "Text", "Type"].includes(rawType) && matcher.length === created.length || // when the created is empty and matcher is also empty, let it slide...
    created.isEmpty && matcher.every((v) => !v)
  );
  if (!isOk) {
    throw new Error(`${rawType}:: Decoded input doesn't match input, received ${u8aToHex(matcher, 512)} (${matcher.length} bytes), created ${u8aToHex(u8a, 512)} (${u8a.length} bytes)`);
  }
}
function checkPedantic(created, [value]) {
  if (isU8a(value)) {
    checkInstance(created, value);
  } else if (isHex(value)) {
    checkInstance(created, u8aToU8a(value));
  }
}
function initType(registry, Type2, params = [], { blockHash, isFallback, isOptional, isPedantic } = {}) {
  const created = new (isOptional ? Option.with(Type2) : Type2)(registry, ...params);
  isPedantic && checkPedantic(created, params);
  if (blockHash) {
    created.createdAtHash = createTypeUnsafe(registry, "BlockHash", [blockHash]);
  }
  if (isFallback) {
    created.isStorageFallback = true;
  }
  return created;
}
function createTypeUnsafe(registry, type, params = [], options = {}) {
  let Clazz = null;
  let firstError = null;
  try {
    Clazz = createClassUnsafe(registry, type);
    return initType(registry, Clazz, params, options);
  } catch (error) {
    firstError = new Error(`createType(${type}):: ${error.message}`);
  }
  if (Clazz?.__fallbackType) {
    try {
      Clazz = createClassUnsafe(registry, Clazz.__fallbackType);
      return initType(registry, Clazz, params, options);
    } catch {
    }
  }
  throw firstError;
}

// node_modules/@polkadot/types-create/util/encodeTypes.js
var stringIdentity = (value) => value.toString();
var INFO_WRAP = ["BTreeMap", "BTreeSet", "Compact", "HashMap", "Option", "Result", "Vec"];
function paramsNotation(outer, inner, transform = stringIdentity) {
  return `${outer}${inner ? `<${(Array.isArray(inner) ? inner : [inner]).map(transform).join(", ")}>` : ""}`;
}
function encodeWithParams(registry, typeDef, outer) {
  const { info: info6, sub } = typeDef;
  switch (info6) {
    case TypeDefInfo.BTreeMap:
    case TypeDefInfo.BTreeSet:
    case TypeDefInfo.Compact:
    case TypeDefInfo.HashMap:
    case TypeDefInfo.Linkage:
    case TypeDefInfo.Option:
    case TypeDefInfo.Range:
    case TypeDefInfo.RangeInclusive:
    case TypeDefInfo.Result:
    case TypeDefInfo.Vec:
    case TypeDefInfo.WrapperKeepOpaque:
    case TypeDefInfo.WrapperOpaque:
      return paramsNotation(outer, sub, (p) => encodeTypeDef(registry, p));
  }
  throw new Error(`Unable to encode ${stringify(typeDef)} with params`);
}
function encodeSubTypes(registry, sub, asEnum, extra) {
  const names = sub.map(({ name }) => name);
  if (!names.every((n) => !!n)) {
    throw new Error(`Subtypes does not have consistent names, ${names.join(", ")}`);
  }
  const inner = objectSpread({}, extra);
  for (let i = 0, count = sub.length; i < count; i++) {
    const def = sub[i];
    if (!def.name) {
      throw new Error(`No name found in ${stringify(def)}`);
    }
    inner[def.name] = encodeTypeDef(registry, def);
  }
  return stringify(asEnum ? { _enum: inner } : inner);
}
var encoders = {
  [TypeDefInfo.BTreeMap]: (registry, typeDef) => encodeWithParams(registry, typeDef, "BTreeMap"),
  [TypeDefInfo.BTreeSet]: (registry, typeDef) => encodeWithParams(registry, typeDef, "BTreeSet"),
  [TypeDefInfo.Compact]: (registry, typeDef) => encodeWithParams(registry, typeDef, "Compact"),
  [TypeDefInfo.DoNotConstruct]: (registry, { displayName, lookupIndex, lookupName }) => `DoNotConstruct<${lookupName || displayName || (isUndefined(lookupIndex) ? "Unknown" : registry.createLookupType(lookupIndex))}>`,
  [TypeDefInfo.Enum]: (registry, { sub }) => {
    if (!Array.isArray(sub)) {
      throw new Error("Unable to encode Enum type");
    }
    return sub.every(({ type }) => type === "Null") ? stringify({ _enum: sub.map(({ name }, index) => `${name || `Empty${index}`}`) }) : encodeSubTypes(registry, sub, true);
  },
  [TypeDefInfo.HashMap]: (registry, typeDef) => encodeWithParams(registry, typeDef, "HashMap"),
  [TypeDefInfo.Int]: (_registry, { length = 32 }) => `Int<${length}>`,
  [TypeDefInfo.Linkage]: (registry, typeDef) => encodeWithParams(registry, typeDef, "Linkage"),
  [TypeDefInfo.Null]: (_registry, _typeDef) => "Null",
  [TypeDefInfo.Option]: (registry, typeDef) => encodeWithParams(registry, typeDef, "Option"),
  [TypeDefInfo.Plain]: (_registry, { displayName, type }) => displayName || type,
  [TypeDefInfo.Range]: (registry, typeDef) => encodeWithParams(registry, typeDef, "Range"),
  [TypeDefInfo.RangeInclusive]: (registry, typeDef) => encodeWithParams(registry, typeDef, "RangeInclusive"),
  [TypeDefInfo.Result]: (registry, typeDef) => encodeWithParams(registry, typeDef, "Result"),
  [TypeDefInfo.Set]: (_registry, { length = 8, sub }) => {
    if (!Array.isArray(sub)) {
      throw new Error("Unable to encode Set type");
    }
    return stringify({
      _set: sub.reduce((all3, { index, name }, count) => objectSpread(all3, { [`${name || `Unknown${index || count}`}`]: index || count }), { _bitLength: length || 8 })
    });
  },
  [TypeDefInfo.Si]: (_registry, { lookupName, type }) => lookupName || type,
  [TypeDefInfo.Struct]: (registry, { alias: alias2, sub }) => {
    if (!Array.isArray(sub)) {
      throw new Error("Unable to encode Struct type");
    }
    return encodeSubTypes(registry, sub, false, alias2 ? {
      _alias: [...alias2.entries()].reduce((all3, [k, v]) => objectSpread(all3, { [k]: v }), {})
    } : {});
  },
  [TypeDefInfo.Tuple]: (registry, { sub }) => {
    if (!Array.isArray(sub)) {
      throw new Error("Unable to encode Tuple type");
    }
    return `(${sub.map((type) => encodeTypeDef(registry, type)).join(",")})`;
  },
  [TypeDefInfo.UInt]: (_registry, { length = 32 }) => `UInt<${length}>`,
  [TypeDefInfo.Vec]: (registry, typeDef) => encodeWithParams(registry, typeDef, "Vec"),
  [TypeDefInfo.VecFixed]: (_registry, { length, sub }) => {
    if (!isNumber(length) || !sub || Array.isArray(sub)) {
      throw new Error("Unable to encode VecFixed type");
    }
    return `[${sub.type};${length}]`;
  },
  [TypeDefInfo.WrapperKeepOpaque]: (registry, typeDef) => encodeWithParams(registry, typeDef, "WrapperKeepOpaque"),
  [TypeDefInfo.WrapperOpaque]: (registry, typeDef) => encodeWithParams(registry, typeDef, "WrapperOpaque")
};
function encodeType(registry, typeDef, withLookup = true) {
  return withLookup && typeDef.lookupName ? typeDef.lookupName : encoders[typeDef.info](registry, typeDef);
}
function encodeTypeDef(registry, typeDef) {
  return typeDef.displayName && !INFO_WRAP.some((i) => typeDef.displayName === i) ? typeDef.displayName : encodeType(registry, typeDef);
}
function withTypeString(registry, typeDef) {
  return objectSpread({}, typeDef, {
    type: encodeType(registry, typeDef, false)
  });
}

// node_modules/@polkadot/types-create/util/xcm.js
var XCM_MAPPINGS = ["AssetInstance", "Fungibility", "Junction", "Junctions", "MultiAsset", "MultiAssetFilter", "MultiLocation", "Response", "WildFungibility", "WildMultiAsset", "Xcm", "XcmError", "XcmOrder"];
function mapXcmTypes(version) {
  return XCM_MAPPINGS.reduce((all3, key) => objectSpread(all3, { [key]: `${key}${version}` }), {});
}

// node_modules/@polkadot/types/interfaces/xcm/v0.js
var v02 = {
  FungibilityV0: "FungibilityV1",
  WildFungibilityV0: "WildFungibilityV1",
  AssetInstanceV0: {
    _enum: {
      Undefined: "Null",
      Index8: "u8",
      Index16: "Compact<u16>",
      Index32: "Compact<u32>",
      Index64: "Compact<u64>",
      Index128: "Compact<u128>",
      Array4: "[u8; 4]",
      Array8: "[u8; 8]",
      Array16: "[u8; 16]",
      Array32: "[u8; 32]",
      Blob: "Vec<u8>"
    }
  },
  JunctionV0: {
    _enum: {
      Parent: "Null",
      Parachain: "Compact<u32>",
      AccountId32: {
        network: "NetworkId",
        id: "AccountId"
      },
      AccountIndex64: {
        network: "NetworkId",
        index: "Compact<u64>"
      },
      AccountKey20: {
        network: "NetworkId",
        key: "[u8; 20]"
      },
      PalletInstance: "u8",
      GeneralIndex: "Compact<u128>",
      GeneralKey: "Vec<u8>",
      OnlyChild: "Null",
      Plurality: {
        id: "BodyId",
        part: "BodyPart"
      }
    }
  },
  MultiAssetV0: {
    _enum: {
      None: "Null",
      All: "Null",
      AllFungible: "Null",
      AllNonFungible: "Null",
      AllAbstractFungible: "Vec<u8>",
      AllAbstractNonFungible: "Vec<u8>",
      AllConcreteFungible: "MultiLocationV0",
      AllConcreteNonFungible: "MultiLocationV0",
      AbstractFungible: {
        id: "Vec<u8>",
        instance: "Compact<u128>"
      },
      AbstractNonFungible: {
        class: "Vec<u8>",
        instance: "AssetInstanceV0"
      },
      ConcreteFungible: {
        id: "MultiLocationV0",
        amount: "Compact<u128>"
      },
      ConcreteNonFungible: {
        class: "MultiLocationV0",
        instance: "AssetInstanceV0"
      }
    }
  },
  MultiLocationV0: {
    _enum: {
      Here: "Null",
      X1: "JunctionV0",
      X2: "(JunctionV0, JunctionV0)",
      X3: "(JunctionV0, JunctionV0, JunctionV0)",
      X4: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
      X5: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
      X6: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
      X7: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)",
      X8: "(JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0, JunctionV0)"
    }
  },
  OriginKindV0: {
    _enum: ["Native", "SovereignAccount", "Superuser", "Xcm"]
  },
  ResponseV0: {
    _enum: {
      Assets: "Vec<MultiAssetV0>"
    }
  },
  XcmV0: {
    _enum: {
      WithdrawAsset: {
        assets: "Vec<MultiAssetV0>",
        effects: "Vec<XcmOrderV0>"
      },
      ReserveAssetDeposit: {
        assets: "Vec<MultiAssetV0>",
        effects: "Vec<XcmOrderV0>"
      },
      ReceiveTeleportedAsset: {
        assets: "Vec<MultiAssetV0>",
        effects: "Vec<XcmOrderV0>"
      },
      QueryResponse: {
        queryId: "Compact<u64>",
        response: "ResponseV0"
      },
      TransferAsset: {
        assets: "Vec<MultiAssetV0>",
        dest: "MultiLocationV0"
      },
      TransferReserveAsset: {
        assets: "Vec<MultiAssetV0>",
        dest: "MultiLocationV0",
        effects: "Vec<XcmOrderV0>"
      },
      Transact: {
        originType: "XcmOriginKind",
        requireWeightAtMost: "u64",
        call: "DoubleEncodedCall"
      },
      HrmpNewChannelOpenRequest: {
        sender: "Compact<u32>",
        maxMessageSize: "Compact<u32>",
        maxCapacity: "Compact<u32>"
      },
      HrmpChannelAccepted: {
        recipient: "Compact<u32>"
      },
      HrmpChannelClosing: {
        initiator: "Compact<u32>",
        sender: "Compact<u32>",
        recipient: "Compact<u32>"
      },
      RelayedFrom: {
        who: "MultiLocationV0",
        message: "XcmV0"
      }
    }
  },
  XcmErrorV0: {
    _enum: {
      Undefined: "Null",
      Overflow: "Null",
      Unimplemented: "Null",
      UnhandledXcmVersion: "Null",
      UnhandledXcmMessage: "Null",
      UnhandledEffect: "Null",
      EscalationOfPrivilege: "Null",
      UntrustedReserveLocation: "Null",
      UntrustedTeleportLocation: "Null",
      DestinationBufferOverflow: "Null",
      SendFailed: "Null",
      CannotReachDestination: "(MultiLocation, Xcm)",
      MultiLocationFull: "Null",
      FailedToDecode: "Null",
      BadOrigin: "Null",
      ExceedsMaxMessageSize: "Null",
      FailedToTransactAsset: "Null",
      WeightLimitReached: "Weight",
      Wildcard: "Null",
      TooMuchWeightRequired: "Null",
      NotHoldingFees: "Null",
      WeightNotComputable: "Null",
      Barrier: "Null",
      NotWithdrawable: "Null",
      LocationCannotHold: "Null",
      TooExpensive: "Null",
      AssetNotFound: "Null",
      RecursionLimitReached: "Null"
    }
  },
  XcmOrderV0: {
    _enum: {
      Null: "Null",
      DepositAsset: {
        assets: "Vec<MultiAssetV0>",
        dest: "MultiLocationV0"
      },
      DepositReserveAsset: {
        assets: "Vec<MultiAssetV0>",
        dest: "MultiLocationV0",
        effects: "Vec<XcmOrderV0>"
      },
      ExchangeAsset: {
        give: "Vec<MultiAssetV0>",
        receive: "Vec<MultiAssetV0>"
      },
      InitiateReserveWithdraw: {
        assets: "Vec<MultiAssetV0>",
        reserve: "MultiLocationV0",
        effects: "Vec<XcmOrderV0>"
      },
      InitiateTeleport: {
        assets: "Vec<MultiAssetV0>",
        dest: "MultiLocationV0",
        effects: "Vec<XcmOrderV0>"
      },
      QueryHolding: {
        queryId: "Compact<u64>",
        dest: "MultiLocationV0",
        assets: "Vec<MultiAssetV0>"
      },
      BuyExecution: {
        fees: "MultiAssetV0",
        weight: "u64",
        debt: "u64",
        haltOnError: "bool",
        xcm: "Vec<XcmV0>"
      }
    }
  }
};

// node_modules/@polkadot/types/interfaces/xcm/v1.js
var v16 = {
  AssetInstanceV1: {
    _enum: {
      Undefined: "Null",
      Index: "Compact<u128>",
      Array4: "[u8; 4]",
      Array8: "[u8; 8]",
      Array16: "[u8; 16]",
      Array32: "[u8; 32]",
      Blob: "Bytes"
    }
  },
  FungibilityV1: {
    _enum: {
      Fungible: "Compact<u128>",
      NonFungible: "AssetInstanceV1"
    }
  },
  JunctionV1: {
    _enum: {
      Parachain: "Compact<u32>",
      AccountId32: {
        network: "NetworkId",
        id: "AccountId"
      },
      AccountIndex64: {
        network: "NetworkId",
        index: "Compact<u64>"
      },
      AccountKey20: {
        network: "NetworkId",
        key: "[u8; 20]"
      },
      PalletInstance: "u8",
      GeneralIndex: "Compact<u128>",
      GeneralKey: "Vec<u8>",
      OnlyChild: "Null",
      Plurality: {
        id: "BodyId",
        part: "BodyPart"
      }
    }
  },
  JunctionsV1: {
    _enum: {
      Here: "Null",
      X1: "JunctionV1",
      X2: "(JunctionV1, JunctionV1)",
      X3: "(JunctionV1, JunctionV1, JunctionV1)",
      X4: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
      X5: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
      X6: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
      X7: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)",
      X8: "(JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1, JunctionV1)"
    }
  },
  MultiAssetsV1: "Vec<MultiAssetV1>",
  MultiAssetV1: {
    id: "XcmAssetId",
    fungibility: "FungibilityV1"
  },
  MultiAssetFilterV1: {
    _enum: {
      Definite: "MultiAssetsV1",
      Wild: "WildMultiAssetV1"
    }
  },
  MultiLocationV1: {
    parents: "u8",
    interior: "JunctionsV1"
  },
  OriginKindV1: "OriginKindV0",
  ResponseV1: {
    _enum: {
      Assets: "MultiAssetsV1"
    }
  },
  WildFungibilityV1: {
    _enum: ["Fungible", "NonFungible"]
  },
  WildMultiAssetV1: {
    _enum: {
      All: "Null",
      AllOf: {
        id: "XcmAssetId",
        fungibility: "WildFungibilityV1"
      }
    }
  },
  XcmV1: {
    _enum: {
      WithdrawAsset: {
        assets: "MultiAssetsV1",
        effects: "Vec<XcmOrderV1>"
      },
      ReserveAssetDeposit: {
        assets: "MultiAssetsV1",
        effects: "Vec<XcmOrderV1>"
      },
      ReceiveTeleportedAsset: {
        assets: "MultiAssetsV1",
        effects: "Vec<XcmOrderV1>"
      },
      QueryResponse: {
        queryId: "Compact<u64>",
        response: "ResponseV1"
      },
      TransferAsset: {
        assets: "MultiAssetsV1",
        dest: "MultiLocationV1"
      },
      TransferReserveAsset: {
        assets: "MultiAssetsV1",
        dest: "MultiLocationV1",
        effects: "Vec<XcmOrderV1>"
      },
      Transact: {
        originType: "XcmOriginKind",
        requireWeightAtMost: "u64",
        call: "DoubleEncodedCall"
      },
      HrmpNewChannelOpenRequest: {
        sender: "Compact<u32>",
        maxMessageSize: "Compact<u32>",
        maxCapacity: "Compact<u32>"
      },
      HrmpChannelAccepted: {
        recipient: "Compact<u32>"
      },
      HrmpChannelClosing: {
        initiator: "Compact<u32>",
        sender: "Compact<u32>",
        recipient: "Compact<u32>"
      },
      RelayedFrom: {
        who: "MultiLocationV1",
        message: "XcmV1"
      }
    }
  },
  XcmErrorV1: {
    _enum: {
      Undefined: "Null",
      Overflow: "Null",
      Unimplemented: "Null",
      UnhandledXcmVersion: "Null",
      UnhandledXcmMessage: "Null",
      UnhandledEffect: "Null",
      EscalationOfPrivilege: "Null",
      UntrustedReserveLocation: "Null",
      UntrustedTeleportLocation: "Null",
      DestinationBufferOverflow: "Null",
      SendFailed: "Null",
      CannotReachDestination: "(MultiLocationV1, XcmV1)",
      MultiLocationFull: "Null",
      FailedToDecode: "Null",
      BadOrigin: "Null",
      ExceedsMaxMessageSize: "Null",
      FailedToTransactAsset: "Null",
      WeightLimitReached: "Weight",
      Wildcard: "Null",
      TooMuchWeightRequired: "Null",
      NotHoldingFees: "Null",
      WeightNotComputable: "Null",
      Barrier: "Null",
      NotWithdrawable: "Null",
      LocationCannotHold: "Null",
      TooExpensive: "Null",
      AssetNotFound: "Null",
      DestinationUnsupported: "Null",
      RecursionLimitReached: "Null"
    }
  },
  XcmOrderV1: {
    _enum: {
      Noop: "Null",
      DepositAsset: {
        assets: "MultiAssetFilterV1",
        maxAssets: "u32",
        beneficiary: "MultiLocationV1"
      },
      DepositReserveAsset: {
        assets: "MultiAssetFilterV1",
        maxAssets: "u32",
        dest: "MultiLocationV1",
        effects: "Vec<XcmOrderV1>"
      },
      ExchangeAsset: {
        give: "MultiAssetFilterV1",
        receive: "MultiAssetsV1"
      },
      InitiateReserveWithdraw: {
        assets: "MultiAssetFilterV1",
        reserve: "MultiLocationV1",
        effects: "Vec<XcmOrderV1>"
      },
      InitiateTeleport: {
        assets: "MultiAssetFilterV1",
        dest: "MultiLocationV1",
        effects: "Vec<XcmOrderV1>"
      },
      QueryHolding: {
        queryId: "Compact<u64>",
        dest: "MultiLocationV1",
        assets: "MultiAssetFilterV1"
      },
      BuyExecution: {
        fees: "MultiAssetV1",
        weight: "u64",
        debt: "u64",
        haltOnError: "bool",
        instructions: "Vec<XcmV1>"
      }
    }
  }
};

// node_modules/@polkadot/types/interfaces/xcm/v2.js
var v2 = {
  AssetInstanceV2: "AssetInstanceV1",
  FungibilityV2: "FungibilityV1",
  JunctionV2: "JunctionV1",
  JunctionsV2: "JunctionsV1",
  MultiAssetsV2: "MultiAssetsV1",
  MultiAssetV2: "MultiAssetV1",
  MultiAssetFilterV2: "MultiAssetFilterV1",
  MultiLocationV2: "MultiLocationV1",
  OriginKindV2: "OriginKindV1",
  WildFungibilityV2: "WildFungibilityV1",
  ResponseV2: {
    _enum: {
      Null: "Null",
      Assets: "MultiAssetsV2",
      ExecutionResult: "ResponseV2Result"
    }
  },
  ResponseV2Error: "(u32, XcmErrorV2)",
  ResponseV2Result: "Result<Null, ResponseV2Error>",
  WeightLimitV2: {
    _enum: {
      Unlimited: "Null",
      Limited: "Compact<u64>"
    }
  },
  InstructionV2: {
    _enum: {
      WithdrawAsset: "MultiAssetsV2",
      ReserveAssetDeposited: "MultiAssetsV2",
      ReceiveTeleportedAsset: "MultiAssetsV2",
      QueryResponse: {
        queryId: "Compact<u64>",
        response: "ResponseV2",
        maxWeight: "Compact<u64>"
      },
      TransferAsset: {
        assets: "MultiAssetsV2",
        beneficiary: "MultiLocationV2"
      },
      TransferReserveAsset: {
        assets: "MultiAssetsV2",
        dest: "MultiLocationV2",
        xcm: "XcmV2"
      },
      Transact: {
        originType: "OriginKindV2",
        requireWeightAtMost: "u64",
        call: "DoubleEncodedCall"
      },
      HrmpNewChannelOpenRequest: {
        sender: "Compact<u32>",
        maxMessageSize: "Compact<u32>",
        maxCapacity: "Compact<u32>"
      },
      HrmpChannelAccepted: {
        recipient: "Compact<u32>"
      },
      HrmpChannelClosing: {
        initiator: "Compact<u32>",
        sender: "Compact<u32>",
        recipient: "Compact<u32>"
      },
      ClearOrigin: "Null",
      DescendOrigin: "InteriorMultiLocation",
      ReportError: {
        queryId: "Compact<u64>",
        dest: "MultiLocationV2",
        maxResponseWeight: "Compact<u64>"
      },
      DepositAsset: {
        assets: "MultiAssetFilterV2",
        maxAssets: "u32",
        beneficiary: "MultiLocationV2"
      },
      DepositReserveAsset: {
        assets: "MultiAssetFilterV2",
        maxAssets: "u32",
        dest: "MultiLocationV2",
        xcm: "XcmV2"
      },
      ExchangeAsset: {
        give: "MultiAssetFilterV2",
        receive: "MultiAssetsV2"
      },
      InitiateReserveWithdraw: {
        assets: "MultiAssetFilterV2",
        reserve: "MultiLocationV2",
        xcm: "XcmV2"
      },
      InitiateTeleport: {
        assets: "MultiAssetFilterV2",
        dest: "MultiLocationV2",
        xcm: "XcmV2"
      },
      QueryHolding: {
        query_id: "Compact<u64>",
        dest: "MultiLocationV2",
        assets: "MultiAssetFilterV2",
        maxResponse_Weight: "Compact<u64>"
      },
      BuyExecution: {
        fees: "MultiAssetV2",
        weightLimit: "WeightLimitV2"
      },
      RefundSurplus: "Null",
      SetErrorHandler: "XcmV2",
      SetAppendix: "XcmV2",
      ClearError: "Null",
      ClaimAsset: {
        assets: "MultiAssetsV2",
        ticket: "MultiLocationV2"
      },
      Trap: "u64"
    }
  },
  WildMultiAssetV2: "WildMultiAssetV1",
  XcmV2: "Vec<InstructionV2>",
  XcmErrorV2: {
    _enum: {
      Undefined: "Null",
      Overflow: "Null",
      Unimplemented: "Null",
      UnhandledXcmVersion: "Null",
      UnhandledXcmMessage: "Null",
      UnhandledEffect: "Null",
      EscalationOfPrivilege: "Null",
      UntrustedReserveLocation: "Null",
      UntrustedTeleportLocation: "Null",
      DestinationBufferOverflow: "Null",
      MultiLocationFull: "Null",
      MultiLocationNotInvertible: "Null",
      FailedToDecode: "Null",
      BadOrigin: "Null",
      ExceedsMaxMessageSize: "Null",
      FailedToTransactAsset: "Null",
      WeightLimitReached: "Weight",
      Wildcard: "Null",
      TooMuchWeightRequired: "Null",
      NotHoldingFees: "Null",
      WeightNotComputable: "Null",
      Barrier: "Null",
      NotWithdrawable: "Null",
      LocationCannotHold: "Null",
      TooExpensive: "Null",
      AssetNotFound: "Null",
      DestinationUnsupported: "Null",
      RecursionLimitReached: "Null",
      Transport: "Null",
      Unroutable: "Null",
      UnknownWeightRequired: "Null",
      Trap: "u64",
      UnknownClaim: "Null",
      InvalidLocation: "Null"
    }
  },
  XcmOrderV2: "XcmOrderV1"
};

// node_modules/@polkadot/types/interfaces/xcm/definitions.js
var XCM_LATEST = "V2";
var xcm = {
  XcmOrigin: {
    _enum: {
      Xcm: "MultiLocation"
    }
  },
  XcmpMessageFormat: {
    _enum: ["ConcatenatedVersionedXcm", "ConcatenatedEncodedBlob", "Signals"]
  },
  XcmAssetId: {
    _enum: {
      Concrete: "MultiLocation",
      Abstract: "Bytes"
    }
  },
  InboundStatus: {
    _enum: ["Ok", "Suspended"]
  },
  OutboundStatus: {
    _enum: ["Ok", "Suspended"]
  },
  MultiAssets: "Vec<MultiAsset>"
};
var location = {
  BodyId: {
    _enum: {
      Unit: "Null",
      Named: "Vec<u8>",
      Index: "Compact<u32>",
      Executive: "Null",
      Technical: "Null",
      Legislative: "Null",
      Judicial: "Null"
    }
  },
  BodyPart: {
    _enum: {
      Voice: "Null",
      Members: "Compact<u32>",
      Fraction: {
        nom: "Compact<u32>",
        denom: "Compact<u32>"
      },
      AtLeastProportion: {
        nom: "Compact<u32>",
        denom: "Compact<u32>"
      },
      MoreThanProportion: {
        nom: "Compact<u32>",
        denom: "Compact<u32>"
      }
    }
  },
  InteriorMultiLocation: "Junctions",
  NetworkId: {
    _enum: {
      Any: "Null",
      Named: "Vec<u8>",
      Polkadot: "Null",
      Kusama: "Null"
    }
  }
};
var definitions_default59 = {
  rpc: {},
  types: __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, location), xcm), v02), v16), v2), mapXcmTypes(XCM_LATEST)), {
    DoubleEncodedCall: {
      encoded: "Vec<u8>"
    },
    XcmOriginKind: {
      _enum: ["Native", "SovereignAccount", "Superuser", "Xcm"]
    },
    Outcome: {
      _enum: {
        Complete: "Weight",
        Incomplete: "(Weight, XcmErrorV0)",
        Error: "XcmErrorV0"
      }
    },
    QueryId: "u64",
    QueryStatus: {
      _enum: {
        Pending: {
          responder: "VersionedMultiLocation",
          maybeNotify: "Option<(u8, u8)>",
          timeout: "BlockNumber"
        },
        Ready: {
          response: "VersionedResponse",
          at: "BlockNumber"
        }
      }
    },
    QueueConfigData: {
      suspendThreshold: "u32",
      dropThreshold: "u32",
      resumeThreshold: "u32",
      thresholdWeight: "Weight",
      weightRestrictDecay: "Weight"
    },
    VersionMigrationStage: {
      _enum: {
        MigrateSupportedVersion: "Null",
        MigrateVersionNotifiers: "Null",
        NotifyCurrentTargets: "Option<Bytes>",
        MigrateAndNotifyOldTargets: "Null"
      }
    },
    VersionedMultiAsset: {
      _enum: {
        V0: "MultiAssetV0",
        V1: "MultiAssetV1",
        V2: "MultiAssetV2"
      }
    },
    VersionedMultiAssets: {
      _enum: {
        V0: "Vec<MultiAssetV0>",
        V1: "MultiAssetsV1",
        V2: "MultiAssetsV2"
      }
    },
    VersionedMultiLocation: {
      _enum: {
        V0: "MultiLocationV0",
        V1: "MultiLocationV1",
        V2: "MultiLocationV2"
      }
    },
    VersionedResponse: {
      V0: "ResponseV0",
      V1: "ResponseV1",
      V2: "ResponseV2"
    },
    VersionedXcm: {
      _enum: {
        V0: "XcmV0",
        V1: "XcmV1",
        V2: "XcmV2"
      }
    },
    XcmVersion: "u32"
  })
};

// node_modules/@polkadot/types/interfaces/contractsAbi/definitions.js
var layout = {
  ContractCryptoHasher: {
    _enum: ["Blake2x256", "Sha2x256", "Keccak256"]
  },
  ContractDiscriminant: "u32",
  ContractLayoutArray: {
    offset: "ContractLayoutKey",
    len: "u32",
    cellsPerElem: "u64",
    layout: "ContractStorageLayout"
  },
  ContractLayoutCell: {
    key: "ContractLayoutKey",
    ty: "SiLookupTypeId"
  },
  ContractLayoutEnum: {
    dispatchKey: "ContractLayoutKey",
    variants: "BTreeMap<ContractDiscriminant, ContractLayoutStruct>"
  },
  ContractLayoutHash: {
    offset: "ContractLayoutKey",
    strategy: "ContractLayoutHashingStrategy",
    layout: "ContractStorageLayout"
  },
  ContractLayoutHashingStrategy: {
    hasher: "ContractCryptoHasher",
    postfix: "Vec<u8>",
    prefix: "Vec<u8>"
  },
  ContractLayoutKey: "[u8; 32]",
  ContractLayoutStruct: {
    fields: "Vec<ContractLayoutStructField>"
  },
  ContractLayoutStructField: {
    layout: "ContractStorageLayout",
    name: "Text"
  },
  ContractStorageLayout: {
    _enum: {
      Cell: "ContractLayoutCell",
      Hash: "ContractLayoutHash",
      Array: "ContractLayoutArray",
      Struct: "ContractLayoutStruct",
      Enum: "ContractLayoutEnum"
    }
  }
};
var spec = {
  ContractConstructorSpecV0: {
    name: "Text",
    selector: "ContractSelector",
    args: "Vec<ContractMessageParamSpecV0>",
    docs: "Vec<Text>"
  },
  ContractConstructorSpecV1: {
    name: "Vec<Text>",
    selector: "ContractSelector",
    args: "Vec<ContractMessageParamSpecV0>",
    docs: "Vec<Text>"
  },
  ContractConstructorSpecV2: {
    label: "Text",
    selector: "ContractSelector",
    args: "Vec<ContractMessageParamSpecV2>",
    docs: "Vec<Text>"
  },
  ContractConstructorSpecV3: {
    label: "Text",
    selector: "ContractSelector",
    payable: "bool",
    args: "Vec<ContractMessageParamSpecV2>",
    docs: "Vec<Text>"
  },
  ContractConstructorSpecV4: {
    label: "Text",
    selector: "ContractSelector",
    payable: "bool",
    args: "Vec<ContractMessageParamSpecV2>",
    docs: "Vec<Text>",
    default: "bool",
    returnType: "Option<ContractTypeSpec>"
  },
  ContractContractSpecV0: {
    constructors: "Vec<ContractConstructorSpecV0>",
    messages: "Vec<ContractMessageSpecV0>",
    events: "Vec<ContractEventSpecV0>",
    docs: "Vec<Text>"
  },
  ContractContractSpecV1: {
    constructors: "Vec<ContractConstructorSpecV1>",
    messages: "Vec<ContractMessageSpecV1>",
    events: "Vec<ContractEventSpecV1>",
    docs: "Vec<Text>"
  },
  ContractContractSpecV2: {
    constructors: "Vec<ContractConstructorSpecV2>",
    messages: "Vec<ContractMessageSpecV2>",
    events: "Vec<ContractEventSpecV2>",
    docs: "Vec<Text>"
  },
  ContractContractSpecV3: {
    constructors: "Vec<ContractConstructorSpecV3>",
    messages: "Vec<ContractMessageSpecV2>",
    events: "Vec<ContractEventSpecV2>",
    docs: "Vec<Text>"
  },
  ContractContractSpecV4: {
    constructors: "Vec<ContractConstructorSpecV4>",
    messages: "Vec<ContractMessageSpecV3>",
    events: "Vec<ContractEventSpecV2>",
    docs: "Vec<Text>",
    environment: "ContractEnvironmentV4"
  },
  ContractContractSpecV5: {
    constructors: "Vec<ContractConstructorSpecV4>",
    messages: "Vec<ContractMessageSpecV3>",
    events: "Vec<ContractEventSpecV3>",
    docs: "Vec<Text>",
    environment: "ContractEnvironmentV4"
  },
  ContractDisplayName: "SiPath",
  ContractEventParamSpecV0: {
    name: "Text",
    indexed: "bool",
    type: "ContractTypeSpec",
    docs: "Vec<Text>"
  },
  ContractEventParamSpecV2: {
    label: "Text",
    indexed: "bool",
    type: "ContractTypeSpec",
    docs: "Vec<Text>"
  },
  ContractEventSpecV0: {
    name: "Text",
    args: "Vec<ContractEventParamSpecV0>",
    docs: "Vec<Text>"
  },
  ContractEventSpecV1: {
    name: "Text",
    args: "Vec<ContractEventParamSpecV0>",
    docs: "Vec<Text>"
  },
  ContractEventSpecV2: {
    label: "Text",
    args: "Vec<ContractEventParamSpecV2>",
    docs: "Vec<Text>"
  },
  ContractEventSpecV3: {
    label: "Text",
    args: "Vec<ContractEventParamSpecV2>",
    docs: "Vec<Text>",
    module_path: "Text",
    signature_topic: "Option<[u8; 32]>"
  },
  ContractMessageParamSpecV0: {
    name: "Text",
    type: "ContractTypeSpec"
  },
  ContractMessageParamSpecV2: {
    label: "Text",
    type: "ContractTypeSpec"
  },
  ContractMessageSpecV0: {
    name: "Text",
    selector: "ContractSelector",
    mutates: "bool",
    payable: "bool",
    args: "Vec<ContractMessageParamSpecV0>",
    returnType: "Option<ContractTypeSpec>",
    docs: "Vec<Text>"
  },
  ContractMessageSpecV1: {
    name: "Vec<Text>",
    selector: "ContractSelector",
    mutates: "bool",
    payable: "bool",
    args: "Vec<ContractMessageParamSpecV0>",
    returnType: "Option<ContractTypeSpec>",
    docs: "Vec<Text>"
  },
  ContractMessageSpecV2: {
    label: "Text",
    selector: "ContractSelector",
    mutates: "bool",
    payable: "bool",
    args: "Vec<ContractMessageParamSpecV2>",
    returnType: "Option<ContractTypeSpec>",
    docs: "Vec<Text>"
  },
  ContractMessageSpecV3: {
    label: "Text",
    selector: "ContractSelector",
    mutates: "bool",
    payable: "bool",
    args: "Vec<ContractMessageParamSpecV2>",
    returnType: "Option<ContractTypeSpec>",
    docs: "Vec<Text>",
    default: "bool"
  },
  ContractSelector: "[u8; 4]",
  ContractTypeSpec: {
    type: "SiLookupTypeId",
    displayName: "ContractDisplayName"
  }
};
var latest = {
  ContractConstructorSpecLatest: "ContractConstructorSpecV4",
  ContractEventSpecLatest: "ContractEventSpecV3",
  ContractEventParamSpecLatest: "ContractEventParamSpecV2",
  ContractMessageParamSpecLatest: "ContractMessageParamSpecV2",
  ContractMessageSpecLatest: "ContractMessageSpecV3",
  ContractMetadataLatest: "ContractMetadataV5"
};
var definitions_default60 = {
  rpc: {},
  types: __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, layout), spec), latest), {
    ContractProjectInfo: {
      source: "ContractProjectSource",
      contract: "ContractProjectContract"
    },
    ContractMetadataV0: {
      metadataVersion: "Text",
      types: "Vec<Si0Type>",
      spec: "ContractContractSpecV0"
    },
    ContractMetadataV1: {
      types: "Vec<PortableType>",
      spec: "ContractContractSpecV1"
    },
    ContractMetadataV2: {
      types: "Vec<PortableType>",
      spec: "ContractContractSpecV2"
    },
    ContractMetadataV3: {
      types: "Vec<PortableType>",
      spec: "ContractContractSpecV3"
    },
    ContractMetadataV4: {
      types: "Vec<PortableType>",
      spec: "ContractContractSpecV4",
      version: "Text"
    },
    ContractMetadataV5: {
      types: "Vec<PortableType>",
      spec: "ContractContractSpecV5",
      version: "u64"
    },
    ContractMetadata: {
      _enum: {
        V0: "ContractMetadataV0",
        V1: "ContractMetadataV1",
        V2: "ContractMetadataV2",
        V3: "ContractMetadataV3",
        V4: "ContractMetadataV4",
        V5: "ContractMetadataV5"
      }
    },
    ContractProjectV0: {
      metadataVersion: "Text",
      source: "ContractProjectSource",
      contract: "ContractProjectContract",
      types: "Vec<Si0Type>",
      spec: "ContractContractSpecV0"
    },
    ContractProject: "(ContractProjectInfo, ContractMetadata)",
    ContractProjectContract: {
      _alias: {
        docs: "documentation"
      },
      name: "Text",
      version: "Text",
      authors: "Vec<Text>",
      description: "Option<Text>",
      docs: "Option<Text>",
      repository: "Option<Text>",
      homepage: "Option<Text>",
      license: "Option<Text>"
    },
    ContractProjectSource: {
      _alias: {
        wasmHash: "hash"
      },
      wasmHash: "[u8; 32]",
      language: "Text",
      compiler: "Text",
      wasm: "Raw"
    },
    ContractEnvironmentV4: {
      _alias: {
        hashType: "hash"
      },
      // NOTE These are not marked optional in the Rust code, however since we
      // convert from older versions to newer, we may not have these fields.
      // The Option<...> works since our inputs are always JSON, so it will
      // be None when not specified.
      //
      // Additionally we don't mark the full structure as Option, rather we
      // do it on a per-field basis since fields may be added as the versions
      // progress.
      accountId: "Option<ContractTypeSpec>",
      balance: "Option<ContractTypeSpec>",
      blockNumber: "Option<ContractTypeSpec>",
      hashType: "Option<ContractTypeSpec>",
      timestamp: "Option<ContractTypeSpec>",
      maxEventTopics: "Option<u32>"
    }
  })
};

// node_modules/@polkadot/types/interfaces/eth/rpc.js
var netRpc = {
  listening: {
    aliasSection: "net",
    description: "Returns true if client is actively listening for network connections. Otherwise false.",
    params: [],
    type: "bool"
  },
  peerCount: {
    aliasSection: "net",
    description: "Returns number of peers connected to node.",
    params: [],
    type: "Text"
  },
  version: {
    aliasSection: "net",
    description: "Returns protocol version.",
    params: [],
    type: "Text"
  }
};
var web3Rpc = {
  clientVersion: {
    aliasSection: "web3",
    description: "Returns current client version.",
    params: [],
    type: "Text"
  },
  sha3: {
    aliasSection: "web3",
    description: "Returns sha3 of the given data",
    params: [{ name: "data", type: "Bytes" }],
    type: "H256"
  }
};
var rpc10 = __spreadProps(__spreadValues(__spreadValues({}, netRpc), web3Rpc), {
  accounts: {
    description: "Returns accounts list.",
    params: [],
    type: "Vec<H160>"
  },
  blockNumber: {
    description: "Returns the blockNumber",
    params: [],
    type: "U256"
  },
  call: {
    description: "Call contract, returning the output data.",
    params: [
      {
        name: "request",
        type: "EthCallRequest"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "number",
        type: "BlockNumber"
      }
    ],
    type: "Bytes"
  },
  chainId: {
    description: "Returns the chain ID used for transaction signing at the current best block. None is returned if not available.",
    params: [],
    type: "U64"
  },
  coinbase: {
    description: "Returns block author.",
    params: [],
    type: "H160"
  },
  estimateGas: {
    description: "Estimate gas needed for execution of given contract.",
    params: [
      {
        name: "request",
        type: "EthCallRequest"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "number",
        type: "BlockNumber"
      }
    ],
    type: "U256"
  },
  feeHistory: {
    description: "Returns fee history for given block count & reward percentiles",
    params: [
      {
        name: "blockCount",
        type: "U256"
      },
      {
        name: "newestBlock",
        type: "BlockNumber"
      },
      {
        name: "rewardPercentiles",
        type: "Option<Vec<f64>>"
      }
    ],
    type: "EthFeeHistory"
  },
  gasPrice: {
    description: "Returns current gas price.",
    params: [],
    type: "U256"
  },
  getBalance: {
    description: "Returns balance of the given account.",
    params: [
      {
        name: "address",
        type: "H160"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "number",
        type: "BlockNumber"
      }
    ],
    type: "U256"
  },
  getBlockByHash: {
    description: "Returns block with given hash.",
    params: [
      {
        name: "hash",
        type: "H256"
      },
      {
        name: "full",
        type: "bool"
      }
    ],
    type: "Option<EthRichBlock>"
  },
  getBlockByNumber: {
    description: "Returns block with given number.",
    params: [
      {
        name: "block",
        type: "BlockNumber"
      },
      { name: "full", type: "bool" }
    ],
    type: "Option<EthRichBlock>"
  },
  getBlockTransactionCountByHash: {
    description: "Returns the number of transactions in a block with given hash.",
    params: [
      {
        name: "hash",
        type: "H256"
      }
    ],
    type: "U256"
  },
  getBlockTransactionCountByNumber: {
    description: "Returns the number of transactions in a block with given block number.",
    params: [
      {
        name: "block",
        type: "BlockNumber"
      }
    ],
    type: "U256"
  },
  getCode: {
    description: "Returns the code at given address at given time (block number).",
    params: [
      {
        name: "address",
        type: "H160"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "number",
        type: "BlockNumber"
      }
    ],
    type: "Bytes"
  },
  getFilterChanges: {
    description: "Returns filter changes since last poll.",
    params: [
      {
        name: "index",
        type: "U256"
      }
    ],
    type: "EthFilterChanges"
  },
  getFilterLogs: {
    description: "Returns all logs matching given filter (in a range 'from' - 'to').",
    params: [
      {
        name: "index",
        type: "U256"
      }
    ],
    type: "Vec<EthLog>"
  },
  getLogs: {
    description: "Returns logs matching given filter object.",
    params: [
      {
        name: "filter",
        type: "EthFilter"
      }
    ],
    type: "Vec<EthLog>"
  },
  getProof: {
    description: "Returns proof for account and storage.",
    params: [
      {
        name: "address",
        type: "H160"
      },
      {
        name: "storageKeys",
        type: "Vec<H256>"
      },
      {
        name: "number",
        type: "BlockNumber"
      }
    ],
    type: "EthAccount"
  },
  getStorageAt: {
    description: "Returns content of the storage at given address.",
    params: [
      {
        name: "address",
        type: "H160"
      },
      {
        name: "index",
        type: "U256"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "number",
        type: "BlockNumber"
      }
    ],
    type: "H256"
  },
  getTransactionByBlockHashAndIndex: {
    description: "Returns transaction at given block hash and index.",
    params: [
      {
        name: "hash",
        type: "H256"
      },
      {
        name: "index",
        type: "U256"
      }
    ],
    type: "EthTransaction"
  },
  getTransactionByBlockNumberAndIndex: {
    description: "Returns transaction by given block number and index.",
    params: [
      {
        name: "number",
        type: "BlockNumber"
      },
      {
        name: "index",
        type: "U256"
      }
    ],
    type: "EthTransaction"
  },
  getTransactionByHash: {
    description: "Get transaction by its hash.",
    params: [
      {
        name: "hash",
        type: "H256"
      }
    ],
    type: "EthTransaction"
  },
  getTransactionCount: {
    description: "Returns the number of transactions sent from given address at given time (block number).",
    params: [
      {
        name: "address",
        type: "H160"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "number",
        type: "BlockNumber"
      }
    ],
    type: "U256"
  },
  getTransactionReceipt: {
    description: "Returns transaction receipt by transaction hash.",
    params: [
      {
        name: "hash",
        type: "H256"
      }
    ],
    type: "EthReceipt"
  },
  getUncleByBlockHashAndIndex: {
    description: "Returns an uncles at given block and index.",
    params: [
      {
        name: "hash",
        type: "H256"
      },
      {
        name: "index",
        type: "U256"
      }
    ],
    type: "EthRichBlock"
  },
  getUncleByBlockNumberAndIndex: {
    description: "Returns an uncles at given block and index.",
    params: [
      {
        name: "number",
        type: "BlockNumber"
      },
      {
        name: "index",
        type: "U256"
      }
    ],
    type: "EthRichBlock"
  },
  getUncleCountByBlockHash: {
    description: "Returns the number of uncles in a block with given hash.",
    params: [
      {
        name: "hash",
        type: "H256"
      }
    ],
    type: "U256"
  },
  getUncleCountByBlockNumber: {
    description: "Returns the number of uncles in a block with given block number.",
    params: [
      {
        name: "number",
        type: "BlockNumber"
      }
    ],
    type: "U256"
  },
  getWork: {
    description: "Returns the hash of the current block, the seedHash, and the boundary condition to be met.",
    params: [],
    type: "EthWork"
  },
  hashrate: {
    description: "Returns the number of hashes per second that the node is mining with.",
    params: [],
    type: "U256"
  },
  maxPriorityFeePerGas: {
    description: "Returns max priority fee per gas",
    params: [],
    type: "U256"
  },
  mining: {
    description: "Returns true if client is actively mining new blocks.",
    params: [],
    type: "bool"
  },
  newBlockFilter: {
    description: "Returns id of new block filter.",
    params: [],
    type: "U256"
  },
  newFilter: {
    description: "Returns id of new filter.",
    params: [
      {
        name: "filter",
        type: "EthFilter"
      }
    ],
    type: "U256"
  },
  newPendingTransactionFilter: {
    description: "Returns id of new block filter.",
    params: [],
    type: "U256"
  },
  protocolVersion: {
    description: "Returns protocol version encoded as a string (quotes are necessary).",
    params: [],
    type: "u64"
  },
  sendRawTransaction: {
    description: "Sends signed transaction, returning its hash.",
    params: [
      {
        name: "bytes",
        type: "Bytes"
      }
    ],
    type: "H256"
  },
  sendTransaction: {
    description: "Sends transaction; will block waiting for signer to return the transaction hash",
    params: [
      {
        name: "tx",
        type: "EthTransactionRequest"
      }
    ],
    type: "H256"
  },
  submitHashrate: {
    description: "Used for submitting mining hashrate.",
    params: [
      {
        name: "index",
        type: "U256"
      },
      {
        name: "hash",
        type: "H256"
      }
    ],
    type: "bool"
  },
  submitWork: {
    description: "Used for submitting a proof-of-work solution.",
    params: [
      {
        name: "nonce",
        type: "H64"
      },
      {
        name: "headerHash",
        type: "H256"
      },
      {
        name: "mixDigest",
        type: "H256"
      }
    ],
    type: "bool"
  },
  subscribe: {
    description: "Subscribe to Eth subscription.",
    params: [
      { name: "kind", type: "EthSubKind" },
      {
        isOptional: true,
        name: "params",
        type: "EthSubParams"
      }
    ],
    pubsub: [
      "subscription",
      "subscribe",
      "unsubscribe"
    ],
    type: "Null"
  },
  syncing: {
    description: "Returns an object with data about the sync status or false.",
    params: [],
    type: "EthSyncStatus"
  },
  uninstallFilter: {
    description: "Uninstalls filter.",
    params: [
      {
        name: "index",
        type: "U256"
      }
    ],
    type: "bool"
  }
});

// node_modules/@polkadot/types/interfaces/eth/runtime.js
var ethMethodsV4 = {
  account_basic: {
    description: "Returns pallet_evm::Accounts by address.",
    params: [
      {
        name: "address",
        type: "H160"
      }
    ],
    type: "EvmAccount"
  },
  account_code_at: {
    description: "For a given account address, returns pallet_evm::AccountCodes.",
    params: [
      {
        name: "address",
        type: "H160"
      }
    ],
    type: "Bytes"
  },
  author: {
    description: "Returns the converted FindAuthor::find_author authority id.",
    params: [],
    type: "H160"
  },
  call: {
    description: "Returns a frame_ethereum::call response. If `estimate` is true,",
    params: [
      {
        name: "from",
        type: "H160"
      },
      {
        name: "to",
        type: "H160"
      },
      {
        name: "data",
        type: "Vec<u8>"
      },
      {
        name: "value",
        type: "U256"
      },
      {
        name: "gasLimit",
        type: "U256"
      },
      {
        name: "maxFeePerGas",
        type: "Option<U256>"
      },
      {
        name: "maxPriorityFeePerGas",
        type: "Option<U256>"
      },
      {
        name: "nonce",
        type: "Option<U256>"
      },
      {
        name: "estimate",
        type: "bool"
      },
      {
        name: "accessList",
        type: "Option<Vec<(H160, Vec<H256>)>>"
      }
    ],
    type: "Result<EvmCallInfo, DispatchError>"
  },
  chain_id: {
    description: "Returns runtime defined pallet_evm::ChainId.",
    params: [],
    type: "u64"
  },
  create: {
    description: "Returns a frame_ethereum::call response. If `estimate` is true,",
    params: [
      {
        name: "from",
        type: "H160"
      },
      {
        name: "data",
        type: "Vec<u8>"
      },
      {
        name: "value",
        type: "U256"
      },
      {
        name: "gasLimit",
        type: "U256"
      },
      {
        name: "maxFeePerGas",
        type: "Option<U256>"
      },
      {
        name: "maxPriorityFeePerGas",
        type: "Option<U256>"
      },
      {
        name: "nonce",
        type: "Option<U256>"
      },
      {
        name: "estimate",
        type: "bool"
      },
      {
        name: "accessList",
        type: "Option<Vec<(H160, Vec<H256>)>>"
      }
    ],
    type: "Result<EvmCreateInfo, DispatchError>"
  },
  current_all: {
    description: "Return all the current data for a block in a single runtime call.",
    params: [],
    type: "(Option<BlockV2>, Option<Vec<EthReceiptV3>>, Option<Vec<EthTransactionStatus>>)"
  },
  current_block: {
    description: "Return the current block.",
    params: [],
    type: "BlockV2"
  },
  current_receipts: {
    description: "Return the current receipt.",
    params: [],
    type: "Option<Vec<EthReceiptV3>>"
  },
  current_transaction_statuses: {
    description: "Return the current transaction status.",
    params: [],
    type: "Option<Vec<EthTransactionStatus>>"
  },
  elasticity: {
    description: "Return the elasticity multiplier.",
    params: [],
    type: "Option<Permill>"
  },
  extrinsic_filter: {
    description: "Receives a `Vec<OpaqueExtrinsic>` and filters all the ethereum transactions.",
    params: [
      {
        name: "xts",
        type: "Vec<Extrinsic>"
      }
    ],
    type: "Vec<TransactionV2>"
  },
  gas_price: {
    description: "Returns FixedGasPrice::min_gas_price",
    params: [],
    type: "u256"
  },
  storage_at: {
    description: "For a given account address and index, returns pallet_evm::AccountStorages.",
    params: [
      {
        name: "address",
        type: "H160"
      },
      {
        name: "index",
        type: "u256"
      }
    ],
    type: "H256"
  }
};
var ethMethodsV5 = {
  call: {
    description: "Returns a frame_ethereum::call response. If `estimate` is true,",
    params: [
      {
        name: "from",
        type: "H160"
      },
      {
        name: "to",
        type: "H160"
      },
      {
        name: "data",
        type: "Vec<u8>"
      },
      {
        name: "value",
        type: "U256"
      },
      {
        name: "gasLimit",
        type: "U256"
      },
      {
        name: "maxFeePerGas",
        type: "Option<U256>"
      },
      {
        name: "maxPriorityFeePerGas",
        type: "Option<U256>"
      },
      {
        name: "nonce",
        type: "Option<U256>"
      },
      {
        name: "estimate",
        type: "bool"
      },
      {
        name: "accessList",
        type: "Option<Vec<(H160, Vec<H256>)>>"
      }
    ],
    type: "Result<EvmCallInfoV2, DispatchError>"
  },
  create: {
    description: "Returns a frame_ethereum::call response. If `estimate` is true,",
    params: [
      {
        name: "from",
        type: "H160"
      },
      {
        name: "data",
        type: "Vec<u8>"
      },
      {
        name: "value",
        type: "U256"
      },
      {
        name: "gasLimit",
        type: "U256"
      },
      {
        name: "maxFeePerGas",
        type: "Option<U256>"
      },
      {
        name: "maxPriorityFeePerGas",
        type: "Option<U256>"
      },
      {
        name: "nonce",
        type: "Option<U256>"
      },
      {
        name: "estimate",
        type: "bool"
      },
      {
        name: "accessList",
        type: "Option<Vec<(H160, Vec<H256>)>>"
      }
    ],
    type: "Result<EvmCreateInfoV2, DispatchError>"
  }
};
var runtime25 = {
  ConvertTransactionRuntimeApi: [
    {
      methods: {
        convert_transaction: {
          description: "Converts an Ethereum-style transaction to Extrinsic",
          params: [
            {
              name: "transaction",
              type: "TransactionV2"
            }
          ],
          type: "Extrinsic"
        }
      },
      version: 2
    }
  ],
  DebugRuntimeApi: [
    {
      methods: {
        trace_block: {
          description: "Trace all block extrinsics",
          params: [
            {
              name: "extrinsics",
              type: "Vec<Extrinsic>"
            },
            {
              name: "knownTransactions",
              type: "Vec<H256>"
            }
          ],
          type: "Result<(), DispatchError>"
        },
        trace_transaction: {
          description: "Trace transaction extrinsics",
          params: [
            {
              name: "extrinsics",
              type: "Vec<Extrinsic>"
            },
            {
              name: "transaction",
              type: "EthTransaction"
            }
          ],
          type: "Result<(), DispatchError>"
        }
      },
      version: 4
    }
  ],
  EthereumRuntimeRPCApi: [
    {
      methods: __spreadValues({}, ethMethodsV4),
      version: 4
    },
    {
      methods: __spreadValues(__spreadValues({}, ethMethodsV4), ethMethodsV5),
      version: 5
    }
  ]
};

// node_modules/@polkadot/types/interfaces/eth/definitions.js
var V0 = {
  BlockV0: {
    header: "EthHeader",
    transactions: "Vec<TransactionV0>",
    ommers: "Vec<EthHeader>"
  },
  LegacyTransaction: {
    nonce: "U256",
    gasPrice: "U256",
    gasLimit: "U256",
    action: "EthTransactionAction",
    value: "U256",
    input: "Bytes",
    signature: "EthTransactionSignature"
  },
  TransactionV0: "LegacyTransaction"
};
var V1 = {
  BlockV1: {
    header: "EthHeader",
    transactions: "Vec<TransactionV1>",
    ommers: "Vec<EthHeader>"
  },
  EIP2930Transaction: {
    chainId: "u64",
    nonce: "U256",
    gasPrice: "U256",
    gasLimit: "U256",
    action: "EthTransactionAction",
    value: "U256",
    input: "Bytes",
    accessList: "EthAccessList",
    oddYParity: "bool",
    r: "H256",
    s: "H256"
  },
  TransactionV1: {
    _enum: {
      Legacy: "LegacyTransaction",
      EIP2930: "EIP2930Transaction"
    }
  }
};
var V2 = {
  BlockV2: {
    header: "EthHeader",
    transactions: "Vec<TransactionV2>",
    ommers: "Vec<EthHeader>"
  },
  EIP1559Transaction: {
    chainId: "u64",
    nonce: "U256",
    maxPriorityFeePerGas: "U256",
    maxFeePerGas: "U256",
    gasLimit: "U256",
    action: "EthTransactionAction",
    value: "U256",
    input: "Bytes",
    accessList: "EthAccessList",
    oddYParity: "bool",
    r: "H256",
    s: "H256"
  },
  TransactionV2: {
    _enum: {
      Legacy: "LegacyTransaction",
      EIP2930: "EIP2930Transaction",
      EIP1559: "EIP1559Transaction"
    }
  }
};
var types = __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, V0), V1), V2), {
  EthereumAccountId: "GenericEthereumAccountId",
  EthereumAddress: "GenericEthereumAccountId",
  EthereumLookupSource: "GenericEthereumLookupSource",
  EthereumSignature: "[u8; 65]",
  EthAccessListItem: {
    address: "EthAddress",
    slots: "Vec<H256>"
  },
  EthAccessList: "Vec<EthAccessListItem>",
  EthAccount: {
    address: "EthAddress",
    balance: "U256",
    nonce: "U256",
    codeHash: "H256",
    storageHash: "H256",
    accountProof: "Vec<Bytes>",
    storageProof: "Vec<EthStorageProof>"
  },
  EthAddress: "H160",
  EthBlock: {
    header: "EthHeader",
    transactions: "Vec<EthTransaction>",
    ommers: "Vec<EthHeader>"
  },
  EthHeader: {
    parentHash: "H256",
    ommersHash: "H256",
    beneficiary: "EthAddress",
    stateRoot: "H256",
    transactionsRoot: "H256",
    receiptsRoot: "H256",
    logsBloom: "EthBloom",
    difficulty: "U256",
    number: "U256",
    gasLimit: "U256",
    gasUsed: "U256",
    timestamp: "u64",
    extraData: "Bytes",
    mixMash: "H256",
    nonce: "H64"
  },
  EthRichBlock: {
    _alias: {
      blockHash: "hash",
      blockSize: "size"
    },
    blockHash: "Option<H256>",
    parentHash: "H256",
    sha3Uncles: "H256",
    author: "EthAddress",
    miner: "EthAddress",
    stateRoot: "H256",
    transactionsRoot: "H256",
    receiptsRoot: "H256",
    number: "Option<U256>",
    gasUsed: "U256",
    gasLimit: "U256",
    extraData: "Bytes",
    logsBloom: "EthBloom",
    timestamp: "U256",
    difficulty: "U256",
    totalDifficulty: "Option<U256>",
    sealFields: "Vec<Bytes>",
    uncles: "Vec<H256>",
    transactions: "Vec<EthTransaction>",
    blockSize: "Option<U256>"
  },
  EthBloom: "H2048",
  EthCallRequest: {
    from: "Option<EthAddress>",
    to: "Option<EthAddress>",
    gasPrice: "Option<U256>",
    gas: "Option<U256>",
    value: "Option<U256>",
    data: "Option<Bytes>",
    nonce: "Option<U256>"
  },
  EthFeeHistory: {
    oldestBlock: "U256",
    baseFeePerGas: "Vec<U256>",
    gasUsedRatio: "Vec<f64>",
    reward: "Option<Vec<Vec<U256>>>"
  },
  EthFilter: {
    fromBlock: "Option<BlockNumber>",
    toBlock: "Option<BlockNumber>",
    blockHash: "Option<H256>",
    address: "Option<EthFilterAddress>",
    topics: "Option<EthFilterTopic>"
  },
  EthFilterAddress: {
    _enum: {
      Single: "EthAddress",
      Multiple: "Vec<EthAddress>",
      Null: "Null"
    }
  },
  EthFilterChanges: {
    _enum: {
      Logs: "Vec<EthLog>",
      Hashes: "Vec<H256>",
      Empty: "Null"
    }
  },
  EthFilterTopic: {
    _enum: {
      Single: "EthFilterTopicInner",
      Multiple: "Vec<EthFilterTopicInner>",
      Null: "Null"
    }
  },
  EthFilterTopicEntry: "Option<H256>",
  EthFilterTopicInner: {
    _enum: {
      Single: "EthFilterTopicEntry",
      Multiple: "Vec<EthFilterTopicEntry>",
      Null: "Null"
    }
  },
  EthRichHeader: {
    _alias: {
      blockHash: "hash",
      blockSize: "size"
    },
    blockHash: "Option<H256>",
    parentHash: "H256",
    sha3Uncles: "H256",
    author: "EthAddress",
    miner: "EthAddress",
    stateRoot: "H256",
    transactionsRoot: "H256",
    receiptsRoot: "H256",
    number: "Option<U256>",
    gasUsed: "U256",
    gasLimit: "U256",
    extraData: "Bytes",
    logsBloom: "EthBloom",
    timestamp: "U256",
    difficulty: "U256",
    sealFields: "Vec<Bytes>",
    blockSize: "Option<U256>"
  },
  EthLog: {
    address: "EthAddress",
    topics: "Vec<H256>",
    data: "Bytes",
    blockHash: "Option<H256>",
    blockNumber: "Option<U256>",
    transactionHash: "Option<H256>",
    transactionIndex: "Option<U256>",
    logIndex: "Option<U256>",
    transactionLogIndex: "Option<U256>",
    removed: "bool"
  },
  EthReceipt: {
    transactionHash: "Option<H256>",
    transactionIndex: "Option<U256>",
    blockHash: "Option<H256>",
    from: "Option<EthAddress>",
    to: "Option<EthAddress>",
    blockNumber: "Option<U256>",
    cumulativeGasUsed: "U256",
    gasUsed: "Option<U256>",
    contractAddress: "Option<EthAddress>",
    logs: "Vec<EthLog>",
    root: "Option<H256>",
    logsBloom: "EthBloom",
    statusCode: "Option<U64>"
  },
  // not convinced, however the original commit matches, so... (maybe V3 is incorrect?)
  EthReceiptV0: "EthReceipt",
  EthReceiptV3: "EthReceipt",
  EthStorageProof: {
    key: "U256",
    value: "U256",
    proof: "Vec<Bytes>"
  },
  EthSubKind: {
    _enum: ["newHeads", "logs", "newPendingTransactions", "syncing"]
  },
  EthSubParams: {
    _enum: {
      None: "Null",
      Logs: "EthFilter"
    }
  },
  EthSubResult: {
    _enum: {
      Header: "EthRichHeader",
      Log: "EthLog",
      TransactionHash: "H256",
      SyncState: "EthSyncStatus"
    }
  },
  EthSyncInfo: {
    startingBlock: "U256",
    currentBlock: "U256",
    highestBlock: "U256",
    warpChunksAmount: "Option<U256>",
    warpChunksProcessed: "Option<U256>"
  },
  EthSyncStatus: {
    _enum: {
      Info: "EthSyncInfo",
      None: "Null"
    }
  },
  EthTransaction: {
    hash: "H256",
    nonce: "U256",
    blockHash: "Option<H256>",
    blockNumber: "Option<U256>",
    transactionIndex: "Option<U256>",
    from: "H160",
    to: "Option<H160>",
    value: "U256",
    gasPrice: "Option<U256>",
    maxFeePerGas: "Option<U256>",
    maxPriorityFeePerGas: "Option<U256>",
    gas: "U256",
    input: "Bytes",
    creates: "Option<H160>",
    raw: "Bytes",
    publicKey: "Option<H512>",
    chainId: "Option<U64>",
    standardV: "U256",
    v: "U256",
    r: "U256",
    s: "U256",
    accessList: "Option<Vec<EthAccessListItem>>",
    transactionType: "Option<U256>"
  },
  EthTransactionSignature: {
    v: "u64",
    r: "H256",
    s: "H256"
  },
  EthTransactionAction: {
    _enum: {
      Call: "H160",
      Create: "Null"
    }
  },
  EthTransactionCondition: {
    _enum: {
      block: "u64",
      time: "u64"
    }
  },
  EthTransactionRequest: {
    from: "Option<EthAddress>",
    to: "Option<EthAddress>",
    gasPrice: "Option<U256>",
    gas: "Option<U256>",
    value: "Option<U256>",
    data: "Option<Bytes>",
    nonce: "Option<U256>"
  },
  EthTransactionStatus: {
    transactionHash: "H256",
    transactionIndex: "u32",
    from: "EthAddress",
    to: "Option<EthAddress>",
    contractAddress: "Option<EthAddress>",
    logs: "Vec<EthLog>",
    logsBloom: "EthBloom"
  },
  EthWork: {
    powHash: "H256",
    seedHash: "H256",
    target: "H256",
    number: "Option<u64>"
  }
});
var definitions_default61 = { rpc: rpc10, runtime: runtime25, types };

// node_modules/@polkadot/types/interfaces/nimbus/runtime.js
var runtime26 = {
  // deprecated, the NimbusApi is current - this is for backwards compat
  AuthorFilterAPI: [
    {
      methods: {
        can_author: {
          description: "The runtime api used to predict whether an author will be eligible in the given slot",
          params: [
            {
              name: "author",
              type: "AccountId"
            },
            {
              name: "relayParent",
              type: "u32"
            },
            {
              name: "parentHeader",
              type: "Header"
            }
          ],
          type: "bool"
        }
      },
      version: 2
    },
    {
      methods: {
        can_author: {
          description: "The runtime api used to predict whether an author will be eligible in the given slot",
          params: [
            {
              name: "author",
              type: "AccountId"
            },
            {
              name: "relayParent",
              type: "u32"
            }
          ],
          type: "bool"
        }
      },
      version: 1
    }
  ],
  NimbusApi: [
    {
      methods: {
        can_author: {
          description: "The runtime api used to predict whether a Nimbus author will be eligible in the given slot",
          params: [
            {
              name: "author",
              type: "AccountId"
            },
            {
              name: "relayParent",
              type: "u32"
            },
            {
              name: "parentHeader",
              type: "Header"
            }
          ],
          type: "bool"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/nimbus/definitions.js
var definitions_default62 = {
  rpc: {},
  runtime: runtime26,
  types: {}
};

// node_modules/@polkadot/types/interfaces/ormlOracle/runtime.js
var runtime27 = {
  // https://github.com/open-web3-stack/open-runtime-module-library/blob/b57f88b39cd547e2fb51727d8bb9bcc64fddf8b5/oracle/rpc/runtime-api/src/lib.rs#L12-L21
  OracleApi: [
    {
      methods: {
        get_all_values: {
          description: "Retrieves all values",
          params: [
            {
              name: "providerId",
              // This is a Codec type
              type: "Raw"
            }
          ],
          // This won't actually work as expected - since we have
          // no information about the actual Raw sizes, we cannot
          // handle it in this format (it would need an override
          // for the specific Codec). So return the Raw value.
          // type: 'Vec<(Raw, Option<Raw>)>'
          type: "Raw"
        },
        get_value: {
          description: "Retrieves a single value",
          params: [
            {
              name: "providerId",
              // This is a Codec type
              type: "Raw"
            },
            {
              name: "key",
              // This is a Codec type
              type: "Raw"
            }
          ],
          // This is an Option<Codec> type
          type: "Option<Raw>"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/ormlOracle/definitions.js
var definitions_default63 = {
  rpc: {},
  runtime: runtime27,
  types: {}
};

// node_modules/@polkadot/types/interfaces/ormlTokens/runtime.js
var runtime28 = {
  // https://github.com/open-web3-stack/open-runtime-module-library/blob/b57f88b39cd547e2fb51727d8bb9bcc64fddf8b5/tokens/rpc/runtime-api/src/lib.rs#L11-L18
  TokensApi: [
    {
      methods: {
        query_existential_deposit: {
          description: "Query the existential amount for a specific currency",
          params: [
            {
              name: "currencyId",
              // This is CurrencyId, as per the return value, we are unsure
              // if this is specialized and/or global to the chain or not
              type: "Raw"
            }
          ],
          // This is Balance - since we don't understand enough about the way
          // in which this is used, we default to u128 here (it certainly could
          // be a specialized type that doesn't map to the on-chain Balance)
          type: "u128"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/ormlTokens/definitions.js
var definitions_default64 = {
  rpc: {},
  runtime: runtime28,
  types: {}
};

// node_modules/@polkadot/types/interfaces/rpc/rpc.js
var rpc11 = {
  methods: {
    description: "Retrieves the list of RPC methods that are exposed by the node",
    params: [],
    type: "RpcMethods"
  }
};

// node_modules/@polkadot/types/interfaces/rpc/definitions.js
var definitions_default65 = {
  rpc: rpc11,
  types: {
    RpcMethods: {
      version: "u32",
      methods: "Vec<Text>"
    }
  }
};

// node_modules/@polkadot/types/interfaces/author/rpc.js
var rpc12 = {
  hasKey: {
    description: "Returns true if the keystore has private keys for the given public key and key type.",
    isUnsafe: true,
    params: [
      {
        name: "publicKey",
        type: "Bytes"
      },
      {
        name: "keyType",
        type: "Text"
      }
    ],
    type: "bool"
  },
  hasSessionKeys: {
    description: "Returns true if the keystore has private keys for the given session public keys.",
    isUnsafe: true,
    params: [
      {
        name: "sessionKeys",
        type: "Bytes"
      }
    ],
    type: "bool"
  },
  insertKey: {
    description: "Insert a key into the keystore.",
    isUnsafe: true,
    params: [
      {
        name: "keyType",
        type: "Text"
      },
      {
        name: "suri",
        type: "Text"
      },
      {
        name: "publicKey",
        type: "Bytes"
      }
    ],
    type: "Bytes"
  },
  pendingExtrinsics: {
    description: "Returns all pending extrinsics, potentially grouped by sender",
    params: [],
    type: "Vec<Extrinsic>"
  },
  removeExtrinsic: {
    description: "Remove given extrinsic from the pool and temporarily ban it to prevent reimporting",
    isUnsafe: true,
    params: [
      {
        name: "bytesOrHash",
        type: "Vec<ExtrinsicOrHash>"
      }
    ],
    type: "Vec<Hash>"
  },
  rotateKeys: {
    description: "Generate new session keys and returns the corresponding public keys",
    isUnsafe: true,
    params: [],
    type: "Bytes"
  },
  submitAndWatchExtrinsic: {
    description: "Submit and subscribe to watch an extrinsic until unsubscribed",
    isSigned: true,
    params: [
      {
        name: "extrinsic",
        type: "Extrinsic"
      }
    ],
    pubsub: [
      "extrinsicUpdate",
      "submitAndWatchExtrinsic",
      "unwatchExtrinsic"
    ],
    type: "ExtrinsicStatus"
  },
  submitExtrinsic: {
    description: "Submit a fully formatted extrinsic for block inclusion",
    isSigned: true,
    params: [
      {
        name: "extrinsic",
        type: "Extrinsic"
      }
    ],
    type: "Hash"
  }
};

// node_modules/@polkadot/types/interfaces/author/definitions.js
var definitions_default66 = {
  rpc: rpc12,
  types: {
    ExtrinsicOrHash: {
      _enum: {
        Hash: "Hash",
        Extrinsic: "Bytes"
      }
    },
    ExtrinsicStatus: {
      _enum: {
        Future: "Null",
        Ready: "Null",
        Broadcast: "Vec<Text>",
        InBlock: "Hash",
        Retracted: "Hash",
        FinalityTimeout: "Hash",
        Finalized: "Hash",
        Usurped: "Hash",
        Dropped: "Null",
        Invalid: "Null"
      }
    }
  }
};

// node_modules/@polkadot/types/interfaces/chain/rpc.js
var rpc13 = {
  getBlock: {
    description: "Get header and body of a relay chain block",
    params: [
      {
        isHistoric: true,
        isOptional: true,
        name: "hash",
        type: "BlockHash"
      }
    ],
    type: "SignedBlock"
  },
  getBlockHash: {
    description: "Get the block hash for a specific block",
    params: [
      {
        isOptional: true,
        name: "blockNumber",
        type: "BlockNumber"
      }
    ],
    type: "BlockHash"
  },
  getFinalizedHead: {
    alias: ["chain_getFinalisedHead"],
    description: "Get hash of the last finalized block in the canon chain",
    params: [],
    type: "BlockHash"
  },
  getHeader: {
    alias: ["chain_getHead"],
    description: "Retrieves the header for a specific block",
    params: [
      {
        isHistoric: true,
        isOptional: true,
        name: "hash",
        type: "BlockHash"
      }
    ],
    type: "Header"
  },
  subscribeAllHeads: {
    description: "Retrieves the newest header via subscription",
    params: [],
    pubsub: [
      "allHead",
      "subscribeAllHeads",
      "unsubscribeAllHeads"
    ],
    type: "Header"
  },
  subscribeFinalizedHeads: {
    alias: ["chain_subscribeFinalisedHeads", "chain_unsubscribeFinalisedHeads"],
    description: "Retrieves the best finalized header via subscription",
    params: [],
    pubsub: [
      "finalizedHead",
      "subscribeFinalizedHeads",
      "unsubscribeFinalizedHeads"
    ],
    type: "Header"
  },
  subscribeNewHeads: {
    alias: ["chain_unsubscribeNewHeads", "subscribe_newHead", "unsubscribe_newHead"],
    description: "Retrieves the best header via subscription",
    params: [],
    // NOTE These still has the aliassed version, compatible with 1.x
    pubsub: [
      "newHead",
      "subscribeNewHead",
      "unsubscribeNewHead"
    ],
    type: "Header"
  }
};

// node_modules/@polkadot/types/interfaces/chain/definitions.js
var definitions_default67 = {
  rpc: rpc13,
  types: {
    BlockHash: "Hash"
  }
};

// node_modules/@polkadot/types/interfaces/childstate/rpc.js
var rpc14 = {
  getKeys: {
    description: "Returns the keys with prefix from a child storage, leave empty to get all the keys",
    params: [
      {
        name: "childKey",
        type: "PrefixedStorageKey"
      },
      {
        name: "prefix",
        type: "StorageKey"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "Hash"
      }
    ],
    type: "Vec<StorageKey>"
  },
  getKeysPaged: {
    alias: ["childstate_getKeysPagedAt"],
    description: "Returns the keys with prefix from a child storage with pagination support",
    params: [
      {
        name: "childKey",
        type: "PrefixedStorageKey"
      },
      {
        name: "prefix",
        type: "StorageKey"
      },
      {
        name: "count",
        type: "u32"
      },
      {
        isOptional: true,
        name: "startKey",
        type: "StorageKey"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "Hash"
      }
    ],
    type: "Vec<StorageKey>"
  },
  getStorage: {
    description: "Returns a child storage entry at a specific block state",
    params: [
      {
        name: "childKey",
        type: "PrefixedStorageKey"
      },
      {
        name: "key",
        type: "StorageKey"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "Hash"
      }
    ],
    type: "Option<StorageData>"
  },
  getStorageEntries: {
    description: "Returns child storage entries for multiple keys at a specific block state",
    params: [
      {
        name: "childKey",
        type: "PrefixedStorageKey"
      },
      {
        name: "keys",
        type: "Vec<StorageKey>"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "Hash"
      }
    ],
    type: "Vec<Option<StorageData>>"
  },
  getStorageHash: {
    description: "Returns the hash of a child storage entry at a block state",
    params: [
      {
        name: "childKey",
        type: "PrefixedStorageKey"
      },
      {
        name: "key",
        type: "StorageKey"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "Hash"
      }
    ],
    type: "Option<Hash>"
  },
  getStorageSize: {
    description: "Returns the size of a child storage entry at a block state",
    params: [
      {
        name: "childKey",
        type: "PrefixedStorageKey"
      },
      {
        name: "key",
        type: "StorageKey"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "Hash"
      }
    ],
    type: "Option<u64>"
  }
};

// node_modules/@polkadot/types/interfaces/childstate/definitions.js
var definitions_default68 = {
  rpc: rpc14,
  types: {
    // StorageKey extends Bytes
    PrefixedStorageKey: "StorageKey"
  }
};

// node_modules/@polkadot/types/interfaces/offchain/rpc.js
var rpc15 = {
  localStorageGet: {
    description: "Get offchain local storage under given key and prefix",
    isUnsafe: true,
    params: [
      {
        name: "kind",
        type: "StorageKind"
      },
      {
        name: "key",
        type: "Bytes"
      }
    ],
    type: "Option<Bytes>"
  },
  localStorageSet: {
    description: "Set offchain local storage under given key and prefix",
    isUnsafe: true,
    params: [
      {
        name: "kind",
        type: "StorageKind"
      },
      {
        name: "key",
        type: "Bytes"
      },
      {
        name: "value",
        type: "Bytes"
      }
    ],
    type: "Null"
  }
};

// node_modules/@polkadot/types/interfaces/offchain/runtime.js
var runtime29 = {
  OffchainWorkerApi: [
    {
      methods: {
        offchain_worker: {
          description: "Starts the off-chain task for given block header.",
          params: [
            {
              name: "header",
              type: "Header"
            }
          ],
          type: "Null"
        }
      },
      version: 2
    },
    {
      methods: {
        offchain_worker: {
          description: "Starts the off-chain task for given block header.",
          params: [
            {
              name: "number",
              type: "BlockNumber"
            }
          ],
          type: "Null"
        }
      },
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/offchain/definitions.js
var definitions_default69 = {
  rpc: rpc15,
  runtime: runtime29,
  types: {
    StorageKind: {
      _enum: {
        PERSISTENT: 1,
        LOCAL: 2
      }
    }
  }
};

// node_modules/@polkadot/types/interfaces/payment/rpc.js
var rpc16 = {
  queryFeeDetails: {
    // NOTE: Not deprecated (yet) in Substrate, but it is the intent to do so
    deprecated: "Use `api.call.transactionPaymentApi.queryFeeDetails` instead",
    description: "Query the detailed fee of a given encoded extrinsic",
    params: [
      {
        name: "extrinsic",
        type: "Bytes"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "FeeDetails"
  },
  queryInfo: {
    // NOTE: Not deprecated (yet) in Substrate, but it is the intent to do so
    deprecated: "Use `api.call.transactionPaymentApi.queryInfo` instead",
    description: "Retrieves the fee information for an encoded extrinsic",
    params: [
      {
        name: "extrinsic",
        type: "Bytes"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    // NOTE: Stuck on V1 forever (at least for the time being)
    type: "RuntimeDispatchInfoV1"
  }
};

// node_modules/@polkadot/types/interfaces/payment/runtime.js
var V1_TO_V4_SHARED_PAY = {
  query_fee_details: {
    description: "The transaction fee details",
    params: [
      {
        name: "uxt",
        type: "Extrinsic"
      },
      {
        name: "len",
        type: "u32"
      }
    ],
    type: "FeeDetails"
  }
};
var V1_TO_V3_SHARED_CALL = {
  query_call_fee_details: {
    description: "The call fee details",
    params: [
      {
        name: "call",
        type: "Call"
      },
      {
        name: "len",
        type: "u32"
      }
    ],
    type: "FeeDetails"
  }
};
var V2_TO_V4_SHARED_PAY = {
  query_info: {
    description: "The transaction info",
    params: [
      {
        name: "uxt",
        type: "Extrinsic"
      },
      {
        name: "len",
        type: "u32"
      }
    ],
    type: "RuntimeDispatchInfo"
  }
};
var V2_V3_SHARED_CALL = {
  query_call_info: {
    description: "The call info",
    params: [
      {
        name: "call",
        type: "Call"
      },
      {
        name: "len",
        type: "u32"
      }
    ],
    type: "RuntimeDispatchInfo"
  }
};
var V3_SHARED_PAY_CALL = {
  query_length_to_fee: {
    description: "Query the output of the current LengthToFee given some input",
    params: [
      {
        name: "length",
        type: "u32"
      }
    ],
    type: "Balance"
  },
  query_weight_to_fee: {
    description: "Query the output of the current WeightToFee given some input",
    params: [
      {
        name: "weight",
        type: "Weight"
      }
    ],
    type: "Balance"
  }
};
var runtime30 = {
  TransactionPaymentApi: [
    {
      // V4 is equivalent to V3 (V4 just dropped all V1 references)
      methods: __spreadValues(__spreadValues(__spreadValues({}, V3_SHARED_PAY_CALL), V2_TO_V4_SHARED_PAY), V1_TO_V4_SHARED_PAY),
      version: 4
    },
    {
      methods: __spreadValues(__spreadValues(__spreadValues({}, V3_SHARED_PAY_CALL), V2_TO_V4_SHARED_PAY), V1_TO_V4_SHARED_PAY),
      version: 3
    },
    {
      methods: __spreadValues(__spreadValues({}, V2_TO_V4_SHARED_PAY), V1_TO_V4_SHARED_PAY),
      version: 2
    },
    {
      methods: __spreadValues({
        query_info: {
          description: "The transaction info",
          params: [
            {
              name: "uxt",
              type: "Extrinsic"
            },
            {
              name: "len",
              type: "u32"
            }
          ],
          // NOTE: _Should_ be V1 (as per current Substrate), however the interface was
          // changed mid-flight between versions. So we have some of each depending on
          // runtime. (We do detect the weight type, so correct)
          type: "RuntimeDispatchInfo"
        }
      }, V1_TO_V4_SHARED_PAY),
      version: 1
    }
  ],
  TransactionPaymentCallApi: [
    {
      methods: __spreadValues(__spreadValues(__spreadValues({}, V3_SHARED_PAY_CALL), V2_V3_SHARED_CALL), V1_TO_V3_SHARED_CALL),
      version: 3
    },
    {
      methods: __spreadValues(__spreadValues({}, V2_V3_SHARED_CALL), V1_TO_V3_SHARED_CALL),
      version: 2
    },
    {
      methods: __spreadValues({
        CALL: {
          description: "The call info",
          params: [
            {
              name: "call",
              type: "Call"
            },
            {
              name: "len",
              type: "u32"
            }
          ],
          // NOTE: As per the above comment, the below is correct according to Substrate, but
          // _may_ yield fallback decoding on some versions of the runtime
          type: "RuntimeDispatchInfo"
        }
      }, V1_TO_V3_SHARED_CALL),
      version: 1
    }
  ]
};

// node_modules/@polkadot/types/interfaces/payment/definitions.js
var definitions_default70 = {
  rpc: rpc16,
  runtime: runtime30,
  types: {
    FeeDetails: {
      inclusionFee: "Option<InclusionFee>"
      // skipped in serde
      // tip: 'Balance'
    },
    InclusionFee: {
      baseFee: "Balance",
      lenFee: "Balance",
      adjustedWeightFee: "Balance"
    },
    RuntimeDispatchInfo: {
      weight: "Weight",
      class: "DispatchClass",
      partialFee: "Balance"
    },
    RuntimeDispatchInfoV1: {
      weight: "WeightV1",
      class: "DispatchClass",
      partialFee: "Balance"
    },
    RuntimeDispatchInfoV2: {
      weight: "WeightV2",
      class: "DispatchClass",
      partialFee: "Balance"
    }
  }
};

// node_modules/@polkadot/types/interfaces/state/rpc.js
var rpc17 = {
  call: {
    alias: ["state_callAt"],
    description: "Perform a call to a builtin on the chain",
    params: [
      {
        name: "method",
        type: "Text"
      },
      {
        name: "data",
        type: "Bytes"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "Bytes"
  },
  getChildKeys: {
    description: "Retrieves the keys with prefix of a specific child storage",
    params: [
      {
        name: "childStorageKey",
        type: "StorageKey"
      },
      {
        name: "childDefinition",
        type: "StorageKey"
      },
      {
        name: "childType",
        type: "u32"
      },
      {
        name: "key",
        type: "StorageKey"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "Vec<StorageKey>"
  },
  getChildReadProof: {
    description: "Returns proof of storage for child key entries at a specific block state.",
    params: [
      {
        name: "childStorageKey",
        type: "PrefixedStorageKey"
      },
      {
        name: "keys",
        type: "Vec<StorageKey>"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "ReadProof"
  },
  getChildStorage: {
    description: "Retrieves the child storage for a key",
    params: [
      {
        name: "childStorageKey",
        type: "StorageKey"
      },
      {
        name: "childDefinition",
        type: "StorageKey"
      },
      {
        name: "childType",
        type: "u32"
      },
      {
        name: "key",
        type: "StorageKey"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "StorageData"
  },
  getChildStorageHash: {
    description: "Retrieves the child storage hash",
    params: [
      {
        name: "childStorageKey",
        type: "StorageKey"
      },
      {
        name: "childDefinition",
        type: "StorageKey"
      },
      {
        name: "childType",
        type: "u32"
      },
      {
        name: "key",
        type: "StorageKey"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "Hash"
  },
  getChildStorageSize: {
    description: "Retrieves the child storage size",
    params: [
      {
        name: "childStorageKey",
        type: "StorageKey"
      },
      {
        name: "childDefinition",
        type: "StorageKey"
      },
      {
        name: "childType",
        type: "u32"
      },
      {
        name: "key",
        type: "StorageKey"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "u64"
  },
  getKeys: {
    deprecated: "Use `api.rpc.state.getKeysPaged` to retrieve keys",
    description: "Retrieves the keys with a certain prefix",
    params: [
      {
        name: "key",
        type: "StorageKey"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "Vec<StorageKey>"
  },
  getKeysPaged: {
    alias: ["state_getKeysPagedAt"],
    description: "Returns the keys with prefix with pagination support.",
    params: [
      {
        name: "key",
        type: "StorageKey"
      },
      {
        name: "count",
        type: "u32"
      },
      {
        isOptional: true,
        name: "startKey",
        type: "StorageKey"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "Vec<StorageKey>"
  },
  getMetadata: {
    description: "Returns the runtime metadata",
    params: [
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "Metadata"
  },
  getPairs: {
    deprecated: "Use `api.rpc.state.getKeysPaged` to retrieve keys",
    description: "Returns the keys with prefix, leave empty to get all the keys (deprecated: Use getKeysPaged)",
    isUnsafe: true,
    params: [
      {
        name: "prefix",
        type: "StorageKey"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "Vec<KeyValue>"
  },
  getReadProof: {
    description: "Returns proof of storage entries at a specific block state",
    params: [
      {
        name: "keys",
        type: "Vec<StorageKey>"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "ReadProof"
  },
  getRuntimeVersion: {
    alias: ["chain_getRuntimeVersion"],
    description: "Get the runtime version",
    params: [
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "RuntimeVersion"
  },
  getStorage: {
    alias: ["state_getStorageAt"],
    description: "Retrieves the storage for a key",
    params: [
      {
        name: "key",
        type: "StorageKey"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "StorageData"
  },
  getStorageHash: {
    alias: ["state_getStorageHashAt"],
    description: "Retrieves the storage hash",
    params: [
      {
        name: "key",
        type: "StorageKey"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "Hash"
  },
  getStorageSize: {
    alias: ["state_getStorageSizeAt"],
    description: "Retrieves the storage size",
    params: [
      {
        name: "key",
        type: "StorageKey"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "u64"
  },
  queryStorage: {
    description: "Query historical storage entries (by key) starting from a start block",
    isUnsafe: true,
    params: [
      {
        name: "keys",
        type: "Vec<StorageKey>"
      },
      {
        name: "fromBlock",
        type: "Hash"
      },
      {
        isOptional: true,
        name: "toBlock",
        type: "BlockHash"
      }
    ],
    type: "Vec<StorageChangeSet>"
  },
  queryStorageAt: {
    description: "Query storage entries (by key) starting at block hash given as the second parameter",
    params: [
      {
        name: "keys",
        type: "Vec<StorageKey>"
      },
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "Vec<StorageChangeSet>"
  },
  subscribeRuntimeVersion: {
    alias: ["chain_subscribeRuntimeVersion", "chain_unsubscribeRuntimeVersion"],
    description: "Retrieves the runtime version via subscription",
    params: [],
    pubsub: [
      "runtimeVersion",
      "subscribeRuntimeVersion",
      "unsubscribeRuntimeVersion"
    ],
    type: "RuntimeVersion"
  },
  subscribeStorage: {
    description: "Subscribes to storage changes for the provided keys",
    // NOTE Just marking it here to follow the logic - this is unsafe when no
    // keys are provided (i.e. subscribing to all), generally this is used
    // extensively with normal subscriptions
    // isUnsafe: true,
    params: [
      {
        isOptional: true,
        name: "keys",
        type: "Vec<StorageKey>"
      }
    ],
    pubsub: [
      "storage",
      "subscribeStorage",
      "unsubscribeStorage"
    ],
    type: "StorageChangeSet"
  },
  traceBlock: {
    description: "Provides a way to trace the re-execution of a single block",
    isUnsafe: true,
    params: [
      {
        name: "block",
        type: "Hash"
      },
      {
        name: "targets",
        type: "Option<Text>"
      },
      {
        name: "storageKeys",
        type: "Option<Text>"
      },
      {
        name: "methods",
        type: "Option<Text>"
      }
    ],
    type: "TraceBlockResponse"
  },
  trieMigrationStatus: {
    description: "Check current migration state",
    isUnsafe: true,
    params: [
      {
        isHistoric: true,
        isOptional: true,
        name: "at",
        type: "BlockHash"
      }
    ],
    type: "MigrationStatusResult"
  }
};

// node_modules/@polkadot/types/interfaces/state/definitions.js
var definitions_default71 = {
  rpc: rpc17,
  types: {
    ApiId: "[u8; 8]",
    BlockTrace: {
      blockHash: "Text",
      parentHash: "Text",
      tracingTargets: "Text",
      storageKeys: "Text",
      spans: "Vec<BlockTraceSpan>",
      events: "Vec<BlockTraceEvent>"
    },
    BlockTraceEvent: {
      target: "Text",
      data: "BlockTraceEventData",
      parentId: "Option<u64>"
    },
    BlockTraceEventData: {
      stringValues: "HashMap<Text, Text>"
    },
    BlockTraceSpan: {
      id: "u64",
      parentId: "Option<u64>",
      name: "Text",
      target: "Text",
      wasm: "bool"
    },
    KeyValueOption: "(StorageKey, Option<StorageData>)",
    MigrationStatusResult: {
      topRemainingToMigrate: "u64",
      childRemainingToMigrate: "u64"
    },
    ReadProof: {
      at: "Hash",
      proof: "Vec<Bytes>"
    },
    RuntimeVersionApi: "(ApiId, u32)",
    RuntimeVersion: {
      specName: "Text",
      implName: "Text",
      authoringVersion: "u32",
      specVersion: "u32",
      implVersion: "u32",
      apis: "Vec<RuntimeVersionApi>",
      transactionVersion: "u32",
      stateVersion: "u8"
    },
    RuntimeVersionPre4: {
      specName: "Text",
      implName: "Text",
      authoringVersion: "u32",
      specVersion: "u32",
      implVersion: "u32",
      apis: "Vec<RuntimeVersionApi>",
      transactionVersion: "u32"
    },
    RuntimeVersionPre3: {
      specName: "Text",
      implName: "Text",
      authoringVersion: "u32",
      specVersion: "u32",
      implVersion: "u32",
      apis: "Vec<RuntimeVersionApi>"
    },
    RuntimeVersionPartial: {
      specName: "Text",
      specVersion: "u32",
      apis: "Vec<RuntimeVersionApi>"
    },
    SpecVersion: "u32",
    StorageChangeSet: {
      block: "Hash",
      changes: "Vec<KeyValueOption>"
    },
    TraceBlockResponse: {
      _enum: {
        TraceError: "TraceError",
        BlockTrace: "BlockTrace"
      }
    },
    TraceError: {
      error: "Text"
    }
  }
};

// node_modules/@polkadot/types/interfaces/jsonrpc.js
var jsonrpc = {};
Object.keys(definitions_exports).forEach((s) => Object.entries(definitions_exports[s].rpc || {}).forEach(([method, def]) => {
  const section2 = def.aliasSection || s;
  if (!jsonrpc[section2]) {
    jsonrpc[section2] = {};
  }
  jsonrpc[section2][method] = objectSpread({}, def, {
    isSubscription: !!def.pubsub,
    jsonrpc: `${section2}_${method}`,
    method,
    section: section2
  });
}));
var jsonrpc_default = jsonrpc;

// node_modules/@polkadot/types/metadata/PortableRegistry/PortableRegistry.js
var l8 = logger("PortableRegistry");
var TYPE_UNWRAP = { toNumber: () => -1 };
var PRIMITIVE_ALIAS = {
  Char: "u32",
  // Rust char is 4-bytes
  Str: "Text"
};
var PATHS_ALIAS = splitNamespace([
  // full matching on exact names...
  // these are well-known types with additional encoding
  "sp_core::crypto::AccountId32",
  "sp_runtime::generic::era::Era",
  "sp_runtime::multiaddress::MultiAddress",
  // ethereum overrides (Frontier, Moonbeam, Polkadot claims)
  "fp_account::AccountId20",
  "account::AccountId20",
  "polkadot_runtime_common::claims::EthereumAddress",
  // weights 2 is a structure, however for 1.5. with a single field it
  // should be flatenned (can appear in Compact<Weight> extrinsics)
  "frame_support::weights::weight_v2::Weight",
  "sp_weights::weight_v2::Weight",
  // wildcard matching in place...
  // these have a specific encoding or logic, use a wildcard for {pallet, darwinia}_democracy
  "*_democracy::vote::Vote",
  "*_conviction_voting::vote::Vote",
  "*_identity::types::Data",
  // these are opaque Vec<u8> wrappers
  "sp_core::OpaqueMetadata",
  "sp_core::OpaquePeerId",
  "sp_core::offchain::OpaqueMultiaddr",
  // shorten some well-known types
  "primitive_types::*",
  "sp_arithmetic::per_things::*",
  // runtime
  "*_runtime::RuntimeCall",
  "*_runtime::RuntimeEvent",
  // ink!
  "ink::env::types::*",
  "ink::primitives::types::*",
  "ink_env::types::*",
  "ink_primitives::types::*",
  // noir
  "np_runtime::accountname::AccountName",
  "np_runtime::universaladdress::UniversalAddress"
]);
var PATHS_SET = splitNamespace([
  "pallet_identity::types::BitFlags"
]);
var BITVEC_NS_LSB = ["bitvec::order::Lsb0", "BitOrderLsb0"];
var BITVEC_NS_MSB = ["bitvec::order::Msb0", "BitOrderMsb0"];
var BITVEC_NS = [...BITVEC_NS_LSB, ...BITVEC_NS_MSB];
var WRAPPERS = ["BoundedBTreeMap", "BoundedBTreeSet", "BoundedVec", "Box", "BTreeMap", "BTreeSet", "Cow", "Option", "Range", "RangeInclusive", "Result", "WeakBoundedVec", "WrapperKeepOpaque", "WrapperOpaque"];
var RESERVED = [
  // JS reserved words
  "entries",
  "keys",
  "new",
  "size",
  // exposed by all Codec objects
  "hash",
  "registry"
];
var PATH_RM_INDEX_1 = ["generic", "misc", "pallet", "traits", "types"];
function sanitizeDocs(docs) {
  const count = docs.length;
  const result = new Array(count);
  for (let i = 0; i < count; i++) {
    result[i] = docs[i].toString();
  }
  return result;
}
function splitNamespace(values) {
  const count = values.length;
  const result = new Array(count);
  for (let i = 0; i < count; i++) {
    result[i] = values[i].split("::");
  }
  return result;
}
function matchParts(first2, second) {
  return first2.length === second.length && first2.every((a, index) => {
    const b = second[index].toString();
    if (a === "*" || a === b) {
      return true;
    }
    if (a.includes("*") && a.includes("_") && b.includes("_")) {
      let suba = a.split("_");
      let subb = b.split("_");
      if (suba[0] === "*") {
        const indexOf = subb.indexOf(suba[1]);
        if (indexOf !== -1) {
          suba = suba.slice(1);
          subb = subb.slice(indexOf);
        }
      }
      if (suba.length === 2 && suba[1] === "*" && suba[0] === subb[0]) {
        return true;
      }
      return matchParts(suba, subb);
    }
    return false;
  });
}
function getAliasPath({ def, path }) {
  if (["frame_support::weights::weight_v2::Weight", "sp_weights::weight_v2::Weight"].includes(path.join("::"))) {
    return !def.isComposite || def.asComposite.fields.length === 1 ? "WeightV1" : null;
  }
  return path.length && PATHS_ALIAS.some((a) => matchParts(a, path)) ? path[path.length - 1].toString() : null;
}
function extractNameFlat(portable, lookupIndex, params, path, isInternal = false) {
  const count = path.length;
  if (count === 0 || WRAPPERS.includes(path[count - 1].toString())) {
    return null;
  }
  const camels = new Array(count);
  const lowers = new Array(count);
  for (let i = 0; i < count; i++) {
    const c = stringPascalCase(isInternal ? path[i].replace("pallet_", "") : path[i]);
    const l15 = c.toLowerCase();
    camels[i] = c;
    lowers[i] = l15;
  }
  let name = "";
  for (let i = 0; i < count; i++) {
    const l15 = lowers[i];
    if (i !== 1 || !PATH_RM_INDEX_1.includes(l15)) {
      if (l15 !== lowers[i + 1]) {
        name += camels[i];
      }
    }
  }
  if (camels[1] === "RawOrigin" && count === 2 && params.length === 2 && params[1].type.isSome) {
    const instanceType = portable[params[1].type.unwrap().toNumber()];
    if (instanceType.type.path.length === 2) {
      name = `${name}${instanceType.type.path[1].toString()}`;
    }
  }
  return { lookupIndex, name, params };
}
function extractName(portable, lookupIndex, { type: { params, path } }) {
  return extractNameFlat(portable, lookupIndex, params, path);
}
function nextDupeMatches(name, startAt, names) {
  const result = [names[startAt]];
  for (let i = startAt + 1, count = names.length; i < count; i++) {
    const v = names[i];
    if (v.name === name) {
      result.push(v);
    }
  }
  return result;
}
function rewriteDupes(input, rewrite) {
  const count = input.length;
  for (let i = 0; i < count; i++) {
    const a = input[i];
    for (let j = i + 1; j < count; j++) {
      const b = input[j];
      if (a.lookupIndex !== b.lookupIndex && a.name === b.name) {
        return false;
      }
    }
  }
  for (let i = 0; i < count; i++) {
    const p = input[i];
    rewrite[p.lookupIndex] = p.name;
  }
  return true;
}
function removeDupeNames(lookup, portable, names) {
  const rewrite = {};
  return names.map((original, startAt) => {
    const { lookupIndex, name, params } = original;
    if (!name) {
      return null;
    } else if (rewrite[lookupIndex]) {
      return original;
    }
    const allSame = nextDupeMatches(name, startAt, names);
    if (allSame.length === 1) {
      return original;
    }
    const anyDiff = allSame.some((o) => params.length !== o.params.length || params.some((p, index) => !p.name.eq(o.params[index].name) || p.type.unwrapOr(TYPE_UNWRAP).toNumber() !== o.params[index].type.unwrapOr(TYPE_UNWRAP).toNumber()));
    if (!anyDiff) {
      return original;
    }
    const paramIdx = params.findIndex(({ type }, index) => allSame.every(({ params: params2 }, aIndex) => params2[index].type.isSome && (aIndex === 0 || !params2[index].type.eq(type))));
    if (paramIdx === -1) {
      return original;
    }
    const sameCount = allSame.length;
    const adjusted = new Array(sameCount);
    for (let i = 0; i < sameCount; i++) {
      const { lookupIndex: lookupIndex2, name: name2, params: params2 } = allSame[i];
      const { def, path } = lookup.getSiType(params2[paramIdx].type.unwrap());
      if (!def.isPrimitive && !path.length) {
        return null;
      }
      adjusted[i] = {
        lookupIndex: lookupIndex2,
        name: def.isPrimitive ? `${name2}${def.asPrimitive.toString()}` : `${name2}${path[path.length - 1].toString()}`
      };
    }
    if (rewriteDupes(adjusted, rewrite)) {
      return original;
    }
    for (let i = 0; i < sameCount; i++) {
      const { lookupIndex: lookupIndex2, name: name2, params: params2 } = allSame[i];
      const { def, path } = lookup.getSiType(params2[paramIdx].type.unwrap());
      const flat = extractNameFlat(portable, lookupIndex2, params2, path, true);
      if (def.isPrimitive || !flat) {
        return null;
      }
      adjusted[i] = {
        lookupIndex: lookupIndex2,
        name: `${name2}${flat.name}`
      };
    }
    if (rewriteDupes(adjusted, rewrite)) {
      return original;
    }
    return null;
  }).filter((n) => !!n).map(({ lookupIndex, name, params }) => ({
    lookupIndex,
    name: rewrite[lookupIndex] || name,
    params
  }));
}
function registerTypes(lookup, lookups, names, params) {
  lookup.registry.register(lookups);
  if (params.SpRuntimeUncheckedExtrinsic) {
    const [addrParam, , sigParam] = params.SpRuntimeUncheckedExtrinsic;
    const siAddress = lookup.getSiType(addrParam.type.unwrap());
    const siSignature = lookup.getSiType(sigParam.type.unwrap());
    const nsSignature = siSignature.path.join("::");
    let nsAccountId = siAddress.path.join("::");
    const isMultiAddress = nsAccountId === "sp_runtime::multiaddress::MultiAddress";
    if (isMultiAddress) {
      const [idParam] = siAddress.params;
      nsAccountId = lookup.getSiType(idParam.type.unwrap()).path.join("::");
    }
    lookup.registry.register({
      // known: account::AccountId20, fp_account::AccountId20, primitive_types::H160
      AccountId: nsAccountId.endsWith("::AccountId20") || nsAccountId.endsWith("::H160") ? "AccountId20" : "AccountId32",
      Address: isMultiAddress ? "MultiAddress" : "AccountId",
      ExtrinsicSignature: ["sp_runtime::MultiSignature"].includes(nsSignature) ? "MultiSignature" : names[sigParam.type.unwrap().toNumber()] || "MultiSignature"
    });
  }
}
function extractAliases(params, isContract) {
  const hasParams = Object.keys(params).some((k) => !k.startsWith("Pallet"));
  const alias2 = {};
  if (params.SpRuntimeUncheckedExtrinsic) {
    const [, { type }] = params.SpRuntimeUncheckedExtrinsic;
    alias2[type.unwrap().toNumber()] = "Call";
  } else if (hasParams && !isContract) {
    l8.warn("Unable to determine runtime Call type, cannot inspect sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic");
  }
  if (params.FrameSystemEventRecord) {
    const [{ type }] = params.FrameSystemEventRecord;
    alias2[type.unwrap().toNumber()] = "Event";
  } else if (hasParams && !isContract) {
    l8.warn("Unable to determine runtime Event type, cannot inspect frame_system::EventRecord");
  }
  return alias2;
}
function extractTypeInfo(lookup, portable) {
  const nameInfo = [];
  const types2 = {};
  for (let i = 0, count = portable.length; i < count; i++) {
    const type = portable[i];
    const lookupIndex = type.id.toNumber();
    const extracted = extractName(portable, lookupIndex, portable[i]);
    if (extracted) {
      nameInfo.push(extracted);
    }
    types2[lookupIndex] = type;
  }
  const lookups = {};
  const names = {};
  const params = {};
  const dedup = removeDupeNames(lookup, portable, nameInfo);
  for (let i = 0, count = dedup.length; i < count; i++) {
    const { lookupIndex, name, params: p } = dedup[i];
    names[lookupIndex] = name;
    lookups[name] = lookup.registry.createLookupType(lookupIndex);
    params[name] = p;
  }
  return { lookups, names, params, types: types2 };
}
var PortableRegistry = class extends Struct {
  __internal__alias;
  __internal__lookups;
  __internal__names;
  __internal__params;
  __internal__typeDefs = {};
  __internal__types;
  constructor(registry, value, isContract) {
    super(registry, {
      types: "Vec<PortableType>"
    }, value);
    const { lookups, names, params, types: types2 } = extractTypeInfo(this, this.types);
    this.__internal__alias = extractAliases(params, isContract);
    this.__internal__lookups = lookups;
    this.__internal__names = names;
    this.__internal__params = params;
    this.__internal__types = types2;
  }
  /**
   * @description Returns all the available type names for this chain
   **/
  get names() {
    return Object.values(this.__internal__names).sort();
  }
  /**
   * @description Returns all the available parameterized types for this chain
   **/
  get paramTypes() {
    return this.__internal__params;
  }
  /**
   * @description The types of the registry
   */
  get types() {
    return this.getT("types");
  }
  /**
   * @description Register all available types into the registry (generally for internal usage)
   */
  register() {
    registerTypes(this, this.__internal__lookups, this.__internal__names, this.__internal__params);
  }
  /**
   * @description Returns the name for a specific lookup
   */
  getName(lookupId) {
    return this.__internal__names[this.__internal__getLookupId(lookupId)];
  }
  /**
   * @description Finds a specific type in the registry
   */
  getSiType(lookupId) {
    const found = (this.__internal__types || this.types)[this.__internal__getLookupId(lookupId)];
    if (!found) {
      throw new Error(`PortableRegistry: Unable to find type with lookupId ${lookupId.toString()}`);
    }
    return found.type;
  }
  /**
   * @description Lookup the type definition for the index
   */
  getTypeDef(lookupId) {
    const lookupIndex = this.__internal__getLookupId(lookupId);
    if (!this.__internal__typeDefs[lookupIndex]) {
      const lookupName = this.__internal__names[lookupIndex];
      const empty2 = {
        info: TypeDefInfo.DoNotConstruct,
        lookupIndex,
        lookupName,
        type: this.registry.createLookupType(lookupIndex)
      };
      if (lookupName) {
        this.__internal__typeDefs[lookupIndex] = empty2;
      }
      const extracted = this.__internal__extract(this.getSiType(lookupId), lookupIndex);
      if (!lookupName) {
        this.__internal__typeDefs[lookupIndex] = empty2;
      }
      Object.keys(extracted).forEach((k) => {
        if (k !== "lookupName" || extracted[k]) {
          this.__internal__typeDefs[lookupIndex][k] = extracted[k];
        }
      });
      if (extracted.info === TypeDefInfo.Plain) {
        this.__internal__typeDefs[lookupIndex].lookupNameRoot = this.__internal__typeDefs[lookupIndex].lookupName;
        delete this.__internal__typeDefs[lookupIndex].lookupName;
      }
    }
    return this.__internal__typeDefs[lookupIndex];
  }
  /**
   * @description For a specific field, perform adjustments to not have built-in conflicts
   */
  sanitizeField(name) {
    let nameField = null;
    let nameOrig = null;
    if (name.isSome) {
      nameField = stringCamelCase(name.unwrap());
      if (nameField.includes("#")) {
        nameOrig = nameField;
        nameField = nameOrig.replace(/#/g, "_");
      } else if (RESERVED.includes(nameField)) {
        nameOrig = nameField;
        nameField = `${nameField}_`;
      }
    }
    return [nameField, nameOrig];
  }
  /** @internal Creates a TypeDef based on an internal lookupId */
  __internal__createSiDef(lookupId) {
    const typeDef = this.getTypeDef(lookupId);
    const lookupIndex = lookupId.toNumber();
    return [TypeDefInfo.DoNotConstruct, TypeDefInfo.Enum, TypeDefInfo.Struct].includes(typeDef.info) && typeDef.lookupName ? {
      docs: typeDef.docs,
      info: TypeDefInfo.Si,
      lookupIndex,
      lookupName: this.__internal__names[lookupIndex],
      type: this.registry.createLookupType(lookupId)
    } : typeDef;
  }
  /** @internal Converts a lookupId input to the actual lookup index */
  __internal__getLookupId(lookupId) {
    if (isString(lookupId)) {
      if (!this.registry.isLookupType(lookupId)) {
        throw new Error(`PortableRegistry: Expected a lookup string type, found ${lookupId}`);
      }
      return parseInt(lookupId.replace("Lookup", ""), 10);
    } else if (isNumber(lookupId)) {
      return lookupId;
    }
    return lookupId.toNumber();
  }
  /** @internal Converts a type into a TypeDef for Codec usage */
  __internal__extract(type, lookupIndex) {
    const namespace = type.path.join("::");
    let typeDef;
    const aliasType = this.__internal__alias[lookupIndex] || getAliasPath(type);
    try {
      if (aliasType) {
        typeDef = this.__internal__extractAliasPath(lookupIndex, aliasType);
      } else {
        switch (type.def.type) {
          case "Array":
            typeDef = this.__internal__extractArray(lookupIndex, type.def.asArray);
            break;
          case "BitSequence":
            typeDef = this.__internal__extractBitSequence(lookupIndex, type.def.asBitSequence);
            break;
          case "Compact":
            typeDef = this.__internal__extractCompact(lookupIndex, type.def.asCompact);
            break;
          case "Composite":
            typeDef = this.__internal__extractComposite(lookupIndex, type, type.def.asComposite);
            break;
          case "HistoricMetaCompat":
            typeDef = this.__internal__extractHistoric(lookupIndex, type.def.asHistoricMetaCompat);
            break;
          case "Primitive":
            typeDef = this.__internal__extractPrimitive(lookupIndex, type);
            break;
          case "Sequence":
            typeDef = this.__internal__extractSequence(lookupIndex, type.def.asSequence);
            break;
          case "Tuple":
            typeDef = this.__internal__extractTuple(lookupIndex, type.def.asTuple);
            break;
          case "Variant":
            typeDef = this.__internal__extractVariant(lookupIndex, type, type.def.asVariant);
            break;
          default:
            assertUnreachable(type.def.type);
        }
      }
    } catch (error) {
      throw new Error(`PortableRegistry: ${lookupIndex}${namespace ? ` (${namespace})` : ""}: Error extracting ${stringify(type)}: ${error.message}`);
    }
    return objectSpread({
      docs: sanitizeDocs(type.docs),
      namespace
    }, typeDef);
  }
  /** @internal Extracts a ScaleInfo Array into TypeDef.VecFixed */
  __internal__extractArray(_, { len, type }) {
    const length = len.toNumber();
    if (length > 2048) {
      throw new Error("Only support for [Type; <length>], where length <= 2048");
    }
    return withTypeString(this.registry, {
      info: TypeDefInfo.VecFixed,
      length,
      sub: this.__internal__createSiDef(type)
    });
  }
  /** @internal Extracts a ScaleInfo BitSequence into TypeDef.Plain */
  __internal__extractBitSequence(_, { bitOrderType, bitStoreType }) {
    const a = this.__internal__createSiDef(bitOrderType);
    const b = this.__internal__createSiDef(bitStoreType);
    const [bitOrder, bitStore] = BITVEC_NS.includes(a.namespace || "") ? [a, b] : [b, a];
    if (!bitOrder.namespace || !BITVEC_NS.includes(bitOrder.namespace)) {
      throw new Error(`Unexpected bitOrder found as ${bitOrder.namespace || "<unknown>"}`);
    } else if (bitStore.info !== TypeDefInfo.Plain || bitStore.type !== "u8") {
      throw new Error(`Only u8 bitStore is currently supported, found ${bitStore.type}`);
    }
    const isLsb = BITVEC_NS_LSB.includes(bitOrder.namespace);
    if (!isLsb) {
    }
    return {
      info: TypeDefInfo.Plain,
      type: "BitVec"
    };
  }
  /** @internal Extracts a ScaleInfo Compact into TypeDef.Compact */
  __internal__extractCompact(_, { type }) {
    return withTypeString(this.registry, {
      info: TypeDefInfo.Compact,
      sub: this.__internal__createSiDef(type)
    });
  }
  /** @internal Extracts a ScaleInfo Composite into TypeDef.{BTree*, Range*, Wrapper*} */
  __internal__extractComposite(lookupIndex, { params, path }, { fields }) {
    if (path.length) {
      const pathFirst = path[0].toString();
      const pathLast = path[path.length - 1].toString();
      if (path.length === 1 && pathFirst === "BTreeMap") {
        if (params.length !== 2) {
          throw new Error(`BTreeMap requires 2 parameters, found ${params.length}`);
        }
        return withTypeString(this.registry, {
          info: TypeDefInfo.BTreeMap,
          sub: params.map(({ type }) => this.__internal__createSiDef(type.unwrap()))
        });
      } else if (path.length === 1 && pathFirst === "BTreeSet") {
        if (params.length !== 1) {
          throw new Error(`BTreeSet requires 1 parameter, found ${params.length}`);
        }
        return withTypeString(this.registry, {
          info: TypeDefInfo.BTreeSet,
          sub: this.__internal__createSiDef(params[0].type.unwrap())
        });
      } else if (["Range", "RangeInclusive"].includes(pathFirst)) {
        if (params.length !== 1) {
          throw new Error(`Range requires 1 parameter, found ${params.length}`);
        }
        return withTypeString(this.registry, {
          info: pathFirst === "Range" ? TypeDefInfo.Range : TypeDefInfo.RangeInclusive,
          sub: this.__internal__createSiDef(params[0].type.unwrap()),
          type: pathFirst
        });
      } else if (["WrapperKeepOpaque", "WrapperOpaque"].includes(pathLast)) {
        if (params.length !== 1) {
          throw new Error(`WrapperOpaque requires 1 parameter, found ${params.length}`);
        }
        return withTypeString(this.registry, {
          info: pathLast === "WrapperKeepOpaque" ? TypeDefInfo.WrapperKeepOpaque : TypeDefInfo.WrapperOpaque,
          sub: this.__internal__createSiDef(params[0].type.unwrap()),
          type: pathLast
        });
      }
    }
    return PATHS_SET.some((p) => matchParts(p, path)) ? this.__internal__extractCompositeSet(lookupIndex, params, fields) : this.__internal__extractFields(lookupIndex, fields);
  }
  /** @internal Extracts a ScaleInfo CompositeSet into TypeDef.Set */
  __internal__extractCompositeSet(_, params, fields) {
    if (params.length !== 1 || fields.length !== 1) {
      throw new Error("Set handling expects param/field as single entries");
    }
    return withTypeString(this.registry, {
      info: TypeDefInfo.Set,
      length: this.registry.createTypeUnsafe(this.registry.createLookupType(fields[0].type), []).bitLength(),
      sub: this.getSiType(params[0].type.unwrap()).def.asVariant.variants.map(({ index, name }) => ({
        // This will be an issue > 2^53 - 1 ... don't have those (yet)
        index: index.toNumber(),
        info: TypeDefInfo.Plain,
        name: name.toString(),
        type: "Null"
      }))
    });
  }
  /** @internal Extracts ScaleInfo enum/struct fields into TypeDef.{Struct, Tuple} */
  __internal__extractFields(lookupIndex, fields) {
    let isStruct = true;
    let isTuple = true;
    const count = fields.length;
    for (let f = 0; f < count; f++) {
      const { name } = fields[f];
      isStruct = isStruct && name.isSome;
      isTuple = isTuple && name.isNone;
    }
    if (!isTuple && !isStruct) {
      throw new Error("Invalid fields type detected, expected either Tuple (all unnamed) or Struct (all named)");
    }
    if (count === 0) {
      return {
        info: TypeDefInfo.Null,
        type: "Null"
      };
    } else if (isTuple && count === 1) {
      const typeDef = this.__internal__createSiDef(fields[0].type);
      return objectSpread({}, typeDef, lookupIndex === -1 ? null : {
        lookupIndex,
        lookupName: this.__internal__names[lookupIndex],
        lookupNameRoot: typeDef.lookupName
      }, fields[0].typeName.isSome ? { typeName: sanitize(fields[0].typeName.unwrap()) } : null);
    }
    const [sub, alias2] = this.__internal__extractFieldsAlias(fields);
    return withTypeString(this.registry, objectSpread({
      info: isTuple ? TypeDefInfo.Tuple : TypeDefInfo.Struct,
      sub
    }, alias2.size ? { alias: alias2 } : null, lookupIndex === -1 ? null : {
      lookupIndex,
      lookupName: this.__internal__names[lookupIndex]
    }));
  }
  /** @internal Apply field aliassed (with no JS conflicts) */
  __internal__extractFieldsAlias(fields) {
    const alias2 = /* @__PURE__ */ new Map();
    const count = fields.length;
    const sub = new Array(count);
    for (let i = 0; i < count; i++) {
      const { docs, name, type, typeName } = fields[i];
      const typeDef = this.__internal__createSiDef(type);
      if (name.isNone) {
        sub[i] = typeDef;
      } else {
        const [nameField, nameOrig] = this.sanitizeField(name);
        if (nameField && nameOrig) {
          alias2.set(nameField, nameOrig);
        }
        sub[i] = objectSpread({
          docs: sanitizeDocs(docs),
          name: nameField
        }, typeDef, typeName.isSome ? { typeName: sanitize(typeName.unwrap()) } : null);
      }
    }
    return [sub, alias2];
  }
  /** @internal Extracts an internal Historic (pre V14) type  */
  __internal__extractHistoric(_, type) {
    return objectSpread({
      displayName: type.toString(),
      isFromSi: true
    }, getTypeDef(type));
  }
  /** @internal Extracts a ScaleInfo Primitive into TypeDef.Plain */
  __internal__extractPrimitive(_, type) {
    const typeStr = type.def.asPrimitive.type.toString();
    return {
      info: TypeDefInfo.Plain,
      type: PRIMITIVE_ALIAS[typeStr] || typeStr.toLowerCase()
    };
  }
  /** @internal Applies an alias path onto the TypeDef */
  __internal__extractAliasPath(_, type) {
    return {
      info: TypeDefInfo.Plain,
      type
    };
  }
  /** @internal Extracts a ScaleInfo Sequence into TypeDef.Vec (with Bytes shortcut) */
  __internal__extractSequence(lookupIndex, { type }) {
    const sub = this.__internal__createSiDef(type);
    if (sub.type === "u8") {
      return {
        info: TypeDefInfo.Plain,
        type: "Bytes"
      };
    }
    return withTypeString(this.registry, {
      info: TypeDefInfo.Vec,
      lookupIndex,
      lookupName: this.__internal__names[lookupIndex],
      sub
    });
  }
  /** @internal Extracts a ScaleInfo Tuple into TypeDef.Tuple */
  __internal__extractTuple(lookupIndex, ids) {
    if (ids.length === 0) {
      return {
        info: TypeDefInfo.Null,
        type: "Null"
      };
    } else if (ids.length === 1) {
      return this.getTypeDef(ids[0]);
    }
    const sub = ids.map((t) => this.__internal__createSiDef(t));
    return withTypeString(this.registry, {
      info: TypeDefInfo.Tuple,
      lookupIndex,
      lookupName: this.__internal__names[lookupIndex],
      sub
    });
  }
  /** @internal Extracts a ScaleInfo Variant into TypeDef.{Option, Result, Enum} */
  __internal__extractVariant(lookupIndex, { params, path }, { variants }) {
    if (path.length) {
      const specialVariant = path[0].toString();
      if (specialVariant === "Option") {
        if (params.length !== 1) {
          throw new Error(`Option requires 1 parameter, found ${params.length}`);
        }
        return withTypeString(this.registry, {
          info: TypeDefInfo.Option,
          sub: this.__internal__createSiDef(params[0].type.unwrap())
        });
      } else if (specialVariant === "Result") {
        if (params.length !== 2) {
          throw new Error(`Result requires 2 parameters, found ${params.length}`);
        }
        return withTypeString(this.registry, {
          info: TypeDefInfo.Result,
          sub: params.map(({ type }, index) => objectSpread({
            name: ["Ok", "Error"][index]
          }, this.__internal__createSiDef(type.unwrap())))
        });
      }
    }
    if (variants.length === 0) {
      return {
        info: TypeDefInfo.Null,
        type: "Null"
      };
    }
    return this.__internal__extractVariantEnum(lookupIndex, variants);
  }
  /** @internal Extracts a ScaleInfo Variant into TypeDef.Enum */
  __internal__extractVariantEnum(lookupIndex, variants) {
    const sub = [];
    variants.slice().sort((a, b) => a.index.cmp(b.index)).forEach(({ fields, index: bnIndex, name }) => {
      const index = bnIndex.toNumber();
      while (sub.length !== index) {
        sub.push({
          index: sub.length,
          info: TypeDefInfo.Null,
          name: `__Unused${sub.length}`,
          type: "Null"
        });
      }
      sub.push(objectSpread(this.__internal__extractFields(-1, fields), {
        index,
        name: name.toString()
      }));
    });
    return withTypeString(this.registry, {
      info: TypeDefInfo.Enum,
      lookupIndex,
      lookupName: this.__internal__names[lookupIndex],
      sub
    });
  }
};

// node_modules/@polkadot/types/metadata/PortableRegistry/toV1.js
function convertType(key) {
  return (registry, { type }) => registry.createType("Si1TypeDef", {
    [key]: {
      type: type.toNumber()
    }
  });
}
var convertCompact = convertType("Compact");
var convertSequence = convertType("Sequence");

// node_modules/@polkadot/types/metadata/util/flattenUniq.js
function flattenUniq(list, result = []) {
  for (let i = 0, count = list.length; i < count; i++) {
    const entry = list[i];
    if (Array.isArray(entry)) {
      flattenUniq(entry, result);
    } else {
      result.push(entry);
    }
  }
  return [...new Set(result)];
}

// node_modules/@polkadot/types/metadata/util/getSiName.js
function getSiName(lookup, type) {
  const typeDef = lookup.getTypeDef(type);
  return typeDef.lookupName || typeDef.type;
}

// node_modules/@polkadot/types/metadata/util/extractTypes.js
function extractSubSingle(_, { sub }) {
  const { lookupName, type } = sub;
  return extractTypes([lookupName || type]);
}
function extractSubArray(_, { sub }) {
  return extractTypes(sub.map(({ lookupName, type }) => lookupName || type));
}
function unhandled(type, { info: info6 }) {
  throw new Error(`Unhandled: Unable to create and validate type from ${type} (info=${TypeDefInfo[info6]})`);
}
var mapping = {
  [TypeDefInfo.BTreeMap]: extractSubArray,
  [TypeDefInfo.BTreeSet]: extractSubSingle,
  [TypeDefInfo.Compact]: extractSubSingle,
  [TypeDefInfo.DoNotConstruct]: unhandled,
  [TypeDefInfo.Enum]: extractSubArray,
  [TypeDefInfo.HashMap]: extractSubArray,
  [TypeDefInfo.Int]: unhandled,
  [TypeDefInfo.Linkage]: extractSubSingle,
  [TypeDefInfo.Null]: unhandled,
  [TypeDefInfo.Option]: extractSubSingle,
  [TypeDefInfo.Plain]: (_, typeDef) => typeDef.lookupName || typeDef.type,
  [TypeDefInfo.Range]: extractSubSingle,
  [TypeDefInfo.RangeInclusive]: extractSubSingle,
  [TypeDefInfo.Result]: extractSubArray,
  [TypeDefInfo.Set]: extractSubArray,
  [TypeDefInfo.Si]: unhandled,
  [TypeDefInfo.Struct]: extractSubArray,
  [TypeDefInfo.Tuple]: extractSubArray,
  [TypeDefInfo.UInt]: unhandled,
  [TypeDefInfo.Vec]: extractSubSingle,
  [TypeDefInfo.VecFixed]: extractSubSingle,
  [TypeDefInfo.WrapperKeepOpaque]: extractSubSingle,
  [TypeDefInfo.WrapperOpaque]: extractSubSingle
};
function extractTypes(types2) {
  const count = types2.length;
  const result = new Array(count);
  for (let i = 0; i < count; i++) {
    const type = types2[i];
    const typeDef = getTypeDef(type);
    result[i] = mapping[typeDef.info](type, typeDef);
  }
  return result;
}

// node_modules/@polkadot/types/metadata/util/validateTypes.js
var l9 = logger("metadata");
function validateTypes(registry, throwError, types2) {
  const missing = flattenUniq(extractTypes(types2)).filter((type) => !registry.hasType(type) && !registry.isLookupType(type)).sort();
  if (missing.length !== 0) {
    const message = `Unknown types found, no types for ${missing.join(", ")}`;
    if (throwError) {
      throw new Error(message);
    } else {
      l9.warn(message);
    }
  }
  return types2;
}

// node_modules/@polkadot/types/metadata/util/getUniqTypes.js
function extractTypes2(lookup, types2) {
  return types2.map(({ type }) => lookup.getTypeDef(type).type);
}
function extractFieldTypes(lookup, type) {
  return lookup.getSiType(type).def.asVariant.variants.map(({ fields }) => extractTypes2(lookup, fields));
}
function getPalletNames({ lookup, pallets }) {
  return pallets.reduce((all3, { calls, constants, events: events2, storage }) => {
    all3.push([extractTypes2(lookup, constants)]);
    if (calls.isSome) {
      all3.push(extractFieldTypes(lookup, calls.unwrap().type));
    }
    if (events2.isSome) {
      all3.push(extractFieldTypes(lookup, events2.unwrap().type));
    }
    if (storage.isSome) {
      all3.push(storage.unwrap().items.map(({ type }) => {
        if (type.isPlain) {
          return [lookup.getTypeDef(type.asPlain).type];
        }
        const { hashers, key, value } = type.asMap;
        return hashers.length === 1 ? [
          lookup.getTypeDef(value).type,
          lookup.getTypeDef(key).type
        ] : [
          lookup.getTypeDef(value).type,
          ...lookup.getSiType(key).def.asTuple.map((t) => lookup.getTypeDef(t).type)
        ];
      }));
    }
    return all3;
  }, []);
}
function getUniqTypes(registry, meta, throwError) {
  return validateTypes(registry, throwError, flattenUniq(getPalletNames(meta)));
}

// node_modules/@polkadot/types/metadata/util/toCallsOnly.js
function trimDocs(docs) {
  const strings = docs.map((d) => d.toString().trim());
  const firstEmpty = strings.findIndex((d) => !d.length);
  return firstEmpty === -1 ? strings : strings.slice(0, firstEmpty);
}
function toCallsOnly(registry, { extrinsic, lookup, pallets }) {
  return registry.createTypeUnsafe("MetadataLatest", [{
    extrinsic,
    lookup: {
      types: lookup.types.map(({ id, type }) => registry.createTypeUnsafe("PortableType", [{
        id,
        type: objectSpread({}, type, { docs: trimDocs(type.docs) })
      }]))
    },
    pallets: pallets.map(({ calls, index, name }) => ({
      calls: registry.createTypeUnsafe("Option<PalletCallMetadataLatest>", [calls.unwrapOr(null)]),
      index,
      name
    }))
  }]).toJSON();
}

// node_modules/@polkadot/types/util/storage.js
function unwrapStorageSi(type) {
  return type.isPlain ? type.asPlain : type.asMap.value;
}
function unwrapStorageType(registry, type, isOptional) {
  const outputType = getSiName(registry.lookup, unwrapStorageSi(type));
  return isOptional ? `Option<${outputType}>` : outputType;
}

// node_modules/@polkadot/types/create/lazy.js
function lazyVariants(lookup, { type }, getName, creator) {
  const result = {};
  const variants = lookup.getSiType(type).def.asVariant.variants;
  for (let i = 0, count = variants.length; i < count; i++) {
    lazyMethod(result, variants[i], creator, getName, i);
  }
  return result;
}

// node_modules/@polkadot/types/extrinsic/signedExtensions/emptyCheck.js
var emptyCheck = {
  extrinsic: {},
  payload: {}
};

// node_modules/@polkadot/types/extrinsic/signedExtensions/polkadot.js
var polkadot = {
  LimitParathreadCommits: emptyCheck,
  OnlyStakingAndClaims: emptyCheck,
  PrevalidateAttests: emptyCheck,
  RestrictFunctionality: emptyCheck,
  TransactionCallFilter: emptyCheck,
  ValidateDoubleVoteReports: emptyCheck
};

// node_modules/@polkadot/types/extrinsic/signedExtensions/shell.js
var shell = {
  DisallowSigned: emptyCheck
};

// node_modules/@polkadot/types/extrinsic/signedExtensions/statemint.js
var statemint = {
  ChargeAssetTxPayment: {
    extrinsic: {
      tip: "Compact<Balance>",
      // eslint-disable-next-line sort-keys
      assetId: "TAssetConversion"
    },
    payload: {}
  }
};

// node_modules/@polkadot/types/extrinsic/signedExtensions/substrate.js
var CheckMortality = {
  extrinsic: {
    era: "ExtrinsicEra"
  },
  payload: {
    blockHash: "Hash"
  }
};
var ChargeTransactionPayment = {
  extrinsic: {
    tip: "Compact<Balance>"
  },
  payload: {}
};
var substrate = {
  ChargeTransactionPayment,
  CheckBlockGasLimit: emptyCheck,
  CheckEra: CheckMortality,
  CheckGenesis: {
    extrinsic: {},
    payload: {
      genesisHash: "Hash"
    }
  },
  CheckMortality,
  CheckNonZeroSender: emptyCheck,
  CheckNonce: {
    extrinsic: {
      nonce: "Compact<Index>"
    },
    payload: {}
  },
  CheckSpecVersion: {
    extrinsic: {},
    payload: {
      specVersion: "u32"
    }
  },
  CheckTxVersion: {
    extrinsic: {},
    payload: {
      transactionVersion: "u32"
    }
  },
  CheckVersion: {
    extrinsic: {},
    payload: {
      specVersion: "u32"
    }
  },
  CheckWeight: emptyCheck,
  LockStakingStatus: emptyCheck,
  SkipCheckIfFeeless: ChargeTransactionPayment,
  ValidateEquivocationReport: emptyCheck
};

// node_modules/@polkadot/types/extrinsic/signedExtensions/index.js
var allExtensions = objectSpread({}, substrate, polkadot, shell, statemint);
var fallbackExtensions = [
  "CheckVersion",
  "CheckGenesis",
  "CheckEra",
  "CheckNonce",
  "CheckWeight",
  "ChargeTransactionPayment",
  "CheckBlockGasLimit"
];
function findUnknownExtensions(extensions, userExtensions = {}) {
  const names = [...Object.keys(allExtensions), ...Object.keys(userExtensions)];
  return extensions.filter((k) => !names.includes(k));
}
function expandExtensionTypes(extensions, type, userExtensions = {}) {
  return extensions.map((k) => userExtensions[k] || allExtensions[k]).filter((info6) => !!info6).reduce((result, info6) => objectSpread(result, info6[type]), {});
}

// node_modules/@polkadot/types/generic/Event.js
function decodeEvent(registry, value) {
  if (!value?.length) {
    return { DataType: Null };
  }
  const index = value.subarray(0, 2);
  return {
    DataType: registry.findMetaEvent(index),
    value: {
      data: value.subarray(2),
      index
    }
  };
}
var GenericEventData = class extends Tuple {
  __internal__meta;
  __internal__method;
  __internal__names = null;
  __internal__section;
  __internal__typeDef;
  constructor(registry, value, meta, section2 = "<unknown>", method = "<unknown>") {
    const fields = meta?.fields || [];
    super(registry, fields.map(({ type }) => registry.createLookupType(type)), value);
    this.__internal__meta = meta;
    this.__internal__method = method;
    this.__internal__section = section2;
    this.__internal__typeDef = fields.map(({ type }) => registry.lookup.getTypeDef(type));
    const names = fields.map(({ name }) => registry.lookup.sanitizeField(name)[0]).filter((n) => !!n);
    if (names.length === fields.length) {
      this.__internal__names = names;
      objectProperties(this, names, (_, i) => this[i]);
    }
  }
  /**
   * @description The wrapped [[EventMetadata]]
   */
  get meta() {
    return this.__internal__meta;
  }
  /**
   * @description The method as a string
   */
  get method() {
    return this.__internal__method;
  }
  /**
   * @description The field names (as available)
   */
  get names() {
    return this.__internal__names;
  }
  /**
   * @description The section as a string
   */
  get section() {
    return this.__internal__section;
  }
  /**
   * @description The [[TypeDef]] for this event
   */
  get typeDef() {
    return this.__internal__typeDef;
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(isExtended) {
    if (this.__internal__names !== null) {
      const json = {};
      for (let i = 0, count = this.__internal__names.length; i < count; i++) {
        json[this.__internal__names[i]] = this[i].toHuman(isExtended);
      }
      return json;
    }
    return super.toHuman(isExtended);
  }
};
var GenericEvent = class extends Struct {
  // Currently we _only_ decode from Uint8Array, since we expect it to
  // be used via EventRecord
  constructor(registry, _value) {
    const { DataType, value } = decodeEvent(registry, _value);
    super(registry, {
      index: "EventId",
      // eslint-disable-next-line sort-keys
      data: DataType
    }, value);
  }
  /**
   * @description The wrapped [[EventData]]
   */
  get data() {
    return this.getT("data");
  }
  /**
   * @description The [[EventId]], identifying the raw event
   */
  get index() {
    return this.getT("index");
  }
  /**
   * @description The [[EventMetadata]] with the documentation
   */
  get meta() {
    return this.data.meta;
  }
  /**
   * @description The method string identifying the event
   */
  get method() {
    return this.data.method;
  }
  /**
   * @description The section string identifying the event
   */
  get section() {
    return this.data.section;
  }
  /**
   * @description The [[TypeDef]] for the event
   */
  get typeDef() {
    return this.data.typeDef;
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(isExpanded) {
    return objectSpread({
      method: this.method,
      section: this.section
    }, isExpanded ? { docs: this.meta.docs.map((d) => d.toString()) } : null, super.toHuman(isExpanded));
  }
};

// node_modules/@polkadot/types/index.types.js
var index_types_exports = {};
__export(index_types_exports, {
  BitVec: () => BitVec,
  Bool: () => bool,
  Bytes: () => Bytes,
  Data: () => Data,
  F32: () => f32,
  F64: () => f64,
  GenericAccountId: () => GenericAccountId,
  GenericAccountId32: () => GenericAccountId,
  GenericAccountId33: () => GenericAccountId33,
  GenericAccountIndex: () => GenericAccountIndex,
  GenericAddress: () => GenericMultiAddress,
  GenericBlock: () => GenericBlock,
  GenericCall: () => GenericCall,
  GenericChainProperties: () => GenericChainProperties,
  GenericConsensusEngineId: () => GenericConsensusEngineId,
  GenericEthereumAccountId: () => GenericEthereumAccountId,
  GenericEthereumLookupSource: () => GenericEthereumLookupSource,
  GenericEvent: () => GenericEvent,
  GenericEventData: () => GenericEventData,
  GenericExtrinsic: () => GenericExtrinsic,
  GenericExtrinsicEra: () => GenericExtrinsicEra,
  GenericExtrinsicPayload: () => GenericExtrinsicPayload,
  GenericExtrinsicPayloadUnknown: () => GenericExtrinsicPayloadUnknown,
  GenericExtrinsicPayloadV4: () => GenericExtrinsicPayloadV4,
  GenericExtrinsicSignatureV4: () => GenericExtrinsicSignatureV4,
  GenericExtrinsicUnknown: () => GenericExtrinsicUnknown,
  GenericExtrinsicV4: () => GenericExtrinsicV4,
  GenericImmortalEra: () => ImmortalEra,
  GenericLookupSource: () => GenericLookupSource,
  GenericMortalEra: () => MortalEra,
  GenericMultiAddress: () => GenericMultiAddress,
  GenericSignerPayload: () => GenericSignerPayload,
  GenericVote: () => GenericVote,
  I128: () => i128,
  I16: () => i16,
  I256: () => i256,
  I32: () => i32,
  I64: () => i64,
  I8: () => i8,
  ISize: () => isize,
  Null: () => Null,
  OptionBool: () => OptionBool,
  StorageKey: () => StorageKey,
  Text: () => Text,
  Type: () => Type,
  U128: () => u128,
  U16: () => u16,
  U256: () => u256,
  U32: () => u32,
  U64: () => u64,
  U8: () => u8,
  USize: () => usize,
  bool: () => bool,
  f32: () => f32,
  f64: () => f64,
  i128: () => i128,
  i16: () => i16,
  i256: () => i256,
  i32: () => i32,
  i64: () => i64,
  i8: () => i8,
  isize: () => isize,
  u128: () => u128,
  u16: () => u16,
  u256: () => u256,
  u32: () => u32,
  u64: () => u64,
  u8: () => u8,
  usize: () => usize
});

// node_modules/@polkadot/types/extrinsic/v4/Extrinsic.js
var EXTRINSIC_VERSION = 4;
var GenericExtrinsicV4 = class _GenericExtrinsicV4 extends Struct {
  constructor(registry, value, { isSigned } = {}) {
    super(registry, {
      signature: "ExtrinsicSignatureV4",
      // eslint-disable-next-line sort-keys
      method: "Call"
    }, _GenericExtrinsicV4.decodeExtrinsic(registry, value, isSigned));
  }
  /** @internal */
  static decodeExtrinsic(registry, value, isSigned = false) {
    if (value instanceof _GenericExtrinsicV4) {
      return value;
    } else if (value instanceof registry.createClassUnsafe("Call")) {
      return { method: value };
    } else if (isU8a(value)) {
      const signature = registry.createTypeUnsafe("ExtrinsicSignatureV4", [value, { isSigned }]);
      const method = registry.createTypeUnsafe("Call", [value.subarray(signature.encodedLength)]);
      return {
        method,
        signature
      };
    }
    return value || {};
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    return this.toU8a().length;
  }
  /**
   * @description The [[Call]] this extrinsic wraps
   */
  get method() {
    return this.getT("method");
  }
  /**
   * @description The [[ExtrinsicSignatureV4]]
   */
  get signature() {
    return this.getT("signature");
  }
  /**
   * @description The version for the signature
   */
  get version() {
    return EXTRINSIC_VERSION;
  }
  /**
   * @description Add an [[ExtrinsicSignatureV4]] to the extrinsic (already generated)
   */
  addSignature(signer, signature, payload) {
    this.signature.addSignature(signer, signature, payload);
    return this;
  }
  /**
   * @description Sign the extrinsic with a specific keypair
   */
  sign(account3, options) {
    this.signature.sign(this.method, account3, options);
    return this;
  }
  /**
   * @describe Adds a fake signature to the extrinsic
   */
  signFake(signer, options) {
    this.signature.signFake(this.method, signer, options);
    return this;
  }
};

// node_modules/@polkadot/types/extrinsic/constants.js
var BIT_SIGNED = 128;
var BIT_UNSIGNED = 0;
var EMPTY_U8A = new Uint8Array();
var DEFAULT_VERSION = 4;
var IMMORTAL_ERA = new Uint8Array([0]);
var UNMASK_VERSION = 127;

// node_modules/@polkadot/types/extrinsic/Extrinsic.js
var VERSIONS = [
  "ExtrinsicUnknown",
  // v0 is unknown
  "ExtrinsicUnknown",
  "ExtrinsicUnknown",
  "ExtrinsicUnknown",
  "ExtrinsicV4"
];
function newFromValue(registry, value, version) {
  if (value instanceof GenericExtrinsic) {
    return value.unwrap();
  }
  const isSigned = (version & BIT_SIGNED) === BIT_SIGNED;
  const type = VERSIONS[version & UNMASK_VERSION] || VERSIONS[0];
  return registry.createTypeUnsafe(type, [value, { isSigned, version }]);
}
function decodeExtrinsic(registry, value, version = DEFAULT_VERSION) {
  if (isU8a(value) || Array.isArray(value) || isHex(value)) {
    return decodeU8a3(registry, u8aToU8a(value), version);
  } else if (value instanceof registry.createClassUnsafe("Call")) {
    return newFromValue(registry, { method: value }, version);
  }
  return newFromValue(registry, value, version);
}
function decodeU8a3(registry, value, version) {
  if (!value.length) {
    return newFromValue(registry, new Uint8Array(), version);
  }
  const [offset, length] = compactFromU8a(value);
  const total = offset + length.toNumber();
  if (total > value.length) {
    throw new Error(`Extrinsic: length less than remainder, expected at least ${total}, found ${value.length}`);
  }
  const data = value.subarray(offset, total);
  return newFromValue(registry, data.subarray(1), data[0]);
}
var ExtrinsicBase = class extends AbstractBase {
  constructor(registry, value, initialU8aLength) {
    super(registry, value, initialU8aLength);
    const signKeys = Object.keys(registry.getSignedExtensionTypes());
    const getter = (key) => this.inner.signature[key];
    for (let i = 0, count = signKeys.length; i < count; i++) {
      objectProperty(this, signKeys[i], getter);
    }
  }
  /**
   * @description The arguments passed to for the call, exposes args so it is compatible with [[Call]]
   */
  get args() {
    return this.method.args;
  }
  /**
   * @description The argument definitions, compatible with [[Call]]
   */
  get argsDef() {
    return this.method.argsDef;
  }
  /**
   * @description The actual `[sectionIndex, methodIndex]` as used in the Call
   */
  get callIndex() {
    return this.method.callIndex;
  }
  /**
   * @description The actual data for the Call
   */
  get data() {
    return this.method.data;
  }
  /**
   * @description The era for this extrinsic
   */
  get era() {
    return this.inner.signature.era;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    return this.toU8a().length;
  }
  /**
   * @description `true` id the extrinsic is signed
   */
  get isSigned() {
    return this.inner.signature.isSigned;
  }
  /**
   * @description The length of the actual data, excluding prefix
   */
  get length() {
    return this.toU8a(true).length;
  }
  /**
   * @description The [[FunctionMetadataLatest]] that describes the extrinsic
   */
  get meta() {
    return this.method.meta;
  }
  /**
   * @description The [[Call]] this extrinsic wraps
   */
  get method() {
    return this.inner.method;
  }
  /**
   * @description The nonce for this extrinsic
   */
  get nonce() {
    return this.inner.signature.nonce;
  }
  /**
   * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
   */
  get signature() {
    return this.inner.signature.signature;
  }
  /**
   * @description The [[Address]] that signed
   */
  get signer() {
    return this.inner.signature.signer;
  }
  /**
   * @description Forwards compat
   */
  get tip() {
    return this.inner.signature.tip;
  }
  /**
   * @description Returns the raw transaction version (not flagged with signing information)
  */
  get type() {
    return this.inner.version;
  }
  get inner() {
    return this.unwrap();
  }
  /**
   * @description Returns the encoded version flag
  */
  get version() {
    return this.type | (this.isSigned ? BIT_SIGNED : BIT_UNSIGNED);
  }
  /**
   * @description Checks if the source matches this in type
   */
  is(other) {
    return this.method.is(other);
  }
  unwrap() {
    return super.unwrap();
  }
};
var GenericExtrinsic = class extends ExtrinsicBase {
  __internal__hashCache;
  static LATEST_EXTRINSIC_VERSION = EXTRINSIC_VERSION;
  constructor(registry, value, { version } = {}) {
    super(registry, decodeExtrinsic(registry, value, version));
  }
  /**
   * @description returns a hash of the contents
   */
  get hash() {
    if (!this.__internal__hashCache) {
      this.__internal__hashCache = super.hash;
    }
    return this.__internal__hashCache;
  }
  /**
   * @description Injects an already-generated signature into the extrinsic
   */
  addSignature(signer, signature, payload) {
    this.inner.addSignature(signer, signature, payload);
    this.__internal__hashCache = void 0;
    return this;
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    const encoded = u8aConcat(...this.toU8aInner());
    return {
      inner: this.isSigned ? this.inner.inspect().inner : this.inner.method.inspect().inner,
      outer: [compactToU8a(encoded.length), new Uint8Array([this.version])]
    };
  }
  /**
   * @description Sign the extrinsic with a specific keypair
   */
  sign(account3, options) {
    this.inner.sign(account3, options);
    this.__internal__hashCache = void 0;
    return this;
  }
  /**
   * @describe Adds a fake signature to the extrinsic
   */
  signFake(signer, options) {
    this.inner.signFake(signer, options);
    this.__internal__hashCache = void 0;
    return this;
  }
  /**
   * @description Returns a hex string representation of the value
   */
  toHex(isBare) {
    return u8aToHex(this.toU8a(isBare));
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(isExpanded) {
    return objectSpread({}, {
      isSigned: this.isSigned,
      method: this.method.toHuman(isExpanded)
    }, this.isSigned ? {
      era: this.era.toHuman(isExpanded),
      nonce: this.nonce.toHuman(isExpanded),
      signature: this.signature.toHex(),
      signer: this.signer.toHuman(isExpanded),
      tip: this.tip.toHuman(isExpanded)
    } : null);
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return this.toHex();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "Extrinsic";
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value is not length-prefixed
   */
  toU8a(isBare) {
    const encoded = u8aConcat(...this.toU8aInner());
    return isBare ? encoded : compactAddLength(encoded);
  }
  toU8aInner() {
    return [
      new Uint8Array([this.version]),
      this.inner.toU8a()
    ];
  }
};

// node_modules/@polkadot/types/extrinsic/ExtrinsicEra.js
function getTrailingZeros(period) {
  const binary = period.toString(2);
  let index = 0;
  while (binary[binary.length - 1 - index] === "0") {
    index++;
  }
  return index;
}
function decodeMortalEra(registry, value) {
  if (isU8a(value) || isHex(value) || Array.isArray(value)) {
    return decodeMortalU8a(registry, u8aToU8a(value));
  } else if (!value) {
    return [new u64(registry), new u64(registry)];
  } else if (isObject(value)) {
    return decodeMortalObject(registry, value);
  }
  throw new Error("Invalid data passed to Mortal era");
}
function decodeMortalObject(registry, value) {
  const { current, period } = value;
  let calPeriod = Math.pow(2, Math.ceil(Math.log2(period)));
  calPeriod = Math.min(Math.max(calPeriod, 4), 1 << 16);
  const phase = current % calPeriod;
  const quantizeFactor = Math.max(calPeriod >> 12, 1);
  const quantizedPhase = phase / quantizeFactor * quantizeFactor;
  return [new u64(registry, calPeriod), new u64(registry, quantizedPhase)];
}
function decodeMortalU8a(registry, value) {
  if (value.length === 0) {
    return [new u64(registry), new u64(registry)];
  }
  const first2 = u8aToBn(value.subarray(0, 1)).toNumber();
  const second = u8aToBn(value.subarray(1, 2)).toNumber();
  const encoded = first2 + (second << 8);
  const period = 2 << encoded % (1 << 4);
  const quantizeFactor = Math.max(period >> 12, 1);
  const phase = (encoded >> 4) * quantizeFactor;
  if (period < 4 || phase >= period) {
    throw new Error("Invalid data passed to Mortal era");
  }
  return [new u64(registry, period), new u64(registry, phase)];
}
function decodeExtrinsicEra(value = new Uint8Array()) {
  if (isU8a(value)) {
    return !value.length || value[0] === 0 ? new Uint8Array([0]) : new Uint8Array([1, value[0], value[1]]);
  } else if (!value) {
    return new Uint8Array([0]);
  } else if (value instanceof GenericExtrinsicEra) {
    return decodeExtrinsicEra(value.toU8a());
  } else if (isHex(value)) {
    return decodeExtrinsicEra(hexToU8a(value));
  } else if (isObject(value)) {
    const entries = Object.entries(value).map(([k, v]) => [k.toLowerCase(), v]);
    const mortal = entries.find(([k]) => k.toLowerCase() === "mortalera");
    const immortal = entries.find(([k]) => k.toLowerCase() === "immortalera");
    return mortal ? { MortalEra: mortal[1] } : immortal ? { ImmortalEra: immortal[1] } : { MortalEra: value };
  }
  throw new Error("Invalid data passed to Era");
}
var ImmortalEra = class extends Raw {
  constructor(registry, _value) {
    super(registry, IMMORTAL_ERA);
  }
};
var MortalEra = class extends Tuple {
  constructor(registry, value) {
    super(registry, {
      period: u64,
      phase: u64
    }, decodeMortalEra(registry, value));
  }
  /**
   * @description Encoded length for mortals occupy 2 bytes, different from the actual Tuple since it is encoded. This is a shortcut fro `toU8a().length`
   */
  get encodedLength() {
    return 2 | 0;
  }
  /**
   * @description The period of this Mortal wraps as a [[U64]]
   */
  get period() {
    return this[0];
  }
  /**
   * @description The phase of this Mortal wraps as a [[U64]]
   */
  get phase() {
    return this[1];
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman() {
    return {
      period: formatNumber(this.period),
      phase: formatNumber(this.phase)
    };
  }
  /**
   * @description Returns a JSON representation of the actual value
   */
  toJSON() {
    return this.toHex();
  }
  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   * Period and phase are encoded:
   *   - The period of validity from the block hash found in the signing material.
   *   - The phase in the period that this transaction's lifetime begins (and, importantly,
   *     implies which block hash is included in the signature material). If the `period` is
   *     greater than 1 << 12, then it will be a factor of the times greater than 1<<12 that
   *     `period` is.
   */
  toU8a(_isBare) {
    const period = this.period.toNumber();
    const encoded = Math.min(15, Math.max(1, getTrailingZeros(period) - 1)) + (this.phase.toNumber() / Math.max(period >> 12, 1) << 4);
    return new Uint8Array([
      encoded & 255,
      encoded >> 8
    ]);
  }
  /**
   * @description Get the block number of the start of the era whose properties this object describes that `current` belongs to.
   */
  birth(current) {
    const phase = this.phase.toNumber();
    const period = this.period.toNumber();
    return ~~((Math.max(bnToBn(current).toNumber(), phase) - phase) / period) * period + phase;
  }
  /**
   * @description Get the block number of the first block at which the era has ended.
   */
  death(current) {
    return this.birth(current) + this.period.toNumber();
  }
};
var GenericExtrinsicEra = class extends Enum {
  constructor(registry, value) {
    super(registry, {
      ImmortalEra,
      MortalEra
    }, decodeExtrinsicEra(value));
  }
  /**
   * @description Override the encoded length method
   */
  get encodedLength() {
    return this.isImmortalEra ? this.asImmortalEra.encodedLength : this.asMortalEra.encodedLength;
  }
  /**
   * @description Returns the item as a [[ImmortalEra]]
   */
  get asImmortalEra() {
    if (!this.isImmortalEra) {
      throw new Error(`Cannot convert '${this.type}' via asImmortalEra`);
    }
    return this.inner;
  }
  /**
   * @description Returns the item as a [[MortalEra]]
   */
  get asMortalEra() {
    if (!this.isMortalEra) {
      throw new Error(`Cannot convert '${this.type}' via asMortalEra`);
    }
    return this.inner;
  }
  /**
   * @description `true` if Immortal
   */
  get isImmortalEra() {
    return this.index === 0;
  }
  /**
   * @description `true` if Mortal
   */
  get isMortalEra() {
    return this.index > 0;
  }
  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    return this.isMortalEra ? this.asMortalEra.toU8a(isBare) : this.asImmortalEra.toU8a(isBare);
  }
};

// node_modules/@polkadot/types/extrinsic/ExtrinsicPayload.js
var VERSIONS2 = [
  "ExtrinsicPayloadUnknown",
  // v0 is unknown
  "ExtrinsicPayloadUnknown",
  "ExtrinsicPayloadUnknown",
  "ExtrinsicPayloadUnknown",
  "ExtrinsicPayloadV4"
];
function decodeExtrinsicPayload(registry, value, version = DEFAULT_VERSION) {
  if (value instanceof GenericExtrinsicPayload) {
    return value.unwrap();
  }
  return registry.createTypeUnsafe(VERSIONS2[version] || VERSIONS2[0], [value, { version }]);
}
var GenericExtrinsicPayload = class extends AbstractBase {
  constructor(registry, value, { version } = {}) {
    super(registry, decodeExtrinsicPayload(registry, value, version));
  }
  /**
   * @description The block [[BlockHash]] the signature applies to (mortal/immortal)
   */
  get blockHash() {
    return this.inner.blockHash;
  }
  /**
   * @description The [[ExtrinsicEra]]
   */
  get era() {
    return this.inner.era;
  }
  /**
   * @description The genesis block [[BlockHash]] the signature applies to
   */
  get genesisHash() {
    return this.inner.genesisHash || this.registry.createTypeUnsafe("Hash", []);
  }
  /**
   * @description The [[Bytes]] contained in the payload
   */
  get method() {
    return this.inner.method;
  }
  /**
   * @description The [[Index]]
   */
  get nonce() {
    return this.inner.nonce;
  }
  /**
   * @description The specVersion as a [[u32]] for this payload
   */
  get specVersion() {
    return this.inner.specVersion || this.registry.createTypeUnsafe("u32", []);
  }
  /**
   * @description The [[Balance]]
   */
  get tip() {
    return this.inner.tip || this.registry.createTypeUnsafe("Compact<Balance>", []);
  }
  /**
   * @description The transaction version as a [[u32]] for this payload
   */
  get transactionVersion() {
    return this.inner.transactionVersion || this.registry.createTypeUnsafe("u32", []);
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    return this.inner.eq(other);
  }
  /**
   * @description Sign the payload with the keypair
   */
  sign(signerPair) {
    const signature = this.inner.sign(signerPair);
    return {
      signature: u8aToHex(signature)
    };
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(isExtended) {
    return this.inner.toHuman(isExtended);
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return this.toHex();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "ExtrinsicPayload";
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return this.toHex();
  }
  /**
   * @description Returns a serialized u8a form
   */
  toU8a(isBare) {
    return super.toU8a(isBare ? { method: true } : false);
  }
};

// node_modules/@polkadot/types/extrinsic/ExtrinsicPayloadUnknown.js
var GenericExtrinsicPayloadUnknown = class extends Struct {
  constructor(registry, _value, { version = 0 } = {}) {
    super(registry, {});
    throw new Error(`Unsupported extrinsic payload version ${version}`);
  }
};

// node_modules/@polkadot/types/extrinsic/ExtrinsicUnknown.js
var GenericExtrinsicUnknown = class extends Struct {
  constructor(registry, _value, { isSigned = false, version = 0 } = {}) {
    super(registry, {});
    throw new Error(`Unsupported ${isSigned ? "" : "un"}signed extrinsic version ${version & UNMASK_VERSION}`);
  }
};

// node_modules/@polkadot/types/extrinsic/SignerPayload.js
var knownTypes = {
  address: "Address",
  blockHash: "Hash",
  blockNumber: "BlockNumber",
  era: "ExtrinsicEra",
  genesisHash: "Hash",
  method: "Call",
  nonce: "Compact<Index>",
  runtimeVersion: "RuntimeVersion",
  signedExtensions: "Vec<Text>",
  tip: "Compact<Balance>",
  version: "u8"
};
var GenericSignerPayload = class extends Struct {
  __internal__extraTypes;
  constructor(registry, value) {
    const extensionTypes = objectSpread({}, registry.getSignedExtensionTypes(), registry.getSignedExtensionExtra());
    super(registry, objectSpread({}, extensionTypes, knownTypes), value);
    this.__internal__extraTypes = {};
    const getter = (key) => this.get(key);
    for (const [key, type] of Object.entries(extensionTypes)) {
      if (!knownTypes[key]) {
        this.__internal__extraTypes[key] = type;
      }
      objectProperty(this, key, getter);
    }
  }
  get address() {
    return this.getT("address");
  }
  get blockHash() {
    return this.getT("blockHash");
  }
  get blockNumber() {
    return this.getT("blockNumber");
  }
  get era() {
    return this.getT("era");
  }
  get genesisHash() {
    return this.getT("genesisHash");
  }
  get method() {
    return this.getT("method");
  }
  get nonce() {
    return this.getT("nonce");
  }
  get runtimeVersion() {
    return this.getT("runtimeVersion");
  }
  get signedExtensions() {
    return this.getT("signedExtensions");
  }
  get tip() {
    return this.getT("tip");
  }
  get version() {
    return this.getT("version");
  }
  /**
   * @description Creates an representation of the structure as an ISignerPayload JSON
   */
  toPayload() {
    const result = {};
    const keys2 = Object.keys(this.__internal__extraTypes);
    for (let i = 0, count = keys2.length; i < count; i++) {
      const key = keys2[i];
      const value = this.getT(key);
      if (!(value instanceof Option) || value.isSome) {
        result[key] = value.toJSON();
      }
    }
    return objectSpread(result, {
      // the known defaults as managed explicitly and has different
      // formatting in cases, e.g. we mostly expose a hex format here
      address: this.address.toString(),
      blockHash: this.blockHash.toHex(),
      blockNumber: this.blockNumber.toHex(),
      era: this.era.toHex(),
      genesisHash: this.genesisHash.toHex(),
      method: this.method.toHex(),
      nonce: this.nonce.toHex(),
      signedExtensions: this.signedExtensions.map((e) => e.toString()),
      specVersion: this.runtimeVersion.specVersion.toHex(),
      tip: this.tip.toHex(),
      transactionVersion: this.runtimeVersion.transactionVersion.toHex(),
      version: this.version.toNumber()
    });
  }
  /**
   * @description Creates a representation of the payload in raw Exrinsic form
   */
  toRaw() {
    const payload = this.toPayload();
    const data = u8aToHex(this.registry.createTypeUnsafe("ExtrinsicPayload", [payload, { version: payload.version }]).toU8a({ method: true }));
    return {
      address: payload.address,
      data,
      type: "payload"
    };
  }
};

// node_modules/@polkadot/types/extrinsic/util.js
function sign(registry, signerPair, u8a, options) {
  const encoded = u8a.length > 256 ? registry.hash(u8a) : u8a;
  return signerPair.sign(encoded, options);
}

// node_modules/@polkadot/types/extrinsic/v4/ExtrinsicPayload.js
var GenericExtrinsicPayloadV4 = class extends Struct {
  __internal__signOptions;
  constructor(registry, value) {
    super(registry, objectSpread({ method: "Bytes" }, registry.getSignedExtensionTypes(), registry.getSignedExtensionExtra()), value);
    this.__internal__signOptions = {
      withType: registry.createTypeUnsafe("ExtrinsicSignature", []) instanceof Enum
    };
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    return super.inspect({ method: true });
  }
  /**
   * @description The block [[BlockHash]] the signature applies to (mortal/immortal)
   */
  get blockHash() {
    return this.getT("blockHash");
  }
  /**
   * @description The [[ExtrinsicEra]]
   */
  get era() {
    return this.getT("era");
  }
  /**
   * @description The genesis [[BlockHash]] the signature applies to (mortal/immortal)
   */
  get genesisHash() {
    return this.getT("genesisHash");
  }
  /**
   * @description The [[Bytes]] contained in the payload
   */
  get method() {
    return this.getT("method");
  }
  /**
   * @description The [[Index]]
   */
  get nonce() {
    return this.getT("nonce");
  }
  /**
   * @description The specVersion for this signature
   */
  get specVersion() {
    return this.getT("specVersion");
  }
  /**
   * @description The tip [[Balance]]
   */
  get tip() {
    return this.getT("tip");
  }
  /**
   * @description The transactionVersion for this signature
   */
  get transactionVersion() {
    return this.getT("transactionVersion");
  }
  /**
   * @description The (optional) asset id for this signature for chains that support transaction fees in assets
   */
  get assetId() {
    return this.getT("assetId");
  }
  /**
   * @description Sign the payload with the keypair
   */
  sign(signerPair) {
    return sign(this.registry, signerPair, this.toU8a({ method: true }), this.__internal__signOptions);
  }
};

// node_modules/@polkadot/types/extrinsic/v4/ExtrinsicSignature.js
var FAKE_SIGNATURE = new Uint8Array(256).fill(1);
function toAddress(registry, address) {
  return registry.createTypeUnsafe("Address", [isU8a(address) ? u8aToHex(address) : address]);
}
var GenericExtrinsicSignatureV4 = class _GenericExtrinsicSignatureV4 extends Struct {
  __internal__signKeys;
  constructor(registry, value, { isSigned } = {}) {
    const signTypes = registry.getSignedExtensionTypes();
    super(registry, objectSpread(
      // eslint-disable-next-line sort-keys
      { signer: "Address", signature: "ExtrinsicSignature" },
      signTypes
    ), _GenericExtrinsicSignatureV4.decodeExtrinsicSignature(value, isSigned));
    this.__internal__signKeys = Object.keys(signTypes);
    objectProperties(this, this.__internal__signKeys, (k) => this.get(k));
  }
  /** @internal */
  static decodeExtrinsicSignature(value, isSigned = false) {
    if (!value) {
      return EMPTY_U8A;
    } else if (value instanceof _GenericExtrinsicSignatureV4) {
      return value;
    }
    return isSigned ? value : EMPTY_U8A;
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    return this.isSigned ? super.encodedLength : 0;
  }
  /**
   * @description `true` if the signature is valid
   */
  get isSigned() {
    return !this.signature.isEmpty;
  }
  /**
   * @description The [[ExtrinsicEra]] (mortal or immortal) this signature applies to
   */
  get era() {
    return this.getT("era");
  }
  /**
   * @description The [[Index]] for the signature
   */
  get nonce() {
    return this.getT("nonce");
  }
  /**
   * @description The actual [[EcdsaSignature]], [[Ed25519Signature]] or [[Sr25519Signature]]
   */
  get signature() {
    return this.multiSignature.value || this.multiSignature;
  }
  /**
   * @description The raw [[ExtrinsicSignature]]
   */
  get multiSignature() {
    return this.getT("signature");
  }
  /**
   * @description The [[Address]] that signed
   */
  get signer() {
    return this.getT("signer");
  }
  /**
   * @description The [[Balance]] tip
   */
  get tip() {
    return this.getT("tip");
  }
  _injectSignature(signer, signature, payload) {
    for (let i = 0, count = this.__internal__signKeys.length; i < count; i++) {
      const k = this.__internal__signKeys[i];
      const v = payload.get(k);
      if (!isUndefined(v)) {
        this.set(k, v);
      }
    }
    this.set("signer", signer);
    this.set("signature", signature);
    return this;
  }
  /**
   * @description Adds a raw signature
   */
  addSignature(signer, signature, payload) {
    return this._injectSignature(toAddress(this.registry, signer), this.registry.createTypeUnsafe("ExtrinsicSignature", [signature]), new GenericExtrinsicPayloadV4(this.registry, payload));
  }
  /**
   * @description Creates a payload from the supplied options
   */
  createPayload(method, options) {
    const { era, runtimeVersion: { specVersion, transactionVersion } } = options;
    return new GenericExtrinsicPayloadV4(this.registry, objectSpread({}, options, {
      era: era || IMMORTAL_ERA,
      method: method.toHex(),
      specVersion,
      transactionVersion
    }));
  }
  /**
   * @description Generate a payload and applies the signature from a keypair
   */
  sign(method, account3, options) {
    if (!account3?.addressRaw) {
      throw new Error(`Expected a valid keypair for signing, found ${stringify(account3)}`);
    }
    const payload = this.createPayload(method, options);
    return this._injectSignature(toAddress(this.registry, account3.addressRaw), this.registry.createTypeUnsafe("ExtrinsicSignature", [payload.sign(account3)]), payload);
  }
  /**
   * @description Generate a payload and applies a fake signature
   */
  signFake(method, address, options) {
    if (!address) {
      throw new Error(`Expected a valid address for signing, found ${stringify(address)}`);
    }
    const payload = this.createPayload(method, options);
    return this._injectSignature(toAddress(this.registry, address), this.registry.createTypeUnsafe("ExtrinsicSignature", [FAKE_SIGNATURE]), payload);
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    return this.isSigned ? super.toU8a(isBare) : EMPTY_U8A;
  }
};

// node_modules/@polkadot/types/generic/AccountId.js
function decodeAccountId(value) {
  if (isU8a(value) || Array.isArray(value)) {
    return u8aToU8a(value);
  } else if (!value) {
    return new Uint8Array();
  } else if (isHex(value)) {
    return hexToU8a(value);
  } else if (isString(value)) {
    return decodeAddress(value.toString());
  }
  throw new Error(`Unknown type passed to AccountId constructor, found typeof ${typeof value}`);
}
var BaseAccountId = class extends U8aFixed {
  constructor(registry, allowedBits = 256 | 264, value) {
    const decoded = decodeAccountId(value);
    const decodedBits = decoded.length * 8;
    if (decodedBits < allowedBits && decoded.some((b) => b)) {
      throw new Error(`Invalid AccountId provided, expected ${allowedBits >> 3} bytes, found ${decoded.length}`);
    }
    super(registry, decoded, allowedBits);
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    return super.eq(decodeAccountId(other));
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman() {
    return this.toJSON();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return this.toJSON();
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return encodeAddress(this, this.registry.chainSS58);
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "AccountId";
  }
};
var GenericAccountId = class extends BaseAccountId {
  constructor(registry, value) {
    super(registry, 256, value);
  }
};
var GenericAccountId33 = class extends BaseAccountId {
  constructor(registry, value) {
    super(registry, 264, value);
  }
};

// node_modules/@polkadot/types/generic/AccountIndex.js
var PREFIX_1BYTE = 239;
var PREFIX_2BYTE = 252;
var PREFIX_4BYTE = 253;
var PREFIX_8BYTE = 254;
var MAX_1BYTE = new import_bn.default(PREFIX_1BYTE);
var MAX_2BYTE = new import_bn.default(1).shln(16);
var MAX_4BYTE = new import_bn.default(1).shln(32);
function decodeAccountIndex(value) {
  if (value instanceof GenericAccountIndex) {
    return value.toBn();
  } else if (isBn(value) || isNumber(value) || isHex(value) || isU8a(value) || isBigInt(value)) {
    return value;
  }
  return decodeAccountIndex(decodeAddress(value));
}
var GenericAccountIndex = class _GenericAccountIndex extends u32 {
  constructor(registry, value = new import_bn.default(0)) {
    super(registry, decodeAccountIndex(value));
  }
  static calcLength(_value) {
    const value = bnToBn(_value);
    if (value.lte(MAX_1BYTE)) {
      return 1;
    } else if (value.lt(MAX_2BYTE)) {
      return 2;
    } else if (value.lt(MAX_4BYTE)) {
      return 4;
    }
    return 8;
  }
  static readLength(input) {
    const first2 = input[0];
    if (first2 === PREFIX_2BYTE) {
      return [1, 2];
    } else if (first2 === PREFIX_4BYTE) {
      return [1, 4];
    } else if (first2 === PREFIX_8BYTE) {
      return [1, 8];
    }
    return [0, 1];
  }
  static writeLength(input) {
    switch (input.length) {
      case 2:
        return new Uint8Array([PREFIX_2BYTE]);
      case 4:
        return new Uint8Array([PREFIX_4BYTE]);
      case 8:
        return new Uint8Array([PREFIX_8BYTE]);
      default:
        return new Uint8Array([]);
    }
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    if (isBn(other) || isNumber(other)) {
      return super.eq(other);
    }
    return super.eq(this.registry.createTypeUnsafe("AccountIndex", [other]));
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman() {
    return this.toJSON();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return this.toJSON();
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    const length = _GenericAccountIndex.calcLength(this);
    return encodeAddress(this.toU8a().subarray(0, length), this.registry.chainSS58);
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "AccountIndex";
  }
};

// node_modules/@polkadot/types/generic/Block.js
var GenericBlock = class extends Struct {
  constructor(registry, value) {
    super(registry, {
      header: "Header",
      // eslint-disable-next-line sort-keys
      extrinsics: "Vec<Extrinsic>"
    }, value);
  }
  /**
   * @description Encodes a content [[Hash]] for the block
   */
  get contentHash() {
    return this.registry.hash(this.toU8a());
  }
  /**
   * @description The [[Extrinsic]] contained in the block
   */
  get extrinsics() {
    return this.getT("extrinsics");
  }
  /**
   * @description Block/header [[Hash]]
   */
  get hash() {
    return this.header.hash;
  }
  /**
   * @description The [[Header]] of the block
   */
  get header() {
    return this.getT("header");
  }
};

// node_modules/@polkadot/types/generic/Call.js
function getArgsDef(registry, meta) {
  return meta.fields.reduce((result, { name, type }, index) => {
    result[name.unwrapOr(`param${index}`).toString()] = registry.createLookupType(type);
    return result;
  }, {});
}
function decodeCallViaObject(registry, value, _meta) {
  const { args, callIndex } = value;
  const lookupIndex = callIndex instanceof GenericCallIndex ? callIndex.toU8a() : callIndex;
  const meta = _meta || registry.findMetaCall(lookupIndex).meta;
  return {
    args,
    argsDef: getArgsDef(registry, meta),
    callIndex,
    meta
  };
}
function decodeCallViaU8a(registry, value, _meta) {
  const callIndex = registry.firstCallIndex.slice();
  callIndex.set(value.subarray(0, 2), 0);
  const meta = _meta || registry.findMetaCall(callIndex).meta;
  return {
    args: value.subarray(2),
    argsDef: getArgsDef(registry, meta),
    callIndex,
    meta
  };
}
function decodeCall(registry, value = new Uint8Array(), _meta) {
  if (isU8a(value) || isHex(value)) {
    return decodeCallViaU8a(registry, u8aToU8a(value), _meta);
  } else if (isObject(value) && value.callIndex && value.args) {
    return decodeCallViaObject(registry, value, _meta);
  }
  throw new Error(`Call: Cannot decode value '${value}' of type ${typeof value}`);
}
var GenericCallIndex = class extends U8aFixed {
  constructor(registry, value) {
    super(registry, value, 16);
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return this.toHex();
  }
};
var GenericCall = class extends Struct {
  _meta;
  constructor(registry, value, meta) {
    const decoded = decodeCall(registry, value, meta);
    try {
      super(registry, {
        callIndex: GenericCallIndex,
        // eslint-disable-next-line sort-keys
        args: Struct.with(decoded.argsDef)
      }, decoded);
    } catch (error) {
      let method = "unknown.unknown";
      try {
        const c = registry.findMetaCall(decoded.callIndex);
        method = `${c.section}.${c.method}`;
      } catch {
      }
      throw new Error(`Call: failed decoding ${method}:: ${error.message}`);
    }
    this._meta = decoded.meta;
  }
  /**
   * @description The arguments for the function call
   */
  get args() {
    return [...this.getT("args").values()];
  }
  /**
   * @description The argument definitions
   */
  get argsDef() {
    return getArgsDef(this.registry, this.meta);
  }
  /**
   * @description The argument entries
   */
  get argsEntries() {
    return [...this.getT("args").entries()];
  }
  /**
   * @description The encoded `[sectionIndex, methodIndex]` identifier
   */
  get callIndex() {
    return this.getT("callIndex").toU8a();
  }
  /**
   * @description The encoded data
   */
  get data() {
    return this.getT("args").toU8a();
  }
  /**
   * @description The [[FunctionMetadata]]
   */
  get meta() {
    return this._meta;
  }
  /**
   * @description Returns the name of the method
   */
  get method() {
    return this.registry.findMetaCall(this.callIndex).method;
  }
  /**
   * @description Returns the module containing the method
   */
  get section() {
    return this.registry.findMetaCall(this.callIndex).section;
  }
  /**
   * @description Checks if the source matches this in type
   */
  is(other) {
    return other.callIndex[0] === this.callIndex[0] && other.callIndex[1] === this.callIndex[1];
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(isExpanded) {
    let call;
    try {
      call = this.registry.findMetaCall(this.callIndex);
    } catch {
    }
    return objectSpread({
      args: this.argsEntries.reduce((args, [n, a]) => objectSpread(args, { [n]: a.toHuman(isExpanded) }), {}),
      method: call?.method,
      section: call?.section
    }, isExpanded && call ? { docs: call.meta.docs.map((d) => d.toString()) } : null);
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "Call";
  }
};

// node_modules/@polkadot/types/generic/ChainProperties.js
function createValue(registry, type, value, asArray = true) {
  if (value && isFunction(value.unwrapOrDefault)) {
    return value;
  }
  return registry.createTypeUnsafe(type, [
    asArray ? isNull(value) || isUndefined(value) ? null : Array.isArray(value) ? value : [value] : value
  ]);
}
function decodeValue(registry, key, value) {
  return key === "ss58Format" ? createValue(registry, "Option<u32>", value, false) : key === "tokenDecimals" ? createValue(registry, "Option<Vec<u32>>", value) : key === "tokenSymbol" ? createValue(registry, "Option<Vec<Text>>", value) : key === "isEthereum" ? createValue(registry, "Bool", value, false) : value;
}
function decode(registry, value) {
  return (
    // allow decoding from a map as well (ourselves)
    (value && isFunction(value.entries) ? [...value.entries()] : Object.entries(value || {})).reduce((all3, [key, value2]) => {
      all3[key] = decodeValue(registry, key, value2);
      return all3;
    }, {
      isEthereum: registry.createTypeUnsafe("Bool", []),
      ss58Format: registry.createTypeUnsafe("Option<u32>", []),
      tokenDecimals: registry.createTypeUnsafe("Option<Vec<u32>>", []),
      tokenSymbol: registry.createTypeUnsafe("Option<Vec<Text>>", [])
    })
  );
}
var GenericChainProperties = class extends Json {
  constructor(registry, value) {
    super(registry, decode(registry, value));
  }
  /**
   * @description The chain uses Ethereum addresses
   */
  get isEthereum() {
    return this.getT("isEthereum");
  }
  /**
   * @description The chain ss58Format
   */
  get ss58Format() {
    return this.getT("ss58Format");
  }
  /**
   * @description The decimals for each of the tokens
   */
  get tokenDecimals() {
    return this.getT("tokenDecimals");
  }
  /**
   * @description The symbols for the tokens
   */
  get tokenSymbol() {
    return this.getT("tokenSymbol");
  }
};

// node_modules/@polkadot/types/generic/ConsensusEngineId.js
var CID_AURA = stringToU8a("aura");
var CID_BABE = stringToU8a("BABE");
var CID_GRPA = stringToU8a("FRNK");
var CID_POW = stringToU8a("pow_");
var CID_NMBS = stringToU8a("nmbs");
function getAuraAuthor(registry, bytes, sessionValidators) {
  return sessionValidators[registry.createTypeUnsafe("RawAuraPreDigest", [bytes.toU8a(true)]).slotNumber.mod(new import_bn.default(sessionValidators.length)).toNumber()];
}
function getBabeAuthor(registry, bytes, sessionValidators) {
  const digest = registry.createTypeUnsafe("RawBabePreDigestCompat", [bytes.toU8a(true)]);
  return sessionValidators[digest.value.toNumber()];
}
function getBytesAsAuthor(registry, bytes) {
  return registry.createTypeUnsafe("AccountId", [bytes]);
}
var GenericConsensusEngineId = class extends U8aFixed {
  constructor(registry, value) {
    super(registry, isNumber(value) ? bnToU8a(value, { isLe: false }) : value, 32);
  }
  /**
   * @description `true` if the engine matches aura
   */
  get isAura() {
    return this.eq(CID_AURA);
  }
  /**
   * @description `true` is the engine matches babe
   */
  get isBabe() {
    return this.eq(CID_BABE);
  }
  /**
   * @description `true` is the engine matches grandpa
   */
  get isGrandpa() {
    return this.eq(CID_GRPA);
  }
  /**
   * @description `true` is the engine matches pow
   */
  get isPow() {
    return this.eq(CID_POW);
  }
  /**
   * @description `true` is the engine matches nimbus
   */
  get isNimbus() {
    return this.eq(CID_NMBS);
  }
  /**
   * @description From the input bytes, decode into an author
   */
  extractAuthor(bytes, sessionValidators) {
    if (sessionValidators?.length) {
      if (this.isAura) {
        return getAuraAuthor(this.registry, bytes, sessionValidators);
      } else if (this.isBabe) {
        return getBabeAuthor(this.registry, bytes, sessionValidators);
      }
    }
    if (this.isPow || this.isNimbus) {
      return getBytesAsAuthor(this.registry, bytes);
    }
    return void 0;
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman() {
    return this.toString();
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "ConsensusEngineId";
  }
  /**
   * @description Override the default toString to return a 4-byte string
   */
  toString() {
    return this.isAscii ? u8aToString(this) : u8aToHex(this);
  }
};

// node_modules/@polkadot/types/generic/LookupSource.js
var ACCOUNT_ID_PREFIX = new Uint8Array([255]);
function decodeString(registry, value) {
  const decoded = decodeAddress(value);
  return decoded.length === 32 ? registry.createTypeUnsafe("AccountId", [decoded]) : registry.createTypeUnsafe("AccountIndex", [u8aToBn(decoded)]);
}
function decodeU8a4(registry, value) {
  if (value.length === 32) {
    return registry.createTypeUnsafe("AccountId", [value]);
  } else if (value[0] === 255) {
    return registry.createTypeUnsafe("AccountId", [value.subarray(1)]);
  }
  const [offset, length] = GenericAccountIndex.readLength(value);
  return registry.createTypeUnsafe("AccountIndex", [u8aToBn(value.subarray(offset, offset + length))]);
}
function decodeAddressOrIndex(registry, value) {
  return value instanceof GenericLookupSource ? value.inner : value instanceof GenericAccountId || value instanceof GenericAccountIndex ? value : isBn(value) || isNumber(value) || isBigInt(value) ? registry.createTypeUnsafe("AccountIndex", [value]) : Array.isArray(value) || isHex(value) || isU8a(value) ? decodeU8a4(registry, u8aToU8a(value)) : decodeString(registry, value);
}
var GenericLookupSource = class extends AbstractBase {
  constructor(registry, value = new Uint8Array()) {
    super(registry, decodeAddressOrIndex(registry, value));
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    const rawLength = this._rawLength;
    return rawLength + // for 1 byte AccountIndexes, we are not adding a specific prefix
    (rawLength > 1 ? 1 : 0);
  }
  /**
   * @description The length of the raw value, either AccountIndex or AccountId
   */
  get _rawLength() {
    return this.inner instanceof GenericAccountIndex ? GenericAccountIndex.calcLength(this.inner) : this.inner.encodedLength;
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    const value = this.inner.toU8a().subarray(0, this._rawLength);
    return {
      outer: [
        new Uint8Array(this.inner instanceof GenericAccountIndex ? GenericAccountIndex.writeLength(value) : ACCOUNT_ID_PREFIX),
        value
      ]
    };
  }
  /**
   * @description Returns a hex string representation of the value
   */
  toHex() {
    return u8aToHex(this.toU8a());
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "Address";
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    const encoded = this.inner.toU8a().subarray(0, this._rawLength);
    return isBare ? encoded : u8aConcat(this.inner instanceof GenericAccountIndex ? GenericAccountIndex.writeLength(encoded) : ACCOUNT_ID_PREFIX, encoded);
  }
};

// node_modules/@polkadot/types/generic/MultiAddress.js
function decodeU8a5(registry, u8a) {
  if ([0, 32].includes(u8a.length)) {
    return { Id: u8a };
  } else if (u8a.length === 20) {
    return { Address20: u8a };
  } else if (u8a.length <= 8) {
    return { Index: registry.createTypeUnsafe("AccountIndex", [u8a]).toNumber() };
  }
  return u8a;
}
function decodeMultiAny(registry, value) {
  if (value instanceof GenericAccountId) {
    return { Id: value };
  } else if (isU8a(value)) {
    return decodeU8a5(registry, value);
  } else if (value instanceof GenericMultiAddress) {
    return value;
  } else if (value instanceof GenericAccountIndex || isBn(value) || isNumber(value)) {
    return { Index: isNumber(value) ? value : value.toNumber() };
  } else if (isString(value)) {
    return decodeU8a5(registry, decodeAddress(value.toString()));
  }
  return value;
}
var GenericMultiAddress = class extends Enum {
  constructor(registry, value) {
    super(registry, {
      Id: "AccountId",
      Index: "Compact<AccountIndex>",
      Raw: "Bytes",
      // eslint-disable-next-line sort-keys
      Address32: "H256",
      // eslint-disable-next-line sort-keys
      Address20: "H160"
    }, decodeMultiAny(registry, value));
  }
  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  inspect() {
    const { inner, outer = [] } = this.inner.inspect();
    return {
      inner,
      outer: [new Uint8Array([this.index]), ...outer]
    };
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return this.value.toString();
  }
};

// node_modules/@polkadot/types/generic/Vote.js
var AYE_BITS = 128;
var NAY_BITS = 0;
var CON_MASK = 127;
var DEF_CONV = 0;
function decodeVoteBool(value) {
  return value ? new Uint8Array([AYE_BITS | DEF_CONV]) : new Uint8Array([NAY_BITS]);
}
function decodeVoteU8a(value) {
  return value.length ? value.subarray(0, 1) : new Uint8Array([NAY_BITS]);
}
function decodeVoteType(registry, value) {
  return new Uint8Array([
    (new bool(registry, value.aye).isTrue ? AYE_BITS : NAY_BITS) | registry.createTypeUnsafe("Conviction", [value.conviction || DEF_CONV]).index
  ]);
}
function decodeVote(registry, value) {
  if (isU8a(value)) {
    return decodeVoteU8a(value);
  } else if (isUndefined(value) || value instanceof Boolean || isBoolean(value)) {
    return decodeVoteBool(new bool(registry, value).isTrue);
  } else if (isNumber(value)) {
    return decodeVoteBool(value < 0);
  }
  return decodeVoteType(registry, value);
}
var GenericVote = class extends U8aFixed {
  __internal__aye;
  __internal__conviction;
  constructor(registry, value) {
    const decoded = decodeVote(registry, value);
    super(registry, decoded, 8);
    this.__internal__aye = (decoded[0] & AYE_BITS) === AYE_BITS;
    this.__internal__conviction = this.registry.createTypeUnsafe("Conviction", [decoded[0] & CON_MASK]);
  }
  /**
   * @description returns a V2 conviction
   */
  get conviction() {
    return this.__internal__conviction;
  }
  /**
   * @description true if the wrapped value is a positive vote
   */
  get isAye() {
    return this.__internal__aye;
  }
  /**
   * @description true if the wrapped value is a negative vote
   */
  get isNay() {
    return !this.isAye;
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman(isExpanded) {
    return {
      conviction: this.conviction.toHuman(isExpanded),
      vote: this.isAye ? "Aye" : "Nay"
    };
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return {
      aye: this.isAye,
      conviction: this.conviction.toPrimitive()
    };
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "Vote";
  }
};

// node_modules/@polkadot/types/ethereum/AccountId.js
function decodeAccountId2(value) {
  if (isU8a(value) || Array.isArray(value)) {
    return u8aToU8a(value);
  } else if (isHex(value) || isEthereumAddress(value.toString())) {
    return hexToU8a(value.toString());
  } else if (isString(value)) {
    return u8aToU8a(value);
  }
  return value;
}
var GenericEthereumAccountId = class extends U8aFixed {
  constructor(registry, value = new Uint8Array()) {
    super(registry, decodeAccountId2(value), 160);
  }
  /**
   * @description Compares the value of the input to see if there is a match
   */
  eq(other) {
    return !!other && super.eq(decodeAccountId2(other));
  }
  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  toHuman() {
    return this.toJSON();
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    return this.toString();
  }
  /**
   * @description Converts the value in a best-fit primitive form
   */
  toPrimitive() {
    return this.toJSON();
  }
  /**
   * @description Returns the string representation of the value
   */
  toString() {
    return ethereumEncode(this);
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "AccountId";
  }
};

// node_modules/@polkadot/types/ethereum/LookupSource.js
var ACCOUNT_ID_PREFIX2 = new Uint8Array([255]);
function decodeString2(registry, value) {
  const decoded = decodeAddress(value);
  return decoded.length === 20 ? registry.createTypeUnsafe("EthereumAccountId", [decoded]) : registry.createTypeUnsafe("AccountIndex", [u8aToBn(decoded)]);
}
function decodeU8a6(registry, value) {
  if (value.length === 20) {
    return registry.createTypeUnsafe("EthereumAccountId", [value]);
  } else if (value[0] === 255) {
    return registry.createTypeUnsafe("EthereumAccountId", [value.subarray(1)]);
  }
  const [offset, length] = GenericAccountIndex.readLength(value);
  return registry.createTypeUnsafe("AccountIndex", [u8aToBn(value.subarray(offset, offset + length))]);
}
function decodeAddressOrIndex2(registry, value) {
  return value instanceof GenericEthereumLookupSource ? value.inner : value instanceof GenericEthereumAccountId || value instanceof GenericAccountIndex ? value : isU8a(value) || Array.isArray(value) || isHex(value) ? decodeU8a6(registry, u8aToU8a(value)) : isBn(value) || isNumber(value) || isBigInt(value) ? registry.createTypeUnsafe("AccountIndex", [value]) : decodeString2(registry, value);
}
var GenericEthereumLookupSource = class extends AbstractBase {
  constructor(registry, value = new Uint8Array()) {
    super(registry, decodeAddressOrIndex2(registry, value));
  }
  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  get encodedLength() {
    const rawLength = this._rawLength;
    return rawLength + // for 1 byte AccountIndexes, we are not adding a specific prefix
    (rawLength > 1 ? 1 : 0);
  }
  /**
   * @description The length of the raw value, either AccountIndex or AccountId
   */
  get _rawLength() {
    return this.inner instanceof GenericAccountIndex ? GenericAccountIndex.calcLength(this.inner) : this.inner.encodedLength;
  }
  /**
   * @description Returns a hex string representation of the value
   */
  toHex() {
    return u8aToHex(this.toU8a());
  }
  /**
   * @description Returns the base runtime type name for this instance
   */
  toRawType() {
    return "Address";
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  toU8a(isBare) {
    const encoded = this.inner.toU8a().subarray(0, this._rawLength);
    return isBare ? encoded : u8aConcat(this.inner instanceof GenericAccountIndex ? GenericAccountIndex.writeLength(encoded) : ACCOUNT_ID_PREFIX2, encoded);
  }
};

// node_modules/@polkadot/types/primitive/Data.js
function decodeDataU8a(registry, value) {
  const indicator = value[0];
  if (!indicator) {
    return [void 0, void 0];
  } else if (indicator >= 1 && indicator <= 33) {
    const length = indicator - 1;
    const data = value.subarray(1, length + 1);
    return [registry.createTypeUnsafe("Raw", [data]), 1];
  } else if (indicator >= 34 && indicator <= 37) {
    return [value.subarray(1, 32 + 1), indicator - 32];
  }
  throw new Error(`Unable to decode Data, invalid indicator byte ${indicator}`);
}
function decodeData(registry, value) {
  if (isU8a(value) || isString(value)) {
    return decodeDataU8a(registry, u8aToU8a(value));
  } else if (!value) {
    return [void 0, void 0];
  }
  return [value, void 0];
}
var Data = class extends Enum {
  constructor(registry, value) {
    super(registry, {
      None: "Null",
      // 0
      Raw: "Bytes",
      // 1
      // eslint-disable-next-line sort-keys
      BlakeTwo256: "H256",
      // 2
      Sha256: "H256",
      // 3
      // eslint-disable-next-line sort-keys
      Keccak256: "H256",
      // 4
      ShaThree256: "H256"
      // 5
    }, ...decodeData(registry, value));
    if (this.isRaw && this.asRaw.length > 32) {
      throw new Error("Data.Raw values are limited to a maximum length of 32 bytes");
    }
  }
  get asBlakeTwo256() {
    return this.value;
  }
  get asKeccak256() {
    return this.value;
  }
  get asRaw() {
    return this.value;
  }
  get asSha256() {
    return this.value;
  }
  get asShaThree256() {
    return this.value;
  }
  get isBlakeTwo256() {
    return this.index === 2;
  }
  get isKeccak256() {
    return this.index === 4;
  }
  get isNone() {
    return this.index === 0;
  }
  get isRaw() {
    return this.index === 1;
  }
  get isSha256() {
    return this.index === 3;
  }
  get isShaThree256() {
    return this.index === 5;
  }
  /**
   * @description The encoded length
   */
  get encodedLength() {
    return this.toU8a().length;
  }
  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */
  toU8a() {
    if (this.index === 0) {
      return new Uint8Array(1);
    } else if (this.index === 1) {
      const data = this.value.toU8a(true);
      const length = Math.min(data.length, 32);
      const u8a2 = new Uint8Array(length + 1);
      u8a2.set([length + 1], 0);
      u8a2.set(data.subarray(0, length), 1);
      return u8a2;
    }
    const u8a = new Uint8Array(33);
    u8a.set([this.index + 32], 0);
    u8a.set(this.value.toU8a(), 1);
    return u8a;
  }
};

// node_modules/@polkadot/types/primitive/StorageKey.js
var HASHER_MAP = {
  // opaque
  Blake2_128: [16, false],
  // eslint-disable-line camelcase
  Blake2_128Concat: [16, true],
  // eslint-disable-line camelcase
  Blake2_256: [32, false],
  // eslint-disable-line camelcase
  Identity: [0, true],
  Twox128: [16, false],
  Twox256: [32, false],
  Twox64Concat: [8, true]
};
function decodeStorageKey(value) {
  if (isU8a(value) || !value || isString(value)) {
    return { key: value };
  } else if (value instanceof StorageKey) {
    return {
      key: value,
      method: value.method,
      section: value.section
    };
  } else if (isFunction(value)) {
    return {
      key: value(),
      method: value.method,
      section: value.section
    };
  } else if (Array.isArray(value)) {
    const [fn, args = []] = value;
    if (!isFunction(fn)) {
      throw new Error("Expected function input for key construction");
    }
    if (fn.meta && fn.meta.type.isMap) {
      const map2 = fn.meta.type.asMap;
      if (!Array.isArray(args) || args.length !== map2.hashers.length) {
        throw new Error(`Expected an array of ${map2.hashers.length} values as params to a Map query`);
      }
    }
    return {
      key: fn(...args),
      method: fn.method,
      section: fn.section
    };
  }
  throw new Error(`Unable to convert input ${value} to StorageKey`);
}
function decodeHashers(registry, value, hashers) {
  let offset = 32;
  const count = hashers.length;
  const result = new Array(count);
  for (let i = 0; i < count; i++) {
    const [hasher, type] = hashers[i];
    const [hashLen, canDecode] = HASHER_MAP[hasher.type];
    const decoded = canDecode ? registry.createTypeUnsafe(getSiName(registry.lookup, type), [value.subarray(offset + hashLen)]) : registry.createTypeUnsafe("Raw", [value.subarray(offset, offset + hashLen)]);
    offset += hashLen + (canDecode ? decoded.encodedLength : 0);
    result[i] = decoded;
  }
  return result;
}
function decodeArgsFromMeta(registry, value, meta) {
  if (!meta || !meta.type.isMap) {
    return [];
  }
  const { hashers, key } = meta.type.asMap;
  const keys2 = hashers.length === 1 ? [key] : registry.lookup.getSiType(key).def.asTuple;
  return decodeHashers(registry, value, hashers.map((h, i) => [h, keys2[i]]));
}
function getMeta(value) {
  if (value instanceof StorageKey) {
    return value.meta;
  } else if (isFunction(value)) {
    return value.meta;
  } else if (Array.isArray(value)) {
    const [fn] = value;
    return fn.meta;
  }
  return void 0;
}
function getType(registry, value) {
  if (value instanceof StorageKey) {
    return value.outputType;
  } else if (isFunction(value)) {
    return unwrapStorageType(registry, value.meta.type);
  } else if (Array.isArray(value)) {
    const [fn] = value;
    if (fn.meta) {
      return unwrapStorageType(registry, fn.meta.type);
    }
  }
  return "Raw";
}
var StorageKey = class extends Bytes {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore This is assigned via this.decodeArgsFromMeta()
  __internal__args;
  __internal__meta;
  __internal__outputType;
  __internal__method;
  __internal__section;
  constructor(registry, value, override = {}) {
    const { key, method, section: section2 } = decodeStorageKey(value);
    super(registry, key);
    this.__internal__outputType = getType(registry, value);
    this.setMeta(getMeta(value), override.section || section2, override.method || method);
  }
  /**
   * @description Return the decoded arguments (applicable to map with decodable values)
   */
  get args() {
    return this.__internal__args;
  }
  /**
   * @description The metadata or `undefined` when not available
   */
  get meta() {
    return this.__internal__meta;
  }
  /**
   * @description The key method or `undefined` when not specified
   */
  get method() {
    return this.__internal__method;
  }
  /**
   * @description The output type
   */
  get outputType() {
    return this.__internal__outputType;
  }
  /**
   * @description The key section or `undefined` when not specified
   */
  get section() {
    return this.__internal__section;
  }
  is(key) {
    return key.section === this.section && key.method === this.method;
  }
  /**
   * @description Sets the meta for this key
   */
  setMeta(meta, section2, method) {
    this.__internal__meta = meta;
    this.__internal__method = method || this.__internal__method;
    this.__internal__section = section2 || this.__internal__section;
    if (meta) {
      this.__internal__outputType = unwrapStorageType(this.registry, meta.type);
    }
    try {
      this.__internal__args = decodeArgsFromMeta(this.registry, this.toU8a(true), meta);
    } catch {
    }
    return this;
  }
  /**
   * @description Returns the Human representation for this type
   */
  toHuman() {
    return this.__internal__args.length ? this.__internal__args.map((a) => a.toHuman()) : super.toHuman();
  }
  /**
   * @description Returns the raw type for this
   */
  toRawType() {
    return "StorageKey";
  }
};

// node_modules/@polkadot/types/metadata/decorate/util.js
function convert(fn) {
  return ({ name }) => fn(name);
}
var objectNameToCamel = convert(stringCamelCase);
var objectNameToString = convert((n) => n.toString());

// node_modules/@polkadot/types/metadata/decorate/extrinsics/createUnchecked.js
function isTx(tx, callIndex) {
  return tx.callIndex[0] === callIndex[0] && tx.callIndex[1] === callIndex[1];
}
function createUnchecked(registry, section2, callIndex, callMetadata) {
  const expectedArgs = callMetadata.fields;
  const funcName = stringCamelCase(callMetadata.name);
  const extrinsicFn = (...args) => {
    if (expectedArgs.length !== args.length) {
      throw new Error(`Extrinsic ${section2}.${funcName} expects ${expectedArgs.length} arguments, got ${args.length}.`);
    }
    return registry.createTypeUnsafe("Call", [{ args, callIndex }, callMetadata]);
  };
  extrinsicFn.is = (tx) => isTx(tx, callIndex);
  extrinsicFn.callIndex = callIndex;
  extrinsicFn.meta = callMetadata;
  extrinsicFn.method = funcName;
  extrinsicFn.section = section2;
  extrinsicFn.toJSON = () => callMetadata.toJSON();
  return extrinsicFn;
}

// node_modules/@polkadot/types/metadata/decorate/extrinsics/index.js
function filterCallsSome({ calls }) {
  return calls.isSome;
}
function createCallFunction(registry, lookup, variant, sectionName, sectionIndex) {
  const { fields, index } = variant;
  const count = fields.length;
  const args = new Array(count);
  for (let i = 0; i < count; i++) {
    const { name, type, typeName } = fields[i];
    args[i] = objectSpread({
      name: stringCamelCase(name.unwrapOr(`param${i}`)),
      type: getSiName(lookup, type)
    }, typeName.isSome ? { typeName: typeName.unwrap() } : null);
  }
  return createUnchecked(registry, sectionName, new Uint8Array([sectionIndex, index.toNumber()]), registry.createTypeUnsafe("FunctionMetadataLatest", [objectSpread({ args }, variant)]));
}
function decorateExtrinsics(registry, { lookup, pallets }, version) {
  const result = {};
  const filtered = pallets.filter(filterCallsSome);
  for (let i = 0, count = filtered.length; i < count; i++) {
    const { calls, index, name } = filtered[i];
    const sectionName = stringCamelCase(name);
    const sectionIndex = version >= 12 ? index.toNumber() : i;
    lazyMethod(result, sectionName, () => lazyVariants(lookup, calls.unwrap(), objectNameToCamel, (variant) => createCallFunction(registry, lookup, variant, sectionName, sectionIndex)));
  }
  return result;
}

// node_modules/@polkadot/types/metadata/v9/toV10.js
function createStorageHasher(registry, hasher) {
  if (hasher.toNumber() >= 2) {
    return registry.createTypeUnsafe("StorageHasherV10", [hasher.toNumber() + 1]);
  }
  return registry.createTypeUnsafe("StorageHasherV10", [hasher]);
}
function createStorageType(registry, entryType) {
  if (entryType.isMap) {
    return [objectSpread({}, entryType.asMap, {
      hasher: createStorageHasher(registry, entryType.asMap.hasher)
    }), 1];
  }
  if (entryType.isDoubleMap) {
    return [objectSpread({}, entryType.asDoubleMap, {
      hasher: createStorageHasher(registry, entryType.asDoubleMap.hasher),
      key2Hasher: createStorageHasher(registry, entryType.asDoubleMap.key2Hasher)
    }), 2];
  }
  return [entryType.asPlain, 0];
}
function convertModule(registry, mod) {
  const storage = mod.storage.unwrapOr(null);
  return registry.createTypeUnsafe("ModuleMetadataV10", [objectSpread({}, mod, {
    storage: storage ? objectSpread({}, storage, {
      items: storage.items.map((item) => objectSpread({}, item, {
        type: registry.createTypeUnsafe("StorageEntryTypeV10", createStorageType(registry, item.type))
      }))
    }) : null
  })]);
}
function toV10(registry, { modules }) {
  return registry.createTypeUnsafe("MetadataV10", [{
    modules: modules.map((mod) => convertModule(registry, mod))
  }]);
}

// node_modules/@polkadot/types/metadata/v10/toV11.js
function toV11(registry, { modules }) {
  return registry.createTypeUnsafe("MetadataV11", [{
    // This is new in V11, pass V0 here - something non-existing, telling the API to use
    // the fallback for this information (on-chain detection)
    extrinsic: {
      signedExtensions: [],
      version: 0
    },
    modules
  }]);
}

// node_modules/@polkadot/types/metadata/v11/toV12.js
function toV12(registry, { extrinsic, modules }) {
  return registry.createTypeUnsafe("MetadataV12", [{
    extrinsic,
    modules: modules.map((mod) => registry.createTypeUnsafe("ModuleMetadataV12", [objectSpread({}, mod, { index: 255 })]))
  }]);
}

// node_modules/@polkadot/types/metadata/v12/toV13.js
function toV13(registry, v122) {
  return registry.createTypeUnsafe("MetadataV13", [v122]);
}

// node_modules/@polkadot/types/interfaces/alias.js
var typesAlias = {
  assets: {
    Approval: "AssetApproval",
    ApprovalKey: "AssetApprovalKey",
    Balance: "TAssetBalance",
    DestroyWitness: "AssetDestroyWitness"
  },
  babe: {
    EquivocationProof: "BabeEquivocationProof"
  },
  balances: {
    Status: "BalanceStatus"
  },
  beefy: {
    AuthorityId: "BeefyId"
  },
  contracts: {
    StorageKey: "ContractStorageKey"
  },
  electionProviderMultiPhase: {
    Phase: "ElectionPhase"
  },
  ethereum: {
    Block: "EthBlock",
    Header: "EthHeader",
    Receipt: "EthReceipt",
    Transaction: "EthTransaction",
    TransactionStatus: "EthTransactionStatus"
  },
  evm: {
    Account: "EvmAccount",
    Log: "EvmLog",
    Vicinity: "EvmVicinity"
  },
  grandpa: {
    Equivocation: "GrandpaEquivocation",
    EquivocationProof: "GrandpaEquivocationProof"
  },
  identity: {
    Judgement: "IdentityJudgement"
  },
  inclusion: {
    ValidatorIndex: "ParaValidatorIndex"
  },
  paraDisputes: {
    ValidatorIndex: "ParaValidatorIndex"
  },
  paraInclusion: {
    ValidatorIndex: "ParaValidatorIndex"
  },
  paraScheduler: {
    ValidatorIndex: "ParaValidatorIndex"
  },
  paraShared: {
    ValidatorIndex: "ParaValidatorIndex"
  },
  parachains: {
    Id: "ParaId"
  },
  parasDisputes: {
    ValidatorIndex: "ParaValidatorIndex"
  },
  parasInclusion: {
    ValidatorIndex: "ParaValidatorIndex"
  },
  parasScheduler: {
    ValidatorIndex: "ParaValidatorIndex"
  },
  parasShared: {
    ValidatorIndex: "ParaValidatorIndex"
  },
  proposeParachain: {
    Proposal: "ParachainProposal"
  },
  proxy: {
    Announcement: "ProxyAnnouncement"
  },
  scheduler: {
    ValidatorIndex: "ParaValidatorIndex"
  },
  shared: {
    ValidatorIndex: "ParaValidatorIndex"
  },
  society: {
    Judgement: "SocietyJudgement",
    Vote: "SocietyVote"
  },
  staking: {
    Compact: "CompactAssignments"
  },
  treasury: {
    Proposal: "TreasuryProposal"
  },
  xcm: {
    AssetId: "XcmAssetId"
  },
  xcmPallet: {
    AssetId: "XcmAssetId"
  }
};
function getAliasTypes({ knownTypes: knownTypes2 }, section2) {
  return __spreadValues(__spreadValues({}, typesAlias[section2] ?? {}), knownTypes2.typesAlias?.[section2] ?? {});
}

// node_modules/@polkadot/types/metadata/v13/toV14.js
var BOXES = [["<", ">"], ["<", ","], [",", ">"], ["(", ")"], ["(", ","], [",", ","], [",", ")"]];
function compatType(specs, _type) {
  const type = _type.toString();
  const index = specs.findIndex(({ def }) => def.HistoricMetaCompat === type);
  if (index !== -1) {
    return index;
  }
  return specs.push({
    def: {
      HistoricMetaCompat: type
    }
  }) - 1;
}
function compatTypes(specs, ...types2) {
  for (let i = 0, count = types2.length; i < count; i++) {
    compatType(specs, types2[i]);
  }
}
function makeTupleType(specs, entries) {
  return specs.push({
    def: {
      Tuple: entries
    }
  }) - 1;
}
function makeVariantType(modName, variantType, specs, variants) {
  return specs.push({
    def: {
      Variant: { variants }
    },
    path: [`pallet_${modName.toString()}`, "pallet", variantType]
  }) - 1;
}
function registerOriginCaller(registry, modules, metaVersion) {
  registry.register({
    OriginCaller: {
      _enum: modules.map((mod, index) => [
        mod.name.toString(),
        metaVersion >= 12 ? mod.index.toNumber() : index
      ]).sort((a, b) => a[1] - b[1]).reduce((result, [name, index]) => {
        for (let i = Object.keys(result).length; i < index; i++) {
          result[`Empty${i}`] = "Null";
        }
        result[name] = knownOrigins[name] || "Null";
        return result;
      }, {})
    }
  });
}
function setTypeOverride(sectionTypes, types2) {
  types2.forEach((type) => {
    const override = Object.keys(sectionTypes).find((aliased) => type.eq(aliased));
    if (override) {
      type.setOverride(sectionTypes[override]);
    } else {
      const orig = type.toString();
      const alias2 = Object.entries(sectionTypes).reduce((result, [src, dst]) => BOXES.reduce((result2, [a, z]) => result2.replace(`${a}${src}${z}`, `${a}${dst}${z}`), result), orig);
      if (orig !== alias2) {
        type.setOverride(alias2);
      }
    }
  });
}
function convertCalls(specs, registry, modName, calls, sectionTypes) {
  const variants = calls.map(({ args, docs, name }, index) => {
    setTypeOverride(sectionTypes, args.map(({ type }) => type));
    return registry.createTypeUnsafe("SiVariant", [{
      docs,
      fields: args.map(({ name: name2, type }) => registry.createTypeUnsafe("SiField", [{ name: name2, type: compatType(specs, type) }])),
      index,
      name
    }]);
  });
  return registry.createTypeUnsafe("PalletCallMetadataV14", [{
    type: makeVariantType(modName, "Call", specs, variants)
  }]);
}
function convertConstants(specs, registry, constants, sectionTypes) {
  return constants.map(({ docs, name, type, value }) => {
    setTypeOverride(sectionTypes, [type]);
    return registry.createTypeUnsafe("PalletConstantMetadataV14", [{
      docs,
      name,
      type: compatType(specs, type),
      value
    }]);
  });
}
function convertErrors(specs, registry, modName, errors, _sectionTypes) {
  const variants = errors.map(({ docs, name }, index) => registry.createTypeUnsafe("SiVariant", [{
    docs,
    fields: [],
    index,
    name
  }]));
  return registry.createTypeUnsafe("PalletErrorMetadataV14", [{
    type: makeVariantType(modName, "Error", specs, variants)
  }]);
}
function convertEvents(specs, registry, modName, events2, sectionTypes) {
  const variants = events2.map(({ args, docs, name }, index) => {
    setTypeOverride(sectionTypes, args);
    return registry.createTypeUnsafe("SiVariant", [{
      docs,
      fields: args.map((t) => registry.createTypeUnsafe("SiField", [{ type: compatType(specs, t) }])),
      index,
      name
    }]);
  });
  return registry.createTypeUnsafe("PalletEventMetadataV14", [{
    type: makeVariantType(modName, "Event", specs, variants)
  }]);
}
function createMapEntry(specs, registry, sectionTypes, { hashers, isLinked, isOptional, keys: keys2, value }) {
  setTypeOverride(sectionTypes, [value, ...Array.isArray(keys2) ? keys2 : [keys2]]);
  return registry.createTypeUnsafe("StorageEntryTypeV14", [{
    Map: {
      hashers,
      key: hashers.length === 1 ? compatType(specs, keys2[0]) : makeTupleType(specs, keys2.map((t) => compatType(specs, t))),
      value: isLinked ? compatType(specs, `(${isOptional ? `Option<${value.toString()}>` : value.toString()}, Linkage<${keys2[0].toString()}>)`) : compatType(specs, value)
    }
  }]);
}
function convertStorage(specs, registry, { items, prefix: prefix2 }, sectionTypes) {
  return registry.createTypeUnsafe("PalletStorageMetadataV14", [{
    items: items.map(({ docs, fallback, modifier, name, type }) => {
      let entryType;
      if (type.isPlain) {
        const plain = type.asPlain;
        setTypeOverride(sectionTypes, [plain]);
        entryType = registry.createTypeUnsafe("StorageEntryTypeV14", [{
          Plain: compatType(specs, plain)
        }]);
      } else if (type.isMap) {
        const map2 = type.asMap;
        entryType = createMapEntry(specs, registry, sectionTypes, {
          hashers: [map2.hasher],
          isLinked: map2.linked.isTrue,
          isOptional: modifier.isOptional,
          keys: [map2.key],
          value: map2.value
        });
      } else if (type.isDoubleMap) {
        const dm = type.asDoubleMap;
        entryType = createMapEntry(specs, registry, sectionTypes, {
          hashers: [dm.hasher, dm.key2Hasher],
          isLinked: false,
          isOptional: modifier.isOptional,
          keys: [dm.key1, dm.key2],
          value: dm.value
        });
      } else {
        const nm = type.asNMap;
        entryType = createMapEntry(specs, registry, sectionTypes, {
          hashers: nm.hashers,
          isLinked: false,
          isOptional: modifier.isOptional,
          keys: nm.keyVec,
          value: nm.value
        });
      }
      return registry.createTypeUnsafe("StorageEntryMetadataV14", [{
        docs,
        fallback,
        modifier,
        name,
        type: entryType
      }]);
    }),
    prefix: prefix2
  }]);
}
function convertExtrinsic(registry, { signedExtensions, version }) {
  return registry.createTypeUnsafe("ExtrinsicMetadataV14", [{
    signedExtensions: signedExtensions.map((identifier) => ({
      identifier,
      type: 0
      // we don't map the fields at all
    })),
    type: 0,
    // Map to extrinsic like in v14?
    version
  }]);
}
function createPallet(specs, registry, mod, { calls, constants, errors, events: events2, storage }) {
  const sectionTypes = getAliasTypes(registry, stringCamelCase(mod.name));
  return registry.createTypeUnsafe("PalletMetadataV14", [{
    calls: calls && convertCalls(specs, registry, mod.name, calls, sectionTypes),
    constants: convertConstants(specs, registry, constants, sectionTypes),
    errors: errors && convertErrors(specs, registry, mod.name, errors, sectionTypes),
    events: events2 && convertEvents(specs, registry, mod.name, events2, sectionTypes),
    index: mod.index,
    name: mod.name,
    storage: storage && convertStorage(specs, registry, storage, sectionTypes)
  }]);
}
function toV14(registry, v132, metaVersion) {
  const specs = [];
  compatTypes(specs, "Null", "u8", "u16", "u32", "u64");
  registerOriginCaller(registry, v132.modules, metaVersion);
  const extrinsic = convertExtrinsic(registry, v132.extrinsic);
  const pallets = v132.modules.map((mod) => createPallet(specs, registry, mod, {
    calls: mod.calls.unwrapOr(null),
    constants: mod.constants,
    errors: mod.errors.length ? mod.errors : null,
    events: mod.events.unwrapOr(null),
    storage: mod.storage.unwrapOr(null)
  }));
  return registry.createTypeUnsafe("MetadataV14", [{
    extrinsic,
    lookup: {
      types: specs.map((type, id) => registry.createTypeUnsafe("PortableType", [{ id, type }]))
    },
    pallets
  }]);
}

// node_modules/@polkadot/types/metadata/v14/toV15.js
function toV15(registry, v142, _) {
  const unchecked = v142.lookup.paramTypes.SpRuntimeUncheckedExtrinsic;
  return registry.createTypeUnsafe("MetadataV15", [
    objectSpread({}, v142, {
      extrinsic: registry.createTypeUnsafe("ExtrinsicMetadataV15", [
        objectSpread({}, v142.extrinsic, {
          addressType: unchecked?.[0].type.unwrapOr(0),
          callType: unchecked?.[1].type.unwrapOr(0),
          extraType: unchecked?.[3].type.unwrapOr(0),
          signatureType: unchecked?.[2].type.unwrapOr(0)
        })
      ]),
      outerEnums: registry.createTypeUnsafe("OuterEnums15", [{
        // FIXME We need to extract & add the errorType in here
        // (these doesn't seem to be an esay way to detect & extract it)
        callType: unchecked?.[1].type.unwrapOr(0),
        eventType: v142.lookup.paramTypes.FrameSystemEventRecord?.[0].type.unwrapOr(0)
      }])
    })
  ]);
}

// node_modules/@polkadot/types/metadata/v15/toLatest.js
function toLatest(_registry, v152, _metaVersion) {
  return v152;
}

// node_modules/@polkadot/types/metadata/MagicNumber.js
var MAGIC_NUMBER = 1635018093;
var MagicNumber = class extends u32 {
  constructor(registry, value) {
    super(registry, value);
    if (!this.isEmpty && !this.eq(MAGIC_NUMBER)) {
      throw new Error(`MagicNumber mismatch: expected ${registry.createTypeUnsafe("u32", [MAGIC_NUMBER]).toHex()}, found ${this.toHex()}`);
    }
  }
};

// node_modules/@polkadot/types/metadata/versions.js
var KNOWN_VERSIONS = [15, 14, 13, 12, 11, 10, 9];
var LATEST_VERSION = KNOWN_VERSIONS[0];
var TO_CALLS_VERSION = 14;

// node_modules/@polkadot/types/metadata/MetadataVersioned.js
var MetadataVersioned = class _MetadataVersioned extends Struct {
  __internal__converted = /* @__PURE__ */ new Map();
  constructor(registry, value) {
    super(registry, {
      magicNumber: MagicNumber,
      metadata: "MetadataAll"
    }, value);
  }
  __internal__assertVersion = (version) => {
    if (this.version > version) {
      throw new Error(`Cannot convert metadata from version ${this.version} to ${version}`);
    }
    return this.version === version;
  };
  __internal__getVersion = (version, fromPrev) => {
    if (version !== "latest" && this.__internal__assertVersion(version)) {
      const asCurr = `asV${version}`;
      return this.__internal__metadata()[asCurr];
    }
    if (!this.__internal__converted.has(version)) {
      const asPrev = version === "latest" ? `asV${LATEST_VERSION}` : `asV${version - 1}`;
      this.__internal__converted.set(version, fromPrev(this.registry, this[asPrev], this.version));
    }
    return this.__internal__converted.get(version);
  };
  /**
   * @description the metadata wrapped
   */
  __internal__metadata = () => {
    return this.getT("metadata");
  };
  /**
   * @description Returns the wrapped metadata as a limited calls-only (latest) version
   */
  get asCallsOnly() {
    return new _MetadataVersioned(this.registry, {
      magicNumber: this.magicNumber,
      metadata: this.registry.createTypeUnsafe("MetadataAll", [toCallsOnly(this.registry, this.asLatest), TO_CALLS_VERSION])
    });
  }
  /**
   * @description Returns the wrapped metadata as a V9 object
   */
  get asV9() {
    this.__internal__assertVersion(9);
    return this.__internal__metadata().asV9;
  }
  /**
   * @description Returns the wrapped values as a V10 object
   */
  get asV10() {
    return this.__internal__getVersion(10, toV10);
  }
  /**
   * @description Returns the wrapped values as a V11 object
   */
  get asV11() {
    return this.__internal__getVersion(11, toV11);
  }
  /**
   * @description Returns the wrapped values as a V12 object
   */
  get asV12() {
    return this.__internal__getVersion(12, toV12);
  }
  /**
   * @description Returns the wrapped values as a V13 object
   */
  get asV13() {
    return this.__internal__getVersion(13, toV13);
  }
  /**
   * @description Returns the wrapped values as a V14 object
   */
  get asV14() {
    return this.__internal__getVersion(14, toV14);
  }
  /**
   * @description Returns the wrapped values as a V14 object
   */
  get asV15() {
    return this.__internal__getVersion(15, toV15);
  }
  /**
   * @description Returns the wrapped values as a latest version object
   */
  get asLatest() {
    return this.__internal__getVersion("latest", toLatest);
  }
  /**
   * @description The magicNumber for the Metadata (known constant)
   */
  get magicNumber() {
    return this.getT("magicNumber");
  }
  /**
   * @description the metadata version this structure represents
   */
  get version() {
    return this.__internal__metadata().index;
  }
  getUniqTypes(throwError) {
    return getUniqTypes(this.registry, this.asLatest, throwError);
  }
  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  toJSON() {
    this.asLatest;
    return super.toJSON();
  }
};

// node_modules/@polkadot/types/metadata/Metadata.js
var EMPTY_METADATA = new Uint8Array([109, 101, 116, 97, 9]);
var VERSION_IDX = EMPTY_METADATA.length - 1;
function decodeU8a7(registry, u8a) {
  if (u8a.length === 0) {
    return EMPTY_METADATA;
  } else if (u8a[VERSION_IDX] === 9) {
    try {
      return new MetadataVersioned(registry, u8a);
    } catch {
      u8a[VERSION_IDX] = 10;
    }
  }
  return u8a;
}
var Metadata = class extends MetadataVersioned {
  constructor(registry, value) {
    super(registry, isU8a(value) || isString(value) ? decodeU8a7(registry, u8aToU8a(value)) : value);
  }
};

// node_modules/@polkadot/types/metadata/decorate/constants/index.js
function decorateConstants(registry, { pallets }, _version) {
  const result = {};
  for (let i = 0, count = pallets.length; i < count; i++) {
    const { constants, name } = pallets[i];
    if (!constants.isEmpty) {
      lazyMethod(result, stringCamelCase(name), () => lazyMethods({}, constants, (constant) => {
        const codec = registry.createTypeUnsafe(registry.createLookupType(constant.type), [hexToU8a(constant.value.toHex())]);
        codec.meta = constant;
        return codec;
      }, objectNameToCamel));
    }
  }
  return result;
}

// node_modules/@polkadot/types/metadata/decorate/errors/index.js
function variantToMeta(lookup, variant) {
  return objectSpread({ args: variant.fields.map(({ type }) => lookup.getTypeDef(type).type) }, variant);
}
function decorateErrors(registry, { lookup, pallets }, version) {
  const result = {};
  for (let i = 0, count = pallets.length; i < count; i++) {
    const { errors, index, name } = pallets[i];
    if (errors.isSome) {
      const sectionIndex = version >= 12 ? index.toNumber() : i;
      lazyMethod(result, stringCamelCase(name), () => lazyVariants(lookup, errors.unwrap(), objectNameToString, (variant) => ({
        // We sprinkle in isCodec & isU8a to ensure we are dealing with the correct objects
        is: (errorMod) => isCodec(errorMod) && isCodec(errorMod.index) && errorMod.index.eq(sectionIndex) && (isU8a(errorMod.error) ? errorMod.error[0] === variant.index.toNumber() : isCodec(errorMod.error) && errorMod.error.eq(variant.index)),
        meta: registry.createTypeUnsafe("ErrorMetadataLatest", [variantToMeta(lookup, variant)])
      })));
    }
  }
  return result;
}

// node_modules/@polkadot/types/metadata/decorate/events/index.js
function filterEventsSome({ events: events2 }) {
  return events2.isSome;
}
function decorateEvents(registry, { lookup, pallets }, version) {
  const result = {};
  const filtered = pallets.filter(filterEventsSome);
  for (let i = 0, count = filtered.length; i < count; i++) {
    const { events: events2, index, name } = filtered[i];
    const sectionIndex = version >= 12 ? index.toNumber() : i;
    lazyMethod(result, stringCamelCase(name), () => lazyVariants(lookup, events2.unwrap(), objectNameToString, (variant) => ({
      // We sprinkle in isCodec & isU8a to ensure we are dealing with the correct objects
      is: (eventRecord) => isCodec(eventRecord) && isU8a(eventRecord.index) && sectionIndex === eventRecord.index[0] && variant.index.eq(eventRecord.index[1]),
      meta: registry.createTypeUnsafe("EventMetadataLatest", [variantToMeta(lookup, variant)])
    })));
  }
  return result;
}

// node_modules/@polkadot/types/metadata/decorate/storage/getHasher.js
var DEFAULT_FN = (data) => xxhashAsU8a(data, 128);
var HASHERS = {
  Blake2_128: (data) => (
    // eslint-disable-line camelcase
    blake2AsU8a(data, 128)
  ),
  Blake2_128Concat: (data) => (
    // eslint-disable-line camelcase
    u8aConcat(blake2AsU8a(data, 128), u8aToU8a(data))
  ),
  Blake2_256: (data) => (
    // eslint-disable-line camelcase
    blake2AsU8a(data, 256)
  ),
  Identity: (data) => u8aToU8a(data),
  Twox128: (data) => xxhashAsU8a(data, 128),
  Twox256: (data) => xxhashAsU8a(data, 256),
  Twox64Concat: (data) => u8aConcat(xxhashAsU8a(data, 64), u8aToU8a(data))
};
function getHasher(hasher) {
  return HASHERS[hasher.type] || DEFAULT_FN;
}

// node_modules/@polkadot/types/metadata/decorate/storage/createFunction.js
var NO_RAW_ARGS = {
  args: [],
  hashers: [],
  keys: []
};
function filterDefined(a) {
  return !isUndefined(a);
}
function assertArgs({ method, section: section2 }, { args, keys: keys2 }) {
  if (!Array.isArray(args)) {
    throw new Error(`Call to ${stringCamelCase(section2 || "unknown")}.${stringCamelCase(method || "unknown")} needs ${keys2.length} arguments`);
  } else if (args.filter(filterDefined).length !== keys2.length) {
    throw new Error(`Call to ${stringCamelCase(section2 || "unknown")}.${stringCamelCase(method || "unknown")} needs ${keys2.length} arguments, found [${args.join(", ")}]`);
  }
}
function createKeyRawParts(registry, itemFn, { args, hashers, keys: keys2 }) {
  const count = keys2.length;
  const extra = new Array(count);
  for (let i = 0; i < count; i++) {
    extra[i] = getHasher(hashers[i])(registry.createTypeUnsafe(registry.createLookupType(keys2[i]), [args[i]]).toU8a());
  }
  return [
    [
      xxhashAsU8a(itemFn.prefix, 128),
      xxhashAsU8a(itemFn.method, 128)
    ],
    extra
  ];
}
function createKeyInspect(registry, itemFn, args) {
  assertArgs(itemFn, args);
  const { meta } = itemFn;
  const [prefix2, extra] = createKeyRawParts(registry, itemFn, args);
  let types2 = [];
  if (meta.type.isMap) {
    const { hashers, key } = meta.type.asMap;
    types2 = hashers.length === 1 ? [`${hashers[0].type}(${getSiName(registry.lookup, key)})`] : registry.lookup.getSiType(key).def.asTuple.map((k, i) => `${hashers[i].type}(${getSiName(registry.lookup, k)})`);
  }
  const names = ["module", "method"].concat(...args.args.map((_, i) => types2[i]));
  return {
    inner: prefix2.concat(...extra).map((v, i) => ({ name: names[i], outer: [v] }))
  };
}
function createKeyRaw(registry, itemFn, args) {
  const [prefix2, extra] = createKeyRawParts(registry, itemFn, args);
  return u8aConcat(...prefix2, ...extra);
}
function createKey(registry, itemFn, args) {
  assertArgs(itemFn, args);
  return compactAddLength(createKeyRaw(registry, itemFn, args));
}
function createStorageInspect(registry, itemFn, options) {
  const { meta: { type } } = itemFn;
  return (...args) => {
    if (type.isPlain) {
      return options.skipHashing ? { inner: [], name: "wellKnown", outer: [u8aToU8a(options.key)] } : createKeyInspect(registry, itemFn, NO_RAW_ARGS);
    }
    const { hashers, key } = type.asMap;
    return hashers.length === 1 ? createKeyInspect(registry, itemFn, { args, hashers, keys: [key] }) : createKeyInspect(registry, itemFn, { args, hashers, keys: registry.lookup.getSiType(key).def.asTuple });
  };
}
function createStorageFn(registry, itemFn, options) {
  const { meta: { type } } = itemFn;
  let cacheKey = null;
  return (...args) => {
    if (type.isPlain) {
      if (!cacheKey) {
        cacheKey = options.skipHashing ? compactAddLength(u8aToU8a(options.key)) : createKey(registry, itemFn, NO_RAW_ARGS);
      }
      return cacheKey;
    }
    const { hashers, key } = type.asMap;
    return hashers.length === 1 ? createKey(registry, itemFn, { args, hashers, keys: [key] }) : createKey(registry, itemFn, { args, hashers, keys: registry.lookup.getSiType(key).def.asTuple });
  };
}
function createWithMeta(registry, itemFn, options) {
  const { meta, method, prefix: prefix2, section: section2 } = itemFn;
  const storageFn = createStorageFn(registry, itemFn, options);
  storageFn.inspect = createStorageInspect(registry, itemFn, options);
  storageFn.meta = meta;
  storageFn.method = stringCamelCase(method);
  storageFn.prefix = prefix2;
  storageFn.section = section2;
  storageFn.toJSON = () => objectSpread({ storage: { method, prefix: prefix2, section: section2 } }, meta.toJSON());
  return storageFn;
}
function extendHeadMeta(registry, { meta: { docs, name, type }, section: section2 }, { method }, iterFn) {
  const meta = registry.createTypeUnsafe("StorageEntryMetadataLatest", [{
    docs,
    fallback: registry.createTypeUnsafe("Bytes", []),
    modifier: registry.createTypeUnsafe("StorageEntryModifierLatest", [1]),
    // required
    name,
    type: registry.createTypeUnsafe("StorageEntryTypeLatest", [type.asMap.key, 0])
  }]);
  iterFn.meta = meta;
  const fn = (...args) => registry.createTypeUnsafe("StorageKey", [iterFn(...args), { method, section: section2 }]);
  fn.meta = meta;
  return fn;
}
function extendPrefixedMap(registry, itemFn, storageFn) {
  const { meta: { type }, method, section: section2 } = itemFn;
  storageFn.iterKey = extendHeadMeta(registry, itemFn, storageFn, (...args) => {
    if (args.length && (type.isPlain || args.length >= type.asMap.hashers.length)) {
      throw new Error(`Iteration of ${stringCamelCase(section2 || "unknown")}.${stringCamelCase(method || "unknown")} needs arguments to be at least one less than the full arguments, found [${args.join(", ")}]`);
    }
    if (args.length) {
      if (type.isMap) {
        const { hashers, key } = type.asMap;
        const keysVec = hashers.length === 1 ? [key] : registry.lookup.getSiType(key).def.asTuple;
        return new Raw(registry, createKeyRaw(registry, itemFn, { args, hashers: hashers.slice(0, args.length), keys: keysVec.slice(0, args.length) }));
      }
    }
    return new Raw(registry, createKeyRaw(registry, itemFn, NO_RAW_ARGS));
  });
  return storageFn;
}
function createFunction(registry, itemFn, options) {
  const { meta: { type } } = itemFn;
  const storageFn = createWithMeta(registry, itemFn, options);
  if (type.isMap) {
    extendPrefixedMap(registry, itemFn, storageFn);
  }
  storageFn.keyPrefix = (...args) => storageFn.iterKey && storageFn.iterKey(...args) || compactStripLength(storageFn())[1];
  return storageFn;
}

// node_modules/@polkadot/types/metadata/decorate/storage/util.js
function findSiPrimitive(registry, type) {
  const prim = type.toLowerCase();
  return registry.lookup.types.find((t) => t.type.def.isPrimitive && t.type.def.asPrimitive.toString().toLowerCase() === prim || t.type.def.isHistoricMetaCompat && t.type.def.asHistoricMetaCompat.toString().toLowerCase() === prim);
}
function findSiType(registry, type) {
  let portable = findSiPrimitive(registry, type);
  if (!portable && (type === "Bytes" || type.startsWith("[u8;"))) {
    const u82 = findSiPrimitive(registry, "u8");
    if (u82) {
      if (type === "Bytes") {
        portable = registry.lookup.types.find((t) => t.type.def.isSequence && t.type.def.asSequence.type.eq(u82.id) || t.type.def.isHistoricMetaCompat && t.type.def.asHistoricMetaCompat.eq(type));
      } else {
        const td = getTypeDef(type);
        portable = registry.lookup.types.find((t) => t.type.def.isArray && t.type.def.asArray.eq({
          len: td.length,
          type: u82.id
        }) || t.type.def.isHistoricMetaCompat && t.type.def.asHistoricMetaCompat.eq(type));
      }
    }
  }
  if (!portable) {
    console.warn(`Unable to map ${type} to a lookup index`);
  }
  return portable;
}
function createRuntimeFunction({ method, prefix: prefix2, section: section2 }, key, { docs, type }) {
  return (registry) => createFunction(registry, {
    meta: registry.createTypeUnsafe("StorageEntryMetadataLatest", [{
      docs: registry.createTypeUnsafe("Vec<Text>", [[docs]]),
      modifier: registry.createTypeUnsafe("StorageEntryModifierLatest", ["Required"]),
      name: registry.createTypeUnsafe("Text", [method]),
      toJSON: () => key,
      type: registry.createTypeUnsafe("StorageEntryTypeLatest", [{ Plain: findSiType(registry, type)?.id || 0 }])
    }]),
    method,
    prefix: prefix2,
    section: section2
  }, { key, skipHashing: true });
}

// node_modules/@polkadot/types/metadata/decorate/storage/substrate.js
var prefix = "Substrate";
var section = "substrate";
function createSubstrateFn(method, key, meta) {
  return createRuntimeFunction({ method, prefix, section }, key, meta);
}
var substrate2 = {
  changesTrieConfig: createSubstrateFn("changesTrieConfig", ":changes_trie", {
    docs: "Changes trie configuration is stored under this key.",
    type: "u32"
  }),
  childStorageKeyPrefix: createSubstrateFn("childStorageKeyPrefix", ":child_storage:", {
    docs: "Prefix of child storage keys.",
    type: "u32"
  }),
  code: createSubstrateFn("code", ":code", {
    docs: "Wasm code of the runtime.",
    type: "Bytes"
  }),
  extrinsicIndex: createSubstrateFn("extrinsicIndex", ":extrinsic_index", {
    docs: "Current extrinsic index (u32) is stored under this key.",
    type: "u32"
  }),
  heapPages: createSubstrateFn("heapPages", ":heappages", {
    docs: "Number of wasm linear memory pages required for execution of the runtime.",
    type: "u64"
  }),
  intrablockEntropy: createSubstrateFn("intrablockEntropy", ":intrablock_entropy", {
    docs: "Current intra-block entropy (a universally unique `[u8; 32]` value) is stored here.",
    type: "[u8; 32]"
  })
};

// node_modules/@polkadot/types/metadata/decorate/storage/getStorage.js
function getStorage(registry) {
  const storage = {};
  const entries = Object.entries(substrate2);
  for (let e = 0, count = entries.length; e < count; e++) {
    storage[entries[e][0]] = entries[e][1](registry);
  }
  return { substrate: storage };
}

// node_modules/@polkadot/types/metadata/decorate/storage/index.js
var VERSION_NAME = "palletVersion";
var VERSION_KEY = ":__STORAGE_VERSION__:";
var VERSION_DOCS = { docs: "Returns the current pallet version from storage", type: "u16" };
function decorateStorage(registry, { pallets }, _metaVersion) {
  const result = getStorage(registry);
  for (let i = 0, count = pallets.length; i < count; i++) {
    const { name, storage } = pallets[i];
    if (storage.isSome) {
      const section2 = stringCamelCase(name);
      const { items, prefix: _prefix } = storage.unwrap();
      const prefix2 = _prefix.toString();
      lazyMethod(result, section2, () => lazyMethods({
        palletVersion: createRuntimeFunction({ method: VERSION_NAME, prefix: prefix2, section: section2 }, createKeyRaw(registry, { method: VERSION_KEY, prefix: name.toString() }, NO_RAW_ARGS), VERSION_DOCS)(registry)
      }, items, (meta) => createFunction(registry, { meta, method: meta.name.toString(), prefix: prefix2, section: section2 }, {}), objectNameToCamel));
    }
  }
  return result;
}

// node_modules/@polkadot/types/metadata/decorate/index.js
function expandMetadata(registry, metadata) {
  if (!(metadata instanceof Metadata)) {
    throw new Error("You need to pass a valid Metadata instance to Decorated");
  }
  const latest2 = metadata.asLatest;
  const version = metadata.version;
  return {
    consts: decorateConstants(registry, latest2, version),
    errors: decorateErrors(registry, latest2, version),
    events: decorateEvents(registry, latest2, version),
    query: decorateStorage(registry, latest2, version),
    registry,
    tx: decorateExtrinsics(registry, latest2, version)
  };
}

// node_modules/@polkadot/types/create/registry.js
var DEFAULT_FIRST_CALL_IDX = new Uint8Array(2);
var l10 = logger("registry");
function sortDecimalStrings(a, b) {
  return parseInt(a, 10) - parseInt(b, 10);
}
function valueToString(v) {
  return v.toString();
}
function getFieldArgs(lookup, fields) {
  const count = fields.length;
  const args = new Array(count);
  for (let i = 0; i < count; i++) {
    args[i] = lookup.getTypeDef(fields[i].type).type;
  }
  return args;
}
function clearRecord(record) {
  const keys2 = Object.keys(record);
  for (let i = 0, count = keys2.length; i < count; i++) {
    delete record[keys2[i]];
  }
}
function getVariantStringIdx({ index }) {
  return index.toString();
}
function injectErrors(_, { lookup, pallets }, version, result) {
  clearRecord(result);
  for (let i = 0, count = pallets.length; i < count; i++) {
    const { errors, index, name } = pallets[i];
    if (errors.isSome) {
      const sectionName = stringCamelCase(name);
      lazyMethod(result, version >= 12 ? index.toNumber() : i, () => lazyVariants(lookup, errors.unwrap(), getVariantStringIdx, ({ docs, fields, index: index2, name: name2 }) => ({
        args: getFieldArgs(lookup, fields),
        docs: docs.map(valueToString),
        fields,
        index: index2.toNumber(),
        method: name2.toString(),
        name: name2.toString(),
        section: sectionName
      })));
    }
  }
}
function injectEvents(registry, { lookup, pallets }, version, result) {
  const filtered = pallets.filter(filterEventsSome);
  clearRecord(result);
  for (let i = 0, count = filtered.length; i < count; i++) {
    const { events: events2, index, name } = filtered[i];
    lazyMethod(result, version >= 12 ? index.toNumber() : i, () => lazyVariants(lookup, events2.unwrap(), getVariantStringIdx, (variant) => {
      const meta = registry.createType("EventMetadataLatest", objectSpread({}, variant, { args: getFieldArgs(lookup, variant.fields) }));
      return class extends GenericEventData {
        constructor(registry2, value) {
          super(registry2, value, meta, stringCamelCase(name), variant.name.toString());
        }
      };
    }));
  }
}
function injectExtrinsics(registry, { lookup, pallets }, version, result, mapping2) {
  const filtered = pallets.filter(filterCallsSome);
  clearRecord(result);
  clearRecord(mapping2);
  for (let i = 0, count = filtered.length; i < count; i++) {
    const { calls, index, name } = filtered[i];
    const sectionIndex = version >= 12 ? index.toNumber() : i;
    const sectionName = stringCamelCase(name);
    const allCalls = calls.unwrap();
    lazyMethod(result, sectionIndex, () => lazyVariants(lookup, allCalls, getVariantStringIdx, (variant) => createCallFunction(registry, lookup, variant, sectionName, sectionIndex)));
    const { path } = registry.lookup.getSiType(allCalls.type);
    const palletIdx = path.findIndex((v) => v.eq("pallet"));
    if (palletIdx !== -1) {
      const name2 = stringCamelCase(path.slice(0, palletIdx).map((p, i2) => i2 === 0 ? p.replace(/^(frame|pallet)_/, "") : p).join(" "));
      if (!mapping2[name2]) {
        mapping2[name2] = [sectionName];
      } else {
        mapping2[name2].push(sectionName);
      }
    }
  }
}
function extractProperties(registry, metadata) {
  const original = registry.getChainProperties();
  const constants = decorateConstants(registry, metadata.asLatest, metadata.version);
  const ss58Format = constants["system"] && (constants["system"]["sS58Prefix"] || constants["system"]["ss58Prefix"]);
  if (!ss58Format) {
    return original;
  }
  const { isEthereum, tokenDecimals, tokenSymbol } = original || {};
  return registry.createTypeUnsafe("ChainProperties", [{ isEthereum, ss58Format, tokenDecimals, tokenSymbol }]);
}
var TypeRegistry = class {
  __internal__chainProperties;
  __internal__classes = /* @__PURE__ */ new Map();
  __internal__definitions = /* @__PURE__ */ new Map();
  __internal__firstCallIndex = null;
  __internal__hasher = blake2AsU8a;
  __internal__knownTypes = {};
  __internal__lookup;
  __internal__metadata;
  __internal__metadataVersion = 0;
  __internal__signedExtensions = fallbackExtensions;
  __internal__unknownTypes = /* @__PURE__ */ new Map();
  __internal__userExtensions;
  __internal__knownDefaults;
  __internal__knownDefaultsEntries;
  __internal__knownDefinitions;
  __internal__metadataCalls = {};
  __internal__metadataErrors = {};
  __internal__metadataEvents = {};
  __internal__moduleMap = {};
  createdAtHash;
  constructor(createdAtHash) {
    this.__internal__knownDefaults = objectSpread({ Json, Metadata, PortableRegistry, Raw }, index_types_exports);
    this.__internal__knownDefaultsEntries = Object.entries(this.__internal__knownDefaults);
    this.__internal__knownDefinitions = definitions_exports;
    const allKnown = Object.values(this.__internal__knownDefinitions);
    for (let i = 0, count = allKnown.length; i < count; i++) {
      this.register(allKnown[i].types);
    }
    if (createdAtHash) {
      this.createdAtHash = this.createType("BlockHash", createdAtHash);
    }
  }
  get chainDecimals() {
    if (this.__internal__chainProperties?.tokenDecimals.isSome) {
      const allDecimals = this.__internal__chainProperties.tokenDecimals.unwrap();
      if (allDecimals.length) {
        return allDecimals.map((b) => b.toNumber());
      }
    }
    return [12];
  }
  get chainIsEthereum() {
    return this.__internal__chainProperties?.isEthereum.isTrue || false;
  }
  get chainSS58() {
    return this.__internal__chainProperties?.ss58Format.isSome ? this.__internal__chainProperties.ss58Format.unwrap().toNumber() : void 0;
  }
  get chainTokens() {
    if (this.__internal__chainProperties?.tokenSymbol.isSome) {
      const allTokens = this.__internal__chainProperties.tokenSymbol.unwrap();
      if (allTokens.length) {
        return allTokens.map(valueToString);
      }
    }
    return [formatBalance.getDefaults().unit];
  }
  get firstCallIndex() {
    return this.__internal__firstCallIndex || DEFAULT_FIRST_CALL_IDX;
  }
  /**
   * @description Returns true if the type is in a Compat format
   */
  isLookupType(value) {
    return /Lookup\d+$/.test(value);
  }
  /**
   * @description Creates a lookup string from the supplied id
   */
  createLookupType(lookupId) {
    return `Lookup${typeof lookupId === "number" ? lookupId : lookupId.toNumber()}`;
  }
  get knownTypes() {
    return this.__internal__knownTypes;
  }
  get lookup() {
    return assertReturn(this.__internal__lookup, "PortableRegistry has not been set on this registry");
  }
  get metadata() {
    return assertReturn(this.__internal__metadata, "Metadata has not been set on this registry");
  }
  get unknownTypes() {
    return [...this.__internal__unknownTypes.keys()];
  }
  get signedExtensions() {
    return this.__internal__signedExtensions;
  }
  clearCache() {
    this.__internal__classes = /* @__PURE__ */ new Map();
  }
  /**
   * @describe Creates an instance of the class
   */
  createClass(type) {
    return createClassUnsafe(this, type);
  }
  /**
   * @describe Creates an instance of the class
   */
  createClassUnsafe(type) {
    return createClassUnsafe(this, type);
  }
  /**
   * @description Creates an instance of a type as registered
   */
  createType(type, ...params) {
    return createTypeUnsafe(this, type, params);
  }
  /**
   * @description Creates an instance of a type as registered
   */
  createTypeUnsafe(type, params, options) {
    return createTypeUnsafe(this, type, params, options);
  }
  // find a specific call
  findMetaCall(callIndex) {
    const [section2, method] = [callIndex[0], callIndex[1]];
    return assertReturn(this.__internal__metadataCalls[`${section2}`] && this.__internal__metadataCalls[`${section2}`][`${method}`], () => `findMetaCall: Unable to find Call with index [${section2}, ${method}]/[${callIndex.toString()}]`);
  }
  // finds an error
  findMetaError(errorIndex) {
    const [section2, method] = isU8a(errorIndex) ? [errorIndex[0], errorIndex[1]] : [
      errorIndex.index.toNumber(),
      isU8a(errorIndex.error) ? errorIndex.error[0] : errorIndex.error.toNumber()
    ];
    return assertReturn(this.__internal__metadataErrors[`${section2}`] && this.__internal__metadataErrors[`${section2}`][`${method}`], () => `findMetaError: Unable to find Error with index [${section2}, ${method}]/[${errorIndex.toString()}]`);
  }
  findMetaEvent(eventIndex) {
    const [section2, method] = [eventIndex[0], eventIndex[1]];
    return assertReturn(this.__internal__metadataEvents[`${section2}`] && this.__internal__metadataEvents[`${section2}`][`${method}`], () => `findMetaEvent: Unable to find Event with index [${section2}, ${method}]/[${eventIndex.toString()}]`);
  }
  get(name, withUnknown, knownTypeDef) {
    return this.getUnsafe(name, withUnknown, knownTypeDef);
  }
  getUnsafe(name, withUnknown, knownTypeDef) {
    let Type2 = this.__internal__classes.get(name) || this.__internal__knownDefaults[name];
    if (!Type2) {
      const definition = this.__internal__definitions.get(name);
      let BaseType;
      if (definition) {
        BaseType = createClassUnsafe(this, definition);
      } else if (knownTypeDef) {
        BaseType = constructTypeClass(this, knownTypeDef);
      } else if (withUnknown) {
        l10.warn(`Unable to resolve type ${name}, it will fail on construction`);
        this.__internal__unknownTypes.set(name, true);
        BaseType = DoNotConstruct.with(name);
      }
      if (BaseType) {
        Type2 = class extends BaseType {
        };
        this.__internal__classes.set(name, Type2);
        if (knownTypeDef && isNumber(knownTypeDef.lookupIndex)) {
          this.__internal__classes.set(this.createLookupType(knownTypeDef.lookupIndex), Type2);
        }
      }
    }
    return Type2;
  }
  getChainProperties() {
    return this.__internal__chainProperties;
  }
  getClassName(Type2) {
    const names = [];
    for (const [name, Clazz] of this.__internal__knownDefaultsEntries) {
      if (Type2 === Clazz) {
        names.push(name);
      }
    }
    for (const [name, Clazz] of this.__internal__classes.entries()) {
      if (Type2 === Clazz) {
        names.push(name);
      }
    }
    return names.length ? names.sort().reverse()[0] : void 0;
  }
  getDefinition(typeName) {
    return this.__internal__definitions.get(typeName);
  }
  getModuleInstances(specName, moduleName) {
    return this.__internal__knownTypes?.typesBundle?.spec?.[specName.toString()]?.instances?.[moduleName] || this.__internal__moduleMap[moduleName];
  }
  getOrThrow(name) {
    const Clazz = this.get(name);
    if (!Clazz) {
      throw new Error(`type ${name} not found`);
    }
    return Clazz;
  }
  getOrUnknown(name) {
    return this.get(name, true);
  }
  getSignedExtensionExtra() {
    return expandExtensionTypes(this.__internal__signedExtensions, "payload", this.__internal__userExtensions);
  }
  getSignedExtensionTypes() {
    return expandExtensionTypes(this.__internal__signedExtensions, "extrinsic", this.__internal__userExtensions);
  }
  hasClass(name) {
    return this.__internal__classes.has(name) || !!this.__internal__knownDefaults[name];
  }
  hasDef(name) {
    return this.__internal__definitions.has(name);
  }
  hasType(name) {
    return !this.__internal__unknownTypes.get(name) && (this.hasClass(name) || this.hasDef(name));
  }
  hash(data) {
    return this.createType("CodecHash", this.__internal__hasher(data));
  }
  // eslint-disable-next-line no-dupe-class-members
  register(arg1, arg2) {
    if (isFunction(arg1)) {
      this.__internal__classes.set(arg1.name, arg1);
    } else if (isString(arg1)) {
      if (!isFunction(arg2)) {
        throw new Error(`Expected class definition passed to '${arg1}' registration`);
      } else if (arg1 === arg2.toString()) {
        throw new Error(`Unable to register circular ${arg1} === ${arg1}`);
      }
      this.__internal__classes.set(arg1, arg2);
    } else {
      this.__internal__registerObject(arg1);
    }
  }
  __internal__registerObject = (obj) => {
    const entries = Object.entries(obj);
    for (let e = 0, count = entries.length; e < count; e++) {
      const [name, type] = entries[e];
      if (isFunction(type)) {
        this.__internal__classes.set(name, type);
      } else {
        const def = isString(type) ? type : stringify(type);
        if (name === def) {
          throw new Error(`Unable to register circular ${name} === ${def}`);
        }
        if (this.__internal__classes.has(name)) {
          this.__internal__classes.delete(name);
        }
        this.__internal__definitions.set(name, def);
      }
    }
  };
  // sets the chain properties
  setChainProperties(properties) {
    if (properties) {
      this.__internal__chainProperties = properties;
    }
  }
  setHasher(hasher) {
    this.__internal__hasher = hasher || blake2AsU8a;
  }
  setKnownTypes(knownTypes2) {
    this.__internal__knownTypes = knownTypes2;
  }
  setLookup(lookup) {
    this.__internal__lookup = lookup;
    lookup.register();
  }
  // register alias types alongside the portable/lookup setup
  // (we don't combine this into setLookup since that would/could
  // affect stand-along lookups, such as ABIs which don't have
  // actual on-chain metadata)
  __internal__registerLookup = (lookup) => {
    this.setLookup(lookup);
    let Weight = null;
    if (this.hasType("SpWeightsWeightV2Weight")) {
      const weightv2 = this.createType("SpWeightsWeightV2Weight");
      Weight = weightv2.refTime && weightv2.proofSize ? "SpWeightsWeightV2Weight" : "WeightV1";
    } else if (!isBn(this.createType("Weight"))) {
      Weight = "WeightV1";
    }
    if (Weight) {
      this.register({ Weight });
    }
  };
  // sets the metadata
  setMetadata(metadata, signedExtensions, userExtensions, noInitWarn) {
    this.__internal__metadata = metadata.asLatest;
    this.__internal__metadataVersion = metadata.version;
    this.__internal__firstCallIndex = null;
    this.__internal__registerLookup(this.__internal__metadata.lookup);
    injectExtrinsics(this, this.__internal__metadata, this.__internal__metadataVersion, this.__internal__metadataCalls, this.__internal__moduleMap);
    injectErrors(this, this.__internal__metadata, this.__internal__metadataVersion, this.__internal__metadataErrors);
    injectEvents(this, this.__internal__metadata, this.__internal__metadataVersion, this.__internal__metadataEvents);
    const [defSection] = Object.keys(this.__internal__metadataCalls).sort(sortDecimalStrings);
    if (defSection) {
      const [defMethod] = Object.keys(this.__internal__metadataCalls[defSection]).sort(sortDecimalStrings);
      if (defMethod) {
        this.__internal__firstCallIndex = new Uint8Array([parseInt(defSection, 10), parseInt(defMethod, 10)]);
      }
    }
    this.setSignedExtensions(signedExtensions || (this.__internal__metadata.extrinsic.version.gt(BN_ZERO) ? this.__internal__metadata.extrinsic.signedExtensions.map(({ identifier }) => identifier.toString()) : fallbackExtensions), userExtensions, noInitWarn);
    this.setChainProperties(extractProperties(this, metadata));
  }
  // sets the available signed extensions
  setSignedExtensions(signedExtensions = fallbackExtensions, userExtensions, noInitWarn) {
    this.__internal__signedExtensions = signedExtensions;
    this.__internal__userExtensions = userExtensions;
    if (!noInitWarn) {
      const unknown = findUnknownExtensions(this.__internal__signedExtensions, this.__internal__userExtensions);
      if (unknown.length) {
        l10.warn(`Unknown signed extensions ${unknown.join(", ")} found, treating them as no-effect`);
      }
    }
  }
};

// node_modules/@polkadot/rpc-core/util/refCountDelay.js
function refCountDelay(delay = 1750) {
  return (source) => {
    let [state, refCount2, connection, scheduler] = [0, 0, Subscription.EMPTY, Subscription.EMPTY];
    return new Observable((ob) => {
      source.subscribe(ob);
      if (refCount2++ === 0) {
        if (state === 1) {
          scheduler.unsubscribe();
        } else {
          connection = source.connect();
        }
        state = 3;
      }
      return () => {
        if (--refCount2 === 0) {
          if (state === 2) {
            state = 0;
            scheduler.unsubscribe();
          } else {
            state = 1;
            scheduler = asapScheduler.schedule(() => {
              state = 0;
              connection.unsubscribe();
            }, delay);
          }
        }
      };
    });
  };
}

// node_modules/@polkadot/rpc-core/util/drr.js
function CMP(a, b) {
  return stringify({ t: a }) === stringify({ t: b });
}
function ERR(error) {
  throw error;
}
function NOOP() {
}
function drr({ delay, skipChange = false, skipTimeout = false } = {}) {
  return (source$) => source$.pipe(
    catchError(ERR),
    skipChange ? tap(NOOP) : distinctUntilChanged(CMP),
    // eslint-disable-next-line deprecation/deprecation
    publishReplay(1),
    skipTimeout ? refCount() : refCountDelay(delay)
  );
}

// node_modules/@polkadot/rpc-core/util/memo.js
function memo(instanceId, inner) {
  const options = { getInstanceId: () => instanceId };
  const cached = memoize((...params) => new Observable((observer) => {
    const subscription = inner(...params).subscribe(observer);
    return () => {
      cached.unmemoize(...params);
      subscription.unsubscribe();
    };
  }).pipe(drr()), options);
  return cached;
}

// node_modules/@polkadot/rpc-core/bundle.js
var l11 = logger("rpc-core");
var EMPTY_META = {
  fallback: void 0,
  modifier: { isOptional: true },
  type: {
    asMap: { linked: { isTrue: false } },
    isMap: false
  }
};
function logErrorMessage(method, { noErrorLog, params, type }, error) {
  if (noErrorLog) {
    return;
  }
  l11.error(`${method}(${params.map(({ isOptional, name, type: type2 }) => `${name}${isOptional ? "?" : ""}: ${type2}`).join(", ")}): ${type}:: ${error.message}`);
}
function isTreatAsHex(key) {
  return ["0x3a636f6465"].includes(key.toHex());
}
var RpcCore = class {
  __internal__instanceId;
  __internal__isPedantic;
  __internal__registryDefault;
  __internal__storageCache = /* @__PURE__ */ new Map();
  __internal__storageCacheHits = 0;
  __internal__storageCacheSize = 0;
  __internal__getBlockRegistry;
  __internal__getBlockHash;
  mapping = /* @__PURE__ */ new Map();
  provider;
  sections = [];
  /**
   * @constructor
   * Default constructor for the core RPC handler
   * @param  {ProviderInterface} provider An API provider using any of the supported providers (HTTP, SC or WebSocket)
   */
  constructor(instanceId, registry, { isPedantic = true, provider, userRpc = {} }) {
    if (!provider || !isFunction(provider.send)) {
      throw new Error("Expected Provider to API create");
    }
    this.__internal__instanceId = instanceId;
    this.__internal__isPedantic = isPedantic;
    this.__internal__registryDefault = registry;
    this.provider = provider;
    const sectionNames = Object.keys(jsonrpc_default);
    this.sections.push(...sectionNames);
    this.addUserInterfaces(userRpc);
  }
  /**
   * @description Returns the connected status of a provider
   */
  get isConnected() {
    return this.provider.isConnected;
  }
  /**
   * @description Manually connect from the attached provider
   */
  connect() {
    return this.provider.connect();
  }
  /**
   * @description Manually disconnect from the attached provider
   */
  disconnect() {
    return this.provider.disconnect();
  }
  /**
   * @description Returns the underlying core stats, including those from teh provider
   */
  get stats() {
    const stats = this.provider.stats;
    return stats ? __spreadProps(__spreadValues({}, stats), {
      core: {
        cacheHits: this.__internal__storageCacheHits,
        cacheSize: this.__internal__storageCacheSize
      }
    }) : void 0;
  }
  /**
   * @description Sets a registry swap (typically from Api)
   */
  setRegistrySwap(registrySwap) {
    this.__internal__getBlockRegistry = memoize(registrySwap, {
      getInstanceId: () => this.__internal__instanceId
    });
  }
  /**
   * @description Sets a function to resolve block hash from block number
   */
  setResolveBlockHash(resolveBlockHash) {
    this.__internal__getBlockHash = memoize(resolveBlockHash, {
      getInstanceId: () => this.__internal__instanceId
    });
  }
  addUserInterfaces(userRpc) {
    this.sections.push(...Object.keys(userRpc).filter((k) => !this.sections.includes(k)));
    for (let s = 0, scount = this.sections.length; s < scount; s++) {
      const section2 = this.sections[s];
      const defs = objectSpread({}, jsonrpc_default[section2], userRpc[section2]);
      const methods = Object.keys(defs);
      for (let m = 0, mcount = methods.length; m < mcount; m++) {
        const method = methods[m];
        const def = defs[method];
        const jsonrpc2 = def.endpoint || `${section2}_${method}`;
        if (!this.mapping.has(jsonrpc2)) {
          const isSubscription = !!def.pubsub;
          if (!this[section2]) {
            this[section2] = {};
          }
          this.mapping.set(jsonrpc2, objectSpread({}, def, { isSubscription, jsonrpc: jsonrpc2, method, section: section2 }));
          lazyMethod(this[section2], method, () => isSubscription ? this._createMethodSubscribe(section2, method, def) : this._createMethodSend(section2, method, def));
        }
      }
    }
  }
  _memomize(creator, def) {
    const memoOpts = { getInstanceId: () => this.__internal__instanceId };
    const memoized = memoize(creator(true), memoOpts);
    memoized.raw = memoize(creator(false), memoOpts);
    memoized.meta = def;
    return memoized;
  }
  _formatResult(isScale, registry, blockHash, method, def, params, result) {
    return isScale ? this._formatOutput(registry, blockHash, method, def, params, result) : result;
  }
  _createMethodSend(section2, method, def) {
    const rpcName = def.endpoint || `${section2}_${method}`;
    const hashIndex = def.params.findIndex(({ isHistoric }) => isHistoric);
    let memoized = null;
    const callWithRegistry = (isScale, values) => __async(this, null, function* () {
      const blockId = hashIndex === -1 ? null : values[hashIndex];
      const blockHash = blockId && def.params[hashIndex].type === "BlockNumber" ? yield this.__internal__getBlockHash?.(blockId) : blockId;
      const { registry } = isScale && blockHash && this.__internal__getBlockRegistry ? yield this.__internal__getBlockRegistry(u8aToU8a(blockHash)) : { registry: this.__internal__registryDefault };
      const params = this._formatParams(registry, null, def, values);
      const result = yield this.provider.send(rpcName, params.map((p) => p.toJSON()), !!blockHash);
      return this._formatResult(isScale, registry, blockHash, method, def, params, result);
    });
    const creator = (isScale) => (...values) => {
      const isDelayed = isScale && hashIndex !== -1 && !!values[hashIndex];
      return new Observable((observer) => {
        callWithRegistry(isScale, values).then((value) => {
          observer.next(value);
          observer.complete();
        }).catch((error) => {
          logErrorMessage(method, def, error);
          observer.error(error);
          observer.complete();
        });
        return () => {
          if (isScale) {
            memoized?.unmemoize(...values);
          } else {
            memoized?.raw.unmemoize(...values);
          }
        };
      }).pipe(
        // eslint-disable-next-line deprecation/deprecation
        publishReplay(1),
        // create a Replay(1)
        isDelayed ? refCountDelay() : refCount()
      );
    };
    memoized = this._memomize(creator, def);
    return memoized;
  }
  // create a subscriptor, it subscribes once and resolves with the id as subscribe
  _createSubscriber({ paramsJson, subName, subType, update }, errorHandler) {
    return new Promise((resolve, reject) => {
      this.provider.subscribe(subType, subName, paramsJson, update).then(resolve).catch((error) => {
        errorHandler(error);
        reject(error);
      });
    });
  }
  _createMethodSubscribe(section2, method, def) {
    const [updateType, subMethod, unsubMethod] = def.pubsub;
    const subName = `${section2}_${subMethod}`;
    const unsubName = `${section2}_${unsubMethod}`;
    const subType = `${section2}_${updateType}`;
    let memoized = null;
    const creator = (isScale) => (...values) => {
      return new Observable((observer) => {
        let subscriptionPromise = Promise.resolve(null);
        const registry = this.__internal__registryDefault;
        const errorHandler = (error) => {
          logErrorMessage(method, def, error);
          observer.error(error);
        };
        try {
          const params = this._formatParams(registry, null, def, values);
          const update = (error, result) => {
            if (error) {
              logErrorMessage(method, def, error);
              return;
            }
            try {
              observer.next(this._formatResult(isScale, registry, null, method, def, params, result));
            } catch (error2) {
              observer.error(error2);
            }
          };
          subscriptionPromise = this._createSubscriber({ paramsJson: params.map((p) => p.toJSON()), subName, subType, update }, errorHandler);
        } catch (error) {
          errorHandler(error);
        }
        return () => {
          if (isScale) {
            memoized?.unmemoize(...values);
          } else {
            memoized?.raw.unmemoize(...values);
          }
          subscriptionPromise.then((subscriptionId) => isNull(subscriptionId) ? Promise.resolve(false) : this.provider.unsubscribe(subType, unsubName, subscriptionId)).catch((error) => logErrorMessage(method, def, error));
        };
      }).pipe(drr());
    };
    memoized = this._memomize(creator, def);
    return memoized;
  }
  _formatParams(registry, blockHash, def, inputs) {
    const count = inputs.length;
    const reqCount = def.params.filter(({ isOptional }) => !isOptional).length;
    if (count < reqCount || count > def.params.length) {
      throw new Error(`Expected ${def.params.length} parameters${reqCount === def.params.length ? "" : ` (${def.params.length - reqCount} optional)`}, ${count} found instead`);
    }
    const params = new Array(count);
    for (let i = 0; i < count; i++) {
      params[i] = registry.createTypeUnsafe(def.params[i].type, [inputs[i]], { blockHash });
    }
    return params;
  }
  _formatOutput(registry, blockHash, method, rpc18, params, result) {
    if (rpc18.type === "StorageData") {
      const key = params[0];
      return this._formatStorageData(registry, blockHash, key, result);
    } else if (rpc18.type === "StorageChangeSet") {
      const keys2 = params[0];
      return keys2 ? this._formatStorageSet(registry, result.block, keys2, result.changes) : registry.createType("StorageChangeSet", result);
    } else if (rpc18.type === "Vec<StorageChangeSet>") {
      const jsonSet = result;
      const count = jsonSet.length;
      const mapped = new Array(count);
      for (let i = 0; i < count; i++) {
        const { block, changes } = jsonSet[i];
        mapped[i] = [
          registry.createType("BlockHash", block),
          this._formatStorageSet(registry, block, params[0], changes)
        ];
      }
      return method === "queryStorageAt" ? mapped[0][1] : mapped;
    }
    return registry.createTypeUnsafe(rpc18.type, [result], { blockHash });
  }
  _formatStorageData(registry, blockHash, key, value) {
    const isEmpty = isNull(value);
    const input = isEmpty ? null : isTreatAsHex(key) ? value : u8aToU8a(value);
    return this._newType(registry, blockHash, key, input, isEmpty);
  }
  _formatStorageSet(registry, blockHash, keys2, changes) {
    const count = keys2.length;
    const withCache = count !== 1;
    const values = new Array(count);
    for (let i = 0; i < count; i++) {
      values[i] = this._formatStorageSetEntry(registry, blockHash, keys2[i], changes, withCache, i);
    }
    return values;
  }
  _formatStorageSetEntry(registry, blockHash, key, changes, withCache, entryIndex) {
    const hexKey = key.toHex();
    const found = changes.find(([key2]) => key2 === hexKey);
    const isNotFound = isUndefined(found);
    if (isNotFound && withCache) {
      const cached = this.__internal__storageCache.get(hexKey);
      if (cached) {
        this.__internal__storageCacheHits++;
        return cached;
      }
    }
    const value = isNotFound ? null : found[1];
    const isEmpty = isNull(value);
    const input = isEmpty || isTreatAsHex(key) ? value : u8aToU8a(value);
    const codec = this._newType(registry, blockHash, key, input, isEmpty, entryIndex);
    this.__internal__storageCache.set(hexKey, codec);
    this.__internal__storageCacheSize++;
    return codec;
  }
  _newType(registry, blockHash, key, input, isEmpty, entryIndex = -1) {
    const type = key.outputType || "Raw";
    const meta = key.meta || EMPTY_META;
    const entryNum = entryIndex === -1 ? "" : ` entry ${entryIndex}:`;
    try {
      return registry.createTypeUnsafe(type, [
        isEmpty ? meta.fallback ? type.includes("Linkage<") ? u8aConcat(hexToU8a(meta.fallback.toHex()), new Uint8Array(2)) : hexToU8a(meta.fallback.toHex()) : void 0 : meta.modifier.isOptional ? registry.createTypeUnsafe(type, [input], { blockHash, isPedantic: this.__internal__isPedantic }) : input
      ], { blockHash, isFallback: isEmpty && !!meta.fallback, isOptional: meta.modifier.isOptional, isPedantic: this.__internal__isPedantic && !meta.modifier.isOptional });
    } catch (error) {
      throw new Error(`Unable to decode storage ${key.section || "unknown"}.${key.method || "unknown"}:${entryNum}: ${error.message}`);
    }
  }
};

// node_modules/@polkadot/api-derive/util/blockNumber.js
function unwrapBlockNumber(hdr) {
  return isCompact(hdr.number) ? hdr.number.unwrap() : hdr.number;
}

// node_modules/@polkadot/api-derive/util/cacheImpl.js
var deriveNoopCache = {
  del: () => void 0,
  forEach: () => void 0,
  get: () => void 0,
  set: (_, value) => value
};

// node_modules/@polkadot/api-derive/util/cache.js
var CHACHE_EXPIRY = 7 * (24 * 60) * (60 * 1e3);
var deriveCache;
function wrapCache(keyStart, cache) {
  return {
    del: (partial) => cache.del(`${keyStart}${partial}`),
    forEach: cache.forEach,
    get: (partial) => {
      const key = `${keyStart}${partial}`;
      const cached = cache.get(key);
      if (cached) {
        cached.x = Date.now();
        cache.set(key, cached);
        return cached.v;
      }
      return void 0;
    },
    set: (partial, v) => {
      cache.set(`${keyStart}${partial}`, { v, x: Date.now() });
    }
  };
}
function clearCache(cache) {
  const now = Date.now();
  const all3 = [];
  cache.forEach((key, { x }) => {
    now - x > CHACHE_EXPIRY && all3.push(key);
  });
  all3.forEach((key) => cache.del(key));
}
function setDeriveCache(prefix2 = "", cache) {
  deriveCache = cache ? wrapCache(`derive:${prefix2}:`, cache) : deriveNoopCache;
  if (cache) {
    clearCache(cache);
  }
}
setDeriveCache();

// node_modules/@polkadot/api-derive/util/first.js
function firstObservable(obs) {
  return obs.pipe(map(([a]) => a));
}
function firstMemo(fn) {
  return (instanceId, api) => memo(instanceId, (...args) => firstObservable(fn(api, ...args)));
}

// node_modules/@polkadot/api-derive/util/lazy.js
function lazyDeriveSection(result, section2, getKeys, creator) {
  lazyMethod(result, section2, () => lazyMethods({}, getKeys(section2), (method) => creator(section2, method)));
}

// node_modules/@polkadot/api-derive/accounts/index.js
var accounts_exports = {};
__export(accounts_exports, {
  _flags: () => _flags,
  _identity: () => _identity,
  accountId: () => accountId,
  flags: () => flags,
  hasIdentity: () => hasIdentity,
  hasIdentityMulti: () => hasIdentityMulti,
  idAndIndex: () => idAndIndex,
  idToIndex: () => idToIndex,
  identity: () => identity2,
  indexToId: () => indexToId,
  indexes: () => indexes,
  info: () => info
});

// node_modules/@polkadot/api-derive/accounts/accountId.js
function accountId(instanceId, api) {
  return memo(instanceId, (address) => {
    const decoded = isU8a(address) ? address : decodeAddress((address || "").toString());
    if (decoded.length > 8) {
      return of(api.registry.createType("AccountId", decoded));
    }
    const accountIndex = api.registry.createType("AccountIndex", decoded);
    return api.derive.accounts.indexToId(accountIndex.toString()).pipe(map((a) => assertReturn(a, "Unable to retrieve accountId")));
  });
}

// node_modules/@polkadot/api-derive/accounts/flags.js
function parseFlags(address, [electionsMembers, councilMembers, technicalCommitteeMembers, societyMembers, sudoKey]) {
  const addrStr = address?.toString();
  const isIncluded = (id) => id.toString() === addrStr;
  return {
    isCouncil: (electionsMembers?.map((r) => Array.isArray(r) ? r[0] : r.who) || councilMembers || []).some(isIncluded),
    isSociety: (societyMembers || []).some(isIncluded),
    isSudo: sudoKey?.toString() === addrStr,
    isTechCommittee: (technicalCommitteeMembers || []).some(isIncluded)
  };
}
function _flags(instanceId, api) {
  return memo(instanceId, () => {
    const results = [void 0, [], [], [], void 0];
    const calls = [
      (api.query.elections || api.query["phragmenElection"] || api.query["electionsPhragmen"])?.members,
      api.query.council?.members,
      api.query.technicalCommittee?.members,
      api.query.society?.members,
      api.query.sudo?.key
    ];
    const filtered = calls.filter((c) => c);
    if (!filtered.length) {
      return of(results);
    }
    return api.queryMulti(filtered).pipe(map((values) => {
      let resultIndex = -1;
      for (let i = 0, count = calls.length; i < count; i++) {
        if (isFunction(calls[i])) {
          results[i] = values[++resultIndex];
        }
      }
      return results;
    }));
  });
}
function flags(instanceId, api) {
  return memo(instanceId, (address) => api.derive.accounts._flags().pipe(map((r) => parseFlags(address, r))));
}

// node_modules/@polkadot/api-derive/accounts/idAndIndex.js
function idAndIndex(instanceId, api) {
  return memo(instanceId, (address) => {
    try {
      const decoded = isU8a(address) ? address : decodeAddress((address || "").toString());
      if (decoded.length > 8) {
        const accountId2 = api.registry.createType("AccountId", decoded);
        return api.derive.accounts.idToIndex(accountId2).pipe(map((accountIndex2) => [accountId2, accountIndex2]));
      }
      const accountIndex = api.registry.createType("AccountIndex", decoded);
      return api.derive.accounts.indexToId(accountIndex.toString()).pipe(map((accountId2) => [accountId2, accountIndex]));
    } catch {
      return of([void 0, void 0]);
    }
  });
}

// node_modules/@polkadot/api-derive/accounts/identity.js
var UNDEF_HEX = { toHex: () => void 0 };
function dataAsString(data) {
  return data.isRaw ? u8aToString(data.asRaw.toU8a(true)) : data.isNone ? void 0 : data.toHex();
}
function extractOther(additional) {
  return additional.reduce((other, [_key, _value]) => {
    const key = dataAsString(_key);
    const value = dataAsString(_value);
    if (key && value) {
      other[key] = value;
    }
    return other;
  }, {});
}
function identityCompat(identityOfOpt) {
  const identity3 = identityOfOpt.unwrap();
  return Array.isArray(identity3) ? identity3[0] : identity3;
}
function extractIdentity(identityOfOpt, superOf) {
  if (!identityOfOpt?.isSome) {
    return { judgements: [] };
  }
  const { info: info6, judgements } = identityCompat(identityOfOpt);
  const topDisplay = dataAsString(info6.display);
  return {
    display: superOf && dataAsString(superOf[1]) || topDisplay,
    displayParent: superOf && topDisplay,
    email: dataAsString(info6.email),
    image: dataAsString(info6.image),
    judgements,
    legal: dataAsString(info6.legal),
    other: extractOther(info6.additional),
    parent: superOf?.[0],
    pgp: info6.pgpFingerprint.unwrapOr(UNDEF_HEX).toHex(),
    riot: dataAsString(info6.riot),
    twitter: dataAsString(info6.twitter),
    web: dataAsString(info6.web)
  };
}
function getParent(api, identityOfOpt, superOfOpt) {
  if (identityOfOpt?.isSome) {
    return of([identityOfOpt, void 0]);
  } else if (superOfOpt?.isSome) {
    const superOf = superOfOpt.unwrap();
    return combineLatest([
      api.derive.accounts._identity(superOf[0]).pipe(map(([info6]) => info6)),
      of(superOf)
    ]);
  }
  return of([void 0, void 0]);
}
function _identity(instanceId, api) {
  return memo(instanceId, (accountId2) => accountId2 && api.query.identity?.identityOf ? combineLatest([
    api.query.identity.identityOf(accountId2),
    api.query.identity.superOf(accountId2)
  ]) : of([void 0, void 0]));
}
function identity2(instanceId, api) {
  return memo(instanceId, (accountId2) => api.derive.accounts._identity(accountId2).pipe(switchMap(([identityOfOpt, superOfOpt]) => getParent(api, identityOfOpt, superOfOpt)), map(([identityOfOpt, superOf]) => extractIdentity(identityOfOpt, superOf))));
}
var hasIdentity = firstMemo((api, accountId2) => api.derive.accounts.hasIdentityMulti([accountId2]));
function hasIdentityMulti(instanceId, api) {
  return memo(instanceId, (accountIds) => api.query.identity?.identityOf ? combineLatest([
    api.query.identity.identityOf.multi(accountIds),
    api.query.identity.superOf.multi(accountIds)
  ]).pipe(map(([identities, supers]) => identities.map((identityOfOpt, index) => {
    const superOfOpt = supers[index];
    const parentId = superOfOpt && superOfOpt.isSome ? superOfOpt.unwrap()[0].toString() : void 0;
    let display;
    if (identityOfOpt && identityOfOpt.isSome) {
      const value = dataAsString(identityCompat(identityOfOpt).info.display);
      if (value && !isHex(value)) {
        display = value;
      }
    }
    return { display, hasIdentity: !!(display || parentId), parentId };
  }))) : of(accountIds.map(() => ({ hasIdentity: false }))));
}

// node_modules/@polkadot/api-derive/accounts/idToIndex.js
function idToIndex(instanceId, api) {
  return memo(instanceId, (accountId2) => api.derive.accounts.indexes().pipe(map((indexes3) => indexes3[accountId2.toString()])));
}

// node_modules/@polkadot/api-derive/accounts/indexes.js
var indicesCache = null;
function queryAccounts(api) {
  return api.query.indices.accounts.entries().pipe(map((entries) => entries.reduce((indexes3, [key, idOpt]) => {
    if (idOpt.isSome) {
      indexes3[idOpt.unwrap()[0].toString()] = api.registry.createType("AccountIndex", key.args[0]);
    }
    return indexes3;
  }, {})));
}
function indexes(instanceId, api) {
  return memo(instanceId, () => indicesCache ? of(indicesCache) : (api.query.indices ? queryAccounts(api).pipe(startWith({})) : of({})).pipe(map((indices) => {
    indicesCache = indices;
    return indices;
  })));
}

// node_modules/@polkadot/api-derive/accounts/indexToId.js
function indexToId(instanceId, api) {
  return memo(instanceId, (accountIndex) => api.query.indices ? api.query.indices.accounts(accountIndex).pipe(map((optResult) => optResult.unwrapOr([])[0])) : of(void 0));
}

// node_modules/@polkadot/api-derive/accounts/info.js
function retrieveNick(api, accountId2) {
  return (accountId2 && api.query["nicks"]?.["nameOf"] ? api.query["nicks"]["nameOf"](accountId2) : of(void 0)).pipe(map((nameOf) => nameOf?.isSome ? u8aToString(nameOf.unwrap()[0]).substring(0, api.consts["nicks"]["maxLength"].toNumber()) : void 0));
}
function info(instanceId, api) {
  return memo(instanceId, (address) => api.derive.accounts.idAndIndex(address).pipe(switchMap(([accountId2, accountIndex]) => combineLatest([
    of({ accountId: accountId2, accountIndex }),
    api.derive.accounts.identity(accountId2),
    retrieveNick(api, accountId2)
  ])), map(([{ accountId: accountId2, accountIndex }, identity3, nickname]) => ({
    accountId: accountId2,
    accountIndex,
    identity: identity3,
    nickname
  }))));
}

// node_modules/@polkadot/api-derive/alliance/index.js
var alliance_exports = {};
__export(alliance_exports, {
  hasProposals: () => hasProposals2,
  members: () => members2,
  prime: () => prime2,
  proposal: () => proposal2,
  proposalCount: () => proposalCount2,
  proposalHashes: () => proposalHashes2,
  proposals: () => proposals2
});

// node_modules/@polkadot/api-derive/collective/helpers.js
function getInstance(api, section2) {
  const instances = api.registry.getModuleInstances(api.runtimeVersion.specName, section2);
  const name = instances?.length ? instances[0] : section2;
  return api.query[name];
}
function withSection(section2, fn) {
  return (instanceId, api) => memo(instanceId, fn(getInstance(api, section2), api, instanceId));
}
function callMethod(method, empty2) {
  return (section2) => withSection(section2, (query2) => () => isFunction(query2?.[method]) ? query2[method]() : of(empty2));
}

// node_modules/@polkadot/api-derive/collective/members.js
var members = callMethod("members", []);

// node_modules/@polkadot/api-derive/collective/prime.js
function prime(section2) {
  return withSection(section2, (query2) => () => isFunction(query2?.prime) ? query2.prime().pipe(map((o) => o.unwrapOr(null))) : of(null));
}

// node_modules/@polkadot/api-derive/collective/proposals.js
function parse(api, [hashes, proposals8, votes2]) {
  return proposals8.map((o, index) => ({
    hash: api.registry.createType("Hash", hashes[index]),
    proposal: o && o.isSome ? o.unwrap() : null,
    votes: votes2[index].unwrapOr(null)
  }));
}
function _proposalsFrom(api, query2, hashes) {
  return (isFunction(query2?.proposals) && hashes.length ? combineLatest([
    of(hashes),
    // this should simply be api.query[section].proposalOf.multi<Option<Proposal>>(hashes),
    // however we have had cases on Edgeware where the indices have moved around after an
    // upgrade, which results in invalid on-chain data
    query2.proposalOf.multi(hashes).pipe(catchError(() => of(hashes.map(() => null)))),
    query2.voting.multi(hashes)
  ]) : of([[], [], []])).pipe(map((r) => parse(api, r)));
}
function hasProposals(section2) {
  return withSection(section2, (query2) => () => of(isFunction(query2?.proposals)));
}
function proposals(section2) {
  return withSection(section2, (query2, api) => () => api.derive[section2].proposalHashes().pipe(switchMap((all3) => _proposalsFrom(api, query2, all3))));
}
function proposal(section2) {
  return withSection(section2, (query2, api) => (hash) => isFunction(query2?.proposals) ? firstObservable(_proposalsFrom(api, query2, [hash])) : of(null));
}
var proposalCount = callMethod("proposalCount", null);
var proposalHashes = callMethod("proposals", []);

// node_modules/@polkadot/api-derive/alliance/index.js
var members2 = members("allianceMotion");
var hasProposals2 = hasProposals("allianceMotion");
var proposal2 = proposal("allianceMotion");
var proposalCount2 = proposalCount("allianceMotion");
var proposalHashes2 = proposalHashes("allianceMotion");
var proposals2 = proposals("allianceMotion");
var prime2 = prime("allianceMotion");

// node_modules/@polkadot/api-derive/bagsList/index.js
var bagsList_exports = {};
__export(bagsList_exports, {
  _getIds: () => _getIds,
  all: () => all,
  expand: () => expand,
  get: () => get,
  getExpanded: () => getExpanded,
  listNodes: () => listNodes
});

// node_modules/@polkadot/api-derive/bagsList/util.js
function getQueryInterface(api) {
  return (
    // latest substrate & polkadot
    api.query.voterList || // previous substrate
    api.query["voterBagsList"] || api.query["bagsList"]
  );
}

// node_modules/@polkadot/api-derive/bagsList/get.js
function orderBags(ids, bags) {
  const sorted = ids.map((id, index) => ({
    bag: bags[index].unwrapOr(null),
    id,
    key: id.toString()
  })).sort((a, b) => b.id.cmp(a.id));
  const max = sorted.length - 1;
  return sorted.map((entry, index) => objectSpread(entry, {
    bagLower: index === max ? BN_ZERO : sorted[index + 1].id,
    bagUpper: entry.id,
    index
  }));
}
function _getIds(instanceId, api) {
  const query2 = getQueryInterface(api);
  return memo(instanceId, (_ids) => {
    const ids = _ids.map((id) => bnToBn(id));
    return ids.length ? query2.listBags.multi(ids).pipe(map((bags) => orderBags(ids, bags))) : of([]);
  });
}
function all(instanceId, api) {
  const query2 = getQueryInterface(api);
  return memo(instanceId, () => query2.listBags.keys().pipe(switchMap((keys2) => api.derive.bagsList._getIds(keys2.map(({ args: [id] }) => id))), map((list) => list.filter(({ bag }) => bag))));
}
function get(instanceId, api) {
  return memo(instanceId, (id) => api.derive.bagsList._getIds([bnToBn(id)]).pipe(map((bags) => bags[0])));
}

// node_modules/@polkadot/api-derive/bagsList/getExpanded.js
function expand(instanceId, api) {
  return memo(instanceId, (bag) => api.derive.bagsList.listNodes(bag.bag).pipe(map((nodes) => objectSpread({ nodes }, bag))));
}
function getExpanded(instanceId, api) {
  return memo(instanceId, (id) => api.derive.bagsList.get(id).pipe(switchMap((bag) => api.derive.bagsList.expand(bag))));
}

// node_modules/@polkadot/api-derive/bagsList/listNodes.js
function traverseLinks(api, head) {
  const subject = new BehaviorSubject(head);
  const query2 = getQueryInterface(api);
  return subject.pipe(
    switchMap((account3) => query2.listNodes(account3)),
    tap((node) => {
      nextTick(() => {
        node.isSome && node.value.next.isSome ? subject.next(node.unwrap().next.unwrap()) : subject.complete();
      });
    }),
    toArray(),
    // toArray since we want to startSubject to be completed
    map((all3) => all3.map((o) => o.unwrap()))
  );
}
function listNodes(instanceId, api) {
  return memo(instanceId, (bag) => bag && bag.head.isSome ? traverseLinks(api, bag.head.unwrap()) : of([]));
}

// node_modules/@polkadot/api-derive/balances/index.js
var balances_exports = {};
__export(balances_exports, {
  account: () => account,
  all: () => all2,
  votingBalance: () => votingBalance,
  votingBalances: () => votingBalances
});

// node_modules/@polkadot/api-derive/balances/all.js
var VESTING_ID = "0x76657374696e6720";
function calcLocked(api, bestNumber2, locks2) {
  let lockedBalance = api.registry.createType("Balance");
  let lockedBreakdown = [];
  let vestingLocked = api.registry.createType("Balance");
  let allLocked = false;
  if (Array.isArray(locks2)) {
    lockedBreakdown = locks2.filter(({ until }) => !until || bestNumber2 && until.gt(bestNumber2));
    allLocked = lockedBreakdown.some(({ amount }) => amount && amount.isMax());
    vestingLocked = api.registry.createType("Balance", lockedBreakdown.filter(({ id }) => id.eq(VESTING_ID)).reduce((result, { amount }) => result.iadd(amount), new import_bn.default(0)));
    const notAll = lockedBreakdown.filter(({ amount }) => amount && !amount.isMax());
    if (notAll.length) {
      lockedBalance = api.registry.createType("Balance", bnMax(...notAll.map(({ amount }) => amount)));
    }
  }
  return { allLocked, lockedBalance, lockedBreakdown, vestingLocked };
}
function calcShared(api, bestNumber2, data, locks2) {
  const { allLocked, lockedBalance, lockedBreakdown, vestingLocked } = calcLocked(api, bestNumber2, locks2);
  return objectSpread({}, data, {
    availableBalance: api.registry.createType("Balance", allLocked ? 0 : bnMax(new import_bn.default(0), data?.freeBalance ? data.freeBalance.sub(lockedBalance) : new import_bn.default(0))),
    lockedBalance,
    lockedBreakdown,
    vestingLocked
  });
}
function calcVesting(bestNumber2, shared, _vesting) {
  const vesting = _vesting || [];
  const isVesting = !shared.vestingLocked.isZero();
  const vestedBalances = vesting.map(({ locked, perBlock, startingBlock }) => bestNumber2.gt(startingBlock) ? bnMin(locked, perBlock.mul(bestNumber2.sub(startingBlock))) : BN_ZERO);
  const vestedBalance = vestedBalances.reduce((all3, value) => all3.iadd(value), new import_bn.default(0));
  const vestingTotal = vesting.reduce((all3, { locked }) => all3.iadd(locked), new import_bn.default(0));
  return {
    isVesting,
    vestedBalance,
    vestedClaimable: isVesting ? shared.vestingLocked.sub(vestingTotal.sub(vestedBalance)) : BN_ZERO,
    vesting: vesting.map(({ locked, perBlock, startingBlock }, index) => ({
      endBlock: locked.div(perBlock).iadd(startingBlock),
      locked,
      perBlock,
      startingBlock,
      vested: vestedBalances[index]
    })).filter(({ locked }) => !locked.isZero()),
    vestingTotal
  };
}
function calcBalances(api, result) {
  const [data, [vesting, allLocks, namedReserves], bestNumber2] = result;
  const shared = calcShared(api, bestNumber2, data, allLocks[0]);
  return objectSpread(shared, calcVesting(bestNumber2, shared, vesting), {
    accountId: data.accountId,
    accountNonce: data.accountNonce,
    additional: allLocks.slice(1).map((l15, index) => calcShared(api, bestNumber2, data.additional[index], l15)),
    namedReserves
  });
}
function queryOld(api, accountId2) {
  return combineLatest([
    api.query.balances.locks(accountId2),
    api.query.balances["vesting"](accountId2)
  ]).pipe(map(([locks2, optVesting]) => {
    let vestingNew = null;
    if (optVesting.isSome) {
      const { offset: locked, perBlock, startingBlock } = optVesting.unwrap();
      vestingNew = api.registry.createType("VestingInfo", { locked, perBlock, startingBlock });
    }
    return [
      vestingNew ? [vestingNew] : null,
      [locks2],
      []
    ];
  }));
}
var isNonNullable = (nullable) => !!nullable;
function createCalls(calls) {
  return [
    calls.map((c) => !c),
    calls.filter(isNonNullable)
  ];
}
function queryCurrent(api, accountId2, balanceInstances = ["balances"]) {
  const [lockEmpty, lockQueries] = createCalls(balanceInstances.map((m) => api.derive[m]?.customLocks || api.query[m]?.locks));
  const [reserveEmpty, reserveQueries] = createCalls(balanceInstances.map((m) => api.query[m]?.reserves));
  return combineLatest([
    api.query.vesting?.vesting ? api.query.vesting.vesting(accountId2) : of(api.registry.createType("Option<VestingInfo>")),
    lockQueries.length ? combineLatest(lockQueries.map((c) => c(accountId2))) : of([]),
    reserveQueries.length ? combineLatest(reserveQueries.map((c) => c(accountId2))) : of([])
  ]).pipe(map(([opt, locks2, reserves]) => {
    let offsetLock = -1;
    let offsetReserve = -1;
    const vesting = opt.unwrapOr(null);
    return [
      vesting ? Array.isArray(vesting) ? vesting : [vesting] : null,
      lockEmpty.map((e) => e ? api.registry.createType("Vec<BalanceLock>") : locks2[++offsetLock]),
      reserveEmpty.map((e) => e ? api.registry.createType("Vec<PalletBalancesReserveData>") : reserves[++offsetReserve])
    ];
  }));
}
function all2(instanceId, api) {
  const balanceInstances = api.registry.getModuleInstances(api.runtimeVersion.specName, "balances");
  return memo(instanceId, (address) => combineLatest([
    api.derive.balances.account(address),
    isFunction(api.query.system?.account) || isFunction(api.query.balances?.account) ? queryCurrent(api, address, balanceInstances) : queryOld(api, address)
  ]).pipe(switchMap(([account3, locks2]) => combineLatest([
    of(account3),
    of(locks2),
    api.derive.chain.bestNumber()
  ])), map((result) => calcBalances(api, result))));
}

// node_modules/@polkadot/api-derive/balances/account.js
function zeroBalance(api) {
  return api.registry.createType("Balance");
}
function getBalance(api, [freeBalance, reservedBalance, frozenFee, frozenMisc]) {
  const votingBalance2 = api.registry.createType("Balance", freeBalance.toBn());
  return {
    freeBalance,
    frozenFee,
    frozenMisc,
    reservedBalance,
    votingBalance: votingBalance2
  };
}
function calcBalances2(api, [accountId2, [accountNonce, [primary, ...additional]]]) {
  return objectSpread({
    accountId: accountId2,
    accountNonce,
    additional: additional.map((b) => getBalance(api, b))
  }, getBalance(api, primary));
}
function queryBalancesFree(api, accountId2) {
  return combineLatest([
    api.query.balances["freeBalance"](accountId2),
    api.query.balances["reservedBalance"](accountId2),
    api.query.system["accountNonce"](accountId2)
  ]).pipe(map(([freeBalance, reservedBalance, accountNonce]) => [
    accountNonce,
    [[freeBalance, reservedBalance, zeroBalance(api), zeroBalance(api)]]
  ]));
}
function queryNonceOnly(api, accountId2) {
  const fill = (nonce) => [
    nonce,
    [[zeroBalance(api), zeroBalance(api), zeroBalance(api), zeroBalance(api)]]
  ];
  return isFunction(api.query.system.account) ? api.query.system.account(accountId2).pipe(map(({ nonce }) => fill(nonce))) : isFunction(api.query.system["accountNonce"]) ? api.query.system["accountNonce"](accountId2).pipe(map((nonce) => fill(nonce))) : of(fill(api.registry.createType("Index")));
}
function queryBalancesAccount(api, accountId2, modules = ["balances"]) {
  const balances = modules.map((m) => api.derive[m]?.customAccount || api.query[m]?.account).filter((q) => isFunction(q));
  const extract = (nonce, data) => [
    nonce,
    data.map(({ feeFrozen, free, miscFrozen, reserved }) => [free, reserved, feeFrozen, miscFrozen])
  ];
  return balances.length ? isFunction(api.query.system.account) ? combineLatest([
    api.query.system.account(accountId2),
    ...balances.map((c) => c(accountId2))
  ]).pipe(map(([{ nonce }, ...balances2]) => extract(nonce, balances2))) : combineLatest([
    api.query.system["accountNonce"](accountId2),
    ...balances.map((c) => c(accountId2))
  ]).pipe(map(([nonce, ...balances2]) => extract(nonce, balances2))) : queryNonceOnly(api, accountId2);
}
function querySystemAccount(api, accountId2) {
  return api.query.system.account(accountId2).pipe(map((infoOrTuple) => {
    const data = infoOrTuple.nonce ? infoOrTuple.data : infoOrTuple[1];
    const nonce = infoOrTuple.nonce || infoOrTuple[0];
    if (!data || data.isEmpty) {
      return [
        nonce,
        [[zeroBalance(api), zeroBalance(api), zeroBalance(api), zeroBalance(api)]]
      ];
    }
    const { feeFrozen, free, miscFrozen, reserved } = data;
    return [
      nonce,
      [[free, reserved, feeFrozen, miscFrozen]]
    ];
  }));
}
function account(instanceId, api) {
  const balanceInstances = api.registry.getModuleInstances(api.runtimeVersion.specName, "balances");
  const nonDefaultBalances = balanceInstances && balanceInstances[0] !== "balances";
  return memo(instanceId, (address) => api.derive.accounts.accountId(address).pipe(switchMap((accountId2) => accountId2 ? combineLatest([
    of(accountId2),
    nonDefaultBalances ? queryBalancesAccount(api, accountId2, balanceInstances) : isFunction(api.query.system?.account) ? querySystemAccount(api, accountId2) : isFunction(api.query.balances?.account) ? queryBalancesAccount(api, accountId2) : isFunction(api.query.balances?.["freeBalance"]) ? queryBalancesFree(api, accountId2) : queryNonceOnly(api, accountId2)
  ]) : of([api.registry.createType("AccountId"), [
    api.registry.createType("Index"),
    [[zeroBalance(api), zeroBalance(api), zeroBalance(api), zeroBalance(api)]]
  ]])), map((result) => calcBalances2(api, result))));
}

// node_modules/@polkadot/api-derive/balances/votingBalances.js
function votingBalances(instanceId, api) {
  return memo(instanceId, (addresses) => !addresses?.length ? of([]) : combineLatest(addresses.map((accountId2) => api.derive.balances.account(accountId2))));
}

// node_modules/@polkadot/api-derive/balances/index.js
var votingBalance = all2;

// node_modules/@polkadot/api-derive/bounties/index.js
var bounties_exports = {};
__export(bounties_exports, {
  bounties: () => bounties
});

// node_modules/@polkadot/api-derive/bounties/helpers/filterBountyProposals.js
function filterBountiesProposals(api, allProposals) {
  const bountyTxBase = api.tx.bounties ? api.tx.bounties : api.tx.treasury;
  const bountyProposalCalls = [bountyTxBase.approveBounty, bountyTxBase.closeBounty, bountyTxBase.proposeCurator, bountyTxBase.unassignCurator];
  return allProposals.filter((proposal6) => bountyProposalCalls.find((bountyCall) => proposal6.proposal && bountyCall.is(proposal6.proposal)));
}

// node_modules/@polkadot/api-derive/bounties/bounties.js
function parseResult([maybeBounties, maybeDescriptions, ids, bountyProposals]) {
  const bounties2 = [];
  maybeBounties.forEach((bounty, index) => {
    if (bounty.isSome) {
      bounties2.push({
        bounty: bounty.unwrap(),
        description: maybeDescriptions[index].unwrapOrDefault().toUtf8(),
        index: ids[index],
        proposals: bountyProposals.filter((bountyProposal) => bountyProposal.proposal && ids[index].eq(bountyProposal.proposal.args[0]))
      });
    }
  });
  return bounties2;
}
function bounties(instanceId, api) {
  const bountyBase = api.query.bounties || api.query.treasury;
  return memo(instanceId, () => bountyBase.bounties ? combineLatest([
    bountyBase.bountyCount(),
    api.query.council ? api.query.council.proposalCount() : of(0)
  ]).pipe(switchMap(() => combineLatest([
    bountyBase.bounties.keys(),
    api.derive.council ? api.derive.council.proposals() : of([])
  ])), switchMap(([keys2, proposals8]) => {
    const ids = keys2.map(({ args: [id] }) => id);
    return combineLatest([
      bountyBase.bounties.multi(ids),
      bountyBase.bountyDescriptions.multi(ids),
      of(ids),
      of(filterBountiesProposals(api, proposals8))
    ]);
  }), map(parseResult)) : of(parseResult([[], [], [], []])));
}

// node_modules/@polkadot/api-derive/chain/index.js
var chain_exports = {};
__export(chain_exports, {
  _getHeaderRange: () => _getHeaderRange,
  bestNumber: () => bestNumber,
  bestNumberFinalized: () => bestNumberFinalized,
  bestNumberLag: () => bestNumberLag,
  getBlock: () => getBlock,
  getBlockByNumber: () => getBlockByNumber,
  getHeader: () => getHeader,
  subscribeFinalizedBlocks: () => subscribeFinalizedBlocks,
  subscribeFinalizedHeads: () => subscribeFinalizedHeads,
  subscribeNewBlocks: () => subscribeNewBlocks,
  subscribeNewHeads: () => subscribeNewHeads
});

// node_modules/@polkadot/api-derive/chain/util.js
function createBlockNumberDerive(fn) {
  return (instanceId, api) => memo(instanceId, () => fn(api).pipe(map(unwrapBlockNumber)));
}
function getAuthorDetailsWithAt(header, queryAt) {
  const validators2 = queryAt.session?.validators ? queryAt.session.validators() : of(null);
  const { logs: [log] } = header.digest;
  const loggedAuthor = log && (log.isConsensus && log.asConsensus[0].isNimbus && log.asConsensus[1] || log.isPreRuntime && log.asPreRuntime[0].isNimbus && log.asPreRuntime[1]);
  if (loggedAuthor) {
    if (queryAt["authorMapping"]?.["mappingWithDeposit"]) {
      return combineLatest([
        of(header),
        validators2,
        queryAt["authorMapping"]["mappingWithDeposit"](loggedAuthor).pipe(map((o) => o.unwrapOr({ account: null }).account))
      ]);
    }
    if (queryAt["parachainStaking"]?.["selectedCandidates"] && queryAt.session?.nextKeys) {
      const loggedHex = loggedAuthor.toHex();
      return combineLatest([
        of(header),
        validators2,
        queryAt["parachainStaking"]["selectedCandidates"]().pipe(mergeMap((selectedCandidates) => combineLatest([
          of(selectedCandidates),
          queryAt.session.nextKeys.multi(selectedCandidates).pipe(map((nextKeys) => nextKeys.findIndex((o) => o.unwrapOrDefault().nimbus.toHex() === loggedHex)))
        ])), map(([selectedCandidates, index]) => index === -1 ? null : selectedCandidates[index]))
      ]);
    }
  }
  return combineLatest([
    of(header),
    validators2,
    of(null)
  ]);
}
function getAuthorDetails(api, header, blockHash) {
  return api.queryAt(header.parentHash.isEmpty ? blockHash || header.hash : header.parentHash).pipe(switchMap((queryAt) => getAuthorDetailsWithAt(header, queryAt)));
}

// node_modules/@polkadot/api-derive/chain/bestNumber.js
var bestNumber = createBlockNumberDerive((api) => api.rpc.chain.subscribeNewHeads());

// node_modules/@polkadot/api-derive/chain/bestNumberFinalized.js
var bestNumberFinalized = createBlockNumberDerive((api) => api.rpc.chain.subscribeFinalizedHeads());

// node_modules/@polkadot/api-derive/chain/bestNumberLag.js
function bestNumberLag(instanceId, api) {
  return memo(instanceId, () => combineLatest([
    api.derive.chain.bestNumber(),
    api.derive.chain.bestNumberFinalized()
  ]).pipe(map(([bestNumber2, bestNumberFinalized2]) => api.registry.createType("BlockNumber", bestNumber2.sub(bestNumberFinalized2)))));
}

// node_modules/@polkadot/api-derive/type/util.js
function extractAuthor(digest, sessionValidators) {
  const [citem] = digest.logs.filter((e) => e.isConsensus);
  const [pitem] = digest.logs.filter((e) => e.isPreRuntime);
  const [sitem] = digest.logs.filter((e) => e.isSeal);
  let accountId2;
  try {
    if (pitem) {
      const [engine, data] = pitem.asPreRuntime;
      accountId2 = engine.extractAuthor(data, sessionValidators);
    }
    if (!accountId2 && citem) {
      const [engine, data] = citem.asConsensus;
      accountId2 = engine.extractAuthor(data, sessionValidators);
    }
    if (!accountId2 && sitem) {
      const [engine, data] = sitem.asSeal;
      accountId2 = engine.extractAuthor(data, sessionValidators);
    }
  } catch {
  }
  return accountId2;
}

// node_modules/@polkadot/api-derive/type/HeaderExtended.js
function createHeaderExtended(registry, header, validators2, author) {
  const HeaderBase = registry.createClass("Header");
  class Implementation extends HeaderBase {
    __internal__author;
    constructor(registry2, header2, validators3, author2) {
      super(registry2, header2);
      this.__internal__author = author2 || extractAuthor(this.digest, validators3 || []);
      this.createdAtHash = header2?.createdAtHash;
    }
    /**
     * @description Convenience method, returns the author for the block
     */
    get author() {
      return this.__internal__author;
    }
  }
  return new Implementation(registry, header, validators2, author);
}

// node_modules/@polkadot/api-derive/type/SignedBlockExtended.js
function mapExtrinsics(extrinsics, records) {
  return extrinsics.map((extrinsic, index) => {
    let dispatchError;
    let dispatchInfo;
    const events2 = records.filter(({ phase }) => phase.isApplyExtrinsic && phase.asApplyExtrinsic.eq(index)).map(({ event }) => {
      if (event.section === "system") {
        if (event.method === "ExtrinsicSuccess") {
          dispatchInfo = event.data[0];
        } else if (event.method === "ExtrinsicFailed") {
          dispatchError = event.data[0];
          dispatchInfo = event.data[1];
        }
      }
      return event;
    });
    return { dispatchError, dispatchInfo, events: events2, extrinsic };
  });
}
function createSignedBlockExtended(registry, block, events2, validators2, author) {
  const SignedBlockBase = registry.createClass("SignedBlock");
  class Implementation extends SignedBlockBase {
    __internal__author;
    __internal__events;
    __internal__extrinsics;
    constructor(registry2, block2, events3, validators3, author2) {
      super(registry2, block2);
      this.__internal__author = author2 || extractAuthor(this.block.header.digest, validators3 || []);
      this.__internal__events = events3 || [];
      this.__internal__extrinsics = mapExtrinsics(this.block.extrinsics, this.__internal__events);
      this.createdAtHash = block2?.createdAtHash;
    }
    /**
     * @description Convenience method, returns the author for the block
     */
    get author() {
      return this.__internal__author;
    }
    /**
     * @description Convenience method, returns the events associated with the block
     */
    get events() {
      return this.__internal__events;
    }
    /**
     * @description Returns the extrinsics and their events, mapped
     */
    get extrinsics() {
      return this.__internal__extrinsics;
    }
  }
  return new Implementation(registry, block, events2, validators2, author);
}

// node_modules/@polkadot/api-derive/chain/getBlock.js
function getBlock(instanceId, api) {
  return memo(instanceId, (blockHash) => combineLatest([
    api.rpc.chain.getBlock(blockHash),
    api.queryAt(blockHash)
  ]).pipe(switchMap(([signedBlock, queryAt]) => combineLatest([
    of(signedBlock),
    queryAt.system.events(),
    getAuthorDetails(api, signedBlock.block.header, blockHash)
  ])), map(([signedBlock, events2, [, validators2, author]]) => createSignedBlockExtended(events2.registry, signedBlock, events2, validators2, author))));
}

// node_modules/@polkadot/api-derive/chain/getBlockByNumber.js
function getBlockByNumber(instanceId, api) {
  return memo(instanceId, (blockNumber) => api.rpc.chain.getBlockHash(blockNumber).pipe(switchMap((h) => api.derive.chain.getBlock(h))));
}

// node_modules/@polkadot/api-derive/chain/getHeader.js
function getHeader(instanceId, api) {
  return memo(instanceId, (blockHash) => api.rpc.chain.getHeader(blockHash).pipe(switchMap((header) => getAuthorDetails(api, header, blockHash)), map(([header, validators2, author]) => createHeaderExtended((validators2 || header).registry, header, validators2, author))));
}

// node_modules/@polkadot/api-derive/chain/subscribeFinalizedBlocks.js
function subscribeFinalizedBlocks(instanceId, api) {
  return memo(instanceId, () => api.derive.chain.subscribeFinalizedHeads().pipe(switchMap((header) => api.derive.chain.getBlock(header.createdAtHash || header.hash))));
}

// node_modules/@polkadot/api-derive/chain/subscribeFinalizedHeads.js
function _getHeaderRange(instanceId, api) {
  return memo(instanceId, (startHash, endHash, prev = []) => api.rpc.chain.getHeader(startHash).pipe(switchMap((header) => header.parentHash.eq(endHash) ? of([header, ...prev]) : api.derive.chain._getHeaderRange(header.parentHash, endHash, [header, ...prev]))));
}
function subscribeFinalizedHeads(instanceId, api) {
  return memo(instanceId, () => {
    let prevHash = null;
    return api.rpc.chain.subscribeFinalizedHeads().pipe(switchMap((header) => {
      const endHash = prevHash;
      const startHash = header.parentHash;
      prevHash = header.createdAtHash = header.hash;
      return endHash === null || startHash.eq(endHash) ? of(header) : api.derive.chain._getHeaderRange(startHash, endHash, [header]).pipe(switchMap((headers) => from(headers)));
    }));
  });
}

// node_modules/@polkadot/api-derive/chain/subscribeNewBlocks.js
function subscribeNewBlocks(instanceId, api) {
  return memo(instanceId, () => api.derive.chain.subscribeNewHeads().pipe(switchMap((header) => api.derive.chain.getBlock(header.createdAtHash || header.hash))));
}

// node_modules/@polkadot/api-derive/chain/subscribeNewHeads.js
function subscribeNewHeads(instanceId, api) {
  return memo(instanceId, () => api.rpc.chain.subscribeNewHeads().pipe(switchMap((header) => getAuthorDetails(api, header)), map(([header, validators2, author]) => {
    header.createdAtHash = header.hash;
    return createHeaderExtended(header.registry, header, validators2, author);
  })));
}

// node_modules/@polkadot/api-derive/contracts/index.js
var contracts_exports = {};
__export(contracts_exports, {
  fees: () => fees
});

// node_modules/@polkadot/api-derive/contracts/fees.js
function queryConstants(api) {
  return of([
    // deprecated
    api.consts.contracts["callBaseFee"] || api.registry.createType("Balance"),
    api.consts.contracts["contractFee"] || api.registry.createType("Balance"),
    api.consts.contracts["creationFee"] || api.registry.createType("Balance"),
    api.consts.contracts["transactionBaseFee"] || api.registry.createType("Balance"),
    api.consts.contracts["transactionByteFee"] || api.registry.createType("Balance"),
    api.consts.contracts["transferFee"] || api.registry.createType("Balance"),
    // current
    api.consts.contracts["rentByteFee"] || api.registry.createType("Balance"),
    api.consts.contracts["rentDepositOffset"] || api.registry.createType("Balance"),
    api.consts.contracts["surchargeReward"] || api.registry.createType("Balance"),
    api.consts.contracts["tombstoneDeposit"] || api.registry.createType("Balance")
  ]);
}
function fees(instanceId, api) {
  return memo(instanceId, () => {
    return queryConstants(api).pipe(map(([callBaseFee, contractFee, creationFee, transactionBaseFee, transactionByteFee, transferFee, rentByteFee, rentDepositOffset, surchargeReward, tombstoneDeposit]) => ({
      callBaseFee,
      contractFee,
      creationFee,
      rentByteFee,
      rentDepositOffset,
      surchargeReward,
      tombstoneDeposit,
      transactionBaseFee,
      transactionByteFee,
      transferFee
    })));
  });
}

// node_modules/@polkadot/api-derive/council/index.js
var council_exports = {};
__export(council_exports, {
  hasProposals: () => hasProposals3,
  members: () => members3,
  prime: () => prime3,
  proposal: () => proposal3,
  proposalCount: () => proposalCount3,
  proposalHashes: () => proposalHashes3,
  proposals: () => proposals3,
  votes: () => votes,
  votesOf: () => votesOf
});

// node_modules/@polkadot/api-derive/council/votes.js
function isVoter(value) {
  return !Array.isArray(value);
}
function retrieveStakeOf(elections) {
  return elections["stakeOf"].entries().pipe(map((entries) => entries.map(([{ args: [accountId2] }, stake]) => [accountId2, stake])));
}
function retrieveVoteOf(elections) {
  return elections["votesOf"].entries().pipe(map((entries) => entries.map(([{ args: [accountId2] }, votes2]) => [accountId2, votes2])));
}
function retrievePrev(api, elections) {
  return combineLatest([
    retrieveStakeOf(elections),
    retrieveVoteOf(elections)
  ]).pipe(map(([stakes, votes2]) => {
    const result = [];
    votes2.forEach(([voter, votes3]) => {
      result.push([voter, { stake: api.registry.createType("Balance"), votes: votes3 }]);
    });
    stakes.forEach(([staker, stake]) => {
      const entry = result.find(([voter]) => voter.eq(staker));
      if (entry) {
        entry[1].stake = stake;
      } else {
        result.push([staker, { stake, votes: [] }]);
      }
    });
    return result;
  }));
}
function retrieveCurrent(elections) {
  return elections.voting.entries().pipe(map((entries) => entries.map(([{ args: [accountId2] }, value]) => [
    accountId2,
    isVoter(value) ? { stake: value.stake, votes: value.votes } : { stake: value[0], votes: value[1] }
  ])));
}
function votes(instanceId, api) {
  const elections = api.query.elections || api.query["phragmenElection"] || api.query["electionsPhragmen"];
  return memo(instanceId, () => elections ? elections["stakeOf"] ? retrievePrev(api, elections) : retrieveCurrent(elections) : of([]));
}

// node_modules/@polkadot/api-derive/council/votesOf.js
function votesOf(instanceId, api) {
  return memo(instanceId, (accountId2) => api.derive.council.votes().pipe(map((votes2) => (votes2.find(([from2]) => from2.eq(accountId2)) || [null, { stake: api.registry.createType("Balance"), votes: [] }])[1])));
}

// node_modules/@polkadot/api-derive/council/index.js
var members3 = members("council");
var hasProposals3 = hasProposals("council");
var proposal3 = proposal("council");
var proposalCount3 = proposalCount("council");
var proposalHashes3 = proposalHashes("council");
var proposals3 = proposals("council");
var prime3 = prime("council");

// node_modules/@polkadot/api-derive/crowdloan/index.js
var crowdloan_exports = {};
__export(crowdloan_exports, {
  childKey: () => childKey,
  contributions: () => contributions,
  ownContributions: () => ownContributions
});

// node_modules/@polkadot/api-derive/crowdloan/childKey.js
function createChildKey(info6) {
  return u8aToHex(u8aConcat(":child_storage:default:", blake2AsU8a(u8aConcat("crowdloan", (info6.fundIndex || info6.trieIndex).toU8a()))));
}
function childKey(instanceId, api) {
  return memo(instanceId, (paraId) => api.query["crowdloan"]["funds"](paraId).pipe(map((optInfo) => optInfo.isSome ? createChildKey(optInfo.unwrap()) : null)));
}

// node_modules/@polkadot/api-derive/crowdloan/util.js
function extractContributed(paraId, events2) {
  const added = [];
  const removed = [];
  return events2.filter(({ event: { data: [, eventParaId], method, section: section2 } }) => section2 === "crowdloan" && ["Contributed", "Withdrew"].includes(method) && eventParaId.eq(paraId)).reduce((result, { event: { data: [accountId2], method } }) => {
    if (method === "Contributed") {
      result.added.push(accountId2.toHex());
    } else {
      result.removed.push(accountId2.toHex());
    }
    return result;
  }, { added, blockHash: events2.createdAtHash?.toHex() || "-", removed });
}

// node_modules/@polkadot/api-derive/crowdloan/contributions.js
var PAGE_SIZE_K = 1e3;
function _getUpdates(api, paraId) {
  let added = [];
  let removed = [];
  return api.query.system.events().pipe(switchMap((events2) => {
    const changes = extractContributed(paraId, events2);
    if (changes.added.length || changes.removed.length) {
      added = added.concat(...changes.added);
      removed = removed.concat(...changes.removed);
      return of({ added, addedDelta: changes.added, blockHash: events2.createdAtHash?.toHex() || "-", removed, removedDelta: changes.removed });
    }
    return EMPTY;
  }), startWith({ added, addedDelta: [], blockHash: "-", removed, removedDelta: [] }));
}
function _eventTriggerAll(api, paraId) {
  return api.query.system.events().pipe(switchMap((events2) => {
    const items = events2.filter(({ event: { data: [eventParaId], method, section: section2 } }) => section2 === "crowdloan" && ["AllRefunded", "Dissolved", "PartiallyRefunded"].includes(method) && eventParaId.eq(paraId));
    return items.length ? of(events2.createdAtHash?.toHex() || "-") : EMPTY;
  }), startWith("-"));
}
function _getKeysPaged(api, childKey2) {
  const subject = new BehaviorSubject(void 0);
  return subject.pipe(
    switchMap((startKey) => api.rpc.childstate.getKeysPaged(childKey2, "0x", PAGE_SIZE_K, startKey)),
    tap((keys2) => {
      nextTick(() => {
        keys2.length === PAGE_SIZE_K ? subject.next(keys2[PAGE_SIZE_K - 1].toHex()) : subject.complete();
      });
    }),
    toArray(),
    // toArray since we want to startSubject to be completed
    map((keyArr) => arrayFlatten(keyArr))
  );
}
function _getAll(api, paraId, childKey2) {
  return _eventTriggerAll(api, paraId).pipe(switchMap(() => isFunction(api.rpc.childstate.getKeysPaged) ? _getKeysPaged(api, childKey2) : api.rpc.childstate.getKeys(childKey2, "0x")), map((keys2) => keys2.map((k) => k.toHex())));
}
function _contributions(api, paraId, childKey2) {
  return combineLatest([
    _getAll(api, paraId, childKey2),
    _getUpdates(api, paraId)
  ]).pipe(map(([keys2, { added, blockHash, removed }]) => {
    const contributorsMap = {};
    keys2.forEach((k) => {
      contributorsMap[k] = true;
    });
    added.forEach((k) => {
      contributorsMap[k] = true;
    });
    removed.forEach((k) => {
      delete contributorsMap[k];
    });
    return {
      blockHash,
      contributorsHex: Object.keys(contributorsMap)
    };
  }));
}
function contributions(instanceId, api) {
  return memo(instanceId, (paraId) => api.derive.crowdloan.childKey(paraId).pipe(switchMap((childKey2) => childKey2 ? _contributions(api, paraId, childKey2) : of({ blockHash: "-", contributorsHex: [] }))));
}

// node_modules/@polkadot/api-derive/crowdloan/ownContributions.js
function _getValues(api, childKey2, keys2) {
  return combineLatest(keys2.map((k) => api.rpc.childstate.getStorage(childKey2, k))).pipe(map((values) => values.map((v) => api.registry.createType("Option<StorageData>", v)).map((o) => o.isSome ? api.registry.createType("Balance", o.unwrap()) : api.registry.createType("Balance")).reduce((all3, b, index) => objectSpread(all3, { [keys2[index]]: b }), {})));
}
function _watchOwnChanges(api, paraId, childkey, keys2) {
  return api.query.system.events().pipe(switchMap((events2) => {
    const changes = extractContributed(paraId, events2);
    const filtered = keys2.filter((k) => changes.added.includes(k) || changes.removed.includes(k));
    return filtered.length ? _getValues(api, childkey, filtered) : EMPTY;
  }), startWith({}));
}
function _contributions2(api, paraId, childKey2, keys2) {
  return combineLatest([
    _getValues(api, childKey2, keys2),
    _watchOwnChanges(api, paraId, childKey2, keys2)
  ]).pipe(map(([all3, latest2]) => objectSpread({}, all3, latest2)));
}
function ownContributions(instanceId, api) {
  return memo(instanceId, (paraId, keys2) => api.derive.crowdloan.childKey(paraId).pipe(switchMap((childKey2) => childKey2 && keys2.length ? _contributions2(api, paraId, childKey2, keys2) : of({}))));
}

// node_modules/@polkadot/api-derive/democracy/index.js
var democracy_exports = {};
__export(democracy_exports, {
  _referendumInfo: () => _referendumInfo,
  _referendumVotes: () => _referendumVotes,
  _referendumsVotes: () => _referendumsVotes,
  dispatchQueue: () => dispatchQueue,
  locks: () => locks,
  nextExternal: () => nextExternal,
  preimage: () => preimage,
  preimages: () => preimages,
  proposals: () => proposals4,
  referendumIds: () => referendumIds,
  referendums: () => referendums,
  referendumsActive: () => referendumsActive,
  referendumsFinished: () => referendumsFinished,
  referendumsInfo: () => referendumsInfo,
  sqrtElectorate: () => sqrtElectorate
});

// node_modules/@polkadot/api-derive/democracy/util.js
function isOldInfo(info6) {
  return !!info6.proposalHash;
}
function isCurrentStatus(status) {
  return !!status.tally;
}
function compareRationals(n1, d1, n2, d2) {
  while (true) {
    const q1 = n1.div(d1);
    const q2 = n2.div(d2);
    if (q1.lt(q2)) {
      return true;
    } else if (q2.lt(q1)) {
      return false;
    }
    const r1 = n1.mod(d1);
    const r2 = n2.mod(d2);
    if (r2.isZero()) {
      return false;
    } else if (r1.isZero()) {
      return true;
    }
    n1 = d2;
    n2 = d1;
    d1 = r2;
    d2 = r1;
  }
}
function calcPassingOther(threshold, sqrtElectorate2, { votedAye, votedNay, votedTotal }) {
  const sqrtVoters = bnSqrt(votedTotal);
  return sqrtVoters.isZero() ? false : threshold.isSuperMajorityApprove ? compareRationals(votedNay, sqrtVoters, votedAye, sqrtElectorate2) : compareRationals(votedNay, sqrtElectorate2, votedAye, sqrtVoters);
}
function calcPassing(threshold, sqrtElectorate2, state) {
  return threshold.isSimpleMajority ? state.votedAye.gt(state.votedNay) : calcPassingOther(threshold, sqrtElectorate2, state);
}
function calcVotesPrev(votesFor) {
  return votesFor.reduce((state, derived) => {
    const { balance, vote } = derived;
    const isDefault = vote.conviction.index === 0;
    const counted = balance.muln(isDefault ? 1 : vote.conviction.index).divn(isDefault ? 10 : 1);
    if (vote.isAye) {
      state.allAye.push(derived);
      state.voteCountAye++;
      state.votedAye.iadd(counted);
    } else {
      state.allNay.push(derived);
      state.voteCountNay++;
      state.votedNay.iadd(counted);
    }
    state.voteCount++;
    state.votedTotal.iadd(counted);
    return state;
  }, { allAye: [], allNay: [], voteCount: 0, voteCountAye: 0, voteCountNay: 0, votedAye: new import_bn.default(0), votedNay: new import_bn.default(0), votedTotal: new import_bn.default(0) });
}
function calcVotesCurrent(tally, votes2) {
  const allAye = [];
  const allNay = [];
  votes2.forEach((derived) => {
    if (derived.vote.isAye) {
      allAye.push(derived);
    } else {
      allNay.push(derived);
    }
  });
  return {
    allAye,
    allNay,
    voteCount: allAye.length + allNay.length,
    voteCountAye: allAye.length,
    voteCountNay: allNay.length,
    votedAye: tally.ayes,
    votedNay: tally.nays,
    votedTotal: tally.turnout
  };
}
function calcVotes(sqrtElectorate2, referendum, votes2) {
  const state = isCurrentStatus(referendum.status) ? calcVotesCurrent(referendum.status.tally, votes2) : calcVotesPrev(votes2);
  return objectSpread({}, state, {
    isPassing: calcPassing(referendum.status.threshold, sqrtElectorate2, state),
    votes: votes2
  });
}
function getStatus(info6) {
  if (info6.isNone) {
    return null;
  }
  const unwrapped = info6.unwrap();
  return isOldInfo(unwrapped) ? unwrapped : unwrapped.isOngoing ? unwrapped.asOngoing : null;
}
function getImageHashBounded(hash) {
  return hash.isLegacy ? hash.asLegacy.hash_.toHex() : hash.isLookup ? hash.asLookup.hash_.toHex() : hash.isInline ? hash.asInline.hash.toHex() : isString(hash) ? isHex(hash) ? hash : stringToHex(hash) : isU8a(hash) ? u8aToHex(hash) : hash.toHex();
}
function getImageHash(status) {
  return getImageHashBounded(status.proposal || status.proposalHash);
}

// node_modules/@polkadot/api-derive/democracy/dispatchQueue.js
var DEMOCRACY_ID = stringToHex("democrac");
function isMaybeHashedOrBounded(call) {
  return call instanceof Enum;
}
function isBounded(call) {
  return call.isInline || call.isLegacy || call.isLookup;
}
function queryQueue(api) {
  return api.query.democracy["dispatchQueue"]().pipe(switchMap((dispatches) => combineLatest([
    of(dispatches),
    api.derive.democracy.preimages(dispatches.map(([, hash]) => hash))
  ])), map(([dispatches, images]) => dispatches.map(([at, imageHash, index], dispatchIndex) => ({
    at,
    image: images[dispatchIndex],
    imageHash: getImageHashBounded(imageHash),
    index
  }))));
}
function schedulerEntries(api) {
  return api.derive.democracy.referendumsFinished().pipe(switchMap(() => api.query.scheduler.agenda.keys()), switchMap((keys2) => {
    const blockNumbers = keys2.map(({ args: [blockNumber] }) => blockNumber);
    return blockNumbers.length ? combineLatest([
      of(blockNumbers),
      // this should simply be api.query.scheduler.agenda.multi,
      // however we have had cases on Darwinia where the indices have moved around after an
      // upgrade, which results in invalid on-chain data
      api.query.scheduler.agenda.multi(blockNumbers).pipe(catchError(() => of(blockNumbers.map(() => []))))
    ]) : of([[], []]);
  }));
}
function queryScheduler(api) {
  return schedulerEntries(api).pipe(switchMap(([blockNumbers, agendas]) => {
    const result = [];
    blockNumbers.forEach((at, index) => {
      (agendas[index] || []).filter((o) => o.isSome).forEach((o) => {
        const scheduled = o.unwrap();
        if (scheduled.maybeId.isSome) {
          const id = scheduled.maybeId.unwrap().toHex();
          if (id.startsWith(DEMOCRACY_ID)) {
            const imageHash = isMaybeHashedOrBounded(scheduled.call) ? isBounded(scheduled.call) ? getImageHashBounded(scheduled.call) : scheduled.call.isHash ? scheduled.call.asHash.toHex() : scheduled.call.asValue.args[0].toHex() : scheduled.call.args[0].toHex();
            result.push({ at, imageHash, index: api.registry.createType("(u64, ReferendumIndex)", id)[1] });
          }
        }
      });
    });
    return combineLatest([
      of(result),
      result.length ? api.derive.democracy.preimages(result.map(({ imageHash }) => imageHash)) : of([])
    ]);
  }), map(([infos, images]) => infos.map((info6, index) => objectSpread({ image: images[index] }, info6))));
}
function dispatchQueue(instanceId, api) {
  return memo(instanceId, () => isFunction(api.query.scheduler?.agenda) ? queryScheduler(api) : api.query.democracy["dispatchQueue"] ? queryQueue(api) : of([]));
}

// node_modules/@polkadot/api-derive/democracy/locks.js
var LOCKUPS = [0, 1, 2, 4, 8, 16, 32];
function parseEnd(api, vote, { approved, end }) {
  return [
    end,
    approved.isTrue && vote.isAye || approved.isFalse && vote.isNay ? end.add((api.consts.democracy.voteLockingPeriod || api.consts.democracy.enactmentPeriod).muln(LOCKUPS[vote.conviction.index])) : BN_ZERO
  ];
}
function parseLock(api, [referendumId, accountVote], referendum) {
  const { balance, vote } = accountVote.asStandard;
  const [referendumEnd, unlockAt] = referendum.isFinished ? parseEnd(api, vote, referendum.asFinished) : [BN_ZERO, BN_ZERO];
  return { balance, isDelegated: false, isFinished: referendum.isFinished, referendumEnd, referendumId, unlockAt, vote };
}
function delegateLocks(api, { balance, conviction, target }) {
  return api.derive.democracy.locks(target).pipe(map((available) => available.map(({ isFinished, referendumEnd, referendumId, unlockAt, vote }) => ({
    balance,
    isDelegated: true,
    isFinished,
    referendumEnd,
    referendumId,
    unlockAt: unlockAt.isZero() ? unlockAt : referendumEnd.add((api.consts.democracy.voteLockingPeriod || api.consts.democracy.enactmentPeriod).muln(LOCKUPS[conviction.index])),
    vote: api.registry.createType("Vote", { aye: vote.isAye, conviction })
  }))));
}
function directLocks(api, { votes: votes2 }) {
  if (!votes2.length) {
    return of([]);
  }
  return api.query.democracy.referendumInfoOf.multi(votes2.map(([referendumId]) => referendumId)).pipe(map((referendums2) => votes2.map((vote, index) => [vote, referendums2[index].unwrapOr(null)]).filter((item) => !!item[1] && isUndefined(item[1].end) && item[0][1].isStandard).map(([directVote, referendum]) => parseLock(api, directVote, referendum))));
}
function locks(instanceId, api) {
  return memo(instanceId, (accountId2) => api.query.democracy.votingOf ? api.query.democracy.votingOf(accountId2).pipe(switchMap((voting) => voting.isDirect ? directLocks(api, voting.asDirect) : voting.isDelegating ? delegateLocks(api, voting.asDelegating) : of([]))) : of([]));
}

// node_modules/@polkadot/api-derive/democracy/nextExternal.js
function withImage(api, nextOpt) {
  if (nextOpt.isNone) {
    return of(null);
  }
  const [hash, threshold] = nextOpt.unwrap();
  return api.derive.democracy.preimage(hash).pipe(map((image) => ({
    image,
    imageHash: getImageHashBounded(hash),
    threshold
  })));
}
function nextExternal(instanceId, api) {
  return memo(instanceId, () => api.query.democracy?.nextExternal ? api.query.democracy.nextExternal().pipe(switchMap((nextOpt) => withImage(api, nextOpt))) : of(null));
}

// node_modules/@polkadot/api-derive/democracy/preimages.js
function getUnrequestedTicket(status) {
  return status.ticket || status.deposit;
}
function getRequestedTicket(status) {
  return (status.maybeTicket || status.deposit).unwrapOrDefault();
}
function isDemocracyPreimage(api, imageOpt) {
  return !!imageOpt && !api.query.democracy["dispatchQueue"];
}
function constructProposal(api, [bytes, proposer, balance, at]) {
  let proposal6;
  try {
    proposal6 = api.registry.createType("Call", bytes.toU8a(true));
  } catch (error) {
    console.error(error);
  }
  return { at, balance, proposal: proposal6, proposer };
}
function parseDemocracy(api, imageOpt) {
  if (imageOpt.isNone) {
    return;
  }
  if (isDemocracyPreimage(api, imageOpt)) {
    const status = imageOpt.unwrap();
    if (status.isMissing) {
      return;
    }
    const { data, deposit, provider, since } = status.asAvailable;
    return constructProposal(api, [data, provider, deposit, since]);
  }
  return constructProposal(api, imageOpt.unwrap());
}
function parseImage(api, [proposalHash, status, bytes]) {
  if (!status) {
    return void 0;
  }
  const [proposer, balance] = status.isUnrequested ? getUnrequestedTicket(status.asUnrequested) : getRequestedTicket(status.asRequested);
  let proposal6;
  if (bytes) {
    try {
      proposal6 = api.registry.createType("Call", bytes.toU8a(true));
    } catch (error) {
      console.error(error);
    }
  }
  return { at: BN_ZERO, balance, proposal: proposal6, proposalHash, proposer };
}
function getDemocracyImages(api, bounded) {
  const hashes = bounded.map((b) => getImageHashBounded(b));
  return api.query.democracy["preimages"].multi(hashes).pipe(map((images) => images.map((imageOpt) => parseDemocracy(api, imageOpt))));
}
function getImages(api, bounded) {
  const hashes = bounded.map((b) => getImageHashBounded(b));
  const bytesType = api.registry.lookup.getTypeDef(api.query.preimage.preimageFor.creator.meta.type.asMap.key).type;
  return api.query.preimage.statusFor.multi(hashes).pipe(switchMap((optStatus) => {
    const statuses = optStatus.map((o) => o.unwrapOr(null));
    const keys2 = statuses.map((s, i) => s ? bytesType === "H256" ? hashes[i] : s.isRequested ? [hashes[i], s.asRequested.len.unwrapOr(0)] : [hashes[i], s.asUnrequested.len] : null).filter((p) => !!p);
    return api.query.preimage.preimageFor.multi(keys2).pipe(map((optBytes) => {
      let ptr = -1;
      return statuses.map((s, i) => s ? [hashes[i], s, optBytes[++ptr].unwrapOr(null)] : [hashes[i], null, null]).map((v) => parseImage(api, v));
    }));
  }));
}
function preimages(instanceId, api) {
  return memo(instanceId, (hashes) => hashes.length ? isFunction(api.query.democracy["preimages"]) ? getDemocracyImages(api, hashes) : isFunction(api.query.preimage.preimageFor) ? getImages(api, hashes) : of([]) : of([]));
}
var preimage = firstMemo((api, hash) => api.derive.democracy.preimages([hash]));

// node_modules/@polkadot/api-derive/democracy/proposals.js
function isNewDepositors(depositors) {
  return isFunction(depositors[1].mul);
}
function parse2([proposals8, images, optDepositors]) {
  return proposals8.filter(([, , proposer], index) => !!optDepositors[index]?.isSome && !proposer.isEmpty).map(([index, hash, proposer], proposalIndex) => {
    const depositors = optDepositors[proposalIndex].unwrap();
    return objectSpread({
      image: images[proposalIndex],
      imageHash: getImageHashBounded(hash),
      index,
      proposer
    }, isNewDepositors(depositors) ? { balance: depositors[1], seconds: depositors[0] } : { balance: depositors[0], seconds: depositors[1] });
  });
}
function proposals4(instanceId, api) {
  return memo(instanceId, () => isFunction(api.query.democracy?.publicProps) ? api.query.democracy.publicProps().pipe(switchMap((proposals8) => proposals8.length ? combineLatest([
    of(proposals8),
    api.derive.democracy.preimages(proposals8.map(([, hash]) => hash)),
    api.query.democracy.depositOf.multi(proposals8.map(([index]) => index))
  ]) : of([[], [], []])), map(parse2)) : of([]));
}

// node_modules/@polkadot/api-derive/democracy/referendumIds.js
function referendumIds(instanceId, api) {
  return memo(instanceId, () => api.query.democracy?.lowestUnbaked ? api.queryMulti([
    api.query.democracy.lowestUnbaked,
    api.query.democracy.referendumCount
  ]).pipe(map(([first2, total]) => total.gt(first2) ? [...Array(total.sub(first2).toNumber())].map((_, i) => first2.addn(i)) : [])) : of([]));
}

// node_modules/@polkadot/api-derive/democracy/referendums.js
function referendums(instanceId, api) {
  return memo(instanceId, () => api.derive.democracy.referendumsActive().pipe(switchMap((referendums2) => referendums2.length ? combineLatest([
    of(referendums2),
    api.derive.democracy._referendumsVotes(referendums2)
  ]) : of([[], []])), map(([referendums2, votes2]) => referendums2.map((referendum, index) => objectSpread({}, referendum, votes2[index])))));
}

// node_modules/@polkadot/api-derive/democracy/referendumsActive.js
function referendumsActive(instanceId, api) {
  return memo(instanceId, () => api.derive.democracy.referendumIds().pipe(switchMap((ids) => ids.length ? api.derive.democracy.referendumsInfo(ids) : of([]))));
}

// node_modules/@polkadot/api-derive/democracy/referendumsFinished.js
function referendumsFinished(instanceId, api) {
  return memo(instanceId, () => api.derive.democracy.referendumIds().pipe(switchMap((ids) => api.query.democracy.referendumInfoOf.multi(ids)), map((infos) => infos.map((o) => o.unwrapOr(null)).filter((info6) => !!info6 && info6.isFinished).map((info6) => info6.asFinished))));
}

// node_modules/@polkadot/api-derive/democracy/referendumsInfo.js
function votesPrev(api, referendumId) {
  return api.query.democracy["votersFor"](referendumId).pipe(switchMap((votersFor) => combineLatest([
    of(votersFor),
    votersFor.length ? api.query.democracy["voteOf"].multi(votersFor.map((accountId2) => [referendumId, accountId2])) : of([]),
    api.derive.balances.votingBalances(votersFor)
  ])), map(([votersFor, votes2, balances]) => votersFor.map((accountId2, index) => ({
    accountId: accountId2,
    balance: balances[index].votingBalance || api.registry.createType("Balance"),
    isDelegating: false,
    vote: votes2[index] || api.registry.createType("Vote")
  }))));
}
function extractVotes(mapped, referendumId) {
  return mapped.filter(([, voting]) => voting.isDirect).map(([accountId2, voting]) => [
    accountId2,
    voting.asDirect.votes.filter(([idx]) => idx.eq(referendumId))
  ]).filter(([, directVotes]) => !!directVotes.length).reduce((result, [accountId2, votes2]) => (
    // FIXME We are ignoring split votes
    votes2.reduce((result2, [, vote]) => {
      if (vote.isStandard) {
        result2.push(objectSpread({
          accountId: accountId2,
          isDelegating: false
        }, vote.asStandard));
      }
      return result2;
    }, result)
  ), []);
}
function votesCurr(api, referendumId) {
  return api.query.democracy.votingOf.entries().pipe(map((allVoting) => {
    const mapped = allVoting.map(([{ args: [accountId2] }, voting]) => [accountId2, voting]);
    const votes2 = extractVotes(mapped, referendumId);
    const delegations = mapped.filter(([, voting]) => voting.isDelegating).map(([accountId2, voting]) => [accountId2, voting.asDelegating]);
    delegations.forEach(([accountId2, { balance, conviction, target }]) => {
      const toDelegator = delegations.find(([accountId3]) => accountId3.eq(target));
      const to = votes2.find(({ accountId: accountId3 }) => accountId3.eq(toDelegator ? toDelegator[0] : target));
      if (to) {
        votes2.push({
          accountId: accountId2,
          balance,
          isDelegating: true,
          vote: api.registry.createType("Vote", { aye: to.vote.isAye, conviction })
        });
      }
    });
    return votes2;
  }));
}
function _referendumVotes(instanceId, api) {
  return memo(instanceId, (referendum) => combineLatest([
    api.derive.democracy.sqrtElectorate(),
    isFunction(api.query.democracy.votingOf) ? votesCurr(api, referendum.index) : votesPrev(api, referendum.index)
  ]).pipe(map(([sqrtElectorate2, votes2]) => calcVotes(sqrtElectorate2, referendum, votes2))));
}
function _referendumsVotes(instanceId, api) {
  return memo(instanceId, (referendums2) => referendums2.length ? combineLatest(referendums2.map((referendum) => api.derive.democracy._referendumVotes(referendum))) : of([]));
}
function _referendumInfo(instanceId, api) {
  return memo(instanceId, (index, info6) => {
    const status = getStatus(info6);
    return status ? api.derive.democracy.preimage(status.proposal || status.proposalHash).pipe(map((image) => ({
      image,
      imageHash: getImageHash(status),
      index: api.registry.createType("ReferendumIndex", index),
      status
    }))) : of(null);
  });
}
function referendumsInfo(instanceId, api) {
  return memo(instanceId, (ids) => ids.length ? api.query.democracy.referendumInfoOf.multi(ids).pipe(switchMap((infos) => combineLatest(ids.map((id, index) => api.derive.democracy._referendumInfo(id, infos[index])))), map((infos) => infos.filter((r) => !!r))) : of([]));
}

// node_modules/@polkadot/api-derive/democracy/sqrtElectorate.js
function sqrtElectorate(instanceId, api) {
  return memo(instanceId, () => api.query.balances.totalIssuance().pipe(map(bnSqrt)));
}

// node_modules/@polkadot/api-derive/elections/index.js
var elections_exports = {};
__export(elections_exports, {
  info: () => info2
});

// node_modules/@polkadot/api-derive/elections/info.js
function isSeatHolder(value) {
  return !Array.isArray(value);
}
function isCandidateTuple(value) {
  return Array.isArray(value);
}
function getAccountTuple(value) {
  return isSeatHolder(value) ? [value.who, value.stake] : value;
}
function getCandidate(value) {
  return isCandidateTuple(value) ? value[0] : value;
}
function sortAccounts([, balanceA], [, balanceB]) {
  return balanceB.cmp(balanceA);
}
function getConstants(api, elections) {
  return elections ? {
    candidacyBond: api.consts[elections].candidacyBond,
    desiredRunnersUp: api.consts[elections].desiredRunnersUp,
    desiredSeats: api.consts[elections].desiredMembers,
    termDuration: api.consts[elections].termDuration,
    votingBond: api.consts[elections]["votingBond"],
    votingBondBase: api.consts[elections].votingBondBase,
    votingBondFactor: api.consts[elections].votingBondFactor
  } : {};
}
function getModules(api) {
  const [council] = api.registry.getModuleInstances(api.runtimeVersion.specName, "council") || ["council"];
  const elections = api.query["phragmenElection"] ? "phragmenElection" : api.query["electionsPhragmen"] ? "electionsPhragmen" : api.query.elections ? "elections" : null;
  return [council, elections];
}
function queryAll(api, council, elections) {
  return api.queryMulti([
    api.query[council].members,
    api.query[elections].candidates,
    api.query[elections].members,
    api.query[elections].runnersUp
  ]);
}
function queryCouncil(api, council) {
  return combineLatest([
    api.query[council].members(),
    of([]),
    of([]),
    of([])
  ]);
}
function info2(instanceId, api) {
  return memo(instanceId, () => {
    const [council, elections] = getModules(api);
    return (elections ? queryAll(api, council, elections) : queryCouncil(api, council)).pipe(map(([councilMembers, candidates2, members7, runnersUp]) => objectSpread({}, getConstants(api, elections), {
      candidateCount: api.registry.createType("u32", candidates2.length),
      candidates: candidates2.map(getCandidate),
      members: members7.length ? members7.map(getAccountTuple).sort(sortAccounts) : councilMembers.map((a) => [a, api.registry.createType("Balance")]),
      runnersUp: runnersUp.map(getAccountTuple).sort(sortAccounts)
    })));
  });
}

// node_modules/@polkadot/api-derive/imOnline/index.js
var imOnline_exports = {};
__export(imOnline_exports, {
  receivedHeartbeats: () => receivedHeartbeats
});

// node_modules/@polkadot/api-derive/imOnline/receivedHeartbeats.js
function mapResult([result, validators2, heartbeats, numBlocks]) {
  validators2.forEach((validator, index) => {
    const validatorId = validator.toString();
    const blockCount = numBlocks[index];
    const hasMessage = !heartbeats[index].isEmpty;
    const prev = result[validatorId];
    if (!prev || prev.hasMessage !== hasMessage || !prev.blockCount.eq(blockCount)) {
      result[validatorId] = {
        blockCount,
        hasMessage,
        isOnline: hasMessage || blockCount.gt(BN_ZERO)
      };
    }
  });
  return result;
}
function receivedHeartbeats(instanceId, api) {
  return memo(instanceId, () => api.query.imOnline?.receivedHeartbeats ? api.derive.staking.overview().pipe(switchMap(({ currentIndex, validators: validators2 }) => combineLatest([
    of({}),
    of(validators2),
    api.query.imOnline.receivedHeartbeats.multi(validators2.map((_address, index) => [currentIndex, index])),
    api.query.imOnline.authoredBlocks.multi(validators2.map((address) => [currentIndex, address]))
  ])), map(mapResult)) : of({}));
}

// node_modules/@polkadot/api-derive/membership/index.js
var membership_exports = {};
__export(membership_exports, {
  hasProposals: () => hasProposals4,
  members: () => members4,
  prime: () => prime4,
  proposal: () => proposal4,
  proposalCount: () => proposalCount4,
  proposalHashes: () => proposalHashes4,
  proposals: () => proposals5
});
var members4 = members("membership");
var hasProposals4 = hasProposals("membership");
var proposal4 = proposal("membership");
var proposalCount4 = proposalCount("membership");
var proposalHashes4 = proposalHashes("membership");
var proposals5 = proposals("membership");
var prime4 = prime("membership");

// node_modules/@polkadot/api-derive/parachains/index.js
var parachains_exports = {};
__export(parachains_exports, {
  info: () => info3,
  overview: () => overview
});

// node_modules/@polkadot/api-derive/parachains/util.js
function didUpdateToBool(didUpdate, id) {
  return didUpdate.isSome ? didUpdate.unwrap().some((paraId) => paraId.eq(id)) : false;
}

// node_modules/@polkadot/api-derive/parachains/info.js
function parseActive(id, active) {
  const found = active.find(([paraId]) => paraId === id);
  if (found && found[1].isSome) {
    const [collatorId, retriable] = found[1].unwrap();
    return objectSpread({ collatorId }, retriable.isWithRetries ? {
      isRetriable: true,
      retries: retriable.asWithRetries.toNumber()
    } : {
      isRetriable: false,
      retries: 0
    });
  }
  return null;
}
function parseCollators(id, collatorQueue) {
  return collatorQueue.map((queue) => {
    const found = queue.find(([paraId]) => paraId === id);
    return found ? found[1] : null;
  });
}
function parse3(id, [active, retryQueue, selectedThreads, didUpdate, info6, pendingSwap, heads, relayDispatchQueue]) {
  if (info6.isNone) {
    return null;
  }
  return {
    active: parseActive(id, active),
    didUpdate: didUpdateToBool(didUpdate, id),
    heads,
    id,
    info: objectSpread({ id }, info6.unwrap()),
    pendingSwapId: pendingSwap.unwrapOr(null),
    relayDispatchQueue,
    retryCollators: parseCollators(id, retryQueue),
    selectedCollators: parseCollators(id, selectedThreads)
  };
}
function info3(instanceId, api) {
  return memo(instanceId, (id) => api.query["registrar"] && api.query["parachains"] ? api.queryMulti([
    api.query["registrar"]["active"],
    api.query["registrar"]["retryQueue"],
    api.query["registrar"]["selectedThreads"],
    api.query["parachains"]["didUpdate"],
    [api.query["registrar"]["paras"], id],
    [api.query["registrar"]["pendingSwap"], id],
    [api.query["parachains"]["heads"], id],
    [api.query["parachains"]["relayDispatchQueue"], id]
  ]).pipe(map((result) => parse3(api.registry.createType("ParaId", id), result))) : of(null));
}

// node_modules/@polkadot/api-derive/parachains/overview.js
function parse4([ids, didUpdate, relayDispatchQueueSizes, infos, pendingSwaps]) {
  return ids.map((id, index) => ({
    didUpdate: didUpdateToBool(didUpdate, id),
    id,
    info: objectSpread({ id }, infos[index].unwrapOr(null)),
    pendingSwapId: pendingSwaps[index].unwrapOr(null),
    relayDispatchQueueSize: relayDispatchQueueSizes[index][0].toNumber()
  }));
}
function overview(instanceId, api) {
  return memo(instanceId, () => api.query["registrar"]?.["parachains"] && api.query["parachains"] ? api.query["registrar"]["parachains"]().pipe(switchMap((paraIds) => combineLatest([
    of(paraIds),
    api.query["parachains"]["didUpdate"](),
    api.query["parachains"]["relayDispatchQueueSize"].multi(paraIds),
    api.query["registrar"]["paras"].multi(paraIds),
    api.query["registrar"]["pendingSwap"].multi(paraIds)
  ])), map(parse4)) : of([]));
}

// node_modules/@polkadot/api-derive/session/index.js
var session_exports = {};
__export(session_exports, {
  eraLength: () => eraLength,
  eraProgress: () => eraProgress,
  indexes: () => indexes2,
  info: () => info4,
  progress: () => progress,
  sessionProgress: () => sessionProgress
});

// node_modules/@polkadot/api-derive/session/indexes.js
function parse5([currentIndex, activeEra, activeEraStart, currentEra, validatorCount]) {
  return {
    activeEra,
    activeEraStart,
    currentEra,
    currentIndex,
    validatorCount
  };
}
function queryStaking(api) {
  return api.queryMulti([
    api.query.session.currentIndex,
    api.query.staking.activeEra,
    api.query.staking.currentEra,
    api.query.staking.validatorCount
  ]).pipe(map(([currentIndex, activeOpt, currentEra, validatorCount]) => {
    const { index, start } = activeOpt.unwrapOrDefault();
    return parse5([
      currentIndex,
      index,
      start,
      currentEra.unwrapOrDefault(),
      validatorCount
    ]);
  }));
}
function querySession(api) {
  return api.query.session.currentIndex().pipe(map((currentIndex) => parse5([
    currentIndex,
    api.registry.createType("EraIndex"),
    api.registry.createType("Option<Moment>"),
    api.registry.createType("EraIndex"),
    api.registry.createType("u32")
  ])));
}
function empty(api) {
  return of(parse5([
    api.registry.createType("SessionIndex", 1),
    api.registry.createType("EraIndex"),
    api.registry.createType("Option<Moment>"),
    api.registry.createType("EraIndex"),
    api.registry.createType("u32")
  ]));
}
function indexes2(instanceId, api) {
  return memo(instanceId, () => api.query.session ? api.query.staking ? queryStaking(api) : querySession(api) : empty(api));
}

// node_modules/@polkadot/api-derive/session/info.js
function info4(instanceId, api) {
  return memo(instanceId, () => api.derive.session.indexes().pipe(map((indexes3) => {
    const sessionLength = api.consts?.babe?.epochDuration || api.registry.createType("u64", 1);
    const sessionsPerEra = api.consts?.staking?.sessionsPerEra || api.registry.createType("SessionIndex", 1);
    return objectSpread({
      eraLength: api.registry.createType("BlockNumber", sessionsPerEra.mul(sessionLength)),
      isEpoch: !!api.query.babe,
      sessionLength,
      sessionsPerEra
    }, indexes3);
  })));
}

// node_modules/@polkadot/api-derive/session/progress.js
function withProgressField(field) {
  return (instanceId, api) => memo(instanceId, () => api.derive.session.progress().pipe(map((info6) => info6[field])));
}
function createDerive(api, info6, [currentSlot, epochIndex, epochOrGenesisStartSlot, activeEraStartSessionIndex]) {
  const epochStartSlot = epochIndex.mul(info6.sessionLength).iadd(epochOrGenesisStartSlot);
  const sessionProgress2 = currentSlot.sub(epochStartSlot);
  const eraProgress2 = info6.currentIndex.sub(activeEraStartSessionIndex).imul(info6.sessionLength).iadd(sessionProgress2);
  return objectSpread({
    eraProgress: api.registry.createType("BlockNumber", eraProgress2),
    sessionProgress: api.registry.createType("BlockNumber", sessionProgress2)
  }, info6);
}
function queryAura(api) {
  return api.derive.session.info().pipe(map((info6) => objectSpread({
    eraProgress: api.registry.createType("BlockNumber"),
    sessionProgress: api.registry.createType("BlockNumber")
  }, info6)));
}
function queryBabe(api) {
  return api.derive.session.info().pipe(switchMap((info6) => combineLatest([
    of(info6),
    // we may have no staking, but have babe (permissioned)
    api.query.staking?.erasStartSessionIndex ? api.queryMulti([
      api.query.babe.currentSlot,
      api.query.babe.epochIndex,
      api.query.babe.genesisSlot,
      [api.query.staking.erasStartSessionIndex, info6.activeEra]
    ]) : api.queryMulti([
      api.query.babe.currentSlot,
      api.query.babe.epochIndex,
      api.query.babe.genesisSlot
    ])
  ])), map(([info6, [currentSlot, epochIndex, genesisSlot, optStartIndex]]) => [
    info6,
    [currentSlot, epochIndex, genesisSlot, optStartIndex && optStartIndex.isSome ? optStartIndex.unwrap() : api.registry.createType("SessionIndex", 1)]
  ]));
}
function progress(instanceId, api) {
  return memo(instanceId, () => api.query.babe ? queryBabe(api).pipe(map(([info6, slots]) => createDerive(api, info6, slots))) : queryAura(api));
}
var eraLength = withProgressField("eraLength");
var eraProgress = withProgressField("eraProgress");
var sessionProgress = withProgressField("sessionProgress");

// node_modules/@polkadot/api-derive/society/index.js
var society_exports = {};
__export(society_exports, {
  _members: () => _members,
  candidates: () => candidates,
  info: () => info5,
  member: () => member,
  members: () => members5
});

// node_modules/@polkadot/api-derive/society/candidates.js
function getPrev(api) {
  return api.query.society.candidates().pipe(switchMap((candidates2) => combineLatest([
    of(candidates2),
    api.query.society["suspendedCandidates"].multi(candidates2.map(({ who }) => who))
  ])), map(([candidates2, suspended]) => candidates2.map(({ kind, value, who }, index) => ({
    accountId: who,
    isSuspended: suspended[index].isSome,
    kind,
    value
  }))));
}
function getCurr(api) {
  return api.query.society.candidates.entries().pipe(map((entries) => entries.filter(([, opt]) => opt.isSome).map(([{ args: [accountId2] }, opt]) => [accountId2, opt.unwrap()]).map(([accountId2, { bid, kind }]) => ({
    accountId: accountId2,
    isSuspended: false,
    kind,
    value: bid
  }))));
}
function candidates(instanceId, api) {
  return memo(instanceId, () => api.query.society["suspendedCandidates"] && api.query.society.candidates.creator.meta.type.isPlain ? getPrev(api) : getCurr(api));
}

// node_modules/@polkadot/api-derive/society/info.js
function info5(instanceId, api) {
  return memo(instanceId, () => combineLatest([
    api.query.society.bids(),
    api.query.society["defender"] ? api.query.society["defender"]() : of(void 0),
    api.query.society.founder(),
    api.query.society.head(),
    api.query.society["maxMembers"] ? api.query.society["maxMembers"]() : of(void 0),
    api.query.society.pot()
  ]).pipe(map(([bids, defender, founder, head, maxMembers, pot]) => ({
    bids,
    defender: defender?.unwrapOr(void 0),
    founder: founder.unwrapOr(void 0),
    hasDefender: defender?.isSome && head.isSome && !head.eq(defender) || false,
    head: head.unwrapOr(void 0),
    maxMembers,
    pot
  }))));
}

// node_modules/@polkadot/api-derive/society/member.js
function member(instanceId, api) {
  return memo(instanceId, (accountId2) => api.derive.society._members([accountId2]).pipe(map(([result]) => result)));
}

// node_modules/@polkadot/api-derive/society/members.js
function _membersPrev(api, accountIds) {
  return combineLatest([
    of(accountIds),
    api.query.society.payouts.multi(accountIds),
    api.query.society["strikes"].multi(accountIds),
    api.query.society.defenderVotes.multi(accountIds),
    api.query.society.suspendedMembers.multi(accountIds),
    api.query.society["vouching"].multi(accountIds)
  ]).pipe(map(([accountIds2, payouts, strikes, defenderVotes, suspended, vouching]) => accountIds2.map((accountId2, index) => ({
    accountId: accountId2,
    isDefenderVoter: defenderVotes[index].isSome,
    isSuspended: suspended[index].isTrue,
    payouts: payouts[index],
    strikes: strikes[index],
    vote: defenderVotes[index].unwrapOr(void 0),
    vouching: vouching[index].unwrapOr(void 0)
  }))));
}
function _membersCurr(api, accountIds) {
  return combineLatest([
    of(accountIds),
    api.query.society.members.multi(accountIds),
    api.query.society.payouts.multi(accountIds),
    api.query.society.defenderVotes.multi(accountIds),
    api.query.society.suspendedMembers.multi(accountIds)
  ]).pipe(map(([accountIds2, members7, payouts, defenderVotes, suspendedMembers]) => accountIds2.map((accountId2, index) => members7[index].isSome ? {
    accountId: accountId2,
    isDefenderVoter: defenderVotes[index].isSome ? defenderVotes[index].unwrap().approve.isTrue : false,
    isSuspended: suspendedMembers[index].isSome,
    member: members7[index].unwrap(),
    payouts: payouts[index].payouts
  } : null).filter((m) => !!m).map(({ accountId: accountId2, isDefenderVoter, isSuspended, member: member2, payouts: payouts2 }) => ({
    accountId: accountId2,
    isDefenderVoter,
    isSuspended,
    payouts: payouts2,
    strikes: member2.strikes,
    vouching: member2.vouching.unwrapOr(void 0)
  }))));
}
function _members(instanceId, api) {
  return memo(instanceId, (accountIds) => api.query.society.members.creator.meta.type.isMap ? _membersCurr(api, accountIds) : _membersPrev(api, accountIds));
}
function members5(instanceId, api) {
  return memo(instanceId, () => api.query.society.members.creator.meta.type.isMap ? api.query.society.members.keys().pipe(switchMap((keys2) => api.derive.society._members(keys2.map(({ args: [accountId2] }) => accountId2)))) : api.query.society.members().pipe(switchMap((members7) => api.derive.society._members(members7))));
}

// node_modules/@polkadot/api-derive/staking/index.js
var staking_exports = {};
__export(staking_exports, {
  _eraExposure: () => _eraExposure,
  _eraPrefs: () => _eraPrefs,
  _eraSlashes: () => _eraSlashes,
  _erasExposure: () => _erasExposure,
  _erasPoints: () => _erasPoints,
  _erasPrefs: () => _erasPrefs,
  _erasRewards: () => _erasRewards,
  _erasSlashes: () => _erasSlashes,
  _ownExposures: () => _ownExposures,
  _ownSlashes: () => _ownSlashes,
  _stakerExposures: () => _stakerExposures,
  _stakerPoints: () => _stakerPoints,
  _stakerPrefs: () => _stakerPrefs,
  _stakerRewards: () => _stakerRewards,
  _stakerRewardsEras: () => _stakerRewardsEras,
  _stakerSlashes: () => _stakerSlashes,
  account: () => account2,
  accounts: () => accounts,
  currentPoints: () => currentPoints,
  electedInfo: () => electedInfo,
  eraExposure: () => eraExposure,
  eraPrefs: () => eraPrefs,
  eraSlashes: () => eraSlashes,
  erasExposure: () => erasExposure,
  erasHistoric: () => erasHistoric,
  erasPoints: () => erasPoints,
  erasPrefs: () => erasPrefs,
  erasRewards: () => erasRewards,
  erasSlashes: () => erasSlashes,
  keys: () => keys,
  keysMulti: () => keysMulti,
  nextElected: () => nextElected,
  overview: () => overview2,
  ownExposure: () => ownExposure,
  ownExposures: () => ownExposures,
  ownSlash: () => ownSlash,
  ownSlashes: () => ownSlashes,
  query: () => query,
  queryMulti: () => queryMulti,
  stakerExposure: () => stakerExposure,
  stakerExposures: () => stakerExposures,
  stakerPoints: () => stakerPoints,
  stakerPrefs: () => stakerPrefs,
  stakerRewards: () => stakerRewards,
  stakerRewardsMulti: () => stakerRewardsMulti,
  stakerRewardsMultiEras: () => stakerRewardsMultiEras,
  stakerSlashes: () => stakerSlashes,
  stashes: () => stashes,
  validators: () => validators,
  waitingInfo: () => waitingInfo
});

// node_modules/@polkadot/api-derive/staking/account.js
var QUERY_OPTS = {
  withDestination: true,
  withLedger: true,
  withNominations: true,
  withPrefs: true
};
function groupByEra(list) {
  return list.reduce((map2, { era, value }) => {
    const key = era.toString();
    map2[key] = (map2[key] || BN_ZERO).add(value.unwrap());
    return map2;
  }, {});
}
function calculateUnlocking(api, stakingLedger, sessionInfo) {
  const results = Object.entries(groupByEra((stakingLedger?.unlocking || []).filter(({ era }) => era.unwrap().gt(sessionInfo.activeEra)))).map(([eraString, value]) => ({
    remainingEras: new import_bn.default(eraString).isub(sessionInfo.activeEra),
    value: api.registry.createType("Balance", value)
  }));
  return results.length ? results : void 0;
}
function redeemableSum(api, stakingLedger, sessionInfo) {
  return api.registry.createType("Balance", (stakingLedger?.unlocking || []).reduce((total, { era, value }) => {
    return era.unwrap().gt(sessionInfo.currentEra) ? total : total.iadd(value.unwrap());
  }, new import_bn.default(0)));
}
function parseResult2(api, sessionInfo, keys2, query2) {
  return objectSpread({}, keys2, query2, {
    redeemable: redeemableSum(api, query2.stakingLedger, sessionInfo),
    unlocking: calculateUnlocking(api, query2.stakingLedger, sessionInfo)
  });
}
function accounts(instanceId, api) {
  return memo(instanceId, (accountIds, opts = QUERY_OPTS) => api.derive.session.info().pipe(switchMap((sessionInfo) => combineLatest([
    api.derive.staking.keysMulti(accountIds),
    api.derive.staking.queryMulti(accountIds, opts)
  ]).pipe(map(([keys2, queries]) => queries.map((q, index) => parseResult2(api, sessionInfo, keys2[index], q)))))));
}
var account2 = firstMemo((api, accountId2, opts) => api.derive.staking.accounts([accountId2], opts));

// node_modules/@polkadot/api-derive/staking/currentPoints.js
function currentPoints(instanceId, api) {
  return memo(instanceId, () => api.derive.session.indexes().pipe(switchMap(({ activeEra }) => api.query.staking.erasRewardPoints(activeEra))));
}

// node_modules/@polkadot/api-derive/staking/electedInfo.js
var DEFAULT_FLAGS = { withController: true, withExposure: true, withPrefs: true };
function combineAccounts(nextElected2, validators2) {
  return arrayFlatten([nextElected2, validators2.filter((v) => !nextElected2.find((n) => n.eq(v)))]);
}
function electedInfo(instanceId, api) {
  return memo(instanceId, (flags2 = DEFAULT_FLAGS) => api.derive.staking.validators().pipe(switchMap(({ nextElected: nextElected2, validators: validators2 }) => api.derive.staking.queryMulti(combineAccounts(nextElected2, validators2), flags2).pipe(map((info6) => ({
    info: info6,
    nextElected: nextElected2,
    validators: validators2
  }))))));
}

// node_modules/@polkadot/api-derive/staking/cache.js
function getEraCache(CACHE_KEY6, era, withActive) {
  const cacheKey = `${CACHE_KEY6}-${era.toString()}`;
  return [
    cacheKey,
    withActive ? void 0 : deriveCache.get(cacheKey)
  ];
}
function getEraMultiCache(CACHE_KEY6, eras, withActive) {
  const cached = withActive ? [] : eras.map((e) => deriveCache.get(`${CACHE_KEY6}-${e.toString()}`)).filter((v) => !!v);
  return cached;
}
function setEraCache(cacheKey, withActive, value) {
  !withActive && deriveCache.set(cacheKey, value);
  return value;
}
function setEraMultiCache(CACHE_KEY6, withActive, values) {
  !withActive && values.forEach((v) => deriveCache.set(`${CACHE_KEY6}-${v.era.toString()}`, v));
  return values;
}
function filterCachedEras(eras, cached, query2) {
  return eras.map((e) => cached.find(({ era }) => e.eq(era)) || query2.find(({ era }) => e.eq(era))).filter((e) => !!e);
}

// node_modules/@polkadot/api-derive/staking/util.js
var ERA_CHUNK_SIZE = 14;
function chunkEras(eras, fn) {
  const chunked = arrayChunk(eras, ERA_CHUNK_SIZE);
  let index = 0;
  const subject = new BehaviorSubject(chunked[index]);
  return subject.pipe(switchMap(fn), tap(() => {
    nextTick(() => {
      index++;
      index === chunked.length ? subject.complete() : subject.next(chunked[index]);
    });
  }), toArray(), map(arrayFlatten));
}
function filterEras(eras, list) {
  return eras.filter((e) => !list.some(({ era }) => e.eq(era)));
}
function erasHistoricApply(fn) {
  return (instanceId, api) => (
    // Cannot quite get the typing right, but it is right in the code
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    memo(instanceId, (withActive = false) => api.derive.staking.erasHistoric(withActive).pipe(switchMap((e) => api.derive.staking[fn](e, withActive))))
  );
}
function erasHistoricApplyAccount(fn) {
  return (instanceId, api) => (
    // Cannot quite get the typing right, but it is right in the code
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    memo(instanceId, (accountId2, withActive = false) => api.derive.staking.erasHistoric(withActive).pipe(switchMap((e) => api.derive.staking[fn](accountId2, e, withActive))))
  );
}
function singleEra(fn) {
  return (instanceId, api) => (
    // Cannot quite get the typing right, but it is right in the code
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    memo(instanceId, (era) => api.derive.staking[fn](era, true))
  );
}
function combineEras(fn) {
  return (instanceId, api) => (
    // Cannot quite get the typing right, but it is right in the code
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    memo(instanceId, (eras, withActive) => !eras.length ? of([]) : chunkEras(eras, (eras2) => combineLatest(eras2.map((e) => api.derive.staking[fn](e, withActive)))))
  );
}

// node_modules/@polkadot/api-derive/staking/erasExposure.js
var CACHE_KEY = "eraExposure";
function mapStakers(era, stakers) {
  const nominators = {};
  const validators2 = {};
  stakers.forEach(([key, exposure]) => {
    const validatorId = key.args[1].toString();
    validators2[validatorId] = exposure;
    exposure.others.forEach(({ who }, validatorIndex) => {
      const nominatorId = who.toString();
      nominators[nominatorId] = nominators[nominatorId] || [];
      nominators[nominatorId].push({ validatorId, validatorIndex });
    });
  });
  return { era, nominators, validators: validators2 };
}
function _eraExposure(instanceId, api) {
  return memo(instanceId, (era, withActive = false) => {
    const [cacheKey, cached] = getEraCache(CACHE_KEY, era, withActive);
    return cached ? of(cached) : api.query.staking.erasStakersClipped.entries(era).pipe(map((r) => setEraCache(cacheKey, withActive, mapStakers(era, r))));
  });
}
var eraExposure = singleEra("_eraExposure");
var _erasExposure = combineEras("_eraExposure");
var erasExposure = erasHistoricApply("_erasExposure");

// node_modules/@polkadot/api-derive/staking/erasHistoric.js
function erasHistoric(instanceId, api) {
  return memo(instanceId, (withActive) => combineLatest([
    api.query.staking.activeEra(),
    api.consts.staking.historyDepth ? of(api.consts.staking.historyDepth) : api.query.staking["historyDepth"]()
  ]).pipe(map(([activeEraOpt, historyDepth]) => {
    const result = [];
    const max = historyDepth.toNumber();
    const activeEra = activeEraOpt.unwrapOrDefault().index;
    let lastEra = activeEra;
    while (lastEra.gte(BN_ZERO) && result.length < max) {
      if (lastEra !== activeEra || withActive === true) {
        result.push(api.registry.createType("EraIndex", lastEra));
      }
      lastEra = lastEra.sub(BN_ONE);
    }
    return result.reverse();
  })));
}

// node_modules/@polkadot/api-derive/staking/erasPoints.js
var CACHE_KEY2 = "eraPoints";
function mapValidators({ individual }) {
  return [...individual.entries()].filter(([, points]) => points.gt(BN_ZERO)).reduce((result, [validatorId, points]) => {
    result[validatorId.toString()] = points;
    return result;
  }, {});
}
function mapPoints(eras, points) {
  return eras.map((era, index) => ({
    era,
    eraPoints: points[index].total,
    validators: mapValidators(points[index])
  }));
}
function _erasPoints(instanceId, api) {
  return memo(instanceId, (eras, withActive) => {
    if (!eras.length) {
      return of([]);
    }
    const cached = getEraMultiCache(CACHE_KEY2, eras, withActive);
    const remaining = filterEras(eras, cached);
    return !remaining.length ? of(cached) : api.query.staking.erasRewardPoints.multi(remaining).pipe(map((p) => filterCachedEras(eras, cached, setEraMultiCache(CACHE_KEY2, withActive, mapPoints(remaining, p)))));
  });
}
var erasPoints = erasHistoricApply("_erasPoints");

// node_modules/@polkadot/api-derive/staking/erasPrefs.js
var CACHE_KEY3 = "eraPrefs";
function mapPrefs(era, all3) {
  const validators2 = {};
  all3.forEach(([key, prefs]) => {
    validators2[key.args[1].toString()] = prefs;
  });
  return { era, validators: validators2 };
}
function _eraPrefs(instanceId, api) {
  return memo(instanceId, (era, withActive) => {
    const [cacheKey, cached] = getEraCache(CACHE_KEY3, era, withActive);
    return cached ? of(cached) : api.query.staking.erasValidatorPrefs.entries(era).pipe(map((r) => setEraCache(cacheKey, withActive, mapPrefs(era, r))));
  });
}
var eraPrefs = singleEra("_eraPrefs");
var _erasPrefs = combineEras("_eraPrefs");
var erasPrefs = erasHistoricApply("_erasPrefs");

// node_modules/@polkadot/api-derive/staking/erasRewards.js
var CACHE_KEY4 = "eraRewards";
function mapRewards(eras, optRewards) {
  return eras.map((era, index) => ({
    era,
    eraReward: optRewards[index].unwrapOrDefault()
  }));
}
function _erasRewards(instanceId, api) {
  return memo(instanceId, (eras, withActive) => {
    if (!eras.length) {
      return of([]);
    }
    const cached = getEraMultiCache(CACHE_KEY4, eras, withActive);
    const remaining = filterEras(eras, cached);
    if (!remaining.length) {
      return of(cached);
    }
    return api.query.staking.erasValidatorReward.multi(remaining).pipe(map((r) => filterCachedEras(eras, cached, setEraMultiCache(CACHE_KEY4, withActive, mapRewards(remaining, r)))));
  });
}
var erasRewards = erasHistoricApply("_erasRewards");

// node_modules/@polkadot/api-derive/staking/erasSlashes.js
var CACHE_KEY5 = "eraSlashes";
function mapSlashes(era, noms, vals) {
  const nominators = {};
  const validators2 = {};
  noms.forEach(([key, optBalance]) => {
    nominators[key.args[1].toString()] = optBalance.unwrap();
  });
  vals.forEach(([key, optRes]) => {
    validators2[key.args[1].toString()] = optRes.unwrapOrDefault()[1];
  });
  return { era, nominators, validators: validators2 };
}
function _eraSlashes(instanceId, api) {
  return memo(instanceId, (era, withActive) => {
    const [cacheKey, cached] = getEraCache(CACHE_KEY5, era, withActive);
    return cached ? of(cached) : combineLatest([
      api.query.staking.nominatorSlashInEra.entries(era),
      api.query.staking.validatorSlashInEra.entries(era)
    ]).pipe(map(([n, v]) => setEraCache(cacheKey, withActive, mapSlashes(era, n, v))));
  });
}
var eraSlashes = singleEra("_eraSlashes");
var _erasSlashes = combineEras("_eraSlashes");
var erasSlashes = erasHistoricApply("_erasSlashes");

// node_modules/@polkadot/api-derive/staking/keys.js
function extractsIds(stashId, queuedKeys, nextKeys) {
  const sessionIds = (queuedKeys.find(([currentId]) => currentId.eq(stashId)) || [void 0, []])[1];
  const nextSessionIds = nextKeys.unwrapOr([]);
  return {
    nextSessionIds: Array.isArray(nextSessionIds) ? nextSessionIds : [...nextSessionIds.values()],
    sessionIds: Array.isArray(sessionIds) ? sessionIds : [...sessionIds.values()]
  };
}
var keys = firstMemo((api, stashId) => api.derive.staking.keysMulti([stashId]));
function keysMulti(instanceId, api) {
  return memo(instanceId, (stashIds) => stashIds.length ? api.query.session.queuedKeys().pipe(switchMap((queuedKeys) => combineLatest([
    of(queuedKeys),
    api.consts["session"]?.["dedupKeyPrefix"] ? api.query.session.nextKeys.multi(stashIds.map((s) => [api.consts["session"]["dedupKeyPrefix"], s])) : combineLatest(stashIds.map((s) => api.query.session.nextKeys(s)))
  ])), map(([queuedKeys, nextKeys]) => stashIds.map((stashId, index) => extractsIds(stashId, queuedKeys, nextKeys[index])))) : of([]));
}

// node_modules/@polkadot/api-derive/staking/overview.js
function overview2(instanceId, api) {
  return memo(instanceId, () => combineLatest([
    api.derive.session.indexes(),
    api.derive.staking.validators()
  ]).pipe(map(([indexes3, { nextElected: nextElected2, validators: validators2 }]) => objectSpread({}, indexes3, {
    nextElected: nextElected2,
    validators: validators2
  }))));
}

// node_modules/@polkadot/api-derive/staking/ownExposure.js
function _ownExposures(instanceId, api) {
  return memo(instanceId, (accountId2, eras, _withActive) => eras.length ? combineLatest([
    combineLatest(eras.map((e) => api.query.staking.erasStakersClipped(e, accountId2))),
    combineLatest(eras.map((e) => api.query.staking.erasStakers(e, accountId2)))
  ]).pipe(map(([clp, exp]) => eras.map((era, index) => ({ clipped: clp[index], era, exposure: exp[index] })))) : of([]));
}
var ownExposure = firstMemo((api, accountId2, era) => api.derive.staking._ownExposures(accountId2, [era], true));
var ownExposures = erasHistoricApplyAccount("_ownExposures");

// node_modules/@polkadot/api-derive/staking/ownSlashes.js
function _ownSlashes(instanceId, api) {
  return memo(instanceId, (accountId2, eras, _withActive) => eras.length ? combineLatest([
    combineLatest(eras.map((e) => api.query.staking.validatorSlashInEra(e, accountId2))),
    combineLatest(eras.map((e) => api.query.staking.nominatorSlashInEra(e, accountId2)))
  ]).pipe(map(([vals, noms]) => eras.map((era, index) => ({
    era,
    total: vals[index].isSome ? vals[index].unwrap()[1] : noms[index].unwrapOrDefault()
  })))) : of([]));
}
var ownSlash = firstMemo((api, accountId2, era) => api.derive.staking._ownSlashes(accountId2, [era], true));
var ownSlashes = erasHistoricApplyAccount("_ownSlashes");

// node_modules/@polkadot/api-derive/staking/query.js
function rewardDestinationCompat(rewardDestination) {
  return typeof rewardDestination.isSome === "boolean" ? rewardDestination.unwrapOr(null) : rewardDestination;
}
function parseDetails(stashId, controllerIdOpt, nominatorsOpt, rewardDestinationOpts, validatorPrefs, exposure, stakingLedgerOpt) {
  return {
    accountId: stashId,
    controllerId: controllerIdOpt?.unwrapOr(null) || null,
    exposure,
    nominators: nominatorsOpt.isSome ? nominatorsOpt.unwrap().targets : [],
    rewardDestination: rewardDestinationCompat(rewardDestinationOpts),
    stakingLedger: stakingLedgerOpt.unwrapOrDefault(),
    stashId,
    validatorPrefs
  };
}
function getLedgers(api, optIds, { withLedger = false }) {
  const ids = optIds.filter((o) => withLedger && !!o && o.isSome).map((o) => o.unwrap());
  const emptyLed = api.registry.createType("Option<StakingLedger>");
  return (ids.length ? combineLatest(ids.map((s) => api.query.staking.ledger(s))) : of([])).pipe(map((optLedgers) => {
    let offset = -1;
    return optIds.map((o) => o && o.isSome ? optLedgers[++offset] || emptyLed : emptyLed);
  }));
}
function getStashInfo(api, stashIds, activeEra, { withController, withDestination, withExposure, withLedger, withNominations, withPrefs }) {
  const emptyNoms = api.registry.createType("Option<Nominations>");
  const emptyRewa = api.registry.createType("RewardDestination");
  const emptyExpo = api.registry.createType("Exposure");
  const emptyPrefs = api.registry.createType("ValidatorPrefs");
  return combineLatest([
    withController || withLedger ? combineLatest(stashIds.map((s) => api.query.staking.bonded(s))) : of(stashIds.map(() => null)),
    withNominations ? combineLatest(stashIds.map((s) => api.query.staking.nominators(s))) : of(stashIds.map(() => emptyNoms)),
    withDestination ? combineLatest(stashIds.map((s) => api.query.staking.payee(s))) : of(stashIds.map(() => emptyRewa)),
    withPrefs ? combineLatest(stashIds.map((s) => api.query.staking.validators(s))) : of(stashIds.map(() => emptyPrefs)),
    withExposure ? combineLatest(stashIds.map((s) => api.query.staking.erasStakers(activeEra, s))) : of(stashIds.map(() => emptyExpo))
  ]);
}
function getBatch(api, activeEra, stashIds, flags2) {
  return getStashInfo(api, stashIds, activeEra, flags2).pipe(switchMap(([controllerIdOpt, nominatorsOpt, rewardDestination, validatorPrefs, exposure]) => getLedgers(api, controllerIdOpt, flags2).pipe(map((stakingLedgerOpts) => stashIds.map((stashId, index) => parseDetails(stashId, controllerIdOpt[index], nominatorsOpt[index], rewardDestination[index], validatorPrefs[index], exposure[index], stakingLedgerOpts[index]))))));
}
var query = firstMemo((api, accountId2, flags2) => api.derive.staking.queryMulti([accountId2], flags2));
function queryMulti(instanceId, api) {
  return memo(instanceId, (accountIds, flags2) => api.derive.session.indexes().pipe(switchMap(({ activeEra }) => {
    const stashIds = accountIds.map((a) => api.registry.createType("AccountId", a));
    return stashIds.length ? getBatch(api, activeEra, stashIds, flags2) : of([]);
  })));
}

// node_modules/@polkadot/api-derive/staking/stakerExposure.js
function _stakerExposures(instanceId, api) {
  return memo(instanceId, (accountIds, eras, withActive = false) => {
    const stakerIds = accountIds.map((a) => api.registry.createType("AccountId", a).toString());
    return api.derive.staking._erasExposure(eras, withActive).pipe(map((exposures) => stakerIds.map((stakerId) => exposures.map(({ era, nominators: allNominators, validators: allValidators }) => {
      const isValidator = !!allValidators[stakerId];
      const validators2 = {};
      const nominating = allNominators[stakerId] || [];
      if (isValidator) {
        validators2[stakerId] = allValidators[stakerId];
      } else if (nominating) {
        nominating.forEach(({ validatorId }) => {
          validators2[validatorId] = allValidators[validatorId];
        });
      }
      return { era, isEmpty: !Object.keys(validators2).length, isValidator, nominating, validators: validators2 };
    }))));
  });
}
function stakerExposures(instanceId, api) {
  return memo(instanceId, (accountIds, withActive = false) => api.derive.staking.erasHistoric(withActive).pipe(switchMap((eras) => api.derive.staking._stakerExposures(accountIds, eras, withActive))));
}
var stakerExposure = firstMemo((api, accountId2, withActive) => api.derive.staking.stakerExposures([accountId2], withActive));

// node_modules/@polkadot/api-derive/staking/stakerPoints.js
function _stakerPoints(instanceId, api) {
  return memo(instanceId, (accountId2, eras, withActive) => {
    const stakerId = api.registry.createType("AccountId", accountId2).toString();
    return api.derive.staking._erasPoints(eras, withActive).pipe(map((points) => points.map(({ era, eraPoints, validators: validators2 }) => ({
      era,
      eraPoints,
      points: validators2[stakerId] || api.registry.createType("RewardPoint")
    }))));
  });
}
var stakerPoints = erasHistoricApplyAccount("_stakerPoints");

// node_modules/@polkadot/api-derive/staking/stakerPrefs.js
function _stakerPrefs(instanceId, api) {
  return memo(instanceId, (accountId2, eras, _withActive) => api.query.staking.erasValidatorPrefs.multi(eras.map((e) => [e, accountId2])).pipe(map((all3) => all3.map((validatorPrefs, index) => ({
    era: eras[index],
    validatorPrefs
  })))));
}
var stakerPrefs = erasHistoricApplyAccount("_stakerPrefs");

// node_modules/@polkadot/api-derive/staking/stakerRewards.js
function extractCompatRewards(ledger) {
  return ledger ? ledger.legacyClaimedRewards || ledger.claimedRewards : [];
}
function parseRewards(api, stashId, [erasPoints2, erasPrefs2, erasRewards2], exposures) {
  return exposures.map(({ era, isEmpty, isValidator, nominating, validators: eraValidators }) => {
    const { eraPoints, validators: allValPoints } = erasPoints2.find((p) => p.era.eq(era)) || { eraPoints: BN_ZERO, validators: {} };
    const { eraReward } = erasRewards2.find((r) => r.era.eq(era)) || { eraReward: api.registry.createType("Balance") };
    const { validators: allValPrefs } = erasPrefs2.find((p) => p.era.eq(era)) || { validators: {} };
    const validators2 = {};
    const stakerId = stashId.toString();
    Object.entries(eraValidators).forEach(([validatorId, exposure]) => {
      const valPoints = allValPoints[validatorId] || BN_ZERO;
      const valComm = allValPrefs[validatorId]?.commission.unwrap() || BN_ZERO;
      const expTotal = exposure.total?.unwrap() || BN_ZERO;
      let avail = BN_ZERO;
      let value;
      if (!(expTotal.isZero() || valPoints.isZero() || eraPoints.isZero())) {
        avail = eraReward.mul(valPoints).div(eraPoints);
        const valCut = valComm.mul(avail).div(BN_BILLION);
        let staked;
        if (validatorId === stakerId) {
          staked = exposure.own.unwrap();
        } else {
          const stakerExp = exposure.others.find(({ who }) => who.eq(stakerId));
          staked = stakerExp ? stakerExp.value.unwrap() : BN_ZERO;
        }
        value = avail.sub(valCut).imul(staked).div(expTotal).iadd(validatorId === stakerId ? valCut : BN_ZERO);
      }
      validators2[validatorId] = {
        total: api.registry.createType("Balance", avail),
        value: api.registry.createType("Balance", value)
      };
    });
    return {
      era,
      eraReward,
      isEmpty,
      isValidator,
      nominating,
      validators: validators2
    };
  });
}
function allUniqValidators(rewards) {
  return rewards.reduce(([all3, perStash], rewards2) => {
    const uniq = [];
    perStash.push(uniq);
    rewards2.forEach(({ validators: validators2 }) => Object.keys(validators2).forEach((validatorId) => {
      if (!uniq.includes(validatorId)) {
        uniq.push(validatorId);
        if (!all3.includes(validatorId)) {
          all3.push(validatorId);
        }
      }
    }));
    return [all3, perStash];
  }, [[], []]);
}
function removeClaimed(validators2, queryValidators, reward) {
  const rm = [];
  Object.keys(reward.validators).forEach((validatorId) => {
    const index = validators2.indexOf(validatorId);
    if (index !== -1) {
      const valLedger = queryValidators[index].stakingLedger;
      if (extractCompatRewards(valLedger).some((e) => reward.era.eq(e))) {
        rm.push(validatorId);
      }
    }
  });
  rm.forEach((validatorId) => {
    delete reward.validators[validatorId];
  });
}
function filterRewards(eras, valInfo, { rewards, stakingLedger }) {
  const filter = eras.filter((e) => !extractCompatRewards(stakingLedger).some((s) => s.eq(e)));
  const validators2 = valInfo.map(([v]) => v);
  const queryValidators = valInfo.map(([, q]) => q);
  return rewards.filter(({ isEmpty }) => !isEmpty).filter((reward) => {
    if (!filter.some((e) => reward.era.eq(e))) {
      return false;
    }
    removeClaimed(validators2, queryValidators, reward);
    return true;
  }).filter(({ validators: validators3 }) => Object.keys(validators3).length !== 0).map((reward) => objectSpread({}, reward, {
    nominators: reward.nominating.filter((n) => reward.validators[n.validatorId])
  }));
}
function _stakerRewardsEras(instanceId, api) {
  return memo(instanceId, (eras, withActive = false) => combineLatest([
    api.derive.staking._erasPoints(eras, withActive),
    api.derive.staking._erasPrefs(eras, withActive),
    api.derive.staking._erasRewards(eras, withActive)
  ]));
}
function _stakerRewards(instanceId, api) {
  return memo(instanceId, (accountIds, eras, withActive = false) => combineLatest([
    api.derive.staking.queryMulti(accountIds, { withLedger: true }),
    api.derive.staking._stakerExposures(accountIds, eras, withActive),
    api.derive.staking._stakerRewardsEras(eras, withActive)
  ]).pipe(switchMap(([queries, exposures, erasResult]) => {
    const allRewards = queries.map(({ stakingLedger, stashId }, index) => !stashId || !stakingLedger ? [] : parseRewards(api, stashId, erasResult, exposures[index]));
    if (withActive) {
      return of(allRewards);
    }
    const [allValidators, stashValidators] = allUniqValidators(allRewards);
    return api.derive.staking.queryMulti(allValidators, { withLedger: true }).pipe(map((queriedVals) => queries.map(({ stakingLedger }, index) => filterRewards(eras, stashValidators[index].map((validatorId) => [
      validatorId,
      queriedVals.find((q) => q.accountId.eq(validatorId))
    ]).filter((v) => !!v[1]), {
      rewards: allRewards[index],
      stakingLedger
    }))));
  })));
}
var stakerRewards = firstMemo((api, accountId2, withActive) => api.derive.staking.erasHistoric(withActive).pipe(switchMap((eras) => api.derive.staking._stakerRewards([accountId2], eras, withActive))));
function stakerRewardsMultiEras(instanceId, api) {
  return memo(instanceId, (accountIds, eras) => accountIds.length && eras.length ? api.derive.staking._stakerRewards(accountIds, eras, false) : of([]));
}
function stakerRewardsMulti(instanceId, api) {
  return memo(instanceId, (accountIds, withActive = false) => api.derive.staking.erasHistoric(withActive).pipe(switchMap((eras) => api.derive.staking.stakerRewardsMultiEras(accountIds, eras))));
}

// node_modules/@polkadot/api-derive/staking/stakerSlashes.js
function _stakerSlashes(instanceId, api) {
  return memo(instanceId, (accountId2, eras, withActive) => {
    const stakerId = api.registry.createType("AccountId", accountId2).toString();
    return api.derive.staking._erasSlashes(eras, withActive).pipe(map((slashes) => slashes.map(({ era, nominators, validators: validators2 }) => ({
      era,
      total: nominators[stakerId] || validators2[stakerId] || api.registry.createType("Balance")
    }))));
  });
}
var stakerSlashes = erasHistoricApplyAccount("_stakerSlashes");

// node_modules/@polkadot/api-derive/staking/stashes.js
function onBondedEvent(api) {
  let current = Date.now();
  return api.query.system.events().pipe(map((events2) => {
    current = events2.filter(({ event, phase }) => {
      try {
        return phase.isApplyExtrinsic && event.section === "staking" && event.method === "Bonded";
      } catch {
        return false;
      }
    }) ? Date.now() : current;
    return current;
  }), startWith(current), drr({ skipTimeout: true }));
}
function stashes(instanceId, api) {
  return memo(instanceId, () => onBondedEvent(api).pipe(switchMap(() => api.query.staking.validators.keys()), map((keys2) => keys2.map(({ args: [v] }) => v).filter((a) => a))));
}

// node_modules/@polkadot/api-derive/staking/validators.js
function nextElected(instanceId, api) {
  return memo(instanceId, () => api.query.staking.erasStakers ? api.derive.session.indexes().pipe(
    // only populate for next era in the last session, so track both here - entries are not
    // subscriptions, so we need a trigger - currentIndex acts as that trigger to refresh
    switchMap(({ currentEra }) => api.query.staking.erasStakers.keys(currentEra)),
    map((keys2) => keys2.map(({ args: [, accountId2] }) => accountId2))
  ) : api.query.staking["currentElected"]());
}
function validators(instanceId, api) {
  return memo(instanceId, () => (
    // Sadly the node-template is (for some obscure reason) not comprehensive, so while the derive works
    // in all actual real-world deployed chains, it does create some confusion for limited template chains
    combineLatest([
      api.query.session ? api.query.session.validators() : of([]),
      api.query.staking ? api.derive.staking.nextElected() : of([])
    ]).pipe(map(([validators2, nextElected2]) => ({
      nextElected: nextElected2.length ? nextElected2 : validators2,
      validators: validators2
    })))
  ));
}

// node_modules/@polkadot/api-derive/staking/waitingInfo.js
var DEFAULT_FLAGS2 = { withController: true, withPrefs: true };
function waitingInfo(instanceId, api) {
  return memo(instanceId, (flags2 = DEFAULT_FLAGS2) => combineLatest([
    api.derive.staking.validators(),
    api.derive.staking.stashes()
  ]).pipe(switchMap(([{ nextElected: nextElected2 }, stashes2]) => {
    const elected = nextElected2.map((a) => a.toString());
    const waiting = stashes2.filter((v) => !elected.includes(v.toString()));
    return api.derive.staking.queryMulti(waiting, flags2).pipe(map((info6) => ({
      info: info6,
      waiting
    })));
  })));
}

// node_modules/@polkadot/api-derive/technicalCommittee/index.js
var technicalCommittee_exports = {};
__export(technicalCommittee_exports, {
  hasProposals: () => hasProposals5,
  members: () => members6,
  prime: () => prime5,
  proposal: () => proposal5,
  proposalCount: () => proposalCount5,
  proposalHashes: () => proposalHashes5,
  proposals: () => proposals6
});
var members6 = members("technicalCommittee");
var hasProposals5 = hasProposals("technicalCommittee");
var proposal5 = proposal("technicalCommittee");
var proposalCount5 = proposalCount("technicalCommittee");
var proposalHashes5 = proposalHashes("technicalCommittee");
var proposals6 = proposals("technicalCommittee");
var prime5 = prime("technicalCommittee");

// node_modules/@polkadot/api-derive/treasury/index.js
var treasury_exports = {};
__export(treasury_exports, {
  proposals: () => proposals7
});

// node_modules/@polkadot/api-derive/treasury/proposals.js
function parseResult3(api, { allIds, allProposals, approvalIds, councilProposals, proposalCount: proposalCount6 }) {
  const approvals = [];
  const proposals8 = [];
  const councilTreasury = councilProposals.filter(({ proposal: proposal6 }) => proposal6 && (api.tx.treasury.approveProposal.is(proposal6) || api.tx.treasury.rejectProposal.is(proposal6)));
  allIds.forEach((id, index) => {
    if (allProposals[index].isSome) {
      const council = councilTreasury.filter(({ proposal: proposal6 }) => proposal6 && id.eq(proposal6.args[0])).sort((a, b) => a.proposal && b.proposal ? a.proposal.method.localeCompare(b.proposal.method) : a.proposal ? -1 : 1);
      const isApproval = approvalIds.some((approvalId) => approvalId.eq(id));
      const derived = { council, id, proposal: allProposals[index].unwrap() };
      if (isApproval) {
        approvals.push(derived);
      } else {
        proposals8.push(derived);
      }
    }
  });
  return { approvals, proposalCount: proposalCount6, proposals: proposals8 };
}
function retrieveProposals(api, proposalCount6, approvalIds) {
  const proposalIds = [];
  const count = proposalCount6.toNumber();
  for (let index = 0; index < count; index++) {
    if (!approvalIds.some((id) => id.eqn(index))) {
      proposalIds.push(api.registry.createType("ProposalIndex", index));
    }
  }
  const allIds = [...proposalIds, ...approvalIds];
  return combineLatest([
    api.query.treasury.proposals.multi(allIds),
    api.derive.council ? api.derive.council.proposals() : of([])
  ]).pipe(map(([allProposals, councilProposals]) => parseResult3(api, { allIds, allProposals, approvalIds, councilProposals, proposalCount: proposalCount6 })));
}
function proposals7(instanceId, api) {
  return memo(instanceId, () => api.query.treasury ? combineLatest([
    api.query.treasury.proposalCount(),
    api.query.treasury.approvals()
  ]).pipe(switchMap(([proposalCount6, approvalIds]) => retrieveProposals(api, proposalCount6, approvalIds))) : of({
    approvals: [],
    proposalCount: api.registry.createType("ProposalIndex"),
    proposals: []
  }));
}

// node_modules/@polkadot/api-derive/tx/index.js
var tx_exports = {};
__export(tx_exports, {
  events: () => events,
  signingInfo: () => signingInfo
});

// node_modules/@polkadot/api-derive/tx/events.js
function events(instanceId, api) {
  return memo(instanceId, (blockHash) => combineLatest([
    api.rpc.chain.getBlock(blockHash),
    api.queryAt(blockHash).pipe(switchMap((queryAt) => queryAt.system.events()))
  ]).pipe(map(([block, events2]) => ({ block, events: events2 }))));
}

// node_modules/@polkadot/api-derive/tx/constants.js
var FALLBACK_MAX_HASH_COUNT = 250;
var FALLBACK_PERIOD = new import_bn.default(6 * 1e3);
var MAX_FINALITY_LAG = new import_bn.default(5);
var MORTAL_PERIOD = new import_bn.default(5 * 60 * 1e3);

// node_modules/@polkadot/api-derive/tx/signingInfo.js
function latestNonce(api, address) {
  return api.derive.balances.account(address).pipe(map(({ accountNonce }) => accountNonce));
}
function nextNonce(api, address) {
  return api.rpc.system?.accountNextIndex ? api.rpc.system.accountNextIndex(address) : latestNonce(api, address);
}
function signingHeader(api) {
  return combineLatest([
    api.rpc.chain.getHeader().pipe(switchMap((header) => (
      // check for chains at genesis (until block 1 is produced, e.g. 6s), since
      // we do need to allow transactions at chain start (also dev/seal chains)
      header.parentHash.isEmpty ? of(header) : api.rpc.chain.getHeader(header.parentHash).pipe(catchError(() => of(header)))
    ))),
    api.rpc.chain.getFinalizedHead().pipe(switchMap((hash) => api.rpc.chain.getHeader(hash).pipe(catchError(() => of(null)))))
  ]).pipe(map(([current, finalized]) => (
    // determine the hash to use, current when lag > max, else finalized
    !finalized || unwrapBlockNumber(current).sub(unwrapBlockNumber(finalized)).gt(MAX_FINALITY_LAG) ? current : finalized
  )));
}
function signingInfo(_instanceId, api) {
  return (address, nonce, era) => combineLatest([
    // retrieve nonce if none was specified
    isUndefined(nonce) ? latestNonce(api, address) : nonce === -1 ? nextNonce(api, address) : of(api.registry.createType("Index", nonce)),
    // if no era (create) or era > 0 (mortal), do block retrieval
    isUndefined(era) || isNumber(era) && era > 0 ? signingHeader(api) : of(null)
  ]).pipe(map(([nonce2, header]) => ({
    header,
    mortalLength: Math.min(api.consts.system?.blockHashCount?.toNumber() || FALLBACK_MAX_HASH_COUNT, MORTAL_PERIOD.div(api.consts.babe?.expectedBlockTime || api.consts.timestamp?.minimumPeriod.muln(2) || FALLBACK_PERIOD).iadd(MAX_FINALITY_LAG).toNumber()),
    nonce: nonce2
  })));
}

// node_modules/@polkadot/api-derive/derive.js
var derive = { accounts: accounts_exports, alliance: alliance_exports, bagsList: bagsList_exports, balances: balances_exports, bounties: bounties_exports, chain: chain_exports, contracts: contracts_exports, council: council_exports, crowdloan: crowdloan_exports, democracy: democracy_exports, elections: elections_exports, imOnline: imOnline_exports, membership: membership_exports, parachains: parachains_exports, session: session_exports, society: society_exports, staking: staking_exports, technicalCommittee: technicalCommittee_exports, treasury: treasury_exports, tx: tx_exports };

// node_modules/@polkadot/api-derive/bundle.js
var checks = {
  allianceMotion: {
    instances: ["allianceMotion"],
    methods: []
  },
  bagsList: {
    instances: ["voterBagsList", "voterList", "bagsList"],
    methods: [],
    withDetect: true
  },
  contracts: {
    instances: ["contracts"],
    methods: []
  },
  council: {
    instances: ["council"],
    methods: [],
    withDetect: true
  },
  crowdloan: {
    instances: ["crowdloan"],
    methods: []
  },
  democracy: {
    instances: ["democracy"],
    methods: []
  },
  elections: {
    instances: ["phragmenElection", "electionsPhragmen", "elections", "council"],
    methods: [],
    withDetect: true
  },
  imOnline: {
    instances: ["imOnline"],
    methods: []
  },
  membership: {
    instances: ["membership"],
    methods: []
  },
  parachains: {
    instances: ["parachains", "registrar"],
    methods: []
  },
  session: {
    instances: ["session"],
    methods: []
  },
  society: {
    instances: ["society"],
    methods: []
  },
  staking: {
    instances: ["staking"],
    methods: ["erasRewardPoints"]
  },
  technicalCommittee: {
    instances: ["technicalCommittee"],
    methods: [],
    withDetect: true
  },
  treasury: {
    instances: ["treasury"],
    methods: []
  }
};
function getModuleInstances(api, specName, moduleName) {
  return api.registry.getModuleInstances(specName, moduleName) || [];
}
function injectFunctions(instanceId, api, derives) {
  const result = {};
  const names = Object.keys(derives);
  const keys2 = Object.keys(api.query);
  const specName = api.runtimeVersion.specName;
  const filterKeys = (q) => keys2.includes(q);
  const filterInstances = (q) => getModuleInstances(api, specName, q).some(filterKeys);
  const filterMethods = (all3) => (m) => all3.some((q) => keys2.includes(q) && api.query[q][m]);
  const getKeys = (s) => Object.keys(derives[s]);
  const creator = (s, m) => derives[s][m](instanceId, api);
  const isIncluded = (c) => !checks[c] || (checks[c].instances.some(filterKeys) && (!checks[c].methods.length || checks[c].methods.every(filterMethods(checks[c].instances))) || checks[c].withDetect && checks[c].instances.some(filterInstances));
  for (let i = 0, count = names.length; i < count; i++) {
    const name = names[i];
    isIncluded(name) && lazyDeriveSection(result, name, getKeys, creator);
  }
  return result;
}
function getAvailableDerives(instanceId, api, custom = {}) {
  return __spreadValues(__spreadValues({}, injectFunctions(instanceId, api, derive)), injectFunctions(instanceId, api, custom));
}

// node_modules/@polkadot/api/util/decorate.js
function decorateDeriveSections(decorateMethod, derives) {
  const getKeys = (s) => Object.keys(derives[s]);
  const creator = (s, m) => decorateMethod(derives[s][m]);
  const result = {};
  const names = Object.keys(derives);
  for (let i = 0, count = names.length; i < count; i++) {
    lazyDeriveSection(result, names[i], getKeys, creator);
  }
  return result;
}

// node_modules/@polkadot/api/submittable/Result.js
var recordIdentity = (record) => record;
function filterAndApply(events2, section2, methods, onFound) {
  return events2.filter(({ event }) => section2 === event.section && methods.includes(event.method)).map((record) => onFound(record));
}
function getDispatchError({ event: { data: [dispatchError] } }) {
  return dispatchError;
}
function getDispatchInfo({ event: { data, method } }) {
  return method === "ExtrinsicSuccess" ? data[0] : data[1];
}
function extractError(events2 = []) {
  return filterAndApply(events2, "system", ["ExtrinsicFailed"], getDispatchError)[0];
}
function extractInfo(events2 = []) {
  return filterAndApply(events2, "system", ["ExtrinsicFailed", "ExtrinsicSuccess"], getDispatchInfo)[0];
}
var SubmittableResult = class {
  dispatchError;
  dispatchInfo;
  internalError;
  events;
  status;
  txHash;
  txIndex;
  blockNumber;
  constructor({ blockNumber, dispatchError, dispatchInfo, events: events2, internalError, status, txHash, txIndex }) {
    this.dispatchError = dispatchError || extractError(events2);
    this.dispatchInfo = dispatchInfo || extractInfo(events2);
    this.events = events2 || [];
    this.internalError = internalError;
    this.status = status;
    this.txHash = txHash;
    this.txIndex = txIndex;
    this.blockNumber = blockNumber;
  }
  get isCompleted() {
    return this.isError || this.status.isInBlock || this.status.isFinalized;
  }
  get isError() {
    return this.status.isDropped || this.status.isFinalityTimeout || this.status.isInvalid || this.status.isUsurped;
  }
  get isFinalized() {
    return this.status.isFinalized;
  }
  get isInBlock() {
    return this.status.isInBlock;
  }
  get isWarning() {
    return this.status.isRetracted;
  }
  /**
   * @description Filters EventRecords for the specified method & section (there could be multiple)
   */
  filterRecords(section2, method) {
    return filterAndApply(this.events, section2, Array.isArray(method) ? method : [method], recordIdentity);
  }
  /**
   * @description Finds an EventRecord for the specified method & section
   */
  findRecord(section2, method) {
    return this.filterRecords(section2, method)[0];
  }
  /**
   * @description Creates a human representation of the output
   */
  toHuman(isExtended) {
    return {
      dispatchError: this.dispatchError?.toHuman(),
      dispatchInfo: this.dispatchInfo?.toHuman(),
      events: this.events.map((e) => e.toHuman(isExtended)),
      internalError: this.internalError?.message.toString(),
      status: this.status.toHuman(isExtended)
    };
  }
};

// node_modules/@polkadot/api/submittable/createClass.js
function makeEraOptions(api, registry, partialOptions, { header, mortalLength, nonce }) {
  if (!header) {
    if (partialOptions.era && !partialOptions.blockHash) {
      throw new Error("Expected blockHash to be passed alongside non-immortal era options");
    }
    if (isNumber(partialOptions.era)) {
      delete partialOptions.era;
      delete partialOptions.blockHash;
    }
    return makeSignOptions(api, partialOptions, { nonce });
  }
  return makeSignOptions(api, partialOptions, {
    blockHash: header.hash,
    era: registry.createTypeUnsafe("ExtrinsicEra", [{
      current: header.number,
      period: partialOptions.era || mortalLength
    }]),
    nonce
  });
}
function makeSignAndSendOptions(partialOptions, statusCb) {
  let options = {};
  if (isFunction(partialOptions)) {
    statusCb = partialOptions;
  } else {
    options = objectSpread({}, partialOptions);
  }
  return [options, statusCb];
}
function makeSignOptions(api, partialOptions, extras) {
  return objectSpread({ blockHash: api.genesisHash, genesisHash: api.genesisHash }, partialOptions, extras, { runtimeVersion: api.runtimeVersion, signedExtensions: api.registry.signedExtensions, version: api.extrinsicType });
}
function optionsOrNonce(partialOptions = {}) {
  return isBn(partialOptions) || isNumber(partialOptions) ? { nonce: partialOptions } : partialOptions;
}
function createClass({ api, apiType, blockHash, decorateMethod }) {
  const ExtrinsicBase2 = api.registry.createClass("Extrinsic");
  class Submittable extends ExtrinsicBase2 {
    __internal__ignoreStatusCb;
    __internal__transformResult = identity;
    constructor(registry, extrinsic) {
      super(registry, extrinsic, { version: api.extrinsicType });
      this.__internal__ignoreStatusCb = apiType === "rxjs";
    }
    get hasDryRun() {
      return isFunction(api.rpc.system?.dryRun);
    }
    get hasPaymentInfo() {
      return isFunction(api.call.transactionPaymentApi?.queryInfo);
    }
    // dry run an extrinsic
    dryRun(account3, optionsOrHash) {
      if (!this.hasDryRun) {
        throw new Error("The system.dryRun RPC call is not available in your environment");
      }
      if (blockHash || isString(optionsOrHash) || isU8a(optionsOrHash)) {
        return decorateMethod(() => api.rpc.system.dryRun(this.toHex(), blockHash || optionsOrHash));
      }
      return decorateMethod(() => this.__internal__observeSign(account3, optionsOrHash).pipe(switchMap(() => api.rpc.system.dryRun(this.toHex()))))();
    }
    // calculate the payment info for this transaction (if signed and submitted)
    paymentInfo(account3, optionsOrHash) {
      if (!this.hasPaymentInfo) {
        throw new Error("The transactionPaymentApi.queryInfo runtime call is not available in your environment");
      }
      if (blockHash || isString(optionsOrHash) || isU8a(optionsOrHash)) {
        return decorateMethod(() => api.callAt(blockHash || optionsOrHash).pipe(switchMap((callAt) => {
          const u8a = this.toU8a();
          return callAt.transactionPaymentApi.queryInfo(u8a, u8a.length);
        })));
      }
      const [allOptions] = makeSignAndSendOptions(optionsOrHash);
      const address = isKeyringPair(account3) ? account3.address : account3.toString();
      return decorateMethod(() => api.derive.tx.signingInfo(address, allOptions.nonce, allOptions.era).pipe(first(), switchMap((signingInfo2) => {
        const eraOptions = makeEraOptions(api, this.registry, allOptions, signingInfo2);
        const signOptions = makeSignOptions(api, eraOptions, {});
        const u8a = api.tx(this.toU8a()).signFake(address, signOptions).toU8a();
        return api.call.transactionPaymentApi.queryInfo(u8a, u8a.length);
      })))();
    }
    // send implementation for both immediate Hash and statusCb variants
    send(statusCb) {
      const isSubscription = api.hasSubscriptions && (this.__internal__ignoreStatusCb || !!statusCb);
      return decorateMethod(isSubscription ? this.__internal__observeSubscribe : this.__internal__observeSend)(statusCb);
    }
    /**
     * @description Signs a transaction, returning `this` to allow chaining. E.g.: `signAsync(...).send()`. Like `.signAndSend` this will retrieve the nonce and blockHash to send the tx with.
     */
    signAsync(account3, partialOptions) {
      return decorateMethod(() => this.__internal__observeSign(account3, partialOptions).pipe(map(() => this)))();
    }
    // signAndSend implementation for all 3 cases above
    signAndSend(account3, partialOptions, optionalStatusCb) {
      const [options, statusCb] = makeSignAndSendOptions(partialOptions, optionalStatusCb);
      const isSubscription = api.hasSubscriptions && (this.__internal__ignoreStatusCb || !!statusCb);
      return decorateMethod(
        () => this.__internal__observeSign(account3, options).pipe(switchMap((info6) => isSubscription ? this.__internal__observeSubscribe(info6) : this.__internal__observeSend(info6)))
        // FIXME This is wrong, SubmittableResult is _not_ a codec
      )(statusCb);
    }
    // adds a transform to the result, applied before result is returned
    withResultTransform(transform) {
      this.__internal__transformResult = transform;
      return this;
    }
    __internal__observeSign = (account3, partialOptions) => {
      const address = isKeyringPair(account3) ? account3.address : account3.toString();
      const options = optionsOrNonce(partialOptions);
      return api.derive.tx.signingInfo(address, options.nonce, options.era).pipe(first(), mergeMap((signingInfo2) => __async(this, null, function* () {
        const eraOptions = makeEraOptions(api, this.registry, options, signingInfo2);
        let updateId = -1;
        if (isKeyringPair(account3)) {
          this.sign(account3, eraOptions);
        } else {
          updateId = yield this.__internal__signViaSigner(address, eraOptions, signingInfo2.header);
        }
        return { options: eraOptions, updateId };
      })));
    };
    __internal__observeStatus = (txHash, status) => {
      if (!status.isFinalized && !status.isInBlock) {
        return of(this.__internal__transformResult(new SubmittableResult({
          status,
          txHash
        })));
      }
      const blockHash2 = status.isInBlock ? status.asInBlock : status.asFinalized;
      return api.derive.tx.events(blockHash2).pipe(map(({ block, events: events2 }) => this.__internal__transformResult(new SubmittableResult(__spreadProps(__spreadValues({}, filterEvents(txHash, block, events2, status)), {
        status,
        txHash
      })))), catchError((internalError) => of(this.__internal__transformResult(new SubmittableResult({
        internalError,
        status,
        txHash
      })))));
    };
    __internal__observeSend = (info6) => {
      return api.rpc.author.submitExtrinsic(this).pipe(tap((hash) => {
        this.__internal__updateSigner(hash, info6);
      }));
    };
    __internal__observeSubscribe = (info6) => {
      const txHash = this.hash;
      return api.rpc.author.submitAndWatchExtrinsic(this).pipe(switchMap((status) => this.__internal__observeStatus(txHash, status)), tap((status) => {
        this.__internal__updateSigner(status, info6);
      }));
    };
    __internal__signViaSigner = (address, options, header) => __async(this, null, function* () {
      const signer = options.signer || api.signer;
      if (!signer) {
        throw new Error("No signer specified, either via api.setSigner or via sign options. You possibly need to pass through an explicit keypair for the origin so it can be used for signing.");
      }
      const payload = this.registry.createTypeUnsafe("SignerPayload", [objectSpread({}, options, {
        address,
        blockNumber: header ? header.number : 0,
        method: this.method
      })]);
      let result;
      if (isFunction(signer.signPayload)) {
        result = yield signer.signPayload(payload.toPayload());
      } else if (isFunction(signer.signRaw)) {
        result = yield signer.signRaw(payload.toRaw());
      } else {
        throw new Error("Invalid signer interface, it should implement either signPayload or signRaw (or both)");
      }
      __superGet(Submittable.prototype, this, "addSignature").call(this, address, result.signature, payload.toPayload());
      return result.id;
    });
    __internal__updateSigner = (status, info6) => {
      if (info6 && info6.updateId !== -1) {
        const { options, updateId } = info6;
        const signer = options.signer || api.signer;
        if (signer && isFunction(signer.update)) {
          signer.update(updateId, status);
        }
      }
    };
  }
  return Submittable;
}

// node_modules/@polkadot/api/submittable/createSubmittable.js
function createSubmittable(apiType, api, decorateMethod, registry, blockHash) {
  const Submittable = createClass({ api, apiType, blockHash, decorateMethod });
  return (extrinsic) => new Submittable(registry || api.registry, extrinsic);
}

// node_modules/@polkadot/api/base/find.js
function findCall(registry, callIndex) {
  return registry.findMetaCall(u8aToU8a(callIndex));
}
function findError(registry, errorIndex) {
  return registry.findMetaError(u8aToU8a(errorIndex));
}

// node_modules/@polkadot/types-known/packageDetect.js
detectPackage(packageInfo5, null, [packageInfo4]);

// node_modules/@polkadot/types-known/chain/index.js
var typesChain = {};

// node_modules/@polkadot/types-known/spec/centrifuge-chain.js
var sharedTypes = {
  // Anchor
  AnchorData: {
    anchoredBlock: "u64",
    docRoot: "H256",
    id: "H256"
  },
  DispatchErrorModule: "DispatchErrorModuleU8",
  PreCommitData: {
    expirationBlock: "u64",
    identity: "H256",
    signingRoot: "H256"
  },
  // Fees
  Fee: {
    key: "Hash",
    price: "Balance"
  },
  // MultiAccount
  MultiAccountData: {
    deposit: "Balance",
    depositor: "AccountId",
    signatories: "Vec<AccountId>",
    threshold: "u16"
  },
  // Bridge
  ChainId: "u8",
  DepositNonce: "u64",
  ResourceId: "[u8; 32]",
  "chainbridge::ChainId": "u8",
  // NFT
  RegistryId: "H160",
  TokenId: "U256",
  AssetId: {
    registryId: "RegistryId",
    tokenId: "TokenId"
  },
  AssetInfo: {
    metadata: "Bytes"
  },
  MintInfo: {
    anchorId: "Hash",
    proofs: "Vec<ProofMint>",
    staticHashes: "[Hash; 3]"
  },
  Proof: {
    leafHash: "H256",
    sortedHashes: "H256"
  },
  ProofMint: {
    hashes: "Vec<Hash>",
    property: "Bytes",
    salt: "[u8; 32]",
    value: "Bytes"
  },
  RegistryInfo: {
    fields: "Vec<Bytes>",
    ownerCanBurn: "bool"
  },
  ProxyType: {
    _enum: [
      "Any",
      "NonTransfer",
      "Governance",
      "Staking",
      "NonProxy"
    ]
  }
};
var standaloneTypes = __spreadProps(__spreadValues({}, sharedTypes), {
  AccountInfo: "AccountInfoWithRefCount",
  Address: "LookupSource",
  LookupSource: "IndicesLookupSource",
  Multiplier: "Fixed64",
  RefCount: "RefCountTo259"
});
var versioned = [
  {
    minmax: [240, 243],
    types: __spreadProps(__spreadValues({}, standaloneTypes), {
      ProxyType: {
        _enum: [
          "Any",
          "NonTransfer",
          "Governance",
          "Staking",
          "Vesting"
        ]
      }
    })
  },
  {
    minmax: [244, 999],
    types: __spreadValues({}, standaloneTypes)
  },
  {
    minmax: [1e3, void 0],
    types: __spreadValues({}, sharedTypes)
  }
];

// node_modules/@polkadot/types-known/spec/kusama.js
var sharedTypes2 = {
  CompactAssignments: "CompactAssignmentsWith24",
  DispatchErrorModule: "DispatchErrorModuleU8",
  RawSolution: "RawSolutionWith24",
  Keys: "SessionKeys6",
  ProxyType: {
    _enum: ["Any", "NonTransfer", "Governance", "Staking", "IdentityJudgement", "CancelProxy", "Auction"]
  },
  Weight: "WeightV1"
};
var addrIndicesTypes = {
  AccountInfo: "AccountInfoWithRefCount",
  Address: "LookupSource",
  CompactAssignments: "CompactAssignmentsWith16",
  DispatchErrorModule: "DispatchErrorModuleU8",
  RawSolution: "RawSolutionWith16",
  Keys: "SessionKeys5",
  LookupSource: "IndicesLookupSource",
  ValidatorPrefs: "ValidatorPrefsWithCommission"
};
var addrAccountIdTypes = {
  AccountInfo: "AccountInfoWithRefCount",
  Address: "AccountId",
  CompactAssignments: "CompactAssignmentsWith16",
  DispatchErrorModule: "DispatchErrorModuleU8",
  RawSolution: "RawSolutionWith16",
  Keys: "SessionKeys5",
  LookupSource: "AccountId",
  ValidatorPrefs: "ValidatorPrefsWithCommission"
};
var versioned2 = [
  {
    // 1020 is first CC3
    minmax: [1019, 1031],
    types: __spreadProps(__spreadValues({}, addrIndicesTypes), {
      BalanceLock: "BalanceLockTo212",
      CompactAssignments: "CompactAssignmentsTo257",
      DispatchError: "DispatchErrorTo198",
      DispatchInfo: "DispatchInfoTo244",
      Heartbeat: "HeartbeatTo244",
      IdentityInfo: "IdentityInfoTo198",
      Keys: "SessionKeys5",
      Multiplier: "Fixed64",
      OpenTip: "OpenTipTo225",
      RefCount: "RefCountTo259",
      ReferendumInfo: "ReferendumInfoTo239",
      Scheduled: "ScheduledTo254",
      SlashingSpans: "SlashingSpansTo204",
      StakingLedger: "StakingLedgerTo223",
      Votes: "VotesTo230",
      Weight: "u32"
    })
  },
  {
    minmax: [1032, 1042],
    types: __spreadProps(__spreadValues({}, addrIndicesTypes), {
      BalanceLock: "BalanceLockTo212",
      CompactAssignments: "CompactAssignmentsTo257",
      DispatchInfo: "DispatchInfoTo244",
      Heartbeat: "HeartbeatTo244",
      Keys: "SessionKeys5",
      Multiplier: "Fixed64",
      OpenTip: "OpenTipTo225",
      RefCount: "RefCountTo259",
      ReferendumInfo: "ReferendumInfoTo239",
      Scheduled: "ScheduledTo254",
      SlashingSpans: "SlashingSpansTo204",
      StakingLedger: "StakingLedgerTo223",
      Votes: "VotesTo230",
      Weight: "u32"
    })
  },
  {
    // actual at 1045 (1043-1044 is dev)
    minmax: [1043, 1045],
    types: __spreadProps(__spreadValues({}, addrIndicesTypes), {
      BalanceLock: "BalanceLockTo212",
      CompactAssignments: "CompactAssignmentsTo257",
      DispatchInfo: "DispatchInfoTo244",
      Heartbeat: "HeartbeatTo244",
      Keys: "SessionKeys5",
      Multiplier: "Fixed64",
      OpenTip: "OpenTipTo225",
      RefCount: "RefCountTo259",
      ReferendumInfo: "ReferendumInfoTo239",
      Scheduled: "ScheduledTo254",
      StakingLedger: "StakingLedgerTo223",
      Votes: "VotesTo230",
      Weight: "u32"
    })
  },
  {
    minmax: [1046, 1049],
    types: __spreadProps(__spreadValues(__spreadValues({}, sharedTypes2), addrAccountIdTypes), {
      CompactAssignments: "CompactAssignmentsTo257",
      DispatchInfo: "DispatchInfoTo244",
      Heartbeat: "HeartbeatTo244",
      Multiplier: "Fixed64",
      OpenTip: "OpenTipTo225",
      RefCount: "RefCountTo259",
      ReferendumInfo: "ReferendumInfoTo239",
      Scheduled: "ScheduledTo254",
      StakingLedger: "StakingLedgerTo223",
      Weight: "u32"
    })
  },
  {
    minmax: [1050, 1054],
    types: __spreadProps(__spreadValues(__spreadValues({}, sharedTypes2), addrAccountIdTypes), {
      CompactAssignments: "CompactAssignmentsTo257",
      DispatchInfo: "DispatchInfoTo244",
      Heartbeat: "HeartbeatTo244",
      Multiplier: "Fixed64",
      OpenTip: "OpenTipTo225",
      RefCount: "RefCountTo259",
      ReferendumInfo: "ReferendumInfoTo239",
      Scheduled: "ScheduledTo254",
      StakingLedger: "StakingLedgerTo240",
      Weight: "u32"
    })
  },
  {
    minmax: [1055, 1056],
    types: __spreadProps(__spreadValues(__spreadValues({}, sharedTypes2), addrAccountIdTypes), {
      CompactAssignments: "CompactAssignmentsTo257",
      DispatchInfo: "DispatchInfoTo244",
      Heartbeat: "HeartbeatTo244",
      Multiplier: "Fixed64",
      OpenTip: "OpenTipTo225",
      RefCount: "RefCountTo259",
      Scheduled: "ScheduledTo254",
      StakingLedger: "StakingLedgerTo240",
      Weight: "u32"
    })
  },
  {
    minmax: [1057, 1061],
    types: __spreadProps(__spreadValues(__spreadValues({}, sharedTypes2), addrAccountIdTypes), {
      CompactAssignments: "CompactAssignmentsTo257",
      DispatchInfo: "DispatchInfoTo244",
      Heartbeat: "HeartbeatTo244",
      OpenTip: "OpenTipTo225",
      RefCount: "RefCountTo259",
      // Last 100% known problematic runtime range - this quite possibly need to
      // apply to more runtime ranges that follow, we just don't know how far this
      // should be applied to
      //
      // TL;DR whack-a-mole since this was not histrically checked
      //
      // See https://github.com/polkadot-js/api/issues/5618#issuecomment-1530970316
      Scheduled: "ScheduledTo254"
    })
  },
  {
    minmax: [1062, 2012],
    types: __spreadProps(__spreadValues(__spreadValues({}, sharedTypes2), addrAccountIdTypes), {
      CompactAssignments: "CompactAssignmentsTo257",
      OpenTip: "OpenTipTo225",
      RefCount: "RefCountTo259"
    })
  },
  {
    minmax: [2013, 2022],
    types: __spreadProps(__spreadValues(__spreadValues({}, sharedTypes2), addrAccountIdTypes), {
      CompactAssignments: "CompactAssignmentsTo257",
      RefCount: "RefCountTo259"
    })
  },
  {
    minmax: [2023, 2024],
    types: __spreadProps(__spreadValues(__spreadValues({}, sharedTypes2), addrAccountIdTypes), {
      RefCount: "RefCountTo259"
    })
  },
  {
    minmax: [2025, 2027],
    types: __spreadValues(__spreadValues({}, sharedTypes2), addrAccountIdTypes)
  },
  {
    minmax: [2028, 2029],
    types: __spreadProps(__spreadValues({}, sharedTypes2), {
      AccountInfo: "AccountInfoWithDualRefCount",
      CompactAssignments: "CompactAssignmentsWith16",
      RawSolution: "RawSolutionWith16"
    })
  },
  {
    minmax: [2030, 9e3],
    types: __spreadProps(__spreadValues({}, sharedTypes2), {
      CompactAssignments: "CompactAssignmentsWith16",
      RawSolution: "RawSolutionWith16"
    })
  },
  {
    minmax: [9010, 9099],
    types: __spreadValues(__spreadValues({}, sharedTypes2), mapXcmTypes("V0"))
  },
  {
    // jump from 9100 to 9110, however align with Rococo
    minmax: [9100, 9105],
    types: __spreadValues(__spreadValues({}, sharedTypes2), mapXcmTypes("V1"))
  },
  {
    // metadata v14
    minmax: [9106, void 0],
    types: {
      Weight: "WeightV1"
    }
  }
  // ,
  // {
  //   // weight v2 introduction
  //   minmax: [9300, undefined],
  //   types: {
  //     Weight: 'WeightV2'
  //   }
  // }
];

// node_modules/@polkadot/types-known/spec/node.js
var versioned3 = [
  {
    minmax: [0, void 0],
    types: {
      // nothing, API tracks master
      // (v2 weights are not yet the default)
      Weight: "WeightV2"
    }
  }
];

// node_modules/@polkadot/types-known/spec/node-template.js
var versioned4 = [
  {
    minmax: [0, void 0],
    types: {
      // nothing, API tracks master
      // (v2 weights are not yet the default)
      Weight: "WeightV2"
    }
  }
];

// node_modules/@polkadot/types-known/spec/polkadot.js
var sharedTypes3 = {
  CompactAssignments: "CompactAssignmentsWith16",
  DispatchErrorModule: "DispatchErrorModuleU8",
  RawSolution: "RawSolutionWith16",
  Keys: "SessionKeys6",
  ProxyType: {
    _enum: {
      Any: 0,
      NonTransfer: 1,
      Governance: 2,
      Staking: 3,
      UnusedSudoBalances: 4,
      IdentityJudgement: 5,
      CancelProxy: 6,
      Auction: 7
    }
  },
  Weight: "WeightV1"
};
var addrAccountIdTypes2 = {
  AccountInfo: "AccountInfoWithRefCount",
  Address: "AccountId",
  DispatchErrorModule: "DispatchErrorModuleU8",
  Keys: "SessionKeys5",
  LookupSource: "AccountId",
  ValidatorPrefs: "ValidatorPrefsWithCommission"
};
var versioned5 = [
  {
    minmax: [0, 12],
    types: __spreadProps(__spreadValues(__spreadValues({}, sharedTypes3), addrAccountIdTypes2), {
      CompactAssignments: "CompactAssignmentsTo257",
      OpenTip: "OpenTipTo225",
      RefCount: "RefCountTo259"
    })
  },
  {
    minmax: [13, 22],
    types: __spreadProps(__spreadValues(__spreadValues({}, sharedTypes3), addrAccountIdTypes2), {
      CompactAssignments: "CompactAssignmentsTo257",
      RefCount: "RefCountTo259"
    })
  },
  {
    minmax: [23, 24],
    types: __spreadProps(__spreadValues(__spreadValues({}, sharedTypes3), addrAccountIdTypes2), {
      RefCount: "RefCountTo259"
    })
  },
  {
    minmax: [25, 27],
    types: __spreadValues(__spreadValues({}, sharedTypes3), addrAccountIdTypes2)
  },
  {
    minmax: [28, 29],
    types: __spreadProps(__spreadValues({}, sharedTypes3), {
      AccountInfo: "AccountInfoWithDualRefCount"
    })
  },
  {
    minmax: [30, 9109],
    types: __spreadValues({}, sharedTypes3)
  },
  {
    // metadata v14
    minmax: [9110, void 0],
    types: {
      Weight: "WeightV1"
    }
  }
  // ,
  // {
  //   // weight v2 introduction
  //   minmax: [9300, undefined],
  //   types: {
  //     Weight: 'WeightV2'
  //   }
  // }
];

// node_modules/@polkadot/types-known/spec/rococo.js
var sharedTypes4 = {
  DispatchErrorModule: "DispatchErrorModuleU8",
  FullIdentification: "()",
  // No staking, only session (as per config)
  Keys: "SessionKeys7B",
  Weight: "WeightV1"
};
var versioned6 = [
  {
    minmax: [0, 200],
    types: __spreadProps(__spreadValues({}, sharedTypes4), {
      AccountInfo: "AccountInfoWithDualRefCount",
      Address: "AccountId",
      LookupSource: "AccountId"
    })
  },
  {
    minmax: [201, 214],
    types: __spreadProps(__spreadValues({}, sharedTypes4), {
      AccountInfo: "AccountInfoWithDualRefCount"
    })
  },
  {
    minmax: [215, 228],
    types: __spreadProps(__spreadValues({}, sharedTypes4), {
      Keys: "SessionKeys6"
    })
  },
  {
    minmax: [229, 9099],
    types: __spreadValues(__spreadValues({}, sharedTypes4), mapXcmTypes("V0"))
  },
  {
    minmax: [9100, 9105],
    types: __spreadValues(__spreadValues({}, sharedTypes4), mapXcmTypes("V1"))
  },
  {
    // metadata v14
    minmax: [9106, void 0],
    types: {
      Weight: "WeightV1"
    }
  }
  // ,
  // {
  //   // weight v2 introduction
  //   minmax: [9300, undefined],
  //   types: {
  //     Weight: 'WeightV2'
  //   }
  // }
];

// node_modules/@polkadot/types-known/spec/shell.js
var versioned7 = [
  {
    minmax: [0, void 0],
    types: {
      // nothing, limited runtime
    }
  }
];

// node_modules/@polkadot/types-known/spec/statemine.js
var sharedTypes5 = {
  DispatchErrorModule: "DispatchErrorModuleU8",
  TAssetBalance: "u128",
  ProxyType: {
    _enum: [
      "Any",
      "NonTransfer",
      "CancelProxy",
      "Assets",
      "AssetOwner",
      "AssetManager",
      "Staking"
    ]
  },
  Weight: "WeightV1"
};
var versioned8 = [
  {
    minmax: [0, 3],
    types: __spreadValues(__spreadValues({
      // Enum was modified mid-flight -
      // https://github.com/paritytech/substrate/pull/10382/files#diff-e4e016b33a82268b6208dc974eea841bad47597865a749fee2f937eb6fdf67b4R498
      DispatchError: "DispatchErrorPre6First"
    }, sharedTypes5), mapXcmTypes("V0"))
  },
  {
    minmax: [4, 5],
    types: __spreadValues(__spreadValues({
      // As above, see https://github.com/polkadot-js/api/issues/5301
      DispatchError: "DispatchErrorPre6First"
    }, sharedTypes5), mapXcmTypes("V1"))
  },
  {
    // metadata V14
    minmax: [500, 9999],
    types: {
      Weight: "WeightV1",
      TAssetConversion: "Option<AssetId>"
    }
  },
  {
    minmax: [1e4, void 0],
    types: {
      Weight: "WeightV1"
    }
  }
];

// node_modules/@polkadot/types-known/spec/statemint.js
var sharedTypes6 = {
  DispatchErrorModule: "DispatchErrorModuleU8",
  TAssetBalance: "u128",
  ProxyType: {
    _enum: [
      "Any",
      "NonTransfer",
      "CancelProxy",
      "Assets",
      "AssetOwner",
      "AssetManager",
      "Staking"
    ]
  },
  Weight: "WeightV1"
};
var versioned9 = [
  {
    minmax: [0, 3],
    types: __spreadValues(__spreadValues({
      // Enum was modified mid-flight -
      // https://github.com/paritytech/substrate/pull/10382/files#diff-e4e016b33a82268b6208dc974eea841bad47597865a749fee2f937eb6fdf67b4R498
      DispatchError: "DispatchErrorPre6First"
    }, sharedTypes6), mapXcmTypes("V0"))
  },
  {
    minmax: [4, 5],
    types: __spreadValues(__spreadValues({
      // As above, see https://github.com/polkadot-js/api/issues/5301
      DispatchError: "DispatchErrorPre6First"
    }, sharedTypes6), mapXcmTypes("V1"))
  },
  {
    // metadata V14
    minmax: [500, void 0],
    types: {
      Weight: "WeightV1",
      TAssetConversion: "Option<AssetId>"
    }
  }
  // ,
  // {
  //   // weight v2 introduction
  //   minmax: [9300, undefined],
  //   types: {
  //     Weight: 'WeightV2'
  //   }
  // }
];

// node_modules/@polkadot/types-known/spec/westend.js
var sharedTypes7 = {
  // 16 validators
  CompactAssignments: "CompactAssignmentsWith16",
  DispatchErrorModule: "DispatchErrorModuleU8",
  RawSolution: "RawSolutionWith16",
  // general
  Keys: "SessionKeys6",
  ProxyType: {
    _enum: ["Any", "NonTransfer", "Staking", "SudoBalances", "IdentityJudgement", "CancelProxy"]
  },
  Weight: "WeightV1"
};
var addrAccountIdTypes3 = {
  AccountInfo: "AccountInfoWithRefCount",
  Address: "AccountId",
  CompactAssignments: "CompactAssignmentsWith16",
  DispatchErrorModule: "DispatchErrorModuleU8",
  LookupSource: "AccountId",
  Keys: "SessionKeys5",
  RawSolution: "RawSolutionWith16",
  ValidatorPrefs: "ValidatorPrefsWithCommission"
};
var versioned10 = [
  {
    minmax: [1, 2],
    types: __spreadProps(__spreadValues(__spreadValues({}, sharedTypes7), addrAccountIdTypes3), {
      CompactAssignments: "CompactAssignmentsTo257",
      DispatchInfo: "DispatchInfoTo244",
      Heartbeat: "HeartbeatTo244",
      Multiplier: "Fixed64",
      OpenTip: "OpenTipTo225",
      RefCount: "RefCountTo259",
      Weight: "u32"
    })
  },
  {
    minmax: [3, 22],
    types: __spreadProps(__spreadValues(__spreadValues({}, sharedTypes7), addrAccountIdTypes3), {
      CompactAssignments: "CompactAssignmentsTo257",
      DispatchInfo: "DispatchInfoTo244",
      Heartbeat: "HeartbeatTo244",
      OpenTip: "OpenTipTo225",
      RefCount: "RefCountTo259"
    })
  },
  {
    minmax: [23, 42],
    types: __spreadProps(__spreadValues(__spreadValues({}, sharedTypes7), addrAccountIdTypes3), {
      CompactAssignments: "CompactAssignmentsTo257",
      DispatchInfo: "DispatchInfoTo244",
      Heartbeat: "HeartbeatTo244",
      RefCount: "RefCountTo259"
    })
  },
  {
    minmax: [43, 44],
    types: __spreadProps(__spreadValues(__spreadValues({}, sharedTypes7), addrAccountIdTypes3), {
      DispatchInfo: "DispatchInfoTo244",
      Heartbeat: "HeartbeatTo244",
      RefCount: "RefCountTo259"
    })
  },
  {
    minmax: [45, 47],
    types: __spreadValues(__spreadValues({}, sharedTypes7), addrAccountIdTypes3)
  },
  {
    minmax: [48, 49],
    types: __spreadProps(__spreadValues({}, sharedTypes7), {
      AccountInfo: "AccountInfoWithDualRefCount"
    })
  },
  {
    minmax: [50, 9099],
    types: __spreadValues(__spreadValues({}, sharedTypes7), mapXcmTypes("V0"))
  },
  {
    minmax: [9100, 9105],
    types: __spreadValues(__spreadValues({}, sharedTypes7), mapXcmTypes("V1"))
  },
  {
    // metadata v14
    minmax: [9106, void 0],
    types: {
      Weight: "WeightV1"
    }
  }
  // ,
  // {
  //   // weight v2 introduction
  //   minmax: [9300, undefined],
  //   types: {
  //     Weight: 'WeightV2'
  //   }
  // }
];

// node_modules/@polkadot/types-known/spec/westmint.js
var sharedTypes8 = {
  DispatchErrorModule: "DispatchErrorModuleU8",
  TAssetBalance: "u128",
  ProxyType: {
    _enum: [
      "Any",
      "NonTransfer",
      "CancelProxy",
      "Assets",
      "AssetOwner",
      "AssetManager",
      "Staking"
    ]
  },
  Weight: "WeightV1"
};
var versioned11 = [
  {
    minmax: [0, 3],
    types: __spreadValues(__spreadValues({
      // Enum was modified mid-flight -
      // https://github.com/paritytech/substrate/pull/10382/files#diff-e4e016b33a82268b6208dc974eea841bad47597865a749fee2f937eb6fdf67b4R498
      DispatchError: "DispatchErrorPre6First"
    }, sharedTypes8), mapXcmTypes("V0"))
  },
  {
    minmax: [4, 5],
    types: __spreadValues(__spreadValues({
      // As above, see https://github.com/polkadot-js/api/issues/5301
      DispatchError: "DispatchErrorPre6First"
    }, sharedTypes8), mapXcmTypes("V1"))
  },
  {
    // metadata V14
    minmax: [500, 9434],
    types: {
      Weight: "WeightV1",
      TAssetConversion: "Option<AssetId>"
    }
  },
  {
    minmax: [9435, void 0],
    types: {
      Weight: "WeightV1"
    }
  }
];

// node_modules/@polkadot/types-known/spec/index.js
var typesSpec = {
  "centrifuge-chain": versioned,
  kusama: versioned2,
  node: versioned3,
  "node-template": versioned4,
  polkadot: versioned5,
  rococo: versioned6,
  shell: versioned7,
  statemine: versioned8,
  statemint: versioned9,
  westend: versioned10,
  westmint: versioned11
};

// node_modules/@polkadot/types-known/upgrades/e2e/index.js
var e2e_exports = {};
__export(e2e_exports, {
  kusama: () => upgrades,
  polkadot: () => upgrades2,
  westend: () => upgrades3
});

// node_modules/@polkadot/types-known/upgrades/e2e/kusama.js
var upgrades = [
  [
    0,
    1020,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        1
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    26669,
    1021,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        1
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    38245,
    1022,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        1
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    54248,
    1023,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        1
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    59659,
    1024,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        1
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    67651,
    1025,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        1
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    82191,
    1027,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        1
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    83238,
    1028,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        1
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    101503,
    1029,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        1
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    203466,
    1030,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        1
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    295787,
    1031,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        1
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    461692,
    1032,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        1
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    504329,
    1033,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        1
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    569327,
    1038,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        1
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    587687,
    1039,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    653183,
    1040,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    693488,
    1042,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    901442,
    1045,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1375086,
    1050,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1445458,
    1051,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1472960,
    1052,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1475648,
    1053,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1491596,
    1054,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1574408,
    1055,
    [
      [
        "0xdf6acb689907609b",
        2
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        1
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    2064961,
    1058,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    2201991,
    1062,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    2671528,
    2005,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    2704202,
    2007,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    2728002,
    2008,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    2832534,
    2011,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    2962294,
    2012,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    324e4,
    2013,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    3274408,
    2015,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    3323565,
    2019,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    3534175,
    2022,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    3860281,
    2023,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    4143129,
    2024,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    4401242,
    2025,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    4841367,
    2026,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    5961600,
    2027,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    6137912,
    2028,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    6561855,
    2029,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    7100891,
    2030,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    7468792,
    9010,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    7668600,
    9030,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    7812476,
    9040,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    8010981,
    9050,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    8073833,
    9070,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    8555825,
    9080,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    8945245,
    9090,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    9611377,
    9100,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    9625129,
    9111,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    9866422,
    9122,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    10403784,
    9130,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    10960765,
    9150,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    11006614,
    9151,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    11404482,
    9160,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    11601803,
    9170,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    12008022,
    9180,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    12405451,
    9190,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    12665416,
    9200,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    12909508,
    9220,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    13109752,
    9230,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    13555777,
    9250,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    13727747,
    9260,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    14248044,
    9271,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ],
  [
    14433840,
    9280,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ],
      [
        "0xf3ff14d5ab527059",
        1
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ],
  [
    14645900,
    9291,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ],
      [
        "0xf3ff14d5ab527059",
        1
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ],
  [
    15048375,
    9300,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ],
      [
        "0xf3ff14d5ab527059",
        1
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ],
  [
    15426015,
    9320,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        2
      ],
      [
        "0xf3ff14d5ab527059",
        2
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ],
  [
    15680713,
    9340,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        2
      ],
      [
        "0xf3ff14d5ab527059",
        2
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ],
  [
    15756296,
    9350,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        2
      ],
      [
        "0xf3ff14d5ab527059",
        2
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ]
];

// node_modules/@polkadot/types-known/upgrades/e2e/polkadot.js
var upgrades2 = [
  [
    0,
    0,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    29231,
    1,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    188836,
    5,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    199405,
    6,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    214264,
    7,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    244358,
    8,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    303079,
    9,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    314201,
    10,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    342400,
    11,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    443963,
    12,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    528470,
    13,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    687751,
    14,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    746085,
    15,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    787923,
    16,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    799302,
    17,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1205128,
    18,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1603423,
    23,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1733218,
    24,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    2005673,
    25,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    2436698,
    26,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    3613564,
    27,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    3899547,
    28,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    4345767,
    29,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    4876134,
    30,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    5661442,
    9050,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    6321619,
    9080,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    6713249,
    9090,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    7217907,
    9100,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    7229126,
    9110,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    7560558,
    9122,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    8115869,
    9140,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    8638103,
    9151,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    9280179,
    9170,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    9738717,
    9180,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    10156856,
    9190,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    10458576,
    9200,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    10655116,
    9220,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    10879371,
    9230,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    11328884,
    9250,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    11532856,
    9260,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    11933818,
    9270,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    12217535,
    9280,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ],
      [
        "0xf3ff14d5ab527059",
        1
      ]
    ]
  ],
  [
    12245277,
    9281,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ],
      [
        "0xf3ff14d5ab527059",
        1
      ]
    ]
  ],
  [
    12532644,
    9291,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ],
      [
        "0xf3ff14d5ab527059",
        1
      ]
    ]
  ],
  [
    12876189,
    9300,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ],
      [
        "0xf3ff14d5ab527059",
        1
      ]
    ]
  ]
];

// node_modules/@polkadot/types-known/upgrades/e2e/westend.js
var upgrades3 = [
  [
    214356,
    4,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        1
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    392764,
    7,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    409740,
    8,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    809976,
    20,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    877581,
    24,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    879238,
    25,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    889472,
    26,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    902937,
    27,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    932751,
    28,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    991142,
    29,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1030162,
    31,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1119657,
    32,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1199282,
    33,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1342534,
    34,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1392263,
    35,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1431703,
    36,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1433369,
    37,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    1490972,
    41,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    2087397,
    43,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    2316688,
    44,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    2549864,
    45,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    3925782,
    46,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    3925843,
    47,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    4207800,
    48,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    4627944,
    49,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    5124076,
    50,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    5478664,
    900,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    5482450,
    9e3,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        4
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    5584305,
    9010,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    5784566,
    9030,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    5879822,
    9031,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    5896856,
    9032,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    5897316,
    9033,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    6117927,
    9050,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    6210274,
    9070,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        2
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    6379314,
    9080,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        2
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    6979141,
    9090,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    7568453,
    9100,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    7766394,
    9111,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    7911691,
    9120,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    7968866,
    9121,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    7982889,
    9122,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    8514322,
    9130,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    9091726,
    9140,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    9091774,
    9150,
    [
      [
        "0xdf6acb689907609b",
        3
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        1
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    9406726,
    9160,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    9921066,
    9170,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    10007115,
    9180,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        5
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    10480973,
    9190,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    10578091,
    9200,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    10678509,
    9210,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    10811001,
    9220,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    11096116,
    9230,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    11409279,
    9250,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    11584820,
    9251,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    11716837,
    9260,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    11876919,
    9261,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ]
    ]
  ],
  [
    11987927,
    9270,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ],
  [
    12077324,
    9271,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ],
  [
    12301871,
    9280,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ],
      [
        "0xf3ff14d5ab527059",
        1
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ],
  [
    12604343,
    9290,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        2
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ],
      [
        "0xf3ff14d5ab527059",
        1
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ],
  [
    12841034,
    9300,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ],
      [
        "0xf3ff14d5ab527059",
        1
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ],
  [
    13128237,
    9310,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        1
      ],
      [
        "0xf3ff14d5ab527059",
        1
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ],
  [
    13272363,
    9320,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        2
      ],
      [
        "0xf3ff14d5ab527059",
        2
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ],
  [
    13483497,
    9330,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        2
      ],
      [
        "0xf3ff14d5ab527059",
        2
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ],
  [
    13649433,
    9340,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        2
      ],
      [
        "0xf3ff14d5ab527059",
        2
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ],
  [
    13761100,
    9350,
    [
      [
        "0xdf6acb689907609b",
        4
      ],
      [
        "0x37e397fc7c91f5e4",
        1
      ],
      [
        "0x40fe3ad401f8959a",
        6
      ],
      [
        "0xd2bc9897eed08f15",
        3
      ],
      [
        "0xf78b278be53f454c",
        2
      ],
      [
        "0xaf2c0297a23e6d3d",
        3
      ],
      [
        "0x49eaaf1b548a0cb0",
        1
      ],
      [
        "0x91d5df18b0d2cf58",
        1
      ],
      [
        "0xed99c5acb25eedf5",
        3
      ],
      [
        "0xcbca25e39f142387",
        2
      ],
      [
        "0x687ad44ad37f03c2",
        1
      ],
      [
        "0xab3c0572291feb8b",
        1
      ],
      [
        "0xbc9d89904f5b923f",
        1
      ],
      [
        "0x37c8bb1350a9a2a8",
        2
      ],
      [
        "0xf3ff14d5ab527059",
        2
      ],
      [
        "0x17a6bc0d0062aeb3",
        1
      ]
    ]
  ]
];

// node_modules/@polkadot/types-known/upgrades/index.js
var NET_EXTRA = {
  westend: {
    genesisHash: ["0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e"]
  }
};
function mapRaw([network, versions]) {
  const chain = selectableNetworks.find((n) => n.network === network) || NET_EXTRA[network];
  if (!chain) {
    throw new Error(`Unable to find info for chain ${network}`);
  }
  return {
    genesisHash: hexToU8a(chain.genesisHash[0]),
    network,
    versions: versions.map(([blockNumber, specVersion, apis]) => ({
      apis,
      blockNumber: new import_bn.default(blockNumber),
      specVersion: new import_bn.default(specVersion)
    }))
  };
}
var upgrades4 = Object.entries(e2e_exports).map(mapRaw);

// node_modules/@polkadot/types-known/util.js
function withNames(chainName, specName, fn) {
  return fn(chainName.toString(), specName.toString());
}
function filterVersions(versions = [], specVersion) {
  return versions.filter(({ minmax: [min, max] }) => (min === void 0 || min === null || specVersion >= min) && (max === void 0 || max === null || specVersion <= max)).reduce((result, { types: types2 }) => __spreadValues(__spreadValues({}, result), types2), {});
}
function getSpecExtensions({ knownTypes: knownTypes2 }, chainName, specName) {
  return withNames(chainName, specName, (c, s) => __spreadValues(__spreadValues({}, knownTypes2.typesBundle?.spec?.[s]?.signedExtensions ?? {}), knownTypes2.typesBundle?.chain?.[c]?.signedExtensions ?? {}));
}
function getSpecTypes({ knownTypes: knownTypes2 }, chainName, specName, specVersion) {
  const _specVersion = bnToBn(specVersion).toNumber();
  return withNames(chainName, specName, (c, s) => __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, filterVersions(typesSpec[s], _specVersion)), filterVersions(typesChain[c], _specVersion)), filterVersions(knownTypes2.typesBundle?.spec?.[s]?.types, _specVersion)), filterVersions(knownTypes2.typesBundle?.chain?.[c]?.types, _specVersion)), knownTypes2.typesSpec?.[s] ?? {}), knownTypes2.typesChain?.[c] ?? {}), knownTypes2.types ?? {}));
}
function getSpecHasher({ knownTypes: knownTypes2 }, chainName, specName) {
  return withNames(chainName, specName, (c, s) => knownTypes2.hasher || knownTypes2.typesBundle?.chain?.[c]?.hasher || knownTypes2.typesBundle?.spec?.[s]?.hasher || null);
}
function getSpecRpc({ knownTypes: knownTypes2 }, chainName, specName) {
  return withNames(chainName, specName, (c, s) => __spreadValues(__spreadValues({}, knownTypes2.typesBundle?.spec?.[s]?.rpc ?? {}), knownTypes2.typesBundle?.chain?.[c]?.rpc ?? {}));
}
function getSpecRuntime({ knownTypes: knownTypes2 }, chainName, specName) {
  return withNames(chainName, specName, (c, s) => __spreadValues(__spreadValues({}, knownTypes2.typesBundle?.spec?.[s]?.runtime ?? {}), knownTypes2.typesBundle?.chain?.[c]?.runtime ?? {}));
}
function getSpecAlias({ knownTypes: knownTypes2 }, chainName, specName) {
  return withNames(chainName, specName, (c, s) => __spreadValues(__spreadValues(__spreadValues({}, knownTypes2.typesBundle?.spec?.[s]?.alias ?? {}), knownTypes2.typesBundle?.chain?.[c]?.alias ?? {}), knownTypes2.typesAlias ?? {}));
}
function getUpgradeVersion(genesisHash, blockNumber) {
  const known2 = upgrades4.find((u) => genesisHash.eq(u.genesisHash));
  return known2 ? [
    known2.versions.reduce((last, version) => {
      return blockNumber.gt(version.blockNumber) ? version : last;
    }, void 0),
    known2.versions.find((version) => blockNumber.lte(version.blockNumber))
  ] : [void 0, void 0];
}

// node_modules/@polkadot/api/util/augmentObject.js
var l12 = logger("api/augment");
function logLength(type, values, and = []) {
  return values.length ? ` ${values.length} ${type}${and.length ? " and" : ""}` : "";
}
function logValues(type, values) {
  return values.length ? `
	${type.padStart(7)}: ${values.sort().join(", ")}` : "";
}
function warn(prefix2, type, [added, removed]) {
  if (added.length || removed.length) {
    l12.warn(`api.${prefix2}: Found${logLength("added", added, removed)}${logLength("removed", removed)} ${type}:${logValues("added", added)}${logValues("removed", removed)}`);
  }
}
function findSectionExcludes(a, b) {
  return a.filter((s) => !b.includes(s));
}
function findSectionIncludes(a, b) {
  return a.filter((s) => b.includes(s));
}
function extractSections(src, dst) {
  const srcSections = Object.keys(src);
  const dstSections = Object.keys(dst);
  return [
    findSectionExcludes(srcSections, dstSections),
    findSectionExcludes(dstSections, srcSections)
  ];
}
function findMethodExcludes(src, dst) {
  const srcSections = Object.keys(src);
  const dstSections = findSectionIncludes(Object.keys(dst), srcSections);
  const excludes = [];
  for (let s = 0, scount = dstSections.length; s < scount; s++) {
    const section2 = dstSections[s];
    const srcMethods = Object.keys(src[section2]);
    const dstMethods = Object.keys(dst[section2]);
    for (let d = 0, mcount = dstMethods.length; d < mcount; d++) {
      const method = dstMethods[d];
      if (!srcMethods.includes(method)) {
        excludes.push(`${section2}.${method}`);
      }
    }
  }
  return excludes;
}
function extractMethods(src, dst) {
  return [
    findMethodExcludes(dst, src),
    findMethodExcludes(src, dst)
  ];
}
function augmentObject(prefix2, src, dst, fromEmpty = false) {
  fromEmpty && objectClear(dst);
  if (prefix2 && Object.keys(dst).length) {
    warn(prefix2, "modules", extractSections(src, dst));
    warn(prefix2, "calls", extractMethods(src, dst));
  }
  const sections = Object.keys(src);
  for (let i = 0, count = sections.length; i < count; i++) {
    const section2 = sections[i];
    const methods = src[section2];
    if (!dst[section2]) {
      dst[section2] = {};
    }
    lazyMethods(dst[section2], Object.keys(methods), (m) => methods[m]);
  }
  return dst;
}

// node_modules/@polkadot/api/util/validate.js
function sig({ lookup }, { method, section: section2 }, args) {
  return `${section2}.${method}(${args.map((a) => lookup.getTypeDef(a).type).join(", ")})`;
}
function extractStorageArgs(registry, creator, _args) {
  const args = _args.filter((a) => !isUndefined(a));
  if (creator.meta.type.isPlain) {
    if (args.length !== 0) {
      throw new Error(`${sig(registry, creator, [])} does not take any arguments, ${args.length} found`);
    }
  } else {
    const { hashers, key } = creator.meta.type.asMap;
    const keys2 = hashers.length === 1 ? [key] : registry.lookup.getSiType(key).def.asTuple.map((t) => t);
    if (args.length !== keys2.length) {
      throw new Error(`${sig(registry, creator, keys2)} is a map, requiring ${keys2.length} arguments, ${args.length} found`);
    }
  }
  return [creator, args];
}

// node_modules/@polkadot/api/node_modules/eventemitter3/index.mjs
var import_index2 = __toESM(require_eventemitter32(), 1);

// node_modules/@polkadot/api/base/Events.js
var Events = class {
  __internal__eventemitter = new import_index2.default();
  emit(type, ...args) {
    return this.__internal__eventemitter.emit(type, ...args);
  }
  /**
   * @description Attach an eventemitter handler to listen to a specific event
   *
   * @param type The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`
   * @param handler The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.on('connected', (): void => {
   *   console.log('API has been connected to the endpoint');
   * });
   *
   * api.on('disconnected', (): void => {
   *   console.log('API has been disconnected from the endpoint');
   * });
   * ```
   */
  on(type, handler) {
    this.__internal__eventemitter.on(type, handler);
    return this;
  }
  /**
   * @description Remove the given eventemitter handler
   *
   * @param type The type of event the callback was attached to. Available events are `connected`, `disconnected`, `ready` and `error`
   * @param handler The callback to unregister.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * const handler = (): void => {
   *  console.log('Connected !);
   * };
   *
   * // Start listening
   * api.on('connected', handler);
   *
   * // Stop listening
   * api.off('connected', handler);
   * ```
   */
  off(type, handler) {
    this.__internal__eventemitter.removeListener(type, handler);
    return this;
  }
  /**
   * @description Attach an one-time eventemitter handler to listen to a specific event
   *
   * @param type The type of event to listen to. Available events are `connected`, `disconnected`, `ready` and `error`
   * @param handler The callback to be called when the event fires. Depending on the event type, it could fire with additional arguments.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.once('connected', (): void => {
   *   console.log('API has been connected to the endpoint');
   * });
   *
   * api.once('disconnected', (): void => {
   *   console.log('API has been disconnected from the endpoint');
   * });
   * ```
   */
  once(type, handler) {
    this.__internal__eventemitter.once(type, handler);
    return this;
  }
};

// node_modules/@polkadot/api/base/Decorate.js
var PAGE_SIZE_K2 = 1e3;
var PAGE_SIZE_V = 250;
var PAGE_SIZE_Q = 50;
var l13 = logger("api/init");
var instanceCounter = 0;
function getAtQueryFn(api, { method, section: section2 }) {
  return assertReturn(api.rx.query[section2] && api.rx.query[section2][method], () => `query.${section2}.${method} is not available in this version of the metadata`);
}
var Decorate = class extends Events {
  __internal__instanceId;
  __internal__runtimeLog = {};
  __internal__registry;
  __internal__storageGetQ = [];
  __internal__storageSubQ = [];
  // HACK Use BN import so decorateDerive works... yes, wtf.
  __phantom = new import_bn.default(0);
  _type;
  _call = {};
  _consts = {};
  _derive;
  _errors = {};
  _events = {};
  _extrinsics;
  _extrinsicType = GenericExtrinsic.LATEST_EXTRINSIC_VERSION;
  _genesisHash;
  _isConnected;
  _isReady = false;
  _query = {};
  _queryMulti;
  _rpc;
  _rpcCore;
  _runtimeMap = {};
  _runtimeChain;
  _runtimeMetadata;
  _runtimeVersion;
  _rx = { call: {}, consts: {}, query: {}, tx: {} };
  _options;
  /**
   * This is the one and only method concrete children classes need to implement.
   * It's a higher-order function, which takes one argument
   * `method: Method extends (...args: any[]) => Observable<any>`
   * (and one optional `options`), and should return the user facing method.
   * For example:
   * - For ApiRx, `decorateMethod` should just be identity, because the input
   * function is already an Observable
   * - For ApiPromise, `decorateMethod` should return a function that takes all
   * the parameters from `method`, adds an optional `callback` argument, and
   * returns a Promise.
   *
   * We could easily imagine other user-facing interfaces, which are simply
   * implemented by transforming the Observable to Stream/Iterator/Kefir/Bacon
   * via `decorateMethod`.
   */
  _decorateMethod;
  /**
   * @description Create an instance of the class
   *
   * @param options Options object to create API instance or a Provider instance
   *
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/promise';
   *
   * const api = new Api().isReady();
   *
   * api.rpc.subscribeNewHeads((header) => {
   *   console.log(`new block #${header.number.toNumber()}`);
   * });
   * ```
   */
  constructor(options, type, decorateMethod) {
    super();
    this.__internal__instanceId = `${++instanceCounter}`;
    this.__internal__registry = options.source?.registry || options.registry || new TypeRegistry();
    this._rx.callAt = (blockHash, knownVersion) => from(this.at(blockHash, knownVersion)).pipe(map((a) => a.rx.call));
    this._rx.queryAt = (blockHash, knownVersion) => from(this.at(blockHash, knownVersion)).pipe(map((a) => a.rx.query));
    this._rx.registry = this.__internal__registry;
    this._decorateMethod = decorateMethod;
    this._options = options;
    this._type = type;
    const provider = options.source ? options.source._rpcCore.provider.isClonable ? options.source._rpcCore.provider.clone() : options.source._rpcCore.provider : options.provider || new WsProvider();
    this._rpcCore = new RpcCore(this.__internal__instanceId, this.__internal__registry, {
      isPedantic: this._options.isPedantic,
      provider,
      userRpc: this._options.rpc
    });
    this._isConnected = new BehaviorSubject(this._rpcCore.provider.isConnected);
    this._rx.hasSubscriptions = this._rpcCore.provider.hasSubscriptions;
  }
  /**
   * @description Return the current used registry
   */
  get registry() {
    return this.__internal__registry;
  }
  /**
   * @description Creates an instance of a type as registered
   */
  createType(type, ...params) {
    return this.__internal__registry.createType(type, ...params);
  }
  /**
   * @description Register additional user-defined of chain-specific types in the type registry
   */
  registerTypes(types2) {
    types2 && this.__internal__registry.register(types2);
  }
  /**
   * @returns `true` if the API operates with subscriptions
   */
  get hasSubscriptions() {
    return this._rpcCore.provider.hasSubscriptions;
  }
  /**
   * @returns `true` if the API decorate multi-key queries
   */
  get supportMulti() {
    return this._rpcCore.provider.hasSubscriptions || !!this._rpcCore.state.queryStorageAt;
  }
  _emptyDecorated(registry, blockHash) {
    return {
      call: {},
      consts: {},
      errors: {},
      events: {},
      query: {},
      registry,
      rx: {
        call: {},
        query: {}
      },
      tx: createSubmittable(this._type, this._rx, this._decorateMethod, registry, blockHash)
    };
  }
  _createDecorated(registry, fromEmpty, decoratedApi, blockHash) {
    if (!decoratedApi) {
      decoratedApi = this._emptyDecorated(registry.registry, blockHash);
    }
    if (fromEmpty || !registry.decoratedMeta) {
      registry.decoratedMeta = expandMetadata(registry.registry, registry.metadata);
    }
    const runtime31 = this._decorateCalls(registry, this._decorateMethod, blockHash);
    const runtimeRx = this._decorateCalls(registry, this._rxDecorateMethod, blockHash);
    const storage = this._decorateStorage(registry.decoratedMeta, this._decorateMethod, blockHash);
    const storageRx = this._decorateStorage(registry.decoratedMeta, this._rxDecorateMethod, blockHash);
    augmentObject("consts", registry.decoratedMeta.consts, decoratedApi.consts, fromEmpty);
    augmentObject("errors", registry.decoratedMeta.errors, decoratedApi.errors, fromEmpty);
    augmentObject("events", registry.decoratedMeta.events, decoratedApi.events, fromEmpty);
    augmentObject("query", storage, decoratedApi.query, fromEmpty);
    augmentObject("query", storageRx, decoratedApi.rx.query, fromEmpty);
    augmentObject("call", runtime31, decoratedApi.call, fromEmpty);
    augmentObject("call", runtimeRx, decoratedApi.rx.call, fromEmpty);
    decoratedApi.findCall = (callIndex) => findCall(registry.registry, callIndex);
    decoratedApi.findError = (errorIndex) => findError(registry.registry, errorIndex);
    decoratedApi.queryMulti = blockHash ? this._decorateMultiAt(decoratedApi, this._decorateMethod, blockHash) : this._decorateMulti(this._decorateMethod);
    decoratedApi.runtimeVersion = registry.runtimeVersion;
    return {
      createdAt: blockHash,
      decoratedApi,
      decoratedMeta: registry.decoratedMeta
    };
  }
  _injectMetadata(registry, fromEmpty = false) {
    if (fromEmpty || !registry.decoratedApi) {
      registry.decoratedApi = this._emptyDecorated(registry.registry);
    }
    const { decoratedApi, decoratedMeta } = this._createDecorated(registry, fromEmpty, registry.decoratedApi);
    this._call = decoratedApi.call;
    this._consts = decoratedApi.consts;
    this._errors = decoratedApi.errors;
    this._events = decoratedApi.events;
    this._query = decoratedApi.query;
    this._rx.call = decoratedApi.rx.call;
    this._rx.query = decoratedApi.rx.query;
    const tx = this._decorateExtrinsics(decoratedMeta, this._decorateMethod);
    const rxtx = this._decorateExtrinsics(decoratedMeta, this._rxDecorateMethod);
    if (fromEmpty || !this._extrinsics) {
      this._extrinsics = tx;
      this._rx.tx = rxtx;
    } else {
      augmentObject("tx", tx, this._extrinsics, false);
      augmentObject(null, rxtx, this._rx.tx, false);
    }
    augmentObject(null, decoratedMeta.consts, this._rx.consts, fromEmpty);
    this.emit("decorated");
  }
  /**
   * @deprecated
   * backwards compatible endpoint for metadata injection, may be removed in the future (However, it is still useful for testing injection)
   */
  injectMetadata(metadata, fromEmpty, registry) {
    this._injectMetadata({ counter: 0, metadata, registry: registry || this.__internal__registry, runtimeVersion: this.__internal__registry.createType("RuntimeVersionPartial") }, fromEmpty);
  }
  _decorateFunctionMeta(input, output) {
    output.meta = input.meta;
    output.method = input.method;
    output.section = input.section;
    output.toJSON = input.toJSON;
    if (input.callIndex) {
      output.callIndex = input.callIndex;
    }
    return output;
  }
  // Filter all RPC methods based on the results of the rpc_methods call. We do this in the following
  // manner to cater for both old and new:
  //   - when the number of entries are 0, only remove the ones with isOptional (account & contracts)
  //   - when non-zero, remove anything that is not in the array (we don't do this)
  _filterRpc(methods, additional) {
    if (Object.keys(additional).length !== 0) {
      this._rpcCore.addUserInterfaces(additional);
      this._decorateRpc(this._rpcCore, this._decorateMethod, this._rpc);
      this._decorateRpc(this._rpcCore, this._rxDecorateMethod, this._rx.rpc);
    }
    const sectionMap = {};
    for (let i = 0, count = methods.length; i < count; i++) {
      const [section2] = methods[i].split("_");
      sectionMap[section2] = true;
    }
    const sections = Object.keys(sectionMap);
    for (let i = 0, count = sections.length; i < count; i++) {
      const nameA = stringUpperFirst(sections[i]);
      const nameB = `${nameA}Api`;
      this._runtimeMap[blake2AsHex(nameA, 64)] = nameA;
      this._runtimeMap[blake2AsHex(nameB, 64)] = nameB;
    }
    this._filterRpcMethods(methods);
  }
  _filterRpcMethods(exposed) {
    const hasResults = exposed.length !== 0;
    const allKnown = [...this._rpcCore.mapping.entries()];
    const allKeys = [];
    const count = allKnown.length;
    for (let i = 0; i < count; i++) {
      const [, { alias: alias2, endpoint, method, pubsub, section: section2 }] = allKnown[i];
      allKeys.push(`${section2}_${method}`);
      if (pubsub) {
        allKeys.push(`${section2}_${pubsub[1]}`);
        allKeys.push(`${section2}_${pubsub[2]}`);
      }
      if (alias2) {
        allKeys.push(...alias2);
      }
      if (endpoint) {
        allKeys.push(endpoint);
      }
    }
    const unknown = exposed.filter((k) => !allKeys.includes(k) && !k.includes("_unstable_"));
    if (unknown.length && !this._options.noInitWarn) {
      l13.warn(`RPC methods not decorated: ${unknown.join(", ")}`);
    }
    for (let i = 0; i < count; i++) {
      const [k, { method, section: section2 }] = allKnown[i];
      if (hasResults && !exposed.includes(k) && k !== "rpc_methods") {
        if (this._rpc[section2]) {
          delete this._rpc[section2][method];
          delete this._rx.rpc[section2][method];
        }
      }
    }
  }
  _rpcSubmitter(decorateMethod) {
    const method = (method2, ...params) => {
      return from(this._rpcCore.provider.send(method2, params));
    };
    return decorateMethod(method);
  }
  _decorateRpc(rpc18, decorateMethod, input = this._rpcSubmitter(decorateMethod)) {
    const out = input;
    const decorateFn = (section2, method) => {
      const source = rpc18[section2][method];
      const fn = decorateMethod(source, { methodName: method });
      fn.meta = source.meta;
      fn.raw = decorateMethod(source.raw, { methodName: method });
      return fn;
    };
    for (let s = 0, scount = rpc18.sections.length; s < scount; s++) {
      const section2 = rpc18.sections[s];
      if (!Object.prototype.hasOwnProperty.call(out, section2)) {
        const methods = Object.keys(rpc18[section2]);
        const decorateInternal = (method) => decorateFn(section2, method);
        for (let m = 0, mcount = methods.length; m < mcount; m++) {
          const method = methods[m];
          if (this.hasSubscriptions || !(method.startsWith("subscribe") || method.startsWith("unsubscribe"))) {
            if (!Object.prototype.hasOwnProperty.call(out, section2)) {
              out[section2] = {};
            }
            lazyMethod(out[section2], method, decorateInternal);
          }
        }
      }
    }
    return out;
  }
  // add all definition entries
  _addRuntimeDef(result, additional) {
    if (!additional) {
      return;
    }
    const entries = Object.entries(additional);
    for (let j = 0, ecount = entries.length; j < ecount; j++) {
      const [key, defs] = entries[j];
      if (result[key]) {
        for (let k = 0, dcount = defs.length; k < dcount; k++) {
          const def = defs[k];
          const prev = result[key].find(({ version }) => def.version === version);
          if (prev) {
            objectSpread(prev.methods, def.methods);
          } else {
            result[key].push(def);
          }
        }
      } else {
        result[key] = defs;
      }
    }
  }
  // extract all runtime definitions
  _getRuntimeDefs(registry, specName, chain = "") {
    const result = {};
    const defValues = Object.values(definitions_exports);
    for (let i = 0, count = defValues.length; i < count; i++) {
      this._addRuntimeDef(result, defValues[i].runtime);
    }
    this._addRuntimeDef(result, getSpecRuntime(registry, chain, specName));
    this._addRuntimeDef(result, this._options.runtime);
    return Object.entries(result);
  }
  // pre-metadata decoration
  _decorateCalls({ registry, runtimeVersion: { apis, specName, specVersion } }, decorateMethod, blockHash) {
    const result = {};
    const named = {};
    const hashes = {};
    const sections = this._getRuntimeDefs(registry, specName, this._runtimeChain);
    const older = [];
    const implName = `${specName.toString()}/${specVersion.toString()}`;
    const hasLogged = this.__internal__runtimeLog[implName] || false;
    this.__internal__runtimeLog[implName] = true;
    for (let i = 0, scount = sections.length; i < scount; i++) {
      const [_section, secs] = sections[i];
      const sectionHash = blake2AsHex(_section, 64);
      const rtApi = apis.find(([a]) => a.eq(sectionHash));
      hashes[sectionHash] = true;
      if (rtApi) {
        const all3 = secs.map(({ version }) => version).sort();
        const sec = secs.find(({ version }) => rtApi[1].eq(version));
        if (sec) {
          const section2 = stringCamelCase(_section);
          const methods = Object.entries(sec.methods);
          if (methods.length) {
            if (!named[section2]) {
              named[section2] = {};
            }
            for (let m = 0, mcount = methods.length; m < mcount; m++) {
              const [_method, def] = methods[m];
              const method = stringCamelCase(_method);
              named[section2][method] = objectSpread({ method, name: `${_section}_${_method}`, section: section2, sectionHash }, def);
            }
          }
        } else {
          older.push(`${_section}/${rtApi[1].toString()} (${all3.join("/")} known)`);
        }
      }
    }
    const notFound = apis.map(([a, v]) => [a.toHex(), v.toString()]).filter(([a]) => !hashes[a]).map(([a, v]) => `${this._runtimeMap[a] || a}/${v}`);
    if (!this._options.noInitWarn && !hasLogged) {
      if (older.length) {
        l13.warn(`${implName}: Not decorating runtime apis without matching versions: ${older.join(", ")}`);
      }
      if (notFound.length) {
        l13.warn(`${implName}: Not decorating unknown runtime apis: ${notFound.join(", ")}`);
      }
    }
    const stateCall = blockHash ? (name, bytes) => this._rpcCore.state.call(name, bytes, blockHash) : (name, bytes) => this._rpcCore.state.call(name, bytes);
    const lazySection = (section2) => lazyMethods({}, Object.keys(named[section2]), (method) => this._decorateCall(registry, named[section2][method], stateCall, decorateMethod));
    const modules = Object.keys(named);
    for (let i = 0, count = modules.length; i < count; i++) {
      lazyMethod(result, modules[i], lazySection);
    }
    return result;
  }
  _decorateCall(registry, def, stateCall, decorateMethod) {
    const decorated = decorateMethod((...args) => {
      if (args.length !== def.params.length) {
        throw new Error(`${def.name}:: Expected ${def.params.length} arguments, found ${args.length}`);
      }
      const bytes = registry.createType("Raw", u8aConcatStrict(args.map((a, i) => registry.createTypeUnsafe(def.params[i].type, [a]).toU8a())));
      return stateCall(def.name, bytes).pipe(map((r) => registry.createTypeUnsafe(def.type, [r])));
    });
    decorated.meta = def;
    return decorated;
  }
  // only be called if supportMulti is true
  _decorateMulti(decorateMethod) {
    return decorateMethod((keys2) => keys2.length ? (this.hasSubscriptions ? this._rpcCore.state.subscribeStorage : this._rpcCore.state.queryStorageAt)(keys2.map((args) => Array.isArray(args) ? args[0].creator.meta.type.isPlain ? [args[0].creator] : args[0].creator.meta.type.asMap.hashers.length === 1 ? [args[0].creator, args.slice(1)] : [args[0].creator, ...args.slice(1)] : [args.creator])) : of([]));
  }
  _decorateMultiAt(atApi, decorateMethod, blockHash) {
    return decorateMethod((calls) => calls.length ? this._rpcCore.state.queryStorageAt(calls.map((args) => {
      if (Array.isArray(args)) {
        const { creator } = getAtQueryFn(atApi, args[0].creator);
        return creator.meta.type.isPlain ? [creator] : creator.meta.type.asMap.hashers.length === 1 ? [creator, args.slice(1)] : [creator, ...args.slice(1)];
      }
      return [getAtQueryFn(atApi, args.creator).creator];
    }), blockHash) : of([]));
  }
  _decorateExtrinsics({ tx }, decorateMethod) {
    const result = createSubmittable(this._type, this._rx, decorateMethod);
    const lazySection = (section2) => lazyMethods({}, Object.keys(tx[section2]), (method) => method.startsWith("$") ? tx[section2][method] : this._decorateExtrinsicEntry(tx[section2][method], result));
    const sections = Object.keys(tx);
    for (let i = 0, count = sections.length; i < count; i++) {
      lazyMethod(result, sections[i], lazySection);
    }
    return result;
  }
  _decorateExtrinsicEntry(method, creator) {
    const decorated = (...params) => creator(method(...params));
    decorated.is = (other) => method.is(other);
    return this._decorateFunctionMeta(method, decorated);
  }
  _decorateStorage({ query: query2, registry }, decorateMethod, blockHash) {
    const result = {};
    const lazySection = (section2) => lazyMethods({}, Object.keys(query2[section2]), (method) => blockHash ? this._decorateStorageEntryAt(registry, query2[section2][method], decorateMethod, blockHash) : this._decorateStorageEntry(query2[section2][method], decorateMethod));
    const sections = Object.keys(query2);
    for (let i = 0, count = sections.length; i < count; i++) {
      lazyMethod(result, sections[i], lazySection);
    }
    return result;
  }
  _decorateStorageEntry(creator, decorateMethod) {
    const getArgs = (args, registry) => extractStorageArgs(registry || this.__internal__registry, creator, args);
    const getQueryAt = (blockHash) => from(this.at(blockHash)).pipe(map((api) => getAtQueryFn(api, creator)));
    const decorated = this._decorateStorageCall(creator, decorateMethod);
    decorated.creator = creator;
    decorated.at = decorateMethod((blockHash, ...args) => getQueryAt(blockHash).pipe(switchMap((q) => q(...args))));
    decorated.hash = decorateMethod((...args) => this._rpcCore.state.getStorageHash(getArgs(args)));
    decorated.is = (key) => key.section === creator.section && key.method === creator.method;
    decorated.key = (...args) => u8aToHex(compactStripLength(creator(...args))[1]);
    decorated.keyPrefix = (...args) => u8aToHex(creator.keyPrefix(...args));
    decorated.size = decorateMethod((...args) => this._rpcCore.state.getStorageSize(getArgs(args)));
    decorated.sizeAt = decorateMethod((blockHash, ...args) => getQueryAt(blockHash).pipe(switchMap((q) => this._rpcCore.state.getStorageSize(getArgs(args, q.creator.meta.registry), blockHash))));
    if (creator.iterKey && creator.meta.type.isMap) {
      decorated.entries = decorateMethod(memo(this.__internal__instanceId, (...args) => this._retrieveMapEntries(creator, null, args)));
      decorated.entriesAt = decorateMethod(memo(this.__internal__instanceId, (blockHash, ...args) => getQueryAt(blockHash).pipe(switchMap((q) => this._retrieveMapEntries(q.creator, blockHash, args)))));
      decorated.entriesPaged = decorateMethod(memo(this.__internal__instanceId, (opts) => this._retrieveMapEntriesPaged(creator, void 0, opts)));
      decorated.keys = decorateMethod(memo(this.__internal__instanceId, (...args) => this._retrieveMapKeys(creator, null, args)));
      decorated.keysAt = decorateMethod(memo(this.__internal__instanceId, (blockHash, ...args) => getQueryAt(blockHash).pipe(switchMap((q) => this._retrieveMapKeys(q.creator, blockHash, args)))));
      decorated.keysPaged = decorateMethod(memo(this.__internal__instanceId, (opts) => this._retrieveMapKeysPaged(creator, void 0, opts)));
    }
    if (this.supportMulti && creator.meta.type.isMap) {
      decorated.multi = decorateMethod((args) => creator.meta.type.asMap.hashers.length === 1 ? this._retrieveMulti(args.map((a) => [creator, [a]])) : this._retrieveMulti(args.map((a) => [creator, a])));
    }
    return this._decorateFunctionMeta(creator, decorated);
  }
  _decorateStorageEntryAt(registry, creator, decorateMethod, blockHash) {
    const getArgs = (args) => extractStorageArgs(registry, creator, args);
    const decorated = decorateMethod((...args) => this._rpcCore.state.getStorage(getArgs(args), blockHash));
    decorated.creator = creator;
    decorated.hash = decorateMethod((...args) => this._rpcCore.state.getStorageHash(getArgs(args), blockHash));
    decorated.is = (key) => key.section === creator.section && key.method === creator.method;
    decorated.key = (...args) => u8aToHex(compactStripLength(creator(...args))[1]);
    decorated.keyPrefix = (...keys2) => u8aToHex(creator.keyPrefix(...keys2));
    decorated.size = decorateMethod((...args) => this._rpcCore.state.getStorageSize(getArgs(args), blockHash));
    if (creator.iterKey && creator.meta.type.isMap) {
      decorated.entries = decorateMethod(memo(this.__internal__instanceId, (...args) => this._retrieveMapEntries(creator, blockHash, args)));
      decorated.entriesPaged = decorateMethod(memo(this.__internal__instanceId, (opts) => this._retrieveMapEntriesPaged(creator, blockHash, opts)));
      decorated.keys = decorateMethod(memo(this.__internal__instanceId, (...args) => this._retrieveMapKeys(creator, blockHash, args)));
      decorated.keysPaged = decorateMethod(memo(this.__internal__instanceId, (opts) => this._retrieveMapKeysPaged(creator, blockHash, opts)));
    }
    if (this.supportMulti && creator.meta.type.isMap) {
      decorated.multi = decorateMethod((args) => creator.meta.type.asMap.hashers.length === 1 ? this._retrieveMulti(args.map((a) => [creator, [a]]), blockHash) : this._retrieveMulti(args.map((a) => [creator, a]), blockHash));
    }
    return this._decorateFunctionMeta(creator, decorated);
  }
  _queueStorage(call, queue) {
    const query2 = queue === this.__internal__storageSubQ ? this._rpcCore.state.subscribeStorage : this._rpcCore.state.queryStorageAt;
    let queueIdx = queue.length - 1;
    let valueIdx = 0;
    let valueObs;
    if (queueIdx === -1 || !queue[queueIdx] || queue[queueIdx][1].length === PAGE_SIZE_Q) {
      queueIdx++;
      valueObs = from(
        // we delay the execution until the next tick, this allows
        // any queries made in this timeframe to be added to the same
        // queue for a single query
        new Promise((resolve) => {
          nextTick(() => {
            const calls = queue[queueIdx][1];
            delete queue[queueIdx];
            resolve(calls);
          });
        })
      ).pipe(switchMap((calls) => query2(calls)));
      queue.push([valueObs, [call]]);
    } else {
      valueObs = queue[queueIdx][0];
      valueIdx = queue[queueIdx][1].length;
      queue[queueIdx][1].push(call);
    }
    return valueObs.pipe(
      // return the single value at this index
      map((values) => values[valueIdx])
    );
  }
  // Decorate the base storage call. In the case or rxjs or promise-without-callback (await)
  // we make a subscription, alternatively we push this through a single-shot query
  _decorateStorageCall(creator, decorateMethod) {
    const memoed = memo(this.__internal__instanceId, (...args) => {
      const call = extractStorageArgs(this.__internal__registry, creator, args);
      if (!this.hasSubscriptions) {
        return this._rpcCore.state.getStorage(call);
      }
      return this._queueStorage(call, this.__internal__storageSubQ);
    });
    return decorateMethod(memoed, {
      methodName: creator.method,
      overrideNoSub: (...args) => this._queueStorage(extractStorageArgs(this.__internal__registry, creator, args), this.__internal__storageGetQ)
    });
  }
  // retrieve a set of values for a specific set of keys - here we chunk the keys into PAGE_SIZE sizes
  _retrieveMulti(keys2, blockHash) {
    if (!keys2.length) {
      return of([]);
    }
    const query2 = this.hasSubscriptions && !blockHash ? this._rpcCore.state.subscribeStorage : this._rpcCore.state.queryStorageAt;
    if (keys2.length <= PAGE_SIZE_V) {
      return blockHash ? query2(keys2, blockHash) : query2(keys2);
    }
    return combineLatest(arrayChunk(keys2, PAGE_SIZE_V).map((k) => blockHash ? query2(k, blockHash) : query2(k))).pipe(map(arrayFlatten));
  }
  _retrieveMapKeys({ iterKey, meta, method, section: section2 }, at, args) {
    if (!iterKey || !meta.type.isMap) {
      throw new Error("keys can only be retrieved on maps");
    }
    const headKey = iterKey(...args).toHex();
    const startSubject = new BehaviorSubject(headKey);
    const query2 = at ? (startKey) => this._rpcCore.state.getKeysPaged(headKey, PAGE_SIZE_K2, startKey, at) : (startKey) => this._rpcCore.state.getKeysPaged(headKey, PAGE_SIZE_K2, startKey);
    const setMeta = (key) => key.setMeta(meta, section2, method);
    return startSubject.pipe(
      switchMap(query2),
      map((keys2) => keys2.map(setMeta)),
      tap((keys2) => nextTick(() => {
        keys2.length === PAGE_SIZE_K2 ? startSubject.next(keys2[PAGE_SIZE_K2 - 1].toHex()) : startSubject.complete();
      })),
      toArray(),
      // toArray since we want to startSubject to be completed
      map(arrayFlatten)
    );
  }
  _retrieveMapKeysPaged({ iterKey, meta, method, section: section2 }, at, opts) {
    if (!iterKey || !meta.type.isMap) {
      throw new Error("keys can only be retrieved on maps");
    }
    const setMeta = (key) => key.setMeta(meta, section2, method);
    const query2 = at ? (headKey) => this._rpcCore.state.getKeysPaged(headKey, opts.pageSize, opts.startKey || headKey, at) : (headKey) => this._rpcCore.state.getKeysPaged(headKey, opts.pageSize, opts.startKey || headKey);
    return query2(iterKey(...opts.args).toHex()).pipe(map((keys2) => keys2.map(setMeta)));
  }
  _retrieveMapEntries(entry, at, args) {
    const query2 = at ? (keys2) => this._rpcCore.state.queryStorageAt(keys2, at) : (keys2) => this._rpcCore.state.queryStorageAt(keys2);
    return this._retrieveMapKeys(entry, at, args).pipe(switchMap((keys2) => keys2.length ? combineLatest(arrayChunk(keys2, PAGE_SIZE_V).map(query2)).pipe(map((valsArr) => arrayFlatten(valsArr).map((value, index) => [keys2[index], value]))) : of([])));
  }
  _retrieveMapEntriesPaged(entry, at, opts) {
    const query2 = at ? (keys2) => this._rpcCore.state.queryStorageAt(keys2, at) : (keys2) => this._rpcCore.state.queryStorageAt(keys2);
    return this._retrieveMapKeysPaged(entry, at, opts).pipe(switchMap((keys2) => keys2.length ? query2(keys2).pipe(map((valsArr) => valsArr.map((value, index) => [keys2[index], value]))) : of([])));
  }
  _decorateDeriveRx(decorateMethod) {
    const specName = this._runtimeVersion?.specName.toString();
    const available = getAvailableDerives(this.__internal__instanceId, this._rx, objectSpread({}, this._options.derives, this._options.typesBundle?.spec?.[specName || ""]?.derives));
    return decorateDeriveSections(decorateMethod, available);
  }
  _decorateDerive(decorateMethod) {
    return decorateDeriveSections(decorateMethod, this._rx.derive);
  }
  /**
   * Put the `this.onCall` function of ApiRx here, because it is needed by
   * `api._rx`.
   */
  _rxDecorateMethod = (method) => {
    return method;
  };
};

// node_modules/@polkadot/api/base/Init.js
var KEEPALIVE_INTERVAL = 1e4;
var WITH_VERSION_SHORTCUT = false;
var l14 = logger("api/init");
function textToString(t) {
  return t.toString();
}
var Init = class extends Decorate {
  __internal__atLast = null;
  __internal__healthTimer = null;
  __internal__registries = [];
  __internal__updateSub = null;
  __internal__waitingRegistries = {};
  constructor(options, type, decorateMethod) {
    super(options, type, decorateMethod);
    this.registry.setKnownTypes(options);
    if (!options.source) {
      this.registerTypes(options.types);
    } else {
      this.__internal__registries = options.source.__internal__registries;
    }
    this._rpc = this._decorateRpc(this._rpcCore, this._decorateMethod);
    this._rx.rpc = this._decorateRpc(this._rpcCore, this._rxDecorateMethod);
    if (this.supportMulti) {
      this._queryMulti = this._decorateMulti(this._decorateMethod);
      this._rx.queryMulti = this._decorateMulti(this._rxDecorateMethod);
    }
    this._rx.signer = options.signer;
    this._rpcCore.setRegistrySwap((blockHash) => this.getBlockRegistry(blockHash));
    this._rpcCore.setResolveBlockHash((blockNumber) => firstValueFrom(this._rpcCore.chain.getBlockHash(blockNumber)));
    if (this.hasSubscriptions) {
      this._rpcCore.provider.on("disconnected", () => this.__internal__onProviderDisconnect());
      this._rpcCore.provider.on("error", (e) => this.__internal__onProviderError(e));
      this._rpcCore.provider.on("connected", () => this.__internal__onProviderConnect());
    } else if (!this._options.noInitWarn) {
      l14.warn("Api will be available in a limited mode since the provider does not support subscriptions");
    }
    if (this._rpcCore.provider.isConnected) {
      this.__internal__onProviderConnect().catch(noop);
    }
  }
  /**
   * @description Decorates a registry based on the runtime version
   */
  _initRegistry(registry, chain, version, metadata, chainProps) {
    registry.clearCache();
    registry.setChainProperties(chainProps || this.registry.getChainProperties());
    registry.setKnownTypes(this._options);
    registry.register(getSpecTypes(registry, chain, version.specName, version.specVersion));
    registry.setHasher(getSpecHasher(registry, chain, version.specName));
    if (registry.knownTypes.typesBundle) {
      registry.knownTypes.typesAlias = getSpecAlias(registry, chain, version.specName);
    }
    registry.setMetadata(metadata, void 0, objectSpread({}, getSpecExtensions(registry, chain, version.specName), this._options.signedExtensions), this._options.noInitWarn);
  }
  /**
   * @description Returns the default versioned registry
   */
  _getDefaultRegistry() {
    return assertReturn(this.__internal__registries.find(({ isDefault }) => isDefault), "Initialization error, cannot find the default registry");
  }
  /**
   * @description Returns a decorated API instance at a specific point in time
   */
  at(blockHash, knownVersion) {
    return __async(this, null, function* () {
      const u8aHash = u8aToU8a(blockHash);
      const u8aHex = u8aToHex(u8aHash);
      const registry = yield this.getBlockRegistry(u8aHash, knownVersion);
      if (!this.__internal__atLast || this.__internal__atLast[0] !== u8aHex) {
        this.__internal__atLast = [u8aHex, this._createDecorated(registry, true, null, u8aHash).decoratedApi];
      }
      return this.__internal__atLast[1];
    });
  }
  _createBlockRegistry(blockHash, header, version) {
    return __async(this, null, function* () {
      const registry = new TypeRegistry(blockHash);
      const metadata = new Metadata(registry, yield firstValueFrom(this._rpcCore.state.getMetadata.raw(header.parentHash)));
      const runtimeChain = this._runtimeChain;
      if (!runtimeChain) {
        throw new Error("Invalid initializion order, runtimeChain is not available");
      }
      this._initRegistry(registry, runtimeChain, version, metadata);
      const result = { counter: 0, lastBlockHash: blockHash, metadata, registry, runtimeVersion: version };
      this.__internal__registries.push(result);
      return result;
    });
  }
  _cacheBlockRegistryProgress(key, creator) {
    let waiting = this.__internal__waitingRegistries[key];
    if (isUndefined(waiting)) {
      waiting = this.__internal__waitingRegistries[key] = new Promise((resolve, reject) => {
        creator().then((registry) => {
          delete this.__internal__waitingRegistries[key];
          resolve(registry);
        }).catch((error) => {
          delete this.__internal__waitingRegistries[key];
          reject(error);
        });
      });
    }
    return waiting;
  }
  _getBlockRegistryViaVersion(blockHash, version) {
    if (version) {
      const existingViaVersion = this.__internal__registries.find(({ runtimeVersion: { specName, specVersion } }) => specName.eq(version.specName) && specVersion.eq(version.specVersion));
      if (existingViaVersion) {
        existingViaVersion.counter++;
        existingViaVersion.lastBlockHash = blockHash;
        return existingViaVersion;
      }
    }
    return null;
  }
  _getBlockRegistryViaHash(blockHash) {
    return __async(this, null, function* () {
      if (!this._genesisHash || !this._runtimeVersion) {
        throw new Error("Cannot retrieve data on an uninitialized chain");
      }
      const header = this.registry.createType("HeaderPartial", this._genesisHash.eq(blockHash) ? { number: BN_ZERO, parentHash: this._genesisHash } : yield firstValueFrom(this._rpcCore.chain.getHeader.raw(blockHash)));
      if (header.parentHash.isEmpty) {
        throw new Error("Unable to retrieve header and parent from supplied hash");
      }
      const [firstVersion, lastVersion] = getUpgradeVersion(this._genesisHash, header.number);
      const version = this.registry.createType("RuntimeVersionPartial", WITH_VERSION_SHORTCUT && (firstVersion && (lastVersion || firstVersion.specVersion.eq(this._runtimeVersion.specVersion))) ? { apis: firstVersion.apis, specName: this._runtimeVersion.specName, specVersion: firstVersion.specVersion } : yield firstValueFrom(this._rpcCore.state.getRuntimeVersion.raw(header.parentHash)));
      return (
        // try to find via version
        this._getBlockRegistryViaVersion(blockHash, version) || // return new or in-flight result
        (yield this._cacheBlockRegistryProgress(version.toHex(), () => this._createBlockRegistry(blockHash, header, version)))
      );
    });
  }
  /**
   * @description Sets up a registry based on the block hash defined
   */
  getBlockRegistry(blockHash, knownVersion) {
    return __async(this, null, function* () {
      return (
        // try to find via blockHash
        this.__internal__registries.find(({ lastBlockHash }) => lastBlockHash && u8aEq(lastBlockHash, blockHash)) || // try to find via version
        this._getBlockRegistryViaVersion(blockHash, knownVersion) || // return new or in-flight result
        (yield this._cacheBlockRegistryProgress(u8aToHex(blockHash), () => this._getBlockRegistryViaHash(blockHash)))
      );
    });
  }
  _loadMeta() {
    return __async(this, null, function* () {
      if (this._isReady) {
        return true;
      }
      this._unsubscribeUpdates();
      [this._genesisHash, this._runtimeMetadata] = this._options.source?._isReady ? yield this._metaFromSource(this._options.source) : yield this._metaFromChain(this._options.metadata);
      return this._initFromMeta(this._runtimeMetadata);
    });
  }
  // eslint-disable-next-line @typescript-eslint/require-await
  _metaFromSource(source) {
    return __async(this, null, function* () {
      this._extrinsicType = source.extrinsicVersion;
      this._runtimeChain = source.runtimeChain;
      this._runtimeVersion = source.runtimeVersion;
      const sections = Object.keys(source.rpc);
      const rpcs = [];
      for (let s = 0, scount = sections.length; s < scount; s++) {
        const section2 = sections[s];
        const methods = Object.keys(source.rpc[section2]);
        for (let m = 0, mcount = methods.length; m < mcount; m++) {
          rpcs.push(`${section2}_${methods[m]}`);
        }
      }
      this._filterRpc(rpcs, getSpecRpc(this.registry, source.runtimeChain, source.runtimeVersion.specName));
      return [source.genesisHash, source.runtimeMetadata];
    });
  }
  // subscribe to metadata updates, inject the types on changes
  _subscribeUpdates() {
    if (this.__internal__updateSub || !this.hasSubscriptions) {
      return;
    }
    this.__internal__updateSub = this._rpcCore.state.subscribeRuntimeVersion().pipe(switchMap((version) => (
      // only retrieve the metadata when the on-chain version has been changed
      this._runtimeVersion?.specVersion.eq(version.specVersion) ? of(false) : this._rpcCore.state.getMetadata().pipe(map((metadata) => {
        l14.log(`Runtime version updated to spec=${version.specVersion.toString()}, tx=${version.transactionVersion.toString()}`);
        this._runtimeMetadata = metadata;
        this._runtimeVersion = version;
        this._rx.runtimeVersion = version;
        const thisRegistry = this._getDefaultRegistry();
        const runtimeChain = this._runtimeChain;
        if (!runtimeChain) {
          throw new Error("Invalid initializion order, runtimeChain is not available");
        }
        thisRegistry.metadata = metadata;
        thisRegistry.runtimeVersion = version;
        this._initRegistry(this.registry, runtimeChain, version, metadata);
        this._injectMetadata(thisRegistry, true);
        return true;
      }))
    ))).subscribe();
  }
  _metaFromChain(optMetadata) {
    return __async(this, null, function* () {
      const [genesisHash, runtimeVersion, chain, chainProps, rpcMethods, chainMetadata] = yield Promise.all([
        firstValueFrom(this._rpcCore.chain.getBlockHash(0)),
        firstValueFrom(this._rpcCore.state.getRuntimeVersion()),
        firstValueFrom(this._rpcCore.system.chain()),
        firstValueFrom(this._rpcCore.system.properties()),
        firstValueFrom(this._rpcCore.rpc.methods()),
        optMetadata ? Promise.resolve(null) : firstValueFrom(this._rpcCore.state.getMetadata())
      ]);
      this._runtimeChain = chain;
      this._runtimeVersion = runtimeVersion;
      this._rx.runtimeVersion = runtimeVersion;
      const metadataKey = `${genesisHash.toHex() || "0x"}-${runtimeVersion.specVersion.toString()}`;
      const metadata = chainMetadata || (optMetadata?.[metadataKey] ? new Metadata(this.registry, optMetadata[metadataKey]) : yield firstValueFrom(this._rpcCore.state.getMetadata()));
      this._initRegistry(this.registry, chain, runtimeVersion, metadata, chainProps);
      this._filterRpc(rpcMethods.methods.map(textToString), getSpecRpc(this.registry, chain, runtimeVersion.specName));
      this._subscribeUpdates();
      if (!this.__internal__registries.length) {
        this.__internal__registries.push({ counter: 0, isDefault: true, metadata, registry: this.registry, runtimeVersion });
      }
      metadata.getUniqTypes(this._options.throwOnUnknown || false);
      return [genesisHash, metadata];
    });
  }
  _initFromMeta(metadata) {
    const runtimeVersion = this._runtimeVersion;
    if (!runtimeVersion) {
      throw new Error("Invalid initializion order, runtimeVersion is not available");
    }
    this._extrinsicType = metadata.asLatest.extrinsic.version.toNumber();
    this._rx.extrinsicType = this._extrinsicType;
    this._rx.genesisHash = this._genesisHash;
    this._rx.runtimeVersion = runtimeVersion;
    this._injectMetadata(this._getDefaultRegistry(), true);
    this._rx.derive = this._decorateDeriveRx(this._rxDecorateMethod);
    this._derive = this._decorateDerive(this._decorateMethod);
    return true;
  }
  _subscribeHealth() {
    this._unsubscribeHealth();
    this.__internal__healthTimer = this.hasSubscriptions ? setInterval(() => {
      firstValueFrom(this._rpcCore.system.health.raw()).catch(noop);
    }, KEEPALIVE_INTERVAL) : null;
  }
  _unsubscribeHealth() {
    if (this.__internal__healthTimer) {
      clearInterval(this.__internal__healthTimer);
      this.__internal__healthTimer = null;
    }
  }
  _unsubscribeUpdates() {
    if (this.__internal__updateSub) {
      this.__internal__updateSub.unsubscribe();
      this.__internal__updateSub = null;
    }
  }
  _unsubscribe() {
    this._unsubscribeHealth();
    this._unsubscribeUpdates();
  }
  __internal__onProviderConnect() {
    return __async(this, null, function* () {
      this._isConnected.next(true);
      this.emit("connected");
      try {
        const cryptoReady = this._options.initWasm === false ? true : yield cryptoWaitReady();
        const hasMeta = yield this._loadMeta();
        this._subscribeHealth();
        if (hasMeta && !this._isReady && cryptoReady) {
          this._isReady = true;
          this.emit("ready", this);
        }
      } catch (_error) {
        const error = new Error(`FATAL: Unable to initialize the API: ${_error.message}`);
        l14.error(error);
        this.emit("error", error);
      }
    });
  }
  __internal__onProviderDisconnect() {
    this._isConnected.next(false);
    this._unsubscribe();
    this.emit("disconnected");
  }
  __internal__onProviderError(error) {
    this.emit("error", error);
  }
};

// node_modules/@polkadot/api/base/Getters.js
function assertResult(value) {
  if (value === void 0) {
    throw new Error("Api interfaces needs to be initialized before using, wait for 'isReady'");
  }
  return value;
}
var Getters = class extends Init {
  /**
   * @description Runtime call interfaces (currently untyped, only decorated via API options)
   */
  get call() {
    return assertResult(this._call);
  }
  /**
   * @description Contains the parameter types (constants) of all modules.
   *
   * The values are instances of the appropriate type and are accessible using `section`.`constantName`,
   *
   * @example
   * <BR>
   *
   * ```javascript
   * console.log(api.consts.democracy.enactmentPeriod.toString())
   * ```
   */
  get consts() {
    return assertResult(this._consts);
  }
  /**
   * @description Derived results that are injected into the API, allowing for combinations of various query results.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.derive.chain.bestNumber((number) => {
   *   console.log('best number', number);
   * });
   * ```
   */
  get derive() {
    return assertResult(this._derive);
  }
  /**
   * @description Errors from metadata
   */
  get errors() {
    return assertResult(this._errors);
  }
  /**
   * @description Events from metadata
   */
  get events() {
    return assertResult(this._events);
  }
  /**
   * @description  Returns the version of extrinsics in-use on this chain
   */
  get extrinsicVersion() {
    return this._extrinsicType;
  }
  /**
   * @description Contains the genesis Hash of the attached chain. Apart from being useful to determine the actual chain, it can also be used to sign immortal transactions.
   */
  get genesisHash() {
    return assertResult(this._genesisHash);
  }
  /**
   * @description true is the underlying provider is connected
   */
  get isConnected() {
    return this._isConnected.getValue();
  }
  /**
   * @description The library information name & version (from package.json)
   */
  get libraryInfo() {
    return `${packageInfo6.name} v${packageInfo6.version}`;
  }
  /**
   * @description Contains all the chain state modules and their subsequent methods in the API. These are attached dynamically from the runtime metadata.
   *
   * All calls inside the namespace, is denoted by `section`.`method` and may take an optional query parameter. As an example, `api.query.timestamp.now()` (current block timestamp) does not take parameters, while `api.query.system.account(<accountId>)` (retrieving the associated nonce & balances for an account), takes the `AccountId` as a parameter.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.query.system.account(<accountId>, ([nonce, balance]) => {
   *   console.log('new free balance', balance.free, 'new nonce', nonce);
   * });
   * ```
   */
  get query() {
    return assertResult(this._query);
  }
  /**
   * @description Allows for the querying of multiple storage entries and the combination thereof into a single result. This is a very optimal way to make multiple queries since it only makes a single connection to the node and retrieves the data over one subscription.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * const unsub = await api.queryMulti(
   *   [
   *     // you can include the storage without any parameters
   *     api.query.balances.totalIssuance,
   *     // or you can pass parameters to the storage query
   *     [api.query.system.account, '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY']
   *   ],
   *   ([existential, [, { free }]]) => {
   *     console.log(`You have ${free.sub(existential)} more than the existential deposit`);
   *
   *     unsub();
   *   }
   * );
   * ```
   */
  get queryMulti() {
    return assertResult(this._queryMulti);
  }
  /**
   * @description Contains all the raw rpc sections and their subsequent methods in the API as defined by the jsonrpc interface definitions. Unlike the dynamic `api.query` and `api.tx` sections, these methods are fixed (although extensible with node upgrades) and not determined by the runtime.
   *
   * RPC endpoints available here allow for the query of chain, node and system information, in addition to providing interfaces for the raw queries of state (using known keys) and the submission of transactions.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.rpc.chain.subscribeNewHeads((header) => {
   *   console.log('new header', header);
   * });
   * ```
   */
  get rpc() {
    return assertResult(this._rpc);
  }
  /**
   * @description Contains the chain information for the current node.
   */
  get runtimeChain() {
    return assertResult(this._runtimeChain);
  }
  /**
   * @description Yields the current attached runtime metadata. Generally this is only used to construct extrinsics & storage, but is useful for current runtime inspection.
   */
  get runtimeMetadata() {
    return assertResult(this._runtimeMetadata);
  }
  /**
   * @description Contains the version information for the current runtime.
   */
  get runtimeVersion() {
    return assertResult(this._runtimeVersion);
  }
  /**
   * @description The underlying Rx API interface
   */
  get rx() {
    return assertResult(this._rx);
  }
  /**
   * @description Returns the underlying provider stats
   */
  get stats() {
    return this._rpcCore.stats;
  }
  /**
   * @description The type of this API instance, either 'rxjs' or 'promise'
   */
  get type() {
    return this._type;
  }
  /**
   * @description Contains all the extrinsic modules and their subsequent methods in the API. It allows for the construction of transactions and the submission thereof. These are attached dynamically from the runtime metadata.
   *
   * @example
   * <BR>
   *
   * ```javascript
   * api.tx.balances
   *   .transferAllowDeath(<recipientId>, <balance>)
   *   .signAndSend(<keyPair>, ({status}) => {
   *     console.log('tx status', status.asFinalized.toHex());
   *   });
   * ```
   */
  get tx() {
    return assertResult(this._extrinsics);
  }
  /**
   * @description Finds the definition for a specific [[CallFunction]] based on the index supplied
   */
  findCall(callIndex) {
    return findCall(this.registry, callIndex);
  }
  /**
   * @description Finds the definition for a specific [[RegistryError]] based on the index supplied
   */
  findError(errorIndex) {
    return findError(this.registry, errorIndex);
  }
};

// node_modules/@polkadot/api/base/index.js
var ApiBase = class extends Getters {
  /**
   * @description Create an instance of the class
   *
   * @param options Options object to create API instance or a Provider instance
   *
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/promise';
   *
   * const api = new Api().isReady();
   *
   * api.rpc.subscribeNewHeads((header) => {
   *   console.log(`new block #${header.number.toNumber()}`);
   * });
   * ```
   */
  constructor(options = {}, type, decorateMethod) {
    super(options, type, decorateMethod);
  }
  /**
   * @description Connect from the underlying provider, halting all network traffic
   */
  connect() {
    return this._rpcCore.connect();
  }
  /**
   * @description Disconnect from the underlying provider, halting all network traffic
   */
  disconnect() {
    this._unsubscribe();
    return this._rpcCore.disconnect();
  }
  /**
   * @description Set an external signer which will be used to sign extrinsic when account passed in is not KeyringPair
   */
  setSigner(signer) {
    this._rx.signer = signer;
  }
  /**
   * @description Signs a raw signer payload, string or Uint8Array
   */
  sign(_0, _1) {
    return __async(this, arguments, function* (address, data, { signer } = {}) {
      if (isString(address)) {
        const _signer = signer || this._rx.signer;
        if (!_signer?.signRaw) {
          throw new Error("No signer exists with a signRaw interface. You possibly need to pass through an explicit keypair for the origin so it can be used for signing.");
        }
        return (yield _signer.signRaw(objectSpread({ type: "bytes" }, data, { address }))).signature;
      }
      return u8aToHex(address.sign(u8aToU8a(data.data)));
    });
  }
};

// node_modules/@polkadot/api/promise/Combinator.js
var Combinator = class {
  __internal__allHasFired = false;
  __internal__callback;
  __internal__fired = [];
  __internal__fns = [];
  __internal__isActive = true;
  __internal__results = [];
  __internal__subscriptions = [];
  constructor(fns, callback) {
    this.__internal__callback = callback;
    this.__internal__subscriptions = fns.map((input, index) => __async(this, null, function* () {
      const [fn, ...args] = Array.isArray(input) ? input : [input];
      this.__internal__fired.push(false);
      this.__internal__fns.push(fn);
      return fn(...args, this._createCallback(index));
    }));
  }
  _allHasFired() {
    this.__internal__allHasFired ||= this.__internal__fired.filter((hasFired) => !hasFired).length === 0;
    return this.__internal__allHasFired;
  }
  _createCallback(index) {
    return (value) => {
      this.__internal__fired[index] = true;
      this.__internal__results[index] = value;
      this._triggerUpdate();
    };
  }
  _triggerUpdate() {
    if (!this.__internal__isActive || !isFunction(this.__internal__callback) || !this._allHasFired()) {
      return;
    }
    try {
      Promise.resolve(this.__internal__callback(this.__internal__results)).catch(noop);
    } catch {
    }
  }
  unsubscribe() {
    if (!this.__internal__isActive) {
      return;
    }
    this.__internal__isActive = false;
    Promise.all(this.__internal__subscriptions.map((subscription) => __async(this, null, function* () {
      try {
        const unsubscribe = yield subscription;
        if (isFunction(unsubscribe)) {
          unsubscribe();
        }
      } catch {
      }
    }))).catch(() => {
    });
  }
};

// node_modules/@polkadot/api/promise/decorateMethod.js
function promiseTracker(resolve, reject) {
  let isCompleted = false;
  return {
    reject: (error) => {
      if (!isCompleted) {
        isCompleted = true;
        reject(error);
      }
      return EMPTY;
    },
    resolve: (value) => {
      if (!isCompleted) {
        isCompleted = true;
        resolve(value);
      }
    }
  };
}
function extractArgs(args, needsCallback) {
  const actualArgs = args.slice();
  const callback = args.length && isFunction(args[args.length - 1]) ? actualArgs.pop() : void 0;
  if (needsCallback && !isFunction(callback)) {
    throw new Error("Expected a callback to be passed with subscriptions");
  }
  return [actualArgs, callback];
}
function decorateCall(method, args) {
  return new Promise((resolve, reject) => {
    const tracker = promiseTracker(resolve, reject);
    const subscription = method(...args).pipe(catchError((error) => tracker.reject(error))).subscribe((result) => {
      tracker.resolve(result);
      nextTick(() => subscription.unsubscribe());
    });
  });
}
function decorateSubscribe(method, args, resultCb) {
  return new Promise((resolve, reject) => {
    const tracker = promiseTracker(resolve, reject);
    const subscription = method(...args).pipe(catchError((error) => tracker.reject(error)), tap(() => tracker.resolve(() => subscription.unsubscribe()))).subscribe((result) => {
      nextTick(() => resultCb(result));
    });
  });
}
function toPromiseMethod(method, options) {
  const needsCallback = !!(options?.methodName && options.methodName.includes("subscribe"));
  return function(...args) {
    const [actualArgs, resultCb] = extractArgs(args, needsCallback);
    return resultCb ? decorateSubscribe(method, actualArgs, resultCb) : decorateCall(options?.overrideNoSub || method, actualArgs);
  };
}

// node_modules/@polkadot/api/promise/Api.js
var ApiPromise = class _ApiPromise extends ApiBase {
  __internal__isReadyPromise;
  __internal__isReadyOrErrorPromise;
  /**
   * @description Creates an instance of the ApiPromise class
   * @param options Options to create an instance. This can be either [[ApiOptions]] or
   * an [[WsProvider]].
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/promise';
   *
   * new Api().isReady.then((api) => {
   *   api.rpc.subscribeNewHeads((header) => {
   *     console.log(`new block #${header.number.toNumber()}`);
   *   });
   * });
   * ```
   */
  constructor(options) {
    super(options, "promise", toPromiseMethod);
    this.__internal__isReadyPromise = new Promise((resolve) => {
      super.once("ready", () => resolve(this));
    });
    this.__internal__isReadyOrErrorPromise = new Promise((resolve, reject) => {
      const tracker = promiseTracker(resolve, reject);
      super.once("ready", () => tracker.resolve(this));
      super.once("error", (error) => tracker.reject(error));
    });
  }
  /**
   * @description Creates an ApiPromise instance using the supplied provider. Returns an Promise containing the actual Api instance.
   * @param options options that is passed to the class contructor. Can be either [[ApiOptions]] or a
   * provider (see the constructor arguments)
   * @example
   * <BR>
   *
   * ```javascript
   * import Api from '@polkadot/api/promise';
   *
   * Api.create().then(async (api) => {
   *   const timestamp = await api.query.timestamp.now();
   *
   *   console.log(`lastest block timestamp ${timestamp}`);
   * });
   * ```
   */
  static create(options) {
    const instance = new _ApiPromise(options);
    if (options && options.throwOnConnect) {
      return instance.isReadyOrError;
    }
    instance.isReadyOrError.catch(noop);
    return instance.isReady;
  }
  /**
   * @description Promise that resolves the first time we are connected and loaded
   */
  get isReady() {
    return this.__internal__isReadyPromise;
  }
  /**
   * @description Promise that resolves if we can connect, or reject if there is an error
   */
  get isReadyOrError() {
    return this.__internal__isReadyOrErrorPromise;
  }
  /**
   * @description Returns a clone of this ApiPromise instance (new underlying provider connection)
   */
  clone() {
    return new _ApiPromise(objectSpread({}, this._options, { source: this }));
  }
  /**
   * @description Creates a combinator that can be used to combine the latest results from multiple subscriptions
   * @param fns An array of function to combine, each in the form of `(cb: (value: void)) => void`
   * @param callback A callback that will return an Array of all the values this combinator has been applied to
   * @example
   * <BR>
   *
   * ```javascript
   * const address = '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFacT7';
   *
   * // combines values from balance & nonce as it updates
   * api.combineLatest([
   *   api.rpc.chain.subscribeNewHeads,
   *   (cb) => api.query.system.account(address, cb)
   * ], ([head, [balance, nonce]]) => {
   *   console.log(`#${head.number}: You have ${balance.free} units, with ${nonce} transactions sent`);
   * });
   * ```
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  combineLatest(fns, callback) {
    return __async(this, null, function* () {
      const combinator = new Combinator(fns, callback);
      return () => {
        combinator.unsubscribe();
      };
    });
  }
};

// node_modules/@polkadot/api/rx/decorateMethod.js
function toRxMethod(method) {
  return method;
}

// node_modules/@polkadot/api/rx/Api.js
var ApiRx = class _ApiRx extends ApiBase {
  __internal__isReadyRx;
  /**
   * @description Create an instance of the ApiRx class
   * @param options Options to create an instance. Can be either [[ApiOptions]] or [[WsProvider]]
   * @example
   * <BR>
   *
   * ```javascript
   * import { switchMap } from 'rxjs';
   * import Api from '@polkadot/api/rx';
   *
   * new Api().isReady
   *   .pipe(
   *     switchMap((api) =>
   *       api.rpc.chain.subscribeNewHeads()
   *   ))
   *   .subscribe((header) => {
   *     console.log(`new block #${header.number.toNumber()}`);
   *   });
   * ```
   */
  constructor(options) {
    super(options, "rxjs", toRxMethod);
    this.__internal__isReadyRx = from(
      // You can create an observable from an event, however my mind groks this form better
      new Promise((resolve) => {
        super.on("ready", () => resolve(this));
      })
    );
  }
  /**
   * @description Creates an ApiRx instance using the supplied provider. Returns an Observable containing the actual Api instance.
   * @param options options that is passed to the class constructor. Can be either [[ApiOptions]] or [[WsProvider]]
   * @example
   * <BR>
   *
   * ```javascript
   * import { switchMap } from 'rxjs';
   * import Api from '@polkadot/api/rx';
   *
   * Api.create()
   *   .pipe(
   *     switchMap((api) =>
   *       api.rpc.chain.subscribeNewHeads()
   *   ))
   *   .subscribe((header) => {
   *     console.log(`new block #${header.number.toNumber()}`);
   *   });
   * ```
   */
  static create(options) {
    return new _ApiRx(options).isReady;
  }
  /**
   * @description Observable that returns the first time we are connected and loaded
   */
  get isReady() {
    return this.__internal__isReadyRx;
  }
  /**
   * @description Returns a clone of this ApiRx instance (new underlying provider connection)
   */
  clone() {
    return new _ApiRx(objectSpread({}, this._options, { source: this }));
  }
};
export {
  ApiPromise,
  ApiRx,
  HttpProvider,
  Keyring,
  ScProvider,
  SubmittableResult,
  WsProvider,
  packageInfo6 as packageInfo,
  toPromiseMethod,
  toRxMethod
};
//# sourceMappingURL=@polkadot_api.js.map
