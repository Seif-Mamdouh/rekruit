console.log("Starting content script execution...");
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "showButtons") {
    console.log("Action is 'showButtons'. Adding buttons...");
    addButtons();
  }
});


function addButtons() {
  console.log("Inside addButtons function");

  if (!document) {
    console.log("No document found");
    return;
  } else {
    console.log("Document found. Creating buttons...");

    var interview = document.createElement("button");
    interview.id = "interview";
    interview.textContent = "Invite to Phone Screen";

    var reject = document.createElement("button");
    reject.id = "reject";
    reject.textContent = "Not Interested";

    var saveLater = document.createElement("button");
    saveLater.id = "saveLater";
    saveLater.textContent = "Save for Later";

    var buttonContainer = document.querySelector(".pv-top-card-v2-ctas");

    console.log("button container: ", buttonContainer)

    if (buttonContainer) {
      buttonContainer.style.display = "flex";
      buttonContainer.style.gap = "1px";

      buttonContainer.appendChild(interview);
      buttonContainer.appendChild(reject);
      buttonContainer.appendChild(saveLater);
      console.log("Buttons added successfully to the container:",buttonContainer);
    } else {
      console.log("Error: Button container not found");
    }
  }
}
