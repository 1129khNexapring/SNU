(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_lectureSchedule");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lschedule", this);
            obj._setContents("<ColumnInfo><Column id=\"lsNo\" type=\"STRING\" size=\"256\"/><Column id=\"lsDate\" type=\"STRING\" size=\"256\"/><Column id=\"lsContents\" type=\"STRING\" size=\"256\"/><Column id=\"lsDay\" type=\"STRING\" size=\"256\"/><Column id=\"lsDay1\" type=\"STRING\" size=\"256\"/><Column id=\"lsRoom\" type=\"STRING\" size=\"256\"/><Column id=\"lCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_lecture", this);
            obj._setContents("<ColumnInfo><Column id=\"lsNo\" type=\"STRING\" size=\"256\"/><Column id=\"lsDate\" type=\"STRING\" size=\"256\"/><Column id=\"lsDay\" type=\"STRING\" size=\"256\"/><Column id=\"lsDay1\" type=\"STRING\" size=\"256\"/><Column id=\"lsRoom\" type=\"STRING\" size=\"256\"/><Column id=\"lCode\" type=\"STRING\" size=\"256\"/><Column id=\"lType\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"lsContents\" type=\"STRING\" size=\"256\"/><Column id=\"lDays\" type=\"INT\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_professor", this);
            obj._setContents("<ColumnInfo><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"pName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"pCode\">P060</Col><Col id=\"pName\">김진섭</Col></Row><Row><Col id=\"pCode\">P901</Col><Col id=\"pName\">김병수</Col></Row><Row><Col id=\"pCode\">P002</Col><Col id=\"pName\">김제니</Col></Row><Row><Col id=\"pCode\">P009</Col><Col id=\"pName\">고출봉</Col></Row><Row><Col id=\"pCode\">P061</Col><Col id=\"pName\">한상훈</Col></Row><Row><Col id=\"pCode\">P902</Col><Col id=\"pName\">이철헌</Col></Row><Row><Col id=\"pCode\">P100</Col><Col id=\"pName\">김병국</Col></Row><Row><Col id=\"pCode\">P062</Col><Col id=\"pName\">함덕수</Col></Row><Row><Col id=\"pCode\">P101</Col><Col id=\"pName\">지경노</Col></Row><Row><Col id=\"pCode\">P030</Col><Col id=\"pName\">이철용</Col></Row><Row><Col id=\"pCode\">P031</Col><Col id=\"pName\">권백종</Col></Row><Row><Col id=\"pCode\">P032</Col><Col id=\"pName\">박주희</Col></Row><Row><Col id=\"pCode\">P033</Col><Col id=\"pName\">김기백</Col></Row><Row><Col id=\"pCode\">P034</Col><Col id=\"pName\">황태석</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","25","130","475","411",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_lecture");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"226\"/><Column size=\"80\"/><Column size=\"84\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"과목명\"/><Cell col=\"1\" text=\"담당교수\"/><Cell col=\"2\" text=\"조회\"/></Band><Band id=\"body\"><Cell text=\"bind:lName\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:pCode\" textAlign=\"center\" displaytype=\"combotext\" combodataset=\"ds_professor\" combocodecol=\"pCode\" combodatacol=\"pName\"/><Cell col=\"2\" text=\"조회\" textAlign=\"center\" displaytype=\"buttoncontrol\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","510","131","566","409",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("Div00");
            obj.set_border("1px solid");
            obj.set_background("#f4f5ff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","13","16","138","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("강의명");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","13","109","138","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("날짜");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","13","202","138","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("시간");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","13","295","138","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("강의실");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02_00","272","16","138","43",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("강의코드");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("static_lname","76","24","136","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("");
            obj.set_border("1px solid");
            obj.set_borderRadius("5px 5px 5px 5px");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            obj.set_fittocontents("none");
            obj.set_wordWrap("char");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("static_ldate","76","116","136","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("");
            obj.set_border("1px solid");
            obj.set_borderRadius("5px");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("static_ltime","76","210","136","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("");
            obj.set_border("1px solid");
            obj.set_borderRadius("5px");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("static_lroom","76","303","136","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_border("1px solid");
            obj.set_borderRadius("5px");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("static_lcode","354","24","136","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("");
            obj.set_border("1px solid");
            obj.set_borderRadius("5px");
            obj.set_background("#ffffff");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","273","120","77","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_text("*강의계획");
            obj.set_font("bold 14px/normal \"Gulim\"");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","309","162","240","226",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);
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
        this.registerScript("frm_lectureSchedule.xfdl", function() {
        var sName = nexacro.getEnvironmentVariable("ev_Val1");
        var sCode = nexacro.getEnvironmentVariable("ev_Val");

        this.frm_lectureSchedule_onload = function(obj,e)
        {
        	this.transaction(
                		"tr_select"// 1.ID
                		,"SnuURL::lecture/viewlist.snu"// 2.URL
                		,"" // 3.InDs : F->S jsp(I,U,D)
                		,"ds_lecture=out_lecture" // 4.OutDs : S->F jsp(SELECT)
                		,"inVar1="+sCode // 5.InVar : F->S(var)
                		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        				)
        };

        this.Grid00_oncellclick = function(obj,e)
        {
        	if(e.cell==2){
        		var row =  this.ds_lecture.rowposition;
        		var lName = this.ds_lecture.getColumn(row, "lName");
        		var lCode = this.ds_lecture.getColumn(row, "lCode");
        		var lsDate =this.ds_lecture.getColumn(row, "lsDate");
        		var lTime = this.ds_lecture.getColumn(row, "lsDay");
        		var lsRoom = this.ds_lecture.getColumn(row, "lsRoom");
        		var lsContents = this.ds_lecture.getColumn(row, "lsContents");

        		this.Div00.form.static_lname.set_text(lName);
        		this.Div00.form.static_lcode.set_text(lCode);
        		this.Div00.form.static_ldate.set_text(lsDate);
        		this.Div00.form.static_ltime.set_text(lTime);
        		this.Div00.form.static_lroom.set_text(lsRoom);
        		this.Div00.form.TextArea00.set_text(lsContents);
        	}
        };

        this.Div00_Static01_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_lectureSchedule_onload,this);
            this.Grid00.addEventHandler("oncellclick",this.Grid00_oncellclick,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Div00_Static01_onclick,this);
        };
        this.loadIncludeScript("frm_lectureSchedule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
