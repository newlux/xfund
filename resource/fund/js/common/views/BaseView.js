define(['cPageView', 'cGuider', 'cUtility','Store'], function (cPageView, cGuider, cUtility,Store) {
    var isInApp = cUtility.isInApp;
    var Guider = cGuider;
	var loginStore=Store.LoginStore.getInstance();
    var BaseView = cPageView.extend({
	    //scrollZero:false,
	    showLoading:function(){
		   $("#loading .std_loading").removeClass("fadeOut");
		   $("#loading").show();
		},
		hideLoading:function(){
		   $("#loading .std_loading").addClass("fadeOut");
		   window.setTimeout(function(){$("#loading").hide()},280);
		},
		showMask:function(){
		   $(".mask_all").show();
		},
		hideMask:function(){
		   $(".mask_all").hide();
		},
		showLogin:function(url){
		    var self=this;
		    if($("#footer .global_login").size()>0){
				$("#footer .global_login").removeClass("back").addClass("move");
			}else{
				require(['text!TplLogin'],function(TplLogin){
				  $("#footer").append(_.template(TplLogin)())
				  $("#footer .global_login").removeClass("back").addClass("move");
				  $("#footer .global_login .scancel").on("click",function(){self.hideLogin();})
				  $("#footer .global_login .sconfirm").on("click",function(){self.hideLogin();})
				  $("#footer .global_login #start_login").on("click",function(){self.checkLogin(url);})
				})
			}
			$(window).unbind("touchmove");
		},
		hideLogin:function(){
		    $("#footer .global_login").removeClass("move").addClass("back");
			$(window).bind("touchmove");
		},
		checkLogin:function(url){
		    var self=this;
		    var user=$.trim($("#loginUser").val());
			var psw=$.trim($("#loginPsw").val());
			if(user==""||psw==""){
			  self.showToast({datamodel: {content: '请输入用户名或密码!'},hideSec: 2000});
			}else{
			  if(user=="xfund"&&psw=="xfund"){
			    self.doLogin(url);
			  }else{
			    self.showToast({datamodel: {content: '用户名或密码错误!'},hideSec: 2000}); 
			  }
			}
		},
		doLogin:function(url){
		    var self=this;
			loginStore.setAttr("isLogin",true);
			self.showLoading();
			self.hideLogin();
			Lizard.goTo(url);
		},
		isLogin:function(){
		    return loginStore.get().isLogin;
		},
		reScrollTop:function(top){
		    window.scrollTo(0,top);
		},
        appVersion: function () {
            if (isInApp) {
                var appVersion = (Internal.appVersion);
                return appVersion;
            }
        },
        isAndroid: function () {
            if (isInApp) {
                return Internal.isAndroid;
            }
        },
        isIOS: !!$.os && !!$.os.iphone,
        isWinOS: function () {
            if (isInApp) {
                return Internal.isWinOS;
            }
        }
    });
    return BaseView;
});