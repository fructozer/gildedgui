import Inventory from "./gui_builder.js"

var guis = []
$('gui').get().forEach(e => {
    guis.push(new Inventory($(e)))
});
