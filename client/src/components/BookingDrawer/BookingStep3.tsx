import { Heading, HStack, VStack } from '@chakra-ui/react';
import InputTextField from '../InputTextField/InputTextField';
import { SubmitHandler, useForm } from 'react-hook-form';
import BookingStepButtons from './BookingStepButtons';
import { useDispatch } from 'react-redux';
import {
  setBookingForm,
  updateBookingFormField,
} from '../../redux/slices/bookingsFormSlice';
import { useAppSelector } from '../../redux/hooks';
import { BookingForm } from '../../types/form';
import { validateCNP } from '../../utils/helperFunctions.utils';

interface FormValues {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  address: string;
  personalNumericCode: string;
  selectedLanguage: string;
}

const BookingStep3 = () => {
  const {
    firstName,
    lastName,
    telephone,
    email,
    address,
    personalNumericCode,
  } = useAppSelector(
    state => state.bookingsForm.bookingFormData as BookingForm
  );
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
      <VStack
        spacing="1rem"
        alignItems="flex-start"
        mb={{ base: '1.5rem', lg: '0' }}
        gap={{ base: '1rem', md: '2rem', lg: '1.5rem' }}
      >
        <Heading
          fontSize={{ base: '1.75rem', md: '3rem', lg: '2.5rem' }}
          m="1.2rem 0 0 0"
        >
          Personal Info
        </Heading>
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
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'First name can only contain letters',
              },
            })}
            error={errors.firstName}
            defaultValue={firstName}
            onChange={onInputChange('firstName')}
          />

          <InputTextField
            label="Last Name"
            register={register('lastName', {
              required: 'Last Name is required',
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'Last name can only contain letters',
              },
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
            pattern: {
              value: /^(\+?[0-9]{1,3})?[0-9]{10}$/,
              message: 'Phone number must be 10 digits or with a prefix',
            },
            maxLength: {
              value: 14,
              message: 'Phone number cannot exceed 14 characters',
            },
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
          register={register('address', {
            required: 'Address is required',
            minLength: {
              value: 10,
              message: 'Address must be at least 10 characters long',
            },
            maxLength: {
              value: 100,
              message: 'Address cannot be longer than 100 characters',
            },
            pattern: {
              value: /^[a-zA-Z0-9\s,'.-]*$/,
              message: 'Address contains characters that are not accepted',
            },
            validate: value => {
              const trimmedValue = value.trim();
              return (
                trimmedValue.length >= 10 ||
                'Address must be at least 10 characters long'
              );
            },
          })}
          error={errors.address}
          defaultValue={address}
          onChange={onInputChange('address')}
        />
        <InputTextField
          label="Personal Numeric Code"
          register={register('personalNumericCode', {
            required: 'Personal Numeric Code is required',
            validate: {
              validCNP: value =>
                validateCNP(value) || 'Invalid Personal Numeric Code (CNP)',
            },
          })}
          error={errors.personalNumericCode}
          defaultValue={personalNumericCode}
          onChange={onInputChange('personalNumericCode')}
        />
        ;
      </VStack>
      <BookingStepButtons onNext={handleSubmit(onSubmit)} isValid={isValid} />
    </form>
  );
};

export default BookingStep3;
