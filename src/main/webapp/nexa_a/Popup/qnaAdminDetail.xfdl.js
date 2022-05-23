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
            obj._setContents("<ColumnInfo><Column id=\"aCode\" type=\"STRING\" size=\"256\"/><Column id=\"qnaReplyNo\" type=\"STRING\" size=\"256\"/><Column id=\"qnaReplyContent\" type=\"STRING\" size=\"256\"/><Column id=\"qnaReplyDate\" type=\"STRING\" size=\"256\"/><Column id=\"qnaNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
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

            obj = new Edit("Edit00","10","360","322","42",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            this.addChild(obj.name, obj);

            obj = new Button("btn_qnaReplyRegister","360","360","84","42",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("댓글등록");
            this.addChild(obj.name, obj);
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
        	this.ds_qna.setColumn(0, "qnaDate",	 this.parent.qnaDate);
        	this.ds_qna.setColumn(0, "qnaStatus",  this.parent.qnaStatus);
        	this.ds_qna.setColumn(0, "qnaCount", this.parent.qnaCount);
        	this.ds_qna.setColumn(0, "sCode", this.parent.lCode);

        	this.qnaReplyList();
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
        	var qnaReplyContent = this.qnaAdminDetail.form.Edit00.value;
        	var qnaNo = this.ds_qna.getColumn(currentqnaNo, "qnaNo");
        	if(insertbutton == true) {
        		this.transaction(
        			"tr_qnaReplyRegister"
        			, "SnuURL::qnaReply/register.snu"
        			, ""
        			, ""
        			, "inVar1=" + qnaNo + " inVar2=" + nexacro.wrapQuote(qnaReplyContent)
        		);
        	}

        	this.qnaReplyList = function(currentqnaNo)
        {
        	var qnaNo = this.ds_qna.getColumn(this.ds_qna.rowposition, "qnaNo");
        	this.transaction(
        		"tr_qnaReplyList"
        		, "SnuUrl::qnaReply/list.snu"
        		, ""
        		,"ds_qnaReply=out_qnaReply"
        		,"in_var1=" + qnaNo
        	);
        }
        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.qnaAdminDetail_onload,this);
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Edit00.addEventHandler("oneditclick",this.Edit00_oneditclick,this);
            this.btn_qnaReplyRegister.addEventHandler("onclick",this.btn_qnaReplyRegister_onclick,this);
        };
        this.loadIncludeScript("qnaAdminDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
