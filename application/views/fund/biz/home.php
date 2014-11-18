
   <script type="text/lizard-config">
        {
            "url_schema": "index",
            "viewName":"index",
            "model": {
                "apis": [],
                "init_data": ""
            },
            "view":{
                "header": Lizard.T("headTmpl"),
                "viewport": Lizard.T("viewportTmpl")
            },
            "controller": "<?php echo config_item('fund')['path'] ?>/resource/fund/js/controllers/index.js"
        }
    </script>

    <script id="headTmpl" type="text/lizard-template">
        <h1>跟团游</h1>
    </script>

    <script id="viewportTmpl" type="text/lizard-template">
		<?php  $this->load->view('fund/biz/tpl/home');	?>
    </script>
    



