function change()
{
    console.log("aaa");
    document.getElementById("test").innerHTML="我的第一个 JavaScript 函数";
}

function create() 
{
    var tb = document.getElementById("t1");
    var newTr = tb.insertRow(tb.rows.length);
    var newTd = newTr.insertCell();
    newTd.innerHTML = "<label>(untitled)</label>";
    
    var t = document.getElementById("text");
    t.rowSpan = t.rowSpan + 1;
}