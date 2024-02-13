import fs from "fs";
import path from "path";
import strip from "strip-json-comments";

export type Meta = {
  project_root: string;
  resource: string;
  behavior: string;
};

type TextureData = {
  [prop: string]: {
    textures:
      | string[]
      | string
      | {
          overlay_color: string;
          path: string;
        };
  };
};

// Name - Map< Entry, Text >
type LangDef = Map<string, Map<string, string>>;
function readLang(string: string): Map<string, string> {
  const result = new Map<string, string>();
  const lines = string.split("\n");
  for (const line of lines) {
    if (line.startsWith("#")) continue;
    const [key, value] = line.split("=");
    result.set(key, value);
  }
  return result;
}

const meta: Meta = {
  project_root: "vanilla",
  resource: "resource_pack",
  behavior: "behavior_pack",
};

function readFolder(dir: string): string[] {
  const result: string[] = [];
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      result.push(...readFolder(filePath));
    } else {
      result.push(filePath);
    }
  });
  return result;
}

export class FileMorphic {
  res_path: string;
  beh_path: string;
  resource: {
    animation_controller: Map<string, object>;
    animation: Map<string, object>;
    render_controller: Map<string, object>;
    entity: Map<string, object>;
    loot_table: string[];
    trade_table: string[];
    geometry: Map<string, object>;
    particle: Map<string, object>;
    sound: Map<string, object>;
    texture: {
      block: TextureData;
      item: TextureData;
    };
    language: LangDef;
  } = {
    animation_controller: new Map(),
    animation: new Map(),
    render_controller: new Map(),
    entity: new Map(),
    geometry: new Map(),
    particle: new Map(),
    sound: new Map(),
    loot_table: [],
    trade_table: [],
    texture: {
      block: {},
      item: {},
    },
    language: new Map(),
  };
  behavior: {
    spawn_rule: Map<string, object>;
    recipe: Map<string, object>;
    entity: Map<string, object>;
    item: Map<string, object>;
  } = {
    spawn_rule: new Map(),
    recipe: new Map(),
    entity: new Map(),
    item: new Map(),
  };
  constructor(config: Meta) {
    this.res_path = path.join(config.project_root, config.resource);
    this.beh_path = path.join(config.project_root, config.behavior);
    this.readAll();
  }

  readAll() {
    this.readEntities();
    this.readItems();
    this.readAnimationControllers();
    this.readAnimation();
    this.readGeometry();
    this.readParticle();
    this.readRenderControllers();
    this.readSpawnRules();
    this.readSound();
    this.readTexture();
    this.readLootTables();
    this.readTradeTables();
    // this.readLanguage();
  }

  readTradeTables() {
    const tts = readFolder(path.join(this.beh_path, "trading"));
    this.resource.trade_table = tts;
  }

  readLootTables() {
    const lts = readFolder(path.join(this.beh_path, "loot_tables"));
    this.resource.loot_table = lts;
  }

  readTexture() {
    const block = fs.readFileSync(
      path.join(this.res_path, "textures/terrain_texture.json")
    );
    const item = fs.readFileSync(
      path.join(this.res_path, "textures/item_texture.json")
    );
    this.resource.texture.block = JSON.parse(block.toString())["texture_data"];
    this.resource.texture.item = JSON.parse(item.toString())["texture_data"];
  }

  readSound() {
    const sound_def = fs
      .readFileSync(path.join(this.res_path, "sounds/sound_definitions.json"))
      .toString();
    const sounds = JSON.parse(sound_def)["sound_definitions"];
    for (const sound of Object.keys(sounds)) {
      this.resource.sound.set(sound, sounds[sound]);
    }
  }

  readLanguage() {
    const lang = readFolder(path.join(this.res_path, "texts"));
    lang
      .filter((l) => l.endsWith(".lang"))
      .map((l) => {
        const lang = fs.readFileSync(l).toString();
        const lang_map = readLang(lang);
        this.resource.language.set(path.basename(l), lang_map);
      });
  }

  readRenderControllers() {
    const rcs = this.readParseAll("res", "render_controllers");
    rcs.map((rc: object) => {
      const rcs = rc["render_controllers"];
      for (const name of Object.keys(rcs)) {
        this.resource.render_controller.set(name, rcs[name]);
      }
    });
  }

  readAnimation() {
    const as = this.readParseAll("res", "animations");
    as.map((animation: object) => {
      const ans = animation["animations"];
      for (const name of Object.keys(ans)) {
        this.resource.animation.set(name, ans[name]);
      }
    });
  }

  readSpawnRules() {
    const srs = this.readParseAll("beh", "spawn_rules");
    srs.map((sr: object) => {
      const id = sr["minecraft:spawn_rules"]["description"]["identifier"];
      this.behavior.spawn_rule.set(id, sr["minecraft:spawn_rules"]);
    });
  }

  readParticle() {
    const ps = this.readParseAll("res", "particles");
    ps.map((particle: object) => {
      const id = particle["particle_effect"]["description"]["identifier"];
      this.resource.particle.set(id, particle["particle_effect"]);
    });
  }

  readGeometry() {
    const gs = this.readParseAll("res", "models");
    gs.map((geometry: object) => {
      for (const id of Object.keys(geometry)) {
        if (id === "format_version") continue;
        this.resource.geometry.set(id, geometry[id]);
      }
    });
  }

  readEntities() {
    const es = this.readParseAll("beh", "entities");
    es.map((entity: object) => {
      const id = entity["minecraft:entity"]["description"]["identifier"];
      this.behavior.entity.set(id, entity["minecraft:entity"]);
    });
    const ce = this.readParseAll("res", "entity");
    ce.map((entity: object) => {
      const id = entity["minecraft:client_entity"]["description"]["identifier"];
      this.resource.entity.set(id, entity["minecraft:client_entity"]);
    });
  }

  readAnimationControllers() {
    const acs = this.readParseAll("res", "animation_controllers");
    acs.map((ac: object) => {
      const acs = ac["animation_controllers"];
      for (const name of Object.keys(acs)) {
        this.resource.animation_controller.set(name, acs[name]);
      }
    });
  }

  readItems() {
    const its = this.readParseAll("beh", "items");
    its.map((item: object) => {
      const id = item["minecraft:item"]["description"]["identifier"];
      this.behavior.item.set(id, item["minecraft:item"]);
    });
  }

  readParseAll(type: string, subfolder: string): object[] {
    const p = path.join(
      type === "res" ? this.res_path : this.beh_path,
      subfolder
    );
    const files = readFolder(p);
    return files.map((x) => this.readParse(x));
  }

  readParse(p: string): object {
    const file = fs.readFileSync(p).toString();
    const noc = strip(file);
    return JSON.parse(noc);
  }
}

const log_keys = (x: Map<string, any>) => console.log(x.keys());
