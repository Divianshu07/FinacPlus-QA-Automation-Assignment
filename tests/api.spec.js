require('dotenv').config();

const { test, expect } = require('@playwright/test');

let userId;

const headers = {
    'x-api-key': process.env.REQRES_API_KEY,
    'Content-Type': 'application/json'
};

test('ReqRes API Automation', async ({ request }) => {

    const createResponse = await request.post('https://reqres.in/api/users', {
        headers,
        data: { name: 'Divianshu', job: 'QA Engineer' }
    });

    expect(createResponse.status()).toBe(201);

    const createBody = await createResponse.json();

    console.log('Create User Response:', createBody);

    userId = createBody.id;

    expect(createBody.name).toBe('Divianshu');
    expect(createBody.job).toBe('QA Engineer');
    expect(userId).toBeTruthy();

    const getResponse = await request.get('https://reqres.in/api/users/2', { headers });

    expect(getResponse.status()).toBe(200);

    const getBody = await getResponse.json();

    console.log('Get User Response:', getBody);

    expect(getBody.data.id).toBe(2);
    expect(getBody.data.first_name).toBeTruthy();
    expect(getBody.data.last_name).toBeTruthy();
    expect(getBody.data.email).toContain('@');

    const updateResponse = await request.put(`https://reqres.in/api/users/${userId}`, {
        headers,
        data: { name: 'Divianshu Chandel', job: 'Senior QA Engineer' }
    });

    expect(updateResponse.status()).toBe(200);

    const updateBody = await updateResponse.json();

    console.log('Update User Response:', updateBody);

    expect(updateBody.name).toBe('Divianshu Chandel');
    expect(updateBody.job).toBe('Senior QA Engineer');
    expect(updateBody.updatedAt).toBeTruthy();
});