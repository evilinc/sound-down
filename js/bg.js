/**
 * 背景页面
 * 本页面用于监听浏览器中正在获取的声音，并获取他们的下载地址。
 * 44886
 * https://github.com/44886/sound-down
 */
chrome.webRequest.onBeforeRequest.addListener(function interceptRequest(request) {
    var url = decodeURIComponent(request.url);
    chrome.tabs.sendMessage(request.tabId, {
        url: url,
        type: 'mp3'
    });
}, {
    urls: ['http://*/*.mp3*', 'https://*/*.mp3*']
}, ['blocking']);

chrome.webRequest.onBeforeRequest.addListener(function interceptRequest(request) {
    var url = decodeURIComponent(request.url);
    chrome.tabs.sendMessage(request.tabId, {
        url: url,
        type: 'aac'
    });
}, {
    urls: ['http://*/*.aac*', 'https://*/*.aac*']
}, ['blocking']);

chrome.webRequest.onBeforeRequest.addListener(function interceptRequest(request) {
    var url = decodeURIComponent(request.url);
    chrome.tabs.sendMessage(request.tabId, {
        url: url,
        type: 'm4a'
    });
}, {
    urls: ['http://*/*.m4a*', 'https://*/*.m4a*']
}, ['blocking']);

chrome.webRequest.onBeforeRequest.addListener(function interceptRequest(request) {
    var url = decodeURIComponent(request.url);
    chrome.tabs.sendMessage(request.tabId, {
        greeting: url,
        type: 'mp4'
    });
}, {
    urls: ['http://*/*.mp4*', 'https://*/*.mp4*']
}, ['blocking']);