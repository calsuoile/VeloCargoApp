import React from "react";
import { Formik } from "formik";
import TextField from "@material-ui/core/TextField";
import DatePickers from "../../../../common/components/DatePickers";

const Step1 = ({ values, erros, handleChange, handleBlur }) => (
  <div>
    <h3>Introduction</h3>
    <TextField
      id="outlined-basic"
      label="Titre de l'annonce"
      variant="outlined"
      name="titre"
      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}
    />
    {erros.name && <p style={{ color: "red" }}>{erros.name}</p>}
    <DatePickers />
  </div>
);

const validate = {
  1: (values) => {
    const errors = {};
    if (!values.name) errors.name = "required";
    return errors;
  },
};
function FormAds(props) {
  const state = {
    formValues: {
      titre: "",
    },
    step: 1,
  };
  next = (formValues) =>
    this.setState((state) => ({
      step: state.step + 1,
      formValues,
    }));

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  const handleSubmit = (values, bag) => {
    const { step } = this.state;
    if (step === 3) {
      return this.onSubmit(values);
    } else {
      this.next(values);
      bag.setSubmitting(false);
    }
  };

  return (
    <div>
      <Formik
        initialValues={formValues}
        validate={validate[step]}
        onSubmit={this.handleSubmit}
        render={({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <Step1
                values={values}
                errors={errors}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            )}{" "}
          </form>
        )}
      />
    </div>
  );
}

export default FormAds;
