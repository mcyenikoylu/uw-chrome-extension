let active_tab_id = 0;
chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        active_tab_id = tab.tabId;
        if(/^https:\/\/www\.upwork/.test(current_tab_info.url)){
            chrome.tabs.insertCSS(null, {file:'./style.css'});
            chrome.tabs.executeScript(null, {file:'./foreground.js'}, () => console.log('i inject!'));
        }
    })
})

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    
    if(request.message === 'storage i kontrol et bakalim') {
        chrome.tabs.sendMessage(active_tab_id, {message: 'mesajini aldim'});

        chrome.storage.local.get("password", value => {
            console.log(value);
        })
    }
})

chrome.runtime.onInstalled.addListener(function (details) {
    if(details.reason == "install") {
        chrome.tabs.create({
            url: 'https://dotnetmcy.net/'
        });
    }
})

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo.status === 'complete') {
		// browser.tabs.executeScript(tab.ib, {
		// 	file: 'inject.js'
        // });
        console.log('changeInfo');
    }
    console.log('onUpdated');
});