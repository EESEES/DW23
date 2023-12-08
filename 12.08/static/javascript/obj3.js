let name="";
let age="";

let list=[];

let info={
    
}
$(function(){

});

function list_print(){
    let info_keys = Object.keys(info);
    for(var key of info_keys){
        $("#res").append(info[key].name+" "+info[key].job+" "+info[key].활동지+"<br>")
    }
}

function save(){

}