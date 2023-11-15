import Container from "../../Shared/Container/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";

const Categories = () => {
  return (
    <Container>
        <div className="p-4 flex items-center justify-between overflow-x-auto ">
        {categories?.map((category)=><CategoryBox key={category.label} icon={category.icon} label={category.label}></CategoryBox>)}
        </div>
    </Container>
  )
};

export default Categories;
