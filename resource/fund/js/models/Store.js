define(['cStore', 'cCoreInherit', 'cUtility', 'Config'], function (cStore, cCoreInherit, cUtility, CarConfig) {
    var FundStore = {};
       
    /******************************************
    * @description:  登录状态
    */
    FundStore.LoginStore = new cCoreInherit.Class(cStore, {
        __propertys__: function () {
            this.key = 'S_FUND_COMMON_LOGIN_STATUS';
            this.lifeTime = '1H';
            this.defaultData = {"isLogin":false,"Auth":null};
        },
        initialize: function ($super, options) {
            $super(options);
        }
    });

    return FundStore;
});
