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
            obj = new Button("Button00","516","34","149","46",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("학생입니다");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","98","157","166","78",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Button01");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","Desktop_screen",1080,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;
                p.set_titletext("Form_Work");

                p.Button00.set_taborder("0");
                p.Button00.set_text("학생입니다");
                p.Button00.move("516","34","149","46",null,null);

                p.Button01.set_taborder("1");
                p.Button01.set_text("Button01");
                p.Button01.move("98","157","166","78",null,null);
            	}
            );
            this.addLayout(obj.name, obj);

            //-- Normal Layout : this
            obj = new Layout("Desktop_screen","Desktop_screen",1080,670,this,
            	//-- Layout function
            	function(p)
            	{
                var rootobj = p;
                p = rootobj;

            	}
            );
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Work.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {
        	var sId = nexacro.getEnvironmentVariable("ev_Val");
        	var sName = nexacro.getEnvironmentVariable("ev_Val1");
        	alert(sId);
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("Form_Work.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
