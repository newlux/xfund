   <script type="text/lizard-config">
        {
            "url_schema": "list_news",
            "viewName":"list_news",
            "model": {
                "apis": [],
                "init_data": ""
            },
            "view":{
                "header": Lizard.T("headTmpl"),
                "viewport": Lizard.T("viewportTmpl")
            },
            "controller": "<?php echo config_item('fund')['path'] ?>/resource/fund/js/controllers/list_news.js"
        }
    </script>

    <script id="headTmpl" type="text/lizard-template">
        <h1>财经资讯</h1>
    </script>

    <script id="viewportTmpl" type="text/lizard-template">
	   <?php  $this->load->view('fund/biz/tpl/list_news');	?>
    </script>
    



