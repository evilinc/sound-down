/**
 * 注入页面的js
 * 本代码将要注入页面中，用于和用户交互。
 * 44886
 * https://github.com/44886/sound-down
 */
let music_url = null; //真实的音频地址，在背景页中获取后，通知过来。
//接收从bg页面传过来的消息，request 参数是一个对象。
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        music_url = request.url;
        console.log(music_url);

    });