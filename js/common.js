/**
 * Created by Tean on 2016/8/17.
 */


/**
 * 获取元素样式的函数
 *
 */
function getStyle(obj, attr) {

    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, null)[attr];
    }
}


/**
 * 根据元素ID获取dom对象
 */
function $(id) {
    return document.getElementById(id);
}

/**
 *
 * @param obj  执行运动的对象
 * @param attr 对象的属性
 * @param iTarget 对象的值
 * @param fn 回调函数
 */
function startMove(obj, attr, iTarget, fn) {
    clearInterval(obj.timer); // 清除定时器

    // 开始运动，启动定时器
    obj.timer = setInterval(function () {
        // 获取当前 obj 对象的 attr 值
        var val = parseInt(getStyle(obj, attr));
        // 获取运动速度
        var speed = (iTarget - val) / 3;
        // 对速度取整
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        // 判断是否运动到 iTarget 值
        if (iTarget == val) {
            clearInterval(obj.timer); // 清除定时器
            // 如果用户传入了回调用函，则执行回调函数
            if (fn) {
                fn();
            }
        } else {
            obj.style[attr] = val + speed + 'px'; // 改变attr值
        }

    }, 30);
}


function move(obj, param, callback) {
    // 清除定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for(var i in param) {
            var cur = parseInt(getStyle(obj, i));

            // 获取运动速度
            var speed = (param[i] - cur) / 6;
            // 对速度取整
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if(cur != param[i]) {
                obj.style[i] = cur + speed + 'px';
                flag = false;
            }
        }
        if(flag) {
            clearInterval(obj.timer);
            if(callback) {
                callback();
            }
        }
    }, 30);
}

