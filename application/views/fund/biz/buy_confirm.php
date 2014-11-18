
   <script type="text/lizard-config">
        {
            "url_schema": "buy_confirm",
            "viewName":"buy_confirm",
            "model": {
                "apis": [],
                "init_data": ""
            },
            "view":{
                "header": Lizard.T("headTmpl"),
                "viewport": Lizard.T("viewportTmpl")
            },
            "controller": "<?php echo config_item('fund')['path'] ?>/resource/fund/js/controllers/buy_confirm.js"
        }
    </script>

    <script id="headTmpl" type="text/lizard-template">
        <h1>确认申购</h1>
    </script>

    <script id="viewportTmpl" type="text/lizard-template">
		<?php  $this->load->view('fund/biz/tpl/buy_confirm');	?>
    </script>
    



