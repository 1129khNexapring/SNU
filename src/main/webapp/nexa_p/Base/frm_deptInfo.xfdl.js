(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_deptInfo");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,670);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_dept", this);
            obj._setContents("<ColumnInfo><Column id=\"dCode\" type=\"STRING\" size=\"256\"/><Column id=\"dName\" type=\"STRING\" size=\"256\"/><Column id=\"dField\" type=\"STRING\" size=\"256\"/><Column id=\"officeName\" type=\"STRING\" size=\"256\"/><Column id=\"tuitionFee\" type=\"STRING\" size=\"256\"/><Column id=\"dCapacity\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00","53","62","135","53",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("학과 정보");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00","50","300","135","53",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("학과 사무실");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","50","261","981","6",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_background("gray");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_uni","185","70","143","37",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_enable("false");
            obj.set_value("상남대학교");
            obj.set_color("black");
            obj.set_textAlign("center");
            obj.set_text("상남대학교");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_field","500","70","143","37",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_dept","807","70","143","37",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_enable("false");
            obj.set_color("black");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_office","230","308","143","37",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_color("black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_00_00","480","300","135","53",null,null,null,null,null,null,this);
            obj.set_taborder("7");
            obj.set_text("정원");
            obj.set_font("bold 16px/normal \"Gulim\",\"맑은 고딕\"");
            this.addChild(obj.name, obj);

            obj = new Edit("edt_capacity","600","308","143","37",null,null,null,null,null,null,this);
            obj.set_taborder("8");
            obj.set_enable("false");
            obj.set_textAlign("center");
            obj.set_color("black");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,670,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item0","edt_field","value","ds_dept","dField");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item1","edit_office","value","ds_dept","officeName");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","edt_capacity","value","ds_dept","dCapacity");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","edt_dept","value","ds_dept","dName");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_deptInfo.xfdl", function() {
        this.frm_deptInfo_onload = function(obj,e)
        {
        		this.transaction(
        		"dept_select"// 1.ID
        		,"SnuUrl::dept/info.snu"// 2.URL
        		,"" // 3.InDs : F->S jsp(I,U,D)
        		,"ds_dept=out_dept" // 4.OutDs : S->F jsp(SELECT)
        		,"in_var1=" + nexacro.getEnvironmentVariable("ev_Val") // 5.InVar : F->S(var)
        		,"fn_callback_tran" // 6.callback function(transaction 완료시 호출되는 함수)
        	);
        };


        this.fn_callback_tran = function(id, nErrorCode, sErrorMsg)
        {
        	if(id == "dept_select")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("조회 실패 : " + sErrorMsg);
        			return;
        		}
        		this.alert(this.out_var + " >> 조회 성공");
        	}


        };

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_deptInfo_onload,this);
            this.Static00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
            this.Static00_00_00.addEventHandler("onclick",this.Static00_00_onclick,this);
        };
        this.loadIncludeScript("frm_deptInfo.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
