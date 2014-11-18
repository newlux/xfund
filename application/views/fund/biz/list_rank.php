   <script type="text/lizard-config">
        {
            "url_schema": "list_rank",
            "viewName":"list_rank",
            "model": {
                "apis": [],
                "init_data": ""
            },
            "view":{
                "header": Lizard.T("headTmpl"),
                "viewport": Lizard.T("viewportTmpl")
            },
            "controller": "<?php echo config_item('fund')['path'] ?>/resource/fund/js/controllers/list_rank.js"
        }
    </script>

    <script id="headTmpl" type="text/lizard-template">
        <h1>基金排行</h1>
    </script>

    <script id="viewportTmpl" type="text/lizard-template">
	   <?php  $this->load->view('fund/biz/tpl/list_rank');	?>
    </script>
    



