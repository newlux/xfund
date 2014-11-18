
   <script type="text/lizard-config">
        {
            "url_schema": "detail",
            "viewName":"detail",
            "model": {
                "apis": [],
                "init_data": ""
            },
            "view":{
                "header": Lizard.T("headTmpl"),
                "viewport": Lizard.T("viewportTmpl")
            },
            "controller": "<?php echo config_item('fund')['path'] ?>/resource/fund/js/controllers/detail.js"
        }
    </script>

    <script id="headTmpl" type="text/lizard-template">
        <h1>基金详情</h1>
    </script>

    <script id="viewportTmpl" type="text/lizard-template">
		<?php  $this->load->view('fund/biz/tpl/detail');	?>
    </script>
    



