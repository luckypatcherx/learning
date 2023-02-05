!function(e) {
"use strict";
var o= {
init:function() {
this.initialised||(this.initialised=!0,  e.fn.themeSticky&&this.stickySidebar())

},

 stickySidebar:function() {
e(".sidebar-wrapper").themeSticky( {
autoInit:!0, minWidth:991, containerSelector:".row, .container", autoFit:!0, paddingOffsetBottom:10, paddingOffsetTop:30
}
)
},

 
};

jQuery(document).ready(function() {
o.init()
}
)
}
(jQuery);
