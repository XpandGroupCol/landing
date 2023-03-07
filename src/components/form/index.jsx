
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'


import { invitationSchema, invitationValues } from './schema'
import Input from '../input'
import PhoneInput from '../input-phone'
import Modal from '../modal'
import Button from '../button'
import { useState } from 'react'
import ControllerField from '../controllerField'


const WelcomeForm = ({ text }) => {

  const [open, setOpen] = useState(false)
  const { formState: { errors }, handleSubmit, control, reset, setError } = useForm({
    defaultValues: { ...invitationValues },
    resolver: yupResolver(invitationSchema)
  })

  const handleClose = () => {
    setOpen(false)
    reset()
  }

  const handleOpen = () => {
    setOpen(true)
  }


  const onSubmit = async (values) => {
    try {
      console.log({values})
    } catch ({ response }) {
      console.log('error')
    }
  }

  return (
    <div>
     <div className='w-full sm:max-w-[320px] mx-auto'>
     <Button onClick={handleOpen} text={text} />
     </div>
      <Modal
        title='¡Únete a la lista de espera!'
        onClose={handleClose}
        open={open}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-8 flex flex-col gap-6'>
            <ControllerField
              name='name'
              label='Nombre'
              control={control}
              element={Input}
              error={errors?.name?.message}
            />
            <ControllerField
              name='lastName'
              label='Apellido'
              control={control}
              element={Input}
              error={errors?.lastName?.message}
            />
            <ControllerField
              name='email'
              label='Correo electronico'
              control={control}
              element={Input}
              error={errors?.email?.message}
            />
            <ControllerField
              name='phone'
              label='Whatsapp'
              control={control}
              element={PhoneInput}
              error={errors?.phone?.message}
              onBlur={(error) => {
                if (error) {
                  setError('phone', { type: 'custom', message: 'El numero de telefono no es valido' })
                }
              }}
            />
          </div>
          <div className='flex justify-center sm:justify-end gap-6'>
            <button
              className='bg-primary border-none text-white uppercase px-2 py-1 font-semibold rounded-md'>
              Registrarme
            </button>
            <button
            type='button'
            onClick={handleClose}
              className='border-2 border-secondary text-secondary uppercase px-2 py-1 font-semibold rounded-md'>
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default WelcomeForm