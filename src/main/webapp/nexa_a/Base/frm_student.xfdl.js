(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_student");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_student", this);
            obj._setContents("<ColumnInfo><Column id=\"S_CODE\" type=\"STRING\" size=\"256\"/><Column id=\"S_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"S_RRN\" type=\"STRING\" size=\"256\"/><Column id=\"S_PASSWORD\" type=\"STRING\" size=\"256\"/><Column id=\"S_ADDRESS\" type=\"STRING\" size=\"256\"/><Column id=\"S_EMAIL\" type=\"STRING\" size=\"256\"/><Column id=\"S_GENDER\" type=\"STRING\" size=\"256\"/><Column id=\"S_PHONE\" type=\"STRING\" size=\"256\"/><Column id=\"S_ADDMISSION\" type=\"STRING\" size=\"256\"/><Column id=\"ABSENCE_YN\" type=\"STRING\" size=\"256\"/><Column id=\"TRANSFER_YN\" type=\"STRING\" size=\"256\"/><Column id=\"D_CODE\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_Info", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"sRrn\" type=\"STRING\" size=\"256\"/><Column id=\"sPassword\" type=\"STRING\" size=\"256\"/><Column id=\"sAddress\" type=\"STRING\" size=\"256\"/><Column id=\"sEmail\" type=\"STRING\" size=\"256\"/><Column id=\"sGender\" type=\"STRING\" size=\"256\"/><Column id=\"sPhone\" type=\"STRING\" size=\"256\"/><Column id=\"sAddmission\" type=\"STRING\" size=\"256\"/><Column id=\"absenceYN\" type=\"STRING\" size=\"256\"/><Column id=\"transferYN\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"DEPT_CD\" type=\"STRING\" size=\"256\"/><Column id=\"DEPT_NAME\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"DEPT_CD\">D001</Col><Col id=\"DEPT_NAME\">국어국문학과</Col></Row><Row><Col id=\"DEPT_CD\">D002</Col><Col id=\"DEPT_NAME\">영어교육과</Col></Row><Row><Col id=\"DEPT_CD\">D999</Col><Col id=\"DEPT_NAME\">서양조소학과</Col></Row><Row><Col id=\"DEPT_CD\">D201</Col><Col id=\"DEPT_NAME\">수학과</Col></Row><Row><Col id=\"DEPT_CD\">D100</Col><Col id=\"DEPT_NAME\">경영학과</Col></Row><Row><Col id=\"DEPT_CD\">D101</Col><Col id=\"DEPT_NAME\">회계사무학과</Col></Row><Row><Col id=\"DEPT_CD\">D901</Col><Col id=\"DEPT_NAME\">서양화과</Col></Row><Row><Col id=\"DEPT_CD\">D902</Col><Col id=\"DEPT_NAME\">동양화과</Col></Row><Row><Col id=\"DEPT_CD\">D301</Col><Col id=\"DEPT_NAME\">기계공학과</Col></Row><Row><Col id=\"DEPT_CD\">D003</Col><Col id=\"DEPT_NAME\">역사학과</Col></Row><Row><Col id=\"DEPT_CD\">D102</Col><Col id=\"DEPT_NAME\">빅데이터응용학과</Col></Row><Row><Col id=\"DEPT_CD\">D302</Col><Col id=\"DEPT_NAME\">화학공학과</Col></Row><Row><Col id=\"DEPT_CD\">D303</Col><Col id=\"DEPT_NAME\">컴퓨터공학과</Col></Row><Row><Col id=\"DEPT_CD\">D304</Col><Col id=\"DEPT_NAME\">생명공학과</Col></Row><Row><Col id=\"DEPT_CD\">D202</Col><Col id=\"DEPT_NAME\">수학교육과</Col></Row><Row><Col id=\"DEPT_CD\">D305</Col><Col id=\"DEPT_NAME\">전자공학과</Col></Row><Row><Col id=\"DEPT_CD\">D306</Col><Col id=\"DEPT_NAME\">전기공학과</Col></Row><Row><Col id=\"DEPT_CD\">D307</Col><Col id=\"DEPT_NAME\">건축학과</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","30","132","1030","218",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_Info");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"184\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학생번호\"/><Cell col=\"1\" text=\"학생명\"/><Cell col=\"2\" text=\"학과\"/><Cell col=\"3\" text=\"이메일\"/></Band><Band id=\"body\"><Cell text=\"bind:sCode\"/><Cell col=\"1\" text=\"bind:sName\"/><Cell col=\"2\" text=\"bind:dCode\" displaytype=\"combotext\" combodataset=\"ds_dept\" combodatacol=\"DEPT_NAME\" combocodecol=\"DEPT_CD\"/><Cell col=\"3\" text=\"bind:sEmail\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","31","393","1031","262",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_border("1px solid");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","14","15","84","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("이름");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","119","9","175","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","310","14","84","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("학번");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","421","6","175","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","14","106","84","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("전화번호");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit00","119","101","175","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_format("###-####-####");
            obj.set_type("string");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","14","197","84","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("이메일");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","119","193","175","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","310","105","84","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("학과");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","421","98","175","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static05","310","196","84","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("입학일");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new MaskEdit("MaskEdit01","411","190","197","49",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_type("string");
            obj.set_format("####-##-##");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static06","631","12","84","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
            obj.set_text("성별");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("Radio00","751","7","219","46",null,null,null,null,null,null,this.Div00.form);
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

            obj = new Edit("Edit04","751","98","250","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("15");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static08","631","194","84","36",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("16");
            obj.set_text("주민등록번호");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit05","751","190","240","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("17");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","32","91","140","31",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_student.xfdl", function() {


        this.Button00_onclick = function(obj,e)
        {
        	this.transaction(
        		"tr_select"
        		,"SnuURL::student/list.snu"
        		,""
        		,"ds_Info=out_Info"
        		,""
        		,"fn_callback_tran"
        	);

        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_select")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("조회 실패 : "+ sErrorMsg);
        			return;
        		}
        		this.alert("조회 성공 : " + this.ds_Info.getRowCount() + "건");
        	}
        }

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_student_onload,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div00.form.MaskEdit00.addEventHandler("onchanged",this.Div00_MaskEdit00_onchanged,this);
            this.Div00.form.Radio00.addEventHandler("onitemchanged",this.Div00_Radio00_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("frm_student.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
