;(function(global,undefined) {
    "use strict" //使用js严格模式检查，使语法更规范
    var _global;
    var tyb = {
        //这里可以写一些你自定义的方法
        
        //清除浏览器cookie
       clearCookie:function() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i = keys.length; i--;) {
                document.cookie = keys[i] + '=0;path=/;expires=' + new Date(0).toUTCString();//清除当前域名下的,例如：m.kevis.com
                document.cookie = keys[i] + '=0;path=/;domain=' + document.domain + ';expires=' + new Date(0).toUTCString();//清除当前域名下的，例如 .m.kevis.com
                document.cookie = keys[i] + '=0;path=/;domain=kevis.com;expires=' + new Date(0).toUTCString();//清除一级域名下的或指定的，例如 .kevis.com
            }
        }
        alert('已清除');
        },
        //获取浏览器信息
        getBro:function () {
        var is360 = false;
        var isIE = false;
        var isFirefox = false;
        var isChrome = false;
        var isEdge = false;
        var broName = 'Runing';
        var str = '';
        var strStart = 0;
        var strStop = 0;
        var arr = new Array();
        var temp = '';

        var userAgent = window.navigator.userAgent; //包含以下属性中所有或一部分的字符串：appCodeName,appName,appVersion,language,platform

        /*alert(userAgent);*/

//FireFox
        if (userAgent.indexOf('Firefox') != -1) {
            isFireFox = true;
            /*broName = 'FireFox浏览器';*/
            strStart = userAgent.indexOf('Firefox');
            temp = userAgent.substring(strStart);
            broName = temp.replace('/', '版本号')

        }

//Edge
        if (userAgent.indexOf('Edge') != -1) {
            isEdge = true;
            /*broName = 'Edge浏览器';*/
            strStart = userAgent.indexOf('Edge');
            temp = userAgent.substring(strStart);
            broName = temp.replace('/', '版本号');
        }

//IE浏览器
        if (userAgent.indexOf('NET') != -1 && userAgent.indexOf("rv") != -1) {
            isIE = true;
            /*broName = 'IE浏览器'; */
            strStart = userAgent.indexOf('rv');
            strStop = userAgent.indexOf(')');
            temp = userAgent.substring(strStart, strStop);
            broName = temp.replace('rv', 'IE').replace(':', '版本号');
        }

//360极速模式可以区分360安全浏览器和360极速浏览器
        if (userAgent.indexOf('WOW') != -1 && userAgent.indexOf("NET") < 0 && userAgent.indexOf("Firefox") < 0) {
            if(navigator.javaEnabled()){
                is360 = true;
                broName = '360安全浏览器-极速模式';
            }else{
                is360 = true;
                broName = '360极速浏览器-极速模式';
            }
        }

//360兼容
        if (userAgent.indexOf('WOW') != -1 && userAgent.indexOf("NET") != -1 && userAgent.indexOf("MSIE") != -1 && userAgent.indexOf("rv") < 0) {
            is360 = true;
            broName = '360兼容模式';
        }

//Chrome浏览器
        if (userAgent.indexOf('WOW') < 0 && userAgent.indexOf("Edge") < 0) {
            isChrome = true;
            /*broName = 'Chrome浏览器';*/
            strStart = userAgent.indexOf('Chrome');
            strStop = userAgent.indexOf(' Safari');
            temp = userAgent.substring(strStart, strStop);
            broName = temp.replace('/', '版本号');

        }
        return broName;

    }

    };
    // 最后将插件对象暴露给全局对象
    _global = (function () {
        return this || (0, eval)('this');
    }());
    if (typeof module !== "undefined" && module.exports) {
        module.exports = tyb;
    } else if (typeof define === "function" && define.amd) {
        define(function () {
            return tyb;
        });
    } else {
        !('tyb' in _global) && (_global.tyb = tyb);
    }
}());
