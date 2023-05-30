import { useEffect } from 'react';
import { personStore } from '../../model/store/person.store';

export const useGetPerson = (id: string): void => {
	useEffect(() => {
		personStore.getPersonById(id);
	}, [id]);
};
