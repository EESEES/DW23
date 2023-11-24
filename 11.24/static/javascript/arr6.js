// 2차원 배열

// let arr=[
//     [1,2,3,4,5,6,7,8]   ,
//     [10,20,30,44,55,66,77]
// ];

// for(var i=0; i<arr.length; i++){
//     for(var k=o; k<arr[i].length; k++){
//         document.write(arr[i][k] + "  ");
//     }
//     document.write("<br>");
// }


// let people = [
//     ["김유신", 45, "군인"],
//     ["이순신", 50, "군인"],
//     ["서종우", 35, "변호사"],
//     ["김민수", 65, "편의점알바"],
//     ["송재영", 75, "농심연구원"],
//     ["이민재", 25, "한화이글스관람객"] 
// ];
// for (var i=0; i<people.length; i++){
//     // for(var k=0; k<people[i].length; k++){
//     //     document.write( people[i][k] + "   ");
//     // }
//     // if (people[i][1]>30){
//     //     document.write(people[i][0]+"  ", +people[i][2]+"<br>");
//     // }
    
//     if(people[i].indexOf("이민재")!= -1 )
//         document.write(people[i][1]+"  , " +people[i][2]+"<br>");
// }

let board =[
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,2,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

for (var i=0; i<board.length; i++){
    for(var k=0; k<board[i].length; i++){
        if(board[i][k] == 0)
            document.write("&nbsp;&nbsp; ");
        if(board[i][k] == 1)
            document.write("■");
        if(board[i][k] == 2)
            document.write("◆");
    }
    document.write("<br>");
}