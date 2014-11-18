define(['BaseView'], function (pageview) {
  var self=this;
  var View = pageview.extend({
        ViewName: 'list_receipts',
        events: {
          "click .search_filter_tab li":"showFilter",
		  "click .rank_pop p":"doFilter"
        },
		onCreate:function(){
		    self=this;
		},
		onShow:function(){
			self.showLoading();
			self.setHead();
			self.renderPage();
		},
        setHead: function () {
            self.header.set({
                title: '收益估算',
                back: true,
                home: true,
                events: {
                    returnHandler: function () {
                       Lizard.goBack();
                    },
                    homeHandler: function () {
                       Lizard.goTo("index")
                    }
                }
            });
        },
		renderPage:function(){
		   self.hideLoading();
		},
		showFilter:function(e){
		    var $currTarget = $(e.currentTarget);
			var filter=$currTarget.data("filter");
			//关闭其他
			$currTarget.siblings().removeClass("on");
			self.$el.find(".filter_pop_wrap .rank_pop").hide();
			self.hideMask();
			//打开所需
			if($currTarget.hasClass("on")){
			 $currTarget.removeClass("on");
			 self.$el.find(".filter_pop_wrap .rank_pop[data-filter='"+filter+"']").hide();
			 self.hideMask();
			}else{
			 $currTarget.addClass("on");
			 self.$el.find(".filter_pop_wrap .rank_pop[data-filter='"+filter+"']").show();
			 self.showMask();
			}
		},
		doFilter:function(e){
		  var $currTarget = $(e.currentTarget);
		  var filterValue =  $currTarget.data("value");
		  //先选中自己
		  $currTarget.siblings().find("i").remove();
		  $currTarget.append('<i class="animate_select_std"></i>');
		  //再关筛选
		  self.$el.find(".search_filter_tab li.on").removeClass("on");;
		  self.$el.find(".filter_pop_wrap .rank_pop").hide();
		  self.hideMask();
		  //发请求,更新页面数据
		  self.showLoading();
		  window.setTimeout(function(){
		     self.hideLoading();
		     self.showToast({datamodel: {content: 'Sorry,数据未准备完全.'},hideSec: 2000});
		  },2000)
		}
    });
    return View;
})
