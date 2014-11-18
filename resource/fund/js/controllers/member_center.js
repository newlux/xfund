define(['BaseView'], function (pageview) {
  var self=this;
  var View = pageview.extend({
        ViewName: 'member_center',
        events: {
		  "click .home-list li":"checkCard",
		  "click #start_bind_card":"bindCard",
		  "click #start_get_hold":"goHold"
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
                title: 'X基金交易平台',
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
		checkCard:function(){
		   var isBindCard=Lizard.P("bind_card");
		   if(!isBindCard){
			   self.showMessage({
				  datamodel: {
					content: '您还未绑定银行卡,请点击"银行卡管理"开始绑定吧~'
				  }
				});
			}
		},
		bindCard:function(){
            self.showMessage({
				  datamodel: {
					content: 'Sorry,程序员正在玩命开发中...'
				  }
				});
		},
		goHold:function(){
            self.showMessage({
				  datamodel: {
					content: 'Sorry,程序员正在玩命开发中...'
				  }
				});
		},
		renderPage:function(){
		   self.hideLoading();
		}
    });
    return View;
})
