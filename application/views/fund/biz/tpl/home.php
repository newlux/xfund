<div class="index">
			    <!--轮播图-->
			    <div id="index_banner_box"></div>
                
				<div class="top_viewbox">
					<!--搜索入口-->
					<div id="search-wrap">
						<div class="box-search">
							<i class="icon-search text-icon"></i>
							<input id="fund_search_input" type="text" name="w" placeholder="请输入基金代码,拼音或简称" autocomplete="off" >
							<span id="delete-search" style="display: none;" class="delete-button" gaevent="imt/search/delete">X</span>
						</div>
						<button type="submit" class="btn" gaevent="imt/search/submit" id="search-submit">搜索</button>
					</div>
					
					<!--分类-->
					<dl class="list list-in">
					<dd>
						<ul class="icon-list">
						<li class="icon">
								<a class="react">
								<span class="icon-circle typeid1">
								 <i class="fi-graph-trend size-24"></i>
								</span>
							<span class="icon-desc">资讯</span>
							</a>
						</li><li class="icon">
								<a class="react">
								<span class="icon-circle typeid99">
								<i class="fi-graph-bar size-24"></i>
								</span>
							<span class="icon-desc">排行</span></a>
						</li><li class="icon">
								<a class="react">
								<span class="icon-circle typeid20">
								<i class="fi-yen size-24"></i>
								</span>
							<span class="icon-desc">估算</span></a>
						</li><li class="icon">
								<a class="react" >
								<span class="icon-circle typeid162">
								<i class="fi-key size-24"></i>
								</span>
							<span class="icon-desc">交易</span></a>
						</li>
						</ul>
					</dd>
				   </dl>
			   </div>
				
				<!--当前行情-->
			<div class="exponent dt">
				<div class="dtc w33">
					<ul>
						<li>上证指数</li>
						<li><span class="cGreen"><em>--</em></span></li>
						<li></li>
					</ul>
				</div>
				<div class="dtc w33">
					<ul>
						<li>深证成指</li>
						<li><span class="cGreen"><em>--</em></span></li>
						<li></li>
					</ul>					
				</div>
				<div class="dtc w33">
					<ul>
						<li>恒生指数</li>
						<li><span class="cGreen"><em>--</em> </span></li>
						<li></li>
					</ul>					
				</div>
			</div>
			
			<!--今日推荐-->
				<div class="best_one">
				  <h2>
				  <p class="main_title">X基金--每日推荐</p>
				  <p class="sub_title">招财进宝90天</p>
				  </h2>
				  <canvas  id="mychart" class="mychart" ></canvas >
				  <div class="receipts "><p class="receipts_text">半年收益:</p><p class="receipts_per animated">31.13%</p></div>
				  <div class="buy_btn" data-fid="100" data-name="招财进宝90天"><button class="button-error pure-button button-center button-xlarge">立即购买</button></div>
				</div>
				
			
				<!--推荐入口-->
				<div class="recommend-view">
					<ul class="recommend-tab cf">
						<li class="active" data-type="cate_1">1元起</li>
						<li data-type="cate_1000">千元起</li>
						<li data-type="cate_1000000">百万元</li>
						<li data-type="cate_x">高收益</li>
					</ul>
					<dl data-type="cate_1" data-fid="101" data-name="工银14天理财发起A">
						<dt>
							<span>工银14天理财发起A</span>
							<button  data-fid="101" data-name="工银14天理财发起A" class="button-error pure-button button-right button-xsmall">购买</button>
						</dt>
						<dd>
							<div class="dtc w35">
								<ul>
									<li>七日年化</li>
									<li><span class="cRed"><span class="cRed">5.43%</span></span></li>
								</ul>
							</div>
							<div class="dtc w65">
								<ul>
									<li>万份收益</li>
									<li><span class="black">2.2849  </span></li>
								</ul>							
							</div>
						</dd>
					</dl>
					<dl class="hide" data-type="cate_1000" data-fid="102" data-name="大摩多因子策略股票">
						<dt>
							<span>大摩多因子策略股票</span>
							<button  data-fid="102" data-name="大摩多因子策略股票" class="button-error pure-button button-right button-xsmall">购买</button>
						</dt>
						<dd>
							<div class="dtc w35">
								<ul>
									<li>近一年收益</li>
									<li><span class="cRed"><span class="cRed">46.41%</span></span></li>
								</ul>
							</div>
							<div class="dtc w65">
								<ul>
									<li>最新净值</li>
									<li><span class="black">1.4430</span></li>
								</ul>							
							</div>
						</dd>
					</dl>	
					<dl class="hide" data-type="cate_1000000" data-fid="103" data-name="沈阳和平国资应收账款1期">
						<dt>
							<span>沈阳和平国资应收账款1期</span>
							<button data-fid="103" data-name="沈阳和平国资应收账款1期" class="button-error pure-button button-right button-xsmall">购买</button>
						</dt>
						<dd>
							<div class="dtc w50">
								<ul>
									<li>产品期限：<i class="black">0.75年</i></li>
									<li class="start">起始资金：<i class="black"> 100万起</i></li>
								</ul>
							</div>
							<div class="dtc w50">
								<ul>
									<li>预期收益</li>
									<li><span class="cRed"><span class="cRed">9.20%</span></span></li>
								</ul>							
							</div>
						</dd>
					</dl>
					<dl class="hide" data-type="cate_x" data-fid="104" data-name="重阳对冲2号">
					<dt>
						<span>重阳对冲2号</span>
						<button data-fid="104" data-name="重阳对冲2号" class="button-error pure-button button-right button-xsmall">购买</button>
					</dt>
					<dd>
						<div class="dtc w35">
							<ul>
								<li>近一年收益</li>
								<li><span class="cRed">--</span></li>
							</ul>
						</div>
						<div class="dtc w65">
							<ul>
								<li>最新净值</li>
								<li><span class="black"> 1.1307 </span></li>
							</ul>							
						</div>
					</dd>
				 </dl>												
				</div>
				<!--公募入口-->
				<div id="public_rank" class="public_rank">
				<div class="limited_sale limitedsale" >
					<a href="/webapp/deals/deals_list" style="color:#999">
						<h2 class="hd_title">公募基金</h2>
						<p>最有价值的私募基金</p>
					</a>
				</div>
				
				<div  class="content pure-g">
						<div class="pure-u-1">
							<div class="list-item  pure-g" data-fid="105" data-name="汇金聚富6期第5期">
								<div class="pure-u rank"><em></em></div>

								<div class="pure-u-3-4">
									<h2 class="list-name">汇金聚富6期第5期  </h5>
									<h3 class="list-subject">近一年收益: <em class="orange"><i class="fi-graph-trend size-16"></i> 400.13%</em></h4>
									<p class="list-desc">日涨跌: <em class="go_up"> <i class="fi-arrow-up size-16"></i> 0.07%</em></p>
									<p class="list-people">近期购买: <em> <i class="fi-torsos-male-female size-16"></i> 9980人</em></p>
								</div>
								
								<button data-fid="105" data-name="汇金聚富6期第5期" class="button-error pure-button button-right button-xmiddle">购买</button>
							</div>

							<div class="list-item pure-g" data-fid="105" data-name="汇金聚富6期第5期">
								<div class="pure-u rank"><em></em></div>

								<div class="pure-u-3-4">
									<h2 class="list-name">汇金聚富6期第5期  </h5>
									<h3 class="list-subject">近一年收益:<em class="orange"> <i class="fi-graph-trend size-16"></i>  300.75%</em></h4>
									<p class="list-desc">日涨跌:<em class="go_down"> <i class="fi-arrow-down size-16"></i> 0.07%</em></p>
									<p class="list-people">近期购买: <em> <i class="fi-torsos-male-female size-16"></i> 1780人</em></p>
								</div>
								
								<button data-fid="105" data-name="汇金聚富6期第5期"  class="button-error pure-button button-right button-xmiddle">购买</button>
								
							</div>

							<div class="list-item pure-g" data-fid="105" data-name="汇金聚富6期第5期">
								<div class="pure-u rank"><em></em></div>

								<div class="pure-u-3-4">
									<h2 class="list-name">汇金聚富6期第5期  </h5>
									<h3 class="list-subject">近一年收益:<em class="orange"> <i class="fi-graph-trend size-16"></i> 200.98%</em></h4>
									<p class="list-desc">日涨跌:<em class="go_up"> <i class="fi-arrow-up size-16"></i> 0.07%</em></p>
									<p class="list-people">近期购买: <em> <i class="fi-torsos-male-female size-16"></i> 860人</em></p>
								</div>
								
								<button data-fid="105" data-name="汇金聚富6期第5期"  class="button-error pure-button button-right button-xmiddle">购买</button>
								
							</div>
		
						</div>

					</div>
				</div>
				
				<!--公募入口-->
				<div id="private_rank" class="private_rank">
				<div class="limited_sale limitedsale" >
					<a href="/webapp/deals/deals_list" style="color:#999">
						<h2 class="hd_title">私募基金</h2>
						<p>最有价值的私募基金</p>
					</a>
				</div>
				
				<div  class="content pure-g">
						<div class="pure-u-1">
							<div class="list-item pure-g" data-fid="105" data-name="汇金聚富6期第5期">
								<div class="pure-u rank"><em></em></div>

								<div class="pure-u-3-4">
									<h2 class="list-name">汇金聚富6期第5期  </h5>
									<h3 class="list-subject">近一年收益:<em class="orange">400%</em></h4>
									<p class="list-desc">日涨跌:<em class="go_down"> <i class="fi-arrow-down size-16"></i> 0.07%</em></p>
									<p class="list-people">近期购买: <em> <i class="fi-torsos-male-female size-16"></i> 9980人</em></p>
								</div>
								
								<button data-fid="105" data-name="汇金聚富6期第5期"  class="button-error pure-button button-right button-xmiddle">购买</button>
								
							</div>

							<div class="list-item pure-g" data-fid="105" data-name="汇金聚富6期第5期">
								<div class="pure-u rank"><em></em></div>

								<div class="pure-u-3-4">
									<h2 class="list-name">汇金聚富6期第5期  </h5>
									<h3 class="list-subject">近一年收益:<em class="orange">400%</em></h4>
									<p class="list-desc">日涨跌:<em class="go_up"> <i class="fi-arrow-up size-16"></i> 0.07%</em></p>
									<p class="list-people">近期购买: <em> <i class="fi-torsos-male-female size-16"></i> 1280人</em></p>
								</div>
								
								<button data-fid="105" data-name="汇金聚富6期第5期"  class="button-error pure-button button-right button-xmiddle">购买</button>
								
							</div>

							<div class="list-item pure-g" data-fid="105" data-name="汇金聚富6期第5期">
								<div class="pure-u rank"><em></em></div>

								<div class="pure-u-3-4">
									<h2 class="list-name">汇金聚富6期第5期  </h5>
									<h3 class="list-subject">近一年收益:<em class="orange">400%</em></h4>
									<p class="list-desc">日涨跌:<em class="go_down"><i class="fi-arrow-down size-16"></i> 0.07%<em></p>
									<p class="list-people">近期购买: <em> <i class="fi-torsos-male-female size-16"></i> 678人</em></p>
								</div>
								
								<button data-fid="105" data-name="汇金聚富6期第5期"  class="button-error pure-button button-right button-xmiddle">购买</button>
								
							</div>
							
						</div>

					</div>
				</div>
				
</div>

    



