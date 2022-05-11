(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_reservist");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_force", this);
            obj._setContents("<ColumnInfo><Column id=\"rfNum\" type=\"INT\" size=\"256\"/><Column id=\"rfRequestDate\" type=\"STRING\" size=\"256\"/><Column id=\"muterDate\" type=\"STRING\" size=\"256\"/><Column id=\"rfStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rfMsg\" type=\"STRING\" size=\"256\"/><Column id=\"military\" type=\"STRING\" size=\"256\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_student", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"sRrn\" type=\"STRING\" size=\"256\"/><Column id=\"sPassword\" type=\"STRING\" size=\"256\"/><Column id=\"sAddress\" type=\"STRING\" size=\"256\"/><Column id=\"sEmail\" type=\"STRING\" size=\"256\"/><Column id=\"sGender\" type=\"STRING\" size=\"256\"/><Column id=\"sPhone\" type=\"STRING\" size=\"256\"/><Column id=\"sAddmission\" type=\"STRING\" size=\"256\"/><Column id=\"absenceYN\" type=\"STRING\" size=\"256\"/><Column id=\"transferYN\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_map", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","81","65","399","183",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_force");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"65\"/><Column size=\"59\"/><Column size=\"55\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"신청번호\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"신청일\"/></Band><Band id=\"body\"><Cell text=\"bind:rfNum\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:sCode\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:sCode\" displaytype=\"combotext\" combodataset=\"ds_student\" combodatacol=\"sName\" combocodecol=\"sCode\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:rfRequestDate\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","500","68","410","362",null,null,null,null,null,null,this);
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
            obj.set_text("희망날짜");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","126","57","101","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","126","120","101","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","126","300","101","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_approveRf","818","442","91","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("승인");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00","value","ds_force","sCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit02","value","ds_force","muterDate");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_reservist.xfdl", function() {
        //폼이 로드됐을 떄 예비군 신청목록과 맵핑시킬 학생 리스트를 가져와야함
        this.frm_reservist_onload = function(obj,e)
        {
        	this.transaction(
        	"tr_rfList"
        	,"SnuURL::reservist/list.snu"
        	,""
        	,"ds_force=out_rfList ds_student=out_sList"
        	,""
        	,"fn_callback_rf"
        	)
        };

        this.fn_callback_rf = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_rfList")
        	{

        	}
        	if(id=="tr_appRf")
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
        	var nRow = this.ds_force.rowposition
        	var sCode = this.ds_force.getColumn(nRow, "sCode");
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

        this.btn_approveRf_onclick = function(obj,e)
        {
        	var rtn = this.confirm("승인하시겠습니까?","승인 창");
        	if(rtn == true)
        	{
        		var nRow = this.ds_force.rowposition
        		var sCode = this.ds_force.getColumn(nRow, "sCode");
        		this.transaction(
        		"tr_appRf"
        		,"SnuURL::reserveforce/approve.snu"
        		,""
        		,""
        		,"in_Var1="+sCode+""
        		,"fn_callback_rf"
        		)
        	}


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_reservist_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.btn_approveRf.addEventHandler("onclick",this.btn_approveRf_onclick,this);
        };
        this.loadIncludeScript("frm_reservist.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
