/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DiamondLoupeFacet,
  DiamondLoupeFacetInterface,
} from "../DiamondLoupeFacet";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_functionSelector",
        type: "bytes4",
      },
    ],
    name: "facetAddress",
    outputs: [
      {
        internalType: "address",
        name: "facetAddress_",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facetAddresses",
    outputs: [
      {
        internalType: "address[]",
        name: "facetAddresses_",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_facet",
        type: "address",
      },
    ],
    name: "facetFunctionSelectors",
    outputs: [
      {
        internalType: "bytes4[]",
        name: "facetFunctionSelectors_",
        type: "bytes4[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "facets",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "facetAddress",
            type: "address",
          },
          {
            internalType: "bytes4[]",
            name: "functionSelectors",
            type: "bytes4[]",
          },
        ],
        internalType: "struct IDiamondLoupe.Facet[]",
        name: "facets_",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "_interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610694806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806301ffc9a71461005c57806352ef6b2c146100bd5780637a0ed627146100d2578063adfca15e146100e7578063cdffacc614610107575b600080fd5b6100a861006a3660046104cf565b6001600160e01b03191660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131f602052604090205460ff1690565b60405190151581526020015b60405180910390f35b6100c561015f565b6040516100b4919061053b565b6100da6101d2565b6040516100b4919061059b565b6100fa6100f53660046104a1565b6103d5565b6040516100b49190610588565b6101476101153660046104cf565b6001600160e01b031916600090815260008051602061063f83398151915260205260409020546001600160a01b031690565b6040516001600160a01b0390911681526020016100b4565b6060600060008051602061063f833981519152600281018054604080516020808402820181019092528281529394508301828280156101c757602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116101a9575b505050505091505090565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131e5460609060008051602061063f833981519152908067ffffffffffffffff81111561022e57634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561027457816020015b60408051808201909152600081526060602082015281526020019060019003908161024c5790505b50925060005b818110156103cf5760008360020182815481106102a757634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b03169050808583815181106102e857634e487b7160e01b600052603260045260246000fd5b6020908102919091018101516001600160a01b03928316905290821660009081526001860182526040908190208054825181850281018501909352808352919290919083018282801561038757602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116103495790505b50505050508583815181106103ac57634e487b7160e01b600052603260045260246000fd5b6020026020010151602001819052505080806103c790610617565b91505061027a565b50505090565b6001600160a01b03811660009081527fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131d6020908152604091829020805483518184028101840190945280845260609360008051602061063f833981519152939092919083018282801561049457602002820191906000526020600020906000905b82829054906101000a900460e01b6001600160e01b031916815260200190600401906020826003010492830192600103820291508084116104565790505b5050505050915050919050565b6000602082840312156104b2578081fd5b81356001600160a01b03811681146104c8578182fd5b9392505050565b6000602082840312156104e0578081fd5b81356001600160e01b0319811681146104c8578182fd5b6000815180845260208085019450808401835b838110156105305781516001600160e01b0319168752958201959082019060010161050a565b509495945050505050565b6020808252825182820181905260009190848201906040850190845b8181101561057c5783516001600160a01b031683529284019291840191600101610557565b50909695505050505050565b6020815260006104c860208301846104f7565b60006020808301818452808551808352604092508286019150828160051b870101848801865b8381101561060957888303603f19018552815180516001600160a01b031684528701518784018790526105f6878501826104f7565b95880195935050908601906001016105c1565b509098975050505050505050565b600060001982141561063757634e487b7160e01b81526011600452602481fd5b506001019056fec8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131ca2646970667358221220672286def39de569a064048802c2dc6b872d8a69ecffbae301dfe4f9e64c8ce064736f6c63430008040033";

type DiamondLoupeFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DiamondLoupeFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DiamondLoupeFacet__factory extends ContractFactory {
  constructor(...args: DiamondLoupeFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DiamondLoupeFacet> {
    return super.deploy(overrides || {}) as Promise<DiamondLoupeFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DiamondLoupeFacet {
    return super.attach(address) as DiamondLoupeFacet;
  }
  connect(signer: Signer): DiamondLoupeFacet__factory {
    return super.connect(signer) as DiamondLoupeFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DiamondLoupeFacetInterface {
    return new utils.Interface(_abi) as DiamondLoupeFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DiamondLoupeFacet {
    return new Contract(address, _abi, signerOrProvider) as DiamondLoupeFacet;
  }
}
