import { DataTable, List } from "react-admin";
export const CategoryList = () => (
  <List>
    {" "}
    <DataTable>
      {" "}
      <DataTable.Col source="id" /> <DataTable.Col source="name" />{" "}
    </DataTable>{" "}
  </List>
);
