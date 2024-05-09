'use server';

import newsLetterSubscription from "../models/newsLetterSubscriptions";
import connectDB from "../database";
import { z } from "zod";
import { revalidatePath } from "next/cache";

export async function getSubs(){
    // get all subscriptions
    try {
        await connectDB();
        const subs = await newsLetterSubscription.find({});
        return subs;
    } catch (error) {
        return null;
    }
}


export async function subToNewsLetter(formData: FormData){
    // zod schema for email
    const schema = z.string().email()
    
    // create new subscription
    try {
        // parse email from form data
        const email = schema.parse(formData.get("email"));
        
        // connect to the db
        await connectDB();
        
        // check if email is already subscribed
        const alreadySub = await newsLetterSubscription.findOne({email});

        if(alreadySub){
            return null;
        }
        
        // create new subscription
        const sub = await newsLetterSubscription.create({email});
        sub.save();
    } catch (error) {
        return null;
    }
}