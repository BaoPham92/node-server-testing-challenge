const db = require("../../Data/dbConfig");
const { insert } = require("./users-model");

describe('Users model', () => {
    describe('insert helper function.', () => {

        beforeEach(async () => {
            await db("users").truncate();
        });

        test('should insert a user', async () => {
            await insert({ name: 'Cuma' })

            console.log(
                'CONSOLE LOG THE USER LENGTH AND RETURNED LIST OF USERS.',
                await db('users'),
                await db('users').length
            );
            expect(await db('users')).toHaveLength(1);
        })
    })
})