import { useState } from "react";
import { IApp } from "../MenuApplicationPage/MenuApplicationsPage";

const useForm = (initialForm: IApp) => {
  const [form, setForm] = useState<IApp>(initialForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, onSubmit: (form: IApp) => void) => {
    e.preventDefault();
    onSubmit(form);
    setForm(initialForm);
  };

  return [
    form,
    handleChange,
    handleSubmit,
  ] as const

}

export default useForm
