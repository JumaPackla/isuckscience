chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "getQuestion") {
        const question_container = document.getElementsByClassName("question-content-container row");
        if (question_container.length > 0) {
            const contents = question_container[0].getElementsByClassName("content-value");
            const contexts = []
            for (let i = 0; i < contents.length; i++) {
                const context = contents[i].length > 0 ? contents[i].innerHTML : "No content found";
                contexts.push(context)
            }
            sendResponse({ contexts });
        } else {
            sendResponse({ contexts: ["Question container not found"]});
        }
    }
    return true;
});
