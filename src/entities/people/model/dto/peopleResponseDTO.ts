import { Person } from '../types/person';

export interface PeopleResponseDTO {
	count: number;
	next: string | null;
	previous: string | null;
	results: Person[];
}
