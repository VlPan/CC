// TODO: Q1 how to select element from dom?
// TODO: Q2 dead vs live collections?
// TODO: Q3 node vs element
// TODO: Q4 how to get all comments in document
// TODO: Q5 create DOM node
// TODO: Q6 append DOM node
// TODO: Q7 remove DOM node
// TODO: Q8 changed node class, change node style (classList, node.style, className)

var coomments = [];

function getCommentsOfNode(n) {
    if(n.childNodes.length > 0) {
         n.childNodes.forEach(n => {
            if(n.nodeType === 8) {
                coomments.push(n)
            }
            else if(n.nodeType === 1) {
                getCommentsOfNode(n);
            }
         })
    }
   
}

// DOM Manipulation (selection, traversing, modification, live collections)

// classList, node.style, className
// parentNode, childNodes, nextSibling, prevSibling, firstChild, lastChild
// children vs childNodes 
// How to get node type
// can I use for of with collection

// childNodes[i] = another element // will it work ?

/* Метод getElementById можно вызвать только для объекта document. Он осуществляет поиск по id по всему документу. */

// is elemnt match selector?
// elem.matches('a[href$="zip"]')

// closest parent
// chapter.closest('.book')

// TODO: live collection
// TODO: CRUD Dom
// TODO: Go next chind, parent, nextSibling
// TODO: apply styles