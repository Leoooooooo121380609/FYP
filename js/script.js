// 页面自适应
// if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//     //alert(navigator.userAgent);
//     //add a new meta node of viewport in head node
//     head = document.getElementsByTagName('head');
//     viewport = document.createElement('meta');
//     viewport.name = 'viewport';
//     viewport.content = 'target-densitydpi=device-dpi, width=' + 750 + 'px, user-scalable=no';
//     head.length > 0 && head[head.length - 1].appendChild(viewport);
// }
if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
    new WOW().init();
};
