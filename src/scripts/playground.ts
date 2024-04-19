import { Account, Contract, RpcProvider } from "starknet";
import sierraArtifacts from "../../target/dev/hack_template_HackTemplate.contract_class.json";
import * as dotenv from "dotenv";
dotenv.config();

const SUMMARY_STATS_ADDRESS =
  "0x36031daa264c24520b11d93af622c848b2499b66b41d611bac95e13cfca131a";
const PRAGMA_ORACLE_ADDRESS =
  "0x06df335982dddce41008e4c03f2546fa27276567b5274c7d0c1262f3c2b5d167";
const CONTRACT_ADDRESS =
  "0x0587858a015e15cdb6fa45113d14af1061ca4c6f093a1a7e1cfca7d197f00327";

async function main() {
  const provider = new RpcProvider({ nodeUrl: process.env.STARKNET_RPC });
  console.log("Provider connected to:", process.env.STARKNET_RPC);

  const privateKey0 = process.env.PRIVATE_KEY ?? "";
  const accountAddress0: string =
    "0x041b45D7be33c61A0Dbc78ED923BA22Ea0339b745af7cA662fC1973F7eC4E411";

  const account0 = new Account(provider, accountAddress0, privateKey0);
  console.log("Account 0 connected.\n");

  const testClassHash =
    "0x06e2ae82c92d2fbb6d96544af461cc7bea8e7f1080baefb37c3e08786bb2142d";

  const contract = new Contract(sierraArtifacts.abi, CONTRACT_ADDRESS);
  contract.connect(account0);

  const tx = await contract.initializer(
    PRAGMA_ORACLE_ADDRESS,
    SUMMARY_STATS_ADDRESS,
  );

  const txReceipt = await provider.waitForTransaction(tx.transaction_hash);
  console.log("transaction receipt", txReceipt);
}

main();
