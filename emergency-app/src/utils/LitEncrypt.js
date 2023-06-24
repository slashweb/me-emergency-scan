import * as LitJsSdk from "@lit-protocol/lit-node-client";

import {uint8arrayToString, uint8arrayFromString} from "@lit-protocol/uint8arrays";

import {
  decryptWithSymmetricKey,
  encryptWithSymmetricKey,
  generateSymmetricKey,
  importSymmetricKey,
} from '@lit-protocol/crypto';

import {blobToBase64String, base64StringToBlob} from "@lit-protocol/misc-browser";
import {ABI, CHAIN_ID, CHAIN_NAME, CONTRACT_ID} from "../constants";

const client = new LitJsSdk.LitNodeClient({debug: false})

const evmContractConditions = [
  {
    contractAddress: CONTRACT_ID,
    chain: CHAIN_NAME,
    functionName: "doctorExists",
    functionParams: [":userAddress"],
    functionAbi: {
      "inputs": [
        {
          "internalType": "address",
          "name": "wallet",
          "type": "address"
        }
      ],
      "name": "doctorExists",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    returnValueTest: {
      key: '',
      comparator: "=",
      value: "true"
    },
  },
];

let litNodeClient
let authSig
const chain = CHAIN_NAME

export const connect = async () => {
  await client.connect()
  litNodeClient = client
}

const setAuth = async () => {
  authSig = await LitJsSdk.checkAndSignAuthMessage({chain: "ethereum"})
}

export const generateUserKey = async () => {
  const cryptoKey = await generateSymmetricKey()
  const exported = await crypto.subtle.exportKey('jwk', cryptoKey)
  return JSON.stringify(exported)
}

export const encrypt = async (message) => {
  await connect()
  await setAuth()


  const {encryptedString, symmetricKey} = await LitJsSdk.encryptString(message)

  const encryptedSymmetricKey = await window.litNodeClient.saveEncryptionKey({
    evmContractConditions,
    symmetricKey,
    authSig,
    chain,
  })

  const base64 = await blobToBase64String(encryptedString)

  const objectToSave = {
    key: uint8arrayToString(encryptedSymmetricKey, 'base16'),
    data: base64
  }
  return {encryptedString: JSON.stringify(objectToSave)}
}

export const decrypt = async (objectData) => {

  console.log('test', objectData)
  await connect()
  await setAuth()
  let objectToDecrypt = JSON.parse(objectData)

  const symmetricKey = await client.getEncryptionKey({
    evmContractConditions,
    toDecrypt: objectToDecrypt.key,
    chain,
    authSig,
  });

  const decryptedString = await LitJsSdk.decryptString(
    base64StringToBlob(objectToDecrypt.data),
    symmetricKey
  );

  console.log('here', decryptedString)
  return decryptedString
}

const encryptString = async (str, key = null) => {

  const encodedString: Uint8Array = LitJsSdk.uint8arrayFromString(str, 'utf8');

  const symmKey: CryptoKey = key
  const encryptedString: Blob = await encryptWithSymmetricKey(
    symmKey,
    encodedString.buffer
  );

  const exportedSymmKey: Uint8Array = new Uint8Array(
    await crypto.subtle.exportKey('raw', symmKey)
  );

  return {
    symmetricKey: exportedSymmKey,
    encryptedString,
    encryptedData: encryptedString,
  };
};
