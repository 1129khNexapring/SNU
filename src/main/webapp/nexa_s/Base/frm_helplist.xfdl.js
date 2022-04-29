(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_helpLIst");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_vList", this);
            obj._setContents("<ColumnInfo><Column id=\"vCode\" type=\"STRING\" size=\"256\"/><Column id=\"vName\" type=\"STRING\" size=\"256\"/><Column id=\"vArea\" type=\"STRING\" size=\"256\"/><Column id=\"vHour\" type=\"INT\" size=\"256\"/><Column id=\"vStart\" type=\"STRING\" size=\"256\"/><Column id=\"vEnd\" type=\"STRING\" size=\"256\"/><Column id=\"vEnrollDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("Edit00","15","71","165","50",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","15","142","992","320",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_vList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"vName\"/><Cell col=\"1\" text=\"vArea\"/><Cell col=\"2\" text=\"vHour\"/><Cell col=\"3\" text=\"vStart\"/><Cell col=\"4\" text=\"vEnd\"/><Cell col=\"5\" text=\"vEnrollDate\"/></Band><Band id=\"body\"><Cell text=\"bind:vName\"/><Cell col=\"1\" text=\"bind:vArea\"/><Cell col=\"2\" text=\"bind:vHour\"/><Cell col=\"3\" text=\"bind:vStart\"/><Cell col=\"4\" text=\"bind:vEnd\"/><Cell col=\"5\" text=\"bind:vEnrollDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","244","71","186","49",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","182","71","52","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_helplist.xfdl", function() {

        this.Button00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };
        this.loadIncludeScript("frm_helplist.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
