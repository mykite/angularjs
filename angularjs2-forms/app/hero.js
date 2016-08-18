"use strict";
/**
    创建对象
    ?表示为可省略
*/
var Hero = (function () {
    function Hero(id, name, power, alterEgo) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.alterEgo = alterEgo;
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=hero.js.map