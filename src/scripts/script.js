import { uuid } from "uuidv4";

class Product {
  constructor(name, img, price, description) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.description = description;
    this.uuid = uuid();
    this.id = price;
  }
}
const product1 = new Product(
  "Vase en terre cuite",
  "images/vase.jpg",
  23.2,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product2 = new Product(
  "Lampe de chevet",
  "images/lampe.jpg",
  34.1,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product3 = new Product(
  "Lot de bracelet",
  "images/bracelet.jpg",
  13.2,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product4 = new Product(
  "Style bic",
  "images/stylo.jpg",
  2.05,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product5 = new Product(
  "Mug à thé",
  "images/tasse.jpg",
  7.1,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product6 = new Product(
  "Minitel",
  "images/minitel.jpg",
  17.25,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product7 = new Product(
  "1 Chaussure",
  "images/chaussure.jpg",
  94.33,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product8 = new Product(
  "Smartphone Huawei",
  "images/smartphone.jpg",
  61.21,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product9 = new Product(
  "Souris sans fil",
  "images/souris.jpg",
  1.1,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);
const product10 = new Product(
  "Déodorant toilette",
  "images/airwicks.jpg",
  11.33,
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
);

let productList = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
];

export { productList };
