export const nodeInitial = [
  {
    id: "athena",
    data: {
      label: "athena",
    },
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: "brandish",
    data: {
      label: "brandish",
    },
    position: {
      x: 0,
      y: 100,
    },
  },
  {
    id: "cancan_a",
    data: {
      label: "cancan_a",
    },
    position: {
      x: 0,
      y: 200,
    },
  },
  {
    id: "cancan_b",
    data: {
      label: "cancan_b",
    },
    position: {
      x: 0,
      y: 300,
    },
  },
  {
    id: "default",
    data: {
      label: "default",
    },
    position: {
      x: 0,
      y: 400,
    },
  },
  {
    id: "entertain",
    data: {
      label: "entertain",
    },
    position: {
      x: 0,
      y: 500,
    },
  },
  {
    id: "hero",
    data: {
      label: "hero",
    },
    position: {
      x: 0,
      y: 600,
    },
  },
  {
    id: "honor",
    data: {
      label: "honor",
    },
    position: {
      x: 0,
      y: 700,
    },
  },
  {
    id: "none",
    data: {
      label: "none",
    },
    position: {
      x: 0,
      y: 800,
    },
  },
  {
    id: "riposte",
    data: {
      label: "riposte",
    },
    position: {
      x: 0,
      y: 900,
    },
  },
  {
    id: "salute",
    data: {
      label: "salute",
    },
    position: {
      x: 0,
      y: 1000,
    },
  },
  {
    id: "solemn",
    data: {
      label: "solemn",
    },
    position: {
      x: 0,
      y: 1100,
    },
  },
  {
    id: "zombie",
    data: {
      label: "zombie",
    },
    position: {
      x: 0,
      y: 1200,
    },
  },
];
export const edgeInitial = [
  {
    id: "athena-default",
    source: "athena",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 0",
      endLabel: "variable.armor_stand.pose_index == 0",
    },
    target: "default",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "athena-none",
    source: "athena",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 1",
      endLabel: "variable.armor_stand.pose_index == 1",
    },
    target: "none",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "athena-solemn",
    source: "athena",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 2",
      endLabel: "variable.armor_stand.pose_index == 2",
    },
    target: "solemn",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "athena-brandish",
    source: "athena",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 4",
      endLabel: "variable.armor_stand.pose_index == 4",
    },
    target: "brandish",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "athena-honor",
    source: "athena",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 5",
      endLabel: "variable.armor_stand.pose_index == 5",
    },
    target: "honor",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "athena-entertain",
    source: "athena",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 6",
      endLabel: "variable.armor_stand.pose_index == 6",
    },
    target: "entertain",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "athena-salute",
    source: "athena",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 7",
      endLabel: "variable.armor_stand.pose_index == 7",
    },
    target: "salute",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "athena-riposte",
    source: "athena",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 8",
      endLabel: "variable.armor_stand.pose_index == 8",
    },
    target: "riposte",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "athena-zombie",
    source: "athena",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 9",
      endLabel: "variable.armor_stand.pose_index == 9",
    },
    target: "zombie",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "athena-cancan_a",
    source: "athena",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 10",
      endLabel: "variable.armor_stand.pose_index == 10",
    },
    target: "cancan_a",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "athena-cancan_b",
    source: "athena",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 11",
      endLabel: "variable.armor_stand.pose_index == 11",
    },
    target: "cancan_b",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "athena-hero",
    source: "athena",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 12",
      endLabel: "variable.armor_stand.pose_index == 12",
    },
    target: "hero",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "brandish-default",
    source: "brandish",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 0",
      endLabel: "variable.armor_stand.pose_index == 0",
    },
    target: "default",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "brandish-none",
    source: "brandish",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 1",
      endLabel: "variable.armor_stand.pose_index == 1",
    },
    target: "none",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "brandish-solemn",
    source: "brandish",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 2",
      endLabel: "variable.armor_stand.pose_index == 2",
    },
    target: "solemn",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "brandish-athena",
    source: "brandish",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 3",
      endLabel: "variable.armor_stand.pose_index == 3",
    },
    target: "athena",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "brandish-honor",
    source: "brandish",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 5",
      endLabel: "variable.armor_stand.pose_index == 5",
    },
    target: "honor",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "brandish-entertain",
    source: "brandish",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 6",
      endLabel: "variable.armor_stand.pose_index == 6",
    },
    target: "entertain",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "brandish-salute",
    source: "brandish",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 7",
      endLabel: "variable.armor_stand.pose_index == 7",
    },
    target: "salute",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "brandish-riposte",
    source: "brandish",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 8",
      endLabel: "variable.armor_stand.pose_index == 8",
    },
    target: "riposte",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "brandish-zombie",
    source: "brandish",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 9",
      endLabel: "variable.armor_stand.pose_index == 9",
    },
    target: "zombie",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "brandish-cancan_a",
    source: "brandish",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 10",
      endLabel: "variable.armor_stand.pose_index == 10",
    },
    target: "cancan_a",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "brandish-cancan_b",
    source: "brandish",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 11",
      endLabel: "variable.armor_stand.pose_index == 11",
    },
    target: "cancan_b",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "brandish-hero",
    source: "brandish",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 12",
      endLabel: "variable.armor_stand.pose_index == 12",
    },
    target: "hero",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_a-default",
    source: "cancan_a",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 0",
      endLabel: "variable.armor_stand.pose_index == 0",
    },
    target: "default",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_a-none",
    source: "cancan_a",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 1",
      endLabel: "variable.armor_stand.pose_index == 1",
    },
    target: "none",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_a-solemn",
    source: "cancan_a",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 2",
      endLabel: "variable.armor_stand.pose_index == 2",
    },
    target: "solemn",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_a-athena",
    source: "cancan_a",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 3",
      endLabel: "variable.armor_stand.pose_index == 3",
    },
    target: "athena",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_a-brandish",
    source: "cancan_a",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 4",
      endLabel: "variable.armor_stand.pose_index == 4",
    },
    target: "brandish",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_a-honor",
    source: "cancan_a",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 5",
      endLabel: "variable.armor_stand.pose_index == 5",
    },
    target: "honor",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_a-entertain",
    source: "cancan_a",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 6",
      endLabel: "variable.armor_stand.pose_index == 6",
    },
    target: "entertain",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_a-salute",
    source: "cancan_a",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 7",
      endLabel: "variable.armor_stand.pose_index == 7",
    },
    target: "salute",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_a-riposte",
    source: "cancan_a",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 8",
      endLabel: "variable.armor_stand.pose_index == 8",
    },
    target: "riposte",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_a-zombie",
    source: "cancan_a",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 9",
      endLabel: "variable.armor_stand.pose_index == 9",
    },
    target: "zombie",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_a-cancan_b",
    source: "cancan_a",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 11",
      endLabel: "variable.armor_stand.pose_index == 11",
    },
    target: "cancan_b",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_a-hero",
    source: "cancan_a",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 12",
      endLabel: "variable.armor_stand.pose_index == 12",
    },
    target: "hero",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_b-default",
    source: "cancan_b",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 0",
      endLabel: "variable.armor_stand.pose_index == 0",
    },
    target: "default",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_b-none",
    source: "cancan_b",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 1",
      endLabel: "variable.armor_stand.pose_index == 1",
    },
    target: "none",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_b-solemn",
    source: "cancan_b",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 2",
      endLabel: "variable.armor_stand.pose_index == 2",
    },
    target: "solemn",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_b-athena",
    source: "cancan_b",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 3",
      endLabel: "variable.armor_stand.pose_index == 3",
    },
    target: "athena",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_b-brandish",
    source: "cancan_b",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 4",
      endLabel: "variable.armor_stand.pose_index == 4",
    },
    target: "brandish",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_b-honor",
    source: "cancan_b",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 5",
      endLabel: "variable.armor_stand.pose_index == 5",
    },
    target: "honor",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_b-entertain",
    source: "cancan_b",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 6",
      endLabel: "variable.armor_stand.pose_index == 6",
    },
    target: "entertain",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_b-salute",
    source: "cancan_b",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 7",
      endLabel: "variable.armor_stand.pose_index == 7",
    },
    target: "salute",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_b-riposte",
    source: "cancan_b",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 8",
      endLabel: "variable.armor_stand.pose_index == 8",
    },
    target: "riposte",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_b-zombie",
    source: "cancan_b",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 9",
      endLabel: "variable.armor_stand.pose_index == 9",
    },
    target: "zombie",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_b-cancan_a",
    source: "cancan_b",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 10",
      endLabel: "variable.armor_stand.pose_index == 10",
    },
    target: "cancan_a",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "cancan_b-hero",
    source: "cancan_b",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 12",
      endLabel: "variable.armor_stand.pose_index == 12",
    },
    target: "hero",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "default-none",
    source: "default",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 1",
      endLabel: "variable.armor_stand.pose_index == 1",
    },
    target: "none",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "default-solemn",
    source: "default",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 2",
      endLabel: "variable.armor_stand.pose_index == 2",
    },
    target: "solemn",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "default-athena",
    source: "default",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 3",
      endLabel: "variable.armor_stand.pose_index == 3",
    },
    target: "athena",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "default-brandish",
    source: "default",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 4",
      endLabel: "variable.armor_stand.pose_index == 4",
    },
    target: "brandish",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "default-honor",
    source: "default",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 5",
      endLabel: "variable.armor_stand.pose_index == 5",
    },
    target: "honor",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "default-entertain",
    source: "default",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 6",
      endLabel: "variable.armor_stand.pose_index == 6",
    },
    target: "entertain",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "default-salute",
    source: "default",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 7",
      endLabel: "variable.armor_stand.pose_index == 7",
    },
    target: "salute",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "default-riposte",
    source: "default",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 8",
      endLabel: "variable.armor_stand.pose_index == 8",
    },
    target: "riposte",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "default-zombie",
    source: "default",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 9",
      endLabel: "variable.armor_stand.pose_index == 9",
    },
    target: "zombie",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "default-cancan_a",
    source: "default",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 10",
      endLabel: "variable.armor_stand.pose_index == 10",
    },
    target: "cancan_a",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "default-cancan_b",
    source: "default",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 11",
      endLabel: "variable.armor_stand.pose_index == 11",
    },
    target: "cancan_b",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "default-hero",
    source: "default",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 12",
      endLabel: "variable.armor_stand.pose_index == 12",
    },
    target: "hero",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "entertain-default",
    source: "entertain",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 0",
      endLabel: "variable.armor_stand.pose_index == 0",
    },
    target: "default",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "entertain-none",
    source: "entertain",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 1",
      endLabel: "variable.armor_stand.pose_index == 1",
    },
    target: "none",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "entertain-solemn",
    source: "entertain",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 2",
      endLabel: "variable.armor_stand.pose_index == 2",
    },
    target: "solemn",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "entertain-athena",
    source: "entertain",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 3",
      endLabel: "variable.armor_stand.pose_index == 3",
    },
    target: "athena",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "entertain-brandish",
    source: "entertain",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 4",
      endLabel: "variable.armor_stand.pose_index == 4",
    },
    target: "brandish",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "entertain-honor",
    source: "entertain",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 5",
      endLabel: "variable.armor_stand.pose_index == 5",
    },
    target: "honor",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "entertain-salute",
    source: "entertain",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 7",
      endLabel: "variable.armor_stand.pose_index == 7",
    },
    target: "salute",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "entertain-riposte",
    source: "entertain",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 8",
      endLabel: "variable.armor_stand.pose_index == 8",
    },
    target: "riposte",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "entertain-zombie",
    source: "entertain",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 9",
      endLabel: "variable.armor_stand.pose_index == 9",
    },
    target: "zombie",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "entertain-cancan_a",
    source: "entertain",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 10",
      endLabel: "variable.armor_stand.pose_index == 10",
    },
    target: "cancan_a",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "entertain-cancan_b",
    source: "entertain",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 11",
      endLabel: "variable.armor_stand.pose_index == 11",
    },
    target: "cancan_b",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "entertain-hero",
    source: "entertain",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 12",
      endLabel: "variable.armor_stand.pose_index == 12",
    },
    target: "hero",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "hero-default",
    source: "hero",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 0",
      endLabel: "variable.armor_stand.pose_index == 0",
    },
    target: "default",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "hero-none",
    source: "hero",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 1",
      endLabel: "variable.armor_stand.pose_index == 1",
    },
    target: "none",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "hero-solemn",
    source: "hero",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 2",
      endLabel: "variable.armor_stand.pose_index == 2",
    },
    target: "solemn",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "hero-athena",
    source: "hero",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 3",
      endLabel: "variable.armor_stand.pose_index == 3",
    },
    target: "athena",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "hero-brandish",
    source: "hero",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 4",
      endLabel: "variable.armor_stand.pose_index == 4",
    },
    target: "brandish",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "hero-honor",
    source: "hero",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 5",
      endLabel: "variable.armor_stand.pose_index == 5",
    },
    target: "honor",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "hero-entertain",
    source: "hero",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 6",
      endLabel: "variable.armor_stand.pose_index == 6",
    },
    target: "entertain",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "hero-salute",
    source: "hero",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 7",
      endLabel: "variable.armor_stand.pose_index == 7",
    },
    target: "salute",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "hero-riposte",
    source: "hero",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 8",
      endLabel: "variable.armor_stand.pose_index == 8",
    },
    target: "riposte",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "hero-zombie",
    source: "hero",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 9",
      endLabel: "variable.armor_stand.pose_index == 9",
    },
    target: "zombie",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "hero-cancan_a",
    source: "hero",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 10",
      endLabel: "variable.armor_stand.pose_index == 10",
    },
    target: "cancan_a",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "hero-cancan_b",
    source: "hero",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 11",
      endLabel: "variable.armor_stand.pose_index == 11",
    },
    target: "cancan_b",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "honor-default",
    source: "honor",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 0",
      endLabel: "variable.armor_stand.pose_index == 0",
    },
    target: "default",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "honor-none",
    source: "honor",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 1",
      endLabel: "variable.armor_stand.pose_index == 1",
    },
    target: "none",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "honor-solemn",
    source: "honor",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 2",
      endLabel: "variable.armor_stand.pose_index == 2",
    },
    target: "solemn",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "honor-athena",
    source: "honor",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 3",
      endLabel: "variable.armor_stand.pose_index == 3",
    },
    target: "athena",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "honor-brandish",
    source: "honor",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 4",
      endLabel: "variable.armor_stand.pose_index == 4",
    },
    target: "brandish",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "honor-entertain",
    source: "honor",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 6",
      endLabel: "variable.armor_stand.pose_index == 6",
    },
    target: "entertain",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "honor-salute",
    source: "honor",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 7",
      endLabel: "variable.armor_stand.pose_index == 7",
    },
    target: "salute",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "honor-riposte",
    source: "honor",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 8",
      endLabel: "variable.armor_stand.pose_index == 8",
    },
    target: "riposte",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "honor-zombie",
    source: "honor",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 9",
      endLabel: "variable.armor_stand.pose_index == 9",
    },
    target: "zombie",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "honor-cancan_a",
    source: "honor",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 10",
      endLabel: "variable.armor_stand.pose_index == 10",
    },
    target: "cancan_a",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "honor-cancan_b",
    source: "honor",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 11",
      endLabel: "variable.armor_stand.pose_index == 11",
    },
    target: "cancan_b",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "honor-hero",
    source: "honor",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 12",
      endLabel: "variable.armor_stand.pose_index == 12",
    },
    target: "hero",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "none-default",
    source: "none",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 0",
      endLabel: "variable.armor_stand.pose_index == 0",
    },
    target: "default",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "none-solemn",
    source: "none",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 2",
      endLabel: "variable.armor_stand.pose_index == 2",
    },
    target: "solemn",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "none-athena",
    source: "none",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 3",
      endLabel: "variable.armor_stand.pose_index == 3",
    },
    target: "athena",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "none-brandish",
    source: "none",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 4",
      endLabel: "variable.armor_stand.pose_index == 4",
    },
    target: "brandish",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "none-honor",
    source: "none",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 5",
      endLabel: "variable.armor_stand.pose_index == 5",
    },
    target: "honor",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "none-entertain",
    source: "none",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 6",
      endLabel: "variable.armor_stand.pose_index == 6",
    },
    target: "entertain",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "none-salute",
    source: "none",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 7",
      endLabel: "variable.armor_stand.pose_index == 7",
    },
    target: "salute",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "none-riposte",
    source: "none",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 8",
      endLabel: "variable.armor_stand.pose_index == 8",
    },
    target: "riposte",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "none-zombie",
    source: "none",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 9",
      endLabel: "variable.armor_stand.pose_index == 9",
    },
    target: "zombie",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "none-cancan_a",
    source: "none",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 10",
      endLabel: "variable.armor_stand.pose_index == 10",
    },
    target: "cancan_a",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "none-cancan_b",
    source: "none",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 11",
      endLabel: "variable.armor_stand.pose_index == 11",
    },
    target: "cancan_b",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "none-hero",
    source: "none",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 12",
      endLabel: "variable.armor_stand.pose_index == 12",
    },
    target: "hero",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "riposte-default",
    source: "riposte",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 0",
      endLabel: "variable.armor_stand.pose_index == 0",
    },
    target: "default",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "riposte-none",
    source: "riposte",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 1",
      endLabel: "variable.armor_stand.pose_index == 1",
    },
    target: "none",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "riposte-solemn",
    source: "riposte",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 2",
      endLabel: "variable.armor_stand.pose_index == 2",
    },
    target: "solemn",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "riposte-athena",
    source: "riposte",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 3",
      endLabel: "variable.armor_stand.pose_index == 3",
    },
    target: "athena",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "riposte-brandish",
    source: "riposte",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 4",
      endLabel: "variable.armor_stand.pose_index == 4",
    },
    target: "brandish",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "riposte-honor",
    source: "riposte",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 5",
      endLabel: "variable.armor_stand.pose_index == 5",
    },
    target: "honor",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "riposte-entertain",
    source: "riposte",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 6",
      endLabel: "variable.armor_stand.pose_index == 6",
    },
    target: "entertain",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "riposte-salute",
    source: "riposte",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 7",
      endLabel: "variable.armor_stand.pose_index == 7",
    },
    target: "salute",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "riposte-zombie",
    source: "riposte",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 9",
      endLabel: "variable.armor_stand.pose_index == 9",
    },
    target: "zombie",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "riposte-cancan_a",
    source: "riposte",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 10",
      endLabel: "variable.armor_stand.pose_index == 10",
    },
    target: "cancan_a",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "riposte-cancan_b",
    source: "riposte",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 11",
      endLabel: "variable.armor_stand.pose_index == 11",
    },
    target: "cancan_b",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "riposte-hero",
    source: "riposte",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 12",
      endLabel: "variable.armor_stand.pose_index == 12",
    },
    target: "hero",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "salute-default",
    source: "salute",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 0",
      endLabel: "variable.armor_stand.pose_index == 0",
    },
    target: "default",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "salute-none",
    source: "salute",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 1",
      endLabel: "variable.armor_stand.pose_index == 1",
    },
    target: "none",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "salute-solemn",
    source: "salute",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 2",
      endLabel: "variable.armor_stand.pose_index == 2",
    },
    target: "solemn",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "salute-athena",
    source: "salute",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 3",
      endLabel: "variable.armor_stand.pose_index == 3",
    },
    target: "athena",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "salute-brandish",
    source: "salute",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 4",
      endLabel: "variable.armor_stand.pose_index == 4",
    },
    target: "brandish",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "salute-honor",
    source: "salute",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 5",
      endLabel: "variable.armor_stand.pose_index == 5",
    },
    target: "honor",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "salute-entertain",
    source: "salute",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 6",
      endLabel: "variable.armor_stand.pose_index == 6",
    },
    target: "entertain",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "salute-riposte",
    source: "salute",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 8",
      endLabel: "variable.armor_stand.pose_index == 8",
    },
    target: "riposte",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "salute-zombie",
    source: "salute",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 9",
      endLabel: "variable.armor_stand.pose_index == 9",
    },
    target: "zombie",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "salute-cancan_a",
    source: "salute",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 10",
      endLabel: "variable.armor_stand.pose_index == 10",
    },
    target: "cancan_a",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "salute-cancan_b",
    source: "salute",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 11",
      endLabel: "variable.armor_stand.pose_index == 11",
    },
    target: "cancan_b",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "salute-hero",
    source: "salute",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 12",
      endLabel: "variable.armor_stand.pose_index == 12",
    },
    target: "hero",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "solemn-default",
    source: "solemn",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 0",
      endLabel: "variable.armor_stand.pose_index == 0",
    },
    target: "default",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "solemn-none",
    source: "solemn",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 1",
      endLabel: "variable.armor_stand.pose_index == 1",
    },
    target: "none",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "solemn-athena",
    source: "solemn",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 3",
      endLabel: "variable.armor_stand.pose_index == 3",
    },
    target: "athena",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "solemn-brandish",
    source: "solemn",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 4",
      endLabel: "variable.armor_stand.pose_index == 4",
    },
    target: "brandish",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "solemn-honor",
    source: "solemn",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 5",
      endLabel: "variable.armor_stand.pose_index == 5",
    },
    target: "honor",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "solemn-entertain",
    source: "solemn",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 6",
      endLabel: "variable.armor_stand.pose_index == 6",
    },
    target: "entertain",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "solemn-salute",
    source: "solemn",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 7",
      endLabel: "variable.armor_stand.pose_index == 7",
    },
    target: "salute",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "solemn-riposte",
    source: "solemn",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 8",
      endLabel: "variable.armor_stand.pose_index == 8",
    },
    target: "riposte",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "solemn-zombie",
    source: "solemn",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 9",
      endLabel: "variable.armor_stand.pose_index == 9",
    },
    target: "zombie",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "solemn-cancan_a",
    source: "solemn",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 10",
      endLabel: "variable.armor_stand.pose_index == 10",
    },
    target: "cancan_a",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "solemn-cancan_b",
    source: "solemn",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 11",
      endLabel: "variable.armor_stand.pose_index == 11",
    },
    target: "cancan_b",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "solemn-hero",
    source: "solemn",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 12",
      endLabel: "variable.armor_stand.pose_index == 12",
    },
    target: "hero",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "zombie-default",
    source: "zombie",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 0",
      endLabel: "variable.armor_stand.pose_index == 0",
    },
    target: "default",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "zombie-none",
    source: "zombie",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 1",
      endLabel: "variable.armor_stand.pose_index == 1",
    },
    target: "none",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "zombie-solemn",
    source: "zombie",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 2",
      endLabel: "variable.armor_stand.pose_index == 2",
    },
    target: "solemn",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "zombie-athena",
    source: "zombie",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 3",
      endLabel: "variable.armor_stand.pose_index == 3",
    },
    target: "athena",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "zombie-brandish",
    source: "zombie",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 4",
      endLabel: "variable.armor_stand.pose_index == 4",
    },
    target: "brandish",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "zombie-honor",
    source: "zombie",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 5",
      endLabel: "variable.armor_stand.pose_index == 5",
    },
    target: "honor",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "zombie-entertain",
    source: "zombie",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 6",
      endLabel: "variable.armor_stand.pose_index == 6",
    },
    target: "entertain",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "zombie-salute",
    source: "zombie",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 7",
      endLabel: "variable.armor_stand.pose_index == 7",
    },
    target: "salute",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "zombie-riposte",
    source: "zombie",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 8",
      endLabel: "variable.armor_stand.pose_index == 8",
    },
    target: "riposte",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "zombie-cancan_a",
    source: "zombie",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 10",
      endLabel: "variable.armor_stand.pose_index == 10",
    },
    target: "cancan_a",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "zombie-cancan_b",
    source: "zombie",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 11",
      endLabel: "variable.armor_stand.pose_index == 11",
    },
    target: "cancan_b",
    markerEnd: {
      type: "arrowclosed",
    },
  },
  {
    id: "zombie-hero",
    source: "zombie",
    type: "line",
    data: {
      startLabel: "variable.armor_stand.pose_index == 12",
      endLabel: "variable.armor_stand.pose_index == 12",
    },
    target: "hero",
    markerEnd: {
      type: "arrowclosed",
    },
  },
];
