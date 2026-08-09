// import { mutation, query } from "./_generated/server";
// import { v } from "convex/values";


// // SAVE MESSAGE

// export const sendMessage = mutation({

//   args: {
//     userId: v.string(),
//     message: v.string(),
//     role: v.union(
//       v.literal("user"),
//       v.literal("assistant")
//     ),
//     createdAt: v.number(),
//   },


//   handler: async(ctx,args)=>{


//     await ctx.db.insert(
//       "messages",
//       {
//         userId: args.userId,
//         message: args.message,
//         role: args.role,
//         createdAt: args.createdAt,
//       }
//     );


//   }

// });





// // GET CHAT HISTORY

// export const getMessages = query({

//   args:{
//     userId:v.string()
//   },


//   handler:async(ctx,args)=>{


//     return await ctx.db
//       .query("messages")
//       .filter((q)=>
//         q.eq(
//           q.field("userId"),
//           args.userId
//         )
//       )
//       .order("asc")
//       .collect();


//   }

// });
// import { mutation, query } from "./_generated/server";
// import { v } from "convex/values";


// export const sendMessage = mutation({
//   args: {
//     userId: v.string(),
//     message: v.string(),
//     role: v.union(v.literal("user"), v.literal("assistant")),
//     createdAt: v.number(),
//   },

//   handler: async (ctx, args) => {
//     const id = await ctx.db.insert("messages", {
//       userId: args.userId,
//       message: args.message,
//       role: args.role,
//       createdAt: args.createdAt,
//     });

//     return id;
//   },
// });


// export const getMessages = query({
//   handler: async (ctx) => {

//     const messages = await ctx.db
//       .query("messages")
//       .order("desc")
//       .collect();

//     return messages;
//   },
// });
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const sendMessage = mutation({
  args: {
    message: v.string(),
    role: v.union(
      v.literal("user"),
      v.literal("assistant")
    ),
  },

  handler: async (ctx, args) => {

    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Not authenticated");
    }

    return await ctx.db.insert("messages", {
      userId: identity.subject,
      message: args.message,
      role: args.role,
      createdAt: Date.now(),
    });
  },
});

export const getMessages = query({
  handler: async (ctx) => {

    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      return [];
    }

    return await ctx.db
      .query("messages")
      .filter((q) =>
        q.eq(q.field("userId"), identity.subject)
      )
      .order("desc")
      .collect();
  },
});