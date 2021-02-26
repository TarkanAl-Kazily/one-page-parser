console.log("Hello World! This code runs immediately when the file is loaded.");

class OnePageParser {
    openButton;

}

Hooks.once("init", function() {
    console.log("This code runs once the Foundry VTT software begins it's initialization workflow.");

    window.onePageParser = window.onePageParser || new OnePageParser();

    Hooks.on(
        "renderSceneDirectory",
        (app, html, data) => {
            console.log("TARKANAKNA Hook on renderScenesDirectory");

            window.onePageParser.openButton = $(
                `<button class="one-journal-open">Parser Button</button>`
            );

            html.find(".directory-footer").append(window.onePageParser.openButton);

            window.onePageParser.openButton.css("display", "block");

        }
    );
});

Hooks.on("ready", function() {
    console.log("This code runs once core initialization is ready and game data is available.");
});


