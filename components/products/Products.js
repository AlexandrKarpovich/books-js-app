class Products {
    constructor() {
        this.classNameActive = 'card__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handlerSetLocalStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if(pushProduct) {
            element.classList.add(this.classNameActive)
            element.innerHTML = this.labelRemove
        } else {
            element.classList.remove(this.classNameActive)
            element.innerHTML = this.labelAdd
        }

        headerPage.render(products.length)
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, img, price, description}) => {
            let activeClass = '';
            let activeText = '';

            if(productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;


            } else {
                activeClass = this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
                <div class="card">
                    <div class="card__img"><img class="img" src="${img}" /></div>
                    <span class="card__title">${name}</span>
                    <span class="card__price">${price.toLocaleString()} 💰</span>
                    <p class="card__descrp">${description}</p>
                    <button class="card__btn ${activeClass}" onclick="productsPage.handlerSetLocalStorage(this, '${id}');">
                        ${activeText}
                    </button>
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
