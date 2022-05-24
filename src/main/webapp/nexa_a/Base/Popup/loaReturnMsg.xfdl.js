(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("loaReturnMsg");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(350,350);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_loaReturn", this);
            obj._setContents("<ColumnInfo><Column id=\"sCode\" type=\"STRING\" size=\"256\"/><Column id=\"lReturnMsg\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","3","2","343","314",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid black");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","2","5","125","30",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("반려사유");
            obj.set_textAlign("left");
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
            obj = new BindItem("item1","Div00.form.TextArea00","value","ds_loaReturn","lReturnMsg");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("loaReturnMsg.xfdl", function() {
        //휴학반려메시지 작성
        this.loaReturnMsg_onload = function(obj,e)
        {
        	this.ds_loaReturn.addRow();
        	this.ds_loaReturn.setColumn(0, "sCode", this.parent.sCode);
        	this.ds_loaReturn.setColumn(0, "lReturnMsg", this.parent.lReturnMsg);
        };

        this.btn_msgSubmit_onclick = function(obj,e)
        {
        	var msg = this.Div00.form.TextArea00.value;
        	var sCode = this.ds_loaReturn.getColumn(0, "sCode");
        	this.transaction(
        	"tr_returnMsg"
        	,"SnuURL::loa/updateMsg.snu"
        	,""
        	,""
        	,"in_Var1="+sCode+" in_Var2="+msg+""
        	,"fn_callback_loapop"


        	)
        };

        this.btn_close_onclick = function(obj,e)
        {
        	this.close();
        };

        this.fn_callback_loapop = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_returnMsg")
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
            this.addEventHandler("onload",this.loaReturnMsg_onload,this);
            this.btn_msgSubmit.addEventHandler("onclick",this.btn_msgSubmit_onclick,this);
            this.btn_close.addEventHandler("onclick",this.btn_close_onclick,this);
        };
        this.loadIncludeScript("loaReturnMsg.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
