(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_boardWriteForm");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,590);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_boardList", this);
            obj._setContents("<ColumnInfo><Column id=\"board_no\" type=\"STRING\" size=\"256\"/><Column id=\"board_title\" type=\"STRING\" size=\"256\"/><Column id=\"board_content\" type=\"STRING\" size=\"256\"/><Column id=\"board_date\" type=\"STRING\" size=\"256\"/><Column id=\"b_status\" type=\"STRING\" size=\"256\"/><Column id=\"p_code\" type=\"STRING\" size=\"256\"/><Column id=\"board_fileName\" type=\"STRING\" size=\"256\"/><Column id=\"board_fileReName\" type=\"STRING\" size=\"256\"/><Column id=\"board_writer\" type=\"STRING\" size=\"256\"/><Column id=\"board_count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","340","120","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("No");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_boardNo","395","120","145","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_boardCount","595","120","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_boardWriter","395","150","145","30",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_boardWriteDate","595","150","160","30",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static04","475","40","190","60",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("1번 게시글");
            obj.set_font("normal 25pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_boardTitle","395","180","360","30",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","340","150","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("작성자");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","340","180","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_text("제목");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","540","120","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("9");
            obj.set_text("조회수");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","540","150","55","30",null,null,null,null,null,null,this);
            obj.set_taborder("10");
            obj.set_text("작성일");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","340","210","55","270",null,null,null,null,null,null,this);
            obj.set_taborder("11");
            obj.set_text("내용");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_boardContent","395","210","360","270",null,null,null,null,null,null,this);
            obj.set_taborder("12");
            obj.set_borderRadius("4px");
            this.addChild(obj.name, obj);

            obj = new Button("btn_submit","517","544","66","32",null,null,null,null,null,null,this);
            obj.set_taborder("13");
            obj.set_text("등록하기");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new FileUpload("file_up","430","495","250","30",null,null,null,null,null,null,this);
            obj.set_taborder("14");
            obj.set_borderRadius("4px");
            obj.set_edge("");
            this.addChild(obj.name, obj);

            obj = new Button("btn_addFile","685","495","55","20",null,null,null,null,null,null,this);
            obj.set_taborder("15");
            obj.set_text("Add File");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,590,this,function(p){});
            obj.set_mobileorientation("landscape");
            obj.set_stepcount("0");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_boardNo","value","ds_boardList","board_no");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edt_boardCount","value","ds_boardList","board_count");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_boardWriter","value","ds_boardList","board_writer");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_boardWriteDate","value","ds_boardList","board_date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","edt_boardTitle","value","ds_boardList","board_title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","ta_boardContent","value","ds_boardList","board_content");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_boardWriteForm.xfdl", function() {

        this.btn_submit_onclick = function(obj,e)
        {

        	this.transaction(
        		"tr_register"  	 	 	 	 	      // 1.ID
        		,"SnuUrl::board/register.snu"   	  // 2.URL
        		,"in_boardList=ds_boardList:U" 		  // 3.InDs : F->S jsp(I,U,D)
        		,"" 							 	  // 4.OutDs : S->F jsp(SELECT)
        		,"in_var1=" + nexacro.wrapQuote(name) 			// 5.InVar : F->S(var)
        		,"fn_callback_tran"		// 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };

        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id == "tr_register") {
        		if(nErrorCode < 0) {
        			this.alert("게시글 등록 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert("게시글 등록 성공");
        		this.go("Base::frm_board.xfdl");
        	}

        };

        this.frm_boardWriteForm_onload = function(obj,e)
        {
        	var d = new Date();
        	var today = (d.getYear() + "" + ((d.getMonth()+1)+"").padLeft(2,'0')+""+(""+d.getDate()).padLeft(2,'0'));

        	this.ds_boardList.addRow();
        	this.ds_boardList.setColumn(this.ds_boardList, "board_date", today);
        };

        this.btn_addFile_onclick = function(obj,e)
        {
        	this.file_up.appendItem();
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_boardWriteForm_onload,this);
            this.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.edt_boardCount.addEventHandler("onchanged",this.edt_boardCount_onchanged,this);
            this.Static04.addEventHandler("onclick",this.Static04_onclick,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.Static00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.btn_submit.addEventHandler("onclick",this.btn_submit_onclick,this);
            this.btn_addFile.addEventHandler("onclick",this.btn_addFile_onclick,this);
        };
        this.loadIncludeScript("frm_boardWriteForm.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
