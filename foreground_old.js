//console.log('from foreground');
//document.querySelector('.container h1').classList.add('spin');

chrome.runtime.sendMessage({message: 'storage i kontrol et bakalim'}, res => {console.log(res);});



