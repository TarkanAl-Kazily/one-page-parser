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
        const promiseResult = new Promise(async (resolve, reject) => {
            // The parser logic
            // Tries to create a new scene from the info in the form.
            // On success, can call 'resolve' with a helpful message.
            // On failure, calls 'reject' with an error message.

            // TODO Find right filelist that contains the formData.json-file
            const fileList = $("#one-page-parser-json")[0].files;

            //console.log($('form[name="one-page-parser-form"]'));
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

            if (fileList.length != 1) {
                ui.notifications.error("Must import a JSON file");
                validData = false;
            } else {
                await readTextFromFile(fileList[0]).then(json => formData.json = json);
            }

            await $.get(formData.img).fail( () => {
                ui.notifications.error("Background Image file not found");
                validData = false;
            });

            if (validData) {
                try {
                    this.updateScene(formData);
                    ui.notifications.info("Imported Scene");
                    resolve("Imported Scene");
                } catch (error) {
                    reject(error);
                }
            } else {
                reject("Form data is not valid. See error notifications.");
            }
        });
        return promiseResult;
    }

    async updateScene(formData) {
        const loader = new TextureLoader();
        const texture = await loader.loadTexture(formData.img);

        let info = await JSON.parse(formData.json);

        let list = [];

        let min_x = Number.MAX_SAFE_INTEGER;
        let min_y = Number.MAX_SAFE_INTEGER;

        info["rects"].forEach((element, index, array) => {
            const g = formData.grid;
            // convert rect to a set of walls
            list.push({c: [element.x * g, element.y * g, element.x * g + element.w * g, element.y * g]});
            list.push({c: [element.x * g, element.y * g, element.x * g, element.y * g + element.h * g]});
            list.push({c: [element.x * g + element.w * g, element.y * g, element.x * g + element.w * g, element.y * g + element.h * g]});
            list.push({c: [element.x * g, element.y * g + element.h * g, element.x * g + element.w * g, element.y * g + element.h * g]});
            min_x = Math.min(min_x, element.x * g, element.x * g + element.w * g);
            min_y = Math.min(min_y, element.y * g, element.y * g + element.w * g);
        });

        // This makes sure all the walls are inside the map (may be off by a grid box still)
        list.forEach((element, index, array) => {
            list[index].c[0] -= min_x;
            list[index].c[1] -= min_y;
            list[index].c[2] -= min_x;
            list[index].c[3] -= min_y;
        });

        try {
            const newScene = await Scene.create({
                name: formData.name,
                grid: formData.grid,
                img: formData.img,
                height: texture.height,
                width: texture.width,
                padding: 0,
                fogExploration: true,
                tokenVision: true,
            });
            newScene.createEmbeddedEntity("Wall", list, {noHook: false});
        } catch (error) {
            ui.notifications.error(error);
            console.log("Error with Walls.create");
        }

    }

}
