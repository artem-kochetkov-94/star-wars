import { useEffect } from "react";
import { personStore } from "entities/people/model/store/person.store";

export const useGetPerson = (id: string) => {
  useEffect(() => {
    personStore.getPersonById(id);
  }, [id]);
};
