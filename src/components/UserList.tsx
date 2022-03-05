import React, { FC } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

export const UserList: FC = () => {
	const { users, error, loading } = useTypedSelector(state => state.user);

	return (
		<div>UserList</div>
	)
}
