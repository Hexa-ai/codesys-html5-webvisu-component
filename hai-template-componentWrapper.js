var hai-template-componentElementWrapper;

(function () {
    hai-template-componentElementWrapper = function (idGenerator) {
        this.domNode = document.createElement("TemplateComponent");
        this.domNode.className = "flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
        this.domNode.title = "Info-bulle du bouton";

        document.body.appendChild(this.domNode);

        var self = this;
        this.domNode.onmousedown = function (event) {
            self.sendMouseEvent(event);
        };
        this.domNode.onmousemove = function (event) {
            self.sendMouseEvent(event);
        };
        this.domNode.onmouseup = function (event) {
            self.sendMouseEvent(event);
        };
        this.domNode.onclick = function () {
            self.toggleVariable();
        };
    };

    hai-template-componentElementWrapper.prototype = {
        sendMouseEvent: function (event) {
            if (window.CDSWebVisuAccess) {
                window.CDSWebVisuAccess.sendMouseEvent(event);
            }
        },
        setText: function (value) {
            this.domNode.innerHTML = value;
        },
        setPrimary: function (value) {
           if (this.domNode.className = value) {
            this.domNode.className="flex w-full justify-center rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
           } else {
            this.domNode.className="flex w-full justify-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
           }
        },
        setTooltip: function (value) {
            this.domNode.title = value;
        },
        setVariable: function (value) {
            this.variableValue = value;
        },
        setInvisible: function (value) {
            this.domNode.style.visibility = value ? "hidden" : "visible";
        },
        setDisableInput: function (value) {
            this.domNode.style.pointerEvents = value ? "none" : "auto";
        },
        toggleVariable: function () {
            if (window.CDSWebVisuAccess) {
                this.variableValue = !this.variableValue;
                window.CDSWebVisuAccess.sendSimpleValue("setVariable", this.variableValue)
            }
        },
        convertRgbToHex: function (rgb) {
            return "#" + ((rgb & 0x00FFFFFF).toString(16).padStart(6, '0'));
        }
    };
}());