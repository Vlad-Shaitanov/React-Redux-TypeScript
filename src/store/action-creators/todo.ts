import { TodoActionTypes } from './../../types/todo';
import axios from 'axios';
import { Dispatch } from 'redux';
import { TodoAction } from '../../types/todo';

export const fetchTodos = (page = 1, limit = 10) => {
	return async (dispatch: Dispatch<TodoAction>) => {
		try {
			//Состояние загрузки (спиннер)
			dispatch({
				type: TodoActionTypes.FETCH_TODOS
			});

			const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
				params: { _page: page, _limit: limit }
			});

			//Загрузка полученных данных в хранилище
			setTimeout(() => {
				dispatch({
					type: TodoActionTypes.FETCH_TODOS_SUCCESS,
					payload: response.data
				});
			}, 700)

		} catch (e) {
			console.log(e);
			dispatch({
				type: TodoActionTypes.FETCH_TODOS_ERROR,
				payload: "Произошла ошибка при загрузке списка дел"
			});
		}
	}
};

export const setTodoPage = (page: number): TodoAction => {
	return {
		type: TodoActionTypes.SET_TODO_PAGE,
		payload: page
	};
};