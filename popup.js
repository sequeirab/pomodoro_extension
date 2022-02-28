const pomodoro = {
    getMinutes() {
        let minutes;
        chrome.storage.sync.get(["minutes"] , result => {
            minutes = result.minutes;
        })
        return minutes;
    }
}

console.log(pomodoro.getMinutes());