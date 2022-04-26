(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_professor");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_pInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"pName\" type=\"STRING\" size=\"256\"/><Column id=\"pPassword\" type=\"STRING\" size=\"256\"/><Column id=\"pRrn\" type=\"STRING\" size=\"256\"/><Column id=\"pAddress\" type=\"STRING\" size=\"256\"/><Column id=\"pEmail\" type=\"STRING\" size=\"256\"/><Column id=\"pGender\" type=\"STRING\" size=\"256\"/><Column id=\"pPhone\" type=\"STRING\" size=\"256\"/><Column id=\"pAddmission\" type=\"STRING\" size=\"256\"/><Column id=\"advisorYN\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_pdept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">D001</Col><Col id=\"DEPT_NAME\">국어국문학과</Col></Row><Row><Col id=\"DEPT_CD\">D002</Col><Col id=\"DEPT_NAME\">영여교육과</Col></Row><Row><Col id=\"DEPT_CD\">D999</Col><Col id=\"DEPT_NAME\">서양조소학과</Col></Row><Row><Col id=\"DEPT_CD\">D201</Col><Col id=\"DEPT_NAME\">수학과</Col></Row><Row><Col id=\"DEPT_CD\">D100</Col><Col id=\"DEPT_NAME\">경영학과</Col></Row><Row><Col id=\"DEPT_CD\">D101</Col><Col id=\"DEPT_NAME\">회계사무학과</Col></Row><Row><Col id=\"DEPT_CD\">D901</Col><Col id=\"DEPT_NAME\">서양화과</Col></Row><Row><Col id=\"DEPT_CD\">D902</Col><Col id=\"DEPT_NAME\">동양화과</Col></Row><Row><Col id=\"DEPT_CD\">D301</Col><Col id=\"DEPT_NAME\">기계공학과</Col></Row><Row><Col id=\"DEPT_CD\">D003</Col><Col id=\"DEPT_NAME\">역사학과</Col></Row><Row><Col id=\"DEPT_CD\">D102</Col><Col id=\"DEPT_NAME\">빅데이터응용학과</Col></Row><Row><Col id=\"DEPT_CD\">D302</Col><Col id=\"DEPT_NAME\">화학공학과</Col></Row><Row><Col id=\"DEPT_CD\">D303</Col><Col id=\"DEPT_NAME\">컴퓨터공학과</Col></Row><Row><Col id=\"DEPT_CD\">D304</Col><Col id=\"DEPT_NAME\">생명공학과</Col></Row><Row><Col id=\"DEPT_CD\">D202</Col><Col id=\"DEPT_NAME\">수학교육과</Col></Row><Row><Col id=\"DEPT_CD\">D305</Col><Col id=\"DEPT_NAME\">전자공학과</Col></Row><Row><Col id=\"DEPT_CD\">D306</Col><Col id=\"DEPT_NAME\">전기공학과</Col></Row><Row><Col id=\"DEPT_CD\">D307</Col><Col id=\"DEPT_NAME\">건축학과</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","30","132","1030","218",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_pInfo");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"68\"/><Column size=\"80\"/><Column size=\"71\"/><Column size=\"153\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"교수번호\"/><Cell col=\"1\" text=\"교수명\"/><Cell col=\"2\" text=\"학과명\"/><Cell col=\"3\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:pCode\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:pName\" textAlign=\"center\"/><Cell col=\"2\" text=\"bind:dCode\" displaytype=\"combotext\" combodataset=\"ds_pdept\" combocodecol=\"DEPT_CD\" combodatacol=\"DEPT_NAME\" textAlign=\"center\"/><Cell col=\"3\" text=\"bind:pEmail\" textAlign=\"center\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pList","270","95","140","31",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","30","93","108","32",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            var Combo00_innerdataset = new nexacro.NormalDataset("Combo00_innerdataset", obj);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">dCode</Col><Col id=\"datacolumn\">학과명</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","146","95","121","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","31","393","1031","262",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("");
            obj.set_border("1px solid black");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","14","15","86","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("이름");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","14","106","84","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("전화번호");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","14","197","84","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("이메일");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","119","9","175","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","119","101","175","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_format("###-####-####");
            obj.set_type("string");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","119","193","175","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","310","14","86","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("교수번호");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","310","105","84","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("학과");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","310","196","84","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("임용일");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","421","12","175","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","421","104","175","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","411","196","197","49",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_format("####-##-##");
            obj.set_type("string");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","631","17","84","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("성별");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","751","13","219","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("13");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            var Div00_form_Radio00_innerdataset = new nexacro.NormalDataset("Div00_form_Radio00_innerdataset", obj);
            Div00_form_Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">M</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">W</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_Radio00_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static07","631","103","84","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("14");
            obj.set_text("주소");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit04","751","104","250","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","631","194","84","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("주민등록번호");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit05","751","196","240","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_pSave","830","94","73","31",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","909","94","73","31",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_pDelete","991","94","70","31",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("삭제");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00","value","ds_pInfo","pName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.MaskEdit00","value","ds_pInfo","pPhone");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Edit01","value","ds_pInfo","pEmail");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Edit02","value","ds_pInfo","pCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.Edit03","value","ds_pInfo","dCode");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","Div00.form.MaskEdit01","value","ds_pInfo","pAddmission");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","Div00.form.Radio00","value","ds_pInfo","pGender");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","Div00.form.Edit04","value","ds_pInfo","pAddress");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item8","Div00.form.Edit05","value","ds_pInfo","pRrn");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_professor.xfdl", function() {


        this.btn_pList_onclick = function(obj,e)
        {
        	this.transaction(
        	"tr_pList"
        	,"SnuURL::professor/list.snu"
        	,""
        	,"ds_pInfo=out_pInfo"
        	,""
        	,"fn_callback_pro"
        	)
        };
        this.out_var="";
        this.fn_callback_pro = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_pList")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("조회 실패:"+sErrorMsg);
        			return;
        		}
        		this.alert("조회 성공:"+ this.ds_pInfo.getRowCount() + "건");
        	}
        	if(id=="tr_pSave")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("저장실패 : " +sErrorMsg);
        			return
        		}
        		this.alert(this.out_var + ">>저장성공");
        	}
        }

        this.btn_pList_onrbuttondown = function(obj,e)
        {
        	var eValue = this.Edit00.value;
        	var aRow = this.ds_pdept.findRow("DEPT_NAME", eValue);
        	var sColId = this.ds_pdept.getColumn(aRow, "DEPT_CD");
        	this.ds_pInfo.filter("dCode=='"+sColId+"'");
        };


        this.Button00_onclick = function(obj,e)
        {
        	this.ds_pInfo.addRow();
        	this.ds_pInfo.setColumn(this.ds_pInfo.rowposition, "pAddmission", "20220425");
        };

        this.btn_pSave_onclick = function(obj,e)
        {
        	var name = this.Div00.form.Edit00.value;
        	this.transaction(
        	"tr_pSave"
        	,"SnuURL::professor/changeInfo.snu"
        	,"in_professor=ds_pInfo:U"
        	,""
        	,"in_var1="+nexacro.wrapQuote(name)
        	,"fn_callback_pro"
        	)
        };



        this.btn_pDelete_onclick = function(obj,e)
        {
        	this.ds_pInfo.deleteRow(this.ds_pInfo.rowposition);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.btn_pList.addEventHandler("onclick",this.btn_pList_onclick,this);
            this.btn_pList.addEventHandler("onrbuttondown",this.btn_pList_onrbuttondown,this);
            this.Div00.form.Radio00.addEventHandler("onitemchanged",this.Div00_Radio00_onitemchanged,this);
            this.btn_pSave.addEventHandler("onclick",this.btn_pSave_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.btn_pDelete.addEventHandler("onclick",this.btn_pDelete_onclick,this);
        };
        this.loadIncludeScript("frm_professor.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
