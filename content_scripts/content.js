chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "getQuestion") {
        const question_container = document.getElementsByClassName("question-content-container row");
        if (question_container.length > 0) {
            const contents = question_container[0].getElementsByClassName("content-value");
            const contexts = []
            for (let i = 0; i < contents.length; i++) {
                const context = contents[i].textContent
                contexts.push(context)
            }
            const answer_container = question_container[0].getElementsByClassName("no-print-row");
            for (let i = 0; i < answer_container.length; i++) {
                const answer = answer_container[i].textContent
                contexts.push(answer)
            }
            sendResponse({ contexts });
        } else {
            sendResponse({ contexts: ["Question container not found"]});
        }
    }
    return true;
});