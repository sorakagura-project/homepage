"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, { message: "お名前は2文字以上で入力してください。" }),
  email: z.string().email({ message: "有効なメールアドレスを入力してください。" }),
  subject: z.string().min(5, { message: "件名は5文字以上で入力してください。" }),
  message: z.string().min(10, { message: "お問い合わせ内容は10文字以上で入力してください。" }),
  privacyPolicy: z.boolean().refine(val => val === true, { message: "プライバシーポリシーへの同意が必要です。" })
})

export default function ContactPage() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      privacyPolicy: false,
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    // ここでフォーム送信処理を実装します (例: APIへのPOST)
    console.log(values)
    toast({
      title: "送信完了",
      description: "お問い合わせありがとうございます。内容を確認の上、担当者よりご連絡いたします。",
    })
    form.reset()
  }

  return (
    <main className="flex-1 bg-white dark:bg-gray-950">
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-gray-900 dark:text-gray-50">
              お問い合わせ
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              神楽塾に関するご質問、ご相談、取材のお申し込みなど、お気軽にご連絡ください。
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>お名前</FormLabel>
                      <FormControl>
                        <Input placeholder="例: 山田 太郎" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>メールアドレス</FormLabel>
                      <FormControl>
                        <Input placeholder="例: your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>件名</FormLabel>
                      <FormControl>
                        <Input placeholder="例: 見学希望について" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>お問い合わせ内容</FormLabel>
                      <FormControl>
                        <Textarea placeholder="お問い合わせ内容を具体的にご記入ください。" {...field} rows={6} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="privacyPolicy"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                       <FormControl>
                         <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                       </FormControl>
                       <div className="space-y-1 leading-none">
                         <FormLabel>プライバシーポリシーに同意する</FormLabel>
                         <FormMessage />
                       </div>
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">送信する</Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </main>
  )
}