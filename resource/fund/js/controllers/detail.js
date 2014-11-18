define(['BaseView'], function (BaseView) {
  var self=this;
  var isLogin=false;
  var imageSlider=null,remove_animate=null;
  var View = BaseView.extend({
        ViewName: 'detail',
        events: {
			"click .itemBox-ul li": "switchTab",
			"click .detail_chart_nav li": "switchChartTab",
			"click .book_now_btn": "goDeals"
        },
		onCreate:function(){
		    self=this;
		},
		onShow:function(){
			self.setHead();
			self.showLoading();
			self.initChart();
			self.hideLoading();
		},
		startAnimate:function(e){
		   //绑定动画效果
            var currTarget = e.currentTarget;
            var $currTarget = $(currTarget);
            $currTarget.addClass("icon_active");
            if (remove_animate) {
                window.clearTimeout(remove_animate);
            }
            remove_animate = window.setTimeout(function () { $currTarget.removeClass("icon_active"); }, 150)
		},
        setHead: function () {
            self.header.set({
                title: '基金详情',
                back: true,
                home: true,
                events: {
                    returnHandler: function () {
                        Lizard.goTo("index");
                    },
                    homeHandler: function () {
                        Lizard.goTo("index");
                    }
                }
            });
        },
		goDeals:function(e){
		    self.showLoading();
			var $currTarget = $(e.currentTarget);
			var isLogin=self.isLogin();
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
		switchTab:function(e){
		  var $currTarget = $(e.currentTarget);
		  var tab=$currTarget.data("tab");
		  $currTarget.siblings().removeClass("on");
		  $currTarget.addClass("on");
		  self.$el.find(".trust-ul").hide();
		  self.$el.find(".trust-ul[data-tab='"+tab+"']").show();
		},
		switchChartTab:function(e){
		  var $currTarget = $(e.currentTarget);
		  $currTarget.siblings().removeClass("active");
		  $currTarget.addClass("active");
		  self.initChart();
		},
		initChart:function(data){
		     require(['Chart'], function () {
			    var $chart=$("#detail_chart");
				var chartWidth=$("body").width();
				$chart.attr({"width":chartWidth-10,"height":chartWidth-100});
			    var ctx = $chart.get(0).getContext("2d");
				var data = {
						labels: ["14-08-11", "14-09-11", "14-10-11", "14-11-11", "14-12-11", "15-01-11", "15-02-11"],
						datasets: [
							{
								label: "基金净值",
								fillColor: "rgba(220,220,220,0.2)",
								strokeColor: "rgba(220,220,220,1)",
								pointColor: "rgba(220,220,220,1)",
								pointStrokeColor: "#fff",
								pointHighlightFill: "#fff",
								pointHighlightStroke: "rgba(220,220,220,1)",
								data: [6.5, 5.9, 8.0, 8.1, 5.6, 5.5, 4.0]
							},
							{
								label: "基金收益",
								fillColor: "rgba(151,187,205,0.2)",
								strokeColor: "rgba(151,187,205,1)",
								pointColor: "rgba(151,187,205,1)",
								pointStrokeColor: "#fff",
								pointHighlightFill: "#fff",
								pointHighlightStroke: "rgba(151,187,205,1)",
								data: [2.8, 4.8, 4.0, 1.9, 8.6, 2.7, 9.0]
							}
						]
					}
					var options={
					    //Boolean - Whether grid lines are shown across the chart
						scaleShowGridLines : true,
            
						//String - Colour of the grid lines
						scaleGridLineColor : "rgba(0,0,0,.05)",

						//Number - Width of the grid lines
						scaleGridLineWidth : 1,

						//Boolean - Whether the line is curved between points
						bezierCurve : true,

						//Number - Tension of the bezier curve between points
						bezierCurveTension : 0.4,

						//Boolean - Whether to show a dot for each point
						pointDot : true,

						//Number - Radius of each point dot in pixels
						pointDotRadius : 4,

						//Number - Pixel width of point dot stroke
						pointDotStrokeWidth : 1,

						//Number - amount extra to add to the radius to cater for hit detection outside the drawn point
						pointHitDetectionRadius : 20,
                        
						scaleLabel: "<%=value%>%",
						
						tooltipTitleFontFamily: "'Microsoft YaHei','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
						
						// String - Template string for single tooltips
						multiTooltipTemplate: "<%= datasetLabel %>:<%= value %>%",
						
						//Boolean - Whether to show a stroke for datasets
						datasetStroke : true,

						//Number - Pixel width of dataset stroke
						datasetStrokeWidth : 2,

						//Boolean - Whether to fill the dataset with a colour
						datasetFill : true

					}
			        new Chart(ctx).Line(data,options);
			 })
		}
    });
    return View;
})
