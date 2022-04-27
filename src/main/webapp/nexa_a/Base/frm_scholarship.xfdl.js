(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_scholarship");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_scholarship", this);
            obj._setContents("<ColumnInfo><Column id=\"scCode\" type=\"STRING\" size=\"256\"/><Column id=\"scName\" type=\"STRING\" size=\"256\"/><Column id=\"amount\" type=\"INT\" size=\"256\"/><Column id=\"scCondition\" type=\"STRING\" size=\"256\"/><Column id=\"scDate\" type=\"STRING\" size=\"256\"/><Column id=\"scStatus\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/><Column id=\"scEnrollDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">D001</Col><Col id=\"DEPT_NAME\">국어국문학과</Col></Row><Row><Col id=\"DEPT_CD\">D002</Col><Col id=\"DEPT_NAME\">영어교육과</Col></Row><Row><Col id=\"DEPT_CD\">D999</Col><Col id=\"DEPT_NAME\">서양조소학과</Col></Row><Row><Col id=\"DEPT_CD\">D201</Col><Col id=\"DEPT_NAME\">수학과</Col></Row><Row><Col id=\"DEPT_CD\">D100</Col><Col id=\"DEPT_NAME\">경영학과</Col></Row><Row><Col id=\"DEPT_CD\">D101</Col><Col id=\"DEPT_NAME\">회계사무학과</Col></Row><Row><Col id=\"DEPT_CD\">D901</Col><Col id=\"DEPT_NAME\">서양화과</Col></Row><Row><Col id=\"DEPT_CD\">D902</Col><Col id=\"DEPT_NAME\">동양화과</Col></Row><Row><Col id=\"DEPT_CD\">D301</Col><Col id=\"DEPT_NAME\">기계공학과</Col></Row><Row><Col id=\"DEPT_CD\">D003</Col><Col id=\"DEPT_NAME\">역사학과</Col></Row><Row><Col id=\"DEPT_CD\">D102</Col><Col id=\"DEPT_NAME\">빅데이터응용학과</Col></Row><Row><Col id=\"DEPT_CD\">D302</Col><Col id=\"DEPT_NAME\">화학공학과</Col></Row><Row><Col id=\"DEPT_CD\">D303</Col><Col id=\"DEPT_NAME\">컴퓨터공학과</Col></Row><Row><Col id=\"DEPT_CD\">D304</Col><Col id=\"DEPT_NAME\">생명공학과</Col></Row><Row><Col id=\"DEPT_CD\">D202</Col><Col id=\"DEPT_NAME\">수학교육과</Col></Row><Row><Col id=\"DEPT_CD\">D305</Col><Col id=\"DEPT_NAME\">전자공학과</Col></Row><Row><Col id=\"DEPT_CD\">D306</Col><Col id=\"DEPT_NAME\">전기공학과</Col></Row><Row><Col id=\"DEPT_CD\">D307</Col><Col id=\"DEPT_NAME\">건축학과</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","23","160","887","212",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_scholarship");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"64\"/><Column size=\"58\"/><Column size=\"263\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학과명\"/><Cell col=\"1\" text=\"장학금명\"/><Cell col=\"2\" text=\"금액\"/><Cell col=\"3\" text=\"장학 조건\"/></Band><Band id=\"body\"><Cell text=\"bind:dCode\" displaytype=\"combotext\" combodataset=\"ds_dept\" combodatacol=\"DEPT_NAME\" combocodecol=\"DEPT_CD\"/><Cell col=\"1\" text=\"bind:scName\"/><Cell col=\"2\" text=\"bind:amount\"/><Cell col=\"3\" text=\"bind:scCondition\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_scRetrieve","652","117","81","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addScholar","741","117","81","38",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("등록");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","23","432","887","212",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("");
            obj.set_border("1px solid");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","12","17","64","32",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("장학금코드");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","93","13","111","41",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","10","79","50","33",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("장학금명");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","93","74","111","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","7","142","50","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("금액");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","93","145","111","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","245","12","77","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("등록날짜");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","338","7","128","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","245","84","81","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("학과코드");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit04","338","73","128","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","245","157","79","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("장학금조건");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","338","135","445","67",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_registerSc","828","389","81","38",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteSc","828","117","81","38",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00","value","ds_scholarship","scCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.Edit01","value","ds_scholarship","scName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Edit02","value","ds_scholarship","amount");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Edit03","value","ds_scholarship","scEnrollDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.Edit04","value","ds_scholarship","dCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.TextArea00","value","ds_scholarship","scCondition");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_scholarship.xfdl", function() {

        this.btn_scRetrieve_onclick = function(obj,e)
        {
        	this.transaction(
        	"tr_scList"
        	,"SnuURL::scholarship/list.snu"
        	,""
        	,"ds_scholarship=out_scholarship"
        	,""
        	,"fn_callback_sc"
        	)
        };
        this.out_var="";
        this.fn_callback_sc = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_scList")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("조회 실패!"+sErrorMsg);
        			return;
        		}
        		this.alert("조회 성공"+this.ds_scholarship.getRowCount()+"건");
        	}
        	if(id=="tr_scSave")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("저장 실패:"+sErrorMsg);
        			return;
        		}
        		this.alert("저장 성공");
        	}
        }



        this.btn_addScholar_onclick = function(obj,e)
        {
        	var d = new Date();
        	var today = (d.getYear() + "" + ((d.getMonth()+1)+"").padLeft(2,'0')+""+(""+d.getDate()).padLeft(2,'0'));

        	this.ds_scholarship.addRow();
        	this.ds_scholarship.setColumn(this.ds_scholarship.rowposition, "scEnrollDate", today);
        };

        this.btn_registerSc_onclick = function(obj,e)
        {
        	this.transaction(
        	"tr_scSave"
        	,"SnuURL::scholarship/changeInfo.snu"
        	,"in_scholarship=ds_scholarship:U"
        	,""
        	,"fn_callback_sc"
        	)
        };

        this.btn_deleteSc_onclick = function(obj,e)
        {
        	this.ds_scholarship.deleteRow(this.ds_scholarship.rowposition);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_scRetrieve.addEventHandler("onclick",this.btn_scRetrieve_onclick,this);
            this.btn_addScholar.addEventHandler("onclick",this.btn_addScholar_onclick,this);
            this.btn_registerSc.addEventHandler("onclick",this.btn_registerSc_onclick,this);
            this.btn_deleteSc.addEventHandler("onclick",this.btn_deleteSc_onclick,this);
        };
        this.loadIncludeScript("frm_scholarship.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
