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

    };
}
)();
