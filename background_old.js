chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if(/^https:\/\/www\.upwork/.test(current_tab_info.url)){
            chrome.tabs.insertCSS(null, {file:'./style.css'});
            chrome.tabs.executeScript(null, {file:'./foreground.js'}, () => console.log('i inject!'));
        }
    })
})
