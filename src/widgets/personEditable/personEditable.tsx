import { PersonCard, personStore, useGetPerson } from "entities/people";
import { PersonEditableProps } from "./personEditable.props";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

export const PersonEditable: React.FC<PersonEditableProps> = observer(
  ({ id }) => {
    useGetPerson(id);

    if (personStore.isFetching) {
      return <p>fetching...</p>;
    }

    if (!personStore.data) {
      return <p>not data</p>;
    }

    return (
      <PersonCard
        data={personStore.data}
        controlsSlot={<Link to={`/person/${id}/edit`}>edit</Link>}
      />
    );
  }
);
