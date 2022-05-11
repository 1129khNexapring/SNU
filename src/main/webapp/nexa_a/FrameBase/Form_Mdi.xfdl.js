(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("Form_Mdi");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1080,30);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Tab("tab_mdi","90","1","569","29",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            this.addChild(obj.name, obj);

            obj = new Tabpage("Tabpage2",this.tab_mdi);
            obj.set_text("Tabpage2");
            this.tab_mdi.addChild(obj.name, obj);
            // Layout Functions
            //-- Default Layout : this
            obj = new Layout("default","",1080,30,this,function(p){});
            obj.set_mobileorientation("landscape");
            this.addLayout(obj.name, obj);
            
            // BindItem Information

            
            // TriggerItem Information

        };
        
        this.loadPreloadList = function()
        {

        };
        
        // User Script
        this.registerScript("Form_Mdi.xfdl", function() {

        this.Form_Mdi_onload = function(obj,e)
        {
        	this.tab_mdi.removeTabpage(0);
        };

        this.fn_addTab = function(oParam)
        {
        	this.tab_mdi.insertTabpage(oParam.MENU_ID, -1, "", oParam.MENU_NAME);
        }

        this.tab_mdi_onchanged = function(obj,e)
        {
        	var sTabId = obj.tabpages[e.postindex].name;

        	var objApp = nexacro.getApplication();
        	objApp.mainframe.VFameSet00.HFrameSet00.VFrameSet00.WorkFrame[sTabId].setFocus();
        };


        this.tab_mdi_onextrabuttonclick = function(obj,e)
        {
        	var sTabId = obj.tabpages[e.index].name;
        	var objApp = nexacro.getApplication();
        	objApp.mainframe.VFrameSet00.HFrameSet00.VFrameSet00.WorkFrame[sTabId].form.close();
        	obj.removeTabpage(e.index);

        	var nRow = objApp.gds_openForm.findRow("MENU_ID", sTabId);
        	objApp.gds_openForm.deleteRow(nRow);
        };

        this.fn_tabControl = function(pKey)
        {
        	var nCnt = this.tab_mdi.getTabpageCount();

        	for(var i=0; i<nCnt; i++)
        	{
        		var sTabId = this.tab_mdi.tabpages[i].name;
        		if(sTabId == pKey)
        		{
        			this.tab_mdi.set_tabindex(i);
        		}
        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.Form_Mdi_onload,this);
            this.tab_mdi.addEventHandler("onchanged",this.tab_mdi_onchanged,this);
            this.tab_mdi.addEventHandler("onextrabuttonclick",this.tab_mdi_onextrabuttonclick,this);
        };
        this.loadIncludeScript("Form_Mdi.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
