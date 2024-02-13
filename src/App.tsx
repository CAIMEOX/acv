import { useCallback } from "react";
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Panel,
  BackgroundVariant,
} from "reactflow";
import "reactflow/dist/style.css";
import { nodeInitial, edgeInitial } from "./Nodes.js";

function App() {
  const [nodes, , onNodesChange] = useNodesState(nodeInitial);
  const [edges, setEdges, onEdgesChange] = useEdgesState(edgeInitial);

  const onConnect = useCallback(
    (connection: Edge | Connection) =>
      setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );
  const defaultEdgeOptions = { animated: false };

  return (
    <ReactFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      defaultEdgeOptions={defaultEdgeOptions}
      onConnect={onConnect}
      fitView
      title="Animation Controller Visualizer"
    >
      <Panel position="top-left">
        <h2>Vite Flow</h2>
      </Panel>
      <Background variant={BackgroundVariant.Dots} />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
}

export default App;
