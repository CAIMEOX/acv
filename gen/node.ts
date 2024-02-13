import { MinecraftEntity } from "./core/behavior/entities/format/minecraft.entity";
import { Entity } from "./core/resource/entity/1.10.0/entity";
import { FileMorphic, Meta } from "./meta";
type EntityModel = {
  geometry: string;
  textures: string[];
};

type EntityNode = {
  identifier: string;
  entity: MinecraftEntity;
  client_entity: Entity;
  model: EntityModel;
};

function newEdge(from: string, to: string, label: string) {
  return {
    id: `${from}-${to}`,
    source: from,
    type: "line",
    data: { startLabel: label, endLabel: label },
    target: to,
    markerEnd: {
      type: "arrowclosed",
    },
  };
}

function acFlowBuilder(acm: Map<string, object>, name: string) {
  const ac = acm.get(name);
  if (ac === undefined) throw new Error("Animation Controller not found");
  const nodes: object[] = [];
  const edges: object[] = [];
  const states = ac["states"];
  let index = 0;
  for (const stateName of Object.keys(states)) {
    const state = states[stateName];
    nodes.push({
      id: stateName,
      data: { label: stateName },
      position: { x: 0, y: 100 * index },
    });
    index++;
    if (state.transitions !== undefined) {
      for (const transition of state.transitions) {
        const nextState = Object.keys(transition)[0];
        const cond = transition[Object.keys(transition)[0]];
        edges.push(newEdge(stateName, nextState, cond));
      }
    }
  }
  return { nodes, edges };
}

function main() {
  const meta: Meta = {
    project_root: "vanilla",
    resource: "resource_pack",
    behavior: "behavior_pack",
  };
  const fm = new FileMorphic(meta);
  const { nodes, edges } = acFlowBuilder(
    fm.resource.animation_controller,
    "controller.animation.armor_stand.pose"
  );
  console.log("export const nodes1 = ", nodes);
  console.log("export const edges1 = ", edges);
}

main();
