"use strict";

class UserStorage {
    static #users = {
        id: ["민웅기", "서범석"],
        psword: ["1234", "12345"],
        name: ["2018", "2017"],
    };

    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;