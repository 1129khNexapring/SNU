(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_mypage");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","11","15","859","475",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_background("#ffffff");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","41","60","119","102",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("ImageViewer00");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","220","30","78","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("학번");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00","220","86","78","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("성명");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01","220","142","78","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("소속");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","268","30","180","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00","268","88","180","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01","268","144","180","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_02","548","30","78","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            obj.set_text("전화번호");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","548","88","78","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            obj.set_text("주소");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00_01_00","548","142","78","46",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            obj.set_text("이메일");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_02","618","30","180","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("10");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_00_00","618","88","180","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("11");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00_01_00","618","144","180","47",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("12");
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
            this.Div00.form.ImageViewer00.addEventHandler("onclick",this.Div00_ImageViewer00_onclick,this);
        };
        this.loadIncludeScript("frm_mypage.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
