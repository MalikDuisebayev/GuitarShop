function render() {
  const PRODUCTS_STORE = localeStorageUtils.getProducts();
  headerPage.render(PRODUCTS_STORE.length);
  productsPage.render();
}

let CATALOG = [];

const getCatalog = async () => {
  try {
    const response = await (await fetch("server/catalog.json")).json();
    CATALOG = response;
    render();
  } catch (err) {
    console.log(err);
  }
};
getCatalog();
