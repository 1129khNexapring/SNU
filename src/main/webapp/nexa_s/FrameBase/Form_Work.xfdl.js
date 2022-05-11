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
                this._setFormPosition(1080,650);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("btn_bookmark","7","6","23","20",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("☆");
            obj.set_font("bold 14px/normal \"Malgun Gothic\"");
            this.addChild(obj.name, obj);

            obj = new Static("st_title","37","5","322","26",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Static01");
            this.addChild(obj.name, obj);

            obj = new Div("div_work","10","33","1060","608",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Div00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1080,650,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.fv_key = ""
        this.Form_Work_onload = function(obj,e)
        {
        	var objOwnerFrame = this.getOwnerFrame();

        	var sMenuId = objOwnerFrame.openParam.LIST_ID;
        	var sMenuNM = objOwnerFrame.openParam.LIST;
        	var sFormUrl = objOwnerFrame.openParam.FORM_URL;

        	this.div_work.set_url(sFormUrl);


        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Work_onload,this);
            this.btn_bookmark.addEventHandler("onclick",this.btn_bookmark_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
