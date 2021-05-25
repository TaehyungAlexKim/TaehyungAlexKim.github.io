// Definition of Array & object for devices
let videoDevices = [];
let hddDevices = [];
let ssdDevices = [];

let videoResolutions = ['HD : 1280 x 720', 'FULL HD : 1920 x 1080', 'UHD : 3840 x 2160', '4K : 4096 x 2160'];
let videoTypes = ['LCD', 'LED', 'Plasma'];
let diskSize = ['500GB', '1TB', '2TB', '4TB'];
let platterSize = ['2.5inches', '3.5inches'];
let numberOfPlatter = ['1', '2', '3', '4'];
let ssdTypes = ['Flash', 'DRAM'];

// index Number
let videoIndex;
let hddIndex;
let sddIndex;

// Definition of Regular Expression
let numberCheck = /^[0-9+]*$/;

// create the base class - device
class Device {
    constructor(status, cost, supplier, serial) {
        this._status = status; // boolean
        this._cost = cost; // string
        this._supplier = supplier; // string
        this._serial = serial; // string
    }
    // create a method
    enable() {
        this._status = true;
    }
    disable() {
        this._status = false;
    }
    get status() {
        return this._status;
    }
    get cost() {
        return this._cost;
    }
    get supplier() {
        return this._supplier;
    }
    get serial() {
        return this._serial;
    }
    set cost(value) {
        if (value) {
            this._cost = value;
        }
    }
    set supplier(value) {
        if (value) {
            this._supplier = value;
        }
    }
    set serial(value) {
        if (value) {
            this._serial = value;
        }
    }
}

// create a new class that extends the base divice class
class VideoDevice extends Device {
    constructor(status, cost, supplier, serial, resolution, type) {
        super(status, cost, supplier, serial);
        this._resolution = resolution; // string
        this._type = type; // string
    }
    get resolution() {
        return this._resolution;
    }
    get type() {
        return this._type;
    }
    set resolution(value) {
        if (value) {
            this._resolution = value;
        }
    }
    set type(value) {
        if (value) {
            this._type = value;
        }
    }
}
class DiskDevice extends Device {
    constructor(status, cost, supplier, serial, diskSize) {
        super(status, cost, supplier, serial);
        this._diskSize = diskSize; // string
    }

    get diskSize() {
        return this._diskSize;
    }

    set diskSize(value) {
        if (value) {
            this._diskSize = value;
        }
    }
}
class HddDevice extends DiskDevice {
    constructor(status, cost, supplier, serial, diskSize, platterSize, numberOfPlatter) {
        super(status, cost, supplier, serial, diskSize);
        this._platterSize = platterSize; // string
        this._numberOfPlatter = numberOfPlatter; // string
    }
    get platterSize() {
        return this._platterSize;
    }
    set platterSize(value) {
        if (value) {
            this._platterSize = value;
        }
    }
    get numberOfPlatter() {
        return this._numberOfPlatter;
    }
    set numberOfPlatter(value) {
        if (value) {
            this._numberOfPlatter = value;
        }
    }
}
class SsdDevice extends DiskDevice {
    constructor(form, cost, supplier, serial, diskSize, ssdType, wearLeveling) {
        super(form, cost, supplier, serial, diskSize);
        this._ssdType = ssdType; // string
        this._wearLeveling = wearLeveling; // boolean
    }
    get ssdType() {
        return this._ssdType;
    }
    get wearLeveling() {
        return this._wearLeveling;
    }
    set ssdType(value) {
        if (value) {
            this._ssdType = value;
        }
    }
    set wearLeveling(value) {
        if (value) {
            this._wearLeveling = value;
        }
    }
}

// New button
function newButton(id) {
    $gel(id).innerHTML = "";
    //Status
    createForm(id, 'formStatus', 'Status', 'check', '');
    // Cost
    createForm(id, 'formCost', 'Replacement Cost:', 'text', '');
    // Supplier
    createForm(id, 'supplierName', 'Supplier Name:', 'text', '');
    // Serial Number
    createForm(id, 'serialNumber', 'Serial Number:', 'text', '');
    progressControl(id, 1, 1); // Progress
    if (id == 'videoForm') {
        // Resolution 
        createForm(id, 'resolution', 'Resolution:', 'select', videoResolutions);
        //Type 
        createForm(id, 'type', 'Type:', 'select', videoTypes);
        // Set the index when user click the Previous or Next button after click the New button
        videoIndex = videoDevices.length;
    } else if (id == 'hddForm') {
        //Disk Device (Size)
        createForm(id, 'diskSize', 'Disk Size:', 'select', diskSize);
        //Platter Size
        createForm(id, 'platterSize', 'Platter Size:', 'select', platterSize);
        //Number of Platter
        createForm(id, 'numberOfPlatter', 'Number of Platter:', 'select', numberOfPlatter);
        // Set the index when user click the Previous or Next button after click the New button
        hddIndex = hddDevices.length;
    } else if (id == 'ssdForm') {
        //Disk Device (Size)
        createForm(id, 'ssdSize', 'Disk Size:', 'select', diskSize);
        //SSD Type
        createForm(id, 'ssdType', 'SSD Type:', 'select', ssdTypes);
        // Wear Leveling
        createForm(id, 'wearLeveling', 'Wear Leveling:&nbsp;', 'labelonly', '');
        // Wear Leveling New
        //true
        createForm(id, 'wearLeveling1', 'True', 'radio', 'true');
        //false
        createForm(id, 'wearLeveling2', 'False', 'radio', 'false');
        // Set the index when user click the Previous or Next button after click the New button
        ssdIndex = ssdDevices.length;
    }
    $gel(id + "-insert").innerHTML = "Insert";
    $gel(id + "-insert").className = "btn btn-primary";
}
function updateButton(id) {
    if ($gel(id + '-formCost') && $gel(id + '-supplierName') && $gel(id + '-serialNumber')) {
        // Blank Check
        if (testEmpty(id + '-formCost') == false || testEmpty(id + '-supplierName') == false || testEmpty(id + '-serialNumber') == false) {
            window.alert("Please check the red based-color textbox.");
        } else {
            // Status
            let status = $gel(id + '-formStatus').checked;
            // Cost
            let cost = $gel(id + '-formCost').value;
            // Supplier Name
            let supplier = $gel(id + '-supplierName').value;
            // Serial Number
            let serial = $gel(id + '-serialNumber').value;
            // check the value of Cost using Regular Expression
            if (!numberCheck.test(cost)) {
                alert("Please input only Number in Replacement Cost form");
            } else {
                let tmpobj;
                if (id == 'videoForm') {
                    let resolution = $gel('resolution').value;
                    let type = $gel('type').value;
                    tmpobj = {
                        status: status
                        , cost: cost
                        , supplier: supplier
                        , serial: serial
                        , resolution: resolution
                        , type: type
                    }
                } else if (id == 'hddForm') {
                    let diskSize = $gel('diskSize').value;
                    let platterSize = $gel('platterSize').value;
                    let numberOfPlatter = $gel('numberOfPlatter').value;
                    tmpobj = {
                        status: status
                        , cost: cost
                        , supplier: supplier
                        , serial: serial
                        , diskSize: diskSize
                        , platterSize: platterSize
                        , numberOfPlatter: numberOfPlatter
                    }
                } else if (id == 'ssdForm') {
                    let diskSize = $gel('ssdSize').value;
                    let ssdType = $gel('ssdType').value;
                    let wearLeveling
                    if (document.getElementsByName("ssdForm-wearLeveling")[0].checked == false && document.getElementsByName("ssdForm-wearLeveling")[1].checked == false) {
                        window.alert("Please Check The Wear Leveling");
                    } else {
                        wearLeveling = document.getElementsByName("ssdForm-wearLeveling")[0].checked;
                        tmpobj = {
                            status: status
                            , cost: cost
                            , supplier: supplier
                            , serial: serial
                            , diskSize: diskSize
                            , ssdType: ssdType
                            , wearLeveling: wearLeveling
                        }
                    }
                }
                if (tmpobj != undefined) {
                    updateProcess(id, tmpobj);
                }
            }
        }
    } else {
        window.alert("Please press New button.");
    }
}
function updateProcess(form, tmpobj) {
    if ($gel(form + '-insert').innerHTML == 'Insert') {
        // Case of Push
        if (form == "videoForm") {
            videoDevices.push(new VideoDevice(tmpobj.status, tmpobj.cost, tmpobj.supplier, tmpobj.serial, tmpobj.resolution, tmpobj.type));
            videoIndex = videoDevices.length - 1;
            progressControl(form, videoDevices.length, videoDevices.length); // Progress
        } else if (form == "hddForm") {
            hddDevices.push(new HddDevice(tmpobj.status, tmpobj.cost, tmpobj.supplier, tmpobj.serial, tmpobj.diskSize, tmpobj.platterSize, tmpobj.numberOfPlatter));
            hddIndex = hddDevices.length - 1;
            progressControl(form, hddDevices.length, hddDevices.length); // Progress
        } else if (form == "ssdForm") {
            ssdDevices.push(new SsdDevice(tmpobj.status, tmpobj.cost, tmpobj.supplier, tmpobj.serial, tmpobj.diskSize, tmpobj.ssdType, tmpobj.wearLeveling));
            ssdIndex = ssdDevices.length - 1;
            progressControl(form, ssdDevices.length, ssdDevices.length); // Progress
        }
        $gel(form + "-insert").innerHTML = "Update";
        $gel(form + "-insert").className = "btn btn-secondary";
    } else if ($gel(form + '-insert').innerHTML == 'Update') {
        // Case of Set
        if (form == "videoForm") {
            videoDevices[videoIndex].cost = tmpobj.cost;
            videoDevices[videoIndex].supplier = tmpobj.supplier;
            videoDevices[videoIndex].serial = tmpobj.serial;
            videoDevices[videoIndex].resolution = tmpobj.resolution;
            videoDevices[videoIndex].type = tmpobj.type;
        } else if (form == "hddForm") {
            hddDevices[hddIndex].cost = tmpobj.cost;
            hddDevices[hddIndex].supplier = tmpobj.supplier;
            hddDevices[hddIndex].serial = tmpobj.serial;
            hddDevices[hddIndex].diskSize = tmpobj.diskSize;
            hddDevices[hddIndex].platterSize = tmpobj.platterSize;
            hddDevices[hddIndex].numberOfPlatter = tmpobj.numberOfPlatter;
        } else if (form == "ssdForm") {
            ssdDevices[ssdIndex].cost = tmpobj.cost;
            ssdDevices[ssdIndex].supplier = tmpobj.supplier;
            ssdDevices[ssdIndex].serial = tmpobj.serial;
            ssdDevices[ssdIndex].disSize = tmpobj.disSize;
            ssdDevices[ssdIndex].ssdType = tmpobj.ssdType;
            ssdDevices[ssdIndex].wearLeveling = tmpobj.wearLeveling;
        }
    }
}

function createForm(formId, inputId, text, type, selectArray) {
    if (type == 'text') {
        //label
        let tmpLabel = document.createElement("label");
        tmpLabel.setAttribute("for", inputId);
        //tmpLabel.setAttribute("class", "custom-control");
        tmpLabel.innerHTML = text;
        $gel(formId).appendChild(tmpLabel);
        //input(text)
        let tmpInput = document.createElement("input");
        tmpInput.setAttribute("type", "text");
        tmpInput.setAttribute("class", "form-control");
        tmpInput.setAttribute("id", formId + "-" + inputId);
        $gel(formId).appendChild(tmpInput);
    } else if (type == 'check') {
        // input(check)
        let tmpdiv = document.createElement("div");
        tmpdiv.setAttribute("class", "custom-control custom-checkbox");
        tmpdiv.setAttribute("id", formId + "-" + inputId + "-div")
        $gel(formId).appendChild(tmpdiv);
        let tmpInput = document.createElement("input");
        tmpInput.setAttribute("type", "checkbox");
        tmpInput.setAttribute("class", "custom-control-input");
        tmpInput.setAttribute("id", formId + "-" + inputId);
        tmpInput.setAttribute("onchange", "statusChange('" + formId + "')");
        document.getElementById(formId + "-" + inputId + "-div").appendChild(tmpInput);
        //label
        let tmpLabel = document.createElement("label");
        tmpLabel.setAttribute("for", formId + "-" + inputId);
        tmpLabel.setAttribute("class", "custom-control-label");
        tmpLabel.innerHTML = text;
        document.getElementById(formId + "-" + inputId + "-div").appendChild(tmpLabel);
    } else if (type == 'select') {
        //label
        let tmpLabel = document.createElement("label");
        tmpLabel.setAttribute("for", inputId);
        //tmpLabel.setAttribute("class", "custom-select");
        tmpLabel.innerHTML = text;
        $gel(formId).appendChild(tmpLabel);
        //selectboxTag
        let tmpSelect = document.createElement("select");
        tmpSelect.setAttribute("class", "custom-select");
        tmpSelect.setAttribute("id", inputId);
        $gel(formId).appendChild(tmpSelect);
        //optionTag
        for (var i = 0; i < selectArray.length; i++) {
            let tmpSelectOption = document.createElement("option");
            tmpSelectOption.setAttribute("value", selectArray[i]);
            tmpSelectOption.innerHTML = selectArray[i];
            document.getElementById(inputId).appendChild(tmpSelectOption);
        }
    } else if (type == 'radio') {
        let tmpRadio = document.createElement("input");
        tmpRadio.setAttribute("type", "radio");
        tmpRadio.setAttribute("name", formId + "-" + "wearLeveling");
        tmpRadio.setAttribute("id", inputId);
        tmpRadio.setAttribute("value", selectArray);
        //tmpRadio.setAttribute("class", "form-check-input")
        $gel(formId).appendChild(tmpRadio);

        let tmpLabel = document.createElement("label");
        tmpLabel.setAttribute("for", inputId);
        tmpLabel.setAttribute("class", "form-check-label");
        //tmpLabel.setAttribute("class", "custom-select");
        tmpLabel.innerHTML = text;
        $gel(formId).appendChild(tmpLabel);
    } else if (type == "labelonly") {
        let tmpLabel = document.createElement("label");
        //tmpLabel.setAttribute("class", "custom-select");
        tmpLabel.innerHTML = text;
        $gel(formId).appendChild(tmpLabel);
    }
}

function bunttonNextPrevious(id, btype) {
    let flag = false;
    if ($gel(id + '-formCost') && $gel(id + '-supplierName') && $gel(id + '-serialNumber')) {
        if (id == "videoForm") {
            if (videoDevices.length != 0) {
                if (btype == "next") {
                    if ((videoDevices.length - videoIndex) == 1) {
                        window.alert("This is a last page!");
                    } else {
                        videoIndex++;
                        flag = true;
                    }
                } else if (btype = "previous") {
                    if (videoIndex == 0) {
                        window.alert("This is a first page!");
                    } else {
                        videoIndex--;
                        flag = true;
                    }
                }
                if (flag == true) {
                    let tmpobj = {
                        status: videoDevices[videoIndex].status
                        , cost: videoDevices[videoIndex].cost
                        , supplier: videoDevices[videoIndex].supplier
                        , serial: videoDevices[videoIndex].serial
                        , resolution: videoDevices[videoIndex].resolution
                        , type: videoDevices[videoIndex].type
                    }
                    displayDevice("videoForm", tmpobj);
                    progressControl(id, videoIndex + 1, videoDevices.length); // Progress
                }
            } else {
                window.alert("We don't have device list");
            }
        } else if (id == "hddForm") {
            if (hddDevices.length != 0) {
                if (btype == "next") {
                    if ((hddDevices.length - hddIndex) == 1) {
                        window.alert("This is a last page!");
                    } else {
                        hddIndex++;
                        flag = true;
                    }
                } else if (btype = "previous") {
                    if (hddIndex == 0) {
                        window.alert("This is a first page!");
                    } else {
                        hddIndex--;
                        flag = true;
                    }
                }
                if (flag == true) {
                    let tmpobj = {
                        status: hddDevices[hddIndex].status
                        , cost: hddDevices[hddIndex].cost
                        , supplier: hddDevices[hddIndex].supplier
                        , serial: hddDevices[hddIndex].serial
                        , diskSize: hddDevices[hddIndex].diskSize
                        , platterSize: hddDevices[hddIndex].platterSize
                        , numberOfPlatter: hddDevices[hddIndex].numberOfPlatter
                    }
                    displayDevice("hddForm", tmpobj);
                    progressControl(id, hddIndex + 1, hddDevices.length); // Progress
                }
            } else {
                window.alert("We don't have device list");
            }
        } else if (id == "ssdForm") {
            if (ssdDevices.length != 0) {
                if (btype == "next") {
                    if ((ssdDevices.length - ssdIndex) == 1) {
                        window.alert("This is a last page!");
                    } else {
                        ssdIndex++;
                        flag = true;
                    }
                } else if (btype = "previous") {
                    if (ssdIndex == 0) {
                        window.alert("This is a first page!");
                    } else {
                        ssdIndex--;
                        flag = true;
                    }
                }
                if (flag == true) {
                    let tmpobj = {
                        status: ssdDevices[ssdIndex].status
                        , cost: ssdDevices[ssdIndex].cost
                        , supplier: ssdDevices[ssdIndex].supplier
                        , serial: ssdDevices[ssdIndex].serial
                        , diskSize: ssdDevices[ssdIndex].diskSize
                        , ssdType: ssdDevices[ssdIndex].ssdType
                        , wearLeveling: ssdDevices[ssdIndex].wearLeveling
                    }
                    displayDevice("ssdForm", tmpobj);
                    progressControl(id, ssdIndex + 1, ssdDevices.length); // Progress
                }
            } else {
                window.alert("We don't have device list");
            }
        }

    } else {
        window.alert("Please Insert New Device.");
    }
}
function statusChange(id) {
    if ($gel(id + '-insert').innerHTML == 'Update') {
        let formStatus = document.getElementById(id + "-formStatus");
        if (id == "videoForm") {
            deviceType = videoDevices[videoIndex];
        } else if (id == "hddForm") {
            deviceType = hddDevices[hddIndex];
        } else if (id == "ssdForm") {
            deviceType = ssdDevices[ssdIndex];
        }
        if (formStatus.checked === true) {
            // Checked
            deviceType.enable();
        } else {
            // Unchecked
            deviceType.disable();
        }
    }
}
function displayDevice(id, obj) {
    // Status
    if (obj.status == true) {
        $gel(id + "-formStatus").checked = true;
    } else {
        $gel(id + "-formStatus").checked = false;
    }
    // Cost
    $gel(id + "-formCost").value = obj.cost;
    // Supplier
    $gel(id + "-supplierName").value = obj.supplier;
    // Serial
    $gel(id + "-serialNumber").value = obj.serial;
    if (id == "videoForm") {
        $gel("resolution").value = obj.resolution;
        $gel("type").value = obj.type;
    } else if (id == "hddForm") {
        $gel("diskSize").value = obj.diskSize;
        $gel("platterSize").value = obj.platterSize;
        $gel("numberOfPlatter").value = obj.numberOfPlatter;
    } else if (id == "ssdForm") {
        $gel("ssdSize").value = obj.diskSize;
        $gel("ssdType").value = obj.ssdType;
        if (obj.wearLeveling == true) {
            document.getElementsByName("ssdForm-wearLeveling")[0].checked = true;
        } else {
            document.getElementsByName("ssdForm-wearLeveling")[1].checked = true;
        }
    }
}
function $gel(id) {
    return document.getElementById(id);
}
function testEmpty(id) {
    if ($gel(id).value === "") {
        $gel(id).style.backgroundColor = "pink";
        return false;
    }
    else {
        $gel(id).style.backgroundColor = "white";
        return true;
    }
}
function progressControl(form, index, length) {
    $gel(form + "-progress").style.width = (index / length) * 100 + "%";
}

function buttonAction() {
    // New button
    $gel("new-video").addEventListener("click", function () { newButton('videoForm'); });
    $gel("new-hdd").addEventListener("click", function () { newButton('hddForm'); });
    $gel("new-ssd").addEventListener("click", function () { newButton('ssdForm'); });
    // Insert, Update button
    $gel("videoForm-insert").addEventListener("click", function () { updateButton('videoForm'); });
    $gel("hddForm-insert").addEventListener("click", function () { updateButton('hddForm'); });
    $gel("ssdForm-insert").addEventListener("click", function () { updateButton('ssdForm'); });
    // button Previous
    $gel("video-previous").addEventListener("click", function () { bunttonNextPrevious('videoForm', 'previous'); });
    $gel("hdd-previous").addEventListener("click", function () { bunttonNextPrevious('hddForm', 'previous'); });
    $gel("ssd-previous").addEventListener("click", function () { bunttonNextPrevious('ssdForm', 'previous'); });
    // button Next
    $gel("video-next").addEventListener("click", function () { bunttonNextPrevious('videoForm', 'next'); });
    $gel("hdd-next").addEventListener("click", function () { bunttonNextPrevious('hddForm', 'next'); });
    $gel("ssd-next").addEventListener("click", function () { bunttonNextPrevious('ssdForm', 'next'); });
}