define(['BaseView',"UIImageSlider"], function (BaseView,UIImageSlider) {
  var self=this;
  var isLogin=false;
  var imageSlider=null,remove_animate=null,scrollTop=0;
  var View = BaseView.extend({
        ViewName: 'index',
        events: {
            //"click .list .icon-circle": "goList",
			"click .list .typeid1": "goInfo",
			"click .list .typeid99": "goRank",
			"click .list .typeid20": "gocalc",
			"click .list .typeid162": "goMember",
            "click .g_dest": "getDest",
			"click .buy_btn": "goDeals",
			"click .recommend-view dt button": "goDeals",
			"click .recommend-view dl": "goDetail",
			"click .list-item .pure-button": "goDeals",
			"click .list-item": "goDetail",
			"input #fund_search_input":"goSearch"
        },
		onCreate:function(){
		    self=this;
		},
		onShow:function(){
		    self.showLoading();
			self.setHead();
			self.initBanner();
			self.initChart();
			self.getStockData();
			self.reScrollTop(scrollTop);
			self.switchTab();
			self.hideLoading();
		},
		onHide:function(){
		    scrollTop=$(window).scrollTop();;
			if(imageSlider){
				//imageSlider.stop();
			}
		},
		startAnimate:function(e){
		   //绑定动画效果
            var $currTarget = $(e.currentTarget);
            $currTarget.addClass("icon_active");
            if (remove_animate) {
                window.clearTimeout(remove_animate);
            }
            remove_animate = window.setTimeout(function () { $currTarget.removeClass("icon_active"); }, 150)
		},
		startListAnimate:function(e){
			   //绑定动画效果
                var $currTarget = $(e.currentTarget);
                $currTarget.addClass("list_active");
                if (remove_animate) {
                 window.clearTimeout(remove_animate);
                }
                remove_animate = window.setTimeout(function () { $currTarget.removeClass("list_active"); }, 150)
		},
		getStockData:function(){
		   require(["http://qt.gtimg.cn/q=s_sh000001,s_sz399001,s_hkHSI,?t="+new Date().getTime(),"text!TplStock"], function (stock,TplStock) {
		      //alert(v_s_sh000001);
			  var sh=v_s_sh000001.split("~");
			  var sz=v_s_sz399001.split("~");
			  var hk=v_s_hkHSI.split("~");
			  var stock_json=[
			  {"name":sh[1],"total":sh[3],"isup":parseFloat(sh[4])>=0?true:false,"change":sh[4]+" "+sh[5]},
			  {"name":sz[1],"total":sz[3],"isup":parseFloat(sz[4])>=0?true:false,"change":sz[4]+" "+sz[5]},
			  {"name":hk[1],"total":hk[3],"isup":parseFloat(hk[4])>=0?true:false,"change":hk[4]+" "+hk[5]}
			  ];
			  var tpl = _.template(TplStock);
              self.$el.find(".exponent").html(tpl({ "data": stock_json }));
		   })
		},
        setHead: function () {
            self.header.set({
                title: 'X基金',
                back: true,
                home: true,
                events: {
                    returnHandler: function () {
                       self.showToast({datamodel: {content: '返回'},hideSec: 2000});
                    },
                    homeHandler: function () {
                       self.showToast({datamodel: {content: '主页'},hideSec: 2000}); 
                    }
                }
            });
        },
		switchTab:function(){
		    self.$el.find(".recommend-tab li").click(function(){
			     var type=$(this).data("type");
			     self.$el.find(".recommend-tab li").removeClass("active");
				 self.$el.find(".recommend-view dl").hide();
				 $(this).addClass("active");
			     self.$el.find(".recommend-view dl[data-type='"+type+"']").show();
			})
		},
		goInfo:function(e){
		    self.showLoading();
		    self.startAnimate(e);
			window.setTimeout(function(){Lizard.goTo("list_news");},300)
		},
		goRank:function(e){
		     self.showLoading();
		    self.startAnimate(e);
			window.setTimeout(function(){Lizard.goTo("list_rank");},300)
		},
		gocalc:function(e){
		    self.showLoading();
		    self.startAnimate(e);
			window.setTimeout(function(){Lizard.goTo("list_receipts");},300)
		},
		goMember:function(e){
		  self.showLoading();
		  self.startAnimate(e);
		  isLogin=self.isLogin();
		  var goUrl="member_center";
		  if(!isLogin){
		      self.hideLoading();
			  self.showLogin(goUrl)
			}else{
			  Lizard.goTo(goUrl);
			};
			e.stopImmediatePropagation();
			return false;
		},
		goDeals:function(e){
		    self.showLoading();
		    self.startAnimate(e);
			var $currTarget = $(e.currentTarget);
			isLogin=self.isLogin();
			var goUrl="buy?fid="+$currTarget.data("fid")+"&fname="+$currTarget.data("name");
		    if(!isLogin){
			  self.hideLoading();
			  self.showLogin(goUrl)
			}else{
			  Lizard.goTo(goUrl);
			};
			e.stopImmediatePropagation();
			return false;
		},
		goDetail:function(e){
		    self.showLoading();
			self.startListAnimate(e);
			window.setTimeout(function(){
			  self.doGoDetail(e)
			},150)
		},
		goSearch:function(e){
		    var keyword=$.trim($(e.currentTarget).val());
		    require(['Fund_data',"text!TplAutoComplete"], function (fund_data,TplAutoComplete) {
			    var matcher = new RegExp(keyword, "i");
			    var index = 0;
			    var match = "";
				var tempArray =$.grep(window.product_fund_capital, function (item) {
						if (item.type == "Fund") {
							match = matcher.test(item.code) || matcher.test(item.spell) || matcher.test(item.name) || matcher.test(item.alias1) || matcher.test(item.alias2) || matcher.test(item.alias3);
						} else {
							match = matcher.test(item.code) || matcher.test(item.name) || matcher.test(item.spell);
						}
						if (match) {
							if (index >= 10)
								return;
							index++;
							return true;
						}
						return false;
					});
				var tpl = _.template(TplAutoComplete);
				console.log(tpl({ "data": tempArray }));
                //self.$el.find(".exponent").html(tpl({ "data": tempArray }));
			}) 
		},
		doGoDetail:function(e){
		    var $currTarget = $(e.currentTarget);
			var fid=$currTarget.data("fid");
			var fname=$currTarget.data("name");
		    Lizard.goTo("detail?fid="+fid+"&fname="+fname);
		},
		initBanner: function () {
		       if (imageSlider) {return;}
               var $container = self.$el.find('#index_banner_box');
               var data = [
				  { id: 1, src: 'http://static.howbuy.com/upload/cmsupload/39e7f9cb-ec3d-41b5-b087-64e78ae68cea.jpg', link: 'http://images3.c-ctrip.com/dj/201410/zy/nhwq1008_640x260.jpg' },
				  { id: 2, src: 'http://static.howbuy.com/upload/cmsupload/64813c88-c715-4186-94fa-9d62be16f7de.jpg', link: 'http://images3.c-ctrip.com/dj/201410/zy/nhwq1008_640x260.jpg' },
				  { id: 3, src: 'http://static.howbuy.com/upload/cmsupload/0e9a4b23-68b3-4918-b6bb-de0d41cb50eb.png', link: 'http://images3.c-ctrip.com/dj/201410/zy/nhwq1008_640x260.jpg' },
				  { id: 4, src: 'http://static.howbuy.com/upload/cmsupload/5ecb8df5-5aae-4056-8799-8950e5fc80a1.jpg', link: 'http://images3.c-ctrip.com/dj/201410/zy/nhwq1008_640x260.jpg' }
				];
                //根据imgsData刷选轮播图片src,目前先写死
				/*
                _.each(imgsData, function (item) {
                    imgs.push({
                        src: item.ImgUrl
                    });
                });
				*/
				// 设置广告容器的高度
                $container.height($(document.body).width() / 2.46);
				//开始广告
                if (!imageSlider) {
						  imageSlider = new UIImageSlider({
						  datamodel: {
							data: data,
							itemFn: function (item) {
							  return '<img class="ad-img" width="100%" height="100%" src="' + item.src + '" data-link="' + item.link + '">';
							}
						  },
						  createNav: function () {
							   if (this.sliderNav) return;
								  var nav = '<div class="cui-navContainer" style="color: rgb(20, 145, 197); position: absolute;z-index:3">';
								  for (var i = 0; i < this.itemNum; i++) {
									nav += '<span class="cui-slide-nav-item" data-index="' + i + '"></span>';
								  }
								  nav += '</div>';
								  this.sliderNav = $(nav);
								  this.$el.append(this.sliderNav);
								  this._setNavPos();
								  //this.setzIndexTop(this.sliderNav);
								  this._setNavIndex(this.datamodel.index);
							},
						  displayNum: 1,
						  itemClick: function (item) {
								//Guider.jump({ targetModel: 'h5', url: item.link });
							},
						  autoPlay: true,
						  wrapper: $container
						});
						imageSlider.autoHeight = true;			
						imageSlider.show();
                }
            },
		initChart:function(){
		     require(['Chart'], function () {
			    var $chart=$("#mychart");
				var chartWidth=$("body").width();
				$chart.attr({"width":chartWidth-100,"height":chartWidth-100});
			    var ctx = $chart.get(0).getContext("2d");
				var data = [
						{
							value: 31.6,
							color:"#F7464A"
						},
						{
							value : 68.4,
							color : "#E2EAE9"
						}
					];
					var options={
					    showTooltips: false,
						//Boolean - Whether we should show a stroke on each segment
						segmentShowStroke : true,
						
						//String - The colour of each segment stroke
						segmentStrokeColor : "#fff",
						
						//Number - The width of each segment stroke
						segmentStrokeWidth : 2,
						
						//The percentage of the chart that we cut out of the middle.
						percentageInnerCutout : 70,
						
						//Boolean - Whether we should animate the chart	
						animation : false,
						
						//Number - Amount of animation steps
						animationSteps : 50,
						
						//String - Animation easing effect
						animationEasing : "easeOutBounce",
						
						//Boolean - Whether we animate the rotation of the Doughnut
						animateRotate : false,

						//Boolean - Whether we animate scaling the Doughnut from the centre
						animateScale : false,
						
						//Function - Will fire on animation completion.
						onAnimationComplete : function(){
						     $(".receipts_per").addClass("flash")
							//self.showToast({datamodel: {content: '框架使用'}})
						}
					}
			        new Chart(ctx).Doughnut(data,options);
			 })
		}
    });
    return View;
})
