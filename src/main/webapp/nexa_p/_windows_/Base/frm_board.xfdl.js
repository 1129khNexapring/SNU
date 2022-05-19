(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_board");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_boardList", this);
            obj._setContents("<ColumnInfo><Column id=\"board_no\" type=\"STRING\" size=\"256\"/><Column id=\"board_title\" type=\"STRING\" size=\"256\"/><Column id=\"board_content\" type=\"STRING\" size=\"256\"/><Column id=\"board_date\" type=\"STRING\" size=\"256\"/><Column id=\"b_status\" type=\"STRING\" size=\"256\"/><Column id=\"p_code\" type=\"STRING\" size=\"256\"/><Column id=\"board_writer\" type=\"STRING\" size=\"256\"/><Column id=\"board_count\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_comments", this);
            obj._setContents("<ColumnInfo><Column id=\"comment_no\" type=\"STRING\" size=\"256\"/><Column id=\"comment_content\" type=\"STRING\" size=\"256\"/><Column id=\"s_code\" type=\"STRING\" size=\"256\"/><Column id=\"p_code\" type=\"STRING\" size=\"256\"/><Column id=\"board_no\" type=\"STRING\" size=\"256\"/><Column id=\"comment_date\" type=\"STRING\" size=\"256\"/><Column id=\"s_name\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("grd_boardList","20","30","1037","520",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_boardList");
            obj.set_autofittype("col");
            obj.set_borderRadius("2px");
            obj.set_cursor("pointer");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"85\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"제목\"/><Cell col=\"2\" text=\"작성일\"/><Cell col=\"3\" text=\"작성자\"/></Band><Band id=\"body\"><Cell text=\"bind:board_no\"/><Cell col=\"1\" text=\"bind:board_title\"/><Cell col=\"2\" text=\"bind:board_date\"/><Cell col=\"3\" text=\"bind:board_writer\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_boardWrite","22","0","56","25",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("글쓰기");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popDetail","-5","3","1030","825",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_background("aliceblue");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","340","130","55","30",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("0");
            obj.set_text("No");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.popDetail.addChild(obj.name, obj);

            obj = new Edit("edt_boardNo","395","130","145","30",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("1");
            obj.set_borderRadius("4px");
            this.popDetail.addChild(obj.name, obj);

            obj = new Edit("edt_boardCount","595","130","160","30",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("2");
            obj.set_borderRadius("4px");
            this.popDetail.addChild(obj.name, obj);

            obj = new Edit("edt_boardWriter","395","160","145","30",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("3");
            obj.set_borderRadius("4px");
            this.popDetail.addChild(obj.name, obj);

            obj = new Edit("edt_boardWriteDate","595","160","160","30",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("4");
            obj.set_borderRadius("4px");
            this.popDetail.addChild(obj.name, obj);

            obj = new Static("Static04","475","40","190","60",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("5");
            obj.set_text("번 게시글");
            obj.set_font("normal 25pt/normal \"Arial\"");
            this.popDetail.addChild(obj.name, obj);

            obj = new Edit("edt_boardTitle","395","190","360","30",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("6");
            obj.set_borderRadius("4px");
            this.popDetail.addChild(obj.name, obj);

            obj = new Static("Static00_00","340","160","55","30",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("7");
            obj.set_text("작성자");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.popDetail.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","340","190","55","30",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("8");
            obj.set_text("제목");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.popDetail.addChild(obj.name, obj);

            obj = new Static("Static00_00_01","540","130","55","30",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("9");
            obj.set_text("조회수");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.popDetail.addChild(obj.name, obj);

            obj = new Static("Static00_00_01_00","540","160","55","30",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("10");
            obj.set_text("작성일");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.popDetail.addChild(obj.name, obj);

            obj = new Static("Static00_00_00_00","340","220","55","270",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("11");
            obj.set_text("내용");
            obj.set_border("1px solid lightgray");
            obj.set_borderRadius("4px");
            obj.set_textAlign("center");
            this.popDetail.addChild(obj.name, obj);

            obj = new TextArea("ta_boardContent","395","220","360","270",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("12");
            obj.set_borderRadius("4px");
            this.popDetail.addChild(obj.name, obj);

            obj = new Button("btn_commentSubmit","517","650","66","32",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("13");
            obj.set_text("댓글등록");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.popDetail.addChild(obj.name, obj);

            obj = new Edit("edt_comment","345","565","405","65",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("14");
            obj.set_borderRadius("4px");
            this.popDetail.addChild(obj.name, obj);

            obj = new Button("btn_update","550","98","66","32",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("15");
            obj.set_text("수정하기");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.popDetail.addChild(obj.name, obj);

            obj = new Button("btn_popUpBack","690","98","66","32",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("16");
            obj.set_text("이전으로");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.popDetail.addChild(obj.name, obj);

            obj = new Button("btn_remove","620","98","66","32",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("17");
            obj.set_text("삭제하기");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.popDetail.addChild(obj.name, obj);

            obj = new Button("btn_popUpClose","1000","5","20","25",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("18");
            obj.set_text("X");
            obj.set_background("dodgerblue");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            obj.set_cursor("pointer");
            this.popDetail.addChild(obj.name, obj);

            obj = new Edit("edt_cBoardNo","825","276","60","41",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("19");
            obj.set_visible("false");
            obj.set_border("1px solid transparent");
            obj.set_background("transparent");
            obj.set_font("normal 25pt/normal \"Arial\"");
            this.popDetail.addChild(obj.name, obj);

            obj = new Grid("grd_comment","308","695","492","130",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("20");
            obj.set_binddataset("ds_comments");
            obj.set_cursor("pointer");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"202\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"No\"/><Cell col=\"1\" text=\"작성자\" suppressalign=\"first\"/><Cell col=\"2\" text=\"내용\"/><Cell col=\"3\" text=\"작성일\"/></Band><Band id=\"body\"><Cell text=\"bind:comment_no\"/><Cell col=\"1\" text=\"bind:s_name\"/><Cell col=\"2\" text=\"bind:comment_content\"/><Cell col=\"3\" text=\"bind:comment_date\"/></Band></Format></Formats>");
            this.popDetail.addChild(obj.name, obj);

            obj = new Button("btn_cRemove","804","695","66","32",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("21");
            obj.set_text("삭제하기");
            obj.set_background("cornflowerblue");
            obj.set_borderRadius("6px");
            obj.set_cursor("pointer");
            obj.set_color("white");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.popDetail.addChild(obj.name, obj);

            obj = new PopupDiv("popComments","450","727","220","55",null,null,null,null,null,null,this.popDetail.form);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            obj.set_background("cornsilk");
            this.popDetail.addChild(obj.name, obj);

            obj = new Edit("edt_commentModify","0","0","220","20",null,null,null,null,null,null,this.popDetail.form.popComments.form);
            obj.set_taborder("0");
            obj.set_borderRadius("5px");
            this.popDetail.form.popComments.addChild(obj.name, obj);

            obj = new Button("Button00","70","24","80","26",null,null,null,null,null,null,this.popDetail.form.popComments.form);
            obj.set_taborder("1");
            obj.set_text("수정완료");
            obj.set_borderRadius("5px");
            obj.set_background("royalblue");
            obj.set_color("white");
            this.popDetail.form.popComments.addChild(obj.name, obj);

            obj = new Edit("edt_cBoardNo00","420","50","60","41",null,null,null,null,null,null,this.popDetail.form);
            obj.set_taborder("22");
            obj.set_visible("true");
            obj.set_border("1px solid transparent");
            obj.set_background("transparent");
            obj.set_font("normal 25pt/normal \"Arial\"");
            this.popDetail.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","popDetail.form.edt_boardNo","value","ds_boardList","board_no");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","popDetail.form.edt_boardCount","value","ds_boardList","board_count");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","popDetail.form.edt_boardWriter","value","ds_boardList","board_writer");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","popDetail.form.edt_boardWriteDate","value","ds_boardList","board_date");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","popDetail.form.edt_boardTitle","value","ds_boardList","board_title");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item5","popDetail.form.ta_boardContent","value","ds_boardList","board_content");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item7","popDetail.form.edt_comment","value","ds_comments","comment_content");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item10","popDetail.form.edt_cBoardNo","value","ds_comments","board_no");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item11","popDetail.form.popComments.form.edt_commentModify","value","ds_comments","comment_content");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item6","popDetail.form.edt_cBoardNo00","value","ds_boardList","board_no");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_board.xfdl", function() {
        var currentboardNo = 0;
        var currentCommentNo = 0;
        var pCode = nexacro.getEnvironmentVariable("ev_Val");

        // 게시글 작성화면 이동
        this.btn_boardWrite_onclick = function(obj,e)
        {
        	this.go("Base::frm_boardWriteForm.xfdl");
        };

        // 게시글 상세화면
        this.grd_boardList_oncelldblclick = function(obj,e)
        {
        	currentboardNo = e.row;
        	this.popDetail.trackPopupByComponent(obj, obj.getOffsetWidth(), obj.getOffsetHeight(), 1200, 800);

        };



        // this.frm_boardDetailView_onload = function(obj:nexacro.Form,e:nexacro.LoadEventInfo)
        // {
        // 	var row = this.ds_boardList.rowposition;
        // 	trace(this.ds_boardList);
        //
        // 	var bNo       = this.ds_boardList.getColumn(row, "board_no");
        // 	var bTitle    = this.ds_boardList.getColumn(row, "board_title");
        // 	var bContent  = this.ds_boardList.getColumn(row, "board_content");
        // 	var bDate     = this.ds_boardList.getColumn(row, "board_WriteDate");
        // 	var bWriter   = this.ds_boardList.getColumn(row, "board_writer");
        // 	var bCount    = this.ds_boardList.getColumn(row, "board_count");
        //
        // 	this.frm_boardDetailView.edt_boardNo.set_text(bNo);
        // 	this.frm_boardDetailView.edt_boardCount.set_text(bCount);
        // 	this.frm_boardDetailView.edt_boardWriter.set_text(bWriter);
        // 	this.frm_boardDetailView.edt_boardWriteDate.set_text(bDate);
        // 	this.frm_boardDetailView.edt_boardTitle.set_text(bTitle);
        // 	this.frm_boarddetailView.ta_boardContent.set_text(bContent);
        // }

        // 게시글 목록
        this.frm_board_onload = function(obj,e)
        {
        	this.transaction(
        			"tr_bList" 					  	  // 1. ID
        			, "SnuUrl::board/list.snu" 		  // 2. URL
        			, ""							  // 3. InDs : F -> S jsp(I, U, D)
        			, "ds_boardList=out_emp" 	  // 4. OutDs : S -> F jsp(SELECT)
        	        , ""							  // 5. InVar : F -> S(var)
        			, "fn_callback_tran"			  // 6. callback function(transaction 완료시 호출되는 함수)
        		)

        };

        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id == "tr_bList") {
        		if(nErrorCode < 0) {
        			this.alert("게시글 조회 실패 : " + sErrorMsg);
        			return;
        		}
        		// this.alert("게시글 조회 성공");
        	}

        	if(id == "tr_bUpdate") {
        		if(nErrorCode < 0) {
        			this.alert("게시글 수정 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert("게시글 수정 성공");
        	}

        	if(id == "tr_bDelete") {
        		if(nErrorCode < 0) {
        			this.alert("게시글 삭제 실패 : " + sErrorMsg);
        			return;
        		}
        		// this.alert("게시글 삭제 성공");
        	}

        	if(id == "tr_cRegister") {
        		if(nErrorCode < 0) {
        			this.alert("댓글 등록 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert("댓글 등록 성공");
        	}

        	if(id == "tr_cList") {
        		if(nErrorCode) {
        			this.alert("댓글 조회 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert("댓글 조회 성공");
        	}

        	if(id == "tr_cRemove") {
        		if(nErrorCode) {
        			this.alert("댓글 삭제 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert("댓글 삭제 성공");
        	}

        	if(id == "tr_cUpdate") {
        		if(nErrorCode) {
        			this.alert("댓글 수정 실패 : " + sErrorMsg);
        			return;
        		}
        		this.popDetail.form.popComments.closePopup();
        	}

        	if(id == "tr_count") {
        		if(nErrorCode) {
        			this.alert("조회수 반영 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert("조회수 반영 성공");
        	}

        };

        // 게시글 닫기
        this.popDetail_btn_popUpClose_onclick = function(obj,e)
        {
        	var boardNo = this.ds_boardList.getColumn(this.ds_boardList.rowposition, "board_no");
        	var boardCnt = this.popDetail.form.edt_boardCount.value;
        	var boardTitle = this.popDetail.form.edt_boardTitle.value;
        	var boardContent = this.popDetail.form.ta_boardContent.value;
        	// boardCnt = boardCnt + 1;
        	this.transaction(
        			"tr_count" 					  	  // 1. ID
        			, "SnuUrl::board/count.snu" 		  // 2. URL
        			, ""							  // 3. InDs : F -> S jsp(I, U, D)
        			, "" 	  // 4. OutDs : S -> F jsp(SELECT)
        	        , "in_var1=" + boardNo + " in_var2=" + boardCnt	+ " in_var3=" + nexacro.wrapQuote(boardTitle) + " in_var4=" + nexacro.wrapQuote(boardContent)// 5. InVar : F -> S(var)
        			, "fn_callback_tran"			  // 6. callback function(transaction 완료시 호출되는 함수)
        		)
        	this.popDetail.closePopup();
        	this.reload();
        };

        // 게시글 닫기
        this.popDetail_btn_popUpBack_onclick = function(obj,e)
        {
        	var boardNo = this.ds_boardList.getColumn(this.ds_boardList.rowposition, "board_no");
        	var boardCnt = this.popDetail.form.edt_boardCount.value;
        	var boardTitle = this.popDetail.form.edt_boardTitle.value;
        	var boardContent = this.popDetail.form.ta_boardContent.value;
        	// boardCnt = boardCnt + 1;
        	this.transaction(
        			"tr_count" 					  	  // 1. ID
        			, "SnuUrl::board/count.snu" 		  // 2. URL
        			, ""							  // 3. InDs : F -> S jsp(I, U, D)
        			, "" 	  // 4. OutDs : S -> F jsp(SELECT)
        	        , "in_var1=" + boardNo + " in_var2=" + boardCnt	+ " in_var3=" + nexacro.wrapQuote(boardTitle) + " in_var4=" + nexacro.wrapQuote(boardContent)// 5. InVar : F -> S(var)
        			, "fn_callback_tran"			  // 6. callback function(transaction 완료시 호출되는 함수)
        		)
        	this.popDetail.closePopup();
        	this.reload();
        };

        // 게시글 수정
        this.popDetail_btn_update_onclick = function(obj,e)
        {
        	var boardTitle = this.popDetail.form.edt_boardTitle.value;
        	var boardContent = this.popDetail.form.ta_boardContent.value;
        	var boardNo = this.ds_boardList.getColumn(this.ds_boardList.rowposition, "board_no");
        	this.transaction(
        		  "tr_bUpdate"
        		, "SnuUrl::board/modify.snu"
        		, ""
        		, ""
        		, "in_var1=" + nexacro.wrapQuote(boardTitle) + " in_var2=" + nexacro.wrapQuote(boardContent) + " in_var3=" + boardNo
        		, "fn_callback_tran"
        	);
        };

        // 게시글 삭제
        this.popDetail_btn_remove_onclick = function(obj,e)
        {
        	var board_no = this.ds_boardList.getColumn(currentboardNo, "board_no");
        	var removeBtn = this.confirm("해당 게시글을 삭제하시겠습니까?", "게시글 삭제");
        	if(removeBtn == true) {
        		this.transaction(
        			"tr_bDelete"
        			, "SnuUrl::board/delete.snu"
        			, ""
        			, ""
        			, "in_var1=" + board_no
        			, "fn_callback_tran"
        		);
        	};
        };

        // 댓글 입력창 클릭시
        this.popDetail_edt_comment_oneditclick = function(obj,e)
        {
        	var d = new Date();
        	var today = (d.getYear() + "" + ((d.getMonth()+1)+"").padLeft(2,'0')+""+(""+d.getDate()));
        	this.ds_comments.addRow();
        	this.ds_comments.setColumn(this.ds_comments.rowposition, "comment_date", today)
        };

        // 댓글 등록
        this.popDetail_btn_commentSubmit_onclick = function(obj,e)
        {
        	var registerBtn = this.confirm("해당 댓글을 등록하시겠습니까?", "댓글 등록");
        	var commentContent = this.popDetail.form.edt_comment.value;
        	var boardNo = this.ds_boardList.getColumn(currentboardNo, "board_no");
        	if(registerBtn == true) {
        		this.transaction(
        			"tr_cRegister"
        			, "SnuUrl::comments/register.snu"
        			, ""
        			, ""
        			, "inVar1=" + boardNo + " inVar2=" + nexacro.wrapQuote(commentContent) + " inVar3=" + pCode
        		);
        	}

        };

        // 댓글 목록
        this.popDetail_onpopup = function(obj,e)
        {
        	this.commentsList();
        };

        // 댓글 목록
        var sName = nexacro.getEnvironmentVariable("ev_Val1");
        this.commentsList = function(currentboardNo)
        {
        	var board_no = this.ds_boardList.getColumn(this.ds_boardList.rowposition, "board_no");
        	this.transaction(
        		"tr_cList"
        		, "SnuUrl::comment/list.snu"
        		, ""
        		,"ds_comments=out_comments" // 4.OutDs : S->F jsp(SELECT)
        		,"in_var1=" + board_no + " in_var2=" + sName // 5.InVar : F->S(var)
        	);
        }

        // 댓글 삭제
        this.popDetail_btn_cRemove_onclick = function(obj,e)
        {
        	this.ds_comments.deleteRow(this.ds_comments.rowposition);
        	var comment_no = this.ds_comments.getColumn(currentCommentNo, "comment_no");
        	var deleteBtn = this.confirm("해당 댓글을 삭제하시겠습니까?", "댓글 삭제");
        	if(deleteBtn == true) {
        			this.transaction(
        			"tr_cRemove"
        			, "SnuUrl::comments/delete.snu"
        			, ""
        			, ""
        			, "in_var1=" + comment_no
        			, "fn_callback_tran"
        		);
        	}

        };

        // 댓글 수정 입력 화면
        this.popDetail_grd_comment_oncelldblclick = function(obj,e)
        {
        	var comment = this.popDetail.form.edt_comment;
        	comment.set_value("");
        	var nRow = this.ds_comments.rowposition;
        	this.popDetail.form.popComments.trackPopupByComponent(obj, 100, 100, 270, 100);
        	currentCommentNo = e.row;

        };

        // 댓글 수정
        this.popDetail_popComments_Button00_onclick = function(obj,e)
        {
        	var comment_no = this.ds_comments.getColumn(currentCommentNo, "comment_no");
        	var board_no = this.ds_boardList.getColumn(currentboardNo, "board_no");
        	var commentContent = this.popDetail.form.popComments.form.edt_commentModify.value;
        	var modifyBtn = this.confirm("해당 댓글을 수정하시겠습니까?", "댓글 수정");
        	if(modifyBtn == true) {
        			this.transaction(
        			  "tr_cUpdate"
        			, "SnuUrl::comments/modify.snu"
        			, ""
        			, ""
        			, "inVar1=" + board_no + " inVar2=" + comment_no + " inVar3=" + nexacro.wrapQuote(commentContent)
        			, "fn_callback_tran"
        		);
        	};

        };

        this.popDetail_oncloseup = function(obj,e)
        {
        	var boardNo = this.ds_boardList.getColumn(this.ds_boardList.rowposition, "board_no");
        	var boardCnt = this.popDetail.form.edt_boardCount.value;
        	var boardTitle = this.popDetail.form.edt_boardTitle.value;
        	var boardContent = this.popDetail.form.ta_boardContent.value;
        	// boardCnt = boardCnt + 1;
        	this.transaction(
        			"tr_count" 					  	  // 1. ID
        			, "SnuUrl::board/count.snu" 		  // 2. URL
        			, ""							  // 3. InDs : F -> S jsp(I, U, D)
        			, "" 	  // 4. OutDs : S -> F jsp(SELECT)
        	        , "in_var1=" + boardNo + " in_var2=" + boardCnt	+ " in_var3=" + nexacro.wrapQuote(boardTitle) + " in_var4=" + nexacro.wrapQuote(boardContent)// 5. InVar : F -> S(var)
        			, "fn_callback_tran"			  // 6. callback function(transaction 완료시 호출되는 함수)
        		)
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_board_onload,this);
            this.grd_boardList.addEventHandler("oncelldblclick",this.grd_boardList_oncelldblclick,this);
            this.btn_boardWrite.addEventHandler("onclick",this.btn_boardWrite_onclick,this);
            this.popDetail.addEventHandler("onpopup",this.popDetail_onpopup,this);
            this.popDetail.addEventHandler("onsetfocus",this.popDetail_onsetfocus,this);
            this.popDetail.addEventHandler("oncloseup",this.popDetail_oncloseup,this);
            this.popDetail.form.Static00.addEventHandler("onclick",this.Static00_onclick,this);
            this.popDetail.form.edt_boardWriteDate.addEventHandler("onchanged",this.popDetail_edt_boardWriteDate_onchanged,this);
            this.popDetail.form.Static04.addEventHandler("onclick",this.Static04_onclick,this);
            this.popDetail.form.Static00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.popDetail.form.Static00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.popDetail.form.Static00_00_01.addEventHandler("onclick",this.Static00_onclick,this);
            this.popDetail.form.Static00_00_01_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.popDetail.form.Static00_00_00_00.addEventHandler("onclick",this.Static00_onclick,this);
            this.popDetail.form.btn_commentSubmit.addEventHandler("onclick",this.popDetail_btn_commentSubmit_onclick,this);
            this.popDetail.form.edt_comment.addEventHandler("onsetfocus",this.popDetail_edt_comment_onsetfocus,this);
            this.popDetail.form.edt_comment.addEventHandler("oneditclick",this.popDetail_edt_comment_oneditclick,this);
            this.popDetail.form.btn_update.addEventHandler("onclick",this.popDetail_btn_update_onclick,this);
            this.popDetail.form.btn_popUpBack.addEventHandler("onclick",this.popDetail_btn_popUpBack_onclick,this);
            this.popDetail.form.btn_remove.addEventHandler("onclick",this.popDetail_btn_remove_onclick,this);
            this.popDetail.form.btn_popUpClose.addEventHandler("onclick",this.popDetail_btn_popUpClose_onclick,this);
            this.popDetail.form.grd_comment.addEventHandler("oncelldblclick",this.popDetail_grd_comment_oncelldblclick,this);
            this.popDetail.form.btn_cRemove.addEventHandler("onclick",this.popDetail_btn_cRemove_onclick,this);
            this.popDetail.form.popComments.form.edt_commentModify.addEventHandler("onchanged",this.popDetail_popComments_Edit00_onchanged,this);
            this.popDetail.form.popComments.form.Button00.addEventHandler("onclick",this.popDetail_popComments_Button00_onclick,this);
        };
        this.loadIncludeScript("frm_board.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
