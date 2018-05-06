// The following recursive function scans a document for text nodes containing a given string and returns true when it has found one:

function talksAbout(node, string) {
    if (node.nodeType == document.ELEMENT_NODE) {
        for (var i = 0; i < node.childNodes.length; i ++) {
            if (talksAbout(node.childNodes[i], string))
                return true;
        }
        return false;
    } else if (node.nodeType == document.TEXT_NODE) {
        return node.nodeValue.indexOf(string) > -1;
    }
}


var arrayish = {
    0: "one",
    1: "two",
    length: 2
}

var real = Array.prototype.slice.call(arrayish, 0);
real.forEach(function(elt) {console.log(elt); });

function highlightCode(node, keywords) {
    var text = node.textContent;
    node.textContent = ""; // Clear the node

    var match, pos = 0;
    while (match = keywords.exec(text)) {
        var before = text.slice(pos, match.index);
        node.appendChild(document.createTextNode(before));
        var strong = document.createElement("strong");
        strong.appendChild(document.createTextNode(match[0]));
        node.appendChild(strong);
        pos = keywords.lastIndex;
    }
    var after = text.slice(pos);
    node.appendChild(document.createTextNode(after));
}

var languages = {
    javascript: /\b(function|return|var)\b/g /* … etc */
  };

function highlightAllCode() {
    var pres = document.body.getElementsByTagName("pre");
    for (var i = 0 ; i < pres.length; i++) {
        var pre = pres[o];
        var lang = pre.getAttribute("data-language");
        if (languages.hasOwnProperty(lang))
            highlightCode(pre, languages[lang]);
            
    }
}


