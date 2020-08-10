var assign_table = document.getElementById("assign-table");
// var row = assign_table.insertRow(1);
// row.setAttribute("class", "row");
// var cell = row.insertCell(0);
// var node = document.createElement("div");
// node.setAttribute("class", "ids");
// node.setAttribute("id", "id");
// var text = document.createTextNode("3");
// node.appendChild(text);
// cell.appendChild(node);
function inserRow() {
    var row = assign_table.insertRow(1);
    row.setAttribute("class", "row");
    col_attr_class = ["ids", "courses", "assignments", "start-times", "end-times", "status", "btn"]
    col_len = col_attr_class.length;
    for (i = 0; i < col_len; i++) {
        var cell = row.insertCell(i);
        var node = document.createElement("div");
        node.setAttribute("class", col_attr_class[i]);
        if (i != col_len - 1) node.appendChild(createText("hello"));
        else node.appendChild(createButton("#", "Submit"));
        cell.appendChild(node);
    }
}

function createButton(path, val) {
    let link = document.createElement("a");
    link.setAttribute("href", path);
    let button = (document.createElement("button"));
    button.appendChild(createText(val));
    link.appendChild(button);
    return link;
}
function createText(val) {
    return document.createTextNode(val);
}
inserRow();
inserRow();











// var rows = document.getElementById("row");
// var row = rows[0];
// var assign_table = document.getElementsByClassName("row-title")[0];
// var attr = assign_table.childNodes;
// console.log(attr[1].getAttributeNames()[0]);
// console.log(attr[1].getElementsByClassName("ids"));
// console.log(assign_table.getAttributeNames()[0]);
// var row = assign_table.insertRow(0);
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);
// cell.innerHTML = "hello";
// cell = row.insertCell(1);
// cell.innerHTML = "hello";
// cell = row.insertCell(2);
// cell.innerHTML = "hello";
// cell = row.insertCell(3);
// cell.innerHTML = "hello";
// cell = row.insertCell(4);
// cell.innerHTML = "hello";
// row.insertCell(0).setProperty('class',)

// // for (i = 0; i < 5; i++) {
// //     var assign_row = assign_table.insertRow(1);
// //     for (j = 0; j < 5; j++) {
// //         assign_row.insertCell(j).innerHTML = "hello";
// //     }
// // }