(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_lecture");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lecture", this);
            obj._setContents("<ColumnInfo><Column id=\"lCode\" type=\"STRING\" size=\"256\"/><Column id=\"lType\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"lObjective\" type=\"STRING\" size=\"256\"/><Column id=\"lContents\" type=\"STRING\" size=\"256\"/><Column id=\"textbook\" type=\"STRING\" size=\"256\"/><Column id=\"lDays\" type=\"STRING\" size=\"256\"/><Column id=\"credit\" type=\"STRING\" size=\"256\"/><Column id=\"lYear\" type=\"STRING\" size=\"256\"/><Column id=\"lSemester\" type=\"STRING\" size=\"256\"/><Column id=\"lCapacity\" type=\"STRING\" size=\"256\"/><Column id=\"lStatus\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grid_list","30","73","300","617",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_lecture");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"59\"/><Column size=\"56\"/><Column size=\"80\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"강의 코드\"/><Cell col=\"1\" text=\"과목 구분\"/><Cell col=\"2\" text=\"강의 명\"/><Cell col=\"3\" text=\"승인여부\"/></Band><Band id=\"body\"><Cell text=\"bind:lCode\"/><Cell col=\"1\" text=\"bind:lType\"/><Cell col=\"2\" text=\"bind:lName\"/><Cell col=\"3\" text=\"bind:lStatus\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("grid_detail","380","70","610","620",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_background("lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","43","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("0");
            obj.set_text("강의 코드");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_00","40","118","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("1");
            obj.set_text("과목 구분");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_01","399","50","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("2");
            obj.set_text("교재");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","268","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("3");
            obj.set_text("강의 목표");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_03","40","418","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("4");
            obj.set_text("강의 내용");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_04","40","193","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("5");
            obj.set_text("강의명");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Edit("edt_lType","153","123","198","35",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_background("white");
            this.grid_detail.addChild(obj.name, obj);

            obj = new MaskEdit("mskedt_lCode","152","50","199","37",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("7");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_background("white");
            obj.set_format("L###");
            obj.set_type("string");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","399","185","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("8");
            obj.set_text("정원");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_01_00_00","399","250","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("9");
            obj.set_text("승인여부");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Edit("edt_lName","152","198","198","35",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("10");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_background("white");
            this.grid_detail.addChild(obj.name, obj);

            obj = new TextArea("txtArea_lObjective","152","264","201","113",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("11");
            this.grid_detail.addChild(obj.name, obj);

            obj = new TextArea("txtArea_lContents","154","412","197","181",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("12");
            this.grid_detail.addChild(obj.name, obj);

            obj = new TextArea("txtArea_textbook","569","47","198","101",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("13");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Edit("edt_lCapacity","569","190","198","37",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("14");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_lStatus","570","254","200","33",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("15");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_enable("false");
            obj.set_direction("vertical");
            var grid_detail_form_rdo_lStatus_innerdataset = new nexacro.NormalDataset("grid_detail_form_rdo_lStatus_innerdataset", obj);
            grid_detail_form_rdo_lStatus_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">Y</Col><Col id=\"datacolumn\">승인</Col></Row><Row><Col id=\"codecolumn\">N</Col><Col id=\"datacolumn\">대기</Col></Row><Row><Col id=\"codecolumn\">R</Col><Col id=\"datacolumn\">반려</Col></Row></Rows>");
            obj.set_innerdataset(grid_detail_form_rdo_lStatus_innerdataset);
            this.grid_detail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,720,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","grid_detail.form.mskedt_lCode","value","ds_lecture","lCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","grid_detail.form.edt_lType","value","ds_lecture","lType");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","grid_detail.form.edt_lName","value","ds_lecture","lName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","grid_detail.form.rdo_lStatus","value","ds_lecture","lStatus");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","grid_detail.form.txtArea_lObjective","value","ds_lecture","lObjective");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","grid_detail.form.txtArea_lContents","value","ds_lecture","lContents");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","grid_detail.form.txtArea_textbook","value","ds_lecture","textbook");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","grid_detail.form.edt_lCapacity","value","ds_lecture","lCapacity");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_lecture.xfdl", function() {

        this.frm_lecture_onload = function(obj,e)
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

        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id == "lecturePlanListView")
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
            this.addEventHandler("onload",this.frm_lecture_onload,this);
            this.grid_detail.form.Static00_00.addEventHandler("onclick",this.grid_detail_Static00_00_onclick,this);
            this.grid_detail.form.Static00_01.addEventHandler("onclick",this.grid_detail_Static00_01_onclick,this);
            this.grid_detail.form.Static00_01_00.addEventHandler("onclick",this.grid_detail_Static00_01_onclick,this);
            this.grid_detail.form.Static00_01_00_00.addEventHandler("onclick",this.grid_detail_Static00_01_onclick,this);
        };
        this.loadIncludeScript("frm_lecture.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
