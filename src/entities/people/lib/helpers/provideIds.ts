import { PeopleResponseDTO } from "../../model/dto";
import { getUrlId } from "./getUrlId";

export const provideIds = (data: PeopleResponseDTO): PeopleResponseDTO => {
  return {
    ...data,
    results: data.results.map(
      (item) => (
        console.log("item", item.url.split("/")),
        {
          ...item,
          _id: getUrlId(item.url),
        }
      )
    ),
  };
};
