module.exports = function () {
    var faker = require('faker');
    var _ = require('lodash');

    return {
        posts: _.times(100, function (index) {
            return {
                id: index,
                title: faker.name.title(),
                author: faker.name.findName()
            }
        })
    }
};
