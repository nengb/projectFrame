
//连接服务器的请求地址
// let ip = '118.31.164.217' ;  //爱趣抓娃娃
// var ip = '47.97.32.55' ;	 //测试服务器
// var ip = '47.97.32.228' ; //飞爪不可
// var ip = '47.96.42.99' ;	//哎呀抓娃娃
// var ip = '47.96.42.31' ;	//容易抓娃娃
// var ip = '192.168.1.3' ;	//测试
let ip = location.hostname;  //从浏览器拿ip

let  httpAddress=`http://${ip}:9001`
//socket
let socketAddress = `${ip}:10000`
let imgAddress = `http://${ip}/web_h5/dist/img_aiqu_pink`
function getHrefNew(type,attr){
    var url = document.location.href;
    var arr = url.match(/(https?:)\/\/([^\/]+)(\/[^\?]*)?(\?[^#]*)?(#.*)?/);
    var protocol = arr[1];  // 协议
    var host = arr[2];      // 主机
    var pathname = arr[3];  // 路径
    var search = arr[4];    // 查询
    var hash = arr[5];      // 哈希值
    var str;
    if(type=="?"){
        if(search){
            str=search.replace("?","");
        }
    }
    if(type=="#"){
        if(hash){
            str=hash.split("?")[1];
        }
    }
    if(str){
        if(str.indexOf("&")>-1){
            str=str.split("&");
            for(var x in str){
                var arr=str[x].split("=");
                if(arr[0]==attr){
                    return arr[1];
                }
            }
        }else{
            var arr=str.split("=");
            if(arr[0]==attr){
                return arr[1];
            }
        }
    }else{
        return;
    }
}
function getQueryString(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = location.hash.split('?')[1].match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

window.$serverConfig = { ip, httpAddress, socketAddress, imgAddress,getHrefNew,getQueryString }
