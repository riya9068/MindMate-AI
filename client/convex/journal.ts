// import { mutation, query } from "./_generated/server";
// import { v } from "convex/values";

// export const addJournal = mutation({
//   args: {
//     userId: v.string(),
//     journal: v.string(),
//     analysis: v.string(),
//     createdAt: v.number(),
//   },

//   handler: async (ctx, args) => {
//     await ctx.db.insert("journalEntries", args);
//   },
// });

// export const getJournal = query({
//   args: {
//     userId: v.string(),
//   },

//   handler: async (ctx, args) => {
//     return await ctx.db
//       .query("journalEntries")
//       .withIndex("by_user", (q) => q.eq("userId", args.userId))
//       .order("desc")
//       .collect();
//   },
// });
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


export const addJournal = mutation({

  args: {
    journal: v.string(),
    analysis: v.string(),
  },


  handler: async (ctx, args) => {

    const identity = await ctx.auth.getUserIdentity();

    if(!identity){
      throw new Error("Not authenticated");
    }


    await ctx.db.insert("journalEntries", {

      userId: identity.subject,
      journal: args.journal,
      analysis: args.analysis,
      createdAt: Date.now()

    });

  }

});



export const getJournal = query({

  handler: async (ctx) => {

    const identity = await ctx.auth.getUserIdentity();

    if(!identity){
      return [];
    }


    return await ctx.db
      .query("journalEntries")
      .filter((q)=>
        q.eq(
          q.field("userId"),
          identity.subject
        )
      )
      .order("desc")
      .collect();

  }

});