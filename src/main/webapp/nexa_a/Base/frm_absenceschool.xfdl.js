(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_absenceschool");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_loalist", this);
            obj._setContents("<ColumnInfo><Column id=\"lNum\" type=\"STRING\" size=\"256\"/><Column id=\"lReason\" type=\"STRING\" size=\"256\"/><Column id=\"l\" type=\"STRING\" size=\"256\"/><Column id=\"Column3\" type=\"STRING\" size=\"256\"/><Column id=\"Column4\" type=\"STRING\" size=\"256\"/><Column id=\"Column5\" type=\"STRING\" size=\"256\"/><Column id=\"Column6\" type=\"STRING\" size=\"256\"/><Column id=\"Column7\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_student", this);
            obj._setContents("");
            this.addChild(obj.name, obj);
            
            // UI Components Initialize

            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1280,720,this,function(p){});
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("frm_absenceschool.xfdl", function() {
        //폼이 로드됐을 때. 휴학 신청한 학생리스트를 받아와야함

        this.frm_absenceschool_onload = function(obj,e)
        {
        	this.transaction(
        	"tr_lsList"
        	,"SnuURL::loaStudent/list.snu"
        	,""
        	,"ds_loalist=out_list ds_student=out_sList"
        	,""
        	,"fn_callback_loa"
        	)
        };

        this.fn_callback_loa = function(id, nErrorCode, sErrorMsg)
        {
        	if(id=="tr_lsList")
        	{

        	}
        }
        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_absenceschool_onload,this);
        };
        this.loadIncludeScript("frm_absenceschool.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
