class NodeDescXML {
    constructor(value) {
        this.value = value;
        this.childList = [];
    }

    setChild(value) {
        this.childList.push(value);
    }
}