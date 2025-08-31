import { integer, pgTable, timestamp, uniqueIndex, varchar } from "drizzle-orm/pg-core";

export const userSchema = pgTable('users', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    email: varchar({
        length: 255,
    }).notNull().unique(),
    username: varchar({
        length: 50,
    }).notNull().unique(),
    password: varchar({
        length: 255,
    }).notNull(),
    createdAt: timestamp().defaultNow(),
    updatedAt: timestamp().$onUpdate(() => new Date()),
}, table => [
    uniqueIndex('email_index').on(table.email),
    uniqueIndex('username_index').on(table.username),
]);
