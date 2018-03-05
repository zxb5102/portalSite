import $ from "jquery";
/**
 * 
 * @param {t} t  dom element
 * @param {i} i  height
 * @param {e} e  width
 */
export function fitImg(t, i, e) {
    // console.log(e);
    var s = t.height
        , n = t.width
        , o = i
        , h = e;
        // console.log(s);
    if (n / s > h / o) {
        var a = n * (o / s);
        t.style.height = o + "px",
            t.style.width = a + "px",
            t.style.height = o + "px";
        var r = " 0 0 0 -" + (a - h) / 2 + "px";
        t.style.margin = r
    } else {
        var l = s * (h / n);
        t.style.width = h + "px",
            t.style.height = l + "px";
        r = "-" + (l - o) / 2 + "px 0 0 0 ";
        t.style.margin = r
    }
}
export function autoFit(self) {
    //  var imgHeight =  self.clientHeight;
    //  var imgWidth = self.clientWidth;
    self.style = "";
    var width = document.documentElement.clientWidth;
    var height = $(self).closest(".el-carousel__container").height();
    //  console.log(height);
    fitImg(self, height, width);
}

export function autoFitWrapImg(self) {
    self.style = "";
    var width = $(self).closest(".wrap-img").width();
    var height = $(self).closest(".wrap-img").height();
    // console.log($(self).closest(".wrap-img")[0]);
    fitImg(self, height, width);
}
export function cacheFit(self) {
// console.log(window.windowCacheWidth);
    // if (window.windowCacheWidth && window.windowCacheHeight) {
    //     fitImg(self, window.windowCacheHeight, window.windowCacheWidth);
    //     // console.log(0);
    // } else {
    //     var wrap = $(self).closest(".wrap-img");
    //     window.windowCacheWidth = parseFloat(window.getComputedStyle(wrap[0]).width.replace("px",""));
    //     window.windowCacheHeight = parseFloat(window.getComputedStyle(wrap[0]).height.replace("px",""));
    //     //  = $(self).closest(".wrap-img").width();
    //     // window.windowCacheHeight = $(self).closest(".wrap-img").height();
    //     fitImg(self, window.windowCacheHeight, window.windowCacheWidth);
    //     // console.log(1);
    // }
}