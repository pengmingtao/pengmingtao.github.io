/*驼峰 */
var str="border-bottom-color";
function changeStr(str){
      var arr=str.split("-");
      for(var i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substring(1);
      }
      str=arr.join("");
      return str;
}  
alert(changeStr(str));

/*查找字符串中出现次数最多的字符以及出现的次数 */
var str1="pengmingtaopengmingtaozitaozitaot";
var max=0;
var char;
function Search(str){
    var json={};
    for(var j=0;j<str.length;j++){
        if(!json[str[j]]){
            json[str[j]]=str[j];
        }else{
            json[str[j]]+=str[j];
        }
    }

    for(var b=0;b<str.length;b++){
        if(json[str[b]].length>max){
            max=json[str[b]].length;
            char=str[b];
        }
    }
  alert("出现最多的字符是"+char+",出现了"+max+"次！");
}

Search(str1);

/* 冒泡排序*/
var  arrs=[2,3,4,2,1,4,5,6,7,8,8,9];
function bubble(){
    for(var i=0;i<arrs.length;i++){
        for(var j=0;j<arrs.length-i;j++){
            if(arrs[j]<arrs[j+1]){
                var temp=arrs[j];
                arrs[j]=arrs[j+1];
                arrs[j+1]=temp;
            }
        }
    }
    alert(arrs);
}

bubble();

/*
   递归:步骤
   1.假设递归函数已经写好
   2.寻找递推关系
   3.将递推关系的结果转换为递归体
   4.将临界值加入到递归体中
*/
function sum(n){
    if(n==1) return 1;
    return sum(n-1)+n;
}
alert(sum(100));

/*快速排序 */

function quickSort(arr){
    if(arr.length<=1) return arr;
     var left=[];
     var right=[];
     var middle=arr[0];
     for(var i=1;i<arr.length;i++){
         if(arr[i]<middle){
            left.push(arr[i]);
         }else{
             right.push(arr[i]);
         }

     }
      return quickSort(left).concat([middle],quickSort(right));
}

var arrs=[12,23,1,2,1,4,5,63,2,45,32];
alert(quickSort(arrs));

/*js数组去重 */

var arrs=[23,34,54,23,45,65,54];
var json={};
var newArr=[];
for(var b=0;b<arrs.length;b++){
   if(!json[arrs[b]]){
      newArr.push(arrs[b]);
      json[arrs[b]]=1;
   }
}

console.log(newArr);




