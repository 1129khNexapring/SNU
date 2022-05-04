(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_grade");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_grade", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"학생이름\" type=\"STRING\" size=\"256\"/><Column id=\"과목명\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset01", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_grade","60","40","970","370",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_grade");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"34\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell/><Cell col=\"1\" text=\"학생이름\"/><Cell col=\"2\" text=\"과목명\"/><Cell col=\"3\" text=\"과목명\"/><Cell col=\"4\" text=\"과목명\"/></Band><Band id=\"body\"><Cell text=\"bind:Column0\" displaytype=\"checkboxcontrol\" edittype=\"checkbox\"/><Cell col=\"1\" text=\"bind:학생이름\"/><Cell col=\"2\" text=\"bind:과목명\"/><Cell col=\"3\" text=\"bind:과목명\"/><Cell col=\"4\" text=\"bind:과목명\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_save","890","4","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("저장하기");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_add","964","4","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("추가하기");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
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
        this.registerScript("frm_grade.xfdl", function() {

        this.btn_add_onclick = function(obj,e)
        {
        	this.ds_grade.addRow();
        };

        this.frm_grade_onload = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_grade_onload,this);
            this.btn_add.addEventHandler("onclick",this.btn_add_onclick,this);
        };
        this.loadIncludeScript("frm_grade.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
