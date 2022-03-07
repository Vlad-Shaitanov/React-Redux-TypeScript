import * as UserActionCreators from "../store/action-creators/user";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export const useActions = () => {
	const dispatch = useDispatch();

	return bindActionCreators(UserActionCreators, dispatch);
};