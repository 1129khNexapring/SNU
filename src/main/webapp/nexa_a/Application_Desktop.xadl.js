(function()
{
    return function()  
	{
        this.on_loadAppVariables = function()
        {		
            var obj = null;
			// global dataobject
		
            // global dataset
            obj = new Dataset("gds_menu", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_LEVEL\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"MENU_ID\">10</Col><Col id=\"MENU_NAME\">인적자원관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">1010</Col><Col id=\"MENU_NAME\">교수</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_professor.xfdl</Col></Row><Row><Col id=\"MENU_ID\">1020</Col><Col id=\"MENU_NAME\">학생</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_student.xfdl</Col></Row><Row><Col id=\"MENU_ID\">20</Col><Col id=\"MENU_NAME\">학사관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">2010</Col><Col id=\"MENU_NAME\">강의관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_lecture.xfdl</Col></Row><Row><Col id=\"MENU_ID\">2020</Col><Col id=\"MENU_NAME\">학사스케줄 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_schoolschedule.xfdl</Col></Row><Row><Col id=\"MENU_ID\">30</Col><Col id=\"MENU_NAME\">요청사항관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">3010</Col><Col id=\"MENU_NAME\">휴학관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_absenceschool.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3020</Col><Col id=\"MENU_NAME\">복학관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_returnschool.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3030</Col><Col id=\"MENU_NAME\">전과관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_transfermajor.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3040</Col><Col id=\"MENU_NAME\">예비군관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_reservist.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3050</Col><Col id=\"MENU_NAME\">계절학기관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_swsession.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3060</Col><Col id=\"MENU_NAME\">봉사활동관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_volunteer.xfdl</Col></Row><Row><Col id=\"MENU_ID\">3070</Col><Col id=\"MENU_NAME\">장학금관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_scholarship.xfdl</Col></Row><Row><Col id=\"MENU_ID\">40</Col><Col id=\"MENU_NAME\">게시판 관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">4010</Col><Col id=\"MENU_NAME\">공지사항 게시판 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_notice.xfdl</Col></Row><Row><Col id=\"MENU_ID\">4020</Col><Col id=\"MENU_NAME\">건의사항 게시판 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_suggestion.xfdl</Col></Row><Row><Col id=\"MENU_ID\">50</Col><Col id=\"MENU_NAME\">메시지 관리</Col><Col id=\"MENU_LEVEL\">0</Col></Row><Row><Col id=\"MENU_ID\">5010</Col><Col id=\"MENU_NAME\">학교알림이 관리</Col><Col id=\"MENU_LEVEL\">1</Col><Col id=\"FORM_URL\">Base::frm_schoolmsg.xfdl</Col></Row></Rows>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_openForm", this);
            obj._setContents("<ColumnInfo><Column id=\"MENU_ID\" type=\"STRING\" size=\"256\"/><Column id=\"MENU_NAME\" type=\"STRING\" size=\"256\"/><Column id=\"FORM_URL\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this._addDataset(obj.name, obj);


            obj = new Dataset("gds_myMenu", this);
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
            frame2.set_showtitlebar("false");
            frame0.addChild(frame2.name, frame2);

            var frame3 = new ChildFrame("LeftFrame",null,null,null,null,null,null,"FrameBase::Form_Left.xfdl",frame2);
            frame3.set_showtitlebar("false");
            frame3.set_showstatusbar("false");
            frame2.addChild(frame3.name, frame3);
            frame3.set_formurl("FrameBase::Form_Left.xfdl");


            var frame4 = new VFrameSet("VFrameSet00",null,null,null,null,null,null,frame2);
            frame4.set_separatesize("30,0,*");
            frame2.addChild(frame4.name, frame4);

            var frame5 = new ChildFrame("MdiFrame",null,null,null,null,null,null,"FrameBase::Form_Mdi.xfdl",frame4);
            frame5.set_showtitlebar("false");
            frame5.set_showstatusbar("false");
            frame4.addChild(frame5.name, frame5);
            frame5.set_formurl("FrameBase::Form_Mdi.xfdl");


            var frame6 = new FrameSet("WorkFrame",null,null,null,null,null,null,frame4);
            frame4.addChild(frame6.name, frame6);

            var frame7 = new ChildFrame("MainFrame",null,null,null,null,null,null,"",frame4);
            frame7.set_showtitlebar("false");
            frame4.addChild(frame7.name, frame7);
        };
        
        this.on_initEvent = function()
        {

        };
        
        // script Compiler
        this.registerScript("Application_Desktop.xadl", function() {
        this.av_MdiFrame = "";
        this.av_WorkFrame = "";

        this.Application_onload = function(obj, e)
        {
        	var objApp = nexacro.getApplication();
        	this.av_MdiFrame = objApp.mainframe.VFrameSet00.HFrameSet00.VFramset00.MdiFrame;
        	this.av_WorkFrame = objApp.mainframe.VFrameSet00.HFrameSet00.VFramset00.WorkFrame;
        }
        });
        this.checkLicense("");
        
        this.loadPreloadList();

        this.loadIncludeScript("Application_Desktop.xadl");
    };
}
)();
