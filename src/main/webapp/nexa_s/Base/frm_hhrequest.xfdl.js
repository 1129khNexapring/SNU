(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_hhrequest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_loa", this);
            obj._setContents("<ColumnInfo><Column id=\"lNum\" type=\"INT\" size=\"256\"/><Column id=\"lReason\" type=\"STRING\" size=\"256\"/><Column id=\"lRequestDate\" type=\"STRING\" size=\"256\"/><Column id=\"lStatus\" type=\"STRING\" size=\"256\"/><Column id=\"lMsg\" type=\"STRING\" size=\"256\"/><Column id=\"lSemester\" type=\"INT\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"lReturnMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","130","11","815","444",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","146","38","94","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("학번");
            obj.set_font("bold 15pt \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","232","36","158","47",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","539","38","80","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_font("bold 15pt \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","130","147","126","53",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("신청일");
            obj.set_font("bold 15pt \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static03","480","145","199","57",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("휴학학기");
            obj.set_font("bold 15pt \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","144","268","99","68",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("사유");
            obj.set_font("bold 15pt \"Arial\"");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","633","35","160","50",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","232","145","160","55",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","232","290","278","152",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Static("Static06","650","139","70","69",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("2022년");
            obj.set_font("bold 15pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","731","155","35","39",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            this.addChild(obj.name, obj);

            obj = new Static("Static07","765","154","65","36",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("학기");
            obj.set_font("bold 15pt \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_request","805","458","140","64",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("신청");
            obj.set_font("bold 12pt \"Arial\"");
            obj.set_background("RGB(101,126,194)");
            obj.set_color("#fcfafe");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_loa","sCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","TextArea00","value","ds_loa","lReason");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit03","value","ds_loa","lSemester");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit02","value","ds_loa","lRequestDate");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_hhrequest.xfdl", function() {
        var sName = nexacro.getEnvironmentVariable("ev_Val1");
        var sCode = nexacro.getEnvironmentVariable("ev_Val");
        this.Edit01.set_value(sName);



        this.Button00_onclick = function(obj,e)
        {
        	this.transaction(
                	"tr_register"
                	,"SnuURL::loa/request.snu"
                	,"in_loa=ds_loa:U"
                	,""
                	,"inVar1="
                	,"fn_callback_tran"
                )
        };



        this.frm_hhrequest_onload = function(obj,e)
        {
        	var d = new Date();
        	var today = (d.getYear() + "" + ((d.getMonth()+1)+"").padLeft(2,'0')+""+(""+d.getDate()).padLeft(2,'0'));

        	this.ds_loa.addRow();
        	this.ds_loa.setColumn(this.ds_loa.rowposition, "lRequestDate", today);
        	this.ds_loa.setColumn(this.ds_loa.rowposition, "sCode", sCode);

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_hhrequest_onload,this);
            this.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.btn_request.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("frm_hhrequest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
