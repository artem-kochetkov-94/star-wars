import { PeopleResponseDTO } from 'src/entities/people';

export interface PersonListProps {
	data: PeopleResponseDTO['results'];
	isFetching: boolean;
}
