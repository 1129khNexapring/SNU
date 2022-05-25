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


            obj = new Dataset("ds_student", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"sName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"sCode\">S001</Col><Col id=\"sName\">김치곤</Col></Row><Row><Col id=\"sCode\">S002</Col><Col id=\"sName\">윤석중</Col></Row><Row><Col id=\"sCode\">S005</Col><Col id=\"sName\">김추자</Col></Row><Row><Col id=\"sCode\">S119</Col><Col id=\"sName\">권다현</Col></Row><Row><Col id=\"sCode\">S006</Col><Col id=\"sName\">홍록기</Col></Row><Row><Col id=\"sCode\">S030</Col><Col id=\"sName\">김철수</Col></Row><Row><Col id=\"sCode\">S031</Col><Col id=\"sName\">박수학</Col></Row><Row><Col id=\"sCode\">S032</Col><Col id=\"sName\">최영희</Col></Row><Row><Col id=\"sCode\">S034</Col><Col id=\"sName\">유진수</Col></Row><Row><Col id=\"sCode\">S033</Col><Col id=\"sName\">이박수</Col></Row><Row><Col id=\"sCode\">S035</Col><Col id=\"sName\">김영순</Col></Row><Row><Col id=\"sCode\">S038</Col><Col id=\"sName\">이해성</Col></Row><Row><Col id=\"sCode\">S037</Col><Col id=\"sName\">박정석</Col></Row><Row><Col id=\"sCode\">S036</Col><Col id=\"sName\">정성수</Col></Row><Row><Col id=\"sCode\">S040</Col><Col id=\"sName\">권성열</Col></Row><Row><Col id=\"sCode\">S041</Col><Col id=\"sName\">정성수</Col></Row><Row><Col id=\"sCode\">S039</Col><Col id=\"sName\">정주희</Col></Row><Row><Col id=\"sCode\">S060</Col><Col id=\"sName\">김성현</Col></Row><Row><Col id=\"sCode\">S061</Col><Col id=\"sName\">이민수</Col></Row><Row><Col id=\"sCode\">S065</Col><Col id=\"sName\">오현수</Col></Row><Row><Col id=\"sCode\">S053</Col><Col id=\"sName\">박수연</Col></Row><Row><Col id=\"sCode\">S050</Col><Col id=\"sName\">홍길동</Col></Row><Row><Col id=\"sCode\">S051</Col><Col id=\"sName\">김민수</Col></Row><Row><Col id=\"sCode\">S055</Col><Col id=\"sName\">이민수</Col></Row><Row><Col id=\"sCode\">S054</Col><Col id=\"sName\">김재진</Col></Row><Row><Col id=\"sCode\">S052</Col><Col id=\"sName\">이수정</Col></Row><Row/><Row/><Row/><Row/><Row/><Row/><Row/><Row/></Rows>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","11","60","1061","560",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_book");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"제목\"/><Cell col=\"1\" text=\"작성일\"/><Cell col=\"2\" text=\"작성자\"/></Band><Band id=\"body\"><Cell text=\"bind:bsTitle\"/><Cell col=\"1\" text=\"bind:bsDate\"/><Cell col=\"2\" text=\"bind:sCode\" displaytype=\"combotext\" combodataset=\"ds_student\" combocodecol=\"sCode\" combodatacol=\"sName\"/></Band></Format></Formats>");
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
            obj.set_border("2px solid black");
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

            obj = new Edit("edit_title","25","57","415","53",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("2");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new TextArea("text_content","25","161","695","279",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("3");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("btn_close","315","448","100","31",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("4");
            obj.set_text("취소");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("btn_update","470","450","100","31",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("5");
            obj.set_text("수정");
            obj.set_visible("false");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("btn_delete","620","450","100","32",null,null,null,null,null,null,this.PopupDiv00.form);
            obj.set_taborder("6");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.PopupDiv00.addChild(obj.name, obj);

            obj = new Button("btn_write","956","621","115","44",null,null,null,null,null,null,this);
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

            obj = new Button("btn_writeclose","418","457","144","41",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Button("btn_bsInsert","591","455","144","45",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("3");
            obj.set_text("등록");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Edit("edit_newtitle","22","55","473","55",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("4");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Edit("edit_newtext","25","152","710","293",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("5");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Edit("edit_date","521","58","201","20",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("6");
            this.PopupDiv01.addChild(obj.name, obj);

            obj = new Edit("edit_writer","521","91","202","20",null,null,null,null,null,null,this.PopupDiv01.form);
            obj.set_taborder("7");
            this.PopupDiv01.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","PopupDiv00.form.edit_title","value","ds_book","bsTitle");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","PopupDiv00.form.text_content","value","ds_book","bsContent");
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
        var sCode = nexacro.getEnvironmentVariable("ev_Val");

        this.out_var="";
         this.frm_book_onload = function(obj,e)
                {
                	this.transaction(
                		"tr_select"
                		,"SnuURL::book/list.snu"
                		,""
                		,"ds_book=out_book"
                		,""
                		,"fn_callback_tran"
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
        //게시글 세부화면
        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var row =  this.ds_book.rowposition;
        	var dsScode = this.ds_book.getColumn(row, "sCode");
        	var x=170;
        	var y=-0;
        	this.PopupDiv00.trackPopupByComponent(obj, x, y);


        	if(sCode==dsScode){
        		this.PopupDiv00.form.btn_update.set_visible(true);
        		this.PopupDiv00.form.btn_delete.set_visible(true);
        	}

        };
        //세부화면
        this.PopupDiv00_onpopup = function(obj,e)
        {
        	var row = this.ds_book.rowposition;

        	var sTitle = this.ds_book.getColumn(row, "bsTitle");
        	var sContent = this.ds_book.getColumn(row, "bsContent");


        };
        //세부화면창 닫기
        this.PopupDiv00_btn_close_onclick = function(obj,e)
        {
        	this.PopupDiv00.closePopup();
        };
        //게시글 삭제
        this.PopupDiv00_btn_delete_onclick = function(obj,e)
        {
        	var row = this.ds_book.rowposition;
        	var bsNo = this.ds_book.getColumn(row, "bsNo");
        	var deleteBtn = this.confirm("해당 게시글을 삭제하시겠습니까?", "게시글 삭제");
        	if(deleteBtn == true)
        	{
        	this.ds_book.deleteRow(this.ds_book.rowposition);
                	this.transaction(
                		"tr_register"
                		,"SnuURL::book/delete.snu"
                		,""
                		,""
                		,"inVar1=" + bsNo
                		,"fn_callback_tran"
                	)
        			}
        			this.PopupDiv00.closePopup();
        };
        //게시글 수정
        this.PopupDiv00_btn_update_onclick = function(obj,e)
        {
        	var row = this.ds_book.rowposition;
        	var bsNo = this.ds_book.getColumn(row, "bsNo");
        	var bsTitle = this.PopupDiv00.form.edit_title.value;
        	var bsText = this.PopupDiv00.form.text_content.value;
        	var dsTitle = this.ds_book.getColumn(row, "bsTitle");
        	var dsContent = this.ds_book.getColumn(row, "bsContent");
        	var modifyBtn = this.confirm("해당 게시글을 수정하시겠습니까?", "게시글 수정");
        	if(modifyBtn == true)
        	{
                	this.transaction(
                		"tr_modify"
                		,"SnuURL::book/modify.snu"
                		,""
                		,""
                		,"inVar1=" + bsNo + " inVar2=" + nexacro.wrapQuote(bsTitle) + " inVar3=" + nexacro.wrapQuote(bsText)
                		,"fn_callback_tran"
                	)
        	this.ds_book.setColumn(row, "bsTitle", dsTitle);
        	this.ds_book.setColumn(row, "bsContent", dsContent);
        	this.PopupDiv00.closePopup();
        	};
        	this.reload();
        };

        //게시글 작성
        this.btn_write_onclick = function(obj,e)
        {
        	var x= 170;
        	var y=- -0;
        	this.PopupDiv01.trackPopupByComponent(obj, x, y);
        	this.PopupDiv01.trackPopupByComponent(obj, x, y);

        	var d = new Date();
        	var today = (d.getYear() + "" + ((d.getMonth()+1)+"").padLeft(2,'0')+""+(""+d.getDate()).padLeft(2,'0'));
        	this.PopupDiv01.form.edit_date.set_value(today);
        	this.PopupDiv01.form.edit_writer.set_value(sName);

        };
        //게시글 등록
        this.PopupDiv01_btn_bsInsert_onclick = function(obj,e)
        {
        	var newTitle = this.PopupDiv01.form.edit_newtitle.value;
        	var newContent = this.PopupDiv01.form.edit_newtext.value;
        	var registerBtn = this.confirm("게시글 등록하시겠습니까?", "게시글 등록");
        	if(registerBtn == true)
        	{
        	this.transaction(
                		"tr_register"
                		,"SnuURL::book/register.snu"
                		,""
                		,""
                		,"inVar1=" + sCode + " inVar2=" + nexacro.wrapQuote(newTitle) + " inVar3=" + nexacro.wrapQuote(newContent)
                		,"fn_callback_tran"
                	)

        			this.PopupDiv01.closePopup();
        			this.transaction(
                		"tr_select"
                		,"SnuURL::book/list.snu"
                		,""
                		,"ds_book=out_book"
                		,""
                		,"fn_callback_tran"
                	)
        			this.reload();
        	}

        };
        //게시물등록 취소
        this.PopupDiv01_btn_writeclose_onclick = function(obj,e)
        {
        	this.PopupDiv01.closePopup();
        };

        this.btn_retrieve_onclick = function(obj,e)
        {
        	this.ds_book.filter("bsTitle.indexOf('"+this.Edit00.value+"')>-1");
        	var fRow = this.ds_book.filter("bsTitle.indexOf('"+this.Edit00.value+"')>-1");
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
            this.PopupDiv00.form.btn_close.addEventHandler("onclick",this.PopupDiv00_btn_close_onclick,this);
            this.PopupDiv00.form.btn_update.addEventHandler("onclick",this.PopupDiv00_btn_update_onclick,this);
            this.PopupDiv00.form.btn_delete.addEventHandler("onclick",this.PopupDiv00_btn_delete_onclick,this);
            this.btn_write.addEventHandler("onclick",this.btn_write_onclick,this);
            this.PopupDiv01.addEventHandler("onpopup",this.PopupDiv01_onpopup,this);
            this.PopupDiv01.form.Static00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv01.form.Static00_00.addEventHandler("onclick",this.PopupDiv00_Static00_onclick,this);
            this.PopupDiv01.form.btn_writeclose.addEventHandler("onclick",this.PopupDiv01_btn_writeclose_onclick,this);
            this.PopupDiv01.form.btn_bsInsert.addEventHandler("onclick",this.PopupDiv01_btn_bsInsert_onclick,this);
            this.PopupDiv01.form.edit_newtitle.addEventHandler("onchanged",this.PopupDiv01_Edit00_onchanged,this);
        };
        this.loadIncludeScript("frm_book.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
