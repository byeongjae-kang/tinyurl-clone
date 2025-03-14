-- CreateTable
CREATE TABLE "urls" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "short" VARCHAR(8) NOT NULL,
    "long" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "urls_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "urls_short_key" ON "urls"("short");

-- CreateIndex
CREATE INDEX "urls_user_id_created_at_idx" ON "urls"("user_id", "created_at");

-- CreateIndex
CREATE INDEX "urls_short_idx" ON "urls"("short");
