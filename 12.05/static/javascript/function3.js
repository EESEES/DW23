$(function(){
    $(".item").on("click", input);
});
function input(){
    var div = $(this);
    var data = div.data("value");

    data = (data === "=") ? calc() : operand (data , isNaN(data));

    $("#res").append(data);
    
}

function calc(){
    $("#res").empty();
    switch(op){
        case "+":
            return oldNum + nowNum;
        case "-":
            return oldNum - nowNum;
        case "*":
            return oldNum * nowNum;
        case "/":
            return oldNum / nowNum;
    }
};