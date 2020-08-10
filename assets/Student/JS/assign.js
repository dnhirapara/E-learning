var assign_table = document.getElementById("assign-table");
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