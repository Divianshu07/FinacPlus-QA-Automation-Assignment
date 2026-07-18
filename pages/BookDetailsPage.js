class BookDetailsPage {
    constructor(page) {
        this.page = page;

        this.title = page.locator('#title-wrapper #userName-value');
        this.author = page.locator('#author-wrapper #userName-value');
        this.publisher = page.locator('#publisher-wrapper #userName-value');

        this.backButton = page.getByRole('button', { name: 'Back To Book Store' });
        this.addToCollectionButton = page.getByRole('button', { name: 'Add To Your Collection' });
    }

    async getBookDetails() {
        await this.title.waitFor();

        return {
            title: (await this.title.textContent()).trim(),
            author: (await this.author.textContent()).trim(),
            publisher: (await this.publisher.textContent()).trim()
        };
    }

    async backToBookStore() {
        await this.backButton.click();
    }

    async isBookDetailsPageVisible() {
        await this.addToCollectionButton.waitFor();
    }
}

module.exports = { BookDetailsPage };