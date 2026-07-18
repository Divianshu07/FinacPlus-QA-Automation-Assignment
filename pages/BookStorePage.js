class BookStorePage {
    constructor(page) {
        this.page = page;

        this.loginMenuButton = page.getByRole('button', { name: 'Login' });
        this.userNameLabel = page.locator('#userName-value');
        this.logoutButton = page.getByRole('button', { name: 'Logout' });
        this.searchBox = page.getByRole('textbox', { name: 'Type to search' });
        this.bookLink = page.getByRole('link', { name: /Learning JavaScript Design/i });
    }

    async open() {
        await this.page.goto('https://demoqa.com/books');
    }

    async openLogin() {
        await this.loginMenuButton.click();
    }

    async verifyLoggedInUser(username) {
        await this.userNameLabel.waitFor();

        const actualUser = (await this.userNameLabel.textContent()).trim();

        if (actualUser !== username) {
            throw new Error(`Login failed. Expected: ${username}, Actual: ${actualUser}`);
        }
    }

    async searchBook(bookName) {
        await this.searchBox.fill(bookName);
        await this.bookLink.waitFor();
    }

    async openBook() {
        await this.bookLink.click();
    }

    async logout() {
        await this.logoutButton.waitFor({ state: 'visible' });
        await this.logoutButton.click();
    }
}

module.exports = { BookStorePage };