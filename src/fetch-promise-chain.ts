interface Product {
  name: string;
  price: number;
  image: string;
  type: string;
}

const fetchPromise4 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  // Each function is decoupled and not dependent on eachother anymore.
  // THe only contraint is that the result from one handler gets forwarded to the next.
  fetchPromise4
    .then((response: Response) => response.json() as Promise<Product[]>) // A sort of typecasting
    .then((products: Product[]) => {
        products.forEach((product: Product) => {
            console.log(product.name);
          });
    });

    console.log('Chaining promises ... ');
  