(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Work");
            this.set_titletext("Form_Work");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_bookmark","7","6","23","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("☆");
            obj.set_font("bold 14px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","41","6","344","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static00");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","7","44","1064","616",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1080,670,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.fv_key = "";

        this.Form_Work_onload = function(obj,e)
        {
        	var objOwnerFrame = this.getOwnerFrame();

        	var sMenuId = objOwnerFrame.openParam.MENU_ID;
        	var sMenuNM = objOwnerFrame.openParam.MENU_NAME;
        	var sFormUrl = objOwnerFrame.openParam.FORM_URL;
        	var sMenuPath = objOwnerFrame.openParam.MENU_PATH;

        	this.div_work.set_url(sFormUrl);
        	this.st_title.set_text(sMenuPath);

        	this.fv_key = sMenuId;

        	var objApp = nexacro.getApplication();
        	var nRow = objApp.gds_myMenu.findRow("MENU_ID", this.fv_key);

        	if(nRow > -1)
        	{
        		this.btn_bookmark.set_text("★"); //별은 텍스트
        		this.fv_myMenu = "D";
        	}
        };



        this.Form_Work_onactivate = function(obj,e)
        {
        	nexacro.getApplication().av_MdiFrame.form.fn_tabControl(this.fv_key);
        };

        this.fv_myMenu = "I"; // 등록(I), 삭제(D)


        this.btn_bookmark_onclick = function(obj,e)
        {
        	if(this.fv_myMenu == "I")
        	{
        		//즐겨찾기 등록
        		var objApp = nexacro.getApplication();
        		var nFindRow = objApp.gds_menu.findRow("MENU_ID", this.fv_key);
        		var nNewRow = objApp.gds_myMenu.addRow();
        		objApp.gds_myMenu.copyRow(nNewRow, objApp.gds_menu, nFindRow);
        		obj.set_text("★");
        		this.fv_myMenu = "D";
        	}else if(this.fv_myMenu == "D")
        	{
        		//즐겨찾기 삭제
        		var objApp = nexacro.getApplication();
        		var nRow = objApp.gds_myMenu.findRow("MENU_ID", this.fv_key);
        		objApp.gds_myMenu.deleteRow(nRow);
        		obj.set_text("☆");
        		this.fv_myMenu = "I";
        	}
        	nexacro.setPrivateProfile("myMenuData", objApp.gds_myMenu.saveXML());

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.addEventHandler("onactivate",this.Form_Work_onactivate,this);
            this.btn_bookmark.addEventHandler("onclick",this.btn_bookmark_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
