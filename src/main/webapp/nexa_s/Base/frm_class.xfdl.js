(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_class");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsCalendar", this);
            obj._setContents("<ColumnInfo><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("semester", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"semester\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"semester\">1학기</Col><Col id=\"code\">1</Col></Row><Row><Col id=\"semester\">2학기</Col><Col id=\"code\">2</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsDay", this);
            obj._setContents("<ColumnInfo><Column id=\"date\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","117","160","433","303",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("");
            obj.set_border("1px solid black, 0px solid black, 1px solid black, 1px solid black");
            this.addChild(obj.name, obj);

            obj = new ListView("ListView00","15","36","408","253",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_binddataset("dsCalendar");
            obj.set_scrollbartype("none");
            obj._setContents("<Formats><Format id=\"default\"><Band id=\"body\" width=\"100%\" height=\"63\"><Cell id=\"Cell00\" left=\"10\" top=\"5\" width=\"120\" height=\"24\" text=\"일시\"/><Cell id=\"Cell01\" left=\"135\" top=\"5\" width=\"180\" height=\"24\" text=\"bind:date\"/><Cell id=\"Cell02\" left=\"10\" top=\"34\" width=\"120\" height=\"24\" text=\"내용\"/><Cell id=\"Cell03\" left=\"135\" top=\"34\" width=\"180\" height=\"24\" text=\"bind:title\"/></Band></Format></Formats>");
            this.Div00.addChild(obj.name, obj);

            obj = new Div("Div01","550","160","433","303",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid black, 1px solid black, 1px solid black, 0px solid black");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","6","36","408","253",null,null,null,null,null,null,this.Div01.form);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid black");
            this.Div01.addChild(obj.name, obj);

            obj = new Edit("Edit00","13","78","280","34",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("0");
            obj.set_displaynulltext("학번을 입력해주세요");
            obj.set_textAlign("center");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","13","118","280","34",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("1");
            obj.set_displaynulltext("성함을 입력해주세요");
            obj.set_textAlign("center");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","13","38","70","34",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("2");
            obj.set_textAlign("left");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Combo("Combo00","88","38","113","34",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("3");
            obj.set_innerdataset("semester");
            obj.set_datacolumn("semester");
            obj.set_codecolumn("code");
            obj.set_text("");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Button("btn_goCouresRegister","303","78","92","74",null,null,null,null,null,null,this.Div01.form.Div00.form);
            obj.set_taborder("4");
            obj.set_text("수강신청");
            this.Div01.form.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","138","167","375","23",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("2022년 수강신청 일정");
            obj.set_textAlign("left");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
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
        this.registerScript("frm_class.xfdl", function() {
        //현재날짜 가져오기
        var d = new Date();
        var  today = ((d.getMonth()+1)+"").padLeft(2,'0')+""+(""+d.getDate()).padLeft(2,'0');
        //수강관련 일정불러오기
        this.frm_class_onload = function(obj,e)
        {
        	this.transaction(
        	"tr_classlist"
        	,"SnuURL::calendar/list.snu"
        	,""
        	,"dsCalendar=outCalendar"
        	,""
        	,"fn_callback_class"
        	)
        	var d = new Date();
        	var year = d.getYear();
        	this.Div01.form.Div00.form.Edit02.set_value(year);
        };

        this.fn_popLecture = function(sId, sReturn)
        {
        	if(sId == "popEnrollLecture")
        	{

        	}
        }

        this.fn_callback_class = function(sId, nErrorCode, sErrorMsg)
        {
        	if(sId == "tr_classlist")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("스케줄 조회에 실패했습니다");
        		}
        	}
        	if(sId == "tr_checkAndgo")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert(sErrorMsg);
        		}
        		//이제 해당 학기에 관한 날짜를 가져왔을 것
        		var day = this.dsDay.getColumn(0,"date"); //20220520
        		var courseRegisterDay = day.substr(4); //0520
        		//현재날짜 가져오기
        		//this.alert(today);
        		if(today == courseRegisterDay)
        		{
        			var nLeft = system.clientToScreenX(this,10);
        			var nTop  = system.clientToScreenY(this,10);
        			var objParam = {semester : this.Div01.form.Div00.form.Combo00.value }
        			var objChild = new ChildFrame("popEnrollLecture", nLeft, nTop, 700, 560);
        			objChild.set_formurl("Base::EnrollLecture.xfdl");
        			objChild.set_openalign("center middle");
        			objChild.set_dragmovetype("normal");
        			objChild.showModal(this.getOwnerFrame(), objParam, this, "fn_popLecture");
        		}
        		if(today != courseRegisterDay)
        		{
        			this.alert("수강신청 가능날짜가 아닙니다");
        		}
        	}
        }

        //var d = new Date();
        //var today = (d.getYear() + "" + ((d.getMonth()+1)+"").padLeft(2,'0')+""+(""+d.getDate()).padLeft(2,'0'));
        //날짜가져오기
        // 학기 구분 가져오는 거 this.alert(this.Div01.form.Div00.form.Combo00.value);
        //수강신청 버튼 클릭
        //1. 학번과 이름을 조회
        //2. 오늘날짜와 수강신청날짜가 부합하는지를 체크
        // 트랜잭션할 때 1번 정합성여부와 수강신청 날짜 정합성 여부를 동시에 판단.
        this.Div01_Div00_btn_goCouresRegister_onclick = function(obj,e)
        {
        	var sCode = this.Div01.form.Div00.form.Edit00.value;
        	var sName = this.Div01.form.Div00.form.Edit01.value;
        	var semester = this.Div01.form.Div00.form.Combo00.value;
        	this.transaction(
        	"tr_checkAndgo"
        	,"SnuURL::check/registerCourse.snu"
        	,""
        	,"dsDay=outCalendar"
        	,"sCode="+sCode+" sName="+sName+" semester="+semester+""
        	,"fn_callback_class"
        	)
        };

        this.Button00_onclick = function(obj,e)
        {
        	var b = this.dsHor.getColumn(0,"date");
        	var c = b.substr(4);
        	this.alert(c);//0520
        	var d = new Date();
        	var  today = ((d.getMonth()+1)+"").padLeft(2,'0')+""+(""+d.getDate()).padLeft(2,'0');
        	this.alert(today);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_class_onload,this);
            this.Div01.form.Div00.form.btn_goCouresRegister.addEventHandler("onclick",this.Div01_Div00_btn_goCouresRegister_onclick,this);
        };
        this.loadIncludeScript("frm_class.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
