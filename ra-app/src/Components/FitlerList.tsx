import { FilterList, FilterListItem,FilterLiveSearch } from "react-admin";
import { Card, CardContent } from "@mui/material";
import CategoryIcon from "@mui/icons-material/Category";

export const PosterFilterSidebar = () => {
  return (
    <Card sx={{ order: -1, mr: "24px", mt: "40px", width: 250 }}>
      <CardContent>
        <FilterLiveSearch />
        <FilterList label="Categories" icon={<CategoryIcon />}>
          <FilterListItem label="animal" value={{ category_id: 1 }} />
          <FilterListItem label="bread" value={{ category_id: 2 }} />
          <FilterListItem label="business" value={{ category_id: 3 }} />
          <FilterListItem label="car" value={{ category_id: 4 }} />
          <FilterListItem label="city" value={{ category_id: 5 }} />
        </FilterList>
      </CardContent>
    </Card>
  );
};
