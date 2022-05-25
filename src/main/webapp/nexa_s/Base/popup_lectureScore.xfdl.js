(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("popup_lectureScore");
            this.set_titletext("New Form");
            this.set_background("#e8e8e8");
            if (Form == this.constructor)
            {
                this._setFormPosition(450,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_score", this);
            obj._setContents("<ColumnInfo><Column id=\"leNo\" type=\"STRING\" size=\"256\"/><Column id=\"leScore\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lecture", this);
            obj._setContents("<ColumnInfo><Column id=\"lCode\" type=\"STRING\" size=\"256\"/><Column id=\"lType\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"lObjective\" type=\"STRING\" size=\"256\"/><Column id=\"lContents\" type=\"STRING\" size=\"256\"/><Column id=\"textbook\" type=\"STRING\" size=\"256\"/><Column id=\"lDays\" type=\"INT\" size=\"256\"/><Column id=\"credit\" type=\"INT\" size=\"256\"/><Column id=\"lYear\" type=\"STRING\" size=\"256\"/><Column id=\"lSemester\" type=\"INT\" size=\"256\"/><Column id=\"lCapacity\" type=\"INT\" size=\"256\"/><Column id=\"lStatus\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","10","10","430","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("※ 강의평가");
            obj.set_border("1px solid darkgray");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","10","45","430","466",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_border("1px solid darkgray");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","9","-6","380","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("1. 나는 본 강의에 흥미를 가지고 적극적으로 참여하였다.");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","9","71","380","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("2. 담당교수는 강의계획서에 강의에 관한 정보를 명확히 제기하였다.");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","9","148","380","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("3. 담당교수는 규정된 수업시간을 준수하였다.");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","9","225","380","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("4. 본 강의로 해당분야에 관한 본인의 지식이 향상되었다.");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","9","294","380","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("5. 강의내용 및 방법에 대한 개선할 점이 있다면 무엇인가?");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","14","336","395","109",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("radio2","15","108","409","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_font("8px/normal \"Gulim\"");
            obj.set_wordSpacing("0.1px");
            obj.set_letterSpacing("0.1px");
            obj.set_border("1px solid transparent");
            obj.set_columncount("0");
            obj.set_rowcount("2");
            var Div00_form_radio2_innerdataset = new nexacro.NormalDataset("Div00_form_radio2_innerdataset", obj);
            Div00_form_radio2_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">그렇다</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇다</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_radio2_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("radio1","15","34","409","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_font("8px/normal \"Gulim\"");
            obj.set_wordSpacing("0.1px");
            obj.set_letterSpacing("0.1px");
            obj.set_border("1px solid transparent");
            obj.set_columncount("0");
            obj.set_rowcount("2");
            var Div00_form_radio1_innerdataset = new nexacro.NormalDataset("Div00_form_radio1_innerdataset", obj);
            Div00_form_radio1_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">그렇다</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇다</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_radio1_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("radio3","15","190","409","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_font("8px/normal \"Gulim\"");
            obj.set_wordSpacing("0.1px");
            obj.set_letterSpacing("0.1px");
            obj.set_border("1px solid transparent");
            obj.set_columncount("0");
            obj.set_rowcount("2");
            var Div00_form_radio3_innerdataset = new nexacro.NormalDataset("Div00_form_radio3_innerdataset", obj);
            Div00_form_radio3_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">그렇다</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇다</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_radio3_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Radio("radio4","15","264","409","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("horizontal");
            obj.set_font("8px/normal \"Gulim\"");
            obj.set_wordSpacing("0.1px");
            obj.set_letterSpacing("0.1px");
            obj.set_border("1px solid transparent");
            obj.set_columncount("0");
            obj.set_rowcount("2");
            var Div00_form_radio4_innerdataset = new nexacro.NormalDataset("Div00_form_radio4_innerdataset", obj);
            Div00_form_radio4_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">매우 그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">그렇지 않다</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">보통이다</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">그렇다</Col></Row><Row><Col id=\"codecolumn\">5</Col><Col id=\"datacolumn\">매우 그렇다</Col></Row></Rows>");
            obj.set_innerdataset(Div00_form_radio4_innerdataset);
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","387","520","53","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("확인");
            this.addChild(obj.name, obj);

            obj = new Button("Button00_00","327","520","53","25",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("수정");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",450,600,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("popup_lectureScore.xfdl", function() {
        var sName = nexacro.getEnvironmentVariable("ev_Val1");
        var sCode = nexacro.getEnvironmentVariable("ev_Val");
        var lCode = this.parent.lCode;


        this.fn_popupCallback = function(strPopupId, strReturn)
        {
        	if(strReturn == undefined) {
        		return;
        	}

        	if(strPopupID == "score_popup"){
        		this.alert("Return Value: " + strReturn);
        	}
        };

        this.popup_lectureScore_onload = function(obj,e)
        {
        	this.ds_score.setColumn(0, "lCode", this.parent.lCode);
        	this.ds_score.setColumn(0, "sCode", sCode);
        };

        this.Button00_onclick = function(obj,e)
        {
        	var radio1 = nexacro.toNumber(this.Div00.form.radio1.value);
        	var radio2 = nexacro.toNumber(this.Div00.form.radio2.value);
        	var radio3 = nexacro.toNumber(this.Div00.form.radio3.value);
        	var radio4 = nexacro.toNumber(this.Div00.form.radio4.value);

        	//총점
        	var addRadio = nexacro.toNumber(radio1 + radio2 + radio3 + radio4);

        	var score = this.confirm("강의평가를 등록하시겠습니까?", "강의평가 등록");
        	if(score == true)
        	{
        		this.transaction(
                		"tr_register"
                		,"SnuURL::score/register.snu"
                		,""
                		,""
                		,"inVar1=" + sCode + " inVar2=" + lCode + " inVar3=" + addRadio
                		,"fn_callback_tran"
                	)
        	}

        	this.close();
        };

        this.Button00_00_onclick = function(obj,e)
        {
        	var radio1 = nexacro.toNumber(this.Div00.form.radio1.value);
        	var radio2 = nexacro.toNumber(this.Div00.form.radio2.value);
        	var radio3 = nexacro.toNumber(this.Div00.form.radio3.value);
        	var radio4 = nexacro.toNumber(this.Div00.form.radio4.value);

        	//총점
        	var addRadio = nexacro.toNumber(radio1 + radio2 + radio3 + radio4);

        	var score = this.confirm("강의평가를 수정하시겠습니까?", "강의평가 수정");
        	if(score == true)
        	{
        		this.transaction(
                		"tr_register"
                		,"SnuURL::score/modify.snu"
                		,""
                		,""
                		,"inVar1=" + sCode + " inVar2=" + lCode + " inVar3=" + addRadio
                		,"fn_callback_tran"
                	)
        	}

        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.popup_lectureScore_onload,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div00.form.Static00_00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div00.form.Static00_01.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div00.form.Static00_02.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div00.form.Static00_02_00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
            this.Div00.form.radio2.addEventHandler("onitemchanged",this.Div00_Radio00_onitemchanged,this);
            this.Div00.form.radio1.addEventHandler("onitemchanged",this.Div00_Radio00_onitemchanged,this);
            this.Div00.form.radio3.addEventHandler("onitemchanged",this.Div00_Radio00_onitemchanged,this);
            this.Div00.form.radio4.addEventHandler("onitemchanged",this.Div00_Radio00_onitemchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button00_00.addEventHandler("onclick",this.Button00_00_onclick,this);
        };
        this.loadIncludeScript("popup_lectureScore.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
