import md5 from 'md5'
import getFirebase from './firebaseService.js';
const firebase = getFirebase();
const treesRef = firebase.database().ref('trees');
const devOfflineMode = true;
const trees = {};

class OfflineTree {
    constructor (factId, parentId){
        this.factId = factId;
        this.parentId = parentId;
        this.children = [];
        this.id = md5(JSON.stringify({factId:factId, parentId:parentId, children: this.children})) // id mechanism for trees may very well change
    }
}
class OnlineTree {
    constructor(factId, parentId) {
        this.factId = factId;
        this.parentId = parentId;
        this.children = [];

        const treeObj = {factId: factId, parentId: parentId, children: this.children}
        this.id = md5(JSON.stringify(treeObj))
        this.treeRef = treesRef.push({
            id: this.id,
            factId,
            parentId,
            children
        })
    }

    addChild(treeId) {
        this.treeRef.child('children').push(treeId)
    }

    removeChild(treeId) {

    }

    changeParent(newParentId) {
        this.treeRef.update({
            parentId: newParentId
        })
    }
}

//invoke like a constructor - new Tree(parentId, factId)
export default function Tree(offlineMode){
    let args = arguments.splice(1)
    return offlineMode ? OfflineTree(args) :  OnlineTree(args);
}
/*
facts can have dependencies

trees can have dependencies

trees can have children

*/