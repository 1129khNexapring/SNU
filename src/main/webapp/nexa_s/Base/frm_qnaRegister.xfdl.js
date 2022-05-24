(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_qnaRegister");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(920,510);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_qna", this);
            obj._setContents("<ColumnInfo><Column id=\"qnaNo\" type=\"INT\" size=\"256\"/><Column id=\"qnaTitle\" type=\"STRING\" size=\"256\"/><Column id=\"qnaContent\" type=\"STRING\" size=\"256\"/><Column id=\"qnaDate\" type=\"STRING\" size=\"256\"/><Column id=\"qnaStatus\" type=\"STRING\" size=\"256\"/><Column id=\"qnaCount\" type=\"INT\" size=\"256\"/><Column id=\"sCode\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Static("Static00_01","18","85","152","45",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_text("제목");
            obj.set_border("1px solid black");
            obj.set_background("#efefef");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new Edit("edit_registerTitle","175","85","689","45",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Static("Static00_02","18","132","152","270",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("내용");
            obj.set_border("1px solid black");
            obj.set_background("#efefef");
            obj.set_textAlign("center");
            this.addChild(obj.name, obj);

            obj = new TextArea("ta_registerContent","175","132","689","270",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_border("1px solid black");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","764","410","101","35",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            obj.set_text("등록");
            this.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",920,510,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_qnaRegister.xfdl", function() {
        var sCode = nexacro.getEnvironmentVariable("ev_Val");



        this.Button00_onclick = function(obj,e)
        {
        	var rTitle = this.edit_registerTitle.value;
        	var rContent = this.ta_registerContent.value;

        	this.transaction(
                		"tr_register"
                		,"SnuURL::qna/register.snu"
                		,""
                		,""
                		,"inVar1=" + rTitle + " inVar2=" + rContent + " inVar3=" + sCode
                		,"fn_callback_tran"
                	)
        	this.close();
        	this.parent.reload();
        };



        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
        };
        this.loadIncludeScript("frm_qnaRegister.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
