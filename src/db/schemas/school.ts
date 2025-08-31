import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";
import { SchoolStatuses } from "../../enums/schoolStatus";

export const schoolSchemas = pgTable('schools', {
    id: integer().primaryKey().generatedByDefaultAsIdentity(),

    name: varchar({ length: 255 }).notNull(),
    npsn: varchar({ length: 12 }).unique().notNull(),
    email: varchar({ length: 255 }).unique().notNull(),
    address: varchar({ length: 500 }),
    status: varchar({
        length: 20,
        enum: [SchoolStatuses.Active, SchoolStatuses.Inactive],
    }).default(SchoolStatuses.Active),

    createdAt: timestamp().defaultNow(),
    updatedAt: timestamp().$onUpdate(() => new Date()),
});
