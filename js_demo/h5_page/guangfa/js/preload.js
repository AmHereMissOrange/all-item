imgNum=0;
var load_img = [];
for(var i=1;i<=100;i++){
    load_img.push( '../ani_test/img/frame/page1_'+i+'.png' );
}
load_img.push( '../ani_test/img/poster1.jpg' );
load_img.push( '../ani_test/img/poster2.jpg' );
load_img.push( '../ani_test/img/poster3.jpg' );
load_img.push( '../ani_test/img/poster4.jpg' );

load_img.push( '../ani_test/img/g_content_bg.jpg' );
load_img.push( '../ani_test/img/p_content_bg.jpg' );
load_img.push( '../ani_test/img/x_content_bg.jpg' );
load_img.push( '../ani_test/img/y_content_bg.jpg' );
load_img.push( '../ani_test/img/g_content_poster.png' );
load_img.push( '../ani_test/img/p_content_poster.png' );
load_img.push( '../ani_test/img/x_content_poster.png' );
load_img.push( '../ani_test/img/y_content_poster.png' );

/*ss*/

jQuery.imgpreload(load_img, {
    each: function () {
        /*this will be called after each image loaded*/
        var status = $(this).data('loaded') ? 'success' : 'error';
        if (status == "success") {
            var v = (parseFloat(++imgNum) / load_img.length).toFixed(2);
            console.log(Math.round(v * 100) + "%");
        }
    },
    all: function() {
        console.log('全部加载完成')
    }
});
