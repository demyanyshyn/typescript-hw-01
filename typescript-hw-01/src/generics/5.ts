export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

let RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: "Admin User",
  [UserRole.editor]: "Editor User",
  [UserRole.guest]: "Guest User",
};
