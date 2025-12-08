import { OnePageParser } from "./one_page_parser.js" ;

Hooks.once("init", function() {
    console.log("OnePageParser | Init");

    // Setup global One Page Parser
    window.onePageParser = window.onePageParser || new OnePageParser();

    Hooks.on(
        "renderSceneDirectory",
        (app, html, data) => {
            console.log("OnePageParser | Hook to add button to SceneDirectory");

            const importButton =
                `<div class="one-page-parser-actions action-buttons flexrow">
                    <button class="one-page-parser-import">OnePageParser</button>
                </div>`;

            const header = html.querySelector(".header-actions");
            if (header) {
                header.insertAdjacentHTML("beforeend", importButton);
            }
            html.querySelector(".one-page-parser-import")?.addEventListener("click", async () => {
                window.onePageParser.importButtonClicked();
            });
        }
    );
});
