(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("modifyQnaReply");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(330,60);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qnaReply", this);
            obj._setContents("<ColumnInfo><Column id=\"aCode\" type=\"STRING\" size=\"256\"/><Column id=\"qnaReplyNo\" type=\"INT\" size=\"256\"/><Column id=\"qnaReplyContent\" type=\"STRING\" size=\"256\"/><Column id=\"qnaReplyDate\" type=\"STRING\" size=\"256\"/><Column id=\"qnaNo\" type=\"INT\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Edit("Edit00","10","9","198","42",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","218","15","92","28",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("수정완료");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",330,60,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_qnaReply","qnaReplyContent");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("modifyQnaReply.xfdl", function() {


        this.modifyQnaReply_onload = function(obj,e)
        {
        	 this.ds_qnaReply.addRow();
        	this.ds_qnaReply.setColumn(0, "qnaReplyContent",	 this.parent.qnaReplyContent);
        };

        this.Button00_onclick = function(obj,e)
        {

        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.modifyQnaReply_onload,this);
            this.Edit00.addEventHandler("onchanged",this.Edit00_onchanged,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("modifyQnaReply.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
