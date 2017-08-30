export function saveNumber(goosinfo,number){
        var carDataStr = localStorage.getItem("carData") || "{}";
         //将本地的数据转换成对象格式
         var carObj = JSON.parse(carDataStr);
         var savedItem = carObj[goosinfo.id];//把当前id对应的这一项数据存储起来
         if(savedItem){ 
         //如果存在就把点击传进来的count值追加进去
             savedItem.count = parseInt(savedItem.count)+parseInt(number);
         }else{
          //不存在就新增
             savedItem={};
             savedItem.id = goosinfo.id;
             savedItem.title = goosinfo.title;
             savedItem.price = goosinfo.sell_price;   
             savedItem.count = number;   
         }        
         carObj[goosinfo.id] = savedItem; 
         //以对象形式接收,然后再一字符串形式存储
        localStorage.setItem("carData",JSON.stringify(carObj));
}
//获取总的数量
export function getTotalCount() {
    var savedObj = JSON.parse(localStorage.getItem("carData")||"{}");
    console.log(savedObj);
    var totalCount = 0;
    for(var key in savedObj) {
        totalCount += savedObj[key].count;
    }
    return totalCount;
}
//购物车每一项(id作为标识)对应的数量值
export function updateTo(id,newNumber){
    var cartDataStr = localStorage.getItem("carData") || "{}";
    var cartObj = JSON.parse(cartDataStr);
    var savedItem = cartObj[id];
    savedItem.count = parseInt(newNumber);
    cartObj[id] = savedItem;
    localStorage.setItem("carData",JSON.stringify(cartObj));
}
//删除本地存储
export function deleteItem(id){
    var savedObj = JSON.parse(localStorage.getItem("carData")||"{}");
    delete savedObj[id];//删除属性
}
//获取本地内存的数据
export function getAll() {
    var savedObj = JSON.parse(localStorage.getItem("carData")||"{}");
    return savedObj;
}
export function getTop(e){ 
    var offset=e.offsetTop; 
    if(e.offsetParent!=null){
        offset+=getTop(e.offsetParent); 
    } 
    return offset; 
} 
export function getLeft(e){ 
    var offset=e.offsetLeft; 
    if(e.offsetParent!=null){
        offset+=getLeft(e.offsetParent); 
    } 
    return offset; 
} 