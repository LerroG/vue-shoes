export enum AppLayoutsEnum {
  default = "default",
  auth = "auth"
}

export const AppLayoutToFileMap: Record<AppLayoutsEnum, string> = {
  default: "DefaultAppLayout.vue",
  auth: "AuthAppLayout.vue"
};
