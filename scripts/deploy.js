// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  // const uniswapV2Locker = await hre.ethers.deployContract("UniswapV2Locker", ["0x3784AEa15dF147dE9DeE62F51bdF2d37d3B9Cc79"]);

  // const uniswapV2Locker = await hre.ethers.deployContract("UniswapV2Locker", ["0xD70F64a03D303E7B09570d5Eee4b444803Ed57A3"]);
  const uniswapV2Locker = await hre.ethers.deployContract("UniswapV2Locker", ["0x8267d887f2C6c91629Db7a7236E8894C3470a942"]);
  await uniswapV2Locker.waitForDeployment();

  console.log(
    `deployed to ${uniswapV2Locker.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
