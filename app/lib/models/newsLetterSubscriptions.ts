import { timeStamp } from "console";
import { Schema, model, models } from "mongoose";

const newsLetterSubscriptionSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const newsLetterSubscription = models.NewsLetterSubscription || model('NewsLetterSubscription', newsLetterSubscriptionSchema);

export default newsLetterSubscription;