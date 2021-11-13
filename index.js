function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

// http://myjson.dit.upm.es/api/bins/76y9
// server/catalog.json
fetch('https://myjson.dit.upm.es/api/bins/76y9')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;

        setTimeout(() => {
            spinnerPage.handleClear();
            render();
        }, 500);


    })
    .catch( error => {
        spinnerPage.handleClear();
        errorPage.render();
    })


