import { useQuery } from "@tanstack/react-query";
import TableData from "../form/Table";
import { getData } from "../../Apis/testApis";
import { message } from "antd";

function Home() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["fetchData"],
    queryFn: getData,
  });
  if (isError) {
    message.error(error);
  }

  return (
    <>
      <div
        style={{ fontSize: "20px", textAlign: "center", fontStyle: "italic" }}
      >
        Data From Backend
      </div>
      <div style={{ margin: "10px", overflow: "auto", maxHeight: "80vh" }}>
        <TableData data={data} />
      </div>
    </>
  );
}

export default Home;
