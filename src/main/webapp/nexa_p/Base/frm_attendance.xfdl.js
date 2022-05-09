(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_attendance");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_lecture", this);
            obj._setContents("<ColumnInfo><Column id=\"lCode\" type=\"STRING\" size=\"256\"/><Column id=\"lType\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"lObjective\" type=\"STRING\" size=\"256\"/><Column id=\"lContents\" type=\"STRING\" size=\"256\"/><Column id=\"textbook\" type=\"STRING\" size=\"256\"/><Column id=\"lDays\" type=\"STRING\" size=\"256\"/><Column id=\"credit\" type=\"STRING\" size=\"256\"/><Column id=\"lYear\" type=\"STRING\" size=\"256\"/><Column id=\"lSemester\" type=\"INT\" size=\"256\"/><Column id=\"lCapacity\" type=\"STRING\" size=\"256\"/><Column id=\"lStatus\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/><Column id=\"pName\" type=\"STRING\" size=\"256\"/><Column id=\"attendanceStatus\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_enrollLectureDomain", this);
            obj._setContents("<ColumnInfo><Column id=\"dName\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"attendanceStatus\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_attendance", this);
            obj._setContents("<ColumnInfo><Column id=\"lDate\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"lCode\" type=\"STRING\" size=\"256\"/><Column id=\"attendanceStatus\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_attStatus", this);
            obj._setContents("<ColumnInfo><Column id=\"CODE\" type=\"STRING\" size=\"256\"/><Column id=\"CONTENT\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"CODE\">출석</Col><Col id=\"CONTENT\">출석</Col></Row><Row><Col id=\"CODE\">지각</Col><Col id=\"CONTENT\">지각</Col></Row><Row><Col id=\"CODE\">결석</Col><Col id=\"CONTENT\">결석</Col></Row></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("static_00","83","93","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("담당 교과목");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_lectureList","63","135","977","105",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_lecture");
            obj.set_autofittype("col");
            obj.set_cursor("pointer");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"50\"/><Column size=\"45\"/><Column size=\"33\"/><Column size=\"319\"/><Column size=\"32\"/><Column size=\"52\"/><Column size=\"48\"/><Column size=\"2\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이수구분\"/><Cell col=\"1\" text=\"년도\"/><Cell col=\"2\" text=\"학기\"/><Cell col=\"3\" text=\"교과목명\"/><Cell col=\"4\" text=\"학점\"/><Cell col=\"5\" text=\"총 강의일수\"/><Cell col=\"6\" colspan=\"2\"><Cell text=\"수강정원\"/><Cell col=\"1\" displaytype=\"none\"/></Cell></Band><Band id=\"body\"><Cell text=\"bind:lType\"/><Cell col=\"1\" text=\"bind:lYear\"/><Cell col=\"2\" text=\"bind:lSemester\"/><Cell col=\"3\" text=\"bind:lName\"/><Cell col=\"4\" text=\"bind:credit\"/><Cell col=\"5\" text=\"bind:lDays\"/><Cell col=\"6\" colspan=\"2\"><Cell text=\"bind:lCapacity\"/><Cell col=\"1\" text=\"bind:lCode\"/></Cell></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","65","95","18","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text(">");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("static_00_00","83","272","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("출석부");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","65","274","18","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text(">");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("grd_attList","63","317","307","270",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_binddataset("ds_enrollLectureDomain");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학과\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"출결사항\"/></Band><Band id=\"body\"><Cell text=\"bind:dName\"/><Cell col=\"1\" text=\"bind:sName\"/><Cell col=\"2\" text=\"bind:attendanceStatus\" displaytype=\"combocontrol\" edittype=\"combo\" combodataset=\"ds_attStatus\" combocodecol=\"CODE\" combodatacol=\"CONTENT\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("static_00_00_00","483","315","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("수강신청학생");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","465","317","18","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text(">");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","485","360","120","120",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("");
            obj.set_background("url(\'..\\..\\..\\..\\..\\..\\Desktop\\99EA8C3359DC92641A.png\') no-repeat center center /contain");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("st_year00_00","630","410","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("성명");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("st_year00_01","630","380","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("학과");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_boardNo00","700","410","145","30",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_boardNo01","700","380","145","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static01","760","85","281","20",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("※ 출석을 모두 입력하고 저장버튼을 눌러주십시오.");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("5px");
            obj.set_color("darkred");
            this.addChild(obj.name, obj);

            obj = new Button("btn_attSubmit","960","50","80","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("출석부 저장");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_boardNo01","value","ds_enrollLectureDomain","dName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_boardNo00","value","ds_enrollLectureDomain","sName");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_attendance.xfdl", function() {

        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id == "tr_lectureList") {
        		if(nErrorCode < 0) {
        			this.alert("교과목 조회 실패 : " + sErrorMsg);
        			return;
        		}
        		// this.alert("교과목 조회 성공");
        	}

        	if(id == "tr_enLectureList") {
        		if(nErrorCode < 0) {
        			this.alert("수강하는 학생이 없습니다.");
        			return;
        		}
        		// this.alert("출석부 조회 성공");
        	}

        	if(id == "tr_attendanceSumbit") {
        		if(nErrorCode < 0) {
        			this.alert("출석부 저장 실패");
        			return;
        		}
        		this.alert("출석부 저장 성공");
        	}
        };

        var currentEnLecture = 0;
        this.frm_attendance_onload = function(obj,e)
        {
        	this.transaction(
        			"tr_lectureList" 					  	  // 1. ID
        			, "SnuUrl::attendance/list.snu" 		  // 2. URL
        			, ""							  // 3. InDs : F -> S jsp(I, U, D)
        			, "ds_lecture=out_lectureList" 	  // 4. OutDs : S -> F jsp(SELECT)
        	        , ""							  // 5. InVar : F -> S(var)
        			, "fn_callback_tran"			  // 6. callback function(transaction 완료시 호출되는 함수)
        		)
        };

        this.grd_lectureList_oncellclick = function(obj,e)
        {
        	currentEnLecture = e.row;
        	var lCode = this.ds_lecture.getColumn(currentEnLecture, "lCode");
        	this.transaction(
        			"tr_enLectureList" 					  	  // 1. ID
        			, "SnuUrl::attendance/enLectureList.snu" 		  // 2. URL
        			, ""							  // 3. InDs : F -> S jsp(I, U, D)
        			, "ds_enrollLectureDomain=out_enLectureList"	  // 4. OutDs : S -> F jsp(SELECT)
        	        , "in_var1=" + lCode +""						  // 5. InVar : F -> S(var)
        			, "fn_callback_tran"			  // 6. callback function(transaction 완료시 호출되는 함수)
        		)
        };

        this.btn_attSubmit_onclick = function(obj,e)
        {
        	var comboData = this.ds_attStatus.rowposition;
        	var comboText = this.ds_attStatus.getColum(comboData, "출결사항");
        	alert(comboText.value);
        	this.transaction(
        			"tr_attendanceSumbit" 					  	  // 1. ID
        			, "SnuUrl::attendance/save.snu" 		  // 2. URL
        			, ""							  // 3. InDs : F -> S jsp(I, U, D)
        			, ""	  // 4. OutDs : S -> F jsp(SELECT)
        	        , ""						  // 5. InVar : F -> S(var)
        			, "fn_callback_tran"			  // 6. callback function(transaction 완료시 호출되는 함수)
        		)
        };

        this.grd_attList_oncloseup = function(obj,e)
        {
           var c = obj.getEditText();
           this.alert(c);
        };

        this.grd_lectureList_onheadclick = function(obj,e)
        {
        	this.fn_CheckAll(obj, e);
        	this.fn_sort(obj, e);
        };

        this.fn_CheckAll = function(obj, e)
        	{
        		if(obj.getCellProperty("head", e.cell, "displaytype")=="checkboxcontrol")
        		{
        			var objDs = obj.getBindDataset();
        			var nVal = obj.getCellText(-1, e.cell);
        			nVal = (nVal=="1"?"0":"1");

        			// Head
        			obj.setCellProperty("Head", e.cell, "text", nVal);
        			// Body
        			for(var i=0; i<this.ds_lecture.getRowCount(); i++)
        			{
        				objDs.setColumn(i, "lCode", nVal);
        			}
        		}
        		this.fn_sort(obj, e);
        	}

        this.CONST_ASC_MARK = "↑";
        this.CONST_DESC_MARK = "↓";
        this.nPrevCell = -1;
        this.fn_sort = function(obj, e)
        {
        	if(obj.getCellProperty("head",e.cell, "displaytype")=="checkboxcontrol") return;
        	//Column ID -> bind:ColumnID -> split
        	var ObjDs = obj.getBindDataset();
        	var sColId = obj.getCellProperty("body", e.cell, "text").split(":");

        	var HeadText ="";
        	var sKeyString = "";
        	var HeadVal = obj.getCellText(-1, e.cell);
        	var HeadMark = HeadVal.substr(HeadVal.length-1);

        	if(HeadMark==this.CONST_ASC_MARK) {
        		HeadText = HeadVal.substr(0, HeadVal.length-1) + this.CONST_DESC_MARK;
        		sKeyString = "S:-";
        	} else if(HeadMark==this.CONST_DESC_MARK) {
        		HeadText = HeadVal.substr(0, HeadVal.length-1) + this.CONST_ASC_MARK;
        		sKeyString = "S:+";
        	} else {
        		HeadText = HeadVal + this.CONST_ASC_MARK;
        		sKeyString = "S:+";
        	}

        	obj.setCellProperty("head", e.cell, "text" , HeadText);
        	// this.fn_sort(obj, e)에 정렬된 헤드의 글자색만 빨간색으로 바뀌도록
        	obj.setCellProperty("head", e.cell, "color" , "red");
        	ObjDs.set_keystring(sKeyString + sColId[1]);

        	if(this.nPrevCell>-1 && this.nPrevCell != e.cell)
        	{
        		var sPrevText = obj.getCellText(-1, this.nPrevCell);
        		obj.setCellProperty("head", this.nPrevCell, "text" , sPrevText.substr(0, sPrevText.length-1));
        		// this.fn_sort(obj, e)에 정렬된 헤드의 글자색만 빨간색으로 바뀌도록(쓰지않으면 클릭한곳은 다 빨간색으로 남음)
        		obj.setCellProperty("head", this.nPrevCell, "color" , "#2f2f2f");
        	}
        	this.nPrevCell = e.cell;
        };





        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_attendance_onload,this);
            this.grd_lectureList.addEventHandler("oncellclick",this.grd_lectureList_oncellclick,this);
            this.grd_lectureList.addEventHandler("onheadclick",this.grd_lectureList_onheadclick,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.static_00_00.addEventHandler("onclick",this.static_00_00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.grd_attList.addEventHandler("oncloseup",this.grd_attList_oncloseup,this);
            this.static_00_00_00.addEventHandler("onclick",this.static_00_00_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_attSubmit.addEventHandler("onclick",this.btn_attSubmit_onclick,this);
            this.ds_enrollLectureDomain.addEventHandler("onvaluechanged",this.ds_enrollLectureDomain_onvaluechanged,this);
            this.ds_attStatus.addEventHandler("onvaluechanged",this.ds_attStatus_onvaluechanged,this);
        };
        this.loadIncludeScript("frm_attendance.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
