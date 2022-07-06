function render() {
  const PRODUCTS_STORE = localeStorageUtils.getProducts();
  headerPage.render(PRODUCTS_STORE.length);
  productsPage.render();
}

let CATALOG = [];

const getCatalog = async () => {
  try {
    const response = await (
      await fetch("http://myjson.dit.upm.es/api/bins/g68v")
    ).json(); //Если ссылка не открывается используйте "server/catalog.json"
    CATALOG = response;
    render();
  } catch (err) {
    console.log(err);
  }
};
getCatalog();
