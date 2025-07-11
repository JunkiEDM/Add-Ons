import { PermissionLevels } from "./types";

export const CUSTOM_COMMANDS = [
  {
    prefix: "/",
    name: "accountage",
    description: "Show how long ago you created your account.",
    permissionLevel: PermissionLevels.VIEWER,
    ffz_group: "Trubbel\u2019s Utilities",
    commandArgs: []
  },
  {
    prefix: "/",
    name: "chatters",
    description: "Show the current channels amount of chatters.",
    permissionLevel: PermissionLevels.VIEWER,
    ffz_group: "Trubbel\u2019s Utilities",
    commandArgs: []
  },
  {
    prefix: "/",
    name: "followage",
    description: "Show your followage in the current channel.",
    permissionLevel: PermissionLevels.VIEWER,
    ffz_group: "Trubbel\u2019s Utilities",
    commandArgs: []
  },
  {
    prefix: "/",
    name: "localmod",
    description: "Toggle between local Mod-Only Mode.",
    permissionLevel: PermissionLevels.VIEWER,
    ffz_group: "Trubbel\u2019s Utilities",
    commandArgs: []
  },
  {
    prefix: "/",
    name: "localsub",
    description: "Toggle between local Sub-Only Mode.",
    permissionLevel: PermissionLevels.VIEWER,
    ffz_group: "Trubbel\u2019s Utilities",
    commandArgs: []
  },
  {
    prefix: "/",
    name: "shrug",
    description: "¯\\_(ツ)_/¯",
    permissionLevel: PermissionLevels.VIEWER,
    ffz_group: "Trubbel\u2019s Utilities",
    commandArgs: [
      { name: "message", isRequired: false }
    ]
  },
  {
    prefix: "/",
    name: "unbanall",
    description: "Unban everyone in your channel.",
    permissionLevel: PermissionLevels.BROADCASTER,
    ffz_group: "Trubbel\u2019s Utilities",
    commandArgs: []
  },
  {
    prefix: "/",
    name: "uptime",
    description: "Show the channels current uptime.",
    permissionLevel: PermissionLevels.VIEWER,
    ffz_group: "Trubbel\u2019s Utilities",
    commandArgs: []
  }
];