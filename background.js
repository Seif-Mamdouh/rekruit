console.log("Starting content script execution...");

console.log("Adding listener for tab updates...");
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log("Tab updated. Tab ID:", tabId);
  console.log("Change info:", changeInfo);
  console.log("Tab:", tab);

  if (changeInfo.status === "complete" && tab.url && tab.url.includes("linkedin.com")) {
    console.log(
      "Page load complete on LinkedIn. Sending message to content script..."
    );
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log("Querying tabs. Found tabs:", tabs);
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "showButtons" },
        function (response) {
          console.log("Message sent to content script. Response:", response);
        }
      );
    });
  }
});
