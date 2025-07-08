import { date, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const rooms = pgTable('rooms', {
  id: uuid().primaryKey().defaultRandom(),
  name: text().notNull(),
  description: text(),
  createAt: date().defaultNow().notNull(),
})