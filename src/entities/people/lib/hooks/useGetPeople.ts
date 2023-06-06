import { useEffect } from 'react';
import { peopleStore } from '../../model/store/people.store';

export const useGetPeople = () => {
	useEffect(() => {
		peopleStore.getPeople(1, peopleStore.search);
	}, []);
};
