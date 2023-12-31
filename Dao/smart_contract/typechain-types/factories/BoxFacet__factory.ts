/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BoxFacet, BoxFacetInterface } from "../BoxFacet";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "ValueChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "addProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "addProposalStruct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "changeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllTransactions",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "proposalId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "value",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
        ],
        internalType: "struct BoxFacet.BoxStruct[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProposal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTransactionCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieve",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "retrieveOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "store",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506001805460ff60a01b1933166001600160a81b031990911617600160a01b1790556106a5806100416000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80636057361d116100665780636057361d146100e55780638db0f3d7146100f8578063a6f9dae11461010b578063b9e2bea01461013b578063d608f4501461014357600080fd5b806327506f53146100985780632e64cec1146100b65780632e7700f0146100c85780633fec91a4146100d0575b600080fd5b6100a061015e565b6040516100ad9190610535565b60405180910390f35b6000545b6040519081526020016100ad565b6003546100ba565b6100e36100de36600461045e565b600255565b005b6100e36100f336600461045e565b61026d565b6100e3610106366004610476565b6102a8565b6100e3610119366004610430565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b6002546100ba565b6001546040516001600160a01b0390911681526020016100ad565b60606004805480602002602001604051908101604052809291908181526020016000905b82821015610264578382906000526020600020906004020160405180608001604052908160008201548152602001600182015481526020016002820180546101c99061061e565b80601f01602080910402602001604051908101604052809291908181526020018280546101f59061061e565b80156102425780601f1061021757610100808354040283529160200191610242565b820191906000526020600020905b81548152906001019060200180831161022557829003601f168201915b5050505050815260200160038201548152505081526020019060010190610182565b50505050905090565b60008190556040518181527f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c599060200160405180910390a150565b6001600360008282546102bb91906105fa565b909155506102ca905083600255565b604080516080810182528481526020808201858152928201848152426060840152600480546001810182556000829052845191027f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b810191825594517f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19c8601559051805193949193610385937f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19d909301929190910190610397565b50606082015181600301555050505050565b8280546103a39061061e565b90600052602060002090601f0160209004810192826103c5576000855561040b565b82601f106103de57805160ff191683800117855561040b565b8280016001018555821561040b579182015b8281111561040b5782518255916020019190600101906103f0565b5061041792915061041b565b5090565b5b80821115610417576000815560010161041c565b600060208284031215610441578081fd5b81356001600160a01b0381168114610457578182fd5b9392505050565b60006020828403121561046f578081fd5b5035919050565b60008060006060848603121561048a578182fd5b8335925060208401359150604084013567ffffffffffffffff808211156104af578283fd5b818601915086601f8301126104c2578283fd5b8135818111156104d4576104d4610659565b604051601f8201601f19908116603f011681019083821181831017156104fc576104fc610659565b81604052828152896020848701011115610514578586fd5b82602086016020830137856020848301015280955050505050509250925092565b60006020808301818452808551808352604092508286019150828160051b870101848801865b838110156105ec57603f1989840301855281516080815185528882015189860152878201518189870152805180838801528b92505b808310156105ae578183018b015187840160a00152918a0191610590565b808311156105bf578b60a082890101525b60609384015193870193909352505094870194601f01601f191690920160a001919086019060010161055b565b509098975050505050505050565b6000821982111561061957634e487b7160e01b81526011600452602481fd5b500190565b600181811c9082168061063257607f821691505b6020821081141561065357634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fdfea2646970667358221220c2b2d871041c320a6744845685ccdf65b43f562482a76a276c64f98eec7b39d464736f6c63430008040033";

type BoxFacetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BoxFacetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BoxFacet__factory extends ContractFactory {
  constructor(...args: BoxFacetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BoxFacet> {
    return super.deploy(overrides || {}) as Promise<BoxFacet>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BoxFacet {
    return super.attach(address) as BoxFacet;
  }
  connect(signer: Signer): BoxFacet__factory {
    return super.connect(signer) as BoxFacet__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BoxFacetInterface {
    return new utils.Interface(_abi) as BoxFacetInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoxFacet {
    return new Contract(address, _abi, signerOrProvider) as BoxFacet;
  }
}
