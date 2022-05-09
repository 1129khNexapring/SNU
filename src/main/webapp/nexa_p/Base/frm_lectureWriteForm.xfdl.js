(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_lectureWriteForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lecture", this);
            obj._setContents("<ColumnInfo><Column id=\"L_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"L_TYPE\" type=\"STRING\" size=\"256\"/><Column id=\"L_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"L_OBJECTIVE\" type=\"STRING\" size=\"256\"/><Column id=\"L_CONTENTS\" type=\"STRING\" size=\"256\"/><Column id=\"TEXTBOOK\" type=\"STRING\" size=\"256\"/><Column id=\"L_DAYS\" type=\"INT\" size=\"256\"/><Column id=\"CREDIT\" type=\"INT\" size=\"256\"/><Column id=\"L_YEAR\" type=\"INT\" size=\"256\"/><Column id=\"L_SEMESTER\" type=\"INT\" size=\"256\"/><Column id=\"L_CAPACITY\" type=\"INT\" size=\"256\"/><Column id=\"L_STATUS\" type=\"STRING\" size=\"256\"/><Column id=\"P_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"D_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("grid_detail","90","30","910","561",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","80","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("0");
            obj.set_text("강의명");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_00","40","155","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("1");
            obj.set_text("강의 목표");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","362","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("2");
            obj.set_text("교재");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_03","40","472","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("3");
            obj.set_text("희망 정원");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_04","473","170","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("4");
            obj.set_text("강의 내용");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Edit("edt_lName","210","90","198","35",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("5");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_background("white");
            this.grid_detail.addChild(obj.name, obj);

            obj = new TextArea("txtArea_lObjective","210","157","200","160",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("6");
            this.grid_detail.addChild(obj.name, obj);

            obj = new TextArea("txtArea_lContents","570","174","273","286",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("7");
            this.grid_detail.addChild(obj.name, obj);

            obj = new TextArea("txtArea_textbook","208","357","200","96",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("8");
            this.grid_detail.addChild(obj.name, obj);

            obj = new MaskEdit("mskEdt_lCapacity","210","478","99","36",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("9");
            obj.set_format("#,###");
            obj.set_type("number");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static01","326","477","59","40",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("10");
            obj.set_text("명");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_01","40","23","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("11");
            obj.set_text("강의코드");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new MaskEdit("mskEdt_lCode","209","34","199","36",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("12");
            obj.set_format("L###");
            obj.set_type("string");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_04_00","470","30","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("13");
            obj.set_text("강의 년도");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_04_01","470","90","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("14");
            obj.set_text("학기");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Combo("Combo00","573","34","267","43",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("15");
            obj.set_text("Combo00");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Button("btn_register","750","507","120","38",null,null,null,null,null,null,this);
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
            obj = new BindItem("item0","grid_detail.form.edt_lName","value","ds_lecture","L_NAME");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","grid_detail.form.txtArea_lObjective","value","ds_lecture","L_OBJECTIVE");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","grid_detail.form.txtArea_textbook","value","ds_lecture","TEXTBOOK");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","grid_detail.form.mskEdt_lCode","value","ds_lecture","L_CODE");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_lectureWriteForm.xfdl", function() {

        this.btn_register_onclick = function(obj,e)
        {
        	this.transaction(
        		"lecture_register"
        		,"SnuUrl::lecture/register.snu"
        		,"in_lecture=ds_lecture:U"
        		,""
        		,"in_var=" + nexacro.getEnvironmentVariable("ev_Val")
        		,"fn_callback_tran"
        	);
        };


        this.frm_lectureWriteForm_onload = function(obj,e)
        {
        	this.ds_lecture.addRow();
        };


        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id == "lecture_register")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("조회 실패 : " + sErrorMsg);
        			return;
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_lectureWriteForm_onload,this);
            this.btn_register.addEventHandler("onclick",this.btn_register_onclick,this);
        };
        this.loadIncludeScript("frm_lectureWriteForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
