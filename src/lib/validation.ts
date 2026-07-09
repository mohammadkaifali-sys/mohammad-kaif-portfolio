import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  subject: z.string().min(3, 'Please add a subject.'),
  message: z.string().min(10, 'Please write a message with at least 10 characters.')
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;