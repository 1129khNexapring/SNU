(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_lectureScheduleWriteForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lecture", this);
            obj._setContents("<ColumnInfo><Column id=\"lCode\" type=\"STRING\" size=\"256\"/><Column id=\"lType\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"lObjective\" type=\"STRING\" size=\"256\"/><Column id=\"lContents\" type=\"STRING\" size=\"256\"/><Column id=\"textbook\" type=\"STRING\" size=\"256\"/><Column id=\"lDays\" type=\"STRING\" size=\"256\"/><Column id=\"credit\" type=\"STRING\" size=\"256\"/><Column id=\"lYear\" type=\"STRING\" size=\"256\"/><Column id=\"lSemester\" type=\"STRING\" size=\"256\"/><Column id=\"lCapacity\" type=\"STRING\" size=\"256\"/><Column id=\"lStatus\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","52","32","975","588",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("lightgray");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","139","63","182","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","43","67","97","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("강의명");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","43","160","97","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("요일 선택");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00","140","240","182","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","42","244","97","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("시작 교시");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00_00","43","320","97","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("끝 교시");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00_00_00","140","313","182","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Combo00","value","ds_lecture","lName");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_lectureScheduleWriteForm.xfdl", function() {

        this.frm_lectureScheduleWriteForm_onload = function(obj,e)
        {
        	this.transaction(
        		"lecturePlanListView"
        		,"SnuUrl::lecture/planListBypCode.snu"
        		,""
        		,"ds_lecture=out_lecture"
        		,"in_var1=" + nexacro.getEnvironmentVariable("ev_Val")
        		,"fn_callback_tran"
        	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_lectureScheduleWriteForm_onload,this);
        };
        this.loadIncludeScript("frm_lectureScheduleWriteForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
