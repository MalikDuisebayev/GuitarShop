class LocaleStorageUtils {
  constructor() {
    this.keyName = "products";
  }
  getProducts() {
    const productLocaleStorage = localStorage.getItem(this.keyName);
    return productLocaleStorage !== null
      ? JSON.parse(productLocaleStorage)
      : [];
  }
  setProducts(id) {
    let products = this.getProducts();
    let pushProduct = false;
    const index = products.indexOf(id);
    if (index === -1) {
      products.push(id);
      pushProduct = true;
    } else {
      products.splice(index, 1);
    }

    localStorage.setItem(this.keyName, JSON.stringify(products));
    return { pushProduct, products };
  }
}
const localeStorageUtils = new LocaleStorageUtils();
