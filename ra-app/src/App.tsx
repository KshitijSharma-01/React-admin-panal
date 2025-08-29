import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PosterList } from "./Components/PosterList";
import { PosterEdit } from "./Components/PosterEdit";
import { PosterCreate } from "./Components/PosterCreate";
import { CategoryList } from "./Components/categoriesList";
import { CategoryEdit } from "./Components/CategoriesEdit";
import { CategoryCreate } from "./Components/CategoriesCreate";

const dataProvider = jsonServerProvider("http://localhost:3000");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="categories"
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
    />

    <Resource
      name="posters"
      list={PosterList}
      edit={PosterEdit}
      create={PosterCreate}
    />
  </Admin>
);

export default App;
