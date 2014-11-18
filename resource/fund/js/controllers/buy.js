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
                title: '申购基金',
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
		   var buy_count = parseInt(self.$el.find("#buy_count").val());
		   var fname=Lizard.P("fname");
		   var fid=Lizard.P("fid");
		   if(buy_count&&buy_count>=10){
		      self.showLoading();
			  Lizard.goTo("buy_confirm?fid="+fid+"&fname="+fname);
		   }else{
		      self.showToast({datamodel: {content: '申购金额必须大于等于10'},hideSec: 2000});
		   }
		   
		},
		renderPage:function(){
		   window.setTimeout(function(){ self.hideLoading();},1000)
		}
    });
    return View;
})
