import { PeopleResponseDTO } from "../dto";
import { PersonResponseDTO } from "../dto/person.response.dto";
import { PersonUpdateRequestDTO } from "../dto/person.update.request.dto";

export interface IPeopleService {
  getPeople(page?: string): Promise<PeopleResponseDTO | null>;
  getPersonById(id: string): Promise<PersonResponseDTO | null>;
  updatePerson(body: PersonUpdateRequestDTO): Promise<PersonResponseDTO | null>;
}
