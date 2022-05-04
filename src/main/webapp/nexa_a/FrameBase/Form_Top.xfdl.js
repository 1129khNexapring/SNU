(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Top");
            this.set_titletext("Form_Top");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new ImageViewer("ImageViewer00","0","0","200","100",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_background("url(\'theme::default/images/img_WF_Nexacro.png\') no-repeat left top /contain");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","1012","23","153","36",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_background("antiquewhite");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","1175","27","97","28",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("로그아웃");
            obj.set_background("#657ec2");
            obj.set_color("#ffffff");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1280,100,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Top.xfdl", function() {

        this.Form_Top_onload = function(obj,e)
        {
        	var sName = nexacro.getEnvironmentVariable("ev_Val");
        	this.Static00.set_text(sName+"님 환영합니다!");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
