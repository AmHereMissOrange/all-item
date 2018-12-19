/**
 * FlashAn
 * v 1.0.5
 * author: WaveF
 * website: minicg.com
 * qq-group: 206832025
 * descript: Javascript library for Animate CC
 */
window.FlashAn={},
function(){
    var e=!(!window.attachEvent||window.opera),t=/webkit\/(\d+)/i.test(navigator.userAgent)&&RegExp.$1<525,n=[],o=function()
    {for(var e=0;e<n.length;e++)n[e]()},i=document;
    i.ready=function(a){
        if(!e&&!t&&i.addEventListener)
        return i.addEventListener("DOMContentLoaded",a,!1);
        if(!(n.push(a)>1))
        if(e)(
            function(){
                try{
                    i.documentElement.doScroll("left"),o()
                }catch(e){
                    setTimeout(arguments.callee,0)}})();
                    else if(t)var r=setInterval(
                        function(){/^(loaded|complete)$/.test(i.readyState)&&(clearInterval(r),o())},0)};
    var a=document.createElement("meta");
    a.setAttribute("name","viewport"),a.setAttribute("content","width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"),document.getElementsByTagName("head")[0].appendChild(a),FlashAn={include:function(e,t){var n=document.getElementsByTagName("head")[0];if("string"==typeof e&&(e=[e]),e instanceof Array)for(var o=0,i=e.length,a=0;a<i;a++){var r=e[a];if(r.indexOf(".css")!=-1){
        var d=document.createElement("link");
        d.setAttribute("rel","stylesheet"),d.setAttribute("href",e[a]),n.appendChild(d)
    }else if(r.indexOf(".js")!=-1){
        var c=document.createElement("script");
        c.setAttribute("type","text/javascript"),c.setAttribute("src",e[a]),n.appendChild(c),"function"==typeof t&&(c.onload=function(){o++,o==i&&t()})}}},inited:function(e){
            var t=window.setInterval(
                function(){
                    if(void 0!=stage){
                        window.clearInterval(t);
                        var n=AdobeAn.getComposition(AdobeAn.bootcompsLoaded[0]),o=n.getLibrary();
                        exportRoot;
                        "function"==typeof e&&e({root:exportRoot,lib:o,stage:stage,composition:n,AdobeAn:AdobeAn})}},0)
                    },domReady:function(e){
                        document.body?e():document.ready(e)
                    },docTitle:function(e){
        var t=document.querySelector("title");
        t.innerHTML=e}
    }
}();