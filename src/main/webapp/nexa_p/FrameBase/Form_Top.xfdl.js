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
            this.set_background("white");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,100);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00",null,"43","178","50","146",null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Static00");
            obj.set_textAlign("right");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","0","0","270","100",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("url(\'imagerc::SNU_logo.png\') no-repeat center top /contain");
            this.addChild(obj.name, obj);

            obj = new Button("Button01",null,"42","122","52","14",null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("로그아웃");
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
        	var name = nexacro.getEnvironmentVariable("ev_Val1");
        	this.Static00.set_text(name+"님 환영합니다!");
        };

        this.Button01_onclick = function(obj,e)
        {
        	href.location="127.0.0.1:8888/login.snu";
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Top_onload,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("Form_Top.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
