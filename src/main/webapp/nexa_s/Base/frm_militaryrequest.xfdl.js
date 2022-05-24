(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_militaryrequest");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"dCode\" type=\"STRING\" size=\"256\"/><Column id=\"dName\" type=\"STRING\" size=\"256\"/><Column id=\"dField\" type=\"STRING\" size=\"256\"/><Column id=\"officeName\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionFee\" type=\"INT\" size=\"256\"/><Column id=\"dCapacity\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_student", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"sRrn\" type=\"STRING\" size=\"256\"/><Column id=\"sPassword\" type=\"STRING\" size=\"256\"/><Column id=\"sAddress\" type=\"STRING\" size=\"256\"/><Column id=\"sEmail\" type=\"STRING\" size=\"256\"/><Column id=\"sGender\" type=\"STRING\" size=\"256\"/><Column id=\"sPhone\" type=\"STRING\" size=\"256\"/><Column id=\"sAddmission\" type=\"STRING\" size=\"256\"/><Column id=\"absenceYN\" type=\"STRING\" size=\"256\"/><Column id=\"transferYN\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_mil", this);
            obj._setContents("<ColumnInfo><Column id=\"rfNum\" type=\"STRING\" size=\"256\"/><Column id=\"rfRequestDate\" type=\"STRING\" size=\"256\"/><Column id=\"musterDate\" type=\"STRING\" size=\"256\"/><Column id=\"rfStatus\" type=\"STRING\" size=\"256\"/><Column id=\"rfMsg\" type=\"STRING\" size=\"256\"/><Column id=\"military\" type=\"STRING\" size=\"256\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_level", this);
            obj._setContents("<ColumnInfo><Column id=\"level\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"level\">이병</Col></Row><Row><Col id=\"level\">일병</Col></Row><Row><Col id=\"level\">상병</Col></Row><Row><Col id=\"level\">병장</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_type", this);
            obj._setContents("<ColumnInfo><Column id=\"type\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"type\">육군</Col></Row><Row><Col id=\"type\">해군</Col></Row><Row><Col id=\"type\">공군</Col></Row><Row><Col id=\"type\">공익</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","55","33","765","427",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("1px solid");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","19","43","76","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학번");
            obj.set_font("bold 15px/normal \"Gulim\"\\");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","19","176","76","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("소속");
            obj.set_font("bold 15px/normal \"Gulim\"\\");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","19","301","76","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("집합일시");
            obj.set_font("bold 15px/normal \"Gulim\"\\");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","394","43","76","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("성명");
            obj.set_font("bold 15px/normal \"Gulim\"\\");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03","394","176","76","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("계급");
            obj.set_font("bold 15px/normal \"Gulim\"\\");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_04","394","301","76","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("구분");
            obj.set_font("bold 15px/normal \"Gulim\"\\");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","90","42","176","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","90","176","176","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","93","317","150","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","466","177","175","51",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_innerdataset("ds_level");
            obj.set_codecolumn("level");
            obj.set_datacolumn("level");
            obj.set_text("계급");
            obj.set_value("");
            obj.set_index("-1");
            this.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00_00","466","301","175","51",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_innerdataset("ds_type");
            obj.set_codecolumn("type");
            obj.set_datacolumn("type");
            obj.set_text("Combo00");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","466","44","176","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","672","469","148","62",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("신청");
            obj.set_background("RGB(101,126,194)");
            obj.set_color("#ffffff");
            obj.set_font("bold 15px/normal \"Gulim\",\"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00_00","value","ds_dept","dName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Combo00","value","ds_level","level");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Combo00_00","value","ds_type","type");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_militaryrequest.xfdl", function() {
        var sName = nexacro.getEnvironmentVariable("ev_Val1");
        var sCode = nexacro.getEnvironmentVariable("ev_Val");
        this.Div00.form.Edit00.set_value(sCode);
        this.Div00.form.Edit01.set_value(sName);
        this.frm_militaryrequest_onload = function(obj,e)
        {
        	this.transaction(
                	"tr_select"// 1.ID
                	,"SnuURL::military/list.snu"// 2.URL
                	,"" // 3.InDs : F->S jsp(I,U,D)
                	,"ds_dept=out_dept" // 4.OutDs : S->F jsp(SELECT)
                	,"inVar1=" + sCode // 5.InVar : F->S(var)
                	,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
                	)
        };

        this.Button00_onclick = function(obj,e)
        {

        	var mDate = this.Div00.form.Calendar00.value;
        	var military = this.Div00.form.Combo00_00.value;
        	var rank = this.Div00.form.Combo00.value;

        	this.ds_mil.addRow();
        	this.ds_mil.setColumn(0, "sCode", sCode);
        	this.ds_mil.setColumn(0, "musterDate", mDate);
        	this.ds_mil.setColumn(0, "military", military);
        	this.ds_mil.setColumn(0, "rank", rank);

        	this.transaction(
        			"tr_requestMil"
        			,"SnuURL::requestMil/list.snu"
        			,"in_mil=ds_mil:U"
        			,""
        			,""
        			,"fn_callback_tran"
        		)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_militaryrequest_onload,this);
            this.Div00.form.Combo00.addEventHandler("onitemchanged",this.Div00_Combo00_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("frm_militaryrequest.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
