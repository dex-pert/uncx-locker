// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const factoryAddreess = "0x016B728C91CbA3695BE807C8d5eACC3c491B2096";
  // const uniswapV2Locker = await hre.ethers.deployContract("UniswapV2Locker", [factoryAddreess]);
  // await uniswapV2Locker.waitForDeployment();

  // console.log(
  //   `deployed to ${uniswapV2Locker.target}`
  // );

  const deployAddress = "0x7aa304e9175B634B9949135D828053335Ed78276";

  await hre.run("verify:verify", {
    // address: uniswapV2Locker.target,
    address: deployAddress,
    constructorArguments: [
      factoryAddreess,
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
