import { OnePageParser } from "./one_page_parser.js" ;

Hooks.once("init", function() {
    console.log("OnePageParser | Init");

    // Setup global One Page Parser
    window.onePageParser = window.onePageParser || new OnePageParser();

    Hooks.on(
        "renderSceneDirectory",
        (app, html, data) => {
            console.log("OnePageParser | Hook to add button to SceneDirectory");

            // one-page-parser-actions: My class
            // action-buttons and flexrow: FoundryVTT class to format like a button
            window.onePageParser.importButton = $(
                `<div class="one-page-parser-actions action-buttons flexrow">
                    <button class="one-page-parser-import">OnePageParser Import Scene</button>
                </div>`
            );

            window.onePageParser.importButton.click(() => {
                console.log("OnePageParser | importButton click");
                window.onePageParser.importButtonClicked();
            });

            html.find(".header-actions").after(window.onePageParser.importButton);
        }
    );
});
