(function()
{
    return function()
    {
        this.on_loadAppVariables = function()
        {		
            var obj = null;
            
			// global dataobject
		
            // global dataset
            obj = new Dataset("p_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10</Col><Col id=\"MENU_NAME\">학생 성적 관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_grade.xfdl</Col></Row><Row><Col id=\"MENU_ID\">20</Col><Col id=\"MENU_NAME\">학생 출결 관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_attendance.xfdl</Col></Row><Row><Col id=\"MENU_ID\">30</Col><Col id=\"MENU_NAME\">강의 게시판</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_board.xfdl</Col></Row><Row><Col id=\"MENU_ID\">40</Col><Col id=\"MENU_NAME\">학과 정보 조회</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_dept.xfdl</Col></Row><Row><Col id=\"MENU_ID\">4010</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">소속 학과 정보</Col><Col id=\"FORM_URL\">Base::frm_deptInfo.xfdl</Col></Row><Row><Col id=\"MENU_ID\">4020</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">학과 소속 교수</Col><Col id=\"FORM_URL\">Base::frm_deptPro.xfdl</Col></Row><Row><Col id=\"MENU_ID\">4030</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">수강중인 학생</Col><Col id=\"FORM_URL\">Base::frm_stuIng.xfdl</Col></Row><Row><Col id=\"MENU_ID\">50</Col><Col id=\"MENU_NAME\">강의 스케줄 관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_lectureScheduler.xfdl</Col></Row><Row><Col id=\"MENU_ID\">60</Col><Col id=\"MENU_NAME\">교수 정보 관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_proInfo.xfdl</Col></Row><Row><Col id=\"MENU_ID\">70</Col><Col id=\"MENU_NAME\">강의 관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\"/></Row><Row><Col id=\"MENU_ID\">7010</Col><Col id=\"MENU_NAME\">강의 계획서 조회</Col><Col id=\"FORM_URL\">Base::frm_lecture.xfdl</Col><Col id=\"MENU_LEVEL\">1</Col></Row><Row><Col id=\"MENU_ID\">7020</Col><Col id=\"MENU_NAME\">강의 계획서 등록</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_lectureWriteForm.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">증명서 조회</Col><Col id=\"MENU_ID\">80</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_paper.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">강의 평가 조회</Col><Col id=\"MENU_ID\">90</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_lectureScore.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("p_openForm", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);
            
            // global variable

            
            obj = null;
        };
        
        // property, event, createMainFrame
        this.on_initApplication = function()
        {
            // properties
            this.set_id("Application_Desktop");
            this.set_screenid("Desktop_screen");

            if (this._is_attach_childframe)
            	return;
            
            // frame
            var mainframe = this.createMainFrame("mainframe","0","0","1280","720",null,null,this);
            mainframe.set_showtitlebar("true");
            mainframe.set_showstatusbar("true");
            mainframe.set_titletext("TopLeftFrame");
            mainframe.on_createBodyFrame = this.mainframe_createBodyFrame;
            // tray

        };
        
        this.loadPreloadList = function()
        {

        };
        
        this.mainframe_createBodyFrame = function()
        {
            var obj = new ChildFrame("QuickViewFrame", null, null, null, null, null, null, "", this);
            
            obj.set_showtitlebar("false");
            obj.set_showstatusbar("false");
            obj.set_border("0px none");
			
            this.addChild(obj.name, obj);
            obj.set_formurl(nexacro._quickview_formurl);
            this.frame = obj;
            
            obj = null;
        };
        
        this.on_initEvent = function()
        {
        };
		// script Compiler

		this.checkLicense("");
        
        this.loadPreloadList();

    };
}
)();
