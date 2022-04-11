import * as CryptoJs from "crypto-js";
class Block {
  // static으로 선언하면 인스턴스가 아니여도 사용할 수 있다. 그냥 바로 클래스에서 사용 가능 즉, Block.cacluateBlackHash가능
  static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string => {
    return CryptoJs.SHA256(index + previousHash + timestamp + data).toString();
  };

  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" && typeof aBlock.hash === "string" && typeof aBlock.previousHash === "string" && typeof aBlock.timestamp === "number" && typeof aBlock.data === "string";

  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "20220407", "", "Hello", 1234);

// 만들어둔 Block 타입으로 배열을 이룸 따라서 Block 타입이 아니면 blockchain 배열에 넣을 수 없음
let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLatestBlock();
  console.log("previous", previousBlock);
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
  const newBlock: Block = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
  addBlock(newBlock);
  return newBlock;
};

// 새로운 블럭 리턴
console.log(createNewBlock("TEST!"));

const getHashforBlock = (aBlock: Block): string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

function isBlockValid(candidateBlock: Block, previousBlock: Block): boolean {
  if (Block.validateStructure(candidateBlock)) return false;
  if (previousBlock.index + 1 !== candidateBlock.index) return false;
  if (previousBlock.hash !== candidateBlock.previousHash) return false;
  if (getHashforBlock(candidateBlock) !== candidateBlock.hash) return false;
  return true;
}

function addBlock(candidateBlock: Block): void {
  if (isBlockValid(candidateBlock, getLatestBlock())) {
    blockchain.push(candidateBlock);
  }
}
