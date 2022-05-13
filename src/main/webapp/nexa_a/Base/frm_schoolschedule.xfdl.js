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
            obj = new Div("Div00","196","335","584","376",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("1px solid");
            obj.set_background("gray");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","245","77","154","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","249","147","148","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_dateformat("yy-MM-dd ddd");
            obj.set_editformat("yy-MM-dd");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","251","211","146","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","141","79","86","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("제목");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","135","149","84","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("시작 날짜");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","135","216","62","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("종료 날짜");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_scheduleRegister","439","314","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("완료");
            this.Div00.addChild(obj.name, obj);

            obj = new Grid("Grid00","40","72","966","248",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_binddataset("ds_schedule");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"acNo\"/><Cell col=\"1\" text=\"title\"/><Cell col=\"2\" text=\"startDate\"/><Cell col=\"3\" text=\"endDate\"/></Band><Band id=\"body\"><Cell text=\"bind:acNo\"/><Cell col=\"1\" text=\"bind:title\"/><Cell col=\"2\" text=\"bind:startDate\"/><Cell col=\"3\" text=\"bind:endDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","50","10","120","50",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("Button00");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_schoolschedule.xfdl", function() {

        this.Div00_btn_scheduleRegister_onclick = function(obj,e)
        {
        	var title = this.Div00.form.Edit00.value;
        	var startDate = this.Div00.form.Calendar00.value;
        	var endDate = this.Div00.form.Calendar01.value;



        	this.transaction(
        	"tr_scheduleRegister"
        	,"SnuURL::schedule/register.snu"
        	,""
        	,""
        	,"title=" + title + " startDate="+ startDate + " endDate=" + endDate +""
        	,"fn_callback_schedule"


        	)

        }

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
        		this.alert("조회 성공:" + this.ds_schedule.getCount() + "건");
        		}
        		this.alert("조회 실패");


        		}



        };


        this.Button00_onclick = function(obj,e)
        {
        	this.transaction(
        		"tr_selectSchedule"
        		,"SnuURL::schedule/list.snu"
        		,""
        		,"ds_shcedule=out_schedule"
        		,""
        		,"fn_callback_schedule"
        	);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_schoolschedule_onload,this);
            this.Div00.form.Static01.addEventHandler("onclick",this.Static01_onclick,this);
            this.Div00.form.btn_scheduleRegister.addEventHandler("onclick",this.Div00_btn_scheduleRegister_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("frm_schoolschedule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
