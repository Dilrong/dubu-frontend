import { useEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from ".";
import { fetchPotDataAsync } from "./pot";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Pots

export const useFetchPotData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPotDataAsync());
  }, [dispatch]);
};
