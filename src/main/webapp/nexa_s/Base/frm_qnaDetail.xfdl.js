(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_qnaDetail");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,510);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","12","13","860","424",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("2px double");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","5","4","152","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("No");
            obj.set_border("1px solid black");
            obj.set_background("#efefef");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","5","51","152","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("작성자");
            obj.set_border("1px solid black");
            obj.set_background("#efefef");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","5","98","152","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("제목");
            obj.set_border("1px solid black");
            obj.set_background("#efefef");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","5","145","152","270",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("내용");
            obj.set_border("1px solid black");
            obj.set_background("#efefef");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("ta_content","162","145","689","270",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_border("1px solid black");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edit_title","162","98","689","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_border("1px solid black");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edit_writer","162","51","259","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            obj.set_border("1px solid black");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edit_no","162","4","259","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_border("1px solid black");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_03","425","4","156","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("조회수");
            obj.set_border("1px solid black");
            obj.set_background("#efefef");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","425","51","156","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("작성일");
            obj.set_border("1px solid black");
            obj.set_background("#efefef");
            obj.set_textAlign("center");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edit_count","586","4","265","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            obj.set_border("1px solid black");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edit_date","586","51","265","45",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            obj.set_border("1px solid black");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("Button00","753","442","119","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("목록으로");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,510,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_qnaDetail.xfdl", function() {
        this.frm_qnaDetail_onload = function(obj,e)
        {
        	this.Div00.form.edit_no.set_value(this.parent.qnaNo);
        	this.Div00.form.edit_count.set_value(this.parent.qnaCount);
        	this.Div00.form.edit_date.set_value(this.parent.qnaDate);
        	this.Div00.form.edit_writer.set_value(this.parent.qsCode);
        	this.Div00.form.edit_title.set_value(this.parent.qnaTitle);
        	this.Div00.form.ta_content.set_value(this.parent.qnaContent);
        };

        this.Button00_onclick = function(obj,e)
        {
        	this.close();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_qnaDetail_onload,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("frm_qnaDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
