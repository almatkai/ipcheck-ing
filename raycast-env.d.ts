/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Local IPs - Get Local IPs */
  "getLocalIPs": boolean,
  /** External IP Sources to Fetch - Fetch IP from CloudFlare IPv4 */
  "getIPFromCloudflare_V4": boolean,
  /** undefined - Fetch IP from CloudFlare IPv6 */
  "getIPFromCloudflare_V6": boolean,
  /** undefined - Fetch IP from IPCheck.ing IPv4 */
  "getIPFromIPCheck4": boolean,
  /** undefined - Fetch IP from IPCheck.ing IPv6 */
  "getIPFromIPCheck6": boolean,
  /** undefined - Fetch IP from IPCheck.ing DualStack — shows which protocol your network prefers */
  "getIPFromIPCheck64": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `main` command */
  export type Main = ExtensionPreferences & {}
  /** Preferences accessible in the `query-ip` command */
  export type QueryIp = ExtensionPreferences & {}
  /** Preferences accessible in the `menubar` command */
  export type Menubar = ExtensionPreferences & {
  /** IP Source - Which service to ask for the external IP shown in the menu bar */
  "preferredSource": "getIPFromIPCheck4" | "getIPFromIPCheck6" | "getIPFromIPCheck64" | "getIPFromCloudflare_V4" | "getIPFromCloudflare_V6",
  /** Menu Bar Label - How much to show next to the menu bar icon */
  "labelStyle": "flagAndIp" | "flag" | "ip" | "hidden",
  /** IPv6 Display - When the label shows an IPv6 address, display only its first two segments to save menu bar space */
  "compactIPv6": boolean,
  /** Refresh Every - How often to check for a new external IP in the background */
  "refreshEvery": "5" | "10" | "20" | "30" | "60"
}
}

declare namespace Arguments {
  /** Arguments passed to the `main` command */
  export type Main = {}
  /** Arguments passed to the `query-ip` command */
  export type QueryIp = {
  /** IP address */
  "ip": string
}
  /** Arguments passed to the `menubar` command */
  export type Menubar = {}
}

