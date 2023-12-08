function openPage(page){

    var sheight = screen.availHeight;
    var swidth = screen.availWidth;

    window.open(page+".html","","width=500,height=300,top="+(sheight/2-150)+",left"+(swidth/2-250));
}