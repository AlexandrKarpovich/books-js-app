class Products {

    render() {
        let htmlCatalog = '';
        CATALOG.forEach(({id, name, img, price, description}) => {
            // console.log(id, name, img, price, description);
            htmlCatalog += `
                <div class="card">
                    <div class="card__img"><img class="img" src="${img}" /></div>
                    <span class="card__title">${name}</span>
                    <span class="card__price">💸 ${price.toLocaleString()}</span>
                    <p class="card__descrp">${description}</p>
                    <button class="card__btn">Добавить в корзину</button>
                </div>
            `
        })

        const html = `
            <div class="container">
                <div class="grid">
                    ${htmlCatalog}
                </div>
            </div>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }

}

const productsPage = new Products();
productsPage.render();
