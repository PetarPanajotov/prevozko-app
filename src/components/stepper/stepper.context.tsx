import { createContext, useContext, useState } from 'react';
import { createStore, useStore } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

interface StepperState {
  activeStep: number;
  stepCount: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  setStepCount: (count: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
}

const getDerivedState = (activeStep: number, stepCount: number) => ({
  activeStep,
  isFirstStep: activeStep === 0,
  isLastStep: stepCount > 0 && activeStep === stepCount - 1,
});

const createStepperStore = () =>
  createStore<StepperState>((set) => ({
    activeStep: 0,
    stepCount: 0,
    isFirstStep: true,
    isLastStep: false,

    setStepCount: (count) =>
      set((state) => ({
        stepCount: count,
        ...getDerivedState(state.activeStep, count),
      })),

    nextStep: () =>
      set((state) => {
        const next = Math.min(state.activeStep + 1, state.stepCount - 1);
        return getDerivedState(next, state.stepCount);
      }),

    prevStep: () =>
      set((state) => {
        const prev = Math.max(state.activeStep - 1, 0);
        return getDerivedState(prev, state.stepCount);
      }),

    setStep: (step) => set((state) => getDerivedState(step, state.stepCount)),
  }));

type StepperStore = ReturnType<typeof createStepperStore>;
const StepperContext = createContext<StepperStore | null>(null);

export function StepperProvider({ children }: { children: React.ReactNode }) {
  const [store] = useState(() => createStepperStore());
  return <StepperContext.Provider value={store}>{children}</StepperContext.Provider>;
}

export function useStepperContext() {
  const store = useContext(StepperContext);
  if (!store) {
    throw new Error('useStepperContext must be used within a StepperProvider');
  }
  return useStore(store);
}
