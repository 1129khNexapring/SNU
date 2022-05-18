(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        var obj = null;
        
        this.on_create = function()
        {
            this.set_name("frm_schoolschedule");
            this.set_titletext("New Form");
            if (Form == this.constructor)
            {
                this._setFormPosition(1280,720);
            }
            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("dsFileList", this);
            obj._setContents("<ColumnInfo><Column id=\"fileName\" type=\"STRING\" size=\"256\"/><Column id=\"fileSize\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new Dataset("ds_input", this);
            obj._setContents("<ColumnInfo><Column id=\"Column0\" type=\"STRING\" size=\"256\"/><Column id=\"Column1\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"Column0\">1</Col><Col id=\"Column1\">11</Col></Row><Row><Col id=\"Column0\">2</Col><Col id=\"Column1\">22</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            obj = new Dataset("dsSchedule", this);
            obj._setContents("<ColumnInfo><Column id=\"acNo\" type=\"INT\" size=\"256\"/><Column id=\"aCode\" type=\"STRING\" size=\"256\"/><Column id=\"acTitle\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            obj = new FileDialog("FileDialog00", this);
            this.addChild(obj.name, obj);


            obj = new FileUpTransfer("FileUpTransfer00", this);
            this.addChild(obj.name, obj);
            
            // UI Components Initialize
            obj = new Grid("Grid00","317","80","518","162",null,null,null,null,null,null,this);
            obj.set_taborder("0");
            obj.set_binddataset("dsFileList");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"104\"/><Column size=\"48\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"fileName\"/><Cell col=\"1\" text=\"fileSize\"/><Cell col=\"2\"/></Band><Band id=\"body\"><Cell text=\"bind:fileName\"/><Cell col=\"1\" text=\"bind:fileSize\"/><Cell col=\"2\" cursor=\"pointer\" expandimage=\"url(&apos;theme://images/btn_TF_Close_O.png&apos;)\" expandshow=\"show\" expandsize=\"46\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("Button00","850","85","110","35",null,null,null,null,null,null,this);
            obj.set_taborder("1");
            obj.set_text("파일추가");
            this.addChild(obj.name, obj);

            obj = new Button("Button01","852","136","119","35",null,null,null,null,null,null,this);
            obj.set_taborder("2");
            obj.set_text("초기화");
            this.addChild(obj.name, obj);

            obj = new Button("Button02","856","250","116","45",null,null,null,null,null,null,this);
            obj.set_taborder("3");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new TextArea("TextArea00","325","275","516","326",null,null,null,null,null,null,this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);

            obj = new Button("Button03","175","266","100","35",null,null,null,null,null,null,this);
            obj.set_taborder("5");
            obj.set_text("Button03");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid01","190","370","522","205",null,null,null,null,null,null,this);
            obj.set_taborder("6");
            obj.set_binddataset("dsSchedule");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row band=\"head\" size=\"24\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"acNo\"/><Cell col=\"1\" text=\"aCode\"/><Cell col=\"2\" text=\"acTitle\"/><Cell col=\"3\" text=\"startDate\"/><Cell col=\"4\" text=\"endDate\"/></Band><Band id=\"body\"><Cell text=\"bind:acNo\"/><Cell col=\"1\" text=\"bind:aCode\"/><Cell col=\"2\" text=\"bind:acTitle\"/><Cell col=\"3\" text=\"bind:startDate\"/><Cell col=\"4\" text=\"bind:endDate\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);
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
        this.registerScript("frm_schoolschedule.xfdl", function() {
        this.sFileUrl = nexacro.getEnvironment().services["SnuURL"].url+"/uploadFiles.snu"; //http://127.0.0.1:7776
        this.nMaxFileSize = 2000000; // 각 파일 최대 사이즈(2 Mbyte)



        //폼로딩 후 이벤트
        this.frm_schoolschedule_onload = function(obj,e)
        {
        	//파일업로드시 파일저장 폴더경로 postData 셋팅
        	this.FileUpTransfer00.setPostData("filePath", "nuploadFiles");
        	//파일업로드 전송 url셋팅
        	this.FileUpTransfer00.set_url(this.sFileUrl);

        };


        //파일추가 버튼 클릭
        this.Button00_onclick = function(obj,e)
        {
        	this.FileDialog00.open("파일선택", FileDialog.LOAD);
        };

        //파일선택창(FileDialog)닫힐시
        //Web은 e.reason이 1(FileDialog.LOAD)이나 3(FileDialog.MULTILOAD)일 경우에만 발생
        this.FileDialog00_onclose = function(obj,e)
        {
        	if(e.reason == 0) {//파일선택 취소
        		return;
        		}else {
        			if(e.reason == 1)
        			{	//FileDialog.LOAD옵션의 파일선택
        				var vFile = e.virtualfiles[0];
        				var isExist = this.FileUpTransfer00.existFile(vFile);

        				//파일 중복 체크
        				if(isExist)
        				{
        					alert("이미 추가된 파일이 있습니다");
        					return;
        				}
        				//VirtualFile이벤트 생성
        				vFile.addEventHandler("onsuccess", this.Upload_VirtualFile_onsuccess, this);
        				vFile.addEventHandler("onerrror", this.Upload_VirtualFile_onerror, this);

        				//File사이즈 체크를 위해
        				vFile.open(null,VirtualFile.openRead);
        			}
        		}
        };
        //업로드용 Virtual 파일 onsuccess이벤트
        this.Upload_VirtualFile_onsuccess = function(obj, e)
        {
        	if (e.reason == 1) //open() callback
        	{
        		//파일사이즈체크
        		obj.getFileSize();
        	}
        	if(e.reason == 9) //getFileSize()callback
        	{
        		obj.close();
        		var sFileName = obj.filename;
        		var nFileSize = e.filesize;

        		if(nFileSize > this.nMaxFileSize)
        		{
        			alert("첨부파일 최대용량은 2 MByte입니다.");
        			return;
        		}
        		//FileupTransfer해당 파일추가
        		var nIdx = this.FileUpTransfer00.addFile(sFileName,obj);
        		//화면 파일정보 셋팅
        		var nRow = this.dsFileList.insertRow(nIdx);
        		this.dsFileList.setColumn(nRow, "fileName", sFileName);
        		this.dsFileList.setColumn(nRow, "fileSize", nFileSize);
        	}
        }
        //업로드용 virtual 파일 onerror이벤트
        this.Upload_VirtualFile_onerror = function(obj, e)
        {
        	var msg = ">>>>>>> VirtualFile event Error >>>>\n";
        	msg +="errortype : "+e.errortype+"\n";
        	msg +="errormsg  : "+e.errormsg+"\n";
        	msg +="statuscode: "+e.statuscode+"\n";

        	alert(msg);


        }

        // 그리드 삭제이미지 클릭시
        this.Grid00_onexpandup = function(obj,e)
        {
        	var nRow = e.row;
        	//FileUpTransfer 해당 파일 삭제
        	var nIdx = this.FileUpTransfer00.removeFileByIndex(nRow);
        	//정상 삭제 시 해당 데이터 삭제
        	if(nIdx > -1)
        	{
        		obj.getBindDataset().deleteRow(nRow);
        	}
        	trace("파일 갯수:"+this.FileUpTransfer00.filelist.length);
        };
        //초기화 버튼 클릭시
        this.Button01_onclick = function(obj,e)
        {
        	//파일정보 초기화
        	this.fn_FileClear();
        };
        //v파일전송성공시
        this.FileUpTransfer00_onsuccess = function(obj,e)
        {
        	var msg = ">>>>>>>>>> SUCCESS >>>>>>>>\n";
        	msg +="code :"+e.code+"\n";
        	msg +="message:"+e.message+"\n";
        	msg +="url :"+e.url+"\n";
        	msg +="datasets[0].saveXML() : "+e.datasets[0].saveXML()+"\n";

        	this.TextArea00.set_value(msg);
        	//파일정보 초기화
        	this.fn_FileClear();
        };
        //파일전송 중
        this.FileUpTransfer00_onprogress = function(obj,e)
        {
        	trace(e.loaded +" / "+e.total + " Byte Uploading....");
        };

        //파일전송실패시
        this.FileUpTransfer00_onerror = function(obj,e)
        {
        	var msg = ">>>>>>ERROR >>>>>\n";
        	msg += "statuscode:"+e.statuscode+"\n";
        	msg += "requesturi:"+e.requesturi+"\n";
        	msg += "locationuri:"+e.locationuri+"\n";
        	msg += "errormsg:"+e.errormsg+"\n";

        	this.TextArea00.set_value(msg);
        };
        //파일전송 버튼 클릭
        this.Button02_onclick = function(obj,e)
        {
        	if(this.FileUpTransfer00.filelist.length == 0)
        	{
        		alert("첨부한 파일이 없습니다.");
        		return;
        	}
        	//파일 전송
        	this.FileUpTransfer00.upload();
        };

        //파일정보 초기화
        this.fn_FileClear = function()
        {
        	//FileupTransfer파일모두 삭제
        	this.FileUpTransfer00.clearFileList();
        	//파일정보 모두 삭제
        	this.dsFileList.clearData();
        }

        this.Button03_onclick = function(obj,e)
        {
        	this.transaction(
        	"tr_scList"
        	,"SnuURL::calendar/list.snu"
        	,""
        	,"dsSchedule=outSchedule"
        	,""
        	,"fn_callback_sc"
        	)
        };

        this.fn_callback_sc = function(sId, nErrorCode, sErrorMsg)
        {
        	if(sId == "tr_scList")
        	{

        	}
        }

        });
        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload",this.frm_schoolschedule_onload,this);
            this.Grid00.addEventHandler("onexpandup",this.Grid00_onexpandup,this);
            this.Button00.addEventHandler("onclick",this.Button00_onclick,this);
            this.Button01.addEventHandler("onclick",this.Button01_onclick,this);
            this.Button02.addEventHandler("onclick",this.Button02_onclick,this);
            this.Button03.addEventHandler("onclick",this.Button03_onclick,this);
            this.FileDialog00.addEventHandler("onclose",this.FileDialog00_onclose,this);
            this.FileUpTransfer00.addEventHandler("onsuccess",this.FileUpTransfer00_onsuccess,this);
            this.FileUpTransfer00.addEventHandler("onprogress",this.FileUpTransfer00_onprogress,this);
            this.FileUpTransfer00.addEventHandler("onerror",this.FileUpTransfer00_onerror,this);
        };
        this.loadIncludeScript("frm_schoolschedule.xfdl");
        this.loadPreloadList();
        
        // Remove Reference
        obj = null;
    };
}
)();
