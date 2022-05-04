(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("TransferReturnMsg");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_transferMsg", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"tMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","3","2","343","313",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid black");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","2","5","125","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("반려사유");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","3","39","335","269",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_msgSubmit","260","319","85","27",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("보내기");
            this.addChild(obj.name, obj);

            obj = new Button("btn_close","6","319","85","27",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("취소");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",350,350,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("TransferReturnMsg.xfdl", function() {
        //전과 반려 메시지 작성
        this.TransferReturnMsg_onload = function(obj,e)
        {
        	this.ds_transferMsg.addRow();
        	this.ds_transferMsg.setColumn(0, "sCode", this.parent.sCode);
        	this.ds_transferMsg.setColumn(0, "tMsg",  this.parent.tMsg);
        };



        this.btn_msgSubmit_onclick = function(obj,e)
        {
        	var msg = this.Div00.form.TextArea00.value;
        	var sCode = this.ds_transferMsg.getColumn(0, "sCode");
        	this.transaction(
        	"tr_trReturnMsg"
        	,"SnuURL::transfer/updateMsg.snu"
        	,""
        	,""
        	,"in_Var1="+sCode+" in_Var2="+msg+""
        	,"fn_callback_trpop"
        	)
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.fn_callback_trpop = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_trReturnMsg")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert(sErrorMsg);
        		}
        		this.alert(sErrorMsg);
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.TransferReturnMsg_onload,this);
            this.btn_msgSubmit.addEventHandler("onclick",this.btn_msgSubmit_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("TransferReturnMsg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
