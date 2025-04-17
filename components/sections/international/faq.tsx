"use client"

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Do I need to speak Japanese to participate?",
      answer: "No, Japanese language ability is not required to participate. Our project welcomes participants from all backgrounds, and we communicate in both English and Japanese. We also provide Japanese language learning support for those interested."
    },
    {
      question: "What visa do I need to participate?",
      answer: "The required visa depends on your participation type and duration. For short-term participation (up to 90 days), many countries have visa waiver agreements with Japan. For longer stays, we can provide documentation to support your visa application process."
    },
    {
      question: "Can I participate remotely?",
      answer: "Yes, many aspects of our project can be participated in remotely. We have online workshops, community events, and collaborative projects. However, for the full experience and certain roles, physical presence in Japan is recommended."
    },
    {
      question: "Are there any participation fees?",
      answer: "Basic participation in our community and many online events is free. Specific workshops, courses, and events may have associated costs, which are always clearly communicated in advance. We also offer various support programs and scholarships."
    },
    {
      question: "What kind of support do you provide for international participants?",
      answer: "We provide comprehensive support including: visa application assistance, housing support, local life setup help, language support, and community integration. Our team has experience helping international participants settle in Japan."
    },
    {
      question: "How can I start participating?",
      answer: "You can start by joining our online community on Discord, participating in online events, or applying for specific programs. For those interested in coming to Japan, we recommend starting with our online activities and then discussing longer-term participation options."
    },
    {
      question: "What makes your project unique for international participants?",
      answer: "Our project offers a unique blend of traditional Japanese culture and cutting-edge technology. You'll work with both Japanese and international team members, creating innovative expressions while experiencing Japan's rich cultural heritage. We're not just a tech project - we're building bridges between cultures and creating new forms of artistic expression."
    },
    {
      question: "What opportunities are there for career development?",
      answer: "Participants can develop skills in drone technology, digital art, performance art, and project management. You'll also build a network in Japan's tech and art communities. While we're primarily a cultural project, many participants have used their experience here to advance their careers in various fields."
    }
  ]

  return (
    <section className="py-24 bg-background/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Have more questions? Feel free to reach out to us through our Discord community or contact form.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}