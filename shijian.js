
let 输入显示器 = document.getElementById("输入秒数");
let a;
let time = 0;
let 秒 = 0;
let 分 = 0;
let 时 = 0;
function test(x) {
    clearInterval(a);
    if(x.key == "Enter"){
      time = Date.now();
      a = setInterval(clock,1000);
      console.log("测试成功");
      document.getElementById("倒计时").textContent= "哈哈哈哈哈哈哈哈成啦";
    }
    时 = Math.floor(输入显示器.value/3600);
    分 = Math.floor(输入显示器.value%3600/60);
    秒 = Math.floor(输入显示器.value%3600%60);
    document.getElementById("显示时间").textContent = 时 + ":" + 分 + ":" + 秒;
}
function clock(){
  秒 = 秒 - 1;
  if(秒 === 0){
    if(分 !== 0){
      秒 = 59;
      分--;
    }else if(时 !== 0){
      分 = 59;
      时--;
    }else{
      clearInterval(a);
      秒 = 0;
      分 = 0;
      时 = 0;
    }
  } 
  document.getElementById("显示时间").textContent = 时 + ":" + 分 + ":" + 秒;
}
document.getElementById("测试").onclick = testr;


function testr() {
    alert("测试成功");
    document.getElementById("测试").style.backgroundColor = "green";
    document.getElementById("测试").innerText= "成功";
    document.getElementById("倒计时").innerText = "测试成功";
};
输入显示器.addEventListener("keyup", test);
// document.getElementById("测试").onclick = function() {
//     document.getElementById("倒计时").innerText = "标题被改了！";
// };
