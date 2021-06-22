// COMPILE INTO https://github.com/WETH10/WETH10/blob/main/contracts/WETH10.sol (random example)

// contract WETH10 {
//     string public constant name = "Wrapped Ether v10";
//     string public constant symbol = "WETH10";
//     uint8  public constant decimals = 18;

//     bytes32 public immutable CALLBACK_SUCCESS = keccak256("ERC3156FlashBorrower.onFlashLoan");
//     bytes32 public immutable PERMIT_TYPEHASH = keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");

//     /// @dev Records amount of WETH10 token owned by account.
//     mapping (address => uint256) public override balanceOf;

//     event Transfer(address indexed from, address indexed to, uint256 value);

//     /// @dev Records current ERC2612 nonce for account. This value must be included whenever signature is generated for {permit}.
//     /// Every successful call to {permit} increases account's nonce by one. This prevents signature from being used multiple times.
//     mapping (address => uint256) public override nonces;

//     /// @dev Records number of WETH10 token that account (second) will be allowed to spend on behalf of another account (first) through {transferFrom}.
//     mapping (address => mapping (address => uint256)) public override allowance;

//     /// @dev Current amount of flash-minted WETH10 token.
//     uint256 public override flashMinted;

//     constructor() {
//         uint256 chainId;
//         assembly {chainId := chainid()}
//         deploymentChainId = chainId;
//         _DOMAIN_SEPARATOR = _calculateDomainSeparator(chainId);
//     }

//     /// @dev Calculate the DOMAIN_SEPARATOR.
//     function _calculateDomainSeparator(uint256 chainId) private view returns (bytes32) {
//         return keccak256(
//             abi.encode(
//                 keccak256("EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)"),
//                 keccak256(bytes(name)),
//                 keccak256(bytes("1")),
//                 chainId,
//                 address(this)
//             )
//         );
//     }

//     /// @dev Returns the total supply of WETH10 token as the ETH held in this contract.
//     function totalSupply() external view override returns (uint256) {
//         return address(this).balance + flashMinted;
//     }

//     function deposit() external override payable {
//         // _mintTo(msg.sender, msg.value);
//         balanceOf[msg.sender] += msg.value;
//         emit Transfer(address(0), msg.sender, msg.value);
//     }
// }

interface Address {
  balance: number;
}

class SolidityTs {
  public keccak256(value: string): string {
    // tslint:disable-next-line: no-any
    return {} as any;
  }

  public bytes(value: string): string {
    // tslint:disable-next-line: no-any
    return {} as any;
  }

  public assembly<T>(input: T): void {}

  public chainid(): number {
    // tslint:disable-next-line: no-any
    return {} as any;
  }

  public address(item: string | this | number): Address {
    // tslint:disable-next-line: no-any
    return {} as any;
  }

  public get abi(): { encode: (...args: any[]) => string } {
    // tslint:disable-next-line: no-any
    return {} as any;
  }

  public get msg(): { value: any; sender: Address } {
    // tslint:disable-next-line: no-any
    return {} as any;
  }

  public emit(event: void): void {}
}

class Mapping<TKey, TValue> {
  _key!: TKey;
  _value!: TValue;

  get value(): TValue {
    // tslint:disable-next-line: no-any
    return {} as any;
  }

  set value(): void {
    // tslint:disable-next-line: no-any
  }
}

function view() {
  console.log('first(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('first(): called');
  };
}

function pure() {
  console.log('first(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('first(): called');
  };
}

function payable() {
  console.log('first(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('first(): called');
  };
}

function _external() {
  console.log('first(): factory evaluated');
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log('first(): called');
  };
}

// tslint:disable-next-line: max-classes-per-file
class Contract extends SolidityTs {
  public readonly name: string = 'Wrapped Ether v10';
  public readonly symbol: string = 'WETH10';
  public readonly decimals: number = 18;

  public readonly CALLBACK_SUCCESS = this.keccak256(
    'ERC3156FlashBorrower.onFlashLoan'
  );

  public readonly PERMIT_TYPEHASH = this.keccak256(
    'Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)'
  );

  public readonly deploymentChainId: number;
  private readonly _DOMAIN_SEPARATOR: string;

  transfer!: (from: Address, to: Address, value: number) => void;

  /// @dev Records amount of WETH10 token owned by account.
  public balanceOf = new Mapping<string, number>();

  // tslint:disable-next-line: member-ordering
  public flashMinted!: number;

  constructor() {
    super();
    // tslint:disable-next-line: prefer-const
    let chainId!: number;
    this.assembly({ chainId: this.chainid() });
    this.deploymentChainId = chainId!;
    this._DOMAIN_SEPARATOR = this._calculateDomainSeparator(chainId);
  }

  /**
   * Total supply
   */
  public totalSupply(): number {
    return this.address(this).balance + this.flashMinted;
  }

  private _calculateDomainSeparator(chainId: number): string {
    return this.keccak256(
      this.abi.encode(
        this.keccak256(
          'EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'
        ),
        this.keccak256(this.bytes(this.name)),
        this.keccak256(this.bytes('1')),
        chainId,
        this.address(this)
      )
    );
  }

  @payable()
  public deposit(): void {
    // _mintTo(msg.sender, msg.value);
    this.balanceOf.value += this.msg.value;
    this.emit(this.transfer(this.address(0), this.msg.sender, this.msg.value));
  }
}
