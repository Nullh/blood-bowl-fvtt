export default class bbItemSheet extends ItemSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 530,
            height: 340,
            classes: ["bb", "sheet", "skill"]
        })
    }

    get template(){
        return `systems/blood-bowl/templates/sheets/${this.item.data.type}-sheet.hbs`;
    }

    getData() {
        const data = super.getData();

        data.config = CONFIG.bb;

        return data;
    }
}