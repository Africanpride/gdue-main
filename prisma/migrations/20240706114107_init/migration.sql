-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "externalId" TEXT,
    "username" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "imageUrl" TEXT,
    "profileImageUrl" TEXT,
    "birthday" TEXT,
    "gender" TEXT,
    "lastSignInAt" DATETIME,
    "passwordEnabled" BOOLEAN NOT NULL,
    "twoFactorEnabled" BOOLEAN NOT NULL,
    "totpEnabled" BOOLEAN,
    "primaryEmailAddressId" TEXT,
    "primaryPhoneNumberId" TEXT,
    "primaryWeb3WalletId" TEXT,
    "publicMetadata" TEXT,
    "privateMetadata" TEXT,
    "unsafeMetadata" TEXT,
    CONSTRAINT "User_primaryEmailAddressId_fkey" FOREIGN KEY ("primaryEmailAddressId") REFERENCES "EmailAddress" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_primaryPhoneNumberId_fkey" FOREIGN KEY ("primaryPhoneNumberId") REFERENCES "PhoneNumber" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_primaryWeb3WalletId_fkey" FOREIGN KEY ("primaryWeb3WalletId") REFERENCES "Web3Wallet" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EmailAddress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "emailAddress" TEXT NOT NULL,
    "verification" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT,
    CONSTRAINT "EmailAddress_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "PhoneNumber" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "phoneNumber" TEXT NOT NULL,
    "verification" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT,
    CONSTRAINT "PhoneNumber_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Web3Wallet" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "walletAddress" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Web3Wallet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_externalId_key" ON "User"("externalId");

-- CreateIndex
CREATE UNIQUE INDEX "User_primaryEmailAddressId_key" ON "User"("primaryEmailAddressId");

-- CreateIndex
CREATE UNIQUE INDEX "User_primaryPhoneNumberId_key" ON "User"("primaryPhoneNumberId");

-- CreateIndex
CREATE UNIQUE INDEX "User_primaryWeb3WalletId_key" ON "User"("primaryWeb3WalletId");

-- CreateIndex
CREATE UNIQUE INDEX "EmailAddress_emailAddress_key" ON "EmailAddress"("emailAddress");

-- CreateIndex
CREATE UNIQUE INDEX "PhoneNumber_phoneNumber_key" ON "PhoneNumber"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Web3Wallet_walletAddress_key" ON "Web3Wallet"("walletAddress");
