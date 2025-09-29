chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "getQuestion") {
        const question_container = document.getElementsByClassName("question-content-container row");
        if (question_container.length > 0) {
            const contents = question_container[0].getElementsByClassName("content-value");
            let contexts = ""
            for (let i = 0; i < contents.length; i++) {
                const context = contents[i].textContent
                contexts += context + "\n"
            }
            
            let answer_options = ""
            const answer_container = question_container[0].getElementsByClassName("no-print-row");
            console.log(answer_container)
            for (let i = 0; i < answer_container.length; i++) {
                const answer = answer_container[i].textContent
                answer_options += answer
            }
            console.log(answer_options)
            sendResponse({ contexts });
        } else {
            sendResponse({ contexts: ["Question container not found"]});
        }
    }
    return true;
});