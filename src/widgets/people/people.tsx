import { observer } from "mobx-react-lite";
import { Pagination } from "features";

import { useGetPeople, peopleStore, PersonList } from "entities/people";

export const People = observer(() => {
  useGetPeople();

  return (
    <div>
      {peopleStore.data?.results.length && (
        <>
          <PersonList data={peopleStore.data.results} />

          <Pagination
            itemsCount={peopleStore.data.count}
            hasNext={!!peopleStore.data.next}
            hasPrevious={!!peopleStore.data.previous}
            previous={peopleStore.getPreviousPage}
            next={peopleStore.getNextPage}
            isFetching={peopleStore.isFetching}
          />
        </>
      )}
    </div>
  );
});
