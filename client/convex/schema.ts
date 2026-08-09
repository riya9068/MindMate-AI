import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({

  // AI Chat Messages
  messages: defineTable({
    userId: v.string(),
    message: v.string(),
    role: v.union(
      v.literal("user"),
      v.literal("assistant")
    ),
    createdAt: v.number(),
  }),


  // Mood Tracking
  moods: defineTable({
    userId: v.string(),
    mood: v.string(),
    note: v.optional(v.string()),
    createdAt: v.number(),
  }),
  journalEntries: defineTable({
    userId: v.string(),
    journal: v.string(),
    analysis: v.string(),
    createdAt: v.number(),
  })
    .index("by_user", ["userId"]),

  ...authTables,
});