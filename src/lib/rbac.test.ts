import { describe, expect, it } from "vitest";
import { hasPermission, resolveRolesFromClaims } from "./rbac";

describe("Tenure RBAC", () => {
  it("grants wildcard permissions to administrators", () => expect(hasPermission(["admin"], "rules.manage")).toBe(true));
  it("keeps rule publishing away from operators", () => expect(hasPermission(["operator"], "rules.manage")).toBe(false));
  it("maps lifecycle groups", () => expect(resolveRolesFromClaims({ groups: ["lifecycle-rule-owners"] })).toEqual(["rule_owner"]));
});
