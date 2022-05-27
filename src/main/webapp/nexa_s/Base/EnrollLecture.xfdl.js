(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("EnrollLecture");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(700,560);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsLecture", this);
            obj._setContents("<ColumnInfo><Column id=\"lCode\" type=\"STRING\" size=\"256\"/><Column id=\"lType\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"lObjective\" type=\"STRING\" size=\"256\"/><Column id=\"lContents\" type=\"STRING\" size=\"256\"/><Column id=\"textbook\" type=\"STRING\" size=\"256\"/><Column id=\"lDays\" type=\"INT\" size=\"256\"/><Column id=\"credit\" type=\"INT\" size=\"256\"/><Column id=\"lYear\" type=\"INT\" size=\"256\"/><Column id=\"lSemester\" type=\"INT\" size=\"256\"/><Column id=\"lCapacity\" type=\"INT\" size=\"256\"/><Column id=\"lStatus\" type=\"STRING\" size=\"256\"/><Column id=\"pCode\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("courseRegister", this);
            obj._setContents("<ColumnInfo><Column id=\"lCode\" type=\"STRING\" size=\"256\"/><Column id=\"lType\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"credit\" type=\"INT\" size=\"256\"/><Column id=\"lCapacity\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsStudent", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/><Column id=\"sRrn\" type=\"STRING\" size=\"256\"/><Column id=\"sPassword\" type=\"STRING\" size=\"256\"/><Column id=\"sAddress\" type=\"STRING\" size=\"256\"/><Column id=\"sEmail\" type=\"STRING\" size=\"256\"/><Column id=\"sGender\" type=\"STRING\" size=\"256\"/><Column id=\"sPhone\" type=\"STRING\" size=\"256\"/><Column id=\"sAddmission\" type=\"STRING\" size=\"256\"/><Column id=\"absenceYN\" type=\"STRING\" size=\"256\"/><Column id=\"transferYN\" type=\"STRING\" size=\"256\"/><Column id=\"dCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","71","66","579","184",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsLecture");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"68\"/><Column size=\"290\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"강의코드\"/><Cell col=\"1\" text=\"과목구분\"/><Cell col=\"2\" text=\"강의명\"/><Cell col=\"3\" text=\"학점\"/><Cell col=\"4\" text=\"수강인원\"/></Band><Band id=\"body\"><Cell text=\"bind:lCode\"/><Cell col=\"1\" text=\"bind:lType\"/><Cell col=\"2\" text=\"bind:lName\"/><Cell col=\"3\" text=\"bind:credit\"/><Cell col=\"4\" text=\"bind:lCapacity\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","71","338","409","184",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("courseRegister");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"167\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"강의코드\"/><Cell col=\"1\" text=\"과목구분\"/><Cell col=\"2\" text=\"강의명\"/><Cell col=\"3\" text=\"학점\"/></Band><Band id=\"body\"><Cell text=\"bind:lCode\"/><Cell col=\"1\" text=\"bind:lType\"/><Cell col=\"2\" text=\"bind:lName\"/><Cell col=\"3\" text=\"bind:credit\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;credit&quot;)\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_registerCourse","492","496","94","25",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("수강신청");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",700,560,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("EnrollLecture.xfdl", function() {
        //폼이 로드되면 수강가능한, 즉 L_STATUS = Y인 강의들을 트랜잭션해옴
        var sCode = nexacro.getEnvironmentVariable("ev_Val");
        this.EnrollLecture_onload = function(obj,e)
        {
        	this.transaction(
        	"tr_lectureList"
        	,"SnuURL::canEnrollLecture/list.snu"
        	,""
        	,"dsLecture=outLecture dsStudent=outStudent"
        	,"in_Var1="+sCode+""
        	,"fn_callback_el"
        	)
        };

        this.fn_callback_el = function(sId, nErrorCode, sErrorMsg)
        {
        	if(sId == "tr_lectureList")
        	{

        	}
        	if(sId == "tr_courseRegister")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert(sErrorMsg);
        		}
        		this.alert(sErrorMsg);
        	}
        }
        //트랜잭션을 통해 받아온 강의리스트 중에 cell을 더블클릭하면 confirm창?
        //cell을 클릭했을 때 학생의 학부코드와 강의의 학부코드가 같은지도 따져봐야함
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var rtn = this.confirm("장바구니에 담겠습니까?", "수강신청 창");
        	var sDept  = this.dsStudent.getColumn(0,"dCode"); // 학생소속 부서코드
        	var lDept  = this.dsLecture.getColumn(e.row,"dCode"); //강의 부서코드
        	var lType  = this.dsLecture.getColumn(e.row,"lType"); //과목구분
        	var lCode  = this.dsLecture.getColumn(e.row,"lCode");
        	var lName  = this.dsLecture.getColumn(e.row,"lName");
        	var credit = this.dsLecture.getColumn(e.row,"credit");
        	var lCapacity = this.dsLecture.getColumn(e.row,"lCapacity");
        	if(rtn = true)
        	{

        		if(lType == "전공필수")
        		{
        			if(sDept != lDept)
        			{
        				this.alert("해당 강의는 수강하실 수 없습니다!");
        			}else {
        				if(lCapacity == 0)
        				{
        					this.alert("해당강의는 마감됐습니다!");
        				}else {
        				var nRow = this.courseRegister.addRow();
        				this.courseRegister.setColumn(nRow,"lCode",lCode);
        				this.courseRegister.setColumn(nRow,"lType",lType);
        				this.courseRegister.setColumn(nRow,"lName",lName);
        				this.courseRegister.setColumn(nRow,"credit",credit);
        				this.courseRegister.setColumn(nRow,"lCapacity",lCapacity);
        				}
        			}
        		}else if(lType == "전공선택") {
        			if(sDept != lDept)
        			{
        				this.alert("해당 강의는 수강하실 수 없습니다!");
        			}else {
        				if(lCapacity == 0)
        				{
        					this.alert("해당강의는 마감됐습니다!");
        				}else {
        				var nRow = this.courseRegister.addRow();
        				this.courseRegister.setColumn(nRow,"lCode",lCode);
        				this.courseRegister.setColumn(nRow,"lType",lType);
        				this.courseRegister.setColumn(nRow,"lName",lName);
        				this.courseRegister.setColumn(nRow,"credit",credit);
        				this.courseRegister.setColumn(nRow,"lCapacity",lCapacity);
        				}
        			}
        		}else {
        				if(lCapacity == 0)
        				{
        					this.alert("해당강의는 마감됐습니다!");
        				}else {
        				var nRow = this.courseRegister.addRow();
        				this.courseRegister.setColumn(nRow,"lCode",lCode);
        				this.courseRegister.setColumn(nRow,"lType",lType);
        				this.courseRegister.setColumn(nRow,"lName",lName);
        				this.courseRegister.setColumn(nRow,"credit",credit);
        				this.courseRegister.setColumn(nRow,"lCapacity",lCapacity);
        				}
        		}
        	}
        };
        //cell더블클릭하면 해당 강의를 데이터셋에서 제거 하고 confirm창
        this.Grid01_oncelldblclick = function(obj,e)
        {
        	var rtn = this.confirm("해당 강의를 장바구니에서 제거하시겠습니까?", "수강신청 창");
        	if(rtn = true)
        	{
        		this.courseRegister.deleteRow(e.row);
        	}
        };

        //이번에 트랜잭션할 때는 데이터셋으로 해야함
        //등록하려고 할 때, 학부 check, 남은 강의인원수 check
        this.btn_registerCourse_onclick = function(obj,e)
        {
        	var rtn = this.confirm("수강신청을 완료하시겠습니까?", "수강신청 창");
        	if(rtn = true)
        	{
        		var minCredit = 12;
        		var maxCredit = 21;
        		var totalCredit = this.Grid01.getSummValue(3);
        		if (totalCredit < minCredit)
        		{
        			this.alert("최소학점은 "+minCredit+"학점입니다. 기준에 맞춰서 수강등록해주세요");
        		}
        		if (totalCredit > maxCredit)
        		{
        			this.alert("최대학점은 "+maxCredit+"학점입니다. 기준에 맞춰서 수강등록해주세요");
        		}else if(totalCredit >= minCredit && totalCredit <= maxCredit)
        		{
        			var session = this.parent.semester;
        			var sCode 	= nexacro.getEnvironmentVariable("ev_Val");
        			var d = new Date();
        			var year = d.getYear();
        			this.transaction(
        			"tr_courseRegister"
        			,"SnuURL::course/register.snu"
        			,"in_courseRegister=courseRegister"
        			,""
        			,"session="+session+" sCode="+sCode+" year="+year+""
        			,"fn_callback_el"
        			)

        		}
        	}
        };
        //학부check 강의 수 check확인하는 용도
        this.Button00_onclick = function(obj,e)
        {
        	var sDept = this.dsStudent.getColumn(0,"dCode");
        	this.alert(sDept);
        	var lDept = this.dsLecture.getColumn(e)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.EnrollLecture_onload,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Grid01.addEventHandler("oncelldblclick",this.Grid01_oncelldblclick,this);
            this.btn_registerCourse.addEventHandler("onclick",this.btn_registerCourse_onclick,this);
        };
        this.loadIncludeScript("EnrollLecture.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
