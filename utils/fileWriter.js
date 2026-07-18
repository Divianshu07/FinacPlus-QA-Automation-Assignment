const fs = require('fs');
const path = require('path');

function writeBookDetails(book) {

    const outputDir = path.join(__dirname, '..', 'output');

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    const filePath = path.join(outputDir, 'bookDetails.txt');

    const content = `Book Details
========================
Title      : ${book.title}
Author     : ${book.author}
Publisher  : ${book.publisher}
`;

    fs.writeFileSync(filePath, content, 'utf8');

    return filePath;
}

module.exports = { writeBookDetails };