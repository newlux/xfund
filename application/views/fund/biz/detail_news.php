   <script type="text/lizard-config">
        {
            "url_schema": "detail_news",
            "viewName":"detail_news",
            "model": {
                "apis": [],
                "init_data": ""
            },
            "view":{
                "header": Lizard.T("headTmpl"),
                "viewport": Lizard.T("viewportTmpl")
            },
            "controller": "<?php echo config_item('fund')['path'] ?>/resource/fund/js/controllers/detail_news.js"
        }
    </script>

    <script id="headTmpl" type="text/lizard-template">
        <h1>资讯详情</h1>
    </script>

    <script id="viewportTmpl" type="text/lizard-template">
	   <?php  $this->load->view('fund/biz/tpl/detail_news');	?>
    </script>
    



