(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_moverequest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_move", this);
            obj._setContents("<ColumnInfo><Column id=\"tNo\" type=\"INT\" size=\"256\"/><Column id=\"tRequestDate\" type=\"STRING\" size=\"256\"/><Column id=\"tStatus\" type=\"STRING\" size=\"256\"/><Column id=\"tMsg\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"dCode\" type=\"STRING\" size=\"256\"/><Column id=\"dName\" type=\"STRING\" size=\"256\"/><Column id=\"dField\" type=\"STRING\" size=\"256\"/><Column id=\"officeName\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionFee\" type=\"INT\" size=\"256\"/><Column id=\"dCapacity\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_student", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"sRrn\" type=\"STRING\" size=\"256\"/><Column id=\"sPassword\" type=\"STRING\" size=\"256\"/><Column id=\"sAddress\" type=\"STRING\" size=\"256\"/><Column id=\"sEmail\" type=\"STRING\" size=\"256\"/><Column id=\"sGender\" type=\"STRING\" size=\"256\"/><Column id=\"sPhone\" type=\"STRING\" size=\"256\"/><Column id=\"sAddmission\" type=\"STRING\" size=\"256\"/><Column id=\"absenceYN\" type=\"STRING\" size=\"256\"/><Column id=\"transferYN\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_allDept", this);
            obj._setContents("<ColumnInfo><Column id=\"dCode\" type=\"STRING\" size=\"256\"/><Column id=\"dName\" type=\"STRING\" size=\"256\"/><Column id=\"dField\" type=\"STRING\" size=\"256\"/><Column id=\"officeName\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionFee\" type=\"INT\" size=\"256\"/><Column id=\"dCapacity\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_tran", this);
            obj._setContents("<ColumnInfo><Column id=\"tNo\" type=\"INT\" size=\"256\"/><Column id=\"tRequestDate\" type=\"STRING\" size=\"256\"/><Column id=\"tStatus\" type=\"STRING\" size=\"256\"/><Column id=\"tMsg\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/><Column id=\"tdCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","70","20","800","440",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_dept");
            obj._setContents("<Formats><Format id=\"default\"/></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","128","57","50","58",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("학번");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","100","192","145","58",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("현재 소속 학과");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","100","362","145","58",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("희망 소속 학과");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","531","57","91","54",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("성명");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","220","50","176","68",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.getSetter("onitemchanged").set("Common_onitemchanged");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","220","190","176","68",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.getSetter("onitemchanged").set("Common_onitemchanged");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","607","50","176","68",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","722","467","148","62",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("신청");
            obj.set_background("RGB(101,126,194)");
            obj.set_color("#ffffff");
            obj.set_font("bold 15px/normal \"Gulim\",\"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","220","363","176","65",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_allDept");
            obj.set_codecolumn("dName");
            obj.set_datacolumn("dName");
            obj.set_text("Combo00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00_00","value","ds_dept","dName");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_moverequest.xfdl", function() {
        var sName = nexacro.getEnvironmentVariable("ev_Val1");
        var sCode = nexacro.getEnvironmentVariable("ev_Val");
        this.Edit00_02.set_value(sName);
        this.Edit00.set_value(sCode);

        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_requestTransfer")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("신청 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert("신청 성공 :  " );
        	}
        }


        this.frm_moverequest_onload = function(obj,e)
        {
        	this.transaction(
                	"tr_select"// 1.ID
                	,"tttUrl::movedept/list.snu"// 2.URL
                	,"" // 3.InDs : F->S jsp(I,U,D)
                	,"ds_dept=out_dept" // 4.OutDs : S->F jsp(SELECT)
                	,"inVar1=" + sCode // 5.InVar : F->S(var)
                	,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
                	)
        };


        this.Combo00_onmouseenter = function(obj,e)
        {
        	this.transaction(
        			"tr_selectDept"
        			,"tttUrl::allDept/list.snu"
        			,""
        			,"ds_allDept=outDept"
        			,""
        			,"fn_callback_tran"
        			)
        };

        this.Button00_onclick = function(obj,e)
        {
        	//var aRow = this.ds_pdept.findRow("DEPT_NAME", eValue);
        	//var sColId = this.ds_pdept.getColumn(aRow, "DEPT_CD");
        	//var eValue = this.Edit00.value;

        	var dValue = this.Edit00_00.value; //국어국문학과
        	var dRow = this.ds_dept.findRow("dName", dValue); //dept데이터셋에 국어국문학과인 로우를
        	var dCode = this.ds_dept.getColumn(dRow, "dCode");
        	var tdValue = this.Combo00.value;
        	var tdRow = this.ds_allDept.findRow("dName", tdValue);
        	var tdCode = this.ds_allDept.getColumn(tdRow, "dCode");

        	this.ds_tran.addRow();
        	this.ds_tran.setColumn(0, "sCode", sCode);
        	this.ds_tran.setColumn(0, "dCode", dCode);
        	this.ds_tran.setColumn(0, "tdCode", tdCode);

        	this.transaction(
        			"tr_requestTransfer"
        			,"tttUrl::requestTran/list.snu"
        			,"in_tran=ds_tran:U"
        			,""
        			,""
        			,"fn_callback_tran"
        		)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_moverequest_onload,this);
            this.Edit00_00.addEventHandler("onchanged",this.Edit00_00_onchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Combo00.addEventHandler("onmouseenter",this.Combo00_onmouseenter,this);
        };
        this.loadIncludeScript("frm_moverequest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
