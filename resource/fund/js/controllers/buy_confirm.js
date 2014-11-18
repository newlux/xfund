define(['BaseView'], function (pageview) {
  var self=this;
  var View = pageview.extend({
        ViewName: 'buy',
        events: {
		    "click #start_buy": "nextStep"
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
                title: '申购确认',
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
		nextStep:function(){
		   var buy_psw = $.trim(self.$el.find("#buy_psw").val());
		   var fname=Lizard.P("fname");
		   if(buy_psw!=""){
		      self.showLoading();
			  window.setTimeout(function(){
			   self.hideLoading(); 
			   self.showMessage({
				  datamodel: {
					content: '您已成功申购--['+fname+"]",
					btns: [{ name: '确定', className: 'cui-btns-ok' }]
				  },
				 
				  events: {'click .cui-btns-ok': 'okAction'},
				  okAction: function () {
					self.showLoading();
					this.hide();
					Lizard.goTo("member_center?bind_card=true");
				  }
				});
			  },2000)
		   }else{
		      self.showToast({datamodel: {content: '请输入交易密码'},hideSec: 1000});
		   }
		   
		},
		renderPage:function(){
		   window.setTimeout(function(){ self.hideLoading();},1000)
		}
    });
    return View;
})
