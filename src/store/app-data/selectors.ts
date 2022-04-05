import { NameSpace, RootState } from "../root-reducer";

export const getResponce = (state: RootState): string => state[NameSpace.data].response;
export const getIsLoading = (state: RootState): boolean => state[NameSpace.data].isLoading;
