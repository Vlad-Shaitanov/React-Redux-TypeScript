import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

//Типизация хука
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;