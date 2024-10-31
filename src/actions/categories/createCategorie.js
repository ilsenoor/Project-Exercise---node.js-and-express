import categorieData from "src/data/categories.json" assert { type: "json" };
import { v4 as uuid } from "uuid";

const createCategorie = (name, id) => {
  const newUser = {
    name,
    id: uuid(),
  };

  categorieData.users.push(newCategorie);
  return newCategorie;
};

export default createCategorie;
