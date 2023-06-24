import { MeHealthScannerArtifact } from "../artifacts/MeHealthScanner";
import Web3 from "web3";
import { CHAIN_ID } from "../constants";

const { address, abi } = MeHealthScannerArtifact
const useMeHealthScanner = () => {
    const web3 = new Web3(Web3.givenProvider)
    return new web3.eth.Contract(abi, address[CHAIN_ID])
}

export default useMeHealthScanner
