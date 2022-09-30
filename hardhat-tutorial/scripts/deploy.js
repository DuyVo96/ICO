const { ethers } = require("hardhat");
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require("../constants");
require("dotenv").config({ path: ".env" });

async function main() {
  const cryptoDevsNFTContract = CRYPTO_DEVS_NFT_CONTRACT_ADDRESS;

  const crytoDevsTokenContract = await ethers.getContractFactory(
    "CryptoDevToken"
  );

  const deployedCryptoDevsTokenContract = await crytoDevsTokenContract.deploy(
    cryptoDevsNFTContract
  );

  console.log(
    "Crypto Devs Token Contract Address:",
    deployedCryptoDevsTokenContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
