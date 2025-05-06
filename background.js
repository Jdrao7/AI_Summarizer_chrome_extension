chrome.runtime.onInstalled.addListener(()=>{ //This sets up a listener that runs once when the extension is installed or updated.
    chrome.storage.sync.get(["geminiApiKey"],(result)=>{ //This checks if a value called geminiApiKey exists in the user's synced Chrome storage (across devices if logged in).
        if(!result.geminiApiKey){
            chrome.tabs.create({
                url: chrome.runtime.getURL("options.html")
            }); //This opens the options new chromeTab page if the geminiApiKey is not found.
        }
    })
})