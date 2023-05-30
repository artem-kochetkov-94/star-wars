import { Person } from "../types/person.interface";

export interface PeopleResponseDTO {
  count: number;
  next: string | null;
  previous: string | null;
  results: Person[];
}
