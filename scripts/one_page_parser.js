
// The OnePageParser class
export class OnePageParser {
    // Button to open UI to import a dungeon
    importButton;

    importButtonClicked() {
        console.log("OnePageParser::importButtonClicked");
        let d = new Dialog({
            title: "Test Dialog",
            content: "<p>You must choose either Option 1, or Option 2</p>",
            buttons: {
                one: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "Option One",
                    callback: () => console.log("Chose One")
                },
                two: {
                    icon: '<i class="fas fa-times"></i>',
                    label: "Option Two",
                    callback: () => console.log("Chose Two")
                }
            },
            default: "two",
            render: html => console.log("Register interactivity in the rendered dialog"),
            close: html => console.log("This always is logged no matter which option is chosen")
        });
        d.render(true);

        let form = new OnePageParserForm({});
        form.render(true);
    }
}

class OnePageParserForm extends FormApplication {
    constructor(options) {
        super(options);
        console.log("OnePageParser::OnePageParserForm | constructor");
    }

    // overrides default
    static get defaultOptions() {
        const options = super.defaultOptions;
        options.template = "modules/foundryvtt-one-page-parser/templates/one-page-parser-form.html";
        return options;
    }

    getData() {
        return {};
    }
}
