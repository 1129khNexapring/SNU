(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("adminQna");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qna", this);
            obj._setContents("<ColumnInfo><Column id=\"qnaNo\" type=\"STRING\" size=\"256\"/><Column id=\"qnaTitle\" type=\"STRING\" size=\"256\"/><Column id=\"qnaContent\" type=\"STRING\" size=\"256\"/><Column id=\"qnaDate\" type=\"STRING\" size=\"256\"/><Column id=\"qnaStatus\" type=\"STRING\" size=\"256\"/><Column id=\"qnaCount\" type=\"STRING\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_qnaReply", this);
            obj._setContents("<ColumnInfo><Column id=\"aCode\" type=\"STRING\" size=\"256\"/><Column id=\"qnaReplyNo\" type=\"INT\" size=\"256\"/><Column id=\"qnaReplyContent\" type=\"STRING\" size=\"256\"/><Column id=\"qnaReplyDate\" type=\"STRING\" size=\"256\"/><Column id=\"qnaNo\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","110","104","666","216",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("ds_qna");
            obj.set_autosizingtype("none");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"qnaNo\" textAlign=\"center\"/><Cell col=\"1\" text=\"qnaTitle\"/><Cell col=\"2\" text=\"qnaDate\"/><Cell col=\"3\" text=\"qnaStatus\"/><Cell col=\"4\" text=\"sCode\"/></Band><Band id=\"body\"><Cell text=\"bind:qnaNo\" textAlign=\"center\"/><Cell col=\"1\" text=\"bind:qnaTitle\"/><Cell col=\"2\" text=\"bind:qnaDate\"/><Cell col=\"3\" text=\"bind:qnaStatus\"/><Cell col=\"4\" text=\"bind:sCode\"/></Band></Format></Formats>");
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
        this.registerScript("adminQna.xfdl", function() {
        var currentboardNo = 0;
        this.adminQna_onload = function(obj,e)
        {
        	this.transaction(
                		"qna_select"// 1.ID
                		,"SnuURL::qna/list.snu"
                		,""
                		,"ds_qna=out_qna"
                		,"inVar1="
                		,"fn_callback_qna"
        				)
        };


        	this.fn_callback_qna = function(sId, nErrorCode, sErrorMsg)
        {
        	if(sId == "qna_select")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("건의 조회 실패" + sErrorMsg);
        		}
        		this.alert("건의 조회 성공");
        	}
        	if(sId == "qna_register")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("댓글 등록 실패" + sErrorMsg);
        		}
        			this.alert("건의 조회 성공");
        			}


        }

        this.Grid00_oncelldblclick = function(obj,e)
        {
        	var qnaNo = this.ds_qna.getColumn(this.ds_qna.rowposition, "qnaNo");
        	this.transaction(
        		"tr_qnaReplyList"
        		, "SnuURL::qnaReply/list.snu"
        		, ""
        		,"ds_qnaReply=out_qnaReply"
        		,"in_var1=" + qnaNo
        		,"tr_callback_qnaReply"
        	);


        	var nRow = this.ds_qna.rowposition;

        	var objParam = {qnaNo: this.ds_qna.getColumn(nRow, "qnaNo")
        					,qnaTitle: this.ds_qna.getColumn(nRow, "qnaTitle")
        					,qnaContent: this.ds_qna.getColumn(nRow, "qnaContent")
        					,qnaDate: this.ds_qna.getColumn(nRow, "qnaDate")
        					,qnaStatus: this.ds_qna.getColumn(nRow, "qnaStatus")
        					,qnaCount: this.ds_qna.getColumn(nRow, "qnaCount")
        					,sCode: this.ds_qna.getColumn(nRow, "sCode")};

        	var nLeft = system.clientToScreenX(this, 10);
        	var nTop  = system.clientToScreenY(this, 10);
        	var objChild = new ChildFrame("popqnaAdminDetail", nLeft, nTop, 480, 600);
        	objChild.set_formurl("Popup::qnaAdminDetail.xfdl");
        	objChild.set_openalign("center middle");
        	objChild.set_dragmovetype("normal");
        	objChild.showModal(this.getOwnerFrame(), objParam, this, "fn_popupCallback");
        	trace("Popup::qnaAdminDetail.xfdl");



        };


        this.fn_popupCallback = function(strPopupId, strReturn)
        {
        	if(strReturn == undefined)
        	{
        	return;
        	}
        	if(strPopupId == "popqnaAdminDetail")
        	{
        		return;
        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.adminQna_onload,this);
            this.Grid00.addEventHandler("oncelldblclick",this.Grid00_oncelldblclick,this);
        };
        this.loadIncludeScript("adminQna.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
