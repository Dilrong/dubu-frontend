import { utils } from "ethers";
import { ethersToSerializedBigNumber } from "utils/bigNumber";
import { getCakePotContract } from "utils/contractHelpers";

const cakePotContract = getCakePotContract();

const fetchPot = async () => {
  try {
    const season = ethersToSerializedBigNumber(
      await cakePotContract.currentSeason()
    );
    const participant = ethersToSerializedBigNumber(
      await cakePotContract.userCounts(season)
    );
    const tvl = utils.formatEther(await cakePotContract.totalAmounts(season));
    const end = await cakePotContract.checkEnd();
    return {
      isLoading: false,
      season: season,
      participant: participant,
      tvl: tvl,
      potEnd: end,
    };
  } catch (error) {
    return {
      isLoading: true,
      season: "0",
      participant: "0",
      tvl: "0",
      potEnd: false,
    };
  }
};

export default fetchPot;
