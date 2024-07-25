ALTER TABLE "Share" ADD COLUMN "platform" TEXT;

UPDATE "Share" SET "platform" = 'Unknown' WHERE "platform" IS NULL;

ALTER TABLE "Share" ALTER COLUMN "platform" SET NOT NULL;

