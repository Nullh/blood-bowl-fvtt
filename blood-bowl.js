import { bb } from "./module/config.js";
import bbItemSheet from "./module/sheets/bbItemSheet.js"
import bbPlayerSheet from "./module/sheets/bbPlayerSheet.js"

Hooks.once("init", function() {
    console.log("blood-bowl | Initialising Blood Bowl system");

    CONFIG.bb = bb;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("blood-bowl", bbItemSheet, { makeDefault: true});

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("blood-bowl", bbPlayerSheet, { makeDefault: true});
});
