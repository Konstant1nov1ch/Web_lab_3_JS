document.querySelector("#submit").onclick = function(){
    var flag = document.getElementsByClassName("start").namedItem("value");
    var cn = 2;
    if(flag === null){
        flag = 1;
        this.innerHTML = "New table";
        var tab = document.getElementsByClassName("Border");
        tab[0].style.display='flex';
        var elems=document.getElementsByClassName('new_buttons');
        for(let i=0; i<elems.length; i++)elems[i].style.display='flex';
    }
    else{
        alert("The table already exists")
    }
}
document.querySelector("#addr").onclick = function(){
    cn++;
    let elem = document.querySelector('#border');
    elem.innerHTML +=('<tr><th>'+(cn)+'</th><th> kek </th></tr>');

}
document.querySelector("#remr").onclick = function(){
    let n = document.getElementById("n");
    let table = document.querySelector('#border');
    let row = table.deleteRow(parseInt(n.value) - 1);
    cn--;
}
  
