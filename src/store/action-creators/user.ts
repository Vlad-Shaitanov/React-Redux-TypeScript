import axios from 'axios';
import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from './../../types/user';

export const fetchUsers = () => {
	return async (dispatch: Dispatch<UserAction>) => {
		try {
			//Состояние загрузки (спиннер)
			dispatch({
				type: UserActionTypes.FETCH_USERS
			});

			const response = await axios.get("https://jsonplaceholder.typicode.com/users");

			//Загрузка полученных данных в хранилище
			setTimeout(() => {
				dispatch({
					type: UserActionTypes.FETCH_USERS_SUCCESS,
					payload: response.data
				});
			}, 700)

		} catch (e) {
			console.log(e);
			dispatch({
				type: UserActionTypes.FETCH_USERS_ERROR,
				payload: "Произошла ошибка при загрузке данных"
			});
		}
	}
};