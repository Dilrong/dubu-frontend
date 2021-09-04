import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "state";
import { PotState } from "state/types";
import fetchPot from "./fetchPot";

const initialState: PotState = {
  potData: {
    isLoading: true,
    season: "0",
    participant: "0",
    tvl: "0",
    potEnd: false,
  },
};

export const fetchPotDataAsync = createAsyncThunk("pot/fetchPot", async () => {
  const potData = await fetchPot();
  return potData;
});

export const potSlice = createSlice({
  name: "pot",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPotDataAsync.fulfilled, (state, action) => {
      const potData = action.payload;
      state.potData = { ...potData };
    });
  },
});

// export const { setPotData } = potSlice.actions;
export const selectPot = (state: RootState) => state.pots;
export default potSlice.reducer;
