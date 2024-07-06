import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  createdAt: {
    type: Number,
  },
  emailAddresses: [
    {
      emailAddress: String,
      id: String,
      linkedTo: [Schema.Types.Mixed],
      object: String,
      verification: Schema.Types.Mixed,
    },
  ],
  externalAccounts: [Schema.Types.Mixed],
  externalId: {
    type: String,
  },
  lastSignInAt: {
    type: Number,
  },
  object: {
    type: String,
  },
  passwordEnabled: {
    type: Boolean,
  },
  phoneNumbers: [Schema.Types.Mixed],
  primaryEmailAddressId: {
    type: String,
  },
  primaryPhoneNumberId: {
    type: String,
  },
  primaryWeb3WalletId: {
    type: String,
  },
  privateMetadata: Schema.Types.Mixed,
  profileImageUrl: {
    type: String,
  },
  publicMetadata: Schema.Types.Mixed,
  twoFactorEnabled: {
    type: Boolean,
  },
  unsafeMetadata: Schema.Types.Mixed,
  updatedAt: {
    type: Number,
  },
  web3Wallets: [Schema.Types.Mixed],
});

const Profile = models?.Profile || model("Profile", UserSchema);

export default Profile;
