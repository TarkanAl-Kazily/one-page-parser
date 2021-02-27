import { OnePageParser } from "./one_page_parser.js" ;

console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.once("init", function() {
    console.log("This code runs once the Foundry VTT software begins it's initialization workflow.");

    // Setup global One Page Parser
    window.onePageParser = window.onePageParser || new OnePageParser();

    Hooks.on(
        "renderSceneDirectory",
        (app, html, data) => {
            console.log("OnePageParser | Hook to modify SceneDirectory");

            window.onePageParser.importButton = $(
                `<div class="one-page-parser-actions flexrow"><button class="one-page-parser-import">Import Button</button></div>`
            );

            html.find(".header-actions").after(window.onePageParser.importButton);

            window.onePageParser.importButton.css("display", "block");
        }
    );

    Hooks.on(
        "renderDialog",
        (app, html, data) => {
            console.log("TARKANAKNA Hook on renderDialog");
            console.log(app);
            console.log(html);
            console.log(data);
        }
    );
});

Hooks.on("ready", function() {
    console.log("This code runs once core initialization is ready and game data is available.");
});


