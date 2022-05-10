(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("modifyInfo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_info", this);
            obj._setContents("<ColumnInfo><Column id=\"infoNo\" type=\"INT\" size=\"256\"/><Column id=\"infoContent\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","6","10","586","435",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid black");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","7","6","139","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("학교알림이 수정");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","7","48","570","377",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_modifyInfo","490","450","102","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("수정");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","Div00.form.TextArea00","value","ds_info","infoContent");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("modifyInfo.xfdl", function() {


        this.modifyInfo_onload = function(obj,e)
        {
        	this.ds_info.addRow();
        	this.ds_info.setColumn(0,"infoNo",this.parent.infoNo);
        	this.ds_info.setColumn(0,"infoContent",this.parent.infoContent);
        };

        this.btn_modifyInfo_onclick = function(obj,e)
        {
        	var content = this.Div00.form.TextArea00.value;
        	var infoNo = this.ds_info.getColumn(0, "infoNo");
        	var rtn =  this.confirm("수정하시겠습니까?", "수정 창");
        	if(rtn == true)
        	{
        		this.transaction(
        		"tr_modifyInfo"
        		,"SnuURL::info/modify.snu"
        		,""
        		,""
        		,"in_Var1="+infoNo+" in_Var2="+nexacro.wrapQuote(content)+""
        		,"fn_callback_modify"
        		)
        	}
        };

        this.fn_callback_modify = function(sId, nErrorCode, sErrorMsg)
        {
        	if(sId == "tr_modifyInfo")
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
            this.addEventHandler("onload",this.modifyInfo_onload,this);
            this.btn_modifyInfo.addEventHandler("onclick",this.btn_modifyInfo_onclick,this);
        };
        this.loadIncludeScript("modifyInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
