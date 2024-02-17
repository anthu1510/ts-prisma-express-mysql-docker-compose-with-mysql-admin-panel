import z from "zod";

const Status = z.enum(['active', 'inactive']);

const userSchema = z.object({
    id: z.number().min(1),
    name: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().min(1),
    status: Status.default('active').optional().nullable(),
    createdAt: z.coerce.date().optional().nullable(),
    updatedAt: z.coerce.date().optional().nullable(),
}).strict();

export const userCreateInputSchema = userSchema.omit({id: true});
export const userUpdateInputSchema = userCreateInputSchema.partial();