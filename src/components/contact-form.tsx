"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, Mail } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { type ContactFormValues, contactFormSchema } from '@/lib/validation';

type Status = 'idle' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('idle');
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      setStatus('error');
      return;
    }

    setStatus('success');
    reset();
  };

  return (
    <Card className="border-border/70">
      <CardContent className="p-6 sm:p-8">
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="name">Name</label>
              <Input aria-describedby={errors.name ? 'name-error' : undefined} aria-invalid={Boolean(errors.name)} id="name" placeholder="Your name" {...register('name')} />
              {errors.name ? <p className="mt-2 text-xs text-red-500" id="name-error" role="alert">{errors.name.message}</p> : null}
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="email">Email</label>
              <Input aria-describedby={errors.email ? 'email-error' : undefined} aria-invalid={Boolean(errors.email)} id="email" placeholder="you@example.com" type="email" {...register('email')} />
              {errors.email ? <p className="mt-2 text-xs text-red-500" id="email-error" role="alert">{errors.email.message}</p> : null}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="subject">Subject</label>
            <Input aria-describedby={errors.subject ? 'subject-error' : undefined} aria-invalid={Boolean(errors.subject)} id="subject" placeholder="Project inquiry, interview, or collaboration" {...register('subject')} />
            {errors.subject ? <p className="mt-2 text-xs text-red-500" id="subject-error" role="alert">{errors.subject.message}</p> : null}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-foreground" htmlFor="message">Message</label>
            <Textarea aria-describedby={errors.message ? 'message-error' : undefined} aria-invalid={Boolean(errors.message)} id="message" placeholder="Tell me a little about the opportunity or project." {...register('message')} />
            {errors.message ? <p className="mt-2 text-xs text-red-500" id="message-error" role="alert">{errors.message.message}</p> : null}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button disabled={isSubmitting} type="submit">
              {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
              Send Message
            </Button>
            <p aria-live="polite" className="text-sm text-muted-foreground">
              {status === 'success' ? 'Message sent successfully.' : status === 'error' ? 'Something went wrong. Please try again.' : 'Every field is validated before submission.'}
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}