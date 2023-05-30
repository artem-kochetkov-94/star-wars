import { useRoutes, Navigate } from "react-router-dom";
import { MainPage, PersonPage, PersonPageEdit } from "../../pages";

export const RouterConfig = () => {
  let config = useRoutes([
    {
      path: "/",
      element: <Navigate to="/people" />,
    },
    {
      path: "people",
      element: (
        <>
          {/* <Helmet>
              <title>People</title>
            </Helmet> */}
          <MainPage />
        </>
      ),
    },
    {
      path: "person/:id",
      element: (
        <>
          {/* <Helmet>
            <title>Person</title>
          </Helmet> */}
          <PersonPage />
        </>
      ),
    },
    {
      path: "person/:id/edit",
      element: (
        <>
          {/* <Helmet>
            <title>Person</title>
          </Helmet> */}
          <PersonPageEdit />
        </>
      ),
    },
  ]);

  return config;
};
