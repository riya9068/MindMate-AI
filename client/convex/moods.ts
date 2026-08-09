// import { mutation, query } from "./_generated/server";
// import { v } from "convex/values";


// export const addMood = mutation({

//  args:{
//   userId:v.string(),
//   mood:v.string(),
//   note:v.optional(v.string()),
//   createdAt:v.number()
//  },


//  handler:async(ctx,args)=>{

//  await ctx.db.insert(
//   "moods",
//   args
//  );

//  }

// });



// export const getMoods = query({

//  args:{
//   userId:v.string()
//  },


//  handler:async(ctx,args)=>{


//  return await ctx.db
//  .query("moods")
//  .filter((q)=>
//   q.eq(
//    q.field("userId"),
//    args.userId
//   )
//  )
//  .order("desc")
//  .collect();


//  }

// });
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";


export const addMood = mutation({

 args:{
  mood:v.string(),
  note:v.optional(v.string()),
  createdAt:v.number()
 },

 handler:async(ctx,args)=>{

  const identity = await ctx.auth.getUserIdentity();

  if(!identity){
    throw new Error("Not authenticated");
  }

  await ctx.db.insert("moods",{
    ...args,
    userId: identity.subject
  });

 }

});


export const getMoods = query({

 handler:async(ctx)=>{


  const identity = await ctx.auth.getUserIdentity();

  if(!identity){
    return [];
  }


  return await ctx.db
  .query("moods")
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