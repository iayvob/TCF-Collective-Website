import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { motion } from "framer-motion";
import {
  fadeInAnimationVariantsDiv,
  fadeInAnimationVariantsDiv1,
} from "../lib/animations";

const FAQS = () => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      variants={fadeInAnimationVariantsDiv}
      viewport={{
        once: true,
      }}
      className="pt-10 md:pt-20 bg-gray-100 w-full rounded-t-3xl"
    >
      <div className="p-10 md:p-4 md:px-20">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariantsDiv1}
          viewport={{
            once: true,
          }}
          className="text-3xl md:text-7xl font-bold text-black"
        >
          Have questions ?
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariantsDiv1}
          viewport={{
            once: true,
          }}
          className="font-semibold text-3xl md:text-6xl text-[#ff003f]"
        >
          Get answers.
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimationVariantsDiv}
          viewport={{
            once: true,
          }}
        >
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>What is TCF?</AccordionTrigger>
              <AccordionContent>
                TCF (The Content Factory) is a full fledge marketing agency that
                specializes in branding, and digital marketing.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How to start ?</AccordionTrigger>
              <AccordionContent>
                You can start by contacting us. We will get back to you within
                24 hours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Pricing ?</AccordionTrigger>
              <AccordionContent>
                We offer custom tailored solutions for your business. Contact us
                to get a quote.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Support ?</AccordionTrigger>
              <AccordionContent>
                We offer Monday-Friday support for all our clients.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQS;
