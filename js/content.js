/**
 * 注入页面的js
 * 本代码将要注入页面中，用于和用户交互。
 * 44886
 * https://github.com/44886/sound-down
 */
var  music_url = null; //真实的音频地址，在背景页中获取后，通知过来。
var button_image=chrome.extension.getURL("images/music32.png");
//接收从bg页面传过来的消息，request 参数是一个对象。
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        music_url = request.url;
        console.log(music_url);
        showButton();
    }
);

/**显示下载按钮
 * 要探测到有音乐可以下载了，才显示
 */
function showButton() {
    console.log('哈哈');
    $('body').append('<div class="boy-music-down" id="boy-music-down"><img src="'+button_image+'" /></div>');
}