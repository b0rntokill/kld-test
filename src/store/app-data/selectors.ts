import { NameSpace, RootState } from "../root-reducer";

export const getResponce = (state: RootState): string => state[NameSpace.data].response;
export const getIsRequest = (state: RootState): boolean => state[NameSpace.data].isRequest;
