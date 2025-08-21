'use client';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contact } from "@/content/site";

const Schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});

export default function ContactForm(){
  const { register, handleSubmit, reset, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm({ resolver: zodResolver(Schema) });
  const onSubmit = async (data:any) => {
    try {
      const res = await fetch(contact.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!res.ok) throw new Error("Form submit failed");
      reset();
      alert("Thanks! I’ll get back to you soon.");
    } catch (e){
      alert("Something went wrong. Please email me directly.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <input placeholder="Your name" className="px-4 py-3 rounded-xl bg-base-100/50 border border-white/10" {...register('name')} />
      {errors.name && <p className="text-red-400 text-sm">Please enter a valid name.</p>}
      <input placeholder="Email" className="px-4 py-3 rounded-xl bg-base-100/50 border border-white/10" {...register('email')} />
      {errors.email && <p className="text-red-400 text-sm">Please enter a valid email.</p>}
      <textarea placeholder="Tell me about your project" rows={5} className="px-4 py-3 rounded-xl bg-base-100/50 border border-white/10" {...register('message')} />
      {errors.message && <p className="text-red-400 text-sm">Please add some details.</p>}
      <button disabled={isSubmitting} className="px-4 py-3 rounded-xl bg-accent text-black font-medium hover:opacity-90">
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}
