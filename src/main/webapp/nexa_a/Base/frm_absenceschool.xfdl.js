(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_absenceschool");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_loalist", this);
            obj._setContents("<ColumnInfo><Column id=\"lNum\" type=\"STRING\" size=\"256\"/><Column id=\"lReason\" type=\"STRING\" size=\"256\"/><Column id=\"lRequestDate\" type=\"STRING\" size=\"256\"/><Column id=\"lStatus\" type=\"STRING\" size=\"256\"/><Column id=\"lMsg\" type=\"STRING\" size=\"256\"/><Column id=\"lSemester\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"lReturnMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_student", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"sRrn\" type=\"STRING\" size=\"256\"/><Column id=\"sPassword\" type=\"STRING\" size=\"256\"/><Column id=\"sAddress\" type=\"STRING\" size=\"256\"/><Column id=\"sEmail\" type=\"STRING\" size=\"256\"/><Column id=\"sGender\" type=\"STRING\" size=\"256\"/><Column id=\"sPhone\" type=\"STRING\" size=\"256\"/><Column id=\"sAddmission\" type=\"STRING\" size=\"256\"/><Column id=\"absenceYN\" type=\"STRING\" size=\"256\"/><Column id=\"transferYN\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","81","65","399","183",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_loalist");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"72\"/><Column size=\"67\"/><Column size=\"48\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"신청일\"/></Band><Band id=\"body\"><Cell text=\"bind:lNum\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:sCode\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:sCode\" displaytype=\"combotext\" combodataset=\"ds_student\" combodatacol=\"sName\" combocodecol=\"sCode\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:lRequestDate\" textAlign=\"center\"/></Band></Format></Formats>");
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
            obj.set_text("휴학년도");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_03","14","356","83","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("휴학학기");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01_04","14","412","83","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("휴학사유");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","112","53","146","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","106","298","172","37",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","106","364","183","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","106","426","267","128",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","114","123","150","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_appLoa","501","655","123","39",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("승인");
            this.addChild(obj.name, obj);

            obj = new Button("btn_rejectLoa","791","655","123","39",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("반려");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00","value","ds_loalist","sCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Edit02","value","ds_loalist","lRequestDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Edit03","value","ds_loalist","lSemester");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.TextArea00","value","ds_loalist","lReason");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_absenceschool.xfdl", function() {
        //폼이 로드됐을 때. 휴학 신청한 학생리스트를 받아와야함

        this.frm_absenceschool_onload = function(obj,e)
        {
        	this.transaction(
        	"tr_lsList"
        	,"SnuURL::loaStudent/list.snu"
        	,""
        	,"ds_loalist=out_list ds_student=out_sList"
        	,""
        	,"fn_callback_loa"
        	)
        };

        this.fn_callback_loa = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_lsList")
        	{

        	}
        	if(id=="tr_appLoa")
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
        	var nRow = this.ds_loalist.rowposition;
        	var sCode = this.ds_loalist.getColumn(nRow, "sCode");
        	var sName="";
        	var sRow = this.ds_student.getRowCount();
        	for(var i =0; i< sRow; i++)
        	{
        		if(this.ds_student.getColumn(i, "sCode") == sCode)
        		{
        			this.Div00.form.Edit01.set_value(this.ds_student.getColumn(i, "sName"));

        		}
        	}
        };
        // 휴학승인
        this.btn_appLoa_onclick = function(obj,e)
        {
        	var rtn= this.confirm("승인하시겠습니까?", "승인 창");
        	if(rtn == true)
        	{
        		var lRow = this.ds_loalist.rowposition;
        		var sCode = this.ds_loalist.getColumn(lRow, "sCode");
        		this.transaction(
        		"tr_appLoa"
        		,"SnuURL::loa/approve.snu"
        		,""
        		,""
        		,"in_Var1="+sCode+""
        		,"fn_callback_loa"


        		)
        	}
        };
        // 휴학반려 -> 반려작성 팝업창을 띄운다.
        this.btn_rejectLoa_onclick = function(obj,e)
        {
        	var nRow = this.ds_loalist.rowposition;
        	var objParam = {sCode : this.ds_loalist.getColumn(nRow, "sCode")
        					,lReturnMsg : this.ds_loalist.getColumn(nRow, "lReturnMsg")};
        	var nLeft = system.clientToScreenX(this,10);
        	var nTop  = system.clientToScreenY(this,10);
        	var objChild = new ChildFrame("poploaReturnMsg", nLeft, nTop, 350, 350);
        	objChild.set_formurl("Popup::loaReturnMsg.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("normal");
        	objChild.showModal(this.getOwnerFrame(), objParam, this, "fn_poploaCallback");
        };

        this.fn_poploaCallback = function(strPopId, strReturn)
        {
        	if(strPopId == "poploaReturnMsg")
        	{

        	}
        	if(strReturn == undefined)
        	{
        		return;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_absenceschool_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.btn_appLoa.addEventHandler("onclick",this.btn_appLoa_onclick,this);
            this.btn_rejectLoa.addEventHandler("onclick",this.btn_rejectLoa_onclick,this);
        };
        this.loadIncludeScript("frm_absenceschool.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
