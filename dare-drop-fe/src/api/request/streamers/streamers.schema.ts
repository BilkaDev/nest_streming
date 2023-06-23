import * as z from 'zod';

export const addStreamerSchema = z.object({
  name: z
    .string()
    .min(1, 'This field cannot be empty')
    .min(2, 'The name must be longer than or equal to 2 characters')
    .max(100, "The name can't be greater than 100."),
  description: z
    .string()
    .min(1, 'This field cannot be empty')
    .min(5, 'Description must be longer than or equal to 5 characters')
    .max(500, "The description can't be greater than 500.")
});
