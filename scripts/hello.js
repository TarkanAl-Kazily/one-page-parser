console.log("Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function() {
  console.log("This code runs once the Foundry VTT software begins it's initialization workflow.");
});

Hooks.on("ready", function() {
  console.log("This code runs once core initialization is ready and game data is available.");
});


Hooks.on(
"renderScenesDirectory",
(app: JournalSheet, html: JQuery<HTMLElement>, data) => {
  if (
    !window.oneJournal.userPermitted() ||
    html.closest("#OneJournalDirectory").length != 0
  ) {
    return;
  }

  window.oneJournal.openButton = $(
    `<button class="one-journal-open">${i18n("OpenButton")}</button>`
  );
  window.oneJournal.openButton.click(() => {
    window.oneJournal.shell.render(true);
  });
  html.find(".directory-footer").append(window.oneJournal.openButton);

  window.oneJournal.toggleOpenButton(
    getSetting(settings.OPEN_BUTTON_IN_DIRECTORY)
  );
}
);
