require('dotenv').config();

const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage');
const { BookStorePage } = require('../pages/BookStorePage');
const { BookDetailsPage } = require('../pages/BookDetailsPage');
const { writeBookDetails } = require('../utils/fileWriter');

test('FinacPlus QA Assignment - DemoQA Book Store', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const bookStorePage = new BookStorePage(page);
    const bookDetailsPage = new BookDetailsPage(page);

    const username = process.env.DEMOQA_USERNAME;
    const password = process.env.DEMOQA_PASSWORD;

    await bookStorePage.open();
    await bookStorePage.openLogin();

    await loginPage.login(username, password);

    await bookStorePage.verifyLoggedInUser(username);

    await bookStorePage.searchBook('Learning JavaScript Design Patterns');

    await bookStorePage.openBook();

    await bookDetailsPage.isBookDetailsPageVisible();

    const book = await bookDetailsPage.getBookDetails();

    console.log('Book Details:', book);

    expect(book.title).toBe('Learning JavaScript Design Patterns');
    expect(book.author).toBe('Addy Osmani');
    expect(book.publisher).toBe("O'Reilly Media");

    const filePath = writeBookDetails(book);

    console.log(`Book details saved to: ${filePath}`);

    await test.info().attach('Book Details', {
        body: JSON.stringify(book, null, 2),
        contentType: 'application/json'
    });

    await bookDetailsPage.backToBookStore();

    await bookStorePage.logout();

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});