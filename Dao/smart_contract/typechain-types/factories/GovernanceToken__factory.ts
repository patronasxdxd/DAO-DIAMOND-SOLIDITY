/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GovernanceToken,
  GovernanceTokenInterface,
} from "../GovernanceToken";

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
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "pos",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "fromBlock",
            type: "uint32",
          },
          {
            internalType: "uint224",
            name: "votes",
            type: "uint224",
          },
        ],
        internalType: "struct ERC20Votes.Checkpoint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "delegates",
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
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getVotes",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "s_maxSupply",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x61014060405269d3c21bcecceda1000000600a553480156200002057600080fd5b506040518060400160405280600f81526020016e23b7bb32b93730b731b2aa37b5b2b760891b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600f81526020016e23b7bb32b93730b731b2aa37b5b2b760891b8152506040518060400160405280600281526020016111d560f21b8152508160039080519060200190620000bf92919062000174565b508051620000d590600490602084019062000174565b5050825160208085019190912083518483012060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81880181905281830187905260608201869052608082019490945230818401528151808203909301835260c0019052805194019390932091935091906080523060601b60c0526101205250620002579350505050565b82805462000182906200021a565b90600052602060002090601f016020900481019282620001a65760008555620001f1565b82601f10620001c157805160ff1916838001178555620001f1565b82800160010185558215620001f1579182015b82811115620001f1578251825591602001919060010190620001d4565b50620001ff92915062000203565b5090565b5b80821115620001ff576000815560010162000204565b600181811c908216806200022f57607f821691505b602082108114156200025157634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160601c60e0516101005161012051611c87620002aa6000396000610e5e01526000610ead01526000610e8801526000610de101526000610e0b01526000610e350152611c876000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c80636fcfff45116100c3578063a457c2d71161007c578063a457c2d714610307578063a9059cbb1461031a578063c3cda5201461032d578063d505accf14610340578063dd62ed3e14610353578063f1127ed81461036657600080fd5b80636fcfff451461027557806370a082311461029d5780637ecebe00146102c65780638e539e8c146102d957806395d89b41146102ec5780639ab24eb0146102f457600080fd5b8063395093511161011557806339509351146101da5780633a46b1a8146101ed57806340c10f1914610200578063587cde1e146102155780635c19a95c146102595780635d6418471461026c57600080fd5b806306fdde031461015d578063095ea7b31461017b57806318160ddd1461019e57806323b872dd146101b0578063313ce567146101c35780633644e515146101d2575b600080fd5b6101656103a3565b6040516101729190611b64565b60405180910390f35b61018e610189366004611a8e565b610435565b6040519015158152602001610172565b6002545b604051908152602001610172565b61018e6101be3660046119ea565b61044d565b60405160128152602001610172565b6101a2610471565b61018e6101e8366004611a8e565b610480565b6101a26101fb366004611a8e565b6104a2565b61021361020e366004611a8e565b610521565b005b61024161022336600461199e565b6001600160a01b039081166000908152600760205260409020541690565b6040516001600160a01b039091168152602001610172565b61021361026736600461199e565b61052f565b6101a2600a5481565b61028861028336600461199e565b61053c565b60405163ffffffff9091168152602001610172565b6101a26102ab36600461199e565b6001600160a01b031660009081526020819052604090205490565b6101a26102d436600461199e565b610564565b6101a26102e7366004611b4c565b610582565b6101656105de565b6101a261030236600461199e565b6105ed565b61018e610315366004611a8e565b610682565b61018e610328366004611a8e565b6106fd565b61021361033b366004611ab7565b61070b565b61021361034e366004611a25565b610841565b6101a26103613660046119b8565b6109a5565b610379610374366004611b0e565b6109d0565b60408051825163ffffffff1681526020928301516001600160e01b03169281019290925201610172565b6060600380546103b290611c06565b80601f01602080910402602001604051908101604052809291908181526020018280546103de90611c06565b801561042b5780601f106104005761010080835404028352916020019161042b565b820191906000526020600020905b81548152906001019060200180831161040e57829003601f168201915b5050505050905090565b600033610443818585610a62565b5060019392505050565b60003361045b858285610b86565b610466858585610c00565b506001949350505050565b600061047b610dd4565b905090565b60003361044381858561049383836109a5565b61049d9190611bb7565b610a62565b60004382106104f85760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064015b60405180910390fd5b6001600160a01b038316600090815260086020526040902061051a9083610efb565b9392505050565b61052b8282610fd4565b5050565b610539338261105e565b50565b6001600160a01b03811660009081526008602052604081205461055e906110d7565b92915050565b6001600160a01b03811660009081526005602052604081205461055e565b60004382106105d35760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064016104ef565b61055e600983610efb565b6060600480546103b290611c06565b6001600160a01b038116600090815260086020526040812054801561066f576001600160a01b038316600090815260086020526040902061062f600183611bef565b8154811061064d57634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b0316610672565b60005b6001600160e01b03169392505050565b6000338161069082866109a5565b9050838110156106f05760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104ef565b6104668286868403610a62565b600033610443818585610c00565b8342111561075b5760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e6174757265206578706972656400000060448201526064016104ef565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b0388169181019190915260608101869052608081018590526000906107d5906107cd9060a00160405160208183030381529060405280519060200120611140565b85858561118e565b90506107e0816111b6565b861461082e5760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e63650000000000000060448201526064016104ef565b610838818861105e565b50505050505050565b834211156108915760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016104ef565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886108c08c6111b6565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061091b82611140565b9050600061092b8287878761118e565b9050896001600160a01b0316816001600160a01b03161461098e5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016104ef565b6109998a8a8a610a62565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60408051808201909152600080825260208201526001600160a01b0383166000908152600860205260409020805463ffffffff8416908110610a2257634e487b7160e01b600052603260045260246000fd5b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b6001600160a01b038316610ac45760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104ef565b6001600160a01b038216610b255760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104ef565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610b9284846109a5565b90506000198114610bfa5781811015610bed5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104ef565b610bfa8484848403610a62565b50505050565b6001600160a01b038316610c645760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104ef565b6001600160a01b038216610cc65760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104ef565b6001600160a01b03831660009081526020819052604090205481811015610d3e5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104ef565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610d75908490611bb7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610dc191815260200190565b60405180910390a3610bfa8484846111e3565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610e2d57507f000000000000000000000000000000000000000000000000000000000000000046145b15610e5757507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b8154600090815b81811015610f6d576000610f1682846111ee565b905084868281548110610f3957634e487b7160e01b600052603260045260246000fd5b60009182526020909120015463ffffffff161115610f5957809250610f67565b610f64816001611bb7565b91505b50610f02565b8115610fbf5784610f7f600184611bef565b81548110610f9d57634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b0316610fc2565b60005b6001600160e01b031695945050505050565b610fde8282611209565b6002546001600160e01b0310156110505760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b60648201526084016104ef565b610bfa60096112f0836112fc565b6001600160a01b038281166000818152600760208181526040808420805485845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610bfa82848361149f565b600063ffffffff82111561113c5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b60648201526084016104ef565b5090565b600061055e61114d610dd4565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061119f878787876115dc565b915091506111ac816116c9565b5095945050505050565b6001600160a01b03811660009081526005602052604090208054600181018255905b50919050565b505050565b6111de8383836118ca565b60006111fd6002848418611bcf565b61051a90848416611bb7565b6001600160a01b03821661125f5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104ef565b80600260008282546112719190611bb7565b90915550506001600160a01b0382166000908152602081905260408120805483929061129e908490611bb7565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a361052b600083836111e3565b600061051a8284611bb7565b8254600090819080156113555785611315600183611bef565b8154811061133357634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b0316611358565b60005b6001600160e01b0316925061137183858763ffffffff16565b91506000811180156113bd5750438661138b600184611bef565b815481106113a957634e487b7160e01b600052603260045260246000fd5b60009182526020909120015463ffffffff16145b1561142b576113cb826118fc565b866113d7600184611bef565b815481106113f557634e487b7160e01b600052603260045260246000fd5b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b03160217905550611496565b856040518060400160405280611440436110d7565b63ffffffff168152602001611454856118fc565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b816001600160a01b0316836001600160a01b0316141580156114c15750600081115b156111de576001600160a01b0383161561154f576001600160a01b038316600090815260086020526040812081906114fc90611965856112fc565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611544929190918252602082015260400190565b60405180910390a250505b6001600160a01b038216156111de576001600160a01b03821660009081526008602052604081208190611585906112f0856112fc565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516115cd929190918252602082015260400190565b60405180910390a25050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561161357506000905060036116c0565b8460ff16601b1415801561162b57508460ff16601c14155b1561163c57506000905060046116c0565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611690573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166116b9576000600192509250506116c0565b9150600090505b94509492505050565b60008160048111156116eb57634e487b7160e01b600052602160045260246000fd5b14156116f45750565b600181600481111561171657634e487b7160e01b600052602160045260246000fd5b14156117645760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016104ef565b600281600481111561178657634e487b7160e01b600052602160045260246000fd5b14156117d45760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016104ef565b60038160048111156117f657634e487b7160e01b600052602160045260246000fd5b141561184f5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016104ef565b600481600481111561187157634e487b7160e01b600052602160045260246000fd5b14156105395760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016104ef565b6001600160a01b038381166000908152600760205260408082205485841683529120546111de9291821691168361149f565b60006001600160e01b0382111561113c5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b60648201526084016104ef565b600061051a8284611bef565b80356001600160a01b038116811461198857600080fd5b919050565b803560ff8116811461198857600080fd5b6000602082840312156119af578081fd5b61051a82611971565b600080604083850312156119ca578081fd5b6119d383611971565b91506119e160208401611971565b90509250929050565b6000806000606084860312156119fe578081fd5b611a0784611971565b9250611a1560208501611971565b9150604084013590509250925092565b600080600080600080600060e0888a031215611a3f578283fd5b611a4888611971565b9650611a5660208901611971565b95506040880135945060608801359350611a726080890161198d565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611aa0578182fd5b611aa983611971565b946020939093013593505050565b60008060008060008060c08789031215611acf578182fd5b611ad887611971565b95506020870135945060408701359350611af46060880161198d565b92506080870135915060a087013590509295509295509295565b60008060408385031215611b20578182fd5b611b2983611971565b9150602083013563ffffffff81168114611b41578182fd5b809150509250929050565b600060208284031215611b5d578081fd5b5035919050565b6000602080835283518082850152825b81811015611b9057858101830151858201604001528201611b74565b81811115611ba15783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115611bca57611bca611c3b565b500190565b600082611bea57634e487b7160e01b81526012600452602481fd5b500490565b600082821015611c0157611c01611c3b565b500390565b600181811c90821680611c1a57607f821691505b602082108114156111d857634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fdfea2646970667358221220e8c5adb9518bbb1a3713371e66338a0df807965bb7fbfa3b53510c70ddf30e2f64736f6c63430008040033";

type GovernanceTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GovernanceTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GovernanceToken__factory extends ContractFactory {
  constructor(...args: GovernanceTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GovernanceToken> {
    return super.deploy(overrides || {}) as Promise<GovernanceToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GovernanceToken {
    return super.attach(address) as GovernanceToken;
  }
  connect(signer: Signer): GovernanceToken__factory {
    return super.connect(signer) as GovernanceToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernanceTokenInterface {
    return new utils.Interface(_abi) as GovernanceTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernanceToken {
    return new Contract(address, _abi, signerOrProvider) as GovernanceToken;
  }
}