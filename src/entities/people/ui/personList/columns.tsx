import { Link } from "react-router-dom";
import { Person, getUrlId } from "entities/people";

export const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Height",
    dataIndex: "height",
    key: "height",
  },
  {
    title: "Birth Year",
    dataIndex: "birth_year",
    key: "birth_year",
  },
  {
    title: "Link",
    dataIndex: "url",
    key: "url",
    render: (text: Person["url"]): JSX.Element => {
      return <Link to={`/person/${getUrlId(text)}`}>link</Link>;
    },
  },
];
