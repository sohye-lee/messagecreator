"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormData } from "@/lib/types";
import { sendEmail } from "@/utils/action";
import { IconSend } from "@tabler/icons-react";
import {
  HydrationBoundary,
  dehydrate,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function ContactPage() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, watch, reset } = useForm<ContactFormData>();

  const { mutate: sendMail } = useMutation({
    mutationFn: () => sendEmail(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="w-full pt-24 pb-8 bg-gradient-to-r from-brand to-gray-700">
        <div className="mx-auto w-full sm:max-w-xl flex flex-col gap-3 py-6">
          <h1 className="text-3xl font-medium text-center text-white">
            Contact Us
          </h1>
        </div>
      </div>
      <div className=" w-full overflow-auto flex flex-col items-center px-4">
        <div className="mx-auto w-full sm:max-w-xl flex flex-col gap-3 py-14 ">
          <form className="flex flex-col gap-3">
            <Input placeholder="Name" />

            <Input placeholder="Email" />
            <Input placeholder="Phone (optional)" />
            <Textarea placeholder="Message" rows={3}></Textarea>
            <div className="flex justify-end">
              <Button className="gap-2">
                Send Message
                <IconSend width={16} />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </HydrationBoundary>
  );
}
