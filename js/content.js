/**
 * 注入页面的js
 * 本代码将要注入页面中，用于和用户交互。
 * 44886
 * https://github.com/44886/sound-down
 */
var music_url = null; //真实的音频地址，在背景页中获取后，通知过来。
var button_image = chrome.extension.getURL("images/music32.png");
//接收从bg页面传过来的消息，request 参数是一个对象。
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        music_url = request.url;
        showButton();
    }
);

/**显示下载按钮
 * 要探测到有音乐可以下载了，才显示
 */
function showButton() {
    $('#boy-music-button').fadeIn();
    $('#boy-music-url').html(music_url);
    $('#boy-music-href').attr('href', music_url);
}
/**一些按钮的事件监听 */
$(function () {

    /**将按钮加入页面 */
    $('body').append('<div class="boy-music-button" id="boy-music-button"><img src="' + button_image + '" /></div>');
    $('body').append('<div class="boy-music-info" id="boy-music-info"><div class="boy-music-close" id="boy-music-close">x</div><textarea class="boy-music-url" id="boy-music-url">' + music_url + '</textarea><button class="boy-music-down" id="boy-music-down">下载</button><a href="' + music_url + '" class="boy-music-href" id="boy-music-href">右键点我->另存为</a></div>');
    /**为了防止监听过早，所以把点击事件放在了这里面 */
    /**监听外面那个按钮 */
    $('body').on('click', '#boy-music-button', function () {
        $('#boy-music-url').html(music_url);
        $('#boy-music-info').fadeIn();
    });
    /**监听关闭按钮 */
    $('body').on('click', '#boy-music-close', function () {
        $(this).parent().fadeOut();
    });
    /**监听下载按钮 */
    $('body').on('click', '#boy-music-down', function () {
        window.open(music_url);
    });
    /**如果音乐详情页面已经打开，那么要用本方法来动态更改里面的数据 */
});