(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_returnschool");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rehabilitation", this);
            obj._setContents("<ColumnInfo><Column id=\"rNum\" type=\"INT\" size=\"256\"/><Column id=\"rReason\" type=\"STRING\" size=\"256\"/><Column id=\"rSemester\" type=\"INT\" size=\"256\"/><Column id=\"rYear\" type=\"INT\" size=\"256\"/><Column id=\"rStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rRequestDate\" type=\"STRING\" size=\"256\"/><Column id=\"rMsg\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_student", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"sRrn\" type=\"STRING\" size=\"256\"/><Column id=\"sPassword\" type=\"STRING\" size=\"256\"/><Column id=\"sAddress\" type=\"STRING\" size=\"256\"/><Column id=\"sEmail\" type=\"STRING\" size=\"256\"/><Column id=\"sGender\" type=\"STRING\" size=\"256\"/><Column id=\"sPhone\" type=\"STRING\" size=\"256\"/><Column id=\"sAddmission\" type=\"STRING\" size=\"256\"/><Column id=\"absenceYN\" type=\"STRING\" size=\"256\"/><Column id=\"transferYN\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","81","65","399","183",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_rehabilitation");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"88\"/><Column size=\"60\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"신청날짜\"/></Band><Band id=\"body\"><Cell text=\"bind:rNum\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:sCode\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:sCode\" displaytype=\"combotext\" combodataset=\"ds_student\" combodatacol=\"sName\" combocodecol=\"sCode\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:rRequestDate\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","500","68","410","579",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_border("1px solid black");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","14","6","183","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학생 정보");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","14","55","83","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("학번");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_00","14","120","83","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("이름");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_01","14","224","125","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("신청사항");
            obj.set_font("normal bold 15pt/normal \"Arial\"");
            obj.set_textAlign("left");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_02","14","300","83","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("복학년도");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_03","14","356","83","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("복학학기");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_04","14","412","83","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("복학사유");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","126","57","101","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","126","120","101","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","126","300","101","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","126","362","101","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","126","421","255","141",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_appRehab","501","655","123","39",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("승인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rejectRehab","791","655","123","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("반려");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00","value","ds_rehabilitation","sCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit02","value","ds_rehabilitation","rYear");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Edit03","value","ds_rehabilitation","rSemester");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.TextArea00","value","ds_rehabilitation","rReason");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_returnschool.xfdl", function() {
        //폼이 로드됐을 때 복학리스트, 학생리스트 가져오기
        this.frm_returnschool_onload = function(obj,e)
        {
        	this.transaction(
        	"tr_rsList"
        	,"SnuURL::returnschool/list.snu"
        	,""
        	,"ds_rehabilitation=out_reList ds_student=out_sList"
        	,""
        	,"fn_callback_rs"
        	)
        };


        this.fn_callback_rs = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_reList")
        	{

        	}
        	if(id=="tr_appRehab")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert(sErrorMsg);
        			return;
        		}
        		this.alert(sErrorMsg);
        	}
        }
        this.Grid00_oncellclick = function(obj,e)
        {
        	var nRow = this.ds_rehabilitation.rowposition;
        	var sCode = this.ds_rehabilitation.getColumn(nRow, "sCode");
        	var sName="";
        	var sRow = this.ds_student.getRowCount();
        	for(var i = 0; i<sRow; i++)
        	{
        		if(this.ds_student.getColumn(i, "sCode") == sCode)
        		{
        			this.Div00.form.Edit01.set_value(this.ds_student.getColumn(i, "sName"));
        		}
        	}
        };



        this.btn_appRehab_onclick = function(obj,e)
        {
        	var rtn = this.confirm("승인하시겠습니까?", "승인 창");
        	if(rtn == true)
        	{
        		var lRow = this.ds_rehabilitation.rowposition
        		var sCode = this.ds_rehabilitation.getColumn(lRow, "sCode");
        		this.transaction(
        		"tr_appRehab"
        		,"SnuURL::rehabilitation/approve.snu"
        		,""
        		,""
        		,"in_Var1="+sCode+""
        		,"fn_callback_rs"
        		)
        	}
        };
        //복학반려 -> 반려작성 팝업창을 띄운다.
        this.btn_rejectRehab_onclick = function(obj,e)
        {
        	var nRow = this.ds_rehabilitation.rowposition;
        	var objParam = {sCode : this.ds_rehabilitation.getColumn(nRow, "sCode")
        					,rMsg : this.ds_rehabilitation.getColumn(nRow, "rMsg")};
        	var nLeft = system.clientToScreenX(this,10);
        	var nTop =  system.clientToScreenY(this,10);
        	var objChild = new ChildFrame("popRehabReturnMsg", nLeft, nTop, 350, 350);
        	objChild.set_formurl("Popup::rehabReturnMsg.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("normal");
        	objChild.showModal(this.getOwnerFrame(), objParam, this, "fn_popRehabCallback");

        };

        this.fn_popRehabCallback = function(strPopId, strReturn)
        {

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_returnschool_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.btn_appRehab.addEventHandler("onclick",this.btn_appRehab_onclick,this);
            this.btn_rejectRehab.addEventHandler("onclick",this.btn_rejectRehab_onclick,this);
        };
        this.loadIncludeScript("frm_returnschool.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
