import { Heading, HStack, VStack } from '@chakra-ui/react';
import InputTextField from '../InputTextField/InputTextField';
import { SubmitHandler, useForm } from 'react-hook-form';
import BookingStepButtons from './BookingStepButtons';
import { useDispatch } from 'react-redux';
import {
  setBookingForm,
  updateBookingFormField,
} from '../../redux/slices/bookingsSlice';
import { useAppSelector } from '../../redux/hooks';
import { BookingForm } from '../../types/form';

interface FormValues {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  address: string;
  personalNumericCode: string;
}

const BookingStep3 = () => {
  const {
    firstName,
    lastName,
    telephone,
    email,
    address,
    personalNumericCode,
  } = useAppSelector(state => state.bookings.bookingFormData as BookingForm);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    clearErrors,
  } = useForm<FormValues>({
    mode: 'onChange',
  });
  const dispatch = useDispatch();
  const onSubmit: SubmitHandler<FormValues> = data => {
    dispatch(setBookingForm(data));
  };

  const onInputChange =
    (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(updateBookingFormField({ field, value: e.target.value }));
      setValue(field, e.target.value);
      clearErrors(field);
    };

  return (
    <form>
      <VStack spacing="1rem" alignItems="flex-start">
        <Heading m="1.2rem 0 0 0">Personal Information</Heading>
        <HStack
          gap="1rem"
          justifyContent="space-between"
          alignItems="flex-start"
          width="100%"
        >
          <InputTextField
            label="First Name"
            register={register('firstName', {
              required: 'First Name is required',
            })}
            error={errors.firstName}
            defaultValue={firstName}
            onChange={onInputChange('firstName')}
          />
          <InputTextField
            label="Last Name"
            register={register('lastName', {
              required: 'Last Name is required',
            })}
            error={errors.lastName}
            value={lastName}
            onChange={onInputChange('lastName')}
          />
        </HStack>
        <InputTextField
          label="Phone Number"
          register={register('telephone', {
            required: 'Phone Number is required',
          })}
          error={errors.telephone}
          defaultValue={telephone}
          onChange={onInputChange('telephone')}
        />
        <InputTextField
          label="E-mail"
          register={register('email', {
            required: 'E-mail is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          error={errors.email}
          defaultValue={email}
          onChange={onInputChange('email')}
        />
        <InputTextField
          label="Address"
          register={register('address', { required: 'Address is required' })}
          error={errors.address}
          defaultValue={address}
          onChange={onInputChange('address')}
        />
        <InputTextField
          label="Personal Numeric Code"
          register={register('personalNumericCode', {
            required: 'Personal Numeric Code is required',
          })}
          error={errors.personalNumericCode}
          defaultValue={personalNumericCode}
          onChange={onInputChange('personalNumericCode')}
        />
      </VStack>
      <BookingStepButtons onNext={handleSubmit(onSubmit)} isValid={isValid} />
    </form>
  );
};

export default BookingStep3;
