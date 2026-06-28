export const ENUM_ROLE = {
  ADMIN: "admin",
  FORMER: "former",
  USER: "user",
  MODERATOR: "moderator",
} as const;

export type Role = (typeof ENUM_ROLE)[keyof typeof ENUM_ROLE];
