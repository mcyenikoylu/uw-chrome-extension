// const first = document.createElement("button");
// first.innerText = "SET DATA";
// first.id = "first";

// const second = document.createElement("button");
// second.innerText = "SHOUTOUT TO BACKEND";
// second.id = "second";

const jobSuccessScore = document.querySelector('#__layout > div > div > div.container > div:nth-child(1) > div > div.up-card.py-0 > div > div.col-12.cfe-ui-job-details-content > section.up-card-section.row > div:nth-child(1) > ul > li:nth-child(1)');
const clientLocation = document.querySelector('#__layout > div > div > div.container > div:nth-child(1) > div.cfe-ui-job-details-viewer > div.up-card.py-0 > div > div.col-12.job-details-sidebar > aside > div:nth-child(2) > div > ul > li:nth-child(1) > strong');
const postedOn = document.querySelector('#posted-on > span > span.text-muted');

//'#__layout > div > div > div.container > div:nth-child(1) > div.cfe-ui-job-details-viewer > div.up-card.py-0 > div > div.col-12.job-details-sidebar > aside > div:nth-child(2) > div > ul > li:nth-child(1) > strong'
const mcyDiv = document.createElement('div');
mcyDiv.className = "mcyCSS"
mcyDiv.id = "mcyAlert";
const mcyDivOne = document.createElement('div');
const mcyDivTwo = document.createElement('div');
const mcyDivThree = document.createElement('div');
mcyDivOne.className = "one"
mcyDivTwo.className = "two"
mcyDivThree.className = "three"
mcyDivOne.id = "mcyOne";
mcyDivTwo.id = "mcyTwo";
mcyDivThree.id = "mcyThree";
document.querySelector('#__layout > div > div > div.container').appendChild(mcyDiv);
document.querySelector('#__layout > div > div > div.container > div.mcyCSS').appendChild(mcyDivOne);
document.querySelector('#__layout > div > div > div.container > div.mcyCSS').appendChild(mcyDivTwo);
document.querySelector('#__layout > div > div > div.container > div.mcyCSS').appendChild(mcyDivThree);
document.querySelector('#__layout > div > div > div.container > div.mcyCSS > div.one').appendChild(jobSuccessScore);
document.querySelector('#__layout > div > div > div.container > div.mcyCSS > div.two').appendChild(clientLocation);
document.querySelector('#__layout > div > div > div.container > div.mcyCSS > div.three').appendChild(postedOn);


//list-unstyled --- for

//document.querySelector('#__layout > div > div > div.container > div.mcycss').appendChild(first);
//document.querySelector('#__layout > div > div > div.container > div.mcycss').appendChild(second);

// first.addEventListener('click', () => {
//     chrome.storage.local.set({"password":"123"});
//     console.log('I SET DATA');
// });

// second.addEventListener('click', () => {
//     chrome.runtime.sendMessage({message: 'storage i kontrol et bakalim'});
//     console.log('I SENT THE MESSAGE');
// });

chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
    console.log(request.message);
});