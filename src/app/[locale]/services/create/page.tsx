import { Stepper, StepperContent, StepperFooter } from '@/components/stepper/stepper';
import { GeneralInformation } from './_components/general-information';

export default function CreateServicePage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Stepper steps={['Create', 'Edit', 'Cancel']}>
        <StepperContent>
          <GeneralInformation />
        </StepperContent>
        <StepperFooter></StepperFooter>
      </Stepper>
    </div>
  );
}
