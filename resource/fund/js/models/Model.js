define(["cModel", "cCoreInherit", 'Store','cUtility', 'Config'],
    function (cModel, Inherit, store, cUtility, config) {
        var evn = util.getEnvCode(cUtility);
        //var evn = 3;
        /*
       subEnv 如果是测试环境访问不同的服务器
       fat2生产的bug
       fat1迭代版本
       */
        var apiEvn;
        //apiEvn = (evn === 0 &&  '?subEnv=fat1');
        var _ret = {};
        var _base = new Inherit.Class(cModel, {
            __propertys__: function () {
                this.baseurl = {
                    //获取接口域名
                    domain: config.modelUrl[evn],
                    path: 'restapi/soa2/'
                };
                this.method = 'POST';
                this.param = {};
                this.result = null;
                this.checkAuth = false;
                // 详情页，图片数据
                //this.KEY_DETAIL_PICS = 'detail.pictures';
                // 预定页，第一步
            },
            initialize: function ($super, options) {
                $super(options);
            },
            vaGet: function (name) {
                return util.memoryCache.get(name);
            },
            vaGetCache: function (name) {
                return this.vaGet(name || this._buildurl());
            },
            vaSet: function (name, value) {
                return util.memoryCache.set(name, value);
            },
            vaRemove: function (name) {
                return util.memoryCache.remove(name);
            },
            setUrl: function (name) {
                return apiEvn ? name + apiEvn : name;
            },
            /*
            * @param {Boolean} [cacheInMemory = true] // 是否需要内存缓存
            * @param {String} [cacheKey = apiPath] //
            * @param {Function} onComplete
            * @param {Function} onError
            * @param {Function} onAlways // 无论成功或失败，都会调用
            * @param {Boolean} ajaxOnly
            * @param {Object} scope
            * @param {Function} onAbort
            */
            vaExec: function (options) {
                options = _.extend({
                    cacheInMemory: true,
                    cacheKey: this._buildurl()
                }, options);

                var cacheValue, callbackArgs;
                var self = this;
                var scope = options.scope || this;
                //if (options.cacheInMemory && (cacheValue = this.vaGet(options.cacheKey))) {
                //    options.onComplete.call(scope, cacheValue, checkNotError);
                //    always([cacheValue]);
                //    return this;
                //} else {
                return this.execute(function (json) {
                    callbackArgs = arguments;
                    // 成功，直接保存和传递使用 json.data
                    if (json.errno == 0) {
                        if (options.cacheInMemory) {
                            self.vaSet(options.cacheKey, json.data);
                        }
                        // 保证还使用原来的 this
                        options.onComplete && options.onComplete.call(scope, json.data, checkNotError);
                    }
                    // 失败，直接走 onError 的流程
                    else {
                        error();
                    }
                    always(callbackArgs);
                }, function () {
                    callbackArgs = arguments;
                    error();
                    always(callbackArgs);
                }, options.ajaxOnly, scope, options.onAbort);
                //}

                function checkNotError(trueCondition, errorMessage) {
                    if (!trueCondition) {
                        error(errorMessage);
                        self.vaRemove(options.cacheKey);
                    }
                    return trueCondition;
                }

                function error(errorMessage) {
                    var error = callbackArgs[0];
                    if (Object.prototype.toString.call(error) !== '[object Object]') error = { originError: error };
                    error.errmsg = errorMessage || error.errmsg || error.msg;
                    options.onError && options.onError.call(scope, error);
                }

                function always(args) {
                    options.onAlways && options.onAlways.apply(scope, args);
                }
            },
            // 改自 Lizard
            _buildurl: function () {
                return this.protocol + '://' + this.baseurl.domain + '/' + this.baseurl.path + (typeof this.url === 'function' ? this.url() : this.url) + util.paramStringify(this.param);
            }
        });

        //详情页统一接口，根据reqType类型请求不同的数据
        _ret.DetailModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetProductDetail');
                this.param = {};
                this.result = null;
            }
        });

        //详情页预定须知,返回的数据存入localStorage
        _ret.DetailBookingNoteModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetProductDetail');
                this.param = {};
                this.result = store.DetailBookNoteStore.getInstance();
            }
        });

        //详情页领队,返回的数据存入localStorage
        _ret.DetailLeaderModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetProductDetail');
                this.param = {};
                this.result = store.DetailLeaderStore.getInstance();
            }
        });

        //详情页签证,返回的数据存入localStorage
        _ret.DetailVisaModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetProductDetail');
                this.param = {};
                this.result = store.DetailVisaStore.getInstance();
            }
        });

        //详情页图片详情,返回的数据存入localStorage
        _ret.DetailPicModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetProductDetail');
                this.param = {};
                this.result = store.DetailPicStore.getInstance();
            }
        });

        //详情页产品描述（产品特色）,返回的数据存入localStorage
        _ret.DetailDescriptionModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetProductDetail');
                this.param = {};
                this.result = store.DetailDescriptionStore.getInstance();
            }
        });

        //详情页班期
        _ret.DetailScheduleModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetProductCalendar');
                this.param = {};
            }
        });

        //详情页景点详情
        _ret.DetailProductSightModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetProductSight');
                this.param = {};
            }
        });

        //填写页
        _ret.OrderModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetBookForm');
                this.param = {
                    'RequestTypeList': '1,2,3,4,5,6,7,8,9',
                    Version: config.appVersion
                }
                this.result = store.OrderStore.getInstance();
            }
        });

        // 预定页，价格日历
        _ret.BookingPriceCalendar = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetProductCalendar');
                /**
                this.param = {
                pId: 51114,
                saleCity: 2,
                departureCity: 2,
                sDate: '2014-03-13',
                eDate: '2014-04-20'
                }
                */
                this.result = null;
                this.dataformat = function (json) {
                    return json;
                };
            }
        });

        // peic@Ctrip.com 资源查询 -- 预定 step2
        _ret.BookingResourceSearch = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/ResourceSearch');

                //this.baseurl.domain = 'localhost:8989';
                //this.baseurl.path = '';
                //this.url = 'resource_search';
                /*
                this.param = {
                // ProductId
                pId: 51114,
                // DepartureCityId
                departCId: 2,
                // DepartureDate
                departDate: '2014-03-05',
                // AdultQuantity
                adultNum: 2,
                // ChildQuantity
                childNum: 0,
                // SaleCityId
                saleCId: 2,
                ocMode: 2,
                // GUID
                guid: '',
                chosedResource: ''
                };
                */
                this.result = store.BookingResourceSearch.getInstance();
                this.dataformat = function (json) {
                    return json;
                }
            }
        });

        // 资源酒店重选查询
        _ret.BookingResourceHotelSearch = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/HotelSearch');
                this.param = {};
                this.result = null;
            }
        });

        // peic@Ctrip.com 资源查询 -- 预定 step2 -- 单选资源
        _ret.BookingSelectSingle = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/SingleResourceSearch');
                /*
                this.param = {
                "pId": 51114,
                "departCId": 2,
                "segmId": 125159,
                "segmNumb": 3,
                "departDate": "2014-03-15",
                "adultQ": 2,
                "childQ": 0
                };
                */
                this.result = null;
                this.dataformat = function (json) {
                    return json;
                }
            }
        });

        _ret.QuestionModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetProductDetail');
                this.param = {
                    "ProductId": 0,
                    "RequestTypeList": [6],
                    "Start": 1,
                    "ReturnCount": 3
                };
                this.result = null;
            }
        });

        _ret.QuestionByAuthModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetProductDetailByAuth');
                this.param = {
                    "ProductId": 0,
                    "RequestTypeList": [6],
                    "Start": 1,
                    "ReturnCount": 3
                };
                this.result = null;
            }
        });

        //常用旅客列表
        _ret.PassengersModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetBookForm');
                this.param = {
                    'RequestTypeList': '1'
                }
                this.result = store.PassengersStore.getInstance();
            }
        });
        _ret.PassengersListModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10090/GetMemberUsers.json';
                this.param = {};
            }
        });
        //常旅编辑
        _ret.PassengerEditModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10090/MutateMemberUser.json';
                this.param = {};
                this.param = store.PassengerEditStore.getInstance();
            }
        });
        //预订须知
        _ret.OrderContractOrder = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetBookForm');
                this.param = {
                    'RequestTypeList': '11'
                }
                this.result = null;
            }
        });
        // 搜索结果列表
        _ret.VacationsListModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/ProductSearch');
                this.param = {
                    "SaleCityId": 2,
                    "StartCityId": 2,
                    "KeyWord": "beijing",
                    "AddressSelectorId": 0,
                    "LineType": 1,
                    "Start": 1,
                    "ReturnCount": 100
                };
                this.result = null;
            }
        });
        // 目的地列表
        _ret.DestinationListModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetProductDestination');
                this.param = {
                    "DepartureCityId": 2,
                    "RequestOptions": 3
                };
                this.result = store.DestinationListStore.getInstance();
            }
        });
        // 首页特卖列表
        _ret.SpecialSaleSearchModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10043/json/SpecialSaleSearch';
                this.param = {
                    Tab: 3, // 特卖类型 全部
                    PkgType: 'grouptravel', // 产品类型（grouptravel跟团游、freetravel自由行、空为全部）
                    Departkey: '', // 出发地Key
                    DepartMonth: 0, // 月份 0 全部 1 当月 2 下月 依次类推
                    Destkey: '', // 目的地
                    Sort: 0, // 默认值(综合升序 1 价格升序 2 价格降序)
                    PageIndex: 1, // 第几页
                    PageSize: 5, // 页面尺寸
                    SaleCity: 2 // 售卖地 默认设为2上海
                },
                this.result = null;
            }
        });
        // 目的地搜索列表
        _ret.DestSearchList = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10124/json/AddressSelectorIntelliSense';
                this.param = {
                    "key": "",
                    "depCityId": 0
                };
            }
        });
        //创建订单
        _ret.CreateOrderModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/CreateOrder');
                this.param = { Version: config.appVersion };
                this.result = store.OrderCreateStore.getInstance();
            }
        });
        //保存订单
        _ret.SaveOrderModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/SaveOrder');
                this.param = {};
                this.result = null;
            }
        });
        //意向单保存
        _ret.SaveTempOrderModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/SaveOrder');
                this.param = {};
                this.result = null;
            }
        });
        //优惠券验证
        _ret.CouponVerifyModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/PromotionValidation');
                this.param = { Version: config.appVersion };
                this.result = null;
            }
        });
        //订单提交
        _ret.OrderSubmitModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/SubmitOrder');
                this.param = {};
                this.result = null;
            }
        });
        // 订单详情
        _ret.OrderDetailModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetOrderDetail');
                //this.baseurl = {
                //    domain: 'doc.ui.sh.ctriptravel.com',
                //    path: 'json/index.php/'
                //};
                //this.url = '53.json';
                this.param = {};
                this.result = null;
            }
        });
        // 订单详情明细
        _ret.OrderDetailListModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetOrderResourceDetail');
                this.param = {};
                //this.result = store.OrderDetailListStore.getInstance();
                this.result = null;
            }
        });
        // 取消订单
        _ret.OrderCancelModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/CancelOrder');
                this.param = {};
                this.result = null;
            }
        });
        //修改订单
        _ret.OrderModificationModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/UpdateOrder');
                this.param = {};
                this.result = null;
            }
        });
        // 首页产品推荐
        _ret.homeInfoModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetHomeInfo');
                this.param = { 'SalesCityID': 2 };
                this.result = null;
            }
        });

        // C秒杀产品
        _ret.CsKillAdModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10043/json/GetSecKillSetting';
                this.result = null;
            }
        });
        // C秒杀产品
        _ret.CsKillModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10043/json/GetProducts';
                this.result = null;
            }
        });


        // 行程点评
        _ret.OrderCommentModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetProductCommentList');
            }
        });
        _ret.OrderCommentSubmitModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/CreateProductComment');
            }
        });
        _ret.OrderCommentShareModel = new Inherit.Class(_base, {
          __propertys__: function () {
            this.url = this.setUrl('10124/json/ShareProductComment');
          }
        });

        //检查是否收藏
        _ret.InMyCollectionModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10108/json/IsMyFavorites';
                this.result = null;
            }
        });

        //添加收藏
        _ret.AddCollectionModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10108/json/MyFavoritesAdd';
                this.result = null;
            }
        });

        //取消收藏
        _ret.RemoveCollectionModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10108/json/MyFavoritesDelete';
                this.result = null;
            }
        });

        //获取我的订阅
        _ret.GetSubscriptionModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetSubscriptionList');
                this.result = null;
            }
        });

        //添加订阅
        _ret.AddSubscriptionModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/CreateSubscriptions');
                this.result = null;
            }
        });

        //删除订阅
        _ret.RemoveSubscriptionModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/DeleteSubscriptionList');
                this.result = null;
            }
        });

        //获取订阅设置
        _ret.GetSubscriptionSetting = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetSubscriptionSetting');
                this.result = null;
            }
        });

        //更新订阅设置
        _ret.UpdateSubscriptionSetting = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/UpdateSubscriptionSetting');
                this.result = null;
            }
        });

        //检查是否可以预订
        _ret.OrderCanBookingModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/OrderCanBookingValidation');
                this.result = null;
            }
        });

        //游学
        _ret.OrderStudyModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/ProductSearch');
                this.result = null;
            }
        });
        //机票选择
        _ret.BookingFlightModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/FlightSearch');
                this.result = null;
            }
        });
        //出团说明书
        _ret.OrderGuide = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetTourNoticeInfo');
                this.result = null;
            }
        });
        //游轮选舱房
        _ret.BookingCruiseModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/CruiseSearch');
                this.result = null;
            }
        });
        //判断是否领队
        _ret.TourAssistJudgeIsLeader = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10072/json/TourAssistJudgeIsLeader';
                this.result = store.TourAssistJudgeIsLeaderStore.getInstance();
            }
        });
        // 咨询问答
        _ret.DetailAskSubmitModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/CreateProductQA');
            }
        });
        // 常用发票抬头列表
        _ret.InvoiceTitleListModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10091/GetInvoiceTitleList.json';
            }
        });
        // 新增、编辑常用发票抬头
        _ret.InvoiceTitleEditModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10091/MutateInvoiceTitle.json';
            }
        });
        // 取消billno
        _ret.CancelBillNoModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/CancelOrderBill');
            }
        });
        // 团队助手的入口判断
        _ret.TourIsTourOrder = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10072/json/TourIsTourOrder';
            }
        });
        // 获取AllianceID sid
        _ret.UserExtensionInfoModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetUserExtensionInfo');
                this.param = {'Flag':'h5'}
            }
        });
        // 获取我的足迹
        _ret.GetFootPrintModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10124/json/GetMyTrace';
                this.param = {
                    'DeviceId': '',
                    'PlatForm': '',
                    'NetWorkStatus': 0
                };
                this.result = null;
            }
        });
        // 添加我的足迹
        _ret.AddFootPrintModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10124/json/CreateTrace';
                this.param = {
                    'DeviceId': '',
                    'ProductId': 0,
                    'SaleCityId': 0,
                    'DepartureCityId': 0,
                    'PlatForm': ''
                };
                this.result = null;
            }
        });
        // 删除我的足迹
        _ret.DelFootPrintModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = '10124/json/DeleteTraces';
                this.param = {
                    'TraceIds': [],
                    'PlatForm': '',
                    'DeviceId': ''
                };
                this.result = null;
            }
        });
        //订单分享 加密订单ID
        _ret.OrderShareModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/CreateShareOrder');
                this.result = null;
            }
        });
        //订单分享 详细内容
        _ret.OrderShareDetailModel = new Inherit.Class(_base, {
            __propertys__: function () {
                this.url = this.setUrl('10124/json/GetShareOrderDetail');
                this.result = null;
            }
        });
		    // 配送地址编辑
		    _ret.CustomerAddrEditModel = new Inherit.Class(_base, {
			    __propertys__: function () {
				    this.url = '10090/mutateuseraddress.json';
			    }
		    });
		    // 配送地址删除
		    _ret.CustomerAddrDeleteModel = new Inherit.Class(_base, {
			    __propertys__: function () {
				    this.url = '10090/deleteuseraddress.json';
			    }
		    });
	      // 配送地址列表
		    _ret.CustomerAddrQueryModel = new Inherit.Class(_base, {
			    __propertys__: function () {
				    this.url = '10090/getuseraddress.json';
			    }
		    });
        return _ret;
    });
