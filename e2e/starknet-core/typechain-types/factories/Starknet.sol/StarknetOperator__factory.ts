/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  StarknetOperator,
  StarknetOperatorInterface,
} from "../../Starknet.sol/StarknetOperator";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "LogOperatorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "LogOperatorRemoved",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isOperator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOperator",
        type: "address",
      },
    ],
    name: "registerOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "removedOperator",
        type: "address",
      },
    ],
    name: "unregisterOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class StarknetOperator__factory {
  static readonly abi = _abi;
  static createInterface(): StarknetOperatorInterface {
    return new utils.Interface(_abi) as StarknetOperatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StarknetOperator {
    return new Contract(address, _abi, signerOrProvider) as StarknetOperator;
  }
}