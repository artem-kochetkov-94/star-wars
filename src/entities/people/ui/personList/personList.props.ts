import { PeopleResponseDTO } from "entities/people";

export interface PersonListProps {
  data: PeopleResponseDTO["results"];
}
