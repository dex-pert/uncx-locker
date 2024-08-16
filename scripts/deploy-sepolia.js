// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

  const uniswapV2Locker = await hre.ethers.deployContract("UniswapV2Locker", ["0xce71f5957f481a77161f368ad6dfc61d694cf171"]);

  await uniswapV2Locker.waitForDeployment();

  console.log(
    `deployed to ${uniswapV2Locker.target}`
  );

  await hre.run("verify:verify", {
    address: uniswapV2Locker.target,
    constructorArguments: [
      "0xce71f5957f481a77161f368ad6dfc61d694cf171",
    ],
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
