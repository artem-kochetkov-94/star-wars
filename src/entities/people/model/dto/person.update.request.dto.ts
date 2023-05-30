import { Person } from "../types/person.interface";

export interface PersonUpdateRequestDTO {
  id: string;
  data: Person;
}
