(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_proInfo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_prof", this);
            obj._setContents("<ColumnInfo><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"pName\" type=\"STRING\" size=\"256\"/><Column id=\"pPassword\" type=\"STRING\" size=\"256\"/><Column id=\"pRrn\" type=\"STRING\" size=\"256\"/><Column id=\"pAddress\" type=\"STRING\" size=\"256\"/><Column id=\"pEmail\" type=\"STRING\" size=\"256\"/><Column id=\"pGender\" type=\"STRING\" size=\"256\"/><Column id=\"pPhone\" type=\"STRING\" size=\"256\"/><Column id=\"pAddmission\" type=\"STRING\" size=\"256\"/><Column id=\"advisorYN\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("grid_detail","90","70","460","521",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_background("lightgray");
            obj.set_text("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","40","43","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("0");
            obj.set_text("교수 코드");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_00","40","118","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("1");
            obj.set_text("이름");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_01","40","418","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("2");
            obj.set_text("주소");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_02","40","268","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("3");
            obj.set_text("이메일");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_03","40","343","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("4");
            obj.set_text("연락처");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Static("Static00_04","40","193","97","45",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("5");
            obj.set_text("성별");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","210","123","198","35",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("6");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_background("white");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00","210","273","198","35",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("7");
            obj.set_color("black");
            obj.set_readonly("false");
            obj.set_background("white");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00","210","348","198","35",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("8");
            obj.set_readonly("false");
            obj.set_color("black");
            obj.set_background("white");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00_00_00_00","210","423","198","35",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("9");
            obj.set_readonly("false");
            obj.set_color("black");
            obj.set_background("white");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Radio("rdo_gender","212","201","198","40",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("10");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_enable("false");
            obj.set_color("black");
            var grid_detail_form_rdo_gender_innerdataset = new nexacro.NormalDataset("grid_detail_form_rdo_gender_innerdataset", obj);
            grid_detail_form_rdo_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">9</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(grid_detail_form_rdo_gender_innerdataset);
            this.grid_detail.addChild(obj.name, obj);

            obj = new MaskEdit("mskedt_pCode","209","50","199","37",null,null,null,null,null,null,this.grid_detail.form);
            obj.set_taborder("11");
            obj.set_readonly("true");
            obj.set_color("black");
            obj.set_background("white");
            obj.set_format("P###");
            obj.set_type("string");
            obj.set_enable("false");
            this.grid_detail.addChild(obj.name, obj);

            obj = new Button("btn_update","250","602","120","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("수정");
            obj.set_color("black");
            obj.set_background("skyblue");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","grid_detail.form.rdo_gender","value","ds_prof","pGender");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","grid_detail.form.mskedt_pCode","value","ds_prof","pCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","grid_detail.form.edt_name","value","ds_prof","pName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","grid_detail.form.edt_email","value","ds_prof","pEmail");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","grid_detail.form.edt_phone","value","ds_prof","pPhone");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","grid_detail.form.edt_address","value","ds_prof","pAddress");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","grid_detail.form.Edit00_00_00_00","value","ds_prof","pEmail");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","grid_detail.form.Edit00_00_00_00_00","value","ds_prof","pPhone");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","grid_detail.form.Edit00_00_00_00_00_00","value","ds_prof","pAddress");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item9","grid_detail.form.Edit00_00","value","ds_prof","pName");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_proInfo.xfdl", function() {

        this.frm_proInfo_onload = function(obj,e)
        {
        	this.transaction(
        		"selectProf"
        		,"SnuUrl::professor/profInfo.snu"
        		,""
        		,"ds_prof=out_prof"
        		,"in_var1=" + nexacro.getEnvironmentVariable("ev_Val")
        		,"fn_callback_tran"
        	);
        };


        this.btn_update_onclick = function(obj,e)
        {
        	this.transaction(
        		"updateProf"
        		,"SnuUrl::professor/profModify.snu"
        		,"in_prof=ds_prof:U"
        		,""
        		,""
        		,"fn_callback_tran"
        	);
        };

        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id == "selectProf")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("조회 실패 : " + sErrorMsg);
        			return;
        		}
        	}
        	if(id == "updateProf")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("수정 실패 : " + sErrorMsg);
        			return;
        		}
        		else
        		{
        			this.alert("수정 성공!");
        			return;
        		}
        	}
        };
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_proInfo_onload,this);
            this.grid_detail.form.Static00_01.addEventHandler("onclick",this.grid_detail_Static00_01_onclick,this);
            this.grid_detail.form.rdo_gender.addEventHandler("onitemchanged",this.grid_detail_rdo_gender_onitemchanged,this);
            this.btn_update.addEventHandler("onclick",this.btn_update_onclick,this);
        };
        this.loadIncludeScript("frm_proInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
