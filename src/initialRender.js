import { productRender } from "./inventory";
import { products } from "./state";

const initialRender = () => {
  //open product sideBar
  productRender(products);
};

export default initialRender;
