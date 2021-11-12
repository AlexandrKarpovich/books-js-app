class Footer {

    render() {
        const html = `
            <div class="container">
                <div class="counter">
<!--                   🔥 77-->
                </div>
            </div>
        `;
        ROOT_FOOTER.innerHTML = html;
    }
}
const footerPage = new Footer();
footerPage.render();
