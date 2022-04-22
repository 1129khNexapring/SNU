(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("Dataset0", this);
            obj._setContents("<ColumnInfo><Column id=\"LIST_ID\" type=\"STRING\" size=\"256\"/><Column id=\"LIST\" type=\"STRING\" size=\"256\"/><Column id=\"LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"LIST\">강의정보관리</Col><Col id=\"LEVEL\">0</Col><Col id=\"LIST_ID\">10</Col></Row><Row><Col id=\"LIST\">출결 조회</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">1010</Col><Col id=\"FORM_URL\">Base::frm_attend.xfdl</Col></Row><Row><Col id=\"LIST\">성적 조회</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">1020</Col><Col id=\"FORM_URL\">Base::frm_grade.xfdl</Col></Row><Row><Col id=\"LIST\">학사스케줄 관리</Col><Col id=\"LEVEL\">0</Col><Col id=\"LIST_ID\">20</Col></Row><Row><Col id=\"LIST\">시간표 조회</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">2010</Col><Col id=\"FORM_URL\">Base::frm_timetable.xfdl</Col></Row><Row><Col id=\"LIST\">강의스케줄 조회</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">2020</Col><Col id=\"FORM_URL\">Base::frm_lectureSchedule.xfdl</Col></Row><Row><Col id=\"LEVEL\">0</Col><Col id=\"LIST\">휴학 관리</Col><Col id=\"LIST_ID\">30</Col></Row><Row><Col id=\"LEVEL\">1</Col><Col id=\"LIST\">휴학 신청</Col><Col id=\"LIST_ID\">3010</Col><Col id=\"FORM_URL\">Base::frm_hhrequest.xfdl</Col></Row><Row><Col id=\"LEVEL\">1</Col><Col id=\"LIST\">휴학 신청내역</Col><Col id=\"LIST_ID\">3020</Col><Col id=\"FORM_URL\">Base::frm_hhcareer.xfdl</Col></Row><Row><Col id=\"LIST\">복학 관리</Col><Col id=\"LEVEL\">0</Col><Col id=\"LIST_ID\">40</Col></Row><Row><Col id=\"LIST\">복학 신청</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">4010</Col><Col id=\"FORM_URL\">Base::frm_bhrequest.xfdl</Col></Row><Row><Col id=\"LIST\">복학 신청내역</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">4020</Col><Col id=\"FORM_URL\">Base::frm_bhcareer.xfdl</Col></Row><Row><Col id=\"LIST\">전과 관리</Col><Col id=\"LEVEL\">0</Col><Col id=\"LIST_ID\">50</Col></Row><Row><Col id=\"LIST\">전과 신청</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">5010</Col><Col id=\"FORM_URL\">Base::frm_moverequest.xfdl</Col></Row><Row><Col id=\"LIST\">전과 신청내역</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">5020</Col><Col id=\"FORM_URL\">Base::frm_movecareer.xfdl</Col></Row><Row><Col id=\"LIST\">예비군 관리</Col><Col id=\"LEVEL\">0</Col><Col id=\"LIST_ID\">60</Col></Row><Row><Col id=\"LIST\">예비군 신청</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">6010</Col><Col id=\"FORM_URL\">Base::frm_militaryrequest.xfdl</Col></Row><Row><Col id=\"LIST\">예비군 신청내역</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">6020</Col><Col id=\"FORM_URL\">Base::frm_militarycareer.xfdl</Col></Row><Row><Col id=\"LIST\">장학금 관리</Col><Col id=\"LEVEL\">0</Col><Col id=\"LIST_ID\">70</Col></Row><Row><Col id=\"LIST\">장학금 조회</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">7010</Col><Col id=\"FORM_URL\">Base::frm_moneylist.xfdl</Col></Row><Row><Col id=\"LIST\">장학금 신청내역</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">7020</Col><Col id=\"FORM_URL\">Base::frm_moneycareer.xfdl</Col></Row><Row><Col id=\"LIST\">봉사활동 관리</Col><Col id=\"LEVEL\">0</Col><Col id=\"LIST_ID\">80</Col></Row><Row><Col id=\"LIST\">봉사활동 조회</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">8010</Col><Col id=\"FORM_URL\">Base::frm_helplist.xfdl</Col></Row><Row><Col id=\"LIST\">봉사활동 신청내역</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">8020</Col><Col id=\"FORM_URL\">Base::frm_helpcareer.xfdl</Col></Row><Row><Col id=\"LIST\">계절학기 관리</Col><Col id=\"LEVEL\">0</Col><Col id=\"LIST_ID\">90</Col></Row><Row><Col id=\"LIST\">계절학기 신청</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">9010</Col><Col id=\"FORM_URL\">Base::frm_seasonrequest.xfdl</Col></Row><Row><Col id=\"LIST\">계절학기 신청내역</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">9020</Col><Col id=\"FORM_URL\">Base::frm_seasoncareer.xfdl</Col></Row><Row><Col id=\"LIST\">마이페이지 관리</Col><Col id=\"LEVEL\">0</Col><Col id=\"LIST_ID\">100</Col></Row><Row><Col id=\"LIST\">내 정보조회</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">10010</Col><Col id=\"FORM_URL\">Base::frm_mypage.xfdl</Col></Row><Row><Col id=\"LIST\">강의평가 관리</Col><Col id=\"LEVEL\">0</Col><Col id=\"LIST_ID\">110</Col></Row><Row><Col id=\"LIST\">강의평가 조회</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">11010</Col><Col id=\"FORM_URL\">Base::frm_lecturescore.xfdl</Col></Row><Row><Col id=\"LIST\">문서 출력</Col><Col id=\"LEVEL\">0</Col><Col id=\"LIST_ID\">120</Col></Row><Row><Col id=\"LIST\">등록금고지서 출력</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">12010</Col><Col id=\"FORM_URL\">Base::frm_fee.xfdl</Col></Row><Row><Col id=\"LIST\">증명서 발급 및 출력</Col><Col id=\"LEVEL\">1</Col><Col id=\"LIST_ID\">12020</Col><Col id=\"FORM_URL\">Base::frm_Ok.xfdl</Col></Row><Row><Col id=\"LIST\">커뮤니티</Col><Col id=\"LEVEL\">0</Col><Col id=\"LIST_ID\">130</Col></Row><Row><Col id=\"LIST_ID\">13010</Col><Col id=\"LIST\">교재공유게시판</Col><Col id=\"LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_book.xfdl</Col></Row><Row><Col id=\"LIST_ID\">13020</Col><Col id=\"LIST\">건의게시판</Col><Col id=\"LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_ask.xfdl</Col></Row></Rows>");
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
            frame4.set_separatesize("30,*");
            frame4.set_showtitlebar("false");
            frame4.set_showstatusbar("true");
            frame2.addChild(frame4.name, frame4);

            var frame5 = new ChildFrame("ChildFrame00",null,null,null,null,null,null,"FrameBase::Form_Tab.xfdl",frame4);
            frame5.set_showtitlebar("false");
            frame5.set_background("transparent");
            frame4.addChild(frame5.name, frame5);
            frame5.set_formurl("FrameBase::Form_Tab.xfdl");


            var frame6 = new ChildFrame("WorkFrame",null,null,null,null,null,null,"FrameBase::Form_Work.xfdl",frame4);
            frame6.set_showtitlebar("false");
            frame6.set_showstatusbar("false");
            frame4.addChild(frame6.name, frame6);
            frame6.set_formurl("FrameBase::Form_Work.xfdl");
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
