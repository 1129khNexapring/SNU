(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_transfermajor");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_transferList", this);
            obj._setContents("<ColumnInfo><Column id=\"tNo\" type=\"STRING\" size=\"256\"/><Column id=\"tRequestDate\" type=\"STRING\" size=\"256\"/><Column id=\"tStatus\" type=\"STRING\" size=\"256\"/><Column id=\"tMsg\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/><Column id=\"tdCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_student", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"sRrn\" type=\"STRING\" size=\"256\"/><Column id=\"sPassword\" type=\"STRING\" size=\"256\"/><Column id=\"sAddress\" type=\"STRING\" size=\"256\"/><Column id=\"sEmail\" type=\"STRING\" size=\"256\"/><Column id=\"sGender\" type=\"STRING\" size=\"256\"/><Column id=\"sPhone\" type=\"STRING\" size=\"256\"/><Column id=\"sAddmission\" type=\"STRING\" size=\"256\"/><Column id=\"absenceYN\" type=\"STRING\" size=\"256\"/><Column id=\"transferYN\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"dCode\" type=\"STRING\" size=\"256\"/><Column id=\"dName\" type=\"STRING\" size=\"256\"/><Column id=\"dField\" type=\"STRING\" size=\"256\"/><Column id=\"officeName\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionFee\" type=\"STRING\" size=\"256\"/><Column id=\"dCapacity\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","500","68","410","422",null,null,null,null,null,null,this);
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
            obj.set_text("전과대학");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_03","14","356","83","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("희망학과");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","126","57","101","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","126","120","101","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","126","300","101","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","126","362","101","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","81","65","399","183",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_transferList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"54\"/><Column size=\"64\"/><Column size=\"76\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"신청일\"/></Band><Band id=\"body\"><Cell text=\"bind:tNo\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:sCode\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:sCode\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_student\" combodatacol=\"sName\" combocodecol=\"sCode\"/><Cell col=\"3\" text=\"bind:tRequestDate\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_approveTr","501","495","123","39",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("승인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rejectTr","788","495","123","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("반려");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00","value","ds_transferList","sCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit03","value","ds_transferList","");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_transfermajor.xfdl", function() {
        //폼이 로드됐을 떄 전과리스트, 학생 리스트가져오기
        this.frm_transfermajor_onload = function(obj,e)
        {
        	this.transaction(
        	"tr_trList"
        	,"SnuURL::transfer/list.snu"
        	,""
        	,"ds_transferList=out_tList ds_student=out_sList ds_dept=out_dList"
        	,""
        	,"fn_callback_tr"
        	)
        };

        this.fn_callback_tr = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_trList")
        	{

        	}
        	if(id=="tr_appTransfer")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert(sErrorMsg);
        		}
        		this.alert(sErrorMsg);
        	}
        }

        this.Grid00_oncellclick = function(obj,e)
        {
        		var nRow  = this.ds_transferList.rowposition;
        		var sCode = this.ds_transferList.getColumn(nRow, "sCode");
        		var dCode = this.ds_transferList.getColumn(nRow, "dCode");
        		var tdCode = this.ds_transferList.getColumn(nRow, "tdCode");
        		var sName = "";
        		var sRow  = this.ds_student.getRowCount();
        		for(var i=0; i<sRow; i++)
        		{
        			if(this.ds_student.getColumn(i, "sCode")== sCode)
        			{
        				this.Div00.form.Edit01.set_value(this.ds_student.getColumn(i, "sName"));
        			}
        		}
        		var dRow = this.ds_dept.getRowCount();
        		for(var i=0; i<dRow; i++)
        		{
        			if(this.ds_dept.getColumn(i, "dCode")==dCode)
        			{
        				this.Div00.form.Edit02.set_value(this.ds_dept.getColumn(i, "dField"));
        			}
        			if(this.ds_dept.getColumn(i, "dCode")==tdCode)
        			{
        				this.Div00.form.Edit03.set_value(this.ds_dept.getColumn(i, "dName"));
        			}
        		}
        };

        this.btn_approveTr_onclick = function(obj,e)
        {
        	var rtn = this.confirm("승인하시겠습니까?", "승인 창");
        	if(rtn == true)
        	{
        		var lRow = this.ds_transferList.rowposition;
        		var sCode = this.ds_transferList.getColumn(lRow, "sCode");
        		this.transaction(
        		"tr_appTransfer"
        		,"SnuURL::transfer/approve.snu"
        		,""
        		,""
        		,"in_Var1="+sCode+""
        		,"fn_callback_tr"
        		)
        	}
        };
        //전과 반려 -> 반려 작성 팝업창을 띄운다
        this.btn_rejectTr_onclick = function(obj,e)
        {
        	var nRow = this.ds_transferList.rowposition;
        	var objParam = {sCode : this.ds_transferList.getColumn(nRow, "sCode")
        					,tMsg : this.ds_transferList.getColumn(nRow, "tMsg")};
        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop  = system.clientToScreenY(this, 10);
        	var objChild = new ChildFrame("popTransferReturnMsg", nLeft, nTop, 350, 350);
        	objChild.set_formurl("Popup::TransferReturnMsg.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("normal");
        	objChild.showModal(this.getOwnerFrame(), objParam, this, "fn_popTransferCallback");
        };

        this.fn_popTransferCallback = function(strPopId, strReturn)
        {

        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_transfermajor_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.btn_approveTr.addEventHandler("onclick",this.btn_approveTr_onclick,this);
            this.btn_rejectTr.addEventHandler("onclick",this.btn_rejectTr_onclick,this);
        };
        this.loadIncludeScript("frm_transfermajor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
