class Header {

    handleOpenShoppingPage() {
        shoppingPage.render();
    }


    render(count) {
        const html = `
            <div class="container">
                <div class="counter" onclick="headerPage.handleOpenShoppingPage()">
                   🔥 ${count}
                </div>
            </div>
        `;
        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();
