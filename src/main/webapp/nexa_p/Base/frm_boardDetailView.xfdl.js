(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_boardDetailView");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,850);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00","340","130","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("No");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_boardNo","395","130","145","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_boardCount","595","130","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_boardWriter","395","160","145","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_boardWriteDate","595","160","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","475","40","190","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("1번 게시글");
            obj.set_font("normal 25pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_boardTitle","395","190","360","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","340","160","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("작성자");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","340","190","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("제목");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","540","130","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회수");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","540","160","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("작성일");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","340","220","55","270",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("내용");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_boardContent","395","220","360","270",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_file","380","500","350","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_commentSubmit","517","650","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("댓글등록");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_comment","345","565","405","65",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update","550","98","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_text("수정하기");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_back","690","98","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_text("이전으로");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Button("btn_remove","620","98","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("삭제하기");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,850,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_boardDetailView.xfdl", function() {

        this.btn_back_onclick = function(obj,e)
        {
        	this.go("Base::frm_board.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static04.addEventHandler("onclick",this.Static04_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_commentSubmit.addEventHandler("onclick",this.btn_commentSubmit_onclick,this);
            this.btn_back.addEventHandler("onclick",this.btn_back_onclick,this);
        };
        this.loadIncludeScript("frm_boardDetailView.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
