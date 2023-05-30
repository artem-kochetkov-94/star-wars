import { Table } from "antd";
import { PersonListProps } from "./personList.props";
import { columns } from "./columns";

export const PersonList: React.FC<PersonListProps> = ({ data }) => {
  if (!data || !data.length) {
    return <p>not data</p>;
  }

  return <Table dataSource={data} columns={columns} />;
};
