const minutes = 25

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({minutes: minutes, seconds: 0})
})