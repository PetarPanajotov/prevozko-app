'use client';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { Button } from '../ui/button';
import { Children, ReactNode, useEffect } from 'react';
import { StepperProvider, useStepperContext } from './stepper.context';

interface StepProps {
  index: number;
  activeStep: number;
  label: string;
  isLast: boolean;
  setActiveStep: (step: number) => void;
}

export function Stepper({ steps, children }: { steps: string[]; children: ReactNode }) {
  return (
    <StepperProvider>
      <StepperInner steps={steps}>{children}</StepperInner>
    </StepperProvider>
  );
}

export const StepperContent = ({ children }: { children: ReactNode }) => {
  const { activeStep } = useStepperContext();

  const childrenArray = Children.toArray(children);

  const currentChild = childrenArray[activeStep];

  return (
    <div className="relative mt-6 w-full">
      <div
        key={activeStep}
        className="animate-in fade-in slide-in-from-bottom-2 duration-300 ease-out"
      >
        {currentChild}
      </div>
    </div>
  );
};

export const StepperFooter = ({ children }: { children?: ReactNode }) => {
  const { isLastStep, isFirstStep, prevStep, nextStep } = useStepperContext();

  const hasCustomChildren = Children.count(children) > 0;
  return (
    <>
      {hasCustomChildren ? (
        children
      ) : (
        <div className="flex justify-between border-t pt-4">
          <Button variant="ghost" onClick={prevStep} disabled={isFirstStep}>
            Previous
          </Button>
          <Button onClick={nextStep} className="min-w-24">
            {isLastStep ? 'Complete' : 'Continue'}
          </Button>
        </div>
      )}
    </>
  );
};

const StepperInner = ({ steps, children }: { steps: string[]; children: ReactNode }) => {
  const { setStepCount, activeStep, setStep } = useStepperContext();

  useEffect(() => {
    setStepCount(steps.length);
  }, [steps.length, setStepCount]);

  return (
    <div className="bg-card text-card-foreground w-full rounded-xl border px-4 py-8 shadow-sm">
      {/* 1. Header: The visual progress track */}
      <div className="mb-12 flex items-center justify-between px-2">
        {steps.map((label, i) => (
          <Step
            key={label}
            index={i}
            label={label}
            isLast={i === steps.length - 1}
            activeStep={activeStep}
            setActiveStep={setStep}
          />
        ))}
      </div>

      {/* 2. Slot for StepperContent and StepperFooter */}
      <div className="space-y-6">{children}</div>
    </div>
  );
};

const Step = ({ index, activeStep, label, isLast, setActiveStep }: StepProps) => {
  const isCompleted = activeStep > index;
  const isActive = activeStep === index;

  return (
    <div className={cn('flex items-center justify-center', !isLast && 'flex-1')}>
      <div className="relative flex flex-col items-center">
        <div
          onClick={() => setActiveStep(index)}
          className={cn(
            'bg-background semi-bold z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 transition-all duration-300',
            isCompleted
              ? 'bg-success border-success text-primary-foreground'
              : isActive
                ? 'border-primary text-primary shadow-[0_0_10px_rgba(0,0,0,0.1)]'
                : 'border-muted text-muted-foreground',
          )}
        >
          {isCompleted ? <Check className="h-5 w-5" strokeWidth={'3'} /> : <span>{index + 1}</span>}
        </div>

        <span
          className={cn(
            'absolute -bottom-7 text-[10px] font-medium whitespace-nowrap sm:text-xs',
            isActive ? 'text-primary' : 'text-muted-foreground',
          )}
        >
          {label}
        </span>
      </div>

      {!isLast && (
        <div className="mx-2 flex-1">
          <Separator
            className={cn(
              'h-0.5! transition-colors duration-500',
              isCompleted ? 'bg-success/50' : 'bg-muted',
            )}
          />
        </div>
      )}
    </div>
  );
};
