export default class bbPlayerSheet extends ActorSheet {
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            template: "systems/blood-bowl/templates/sheets/player-sheet.hbs",
            classes: ["bb", "sheet", "player"]
        });
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.bb;
        data.skills = data.items.filter(function(item) {return item.type == "skill"});
        return data;
    }

    activateListeners(html) {
        html.find(".item-create").click(this._onItemCreate.bind(this));
        html.find(".item-delete").click(this._onItemDelete.bind(this));
        html.find(".skill-collapsible").click(this._onCollapse.bind(this));

        super.activateListeners(html);
    }

    _onItemCreate(event) {
        event.preventDefault();
        let element = event.currentTarget;

        let itemData = {
            name: "New Item",
            type: element.dataset.type
        };
        
        return this.actor.createOwnedItem(itemData);
    }

    _onItemDelete(event) {
        event.preventDefault();
        let element = event.currentTarget;
        let itemId = element.closest(".item").dataset.itemId;

        return this.actor.deleteOwnedItem(itemId);
    }

    _onCollapse(event) {
        event.preventDefault();
        let element = event.currentTarget;
        
        let collapsible = element.closest(".item").getElementsByClassName("collapsible-content")[0];
        let icon = element.childNodes[0];

        element.classList.toggle("active");
        if (collapsible.style.maxHeight){
            collapsible.style.maxHeight = null;
            icon.className = "fas fa-chevron-down";

        } else {
            collapsible.style.maxHeight = collapsible.scrollHeight + "px";
            icon.className = "fas fa-chevron-up";
        }
    }

}
