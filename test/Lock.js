const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const pairABI = require('../abi/pairABI.json');
const { ethers } = require("hardhat");
const factoryABI = require('../abi/factoryABI.json')

describe("Lock", function () {

  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const Lock = await ethers.getContractFactory("UniswapV2Locker");
    const lock = await Lock.deploy("0x3784AEa15dF147dE9DeE62F51bdF2d37d3B9Cc79");

    const Token = await ethers.getContractFactory("FIRE");
    const token = await Token.deploy(2)

    return { lock, token, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right unlockTime", async function () {
      const { lock, token, owner } = await loadFixture(deployOneYearLockFixture);

      const balance = await token.balanceOf(owner.address)
      await token.connect(owner).approve(token.target, balance)
      await token.openTrading(balance,'0x6239cA7C648EEC451f1152BEfb003eB322139455', {value: 1000000})
      console.log("---------------------")
      const pair = new ethers.Contract("0x6c3871db95d490847f4bb8b99dcefa25af2bd434", pairABI, owner)
      const pairBalance = await pair.balanceOf(owner.address)
      const token0 = await pair.token0()
      const token1 = await pair.token1()
      console.log("pairBalance:",pairBalance)
      console.log("token0:",token0)
      console.log("token1:",token1)
      const factoryContract = new ethers.Contract("0x3784AEa15dF147dE9DeE62F51bdF2d37d3B9Cc79", factoryABI, owner)
      const pairAddress = await factoryContract.getPair(token0, token1)
      console.log("pairAddress:",pairAddress)

      await pair.approve(lock.target, pairBalance)
      await lock.connect(owner).lockLPToken("0x6c3871db95d490847f4bb8b99dcefa25af2bd434", pairBalance, "1826051200", "0x0000000000000000000000000000000000000000", true, "0xd792133FaDb54a793fC7D25eCdC1F925aD5A8918", {value: ethers.parseEther("1")})
    });
  });
});
