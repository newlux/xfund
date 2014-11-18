define(['BaseView'], function (pageview) {
  var self=this;
  var View = pageview.extend({
        ViewName: 'index',
        events: {
            "click .list-item dd": "goDetailNews"
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
                title: '财经资讯',
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
		goDetailNews:function(){
		    Lizard.goTo("detail_news?id=10000")
		},
		renderPage:function(){
		   self.hideLoading();
		}
    });
    return View;
})
