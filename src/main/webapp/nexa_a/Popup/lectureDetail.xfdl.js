(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("lectureDetail");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(480,600);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_ldetail", this);
            obj._setContents("<ColumnInfo><Column id=\"lName\" type=\"STRING\" size=\"256\"/><Column id=\"lObjective\" type=\"STRING\" size=\"256\"/><Column id=\"lContents\" type=\"STRING\" size=\"256\"/><Column id=\"textbook\" type=\"STRING\" size=\"256\"/><Column id=\"lCapacity\" type=\"STRING\" size=\"256\"/><Column id=\"lCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Div("Div00","10","10","460","550",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("");
            obj.set_border("1px solid black");
            obj.set_background("#ffffff");
            this.addChild(obj.name, obj);

            obj = new Static("Static00","21","34","50","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("0");
            obj.set_text("강의명");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static01","21","134","50","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("1");
            obj.set_text("강의목표");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static02","21","254","50","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("2");
            obj.set_text("강의내용");
            this.Div00.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","107","197","340","164",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("3");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static03","21","384","50","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("4");
            obj.set_text("교재");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static04","21","484","50","50",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("5");
            obj.set_text("희망정원");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit00","107","34","340","64",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("6");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit01","107","124","340","55",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("7");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit02","107","381","340","63",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("8");
            this.Div00.addChild(obj.name, obj);

            obj = new Edit("Edit03","107","487","129","42",null,null,null,null,null,null,this.Div00.form);
            obj.set_taborder("9");
            this.Div00.addChild(obj.name, obj);

            obj = new Button("btn_approval","324","564","146","30",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("승인");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",480,600,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information
            obj = new BindItem("item1","Div00.form.Edit01","value","ds_ldetail","lObjective");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item2","Div00.form.TextArea00","value","ds_ldetail","lContents");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item3","Div00.form.Edit02","value","ds_ldetail","textbook");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item4","Div00.form.Edit03","value","ds_ldetail","lCapacity");
            this.addChild(obj.name, obj);
            obj.bind();

            obj = new BindItem("item0","Div00.form.Edit00","value","ds_ldetail","lName");
            this.addChild(obj.name, obj);
            obj.bind();
            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("lectureDetail.xfdl", function() {
        // function fn_CreateDataset()
        // {
        // 	var objDs = new Dataset();
        // 	objDs.name = "ds_ldetail";
        //
        // 	objDs.addColumn("lName", 		"string");
        // 	objDs.addColumn("lObjective",   "string");
        // 	objDs.addColumn("lContents",    "string");
        // 	objDs.addColumn("textbook",     "string");
        // 	objDs.addCOlumn("lCapacity",    "string");
        //
        // 	this.addChild("ds_ldetail", objDs);
        // 	objDs.addRow();
        // 	objDs.setColumn(this.parent.lName, this.parent.lObjective, this.parent.lContents, this.parent.textbook, this.parent.lCapacity);
        // }



        this.lectureDetail_onload = function(obj,e)
        {
        //   	var lName 		= this.parent.lName;
        //  	var lObjective  = this.parent.lObjective;
        // 	var	lContents   = this.parent.lContents;
        //   	var	textbook    = this.parent.textbook;
        //   	var	lCapacity   = this.parent.lCapacity;
        //  	alert(lName + lObjective + lContents + textbook + lCapacity);
        	this.ds_ldetail.addRow();
        	this.ds_ldetail.setColumn(0, "lName", 	 this.parent.lName);
        	this.ds_ldetail.setColumn(0, "lObjective", this.parent.lObjective);
        	this.ds_ldetail.setColumn(0, "lContents",	 this.parent.lContents);
        	this.ds_ldetail.setColumn(0, "textbook",	 this.parent.textbook);
        	this.ds_ldetail.setColumn(0, "lCapacity",  this.parent.lCapacity);
        	this.ds_ldetail.setColumn(0, "lCode", this.parent.lCode);
        	//this.ds_ldetail.rowposition


        };

        this.btn_approval_onclick = function(obj,e)
        {
        	var rtn = this.confirm("승인하시겠습니까?", "승인 창");
        	if(rtn == true)
        	{
        		var lectureCode = this.ds_ldetail.getColumn(0, "lCode");
        		this.transaction(
        		"tr_approve"
        		,"SnuURL::lecture/approve.snu"
        		,""
        		,"ds_ldetail=out_ldetail"
        		,"in_Var1="+lectureCode+""
        		,"fn_callback_ap"
        		)
        	}
        };

        this.fn_callback_ap = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_approve")
        	{
        		if(nErrorCode < 0)
        		{
        			this.alert("승인 실패");
        			return;
        		}
        		this.alert("승인 성공");
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.lectureDetail_onload,this);
            this.btn_approval.addEventHandler("onclick",this.btn_approval_onclick,this);
        };
        this.loadIncludeScript("lectureDetail.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
