import { personStore } from "entities/people/model/store/person.store";
import { PersonUpdateRequestDTO } from "entities/people/model/dto";

type UseUpdatePerson = () => {
  updatePerson: (body: PersonUpdateRequestDTO) => void;
};

export const useUpdatePerson: UseUpdatePerson = () => {
  const updatePerson = (body: PersonUpdateRequestDTO): void => {
    personStore.updatePerson(body);
  };

  return { updatePerson };
};
