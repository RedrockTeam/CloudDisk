/**
 * Created by liuhuizhi on 15/12/9.
 * 所有请求通过request模块
 */
define('request',['jquery', 'urls'],function ($, urls) {

    var request = function(apiName, paramsObj, successFn, failFn){
       var _dtd =  $.Deferred();

        $.post(urls[apiName],paramsObj)
            .success(function(res){
                if(res.status == 200) {
                    _dtd.resolve();
                }
            })
            .fail(function(res){
                if(res.status == 400){
                    _dtd.reject();
                }

        })

        _dtd.done(successFn).fail(failFn)

        return _dtd;


    }
    $.request = request;

    return request;
})


