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

            obj = new Edit("Edit00","25","57","415","53",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","25","161","695","279",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button00","25","449","205","61",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button01","270","449","224","61",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("5");
            obj.set_text("수정");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("Button02","521","449","199","62",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
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

            obj = new Button("btn_bsInsert","556","463","144","45",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("3");
            obj.set_text("등록");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Edit("Edit00","22","55","473","55",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("4");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Edit("Edit01","25","152","710","293",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("5");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Edit("Edit02","521","31","201","50",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("6");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Edit("Edit03","520","97","202","54",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("7");
            this.PopupDiv01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","PopupDiv00.form.Edit00","value","ds_book","bsTitle");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","PopupDiv00.form.TextArea00","value","ds_book","bsContent");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","PopupDiv01.form.Edit00","value","ds_book","bsTitle");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","PopupDiv01.form.Edit01","value","ds_book","bsContent");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","PopupDiv01.form.Edit02","value","ds_book","bsDate");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","PopupDiv01.form.Edit03","value","ds_book","sCode");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_book.xfdl", function() {
        var sName = nexacro.getEnvironmentVariable("ev_Val1");
        var bsCode = nexacro.getEnvironmentVariable("ev_Val");
        this.out_var="";
         this.frm_book_onload = function(obj,e)
                {
                	this.transaction(
                		"tr_select"// 1.ID
                		,"tttUrl::book/list.snu"// 2.URL
                		,"" // 3.InDs : F->S jsp(I,U,D)
                		,"ds_book=out_book" // 4.OutDs : S->F jsp(SELECT)
                		,"" // 5.InVar : F->S(var)
                		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
                	)
                };

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
        	this.ds_book.addRow();
                	this.ds_book.setColumn(this.ds_book.rowposition, "bsDate", "20220426");
        			this.ds_book.setColumn(this.ds_book.rowposition, "sCode", bsCode);
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

        this.PopupDiv00_Button02_onclick = function(obj,e)
        {
        	this.ds_book.deleteRow(this.ds_book.rowposition);
                		var name = this.PopupDiv01.form.Edit00.value;
                	this.transaction(
                		"tr_register"
                		,"tttUrl::book/register.snu"
                		,"in_book=ds_book:U"
                		,""
                		,"inVar1="+nexacro.wrapQuote(name)
                		,"fn_callback_tran"
                	)
        			this.PopupDiv00.closePopup();
        			this.reload();
        };

        this.PopupDiv00_Button01_onclick = function(obj,e)
        {
        	var row = this.ds_book.rowposition;
        	var bScode = this.ds_book.getColumn(row, "sCode");
                this.transaction(
                	"tr_register"
                	,"tttUrl::book/register.snu"
                	,"in_book=ds_book:U"
                	,""
                	,"inVar1="
                	,"fn_callback_tran"
                )
        	this.PopupDiv00.closePopup();
        };

        this.PopupDiv00_Button00_onclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup();
        };

        this.PopupDiv01_Button00_onclick = function(obj,e)
        {
        	this.ds_book.deleteRow(this.ds_book.rowposition);
        	this.PopupDiv01.closePopup();
        };

        this.PopupDiv01_btn_bsInsert_onclick = function(obj,e)
        {

                	this.transaction(
                		"tr_register"
                		,"tttUrl::book/register.snu"
                		,"in_book=ds_book:U"
                		,""
                		,"inVar1="
                		,"fn_callback_tran"

               	)
        		this.PopupDiv01.closePopup();
        		this.reload();
        };

        this.PopupDiv01_onpopup = function(obj,e)
        {
        	this.PopupDiv01.form.Edit03.set_value(bsCode);
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_book_onload,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.btn_retrieve.addEventHandler("onclick",this.btn_retrieve_onclick,this);
            this.PopupDiv00.addEventHandler("onpopup",this.PopupDiv00_onpopup,this);
            this.PopupDiv00.form.Static00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv00.form.Static00_00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv00.form.Button00.addEventHandler("onclick",this.PopupDiv00_Button00_onclick,this);
            this.PopupDiv00.form.Button01.addEventHandler("onclick",this.PopupDiv00_Button01_onclick,this);
            this.PopupDiv00.form.Button02.addEventHandler("onclick",this.PopupDiv00_Button02_onclick,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.PopupDiv01.addEventHandler("onpopup",this.PopupDiv01_onpopup,this);
            this.PopupDiv01.form.Static00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv01.form.Static00_00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv01.form.Button00.addEventHandler("onclick",this.PopupDiv01_Button00_onclick,this);
            this.PopupDiv01.form.btn_bsInsert.addEventHandler("onclick",this.PopupDiv01_btn_bsInsert_onclick,this);
            this.PopupDiv01.form.Edit00.addEventHandler("onchanged",this.PopupDiv01_Edit00_onchanged,this);
        };
        this.loadIncludeScript("frm_book.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
