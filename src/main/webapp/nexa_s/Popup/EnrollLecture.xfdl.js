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
            obj._setContents("<ColumnInfo><Column id=\"lCode\" type=\"STRING\" size=\"256\"/><Column id=\"lType\" type=\"STRING\" size=\"256\"/><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"credit\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","71","66","579","184",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("dsLecture");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"62\"/><Column size=\"68\"/><Column size=\"290\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"강의코드\"/><Cell col=\"1\" text=\"과목구분\"/><Cell col=\"2\" text=\"강의명\"/><Cell col=\"3\" text=\"학점\"/><Cell col=\"4\" text=\"수강인원\"/></Band><Band id=\"body\"><Cell text=\"bind:lCode\"/><Cell col=\"1\" text=\"bind:lType\"/><Cell col=\"2\" text=\"bind:lName\"/><Cell col=\"3\" text=\"bind:credit\"/><Cell col=\"4\" text=\"bind:lCapacity\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","71","338","409","184",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("courseRegister");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"64\"/><Column size=\"73\"/><Column size=\"192\"/><Column size=\"78\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/><Row size=\"24\" band=\"summ\"/></Rows><Band id=\"head\"><Cell text=\"강의코드\"/><Cell col=\"1\" text=\"과목구분\"/><Cell col=\"2\" text=\"강의명\"/><Cell col=\"3\" text=\"학점\"/></Band><Band id=\"body\"><Cell text=\"bind:lCode\"/><Cell col=\"1\" text=\"bind:lType\"/><Cell col=\"2\" text=\"bind:lName\"/><Cell col=\"3\" text=\"bind:credit\"/></Band><Band id=\"summary\"><Cell/><Cell col=\"1\"/><Cell col=\"2\"/><Cell col=\"3\" text=\"expr:dataset.getSum(&quot;credit&quot;)\"/></Band></Format></Formats>");
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
        this.EnrollLecture_onload = function(obj,e)
        {
        	this.transaction(
        	"tr_lectureList"
        	,"SnuURL::canEnrollLecture/list.snu"
        	,""
        	,"dsLecture=outLecture"
        	,""
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
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var rtn = this.confirm("장바구니에 담겠습니까?", "수강신청 창");
        	if(rtn = true)
        	{
        		this.courseRegister.addRow();
        		//강의코드, 과목구분, 강의명, 학점 이렇게 받아야될 거 같다.
        		var lCode  = this.dsLecture.getColumn(e.row,"lCode");
        		var lType  = this.dsLecture.getColumn(e.row,"lType");
        		var lName  = this.dsLecture.getColumn(e.row,"lName");
        		var credit = this.dsLecture.getColumn(e.row,"credit");
        		this.courseRegister.setColumn(e.row,"lCode",lCode);
        		this.courseRegister.setColumn(e.row,"lType",lType);
        		this.courseRegister.setColumn(e.row,"lName",lName);
        		this.courseRegister.setColumn(e.row,"credit",credit);
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
        this.btn_registerCourse_onclick = function(obj,e)
        {
        	var rtn = this.confirm("수강신청을 완료하시겠습니까?", "수강신청 창");
        	if(rtn = true)
        	{
        		//최소학점12, 최대학점21 그 범위안에 있는지 체크
        		// 범위안에 있다면 트랜잭션
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
        			// 조건에 충족되니 모두 해당 데이터셋을 트랜잭션
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
