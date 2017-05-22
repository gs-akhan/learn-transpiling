import * as t from "babel-types";
import * as babylon from "babylon";

import traverse from "babel-traverse";
import generator from "babel-generator";


var code = `
    var a = 'azhar';
`
var visitor = {
    Identifier(path) {
       console.log("We have identifier");
    }
}

var ast = babylon.parse(code);

traverse(ast, visitor);
let result = generator(ast).code;
console.log(result);
