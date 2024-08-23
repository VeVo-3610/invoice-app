import {
  newProductName,
  newProductPrice,
  productCardTemplate,
  productGroup,
  productSelect,
} from "./selectors";
import { v4 as uuidv4 } from "uuid";
import { products } from "./state";

export const addNewProductBtnHandler = () => {
  const creatId = uuidv4();
  productGroup.append(
    createProductCard(
      creatId,
      newProductName.value,
      newProductPrice.valueAsNumber
    )
  );
  productSelect.append(
    new Option(
      `${newProductName.value} - ${newProductPrice.valueAsNumber}`,
      creatId
    )
  );

  products.push({
    id: creatId,
    name: newProductName.value,
    price: newProductPrice.valueAsNumber,
  });

  console.log(products);

  newProductName.value = null;
  newProductPrice.value = null;
};

export const productRender = (products) => {
  products.forEach(({ id, name, price }) => {
    productGroup.append(createProductCard(id, name, price));
    productSelect.append(new Option(`${name} - ${price}`, id));
  });
};

export const createProductCard = (id, name, price) => {
  const productCard = productCardTemplate.content.cloneNode(true);
  const currentProductCard = productCard.querySelector(".product-card");
  const productName = productCard.querySelector(".product-name");
  const productPrice = productCard.querySelector(".product-price");

  currentProductCard.id = id;

  productName.innerText = name;
  productPrice.innerText = price;

  return productCard;
};
