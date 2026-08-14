import { motion } from "framer-motion";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { AuroraText } from "@/components/magicui/aurora-text";

const LeftVisualSection = ({ step, steps }) => {
  const activeStep = steps.find((s) => s.id === step);

  return (
    <div className="w-full md:w-2/5 relative overflow-hidden bg-black self-stretch">
      <BackgroundBeamsWithCollision className="bg-black h-full md:h-full">
        <div className="relative h-full w-full p-8 flex flex-col z-20">
          {/* Title */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              <AuroraText
                colors={["#fff3c4", "#c18b13", "#86602c", "#ffe29a", "#e0b352"]}
                className="inline"
              >
                Contact
              </AuroraText>
            </h1>
            <p className="text-[#fffff0]/70 text-sm mt-2 max-w-xs">
              Complete the form to schedule your personalized session with our
              team.
            </p>
          </div>

          {/* Focal step display */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex flex-col items-center"
              >
                <div
                  className={`w-24 h-24 rounded-full ${
                    activeStep?.color || "bg-[#c18b34]"
                  } flex items-center justify-center text-[#fffff0] text-3xl mb-6 ring-4 ring-[#fffff0]/20 shadow-lg [&_svg]:w-10 [&_svg]:h-10`}
                >
                  {activeStep?.icon}
                </div>

                <p className="text-base sm:text-lg font-semibold text-[#fffff0]/70 uppercase tracking-wide mb-2">
                  {step === 4 ? (
                    <span className="text-green-400">Appointment Confirmed</span>
                  ) : (
                    <>Step {step} of {steps.length}</>
                  )}
                </p>
                <h3 className="text-3xl font-bold text-[#fffff0]">
                  {activeStep?.name}
                </h3>
              </motion.div>

            {/* Step progress */}
            <div className="flex justify-center gap-4 mt-10">
              {steps.map((stepItem) => (
                <div
                  key={stepItem.id}
                  className={`flex flex-col items-center transition-all duration-300 ${
                    step >= stepItem.id ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full ${stepItem.color} flex items-center justify-center text-[#fffff0] text-lg mb-2 [&_svg]:w-4 [&_svg]:h-4 ${
                      step === stepItem.id ? "ring-4 ring-[#fffff0]/50" : ""
                    }`}
                  >
                    {stepItem.icon}
                  </div>
                  <span className="text-[#fffff0] text-xs font-medium">
                    {stepItem.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial, pinned to the bottom */}
          <div className="bg-[#fffff0]/10 backdrop-blur-sm rounded-lg p-4 border border-[#fffff0]/20">
            <p className="text-[#fffff0]/90 text-sm">
              "Our team is excited to work with you. Let's create something amazing together!"
            </p>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
};

export default LeftVisualSection;
