import { Stepper, StepperContent, StepperFooter } from '@/components/stepper/stepper';
import { GeneralInformation } from './_components/general-information';

export default function CreateServicePage() {
  return (
    <div className="container m-auto py-10">
      <Stepper steps={['Create', 'Edit', 'Cancel']}>
        <StepperContent>
          <GeneralInformation />
        </StepperContent>
        <StepperFooter></StepperFooter>
      </Stepper>
    </div>
  );
}
