(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_bhrequest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_rehab", this);
            obj._setContents("<ColumnInfo><Column id=\"rNum\" type=\"INT\" size=\"256\"/><Column id=\"rReason\" type=\"STRING\" size=\"256\"/><Column id=\"rSemester\" type=\"INT\" size=\"256\"/><Column id=\"rYear\" type=\"INT\" size=\"256\"/><Column id=\"rStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rRequestDate\" type=\"STRING\" size=\"256\"/><Column id=\"rMsg\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","80","13","830","417",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj._setContents("");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","96","31","120","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("학번");
            obj.set_font("bold 15px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","368","164","120","45",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("복학학기");
            obj.set_font("bold 15px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_01","96","295","120","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("사유");
            obj.set_font("bold 15px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","92","165","120","45",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("신청일");
            obj.set_font("bold 15px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_03","380","31","120","45",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("성명");
            obj.set_font("bold 15px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","167","27","151","53",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01","462","27","164","54",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit02","167","162","151","55",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit03","463","160","77","54",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit04","167","293","203","127",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","541","160","54","54",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("년");
            obj.set_font("bold 15px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit05","569","159","49","55",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            this.addChild(obj.name, obj);

            obj = new Static("Static02","620","156","120","60",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("학기");
            obj.set_font("bold 15px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","793","436","118","59",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("신청");
            obj.set_background("RGB(101,126,194)");
            obj.set_color("#ffffff");
            obj.set_font("bold 12px/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_rehab","sCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Edit03","value","ds_rehab","rYear");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Edit05","value","ds_rehab","rSemester");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Edit04","value","ds_rehab","rReason");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Edit02","value","ds_rehab","rRequestDate");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_bhrequest.xfdl", function() {
        var sName = nexacro.getEnvironmentVariable("ev_Val1");
        var sCode = nexacro.getEnvironmentVariable("ev_Val");
        this.Edit01.set_value(sName);

        this.Button00_onclick = function(obj,e)
        {
        	this.transaction(
                	"tr_register"
                	,"SnuURL::rehab/request.snu"
                	,"in_rehab=ds_rehab:U"
                	,""
                	,"inVar1="
                	,"fn_callback_tran"
                )
        };


        this.frm_bhrequest_onload = function(obj,e)
        {
        	var d = new Date();
        	var today = (d.getYear() + "" + ((d.getMonth()+1)+"").padLeft(2,'0')+""+(""+d.getDate()).padLeft(2,'0'));

        	this.ds_rehab.addRow();
        	this.ds_rehab.setColumn(this.ds_rehab.rowposition, "rRequestDate", today);
        	this.ds_rehab.setColumn(this.ds_rehab.rowposition, "sCode", sCode);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_bhrequest_onload,this);
            this.Static00_02.addEventHandler("onclick",this.Static00_02_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("frm_bhrequest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
