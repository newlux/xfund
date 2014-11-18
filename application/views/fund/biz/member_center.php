
   <script type="text/lizard-config">
        {
            "url_schema": "member_center",
            "viewName":"member_center",
            "model": {
                "apis": [],
                "init_data": ""
            },
            "view":{
                "header": Lizard.T("headTmpl"),
                "viewport": Lizard.T("viewportTmpl")
            },
            "controller": "<?php echo config_item('fund')['path'] ?>/resource/fund/js/controllers/member_center.js"
        }
    </script>

    <script id="headTmpl" type="text/lizard-template">
        <h1>X基金交易中心</h1>
    </script>

    <script id="viewportTmpl" type="text/lizard-template">
		<?php  $this->load->view('fund/biz/tpl/member_center');	?>
    </script>
    



