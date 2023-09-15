import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { invitationSchema, invitationValues } from "./schema";
import Input from "../input";
import PhoneInput from "../input-phone";
import Modal from "../modal";
import Button from "../button";
import { useEffect, useState } from "react";
import ControllerField from "../controllerField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../config/lists";

const WelcomeForm = ({
  text = "¡Inicia tu Campaña!",
  className = "",
  email,
  type,
}) => {
  const [open, setOpen] = useState(false);
  const {
    formState: { errors },
    handleSubmit,
    control,
    reset,
    setError,
  } = useForm({
    defaultValues: { ...invitationValues },
    resolver: yupResolver(invitationSchema),
  });
  useEffect(() => {
    if (email) {
      reset({ ...invitationValues, email });
    }
  }, [email]);

  const [loading, setLoading] = useState(false);

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      const responseBody = await fetch(BASE_URL, {
        method: "POST",
        body: JSON.stringify(values),
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!responseBody.ok)
        return toast.error(
          "Parece que no podemos procesar tu soliticud por favor intente nuevamente"
        );

      await responseBody.json();
      toast.success(
        "El registo ha sido exitoso. Gracias por confiar ser parte de Shareflow"
      );
      handleClose();
    } catch (e) {
      toast.error(
        "Parece que no podemos procesar tu soliticud por favor intente nuevamente"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer theme="colored" />
      <div className={`w-full xs:max-w-[320px]  ${className}`}>
        <Button type={type} onClick={handleOpen}>
          {text}
        </Button>
      </div>
      <Modal
        title="¡Únete a la lista de espera!"
        onClose={handleClose}
        open={loading ? true : open}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-8 flex flex-col gap-6">
            <ControllerField
              name="name"
              label="Nombre"
              control={control}
              element={Input}
              error={errors?.name?.message}
            />
            <ControllerField
              name="lastName"
              label="Apellido"
              control={control}
              element={Input}
              error={errors?.lastName?.message}
            />
            <ControllerField
              name="email"
              label="Correo electronico"
              control={control}
              element={Input}
              error={errors?.email?.message}
            />
            <ControllerField
              name="phone"
              label="Whatsapp"
              control={control}
              element={PhoneInput}
              error={errors?.phone?.message}
              onBlur={(error) => {
                if (error) {
                  setError("phone", {
                    type: "custom",
                    message: "El numero de telefono no es valido",
                  });
                }
              }}
            />
          </div>
          <div className="flex justify-center sm:justify-end gap-6">
            <button
              disabled={loading}
              className={`bg-primary border-none text-white uppercase px-2 py-1 font-semibold rounded-md ${
                loading ? "opacity-50" : ""
              }`}
            >
              Registrarme
            </button>
            <button
              type="button"
              disabled={loading}
              onClick={handleClose}
              className={`border-2 border-secondary text-secondary uppercase px-2 py-1 font-semibold rounded-md ${
                loading ? "opacity-50" : ""
              }`}
            >
              Cancelar
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default WelcomeForm;
