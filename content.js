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
    
    var interviewImg = document.createElement("img");
    interviewImg.src = chrome.runtime.getURL("./icons/plusIcon.png");
    interviewImg.width = 20;
    interviewImg.height = 20;
    interview.prepend(interviewImg);
    
    var rejectImg = document.createElement("img");
    rejectImg.src = chrome.runtime.getURL("./icons/trash.png");
    rejectImg.width = 20;
    rejectImg.height = 20;
    reject.prepend(rejectImg);
    
    var saveImg = document.createElement("img");
    saveImg.src = chrome.runtime.getURL("./icons/archive.png");
    saveImg.width = 20;
    saveImg.height = 20;
    saveLater.prepend(saveImg);
    
    console.log("button container: ", buttonContainer)
    
    // buttonContainer.style.display = "flex";
    // buttonContainer.style.gap = "2px";
    var buttonContainer = document.createElement("div");
    buttonContainer.id = "buttonContainer";

    buttonContainer.appendChild(interview);
    buttonContainer.appendChild(reject);
    buttonContainer.appendChild(saveLater);
    
    
    var linkedinContainer = document.querySelector(".pv-top-card-v2-ctas");
    
    console.log(
      "Buttons added successfully to the container:",
      linkedinContainer
    );
    
    if (linkedinContainer) {
      linkedinContainer.appendChild(buttonContainer);
      linkedinContainer.style.flexWrap = "wrap";
      linkedinContainer.style.display = "flex";
    }
    else {
      console.log("Error: Button container not found");
    }
    }
}
