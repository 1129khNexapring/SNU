(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_schoolschedule");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_schedule", this);
            obj._setContents("<ColumnInfo><Column id=\"acNo\" type=\"INT\" size=\"256\"/><Column id=\"aCode\" type=\"STRING\" size=\"256\"/><Column id=\"title\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","40","72","966","248",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_schedule");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"일정번호\"/><Cell col=\"1\" text=\"일정내용\"/><Cell col=\"2\" text=\"시작일\"/><Cell col=\"3\" text=\"종료일\"/></Band><Band id=\"body\"><Cell text=\"bind:acNo\"/><Cell col=\"1\" text=\"bind:title\"/><Cell col=\"2\" text=\"bind:startDate\"/><Cell col=\"3\" text=\"bind:endDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_insertSchedule","640","15","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("일정추가");
            this.addChild(obj.name, obj);

            obj = new Button("btn_modifySchedule","770","15","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("btn_deleteSchedule","900","15","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("일정삭제");
            this.addChild(obj.name, obj);

            obj = new Div("Div00","50","374","955","168",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("Div00");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Calendar("Calendar_start","439","77","140","39",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_editformat("yy-MM-dd");
            obj.set_dateformat("yy-MM-dd ");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar_end","674","77","190","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_dateformat("yy-MM-dd ");
            obj.set_editformat("yy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","19","65","80","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("제목");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","339","66","60","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("시작날짜");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","599","66","60","60",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("종료날짜");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","121","76","153","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div00.form.Calendar_start","value","ds_schedule","startDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.Calendar_end","value","ds_schedule","endDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.Edit00","value","ds_schedule","title");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_schoolschedule.xfdl", function() {



        	this.fn_callback_schedule = function(sId, nErrorCode, sErrorMsg)
        {
        	if(sId == "tr_scheduleRegister")
        	{
        		if(nErrorCode < 0)
        		{""
        			this.alert("일정 등록 실패" + sErrorMsg);
        		}
        		this.alert("일정 등록 성공");
        	}


        if(sId == "tr_selectSchedule")
        	{
        	 if(nErrorCode < 0)
        	 {
        		this.alert("조회 실패");
        		}
        		this.alert("조회 성공:" + this.ds_schedule.getCount() + "건");


        		}

        		if(sId == "tr_modifySchedule") {
        		if(nErrorCode < 0 )
        			{
        				this.alert("일정 수정 실패");

        			}
        			this.alert("일정 수정 성공");

        		}




        };



        this.btn_insertSchedule_onclick = function(obj,e)
        {

        	var sLeft = system.clientToScreenX(this,10);
        	var sTop  = system.clientToScreenY(this,10);
        	var objChild = new ChildFrame("popinsertSchedule", sLeft, sTop, 300, 300);
        	objChild.set_formurl("Popup::insertSchedule.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("normal");
        	objChild.showModal(this.getOwnerFrame(), {}, this, "fn_popwriteCallback");
        };





        this.btn_modifySchedule_onclick = function(obj,e)
        {

        	var name = "학사스케줄 수정";
        	this.transaction(
        	"tr_modifySchedule"
        	,"SnuURL::schedule/modify.snu"
        	,"in_schedule=ds_schedule:U"
        	,""
        	,"in_var1=" + nexacro.wrapQuote(name)
        	,"fn_callback_schedule"
        	)
        };

        this.btn_deleteSchedule_onclick = function(obj,e)
        {
        	this.ds_schedule.deleteRow(this.ds_schedule.rowposition);
        };

        this.frm_schoolschedule_onload = function(obj,e)
        {
        	this.transaction(
        		"tr_selectSchedule"
        		,"SnuURL::schedule/list.snu"
        		,""
        		,"ds_schedule=out_schedule"
        		,""
        		,"fn_callback_schedule"
        	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_schoolschedule_onload,this);
            this.btn_insertSchedule.addEventHandler("onclick",this.btn_insertSchedule_onclick,this);
            this.btn_modifySchedule.addEventHandler("onclick",this.btn_modifySchedule_onclick,this);
            this.btn_deleteSchedule.addEventHandler("onclick",this.btn_deleteSchedule_onclick,this);
            this.Div00.form.Static00.addEventHandler("onclick",this.Div00_Static00_onclick,this);
        };
        this.loadIncludeScript("frm_schoolschedule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
