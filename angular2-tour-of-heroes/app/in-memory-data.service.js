"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 1, name: 'kite' },
            { id: 2, name: 'tom' },
            { id: 3, name: 'back' },
            { id: 4, name: 'for' },
            { id: 5, name: 'trade' },
            { id: 6, name: 'haha' },
            { id: 7, name: 'hehe' },
            { id: 8, name: 'zaza' },
            { id: 9, name: 'tete' },
            { id: 10, name: 'acc' }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map