// if 문 - 조건식의 참, 거짓에 의해 내용을 실행 시킨다.
/*

if(조건식){
    참일 경우 실행할 내용
}
if 뒤에 작은 괄호 열어서 안에 조건식을 작성한다. 조건식 뒤에는 중괄호를 열어서 안에 참일 경우 실행할 내용을 작성한다.

if(조건식){
    참일 경우 실행할 내용
}else{
    거짓일 경우 실행할 내용
}
조건식 거짓이라면 첫번째 중괄호는 건너뛰고(jmp) else 뒤의 중괄호를 실행 시킨다. if 문에서 조건식 작성할 수 있는 곳은 오직 if 뒤에만 가능하다. else 뒤에는 조건식 넣을 수 없다.




*/

// // 국어, 영어, 수학 3과목 점수 입력받기
// // 3과목의 평균 점수가 65점 이상이면 통과 라고 출력
// // 65점 미만이면 낙제라고 출력하시오.

// var ko = parseInt(prompt("국어 점수"));
// var en = parseInt(prompt("영어 점수"));
// var ma = parseInt(prompt("수학 점수"));

// var kem = (ko+en+ma)/3 ; 
// if(kem>=65){
//     console.log("pass")
// }else{
//     console.log("def")
// }

// 동전 앞면 뒷면 맞추기
// window.onload=function(){

// var coin = Math.floor(Math.random()*2)+1;

// var front = document.getElementById("front");
// var back = document.getElementById("back");

// front.addEventListener("click", function(){
//     if(coin==1){
//         alert("정답");
//     }else{
//         alert("땡");
//     }
//     // alert("앞면 선택");
// });
// back.addEventListener("click", function(){
//     if(coin==2){
//         alert("정답");
//     }else{
//         alert("땡");
//     }
//     // alert("뒷면 선택");
// });

// };

//// 세 개의 정수를 입력받아 가장 작은 수 출력, 모두 같다면 같다 출력
// var num1 = parseInt(prompt("첫번째 정수"));
// var num2 = parseInt(prompt("두번째 정수"));
// var num3 = parseInt(prompt("세번째 정수"));

// if(num1==num2 && num2==num1 == num3){
//     alert("모두 같은 숫자");
// }else if( num1<num2 && num1<num3 ){
//     alert("작은 수 : "+num1);
// }else if( num2<num1 && num2<num3 ){
//     alert("작은 수 : "+num2);
// }else{
//     alert("작은 수 : "+num3);
// }


// if(num1 < num2){
//     if( num1 < num3 ){
//         alert("작은 수 : "+num1);
//     }else{
//         alert("작은 수 : "+num3);
//     }
// }else if(num2 < num3){
//     alert("작은 수 : "+num2);
// }else{
//     alert("작은 수 : "+num3);
// }


// 가위 바위 보 게임 만들기
// 1. 가위 2. 바위 3. 보

var num1 = parseInt(prompt("가위"));
var num2 = parseInt(prompt("바위"));
var num3 = parseInt(prompt("보"));

if( num1<num2 && num1<num3 ){
    alert("진 사람 : "+num1);
}else if( num2<num1 && num2<num3 ){
    alert("진 사람 : "+num2);
}else{
    alert("진 사람 : "+num3);
}