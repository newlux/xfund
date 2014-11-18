   <script type="text/lizard-config">
        {
            "url_schema": "list_receipts",
            "viewName":"list_receipts",
            "model": {
                "apis": [],
                "init_data": ""
            },
            "view":{
                "header": Lizard.T("headTmpl"),
                "viewport": Lizard.T("viewportTmpl")
            },
            "controller": "<?php echo config_item('fund')['path'] ?>/resource/fund/js/controllers/list_receipts.js"
        }
    </script>

    <script id="headTmpl" type="text/lizard-template">
        <h1>收益估算</h1>
    </script>

    <script id="viewportTmpl" type="text/lizard-template">
	   <?php  $this->load->view('fund/biz/tpl/list_receipts');	?>
    </script>
    



