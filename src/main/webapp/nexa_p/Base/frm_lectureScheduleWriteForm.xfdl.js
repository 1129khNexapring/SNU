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
            obj = new Div("Div00","52","32","458","458",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","139","63","182","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_innerdataset("ds_lecture");
            obj.set_datacolumn("lName");
            obj.set_codecolumn("lCode");
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
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Div00_form_Combo00_00_00_innerdataset = new nexacro.NormalDataset("Div00_form_Combo00_00_00_innerdataset", obj);
            Div00_form_Combo00_00_00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">1</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">2</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">3</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">4</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">5</Col></Row><Row><Col id=\"codecolumn\">6</Col><Col id=\"datacolumn\">6</Col></Row><Row><Col id=\"codecolumn\">7</Col><Col id=\"datacolumn\">7</Col></Row><Row><Col id=\"codecolumn\">8</Col><Col id=\"datacolumn\">8</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">9</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Combo00_00_00_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","42","244","97","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("교시");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","137","162","300","51",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_innerdataset", obj);
            Div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">월</Col><Col id=\"datacolumn\">월</Col></Row><Row><Col id=\"codecolumn\">화</Col><Col id=\"datacolumn\">화</Col></Row><Row><Col id=\"codecolumn\">수</Col><Col id=\"datacolumn\">수</Col></Row><Row><Col id=\"codecolumn\">목</Col><Col id=\"datacolumn\">목</Col></Row><Row><Col id=\"codecolumn\">금</Col><Col id=\"datacolumn\">금</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Radio00_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_register","210","390","120","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("등록");
            obj.set_color("black");
            obj.set_background("skyblue");
            this.addChild(obj.name, obj);
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
            this.Div00.form.Static00_00_00_00.addEventHandler("onclick",this.Div00_Static00_00_00_00_onclick,this);
            this.btn_register.addEventHandler("onclick",this.btn_register_onclick,this);
        };
        this.loadIncludeScript("frm_lectureScheduleWriteForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
