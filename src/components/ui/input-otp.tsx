import * as React from "react"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"

// Create a context to simulate the OTP input behavior
const OTPInputContext = React.createContext<{
  slots: Array<{ char: string; hasFakeCaret: boolean; isActive: boolean }>
}>({
  slots: []
})

const InputOTP = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & {
    value?: string;
    onChange?: (value: string) => void;
    maxLength?: number;
    containerClassName?: string; // Add the missing property
  }
>(({ className, containerClassName, value = "", onChange, maxLength = 6, ...props }, ref) => {
  const [internalValue, setInternalValue] = React.useState(value)
  const [activeIndex, setActiveIndex] = React.useState(0)
  
  // Update internal value when external value changes
  React.useEffect(() => {
    setInternalValue(value)
  }, [value])
  
  // Create slots based on maxLength and current value
  const slots = React.useMemo(() => {
    return Array(maxLength).fill(0).map((_, i) => ({
      char: internalValue[i] || "",
      hasFakeCaret: i === activeIndex,
      isActive: i === activeIndex
    }))
  }, [internalValue, activeIndex, maxLength])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle key navigation and input
    if (e.key === "Backspace") {
      setInternalValue(prev => prev.slice(0, -1))
      setActiveIndex(Math.max(0, activeIndex - 1))
    } else if (/^[a-zA-Z0-9]$/.test(e.key) && internalValue.length < maxLength) {
      setInternalValue(prev => prev + e.key)
      setActiveIndex(Math.min(maxLength - 1, activeIndex + 1))
      onChange?.(internalValue + e.key)
    }
  }

  return (
    <OTPInputContext.Provider value={{ slots }}>
      <div 
        ref={ref as React.RefObject<HTMLDivElement>}
        className={cn(
          "flex items-center gap-2 has-[:disabled]:opacity-50",
          containerClassName
        )}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        {...props}
      >
        <div className={cn("disabled:cursor-not-allowed", className)}>
          {props.children}
        </div>
      </div>
    </OTPInputContext.Provider>
  )
})
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center", className)} {...props} />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const context = React.useContext(OTPInputContext)
  
  // Safely access slot data, handling the undefined case
  const slot = context.slots[index] || { char: "", hasFakeCaret: false, isActive: false }
  const { char, hasFakeCaret, isActive } = slot

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
        </div>
      )}
    </div>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
