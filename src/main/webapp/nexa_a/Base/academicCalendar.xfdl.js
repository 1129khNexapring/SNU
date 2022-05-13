(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("academicCalendar");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","126","7","504","426",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","223","115","154","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar00","227","185","148","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Calendar("Calendar01","229","249","146","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","119","117","86","38",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("제목");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","113","187","84","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("시작 날짜");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","113","254","62","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("종료 날짜");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","377","365","120","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_text("완료");
            this.Div00.addChild(obj.name, obj);
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

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Div00.form.Static01.addEventHandler("onclick",this.Static01_onclick,this);
        };
        this.loadIncludeScript("academicCalendar.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
