(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_attendance");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_attInfo", this);
            obj._setContents("<ColumnInfo><Column id=\"이수구분\" type=\"STRING\" size=\"256\"/><Column id=\"교과목명\" type=\"STRING\" size=\"256\"/><Column id=\"학점\" type=\"STRING\" size=\"256\"/><Column id=\"이론\" type=\"STRING\" size=\"256\"/><Column id=\"실습\" type=\"STRING\" size=\"256\"/><Column id=\"수강인원\" type=\"STRING\" size=\"256\"/><Column id=\"출결제출\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_attList", this);
            obj._setContents("<ColumnInfo><Column id=\"학과\" type=\"STRING\" size=\"256\"/><Column id=\"학번\" type=\"STRING\" size=\"256\"/><Column id=\"이름\" type=\"STRING\" size=\"256\"/><Column id=\"학년\" type=\"STRING\" size=\"256\"/><Column id=\"출결사항\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("st_year","63","48","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("년도");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_year","128","48","70","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_borderRadius("4px");
            obj.set_text("2021");
            this.addChild(obj.name, obj);

            obj = new Combo("cb_year00","208","48","80","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_borderRadius("4px");
            obj.set_text("1학기");
            this.addChild(obj.name, obj);

            obj = new Static("static_00","83","93","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("담당 교과목");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","63","135","987","105",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_binddataset("ds_attList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이수구분\"/><Cell col=\"1\" text=\"교과목명\"/><Cell col=\"2\" text=\"학점\"/><Cell col=\"3\" text=\"이론\"/><Cell col=\"4\" text=\"실습\"/><Cell col=\"5\" text=\"수강인원\"/><Cell col=\"6\" text=\"출결제출\"/></Band><Band id=\"body\"><Cell text=\"bind:이수구분\"/><Cell col=\"1\" text=\"bind:교과목명\"/><Cell col=\"2\" text=\"bind:학점\"/><Cell col=\"3\" text=\"bind:이론\"/><Cell col=\"4\" text=\"bind:실습\"/><Cell col=\"5\" text=\"bind:수강인원\"/><Cell col=\"6\" text=\"bind:출결제출\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","65","95","18","30",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text(">");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Static("static_00_00","83","250","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("출석부");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","65","252","18","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text(">");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","63","295","407","270",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_binddataset("ds_attList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학과\"/><Cell col=\"1\" text=\"학번\"/><Cell col=\"2\" text=\"이름\"/><Cell col=\"3\" text=\"학년\"/><Cell col=\"4\" text=\"출결사항\"/></Band><Band id=\"body\"><Cell text=\"bind:학과\"/><Cell col=\"1\" text=\"bind:학번\"/><Cell col=\"2\" text=\"bind:이름\"/><Cell col=\"3\" text=\"bind:학년\"/><Cell col=\"4\" text=\"bind:출결사항\" displaytype=\"combocontrol\" edittype=\"combo\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Static("static_00_00_00","546","333","120","35",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("수강신청학생");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            obj.set_font("normal 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","528","335","18","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text(">");
            obj.set_font("bold 12px/normal \"Gulim\"");
            this.addChild(obj.name, obj);

            obj = new ImageViewer("ImageViewer00","548","378","120","120",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("");
            obj.set_background("url(\'..\\..\\..\\..\\..\\..\\Desktop\\99EA8C3359DC92641A.png\') no-repeat center center /contain");
            obj.set_borderRadius("5px");
            this.addChild(obj.name, obj);

            obj = new Static("st_year00","703","388","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_text("학번");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("st_year00_00","703","418","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("성명");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("st_year00_01","703","448","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_text("학과");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_boardNo","773","388","145","30",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_boardNo00","773","418","145","30",null,null,null,null,null,null,this);
            obj.set_taborder("16");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_boardNo01","773","448","145","30",null,null,null,null,null,null,this);
            obj.set_taborder("17");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","980","558","56","25",null,null,null,null,null,null,this);
            obj.set_taborder("18");
            obj.set_text("닫기");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
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
        this.registerScript("frm_attendance.xfdl", function() {

        this.btn_close_onclick = function(obj,e)
        {
        	this.close("Base::frm_attendance.xfdl");
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.static_00_00.addEventHandler("onclick",this.static_00_00_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.static_00_00_00.addEventHandler("onclick",this.static_00_00_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("frm_attendance.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
