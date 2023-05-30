import { useParams } from "react-router-dom";
import { PersonEditForm } from "features";

type RouteParams = {
  id: string;
};

export const PersonPageEdit = () => {
  const { id } = useParams<keyof RouteParams>() as RouteParams;

  return <PersonEditForm id={id} />;
};
