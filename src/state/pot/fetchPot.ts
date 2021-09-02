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
    const tvl = ethersToSerializedBigNumber(
      await cakePotContract.totalAmounts(season)
    );
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
      season: null,
      participant: null,
      tvl: null,
      potEnd: null,
    };
  }
};

export default fetchPot;
