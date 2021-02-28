// The OnePageParser class
export class OnePageParser {
    // Button to open UI to import a dungeon
    importButton;

    importButtonClicked() {
        console.log("OnePageParser::importButtonClicked");
        let form = new OnePageParserForm({});
        form.render(true);
    }
}

class OnePageParserForm extends FormApplication {
    constructor(options) {
        super(options);
        console.log("OnePageParser::OnePageParserForm | constructor");
        console.log(this);
    }

    // overrides superclass
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.template = "modules/foundryvtt-one-page-parser/templates/one-page-parser-form.html";
        options.editable = true;
        options.width = 450;
        options.height = "auto";
        options.classes = ["one-page-parser"];
        return options;
    }

    // must override - abstract function
    _updateObject(event, formData) {
        const promiseResult = new Promise(this.parseForm);
        return promiseResult;
    }

    // The parser logic
    // Tries to create a new scene from the info in the form.
    // On success, can call 'resolve' with a helpful message.
    // On failure, calls 'reject' with an error message.
    async parseForm(resolve, reject) {
        ui.notifications.error("Not yet implemented");
        reject("Not yet implemented");
    }

}
