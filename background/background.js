chrome.runtime.onInstalled.addListener((details) => {
  console.log('Extension installed/updated. Reason:', details.reason);
  chrome.storage.sync.get(['enabled'], (res) => {
    if (res.enabled === undefined) {
      chrome.storage.sync.set({ enabled: true });
    }
  });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Background received message:', message, 'from', sender?.tab?.id);
  if (message?.type === 'GET_RANDOM') {
    sendResponse({ random: Math.random() });
  }
});