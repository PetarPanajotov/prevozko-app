'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import ImageUploader from '@/components/ui/image-uploader';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRightLeft, Box, Car, Construction, Refrigerator, Truck, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import {
  GeneralInformationSchema,
  GeneralInformationValues,
} from '../_schemas/general-information.schema';

export function GeneralInformation() {
  const VEHICLE_OPTIONS = [
    { id: 'van', label: 'Бус', icon: Box },
    { id: 'truck', label: 'Камион', icon: Truck },
    { id: 'refrigerated', label: 'Хладилен', icon: Refrigerator }, // НОВО
    { id: 'trailer', label: 'Пътна помощ', icon: Car },
    { id: 'dump_truck', label: 'Самосвал', icon: Construction }, // НОВО
    { id: 'pickup', label: 'Баничарка', icon: Zap }, // НОВО
    { id: 'other', label: 'Друго', icon: ArrowRightLeft },
  ];

  const tc = useTranslations('Common.fields');

  const onSubmit = async (values: any) => {
    console.log(values);
  };
  const form = useForm<GeneralInformationValues>({
    resolver: zodResolver(GeneralInformationSchema),
    mode: 'onBlur',
    defaultValues: {
      service_name: '',
      vehicle: '',
      vehicle_characteristics: {
        load_capacity: 0,
        length: 0,
        width: 0,
        height: 0,
      },
      images: [],
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-12 pt-10">
        <FormField
          control={form.control}
          name="service_name"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel htmlFor="service_name">{tc('service_name.label')}</FormLabel>
              <FormControl>
                <Input
                  id="service_name"
                  type="text"
                  placeholder={tc('service_name.placeholder')}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="vehicle"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>{tc('vehicle.label')}</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="grid grid-cols-2 gap-4 md:grid-cols-4"
                >
                  {VEHICLE_OPTIONS.map((option) => (
                    <FormItem key={option.id}>
                      <FormControl>
                        <RadioGroupItem value={option.id} id={option.id} className="peer sr-only" />
                      </FormControl>
                      <FormLabel
                        htmlFor={option.id}
                        className="border-muted bg-popover hover:bg-accent hover:text-accent-foreground flex cursor-pointer flex-col items-center justify-between rounded-md border-2 p-4 transition-all peer-data-[state=checked]:border-orange-500 [&:has([data-state=checked])]:border-orange-500"
                      >
                        <option.icon className="mb-3 h-6 w-6" />
                        <span className="text-sm font-medium">{option.label}</span>
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormLabel>{tc('vehicle_characteristics.label')}</FormLabel>
        <div className="flex gap-10">
          <FormField
            control={form.control}
            name="vehicle_characteristics.load_capacity"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel htmlFor="vehicle_characteristics.load_capacity">
                  {tc('vehicle_load_capacity.label')}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="vehicle_characteristics.load_capacity"
                    type="number"
                    placeholder={tc('vehicle_load_capacity.placeholder')}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="vehicle_characteristics.length"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel htmlFor="vehicle_characteristics.length">
                  {tc('vehicle_length.label')}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="vehicle_characteristics.length"
                    type="number"
                    placeholder={tc('vehicle_length.placeholder')}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="vehicle_characteristics.width"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel htmlFor="vehicle_characteristics.width">
                  {tc('vehicle_width.label')}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="vehicle_characteristics.width"
                    type="number"
                    placeholder={tc('vehicle_width.placeholder')}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="vehicle_characteristics.height"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel htmlFor="vehicle_characteristics.height">
                  {tc('vehicle_height.label')}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="vehicle_characteristics.height"
                    type="number"
                    placeholder={tc('vehicle_height.placeholder')}
                    onChange={(e) => field.onChange(e.target.valueAsNumber)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel> {tc('vehicle_images.label')}</FormLabel>
              <FormControl>
                <ImageUploader value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
