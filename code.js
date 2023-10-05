// ==UserScript==
// @name     Ebay Price Range Remover
// @version  1
// @grant    none
// ==/UserScript==
var domainName = window.location.hostname;
if (domainName == 'www.ebay.com' || domainName == 'ebay.com'){
    var ele = document.querySelectorAll('span.DEFAULT');
    var elelength = ele.length;
    var priceRangeNode;
    for (var i = 0; i < elelength; i++) {
        priceRangeNode = ele[i];
        while (priceRangeNode && priceRangeNode.nodeName != '#document') {
            if (priceRangeNode.nodeName == 'LI') {
                break;
            }
            priceRangeNode = priceRangeNode.parentNode;
        }
        priceRangeNode.parentNode.removeChild(priceRangeNode);
    }
    document.getElementsByTagName("BODY")[0].insertAdjacentHTML('afterend','<div id="doneLloading" style="position:fixed;bottom:50%;left:0;width:232px;height:75px;background-color:blue;background-image: linear-gradient(180deg, rgba(255,255,255,0.8), rgba(255,255,255,0));box-shadow: 0 0 8px 0 black;font-weight: bold;border-radius: 3px;"><span style="width: 71%;margin-left: 5px;display: block;white-space: nowrap;line-height: 80px;">Price Ranges REMOVED</span></div>');
    setTimeout(function(){
        var LloadingEle = document.getElementById('doneLloading');
        LloadingEle.parentNode.removeChild(LloadingEle);
    }, 2500);
}
