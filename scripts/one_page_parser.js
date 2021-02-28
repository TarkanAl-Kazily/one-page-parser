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
        const promiseResult = new Promise((resolve, reject) => {
            // The parser logic
            // Tries to create a new scene from the info in the form.
            // On success, can call 'resolve' with a helpful message.
            // On failure, calls 'reject' with an error message.
            console.log(formData);

            let validData = true;

            if (isNaN(formData.grid)) {
                ui.notifications.error("Grid Size must be a number");
                validData = false;
            }
            
            if (formData.grid < 50) {
                ui.notifications.error("Grid Size must be at least 50");
                validData = false;
            }

            if (formData.name == "") {
                ui.notifications.error("Scene Name must not be empty");
                validData = false;
            }

            $.get(formData.img).fail( () => {
                ui.notifications.error("Background Image file not found");
                validData = false;
            });

            $.get(formData.json).fail( () => {
                ui.notifications.error("JSON Import file not found");
                validData = false;
            });

            if (validData) {
                try {
                    this.createScene(formData);
                } catch (error) {
                    reject(error);
                }
            } else {
                reject("Form data is not valid. See error notifications.");
            }

            ui.notifications.info("Imported Scene");
            resolve("Imported Scene");
        });
        return promiseResult;
    }

    createScene(formData) {
        const scene = Scene.create(formData);
    }

}
