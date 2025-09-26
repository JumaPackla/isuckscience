document.getElementById("gethtml").addEventListener("click", async () => {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (!tab) return;

    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ["content_scripts/content.js"]
    });

    chrome.tabs.sendMessage(tab.id, { type: "getQuestion" }, (response) => {
        if (chrome.runtime.lastError) {
            document.getElementById("result").textContent = "Error: " + chrome.runtime.lastError.message;
        } else {
            for (const html_response of response.contexts) {
                document.getElementById("result").textContent += html_response;
            }
        }
    });
});