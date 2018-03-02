/**
 * 
 * @param {t} t  dom element
 * @param {i} i  height
 * @param {e} e  width
 */
export function fitImg(t, i, e) {
    var s = t.height
        , n = t.width
        , o = i
        , h = e;
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