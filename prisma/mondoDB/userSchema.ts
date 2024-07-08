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
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  photo: {
    type: String,
  },
  createdAt: {
    type: Number,
  },
  updatedAt: {
    type: Number,
  },
  imageUrl: {
    type: String,
  },
  hasImage: {
    type: Boolean,
  },
  primaryEmailAddressId: {
    type: String,
  },
  primaryPhoneNumberId: {
    type: String,
  },
  primaryWeb3WalletId: {
    type: String,
  },
  lastSignInAt: {
    type: Number,
  },
  externalId: {
    type: String,
  },
  passwordEnabled: {
    type: Boolean,
  },
  totpEnabled: {
    type: Boolean,
  },
  backupCodeEnabled: {
    type: Boolean,
  },
  twoFactorEnabled: {
    type: Boolean,
  },
  banned: {
    type: Boolean,
  },
  publicMetadata: Schema.Types.Mixed,
  privateMetadata: Schema.Types.Mixed,
  unsafeMetadata: Schema.Types.Mixed,
  emailAddresses: [
    {
      emailAddress: String,
      id: String,
      linkedTo: [Schema.Types.Mixed],
      verification: Schema.Types.Mixed,
    },
  ],
  phoneNumbers: [Schema.Types.Mixed],
  web3Wallets: [Schema.Types.Mixed],
  externalAccounts: [Schema.Types.Mixed],
  lastActiveAt: {
    type: Number,
  },
  createOrganizationEnabled: {
    type: Boolean,
  },
});

const User = models.User || model("User", UserSchema);

export default User;
