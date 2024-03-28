/* eslint-disable react/prop-types */
import { Table } from "antd";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
];

const TableData = ({ data }) => (
  <Table pagination={false} rowKey={"id"} columns={columns} dataSource={data} />
);
export default TableData;
