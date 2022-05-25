(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("insertSchedule");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,480);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","20","20","440","402",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Button("btn_scheduleRegister","310","332","115","52",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("완료");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","128","57","169","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","129","156","166","44",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","129","249","163","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","42","67","55","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("일정제목");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","46","164","56","27",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("시작일");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","46","259","61","20",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("종료일");
            this.Div00.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,480,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("insertSchedule.xfdl", function() {
        //스케줄 등록
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
                	,"title=" + nexacro.wrapQuote(title) + " startDate="+ startDate + " endDate=" + endDate +""
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

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.btn_scheduleRegister.addEventHandler("onclick",this.Div00_btn_scheduleRegister_onclick,this);
            this.Div00.form.Static02.addEventHandler("onclick",this.Div00_Static02_onclick,this);
        };
        this.loadIncludeScript("insertSchedule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
