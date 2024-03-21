import {
  base64Decode,
  blake2AsU8a,
  decodeAddress,
  ed25519PairFromSeed,
  ed25519Sign,
  encodeAddress,
  ethereumEncode,
  hdEthereum,
  jsonDecryptData,
  jsonEncryptFormat,
  keccakAsU8a,
  keyExtractPath,
  keyExtractSuri,
  keyFromPath,
  mnemonicToLegacySeed,
  mnemonicToMiniSecret,
  naclEncrypt,
  packageInfo as packageInfo2,
  scryptEncode,
  scryptToU8a,
  secp256k1Compress,
  secp256k1Expand,
  secp256k1PairFromSeed,
  secp256k1Sign,
  signatureVerify,
  sr25519PairFromSeed,
  sr25519Sign,
  sr25519VrfSign,
  sr25519VrfVerify
} from "./chunk-2MRYR5WN.js";
import {
  detectPackage,
  hexToU8a,
  isHex,
  isU8a,
  objectSpread,
  packageInfo,
  stringToU8a,
  u8aConcat,
  u8aEmpty,
  u8aEq,
  u8aToHex,
  u8aToU8a
} from "./chunk-5VGPNYA4.js";

// node_modules/@polkadot/keyring/detectOther.js
var detectOther_default = [packageInfo, packageInfo2];

// node_modules/@polkadot/keyring/packageInfo.js
var packageInfo3 = { name: "@polkadot/keyring", path: import.meta && import.meta.url ? new URL(import.meta.url).pathname.substring(0, new URL(import.meta.url).pathname.lastIndexOf("/") + 1) : "auto", type: "esm", version: "12.6.2" };

// node_modules/@polkadot/keyring/detectPackage.js
detectPackage(packageInfo3, null, detectOther_default);

// node_modules/@polkadot/keyring/pair/defaults.js
var PKCS8_DIVIDER = new Uint8Array([161, 35, 3, 33, 0]);
var PKCS8_HEADER = new Uint8Array([48, 83, 2, 1, 1, 48, 5, 6, 3, 43, 101, 112, 4, 34, 4, 32]);
var PUB_LENGTH = 32;
var SEC_LENGTH = 64;
var SEED_LENGTH = 32;

// node_modules/@polkadot/keyring/pair/decode.js
var SEED_OFFSET = PKCS8_HEADER.length;
function decodePair(passphrase, encrypted, _encType) {
  const encType = Array.isArray(_encType) || _encType === void 0 ? _encType : [_encType];
  const decrypted = jsonDecryptData(encrypted, passphrase, encType);
  const header = decrypted.subarray(0, PKCS8_HEADER.length);
  if (!u8aEq(header, PKCS8_HEADER)) {
    throw new Error("Invalid Pkcs8 header found in body");
  }
  let secretKey = decrypted.subarray(SEED_OFFSET, SEED_OFFSET + SEC_LENGTH);
  let divOffset = SEED_OFFSET + SEC_LENGTH;
  let divider = decrypted.subarray(divOffset, divOffset + PKCS8_DIVIDER.length);
  if (!u8aEq(divider, PKCS8_DIVIDER)) {
    divOffset = SEED_OFFSET + SEED_LENGTH;
    secretKey = decrypted.subarray(SEED_OFFSET, divOffset);
    divider = decrypted.subarray(divOffset, divOffset + PKCS8_DIVIDER.length);
    if (!u8aEq(divider, PKCS8_DIVIDER)) {
      throw new Error("Invalid Pkcs8 divider found in body");
    }
  }
  const pubOffset = divOffset + PKCS8_DIVIDER.length;
  const publicKey2 = decrypted.subarray(pubOffset, pubOffset + PUB_LENGTH);
  return {
    publicKey: publicKey2,
    secretKey
  };
}

// node_modules/@polkadot/keyring/pair/encode.js
function encodePair({ publicKey: publicKey2, secretKey }, passphrase) {
  if (!secretKey) {
    throw new Error("Expected a valid secretKey to be passed to encode");
  }
  const encoded = u8aConcat(PKCS8_HEADER, secretKey, PKCS8_DIVIDER, publicKey2);
  if (!passphrase) {
    return encoded;
  }
  const { params, password, salt } = scryptEncode(passphrase);
  const { encrypted, nonce } = naclEncrypt(encoded, password.subarray(0, 32));
  return u8aConcat(scryptToU8a(salt, params), nonce, encrypted);
}

// node_modules/@polkadot/keyring/pair/toJson.js
function pairToJson(type, { address: address2, meta: meta2 }, encoded, isEncrypted) {
  return objectSpread(jsonEncryptFormat(encoded, ["pkcs8", type], isEncrypted), {
    address: address2,
    meta: meta2
  });
}

// node_modules/@polkadot/keyring/pair/index.js
var SIG_TYPE_NONE = new Uint8Array();
var TYPE_FROM_SEED = {
  ecdsa: secp256k1PairFromSeed,
  ed25519: ed25519PairFromSeed,
  ethereum: secp256k1PairFromSeed,
  sr25519: sr25519PairFromSeed
};
var TYPE_PREFIX = {
  ecdsa: new Uint8Array([2]),
  ed25519: new Uint8Array([0]),
  ethereum: new Uint8Array([2]),
  sr25519: new Uint8Array([1])
};
var TYPE_SIGNATURE = {
  ecdsa: (m, p) => secp256k1Sign(m, p, "blake2"),
  ed25519: ed25519Sign,
  ethereum: (m, p) => secp256k1Sign(m, p, "keccak"),
  sr25519: sr25519Sign
};
var TYPE_ADDRESS = {
  ecdsa: (p) => p.length > 32 ? blake2AsU8a(p) : p,
  ed25519: (p) => p,
  ethereum: (p) => p.length === 20 ? p : keccakAsU8a(secp256k1Expand(p)),
  sr25519: (p) => p
};
function isLocked(secretKey) {
  return !secretKey || u8aEmpty(secretKey);
}
function vrfHash(proof, context, extra) {
  return blake2AsU8a(u8aConcat(context || "", extra || "", proof));
}
function createPair({ toSS58, type }, { publicKey: publicKey2, secretKey }, meta2 = {}, encoded = null, encTypes) {
  const decodePkcs8 = (passphrase, userEncoded) => {
    const decoded = decodePair(passphrase, userEncoded || encoded, encTypes);
    if (decoded.secretKey.length === 64) {
      publicKey2 = decoded.publicKey;
      secretKey = decoded.secretKey;
    } else {
      const pair2 = TYPE_FROM_SEED[type](decoded.secretKey);
      publicKey2 = pair2.publicKey;
      secretKey = pair2.secretKey;
    }
  };
  const recode = (passphrase) => {
    isLocked(secretKey) && encoded && decodePkcs8(passphrase, encoded);
    encoded = encodePair({ publicKey: publicKey2, secretKey }, passphrase);
    encTypes = void 0;
    return encoded;
  };
  const encodeAddress2 = () => {
    const raw = TYPE_ADDRESS[type](publicKey2);
    return type === "ethereum" ? ethereumEncode(raw) : toSS58(raw);
  };
  return {
    get address() {
      return encodeAddress2();
    },
    get addressRaw() {
      const raw = TYPE_ADDRESS[type](publicKey2);
      return type === "ethereum" ? raw.slice(-20) : raw;
    },
    get isLocked() {
      return isLocked(secretKey);
    },
    get meta() {
      return meta2;
    },
    get publicKey() {
      return publicKey2;
    },
    get type() {
      return type;
    },
    // eslint-disable-next-line sort-keys
    decodePkcs8,
    derive: (suri, meta3) => {
      if (type === "ethereum") {
        throw new Error("Unable to derive on this keypair");
      } else if (isLocked(secretKey)) {
        throw new Error("Cannot derive on a locked keypair");
      }
      const { path } = keyExtractPath(suri);
      const derived = keyFromPath({ publicKey: publicKey2, secretKey }, path, type);
      return createPair({ toSS58, type }, derived, meta3, null);
    },
    encodePkcs8: (passphrase) => {
      return recode(passphrase);
    },
    lock: () => {
      secretKey = new Uint8Array();
    },
    setMeta: (additional) => {
      meta2 = objectSpread({}, meta2, additional);
    },
    sign: (message, options = {}) => {
      if (isLocked(secretKey)) {
        throw new Error("Cannot sign with a locked key pair");
      }
      return u8aConcat(options.withType ? TYPE_PREFIX[type] : SIG_TYPE_NONE, TYPE_SIGNATURE[type](u8aToU8a(message), { publicKey: publicKey2, secretKey }));
    },
    toJson: (passphrase) => {
      const address2 = ["ecdsa", "ethereum"].includes(type) ? publicKey2.length === 20 ? u8aToHex(publicKey2) : u8aToHex(secp256k1Compress(publicKey2)) : encodeAddress2();
      return pairToJson(type, { address: address2, meta: meta2 }, recode(passphrase), !!passphrase);
    },
    unlock: (passphrase) => {
      return decodePkcs8(passphrase);
    },
    verify: (message, signature, signerPublic) => {
      return signatureVerify(message, signature, TYPE_ADDRESS[type](u8aToU8a(signerPublic))).isValid;
    },
    vrfSign: (message, context, extra) => {
      if (isLocked(secretKey)) {
        throw new Error("Cannot sign with a locked key pair");
      }
      if (type === "sr25519") {
        return sr25519VrfSign(message, { secretKey }, context, extra);
      }
      const proof = TYPE_SIGNATURE[type](u8aToU8a(message), { publicKey: publicKey2, secretKey });
      return u8aConcat(vrfHash(proof, context, extra), proof);
    },
    vrfVerify: (message, vrfResult, signerPublic, context, extra) => {
      if (type === "sr25519") {
        return sr25519VrfVerify(message, vrfResult, publicKey2, context, extra);
      }
      const result = signatureVerify(message, u8aConcat(TYPE_PREFIX[type], vrfResult.subarray(32)), TYPE_ADDRESS[type](u8aToU8a(signerPublic)));
      return result.isValid && u8aEq(vrfResult.subarray(0, 32), vrfHash(vrfResult.subarray(32), context, extra));
    }
  };
}

// node_modules/@polkadot/keyring/defaults.js
var DEV_PHRASE = "bottom drive obey lake curtain smoke basket hold race lonely fit walk";
var DEV_SEED = "0xfac7959dbfe72f052e5a0c3c8d6530f202b02fd8f9f5ca3580ec8deb7797479e";

// node_modules/@polkadot/keyring/pairs.js
var Pairs = class {
  __internal__map = {};
  add(pair2) {
    this.__internal__map[decodeAddress(pair2.address).toString()] = pair2;
    return pair2;
  }
  all() {
    return Object.values(this.__internal__map);
  }
  get(address2) {
    const pair2 = this.__internal__map[decodeAddress(address2).toString()];
    if (!pair2) {
      throw new Error(`Unable to retrieve keypair '${isU8a(address2) || isHex(address2) ? u8aToHex(u8aToU8a(address2)) : address2}'`);
    }
    return pair2;
  }
  remove(address2) {
    delete this.__internal__map[decodeAddress(address2).toString()];
  }
};

// node_modules/@polkadot/keyring/keyring.js
var PairFromSeed = {
  ecdsa: (seed) => secp256k1PairFromSeed(seed),
  ed25519: (seed) => ed25519PairFromSeed(seed),
  ethereum: (seed) => secp256k1PairFromSeed(seed),
  sr25519: (seed) => sr25519PairFromSeed(seed)
};
function pairToPublic({ publicKey: publicKey2 }) {
  return publicKey2;
}
var Keyring = class {
  __internal__pairs;
  __internal__type;
  __internal__ss58;
  decodeAddress = decodeAddress;
  constructor(options = {}) {
    options.type = options.type || "ed25519";
    if (!["ecdsa", "ethereum", "ed25519", "sr25519"].includes(options.type || "undefined")) {
      throw new Error(`Expected a keyring type of either 'ed25519', 'sr25519', 'ethereum' or 'ecdsa', found '${options.type || "unknown"}`);
    }
    this.__internal__pairs = new Pairs();
    this.__internal__ss58 = options.ss58Format;
    this.__internal__type = options.type;
  }
  /**
   * @description retrieve the pairs (alias for getPairs)
   */
  get pairs() {
    return this.getPairs();
  }
  /**
   * @description retrieve the publicKeys (alias for getPublicKeys)
   */
  get publicKeys() {
    return this.getPublicKeys();
  }
  /**
   * @description Returns the type of the keyring, ed25519, sr25519 or ecdsa
   */
  get type() {
    return this.__internal__type;
  }
  /**
   * @name addPair
   * @summary Stores an account, given a keyring pair, as a Key/Value (public key, pair) in Keyring Pair Dictionary
   */
  addPair(pair2) {
    return this.__internal__pairs.add(pair2);
  }
  /**
   * @name addFromAddress
   * @summary Stores an account, given an account address, as a Key/Value (public key, pair) in Keyring Pair Dictionary
   * @description Allows user to explicitly provide separate inputs including account address or public key, and optionally
   * the associated account metadata, and the default encoded value as arguments (that may be obtained from the json file
   * of an account backup), and then generates a keyring pair from them that it passes to
   * `addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.
   */
  addFromAddress(address2, meta2 = {}, encoded = null, type = this.type, ignoreChecksum, encType) {
    const publicKey2 = this.decodeAddress(address2, ignoreChecksum);
    return this.addPair(createPair({ toSS58: this.encodeAddress, type }, { publicKey: publicKey2, secretKey: new Uint8Array() }, meta2, encoded, encType));
  }
  /**
   * @name addFromJson
   * @summary Stores an account, given JSON data, as a Key/Value (public key, pair) in Keyring Pair Dictionary
   * @description Allows user to provide a json object argument that contains account information (that may be obtained from the json file
   * of an account backup), and then generates a keyring pair from it that it passes to
   * `addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.
   */
  addFromJson(json2, ignoreChecksum) {
    return this.addPair(this.createFromJson(json2, ignoreChecksum));
  }
  /**
   * @name addFromMnemonic
   * @summary Stores an account, given a mnemonic, as a Key/Value (public key, pair) in Keyring Pair Dictionary
   * @description Allows user to provide a mnemonic (seed phrase that is provided when account is originally created)
   * argument and a metadata argument that contains account information (that may be obtained from the json file
   * of an account backup), and then generates a keyring pair from it that it passes to
   * `addPair` to stores in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.
   */
  addFromMnemonic(mnemonic, meta2 = {}, type = this.type) {
    return this.addFromUri(mnemonic, meta2, type);
  }
  /**
   * @name addFromPair
   * @summary Stores an account created from an explicit publicKey/secreteKey combination
   */
  addFromPair(pair2, meta2 = {}, type = this.type) {
    return this.addPair(this.createFromPair(pair2, meta2, type));
  }
  /**
   * @name addFromSeed
   * @summary Stores an account, given seed data, as a Key/Value (public key, pair) in Keyring Pair Dictionary
   * @description Stores in a keyring pair dictionary the public key of the pair as a key and the pair as the associated value.
   * Allows user to provide the account seed as an argument, and then generates a keyring pair from it that it passes to
   * `addPair` to store in a keyring pair dictionary the public key of the generated pair as a key and the pair as the associated value.
   */
  addFromSeed(seed, meta2 = {}, type = this.type) {
    return this.addPair(createPair({ toSS58: this.encodeAddress, type }, PairFromSeed[type](seed), meta2, null));
  }
  /**
   * @name addFromUri
   * @summary Creates an account via an suri
   * @description Extracts the phrase, path and password from a SURI format for specifying secret keys `<secret>/<soft-key>//<hard-key>///<password>` (the `///password` may be omitted, and `/<soft-key>` and `//<hard-key>` maybe repeated and mixed). The secret can be a hex string, mnemonic phrase or a string (to be padded)
   */
  addFromUri(suri, meta2 = {}, type = this.type) {
    return this.addPair(this.createFromUri(suri, meta2, type));
  }
  /**
   * @name createFromJson
   * @description Creates a pair from a JSON keyfile
   */
  createFromJson({ address: address2, encoded, encoding: { content, type, version }, meta: meta2 }, ignoreChecksum) {
    if (version === "3" && content[0] !== "pkcs8") {
      throw new Error(`Unable to decode non-pkcs8 type, [${content.join(",")}] found}`);
    }
    const cryptoType = version === "0" || !Array.isArray(content) ? this.type : content[1];
    const encType = !Array.isArray(type) ? [type] : type;
    if (!["ed25519", "sr25519", "ecdsa", "ethereum"].includes(cryptoType)) {
      throw new Error(`Unknown crypto type ${cryptoType}`);
    }
    const publicKey2 = isHex(address2) ? hexToU8a(address2) : this.decodeAddress(address2, ignoreChecksum);
    const decoded = isHex(encoded) ? hexToU8a(encoded) : base64Decode(encoded);
    return createPair({ toSS58: this.encodeAddress, type: cryptoType }, { publicKey: publicKey2, secretKey: new Uint8Array() }, meta2, decoded, encType);
  }
  /**
   * @name createFromPair
   * @summary Creates a pair from an explicit publicKey/secreteKey combination
   */
  createFromPair(pair2, meta2 = {}, type = this.type) {
    return createPair({ toSS58: this.encodeAddress, type }, pair2, meta2, null);
  }
  /**
   * @name createFromUri
   * @summary Creates a Keypair from an suri
   * @description This creates a pair from the suri, but does not add it to the keyring
   */
  createFromUri(_suri, meta2 = {}, type = this.type) {
    const suri = _suri.startsWith("//") ? `${DEV_PHRASE}${_suri}` : _suri;
    const { derivePath, password, path, phrase } = keyExtractSuri(suri);
    let seed;
    const isPhraseHex = isHex(phrase, 256);
    if (isPhraseHex) {
      seed = hexToU8a(phrase);
    } else {
      const parts = phrase.split(" ");
      if ([12, 15, 18, 21, 24].includes(parts.length)) {
        seed = type === "ethereum" ? mnemonicToLegacySeed(phrase, "", false, 64) : mnemonicToMiniSecret(phrase, password);
      } else {
        if (phrase.length > 32) {
          throw new Error("specified phrase is not a valid mnemonic and is invalid as a raw seed at > 32 bytes");
        }
        seed = stringToU8a(phrase.padEnd(32));
      }
    }
    const derived = type === "ethereum" ? isPhraseHex ? PairFromSeed[type](seed) : hdEthereum(seed, derivePath.substring(1)) : keyFromPath(PairFromSeed[type](seed), path, type);
    return createPair({ toSS58: this.encodeAddress, type }, derived, meta2, null);
  }
  /**
   * @name encodeAddress
   * @description Encodes the input into an ss58 representation
   */
  encodeAddress = (address2, ss58Format) => {
    return this.type === "ethereum" ? ethereumEncode(address2) : encodeAddress(address2, ss58Format ?? this.__internal__ss58);
  };
  /**
   * @name getPair
   * @summary Retrieves an account keyring pair from the Keyring Pair Dictionary, given an account address
   * @description Returns a keyring pair value from the keyring pair dictionary by performing
   * a key lookup using the provided account address or public key (after decoding it).
   */
  getPair(address2) {
    return this.__internal__pairs.get(address2);
  }
  /**
   * @name getPairs
   * @summary Retrieves all account keyring pairs from the Keyring Pair Dictionary
   * @description Returns an array list of all the keyring pair values that are stored in the keyring pair dictionary.
   */
  getPairs() {
    return this.__internal__pairs.all();
  }
  /**
   * @name getPublicKeys
   * @summary Retrieves Public Keys of all Keyring Pairs stored in the Keyring Pair Dictionary
   * @description Returns an array list of all the public keys associated with each of the keyring pair values that are stored in the keyring pair dictionary.
   */
  getPublicKeys() {
    return this.__internal__pairs.all().map(pairToPublic);
  }
  /**
   * @name removePair
   * @description Deletes the provided input address or public key from the stored Keyring Pair Dictionary.
   */
  removePair(address2) {
    this.__internal__pairs.remove(address2);
  }
  /**
   * @name setSS58Format;
   * @description Sets the ss58 format for the keyring
   */
  setSS58Format(ss58) {
    this.__internal__ss58 = ss58;
  }
  /**
   * @name toJson
   * @summary Returns a JSON object associated with the input argument that contains metadata assocated with an account
   * @description Returns a JSON object containing the metadata associated with an account
   * when valid address or public key and when the account passphrase is provided if the account secret
   * is not already unlocked and available in memory. Note that in [Polkadot-JS Apps](https://github.com/polkadot-js/apps) the user
   * may backup their account to a JSON file that contains this information.
   */
  toJson(address2, passphrase) {
    return this.__internal__pairs.get(address2).toJson(passphrase);
  }
};

// node_modules/@polkadot/keyring/testing.js
var PAIRSSR25519 = [
  {
    p: "0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d",
    s: "0x98319d4ff8a9508c4bb0cf0b5a78d760a0b2082c02775e6e82370816fedfff48925a225d97aa00682d6a59b95b18780c10d7032336e88f3442b42361f4a66011",
    // nosemgrep
    seed: "Alice",
    type: "sr25519"
  },
  {
    p: "0xbe5ddb1579b72e84524fc29e78609e3caf42e85aa118ebfe0b0ad404b5bdd25f",
    s: "0xe8da6c9d810e020f5e3c7f5af2dea314cbeaa0d72bc6421e92c0808a0c584a6046ab28e97c3ffc77fe12b5a4d37e8cd4afbfebbf2391ffc7cb07c0f38c023efd",
    // nosemgrep
    seed: "Alice//stash",
    type: "sr25519"
  },
  {
    p: "0x8eaf04151687736326c9fea17e25fc5287613693c912909cb226aa4794f26a48",
    s: "0x081ff694633e255136bdb456c20a5fc8fed21f8b964c11bb17ff534ce80ebd5941ae88f85d0c1bfc37be41c904e1dfc01de8c8067b0d6d5df25dd1ac0894a325",
    // nosemgrep
    seed: "Bob",
    type: "sr25519"
  },
  {
    p: "0xfe65717dad0447d715f660a0a58411de509b42e6efb8375f562f58a554d5860e",
    s: "0xc006507cdfc267a21532394c49ca9b754ca71de21e15a1cdf807c7ceab6d0b6c3ed408d9d35311540dcd54931933e67cf1ea10d46f75408f82b789d9bd212fde",
    // nosemgrep
    seed: "Bob//stash",
    type: "sr25519"
  },
  {
    p: "0x90b5ab205c6974c9ea841be688864633dc9ca8a357843eeacf2314649965fe22",
    s: "0xa8f2d83016052e5d6d77b2f6fd5d59418922a09024cda701b3c34369ec43a7668faf12ff39cd4e5d92bb773972f41a7a5279ebc2ed92264bed8f47d344f8f18c",
    // nosemgrep
    seed: "Charlie",
    type: "sr25519"
  },
  {
    p: "0x306721211d5404bd9da88e0204360a1a9ab8b87c66c1bc2fcdd37f3c2222cc20",
    s: "0x20e05482ca4677e0edbc58ae9a3a59f6ed3b1a9484ba17e64d6fe8688b2b7b5d108c4487b9323b98b11fe36cb301b084e920f7b7895536809a6d62a451b25568",
    // nosemgrep
    seed: "Dave",
    type: "sr25519"
  },
  {
    p: "0xe659a7a1628cdd93febc04a4e0646ea20e9f5f0ce097d9a05290d4a9e054df4e",
    s: "0x683576abfd5dc35273e4264c23095a1bf21c14517bece57c7f0cc5c0ed4ce06a3dbf386b7828f348abe15d76973a72009e6ef86a5c91db2990cb36bb657c6587",
    // nosemgrep
    seed: "Eve",
    type: "sr25519"
  },
  {
    p: "0x1cbd2d43530a44705ad088af313e18f80b53ef16b36177cd4b77b846f2a5f07c",
    s: "0xb835c20f450079cf4f513900ae9faf8df06ad86c681884122c752a4b2bf74d4303e4f21bc6cc62bb4eeed5a9cce642c25e2d2ac1464093b50f6196d78e3a7426",
    // nosemgrep
    seed: "Ferdie",
    type: "sr25519"
  }
];
var PAIRSETHEREUM = [
  {
    name: "Alith",
    p: "0x02509540919faacf9ab52146c9aa40db68172d83777250b28e4679176e49ccdd9f",
    s: "0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133",
    // nosemgrep
    type: "ethereum"
  },
  {
    name: "Baltathar",
    p: "0x033bc19e36ff1673910575b6727a974a9abd80c9a875d41ab3e2648dbfb9e4b518",
    s: "0x8075991ce870b93a8870eca0c0f91913d12f47948ca0fd25b49c6fa7cdbeee8b",
    // nosemgrep
    type: "ethereum"
  },
  {
    name: "Charleth",
    p: "0x0234637bdc0e89b5d46543bcbf8edff329d2702bc995e27e9af4b1ba009a3c2a5e",
    s: "0x0b6e18cafb6ed99687ec547bd28139cafdd2bffe70e6b688025de6b445aa5c5b",
    // nosemgrep
    type: "ethereum"
  },
  {
    name: "Dorothy",
    p: "0x02a00d60b2b408c2a14c5d70cdd2c205db8985ef737a7e55ad20ea32cc9e7c417c",
    s: "0x39539ab1876910bbf3a223d84a29e28f1cb4e2e456503e7e91ed39b2e7223d68",
    // nosemgrep
    type: "ethereum"
  },
  {
    name: "Ethan",
    p: "0x025cdc005b752651cd3f728fb9192182acb3a9c89e19072cbd5b03f3ee1f1b3ffa",
    s: "0x7dce9bc8babb68fec1409be38c8e1a52650206a7ed90ff956ae8a6d15eeaaef4",
    // nosemgrep
    type: "ethereum"
  },
  {
    name: "Faith",
    p: "0x037964b6c9d546da4646ada28a99e34acaa1d14e7aba861a9055f9bd200c8abf74",
    s: "0xb9d2ea9a615f3165812e8d44de0d24da9bbd164b65c4f0573e1ce2c8dbd9c8df",
    // nosemgrep
    type: "ethereum"
  }
];
function createMeta(name, seed) {
  if (!name && !seed) {
    throw new Error("Testing pair should have either a name or a seed");
  }
  return {
    isTesting: true,
    name: name || seed?.replace("//", "_").toLowerCase()
  };
}
function createTestKeyring(options = {}, isDerived = true) {
  const keyring = new Keyring(options);
  const pairs = options.type === "ethereum" ? PAIRSETHEREUM : PAIRSSR25519;
  for (const { name, p, s, seed, type } of pairs) {
    const meta2 = createMeta(name, seed);
    const pair2 = !isDerived && !name && seed ? keyring.addFromUri(seed, meta2, options.type) : keyring.addPair(createPair({ toSS58: keyring.encodeAddress, type }, { publicKey: hexToU8a(p), secretKey: hexToU8a(s) }, meta2));
    pair2.lock = () => {
    };
  }
  return keyring;
}

// node_modules/@polkadot/keyring/pair/nobody.js
var publicKey = new Uint8Array(32);
var address = "5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM";
var meta = {
  isTesting: true,
  name: "nobody"
};
var json = {
  address,
  encoded: "",
  encoding: {
    content: ["pkcs8", "ed25519"],
    type: "none",
    version: "0"
  },
  meta
};
var pair = {
  address,
  addressRaw: publicKey,
  decodePkcs8: (_passphrase, _encoded) => void 0,
  derive: (_suri, _meta) => pair,
  encodePkcs8: (_passphrase) => new Uint8Array(0),
  isLocked: true,
  lock: () => {
  },
  meta,
  publicKey,
  setMeta: (_meta) => void 0,
  sign: (_message) => new Uint8Array(64),
  toJson: (_passphrase) => json,
  type: "ed25519",
  unlock: (_passphrase) => void 0,
  verify: (_message, _signature) => false,
  vrfSign: (_message, _context, _extra) => new Uint8Array(96),
  vrfVerify: (_message, _vrfResult, _context, _extra) => false
};
function nobody() {
  return pair;
}

// node_modules/@polkadot/keyring/testingPairs.js
function createTestPairs(options, isDerived = true) {
  const keyring = createTestKeyring(options, isDerived);
  const pairs = keyring.getPairs();
  const map = { nobody: nobody() };
  for (const p of pairs) {
    if (p.meta.name) {
      map[p.meta.name] = p;
    }
  }
  return map;
}

// node_modules/@polkadot/keyring/index.js
var keyring_default = Keyring;

export {
  packageInfo3 as packageInfo,
  createPair,
  DEV_PHRASE,
  DEV_SEED,
  Keyring,
  createTestKeyring,
  createTestPairs,
  keyring_default
};
//# sourceMappingURL=chunk-ZF6Y3YKS.js.map
