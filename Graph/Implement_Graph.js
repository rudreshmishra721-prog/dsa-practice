//undirected Graph
class Graph {
    constructor(){
        this.numberOfNodes = 0;
        this.adjecentList = {
    
        };
    }
    addVertex(node){

    }
    addEdge(node1, node2){

    }
    showConnections(){
        const allNodes = Object.keys(this.adjecentList);
        for(let node of allNodes){
            let nodeConnections = this.adjecentList[node];
            let connections = "";
            let vertex;
            for(vertex of nodeConnections){
                connections += vertex + "";
            }
            console.log(node + "-->" + connections);
        }
    }
}