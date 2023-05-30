import { PeopleResponseDTO } from '../dto';
import { PersonResponseDTO } from '../dto/personResponseDTO';
import { PersonUpdateRequestDTO } from '../dto/personUpdateRequestDTO';

export interface IPeopleService {
	getPeople(page?: string): Promise<PeopleResponseDTO | null>;
	getPersonById(id: string): Promise<PersonResponseDTO | null>;
	updatePerson(body: PersonUpdateRequestDTO): Promise<PersonResponseDTO | null>;
}
