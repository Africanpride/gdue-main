import { Schema, model, models } from "mongoose";

const ContactFormSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      index: true,
      validate: {
        validator: function (v: string) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        },
        message: (props: { value: any }) =>
          `${props.value} is not a valid email!`,
      },
    },

    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create the model
const ContactSchema =
  models.contactFormz || model("contactFormz", ContactFormSchema);

export default ContactSchema;
