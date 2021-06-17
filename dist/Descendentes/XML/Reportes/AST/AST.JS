<<<<<<< HEAD
class TreeDescXML {
=======
class Tree {
>>>>>>> 1b12fdc6b8708bf62b9047fc6ed7149c10d406d5
    constructor() {
        this.auxNumbre = 1;
        this.auxString = "digraph G{\n ";
    }

    graph(treeNode) {
        if (treeNode.nodeNumber == 0) {
            treeNode.nodeNumber = this.auxNumber;
            this.auxNumber++;
        }
        treeNode.value = treeNode.value.toString();
<<<<<<< HEAD
        treeNode.value = treeNode.value.replace('"', '');
        treeNode.value = treeNode.value.replace('"', '');
        this.auxString += node.nodeNumber + '[label = "' + treeNode.value + '"];\n';
        treeNode.childList.forEach((child) => {
            this.auxString += treeNode.nodeNumber + "->" + this.auxNumber + ";\n";
            this.graph(child);
=======
        treeNode.value = treeNode.value.replace('"','');
        treeNode.value = treeNode.value.replace('"','');
        this.auxString += node.nodeNumber + '[label = "' + treeNode.value + '"];\n';
        treeNode.childList.forEach((child) => {
        this.auxString += treeNode.nodeNumber + "->" + this.auxNumber + ";\n";
        this.graph(child);
>>>>>>> 1b12fdc6b8708bf62b9047fc6ed7149c10d406d5
        });
        this.auxString = this.auxString.replace("undefined", "");
        return this.auxString;
    }


    rasverse(treeNode) {
        treeNode.childList.forEach((child) => {
<<<<<<< HEAD
            this.trasverse(child);
        });
    }
}
=======
          this.trasverse(child);
        });
    }
}
>>>>>>> 1b12fdc6b8708bf62b9047fc6ed7149c10d406d5
