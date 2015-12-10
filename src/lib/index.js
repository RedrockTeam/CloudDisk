/**
 * Created by liuhuizhi on 15/12/9.
 */


require.config({

    baseUrl: 'lib',

    paths: {
        jquery: 'tools/jquery',
        urls: 'tools/urls',
        request: 'tools/request'
    },

    shim:{
        jquery: {
            export: "$"
        }
    }

})




require(['jquery', 'request'],function($, request){

    $.request('login')

})