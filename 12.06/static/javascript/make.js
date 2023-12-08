$(function(){
    $("#make").on("click", makeTable);
});

function makeTable(){
    var row = Number($("#row").val());
    var col = Number($("#col").val());

    opener.document.gertElementById("draw").innerHTML="aaaa";

    var table = "<table>"
    for(var i=1; i<=row; i++){
        tabel += "<tr>";
        for(var k=1; k<=col; k++){
            table 
        }
    }
}

function paint(){
    
}