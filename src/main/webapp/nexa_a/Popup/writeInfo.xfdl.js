(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("writeInfo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(600,500);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Div("Div00","6","10","586","435",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid black");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","7","48","570","377",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_wordWrap("none");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00","7","6","139","35",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("학교알림이 작성");
            obj.set_textAlign("center");
            obj.set_font("normal bold 10pt/normal \"Arial\"");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_registerInfo","490","450","102","32",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",600,500,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("writeInfo.xfdl", function() {
        //버튼 클릭시 확인 창을 띄우고, 확인 시 트랜잭션
        this.btn_registerInfo_onclick = function(obj,e)
        {
        	var title = this.Div00.form.TextArea00.value;
        	var rtn = this.confirm("등록하시겠습니까?", "등록 창");
        	if(rtn == true)
        	{
        		this.transaction(
        		"tr_writeInfo"
        		,"SnuURL::info/write.snu"
        		,""
        		,""
        		,"in_Var1="+nexacro.wrapQuote(title)+""
        		,"fn_callback_info"
        		)
        	}
        };

        this.fn_callback_info = function(sId, nErrorCode, sErrorMsg)
        {
        	if(sId == "tr_writeInfo")
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
            this.btn_registerInfo.addEventHandler("onclick",this.btn_registerInfo_onclick,this);
        };
        this.loadIncludeScript("writeInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
