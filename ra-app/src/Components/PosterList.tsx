import {
  ImageField,
  List,
  ReferenceField,
  TextField,
  NumberField,
  useRecordContext,
  EditButton,
  TopToolbar,
  SelectColumnsButton,
  ExportButton,
  DatagridConfigurable,
} from "react-admin";
import { PosterFilterSidebar } from "./FitlerList";

const PosterListActions = () => (
  <TopToolbar>
    <SelectColumnsButton />
    <ExportButton />
  </TopToolbar>
);

const UrlField = ({ source }: { source: string }) => {
  const record = useRecordContext();
  if (!record) return null;
  return (
    <a href={record[source]} target="_blank" rel="noopener noreferrer">
      view
    </a>
  );
};

export const PosterList = () => (
  <List aside={<PosterFilterSidebar />} actions={<PosterListActions />}>
    <DatagridConfigurable>
      <TextField source="id" />
      <ReferenceField source="category_id" reference="categories" />
      <TextField source="title" />
      <NumberField source="width" label="width(cm)" />
      <NumberField source="height" label="height(cm)" />
      <NumberField source="price" label="price($)" />
      <ImageField
        source="thumbnail"
        sx={{ "& img": { maxWidth: 80, maxHeight: 80, objectFit: "cover" } }}
      />
      <UrlField source="image" />
      <TextField source="description" />
      <NumberField source="stock" />
      <NumberField source="sales" sx={{ fontWeight: "bold" }} />
      <EditButton />
    </DatagridConfigurable>
  </List>
);
