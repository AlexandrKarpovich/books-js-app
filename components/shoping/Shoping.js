class Shopping {

    handleClear() {
        ROOT_SHOPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '',
            sumCatalog = 0;

        CATALOG.forEach(({id, name, img, price, description}) => {
            if(productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping__element__name">⚡ ${name}</td>
                        <td class="shopping__element__price" > ${price.toLocaleString()} 💰</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });

        const html = `
           <div class="shopping__block">
               <div class="container">
                    <div class="shopping__close" onclick="shoppingPage.handleClear()"></div>
                    <table>
                        ${htmlCatalog}
                        <tr>
                            <td class="shopping__element__name">✨ Сумма </td>
                            <td class="shopping__element__price">${sumCatalog.toLocaleString()} 💰</td>
                        </tr>
                    </table>
               </div>
           </div>
        `;
        ROOT_SHOPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();
