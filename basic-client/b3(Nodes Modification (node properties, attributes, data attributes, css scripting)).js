// Nodes Modification (node properties, attributes, data attributes, css scripting)

// TODO: dataset
// TODO: css scripting
// TODO: modify attributes
// TODO: attributes vs node properties

<div id="user" data-id="1234567890" data-user="johndoe" data-date-of-birth>John Doe</div>

let el = document.querySelector('#user');

// el.dataset.id === '1234567890'
// el.dataset.user === 'johndoe'
// el.dataset.dateOfBirth === ''


// What if I insert script into innerHTML
// Answer: he will become part of html but wont be executed


/* Attribute vs property */
/*(Таким образом, когда у элемента есть id или другой стандартный атрибут, создаётся соответствующее свойство.
     Но этого не происходит, если атрибут нестандартный. Когда стандартный атрибут изменяется, с
     оответствующее свойство автоматически обновляется. Это работает и в обратную сторону (за некоторыми исключениями)
*/

    //  elem.hasAttribute(name) – проверяет наличие атрибута.
    //  elem.getAttribute(name) – получает значение атрибута.
    //  elem.setAttribute(name, value) – устанавливает значение атрибута.
    //  elem.removeAttribute(name) – удаляет атрибут.



    // node.append(...nodes or strings) – добавляет узлы или строки в конец node,
    // node.prepend(...nodes or strings) – вставляет узлы или строки в начало node,
    // node.before(...nodes or strings) –- вставляет узлы или строки до node,
    // node.after(...nodes or strings) –- вставляет узлы или строки после node,
    // node.replaceWith(...nodes or strings) –- заменяет node заданными узлами или строками.

    // insertAdjacentHTML

    // node.remove

    // Clone
    // let div2 = div.cloneNode(true);

    // document fragment