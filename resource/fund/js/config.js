(function () {
    var paths = {
        'Model': 'models/Model',
        'Store': 'models/Store',
        'BaseView': 'common/views/BaseView',
        'Util': 'common/utils/util',
        'Cities': 'common/data/cities',
        'IScroll': 'common/libs/iscroll',
        //'Destcities': 'common/data/destcities',
        'Area': 'common/data/area',
        'NumberPicker':'common/widget/NumberPicker',
        'Calendar2':'common/widget/Calendar2',
        'Inherit': 'common/libs/inherit',
        'DateChinese': 'common/widget/DateChinese',
        'EventEmitter': 'common/libs/EventEmitter',
        'Switcher': 'common/widget/Switcher',
        'BookingBaseView': 'controllers/BookingBaseView',
        'OrderData': 'common/data/orderdata',
        'Passenger': 'common/widget/Passenger',
        'ParseID': 'common/utils/ParseID',
        'cityLocating': 'common/utils/cityLocating',
        'Nationaldata': 'common/data/nationaldata',
        'BookingStep2Manager': 'controllers/booking.step2.manager',
        'Config': 'common/config/config',
        'Mo': 'common/utils/Mo',
        'Wechat': 'common/utils/wechat',
		'Chart': 'common/utils/Chart.min',
		'Fund_data':'common/data/pfundJson_v2474',
        //'Delivery': 'controllers/order.delivery',

        //模版
        'TplLogin': 'templates/login.html',
        'TplStock': 'templates/stock.html',
		'TplAutoComplete': 'templates/autocomplete.html'
    },

        getPaths = function (paths, prefix) {
            var reg = new RegExp('^' + prefix, 'g');
            for (var key in paths) {
                if (!reg.test(paths[key]))
                    paths[key] = prefix + paths[key];
            }
            return paths;
        };

    require.config({
        urlArgs: 'v=' + Lizard.appVersion, // 版本号
        paths: getPaths(paths, Lizard.appBaseUrl+'/resource/fund/js/')
    })
})();