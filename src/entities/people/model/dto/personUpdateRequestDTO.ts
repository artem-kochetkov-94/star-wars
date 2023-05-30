import { Person } from '../types/person';

export interface PersonUpdateRequestDTO {
	id: string;
	data: Person;
}
