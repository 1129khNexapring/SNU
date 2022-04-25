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
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10</Col><Col id=\"MENU_NAME\">학생 성적 관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_grade.xfdl</Col></Row><Row><Col id=\"MENU_ID\">20</Col><Col id=\"MENU_NAME\">학생 출결 관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_attendance.xfdl</Col></Row><Row><Col id=\"MENU_ID\">30</Col><Col id=\"MENU_NAME\">강의 게시판</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_board.xfdl</Col></Row><Row><Col id=\"MENU_ID\">40</Col><Col id=\"MENU_NAME\">학과 정보 조회</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_dept.xfdl</Col></Row><Row><Col id=\"MENU_ID\">4010</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">소속 학과 정보</Col><Col id=\"FORM_URL\">Base::frm_deptInfo.xfdl</Col></Row><Row><Col id=\"MENU_ID\">4020</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">학과 소속 교수</Col><Col id=\"FORM_URL\">Base::frm_deptPro.xfdl</Col></Row><Row><Col id=\"MENU_ID\">4030</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"MENU_NAME\">수강중인 학생</Col><Col id=\"FORM_URL\">Base::frm_stuIng.xfdl</Col></Row><Row><Col id=\"MENU_ID\">50</Col><Col id=\"MENU_NAME\">강의 스케줄 관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_lectureScheduler.xfdl</Col></Row><Row><Col id=\"MENU_ID\">60</Col><Col id=\"MENU_NAME\">교수 정보 관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_proInfo.xfdl</Col></Row><Row><Col id=\"MENU_ID\">70</Col><Col id=\"MENU_NAME\">강의 관리</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_lecture.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">증명서 조회</Col><Col id=\"MENU_ID\">80</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_paper.xfdl</Col></Row><Row><Col id=\"MENU_NAME\">강의 평가 조회</Col><Col id=\"MENU_ID\">90</Col><Col id=\"MENU_LEVEL\">0</Col><Col id=\"FORM_URL\">Base::frm_lectureScore.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("p_openForm", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("ds_boardList", this);
            obj._setContents("<ColumnInfo><Column id=\"board_no\" type=\"STRING\" size=\"256\"/><Column id=\"board_title\" type=\"STRING\" size=\"256\"/><Column id=\"board_content\" type=\"STRING\" size=\"256\"/><Column id=\"board_date\" type=\"STRING\" size=\"256\"/><Column id=\"b_status\" type=\"STRING\" size=\"256\"/><Column id=\"p_code\" type=\"STRING\" size=\"256\"/><Column id=\"board_fileName\" type=\"STRING\" size=\"256\"/><Column id=\"board_fileReName\" type=\"STRING\" size=\"256\"/><Column id=\"board_writer\" type=\"STRING\" size=\"256\"/><Column id=\"board_count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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
            var frame0 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,this);
            frame0.set_separatesize("100,*");
            this.addChild(frame0.name, frame0);
            this.frame=frame0;

            var frame1 = new ChildFrame("TopFrame",null,null,null,null,null,null,"FrameBase::Form_Top.xfdl",frame0);
            frame1.set_showtitlebar("false");
            frame1.set_showstatusbar("false");
            frame1.set_background("chocolate");
            frame0.addChild(frame1.name, frame1);
            frame1.set_formurl("FrameBase::Form_Top.xfdl");


            var frame2 = new HFrameSet("HFrameSet00",null,null,null,null,null,null,frame0);
            frame2.set_separatesize("200,*");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"FrameBase::Form_Left.xfdl",frame2);
            frame3.set_showtitlebar("false");
            frame3.set_showstatusbar("false");
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("FrameBase::Form_Left.xfdl");


            var frame4 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,frame2);
            frame4.set_separatesize("30,0,*");
            frame4.set_showtitlebar("false");
            frame2.addChild(frame4.name, frame4);

            var frame5 = new ChildFrame("TabFrame",null,null,null,null,null,null,"FrameBase::Form_Mdi.xfdl",frame4);
            frame5.set_showtitlebar("false");
            frame4.addChild(frame5.name, frame5);
            frame5.set_formurl("FrameBase::Form_Mdi.xfdl");


            var frame6 = new FrameSet("WorkFrame",null,null,null,null,null,null,frame4);
            frame4.addChild(frame6.name, frame6);

            var frame7 = new ChildFrame("MainFrame",null,null,null,null,null,null,"FrameBase::Form_Main.xfdl",frame4);
            frame7.set_showtitlebar("false");
            frame7.set_showstatusbar("false");
            frame7.set_background("aqua");
            frame4.addChild(frame7.name, frame7);
            frame7.set_formurl("FrameBase::Form_Main.xfdl");
        };
        
        this.on_initEvent = function()
        {

        };
        
        // script Compiler

        this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
