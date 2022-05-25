(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("qnaAdminDetail");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,550);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qna", this);
            obj._setContents("<ColumnInfo><Column id=\"qnaNo\" type=\"STRING\" size=\"256\"/><Column id=\"qnaTitle\" type=\"STRING\" size=\"256\"/><Column id=\"qnaContent\" type=\"STRING\" size=\"256\"/><Column id=\"qnaDate\" type=\"STRING\" size=\"256\"/><Column id=\"qnaStatus\" type=\"STRING\" size=\"256\"/><Column id=\"qnaCount\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qnaReply", this);
            obj._setContents("<ColumnInfo><Column id=\"aCode\" type=\"STRING\" size=\"256\"/><Column id=\"qnaReplyNo\" type=\"INT\" size=\"256\"/><Column id=\"qnaReplyContent\" type=\"STRING\" size=\"256\"/><Column id=\"qnaReplyDate\" type=\"STRING\" size=\"256\"/><Column id=\"qnaNo\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","10","10","460","330",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("Div00");
            obj.set_border("1px solid");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00","99","29","115","40",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","36","37","55","24",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("제목");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","98","92","314","207",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","36","179","43","26",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            obj.set_text("내용");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("edt_register","22","478","322","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_qnaReplyRegister","368","478","84","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("댓글등록");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00","22","375","428","93",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_qnaReply");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"qnaReplyNo\"/><Cell col=\"1\" text=\"qnaReplyContent\"/><Cell col=\"2\" text=\"qnaReplyDate\"/></Band><Band id=\"body\"><Cell text=\"bind:qnaReplyNo\"/><Cell col=\"1\" text=\"bind:qnaReplyContent\"/><Cell col=\"2\" text=\"bind:qnaReplyDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new PopupDiv("popModifyQnaReply","40","410","360","54",null,null,null,null,null,null,this);
            obj.set_text("PopupDiv00");
            obj.set_visible("false");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_modifyqnaReply","13","13","137","34",null,null,null,null,null,null,this.popModifyQnaReply.form);
            obj.set_taborder("0");
            this.popModifyQnaReply.addChild(obj.name, obj);

            obj = new Button("btn_modifyQnaReply","158","14","92","33",null,null,null,null,null,null,this.popModifyQnaReply.form);
            obj.set_taborder("1");
            obj.set_text("수정완료");
            this.popModifyQnaReply.addChild(obj.name, obj);

            obj = new Button("btn_removeQnaReply","264","14","92","33",null,null,null,null,null,null,this.popModifyQnaReply.form);
            obj.set_taborder("2");
            obj.set_text("삭제");
            this.popModifyQnaReply.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,550,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.Edit00","value","ds_qna","qnaTitle");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","Div00.form.TextArea00","value","ds_qna","qnaContent");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("qnaAdminDetail.xfdl", function() {

        this.qnaAdminDetail_onload = function(obj,e)
        {
          this.ds_qna.addRow();
        	this.ds_qna.setColumn(0, "qnaNo", 	 this.parent.qnaNo);
        	this.ds_qna.setColumn(0, "qnaTitle", this.parent.qnaTitle);
         	this.ds_qna.setColumn(0, "qnaContent",	 this.parent.qnaContent);
        // 	this.ds_qna.setColumn(0, "qnaDate",	 this.parent.qnaDate);
        /*	this.ds_qna.setColumn(0, "qnaStatus",  this.parent.qnaStatus);
        */// 	this.ds_qna.setColumn(0, "qnaCount", this.parent.qnaCount);
        // 	this.ds_qna.setColumn(0, "sCode", this.parent.sCode);

        	var qnaNo = this.ds_qna.getColumn(this.ds_qna.rowposition, "qnaNo");
        	this.transaction(
        		"tr_qnaReplyList"
        		, "SnuURL::qnaReply/list.snu"
        		, ""
        		,"ds_qnaReply=out_qnaReply"
        		,"in_var1=" + qnaNo
        		,"tr_callback_qnaReply"
        	);
        };

        this.Edit00_oneditclick = function(obj,e)
        {
        	var d = new Date();
        	var today = (d.getYear() + "" + ((d.getMonth()+1)+"").padLeft(2,'0')+""+(""+d.getDate()));
        	this.ds_qnaReply.addRow();
        	this.ds_qnaReply.setColumn(this.ds_qnaReply.rowposition, "qnaReplyDate", today)
        };



        this.btn_qnaReplyRegister_onclick = function(obj,e)
        {
        	var insertbutton = this.confirm("댓글을 등록하시겠습니까?", "댓글 등록");
        	var qnaReplyContent = this.edt_register.value;
        	var qnaNo = this.ds_qna.getColumn(this.ds_qna.rowposition, "qnaNo");
        	if(insertbutton == true) {
        		this.transaction(
        			"tr_qnaReplyRegister"
        			, "SnuURL::qnaReply/register.snu"
        			, ""
        			, ""
        			, "in_var1=" + qnaNo + " in_var2=" + nexacro.wrapQuote(qnaReplyContent)
        			, "tr_callback_qnaReply"
        		);
        		/*this.alert(nexacro.wrapQuote(qnaReplyContent))*/
        	}

        		this.fn_callback_qnaReply = function(sId, nErrorCode, sErrorMsg)
        {


        	if(sId == "tr_qnaReplyRegister")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("댓글 등록 실패" + sErrorMsg);
        		}
        			this.alert("댓글 등록 성공");
        			}

        	}
        	if(sId == "tr_qnaReplyUpdate")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("댓글 수정 실패" + sErrorMsg);
        			}
        			this.alert("댓글 수정 성공");
        			}


        		if(sId == "tr_removeQnaReply")
        		{
        			if(nErrorCode < 0 )
        			{
        				this.alert("댓글 삭제 실패" + sErrorMsg);
        				}
        				this.alert("댓글 삭제 성공");
        				}


        };

        this.Grid00_oncelldblclick = function(obj,e)
        {


        	var qnaReply = this.popModifyQnaReply.form.edt_modifyqnaReply;
        	qnaReply.set_value("");
        	var nRow = this.ds_qnaReply.rowposition;
        	this.popModifyQnaReply.trackPopupByComponent(obj, 50, 30, 370, 100);
        	currentqnaReplyNo = e.row;

        };






        this.popModifyQnaReply_btn_modifyQnaReply_onclick = function(obj,e)
        {
        	var qnaReplyNo = this.ds_qnaReply.getColumn(currentqnaReplyNo, "qnaReplyNo");
        	var qnaNo = this.ds_qna.getColumn(this.ds_qna.rowposition, "qnaNo");
        	var qnaReplyContent = this.popModifyQnaReply.form.edt_modifyqnaReply.value;
        	var modifyBtn = this.confirm("해당 댓글을 수정하시겠습니까?", "댓글 수정");
        	if(modifyBtn == true) {
        			this.transaction(
        			  "tr_qnaReplyUpdate"
        			, "SnuURL::qnaReply/modify.snu"
        			, ""
        			, ""
        			, "in_var1=" + qnaNo + " in_var2=" + qnaReplyNo + " in_var3=" + nexacro.wrapQuote(qnaReplyContent)
        			, "fn_callback_qnaReply"
        		);
        	};
        };

        this.popModifyQnaReply_btn_removeQnaReply_onclick = function(obj,e)
        {

        	var qnaReplyNo = this.ds_qnaReply.getColumn(currentqnaReplyNo, "qnaReplyNo");
        	var deleteBtn = this.confirm("해당 댓글을 삭제하시겠습니까?", "댓글 삭제");
        	if(deleteBtn == true) {
        			this.transaction(
        			"tr_removeQnaReply"
        			, "SnuURL::qnaReply/delete.snu"
        			, ""
        			, ""
        			, "in_var1=" + qnaReplyNo
        			, "fn_callback_qnaReply"
        		);
        	}
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.qnaAdminDetail_onload,this);
            this.Div00.form.TextArea00.addEventHandler("onchanged",this.Div00_TextArea00_onchanged,this);
            this.edt_register.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.edt_register.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.btn_qnaReplyRegister.addEventHandler("onclick",this.btn_qnaReplyRegister_onclick,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
            this.popModifyQnaReply.form.btn_modifyQnaReply.addEventHandler("onclick",this.popModifyQnaReply_btn_modifyQnaReply_onclick,this);
            this.popModifyQnaReply.form.btn_removeQnaReply.addEventHandler("onclick",this.popModifyQnaReply_btn_removeQnaReply_onclick,this);
        };
        this.loadIncludeScript("qnaAdminDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
