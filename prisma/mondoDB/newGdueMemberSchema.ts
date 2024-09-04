import { Schema, model, models } from "mongoose";

const NewGdueMemberSchema = new Schema({
  country: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props: { value: any; }) => `${props.value} is not a valid email!`
    }
  },
  
  telephone: {
    type: String,
    required: true,
    index: true, // Add index for faster queries
  },
  dateOfBirth: {
    type: Date,
    required: false,
  },
  addressInDiaspora: {
    type: String,
    required: true,
  },
  addressInGhana: {
    type: String,
    required: true,
  },
  spouseName: {
    type: String,
  },
  emergencyContact: {
    type: String,
  },
  emergencyContactTelephone: {
    type: String,
  },
  membershipApproved: {
    type: Boolean,
    default: false,
  },
  membershipApprovedDate: {
    type: Date,
  },
  membershipApprovedBy: {
    type: String,
  },
  membershipNumber: {
    type: String,
  },
}, { timestamps: true });

// Create the model
const NewGdueMember =
  models.gduemembership || model("gduemembership", NewGdueMemberSchema);

export default NewGdueMember;
