<div class="detail_box">
	<div class="item-head">
	      <!--基金名称-->
	     <div class="name cf">
		    <ul>
				<li><%= Lizard.P("fname")%></li>
				<li>(485120)</li>
		    </ul> 
		</div>
		<ul class="manager">
				<li><span class="mr5">基金类型:</span> 理财型</li>
				<li><span class="mr5">风险:</span> 高风险</li>
				<li><span class="mr5">起购额:</span> 1000元</li>
				<li><span class="mr5">同类排名</span> <span class="f14 black mr5"><span class="red">31</span>/100(七日年化)</span></li>
		</ul>
		 <!--基金收益-->
		 <div class="info dt">
			<div class="dtc w50">
					 七日年化收益<br>
				<span class="cRed">5.53%</span>		
			</div>
			<div class="dtc w50">
					  每万份收益（元）<br>
				<span class="black">1.4091</span>
							
			</div>  	 	
		 </div>
		 
		
	  </div>
	  
	<div id="leftTabBox" class="itemBox">
	  <div class="hd">
				<ul class="itemBox-ul">
					<li data-tab="performance" class="on"><a href="javascript:;">业绩表现</a></li>
					<li data-tab="intro"><a href="javascript:;">基金详情</a></li>
				</ul>
	  </div>
		
      <div class="bd"> 
			  <ul class="trust-ul" data-tab="performance">
				   <li>
					  <div class="expression">
								 <ul class="detail_chart_nav">
									<li id="hbchart_1" class=""><a href="javascript:loadJjhbChart(1);">7天</a></li>
									<li id="hbchart_2" class="active"><a href="javascript:loadJjhbChart(2);">1个月</a></li>
									<li id="hbchart_3" class=""><a href="javascript:loadJjhbChart(3);">3个月</a></li>
									<li id="hbchart_4" class=""><a href="javascript:loadJjhbChart(4);">1年</a></li>
									<li id="hbchart_5" class=""><a href="javascript:loadJjhbChart(5);">最大</a></li>
								 </ul>
								 <div  class="detail_chart_box">
								    <canvas  id="detail_chart" class="detail_chart" ></canvas >
									<!--图表区域-->
								 </div>
								 <div class="table_title">历史收益排名 <em>(截止日期：2014-10-27)</em></div>
								 <table class="pure-table">
									<thead>
										<tr>
											<th>期间</th>
											<th>增长率</th>
											<th>全债指数</th>
											<th>排名</th>
										</tr>
									</thead>

									<tbody>
										<tr>
											<td>今年以来</td>
											<td><span class="cRed">4.26%</span></td>
											<td><span class="cRed">6.81%</span></td>
											<td>31/98</td>
										</tr>
										<tr>
											<td>3月</td>
											<td><span class="cRed">1.16%</span></td>
											<td><span class="cRed">2.81%</span></td>
											<td>45/100</td>
										</tr>
										<tr>
											<td>半年</td>
											<td><span class="cRed">2.41%</span></td>
											<td><span class="cRed">4.75%</span></td>
											<td>34/98</td>
										</tr>
										<tr>
											<td>近一年</td>
											<td><span class="cRed">5.08%</span></td>
											<td><span class="cRed">5.80%</span></td>
											<td>40/94</td>
										</tr>
										<tr>
											<td>成立以来</td>
											<td><span class="cRed">9.61%</span></td>
											<td>--</td>
											<td>--/--</td>
										</tr>		
									</tbody>
								</table> 
					  </div>
					</li>
			  </ul>
			  
			  <ul class="trust-ul hide" data-tab="intro">
				  <li>
			          <div class="overview">
						  <ul>
							<li><span class="tag">基金公司</span>工银瑞信</li>
							<li><span class="tag">基金经理</span>谷衡 魏欣 </li>
							<li><span class="tag">管理费率</span>0.27%</li>
							<li><span class="tag">基金托管费</span>0.08%</li>
							<li><span class="tag">基金状态</span>正常</li>
							<li><span class="tag">成立日期</span>2012-10-26</li>
							<li><span class="tag">最新份额</span>387847.58万份  <span class="gray9 ml5">[2014-09-30]</span></li>
							<li><span class="tag">首募规模</span>90.9亿</li>
							<li><span class="tag">最新规模</span>99.20亿 <span class="gray9 ml5">[2014-09-30]</span></li>
							<li><span class="tag">交易状态</span><span class="mr10">申购打开</span><span class="mr10"> 赎回打开</span>定投打开</li>
						  </ul>
						</div>
					</li>
			 </ul>
	  </div>
	</div>
	 
    <footer class="book_now_double">
	<a href="tel:4008201234" class="telphone_ask_btn"  id="ctm_tour_detail_phone">电话咨询</a>
	<a data-fid="<%=Lizard.P("fid")%>" data-name="<%=Lizard.P("fname")%>" class="book_now_btn js_in_Footer" href="javascript:void(0);"><span>立即申购</span></a>
	</footer>	 
</div>



