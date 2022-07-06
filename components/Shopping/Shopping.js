class Shopping {
  handleClear() {
    ROOT_SHOPPING.innerHTML = "";
  }
  render() {
    const PRODUCTS_STORE = localeStorageUtils.getProducts();
    let htmlCatalog = "";
    let sumCatalog = 0;
    CATALOG.forEach(({ id, name, price }) => {
      if (PRODUCTS_STORE.indexOf(id) !== -1) {
        sumCatalog += price;
        htmlCatalog += `
                <tr>
                    <td class="shopping-element__name"> 🎸 ${name}</td>
                    <td class="shopping-element__price"> ${price.toLocaleString()} USD </td>
                </tr>
            `;
      }
    });

    const html = `
        <div class="shopping-container">
        <div class="shopping-close" onclick="shoppingPage.handleClear()"></div>
            <table>
                ${htmlCatalog}
                <tr>
                    <td class="shopping-element__name">💰 Сумма:</td>
                    <td class="shopping-element__price">${sumCatalog.toLocaleString()} USD</td>
                </tr>
            </table>
        </div>
    `;

    ROOT_SHOPPING.innerHTML = html;
  }
}

const shoppingPage = new Shopping();
