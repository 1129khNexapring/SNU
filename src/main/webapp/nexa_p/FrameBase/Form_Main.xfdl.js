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
                this._setFormPosition(1080,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Button("Button00","16","15","1050","555",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("교수 통합 정보 시스템에 오신걸 환영합니다.");
            obj.set_font("normal 30pt/normal \"Arial\"");
            obj.set_background("transparent");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1080,590,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Main.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var sId = nexacro.getEnvironmentVariable("ev_Val");
            var sPwd = nexacro.getEnvironmentVariable("ev_Val1");
            alert(sPwd);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("Form_Main.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
