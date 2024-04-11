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
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import Letter from "@images/illust_letter.png";
import Image from "next/image";

export default function ContactPage() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();
  const [formData, setFormData] = useState<ContactFormData | null>();

  const { mutate: sendMail } = useMutation({
    mutationFn: (values: ContactFormData) => sendEmail(values),
    onSuccess: (data) => {
      toast.success(
        "Thank you for sending a message. We'll reply back very shortly!"
      );
      router.push("/");
    },
  });

  const onSubmit = (formData: ContactFormData) => {
    formData && sendMail(formData);
  };
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {/* <div className="w-full pt-20 pb-6 bg-gradient-to-r from-brand to-gray-700">
        <div className="mx-auto w-full sm:max-w-xl flex flex-col gap-3 pt-2">
        </div>
      </div> */}
      <div className=" w-full overflow-auto flex flex-col items-center px-4 pt-16">
        <div className="mx-auto w-full sm:max-w-xl flex flex-col gap-3 py-14 ">
          <div className="flex items-center gap-2">
            <Image src={Letter} alt="letter" width={80} />
            <h1 className="text-4xl font-medium mb-3 ">Tell me anything!</h1>
          </div>
          <h5 className="text-md mb-8">
            Fill out the form to reach out to us. Questions, feedback, or just a
            quick hello — we&apos;re here for it all and can&apos;t wait to hear
            from you.
          </h5>
          <form
            className="flex flex-col gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input {...register("name")} placeholder="Full Name" />

            <Input
              {...register("email", { required: "Please enter your email." })}
              placeholder="Email"
            />
            <Input {...register("phone")} placeholder="Phone (optional)" />
            <Textarea
              {...register("message")}
              placeholder="Message"
              rows={3}
            ></Textarea>
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
