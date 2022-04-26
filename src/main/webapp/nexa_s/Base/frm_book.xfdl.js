(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_book");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_book", this);
            obj._setContents("<ColumnInfo><Column id=\"bsNo\" type=\"INT\" size=\"256\"/><Column id=\"bsTitle\" type=\"STRING\" size=\"256\"/><Column id=\"bsContent\" type=\"STRING\" size=\"256\"/><Column id=\"bsDate\" type=\"STRING\" size=\"256\"/><Column id=\"bsStatus\" type=\"STRING\" size=\"256\"/><Column id=\"bsCount\" type=\"INT\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("Dataset00", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","11","60","1061","560",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_book");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제목\"/><Cell col=\"1\" text=\"작성일\"/><Cell col=\"2\" text=\"작성자\"/></Band><Band id=\"body\"><Cell text=\"bind:bsTitle\"/><Cell col=\"1\" text=\"bind:bsDate\"/><Cell col=\"2\" text=\"bind:sCode\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","10","14","123","38",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_retrieve","137","13","46","39",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("조회");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00","960","12","110","40",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("최신순");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv00","170","120","730","520",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_background("#fefdf0");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","23","20","87","40",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static00_00","23","110","87","40",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("1");
            obj.set_text("내용");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static01","25","57","581","51",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            obj.set_text("Static01");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Static("Static02","22","157","650","331",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            obj.set_text("Static02");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button00","956","621","115","44",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("글쓰기");
            obj.set_background("#aea3ef");
            obj.set_font("normal 700 13pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("PopupDiv01","920","120","750","520",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv01");
            obj.set_visible("false");
            obj.set_color("#ffffff");
            obj.set_background("#b8f7f9");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","23","20","87","40",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Static("Static00_00","23","110","87","40",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("1");
            obj.set_text("내용");
            obj.set_font("normal 700 15pt/normal \"Arial\"");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Button("Button00","46","465","144","41",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Button("Button01","556","463","144","45",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("3");
            obj.set_text("등록");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Edit("Edit00","22","55","473","55",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("4");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Edit("Edit01","25","152","710","293",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("5");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Edit("Edit01","71","215","91","75",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","75","331","90","61",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_text("Button01");
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
        this.registerScript("frm_book.xfdl", function() {
        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_select")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("조회 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert("조회 성공 : " + this.ds_book.getRowCount() + "건");
        	}
        }

        this.btn_retrieve_onclick = function(obj,e)
        {
        	this.transaction(
        		"tr_select"// 1.ID
        		,"tttUrl::book/list.snu"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_book=out_book" // 4.OutDs : S->F jsp(SELECT)
        		,"" // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };

        this.Grid00_oncelldblclick = function(obj,e)
        {

        	var x=170;
        	var y=-0;
        	this.PopupDiv00.trackPopupByComponent(obj, x, y);
        };


        this.PopupDiv00_onpopup = function(obj,e)
        {
        	var row = this.ds_book.rowposition;

        	var sTitle = this.ds_book.getColumn(row, "bsTitle");
        	var sContent = this.ds_book.getColumn(row, "bsContent");

        	this.PopupDiv00.form.Static01.set_text(sTitle);
        	this.PopupDiv00.form.Static02.set_text(sContent);
        };

        this.Button00_onclick = function(obj,e)
        {
        	var x= -200;
        	var y=- 100;
        	this.PopupDiv01.trackPopupByComponent(obj, x, y);
        };



        // this.PopupDiv01_Button01_onclick = function(obj:nexacro.Button,e:nexacro.ClickEventInfo)
        // {
        // // 	this.ds_book.setColumn(this.ds_book.rowposition, "bsDate", "20220425");
        //
        // 	this.transaction(
        // 		"tr_insert"// 1.ID
        // 		,"tttUrl::book/register.snu"// 2.URL
        // 		,"in_book=ds_book:U" // 3.InDs : F->S jsp(I,U,D)
        // 		,"" // 4.OutDs : S->F jsp(SELECT)
        // 		,"" // 5.InVar : F->S(var)
        // 		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        // 	);
        // };




        this.PopupDiv01_Button01_onclick = function(obj,e)
        {
        	var bsTitle = this.PopupDiv01.form.Edit00.value;
        	var bsContent = this.PopupDiv01.form.Edit01.value;
        	this.alert(bsTitle);
        	this.transaction(
        		"tr_register"
        		,"tttUrl::book/register.snu"
        		,""
        		,""
        		,"inVar1=bsTitle inVar2=bsContent"
        		,"fn_callback_tran"
        	)
        };


        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.PopupDiv00.addEventHandler("onpopup",this.PopupDiv00_onpopup,this);
            this.PopupDiv00.form.Static00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv00.form.Static00_00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv00.form.Static01.addEventHandler("onclick",this.PopupDiv00_Static01_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.PopupDiv01.form.Static00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv01.form.Static00_00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv01.form.Button01.addEventHandler("onclick",this.PopupDiv01_Button01_onclick,this);
            this.PopupDiv01.form.Edit00.addEventHandler("onchanged",this.PopupDiv01_Edit00_onchanged,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
        };
        this.loadIncludeScript("frm_book.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
